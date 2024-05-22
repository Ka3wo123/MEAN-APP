import { Component, Input, OnInit } from '@angular/core';
import { BlogItemImageComponent } from "../blog-item-image/blog-item-image.component";
import { BlogItemTextComponent } from "../blog-item-text/blog-item-text.component";
import { BlogItemTitleComponent } from '../blog-item-title/blog-item-title.component';

@Component({
    selector: 'blog-item',
    standalone: true,
    imports: [BlogItemTitleComponent, BlogItemImageComponent, BlogItemTextComponent ],
    templateUrl: './blog-item.component.html',
    styleUrl: './blog-item.component.css'
})
export class BlogItemComponent {
    @Input() public title?: string;
    @Input() public image?: string;
    @Input() public text?: string;
    @Input() public id?: string;



}
