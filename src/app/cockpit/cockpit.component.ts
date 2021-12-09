import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverSelected=new EventEmitter<{serverName:string, serverContent:string}>();
  @Output() blueprintSelected= new EventEmitter<{serverName:string, serverContent:string}>();
  
  //newServerName = '';
  //newServerContent = '';

  @ViewChild('serverContentInput', {static:true}) serverContent!:ElementRef;

  constructor() { }

  ngOnInit(): void {
    
  }

  
  

 onAddServer(serverName) {
  
   this.serverSelected.emit({serverName:serverName, serverContent:this.serverContent.nativeElement.value});
  /*  this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });*/
  }

  onAddBlueprint(blueprintName:HTMLInputElement) {
    this.blueprintSelected.emit({serverName:blueprintName.value, serverContent:this.serverContent.nativeElement.value});
  /*  this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });*/
    }

}


