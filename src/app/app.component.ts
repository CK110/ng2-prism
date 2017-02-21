import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';



  code = `console.log(222)`;


  code1 = `

  import { Component, Type } from '@angular/core';
  @Component({
    selector: 'my-app',
    template:\` my-app\`,
  })
  export class AppComponent {}

 `
}
