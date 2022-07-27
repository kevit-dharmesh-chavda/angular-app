
export class TaskContainService{
    inputdata = [];
   
    addData(task:string){
      this.inputdata.push(task);
    }
    
    removeElement(index:number){
       this.inputdata.splice(index,1);
     }
          
    getdata(){
      return this.inputdata;
  }
}