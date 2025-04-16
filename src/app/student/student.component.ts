import { Component, Input, OnInit, OnChanges,SimpleChange } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponentimplements OnChanges{
  @Input() myName;
  @Input() myAge;

  ngOnChanges(changes:SimpleChange){
    for (let propertyName in changes){
      Let change=changes[propertyName]
    }

  }
}
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public firstName: String = "Krishna";
  lastName: String = "Arya";
  gender: String = "Male";
  age: number = 23;
  date = new Date();

  public names = ["Himanshu", "karan", "Rahul", "Rohit", "Rajat"];

  public switch: boolean = true;

  toggleSwitch() {
    this.switch = !this.switch;
  }

  public isLogedIn: boolean = false;

  toggleLogedIn() {

    this.isLogedIn = !this.isLogedIn;
  }

  // getFormattedTime() {
  //   return new Date().toLocaleTimeString('en-Us', {
  //     hour: '2-digit',
  //     minute: '2-digit',
  //     second: '2-digit',
  //     hour12: true
  //   }).toUpperCase();
  // }
}



