import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meal-thumbnail',
  templateUrl: './meal-thumbnail.component.html',
  styleUrls: ['./meal-thumbnail.component.css']
})
export class MealThumbnailComponent {
  @Input() meal : any
}
