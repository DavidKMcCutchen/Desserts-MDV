import { Component } from '@angular/core';


@Component({
  selector: 'dessert-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Desserts';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'treats', icon: 'view_list', title: 'Desserts'}
  ]
}
