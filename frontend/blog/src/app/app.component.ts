import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlogHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
}
