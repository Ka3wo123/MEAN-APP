import { Component, OnInit, Input } from '@angular/core';
import { DataService } from "../../services/data.service";
import { BlogItemComponent } from "../blog-item/blog-item.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { FilterTextPipe } from '../../pipes/filter-text.pipe';
import { AuthService } from '../../services/auth.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'blog',
  standalone: true,
  imports: [HttpClientModule, BlogItemComponent, CommonModule, FilterTextPipe],
  providers: [DataService, AuthService],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  public items: any;
  @Input() filterText: string = '';
  public finished: boolean = false;

  constructor(private service: DataService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {    
    this.service.getAll().subscribe(response => {
      this.items = response;
    })
  }

  getOne(id: string) {
    this.service.getOne(id).subscribe(response => {
      this.items = response;
    })
  }



}