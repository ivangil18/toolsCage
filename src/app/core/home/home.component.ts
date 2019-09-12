import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clickCounter = 0;
  name: string;

  constructor() {}

  ngOnInit() {}

  countClick() {
    this.clickCounter += 1;
  }

  setClasses() {
    const classes = {
      active: this.clickCounter > 4,
      nonactive: this.clickCounter < 4
    };

    return classes;
  }
}
