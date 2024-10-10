import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})

export class RolesComponent implements OnInit {

  ngOnInit(): void {
    alert("hii")
  }








  // //variables
  // firstname: String = "Himanshu";
  // age=22;
  // isActive:boolean=false;

  // currectDate:Date= new Date();

  // email="arya.h.ntl@gmail.com";

  // inputType:string="checkbox";

  // state:string=""

  // // function 
  // showWelcomeAlert(){
  //   alert("Hello ji kese ho?")
  // }

  // showMessage(message:string){
  //   alert(message)
  // }
}
