import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { TaskContainService } from '../shred-folder/task-contain.service';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  
  @ViewChild('inputTask') inputtask:ElementRef ;

  constructor(private taskcontain:TaskContainService){}
  
  addTask(){
    if(this.inputtask.nativeElement.value == ""){
      alert("Please Enter a Task");
    }
    else{
      this.taskcontain.addData(this.inputtask.nativeElement.value);
      this.inputtask.nativeElement.value="";
    }    
  }
 

  ngOnInit(): void {
  }

}
