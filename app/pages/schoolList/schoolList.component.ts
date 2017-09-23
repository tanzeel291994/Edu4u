import { ItemEventData } from 'tns-core-modules/ui/list-view';
import { Component, Output, OnInit, Input} from '@angular/core';

@Component({
  selector: 'my-school-list',
  templateUrl: './pages/schoolList/schoolList.component.html'
})
export class SchoolListComponent implements OnInit  {
schoolsList:string[];
@Input() boardParam:string;
  constructor() {}
  ngOnInit() {
    // this.zoneArg=this.zoneParam;
    console.log(this.boardParam);
     if(this.boardParam!=null) 
      this.schoolsList=schools;
  }
  public onSchoolItemTap(args:ItemEventData)
  {
   // let lbl = <Label>args.view.getViewById("sub" + args.index);
    console.log("in");
    //this.suburbSelectedEvent.emit(lbl.text);
  }
}

const schools:string[]=[
  "Rajhans Vidayalaya",
  "Jhanki Devi",
  "Oberio International",
  "Ryan International",
  "Gyan Kendra",
  "Wadia"
];