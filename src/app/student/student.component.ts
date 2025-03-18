import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  firstName:String="Himanshu";
  lastName:String="Arya";
  gender:String="Male";
  age:number=23;
}
