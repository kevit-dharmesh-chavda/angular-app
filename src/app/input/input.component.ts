import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() addInputTask = new EventEmitter<string>();
  @ViewChild('inputTask') inputtask:ElementRef ;

  addTask(){
       this.addInputTask.emit(this.inputtask.nativeElement.value);
      //  console.log(this.inputtask.nativeElement.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
