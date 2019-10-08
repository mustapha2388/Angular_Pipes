import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PipesExample';
  appareils = [
    {
      name: 'Iphone',
      status: false,
      lastUpdate: new Date()
    },
    {
      name: 'Xbox One',
      status: true,
      lastUpdate: new Date()
    },
    
  ];
}
