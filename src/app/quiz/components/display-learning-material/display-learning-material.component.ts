import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-learning-material',
  templateUrl: './display-learning-material.component.html',
  styleUrl: './display-learning-material.component.css'
})
export class DisplayLearningMaterialComponent {
  @Input() image: string ='';
  @Input() material: string ='';
  
  constructor() {}


}
