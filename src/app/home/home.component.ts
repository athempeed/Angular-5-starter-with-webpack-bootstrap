import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: require('./home.component.html'),
  styleUrls: [require('./home.component.scss')]
})
export class HomeComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
