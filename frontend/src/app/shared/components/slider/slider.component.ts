import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input()
  title:string

  @Input()
  maxprice:number = 1000;

  @Output()
  sliderValue = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  sliderValChanged(value){
    this.sliderValue.emit(value.value);
  }
}
