import { Component, Input, OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnChanges {

  @Input()  simpleInput :String;

  ngOnChanges(changes:SimpleChanges){
    for (let PropertyName in changes){
      let change=changes[PropertyName];
      let current=JSON.stringify(change.currentValue);
      let previous=JSON.stringify(change.previousValue);

      console.log(PropertyName+ ':current Value= '+current+ ', Previous Value= '+previous);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
