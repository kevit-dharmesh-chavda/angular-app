import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-1';
  inputdata = [];
  addedInputTask(inputdatafrom:string){
    // console.log()
       this.inputdata.push(inputdatafrom);
      // console.log(inputdatafrom);
  }

}
