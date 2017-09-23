import { Button } from 'ui/button';
import { Image } from 'ui/image';
import { EventEmitter } from '@angular/core';
import { Component ,Directive} from '@angular/core';
import { EventData } from "data/observable";
import {ZoneComponent} from "../zone/zone.component";

@Component({
  selector: 'app-school',
  templateUrl:'./pages/schools/school.component.html' ,
  styles:[`.mdi {
    font-family: "MaterialIcons-Regular";
  }` ]
})
export class SchoolComponent  {
 zoneSelected:string=null;
 suburbSelected:string=null;
 boardSelected:string=null; 
 schoolSelected:string=null;
 menuBackTo:string=null;
 menuTo:string=null;
 constructor() {
  this.menuTo="zone";
  }
  public suburbSelectedEvent(suburbSelected: string) {
   // let button = <Button>args.object;
    //Object.keys(args.object)
    //this.state='out' ;
   // console.log(button.id);
  this.suburbSelected=suburbSelected;
  this.menuTo='board';
 // this.zoneSelected=null;
}
public onTappedBoard(args:EventData)
{
   let button = <Button>args.object;
   this.boardSelected=button.text;
   this.menuTo="school";
   //this.schoolSelected="vz";
}
public clearZone(args: EventData) {
this.menuTo="zone";
this.zoneSelected=null;
}
public clearSuburb(args: EventData) {
  
    this.suburbSelected=null;
   // this.zoneSelected=null;
    this.menuTo="suburb";
    //this.isPressed=false;
  }
public clearBoard(args: EventData) {
  let lbl = <Image>args.object
  //console.log();
  this.boardSelected=null;
  this.menuTo="board";
  //console.log(lbl.getpare);
 }
public zoneSelectedEvent(zoneSelected: string) {
   console.log("zone:"+zoneSelected);
   this.zoneSelected=zoneSelected;
   this.menuTo='suburb';
  //this.zoneToSuburbSelectionEvent.emit(zoneSelected);
 }
}