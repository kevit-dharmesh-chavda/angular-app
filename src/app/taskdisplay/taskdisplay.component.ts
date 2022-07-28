import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { TaskContainService } from '../shred-folder/task-contain.service'
@Component({
  selector: 'app-taskdisplay',
  templateUrl: './taskdisplay.component.html',
  styleUrls: ['./taskdisplay.component.css']
})
export class TaskdisplayComponent implements OnInit {

  inputdata = [];
 
  constructor(private taskcontain: TaskContainService) { }

  ngOnInit() {
    this.inputdata = this.taskcontain.getdata();

  }

  over(litask1: HTMLInputElement, litask2: HTMLInputElement) {
   
    litask1.classList.add('hiddenShow');
    litask2.classList.add('hiddenShow');
  
  }
  out(litask1: HTMLInputElement, litask2: HTMLInputElement) {
    litask1.classList.remove('hiddenShow');
    litask2.classList.remove('hiddenShow');
  
  }
  edit( inputtask: HTMLInputElement) {

    inputtask.focus();
  }
  delete(index: number) {
    this.taskcontain.removeElement(index);
  }

}