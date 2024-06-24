import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { BlogItemTextComponent } from '../blog-item-text/blog-item-text.component';
import { CommonModule } from '@angular/common';
import {tap, catchError } from 'rxjs'
import { NOT_FOUND } from '../../error';
import { BlogItemImageComponent } from '../blog-item-image/blog-item-image.component';
import { BlogItemTitleComponent } from '../blog-item-title/blog-item-title.component';
import { Post } from '../../post';

@Component({
  selector: 'app-blog-item-details',
  standalone: true,
  imports: [BlogItemTextComponent, BlogItemImageComponent, BlogItemTitleComponent, CommonModule],
  templateUrl: './blog-item-details.component.html',
  styleUrl: './blog-item-details.component.css'
})
export class BlogItemDetailsComponent implements OnInit {
  public id: string = '';
  public image: string = '';
  public text: string = '';
  public title: string = '';  
  public error: string = '';
  public item: Post | null = null;

  constructor(private service: DataService, private route: ActivatedRoute) {

  }

   ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') ?? '';
      if (this.id) {
        this.getPost();
      }
    });
  }

  getPost() {    
    return this.service.getOne(this.id).pipe(
      tap((result: Post[]) => {
        this.item = result[0];        
      }),
      catchError((error) => {
        this.error = NOT_FOUND.message;
        throw error;
      })
    ).subscribe();
  }

  
}
