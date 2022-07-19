import { Component, OnInit, HostListener } from '@angular/core';
import { TastenArr } from './tastenArr';

@Component({
  selector: 'app-tastatur',
  templateUrl: './tastatur.component.html',
  styleUrls: ['./tastatur.component.scss']
})
export class TastaturComponent implements OnInit {

  tastenArr: any;
  tasten: any;
  key: any;
  
  constructor(
  ) {
    this.tastenArr = new TastenArr;
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyPress(event: KeyboardEvent) {
    this.key = this.getKey(event);
    for(let i=0; i<this.tasten.length; i++) {
      if(this.tasten[i].key == (this.key)) {
        (<HTMLInputElement>document.getElementById(this.key)).style.opacity = "1";
      }
    }
    
    
  }
  @HostListener('document:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) { 
    this.key = this.getKey(event);
    for(let i=0; i<this.tasten.length; i++) {
      if(this.tasten[i].key == (this.key)) {
        (<HTMLInputElement>document.getElementById(this.key)).style.opacity = "0";
      }
    }
  }

  ngOnInit() {
    this.tasten = this.tastenArr.tasten;
    
  }

  getKey(event:any) {
    let code = event.code;
    if(code.includes('Key')) {
      code = code.toLowerCase();
      code = code.replace('key','');
    }else if(code.includes('Digit')) {
      code = code.toLowerCase();
      code = code.replace('digit','');
    }
    return code;
  }

}
