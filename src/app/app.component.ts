import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learningNg';
  username:String="";
  imageURL:string="assets/hanuman.jpg";
  welcomeMessage:String = 'Welcome to Angular 8';
  
  ChangeMessage(){
    this.welcomeMessage='Kese ho app';
  }

  ResetMessage(){
    this.welcomeMessage='Welcome to Angular 8';
  }

  public WelcomeMessage():any{
    return 'Dear User ' +this.welcomeMessage;

  }
  ButtonTestSize:number=20;
  applyBold: String='bold';

  applyStyle(){
    var myStyles={
      'font-size.px':this.ButtonTestSize,
      'font-weight':this.applyBold,
      'color':'red'

    }
    return myStyles;
  }
  count:number=0;

  increaseCount(){
    this.count++;
  }
  decreaseCount(){
    this.count--;
  }
}