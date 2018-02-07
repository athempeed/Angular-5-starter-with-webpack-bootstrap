import { Component } from '@angular/core';



@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})

export class AppComponent {
    url = 'https://www.google.com';
    title: string;

    constructor() {
        this.title = 'Nexus API';
    }
}
