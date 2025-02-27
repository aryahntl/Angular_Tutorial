import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learningNg';
  welcomeMessage:String = 'Welcome to Angular 8';
  
  public WelcomeMessage():any{
    return 'Dear User ' +this.welcomeMessage;

  }
}