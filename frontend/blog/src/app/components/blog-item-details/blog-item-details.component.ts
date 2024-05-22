import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-item-details',
  standalone: true,
  imports: [],
  templateUrl: './blog-item-details.component.html',
  styleUrl: './blog-item-details.component.css'
})
export class BlogItemDetailsComponent implements OnInit {
  public image: string = '';
  public text: string = '';
  public title: string = '';

  constructor(private service: DataService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    let id: string = '';
    this.route.paramMap.subscribe((params: any) => {
      id = params.get('id');
    })

    this.service.getOne(id).subscribe((res: any) => {
      this.image = res['image'];
      this.text = res['text'];
      this.title = res['title'];
    })
  }

}
