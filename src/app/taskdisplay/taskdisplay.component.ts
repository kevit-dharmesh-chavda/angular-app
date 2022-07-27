import { Component, Input, OnInit } from '@angular/core';
import { TaskContainService } from '../shred-folder/task-contain.service'
@Component({
  selector: 'app-taskdisplay',
  templateUrl: './taskdisplay.component.html',
  styleUrls: ['./taskdisplay.component.css']
})
export class TaskdisplayComponent implements OnInit {

  
  inputdata = [];
  constructor(private taskcontain:TaskContainService){}

ngOnInit(){
  this.inputdata = this.taskcontain.getdata(); 
  console.log(this.inputdata);
} 
  edit(index:number){
      
  }
  delete(index:number){
     this.taskcontain.removeElement(index);
  } 
 
}