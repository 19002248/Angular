import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  totaltabla:any;
  ntabla:string="";
  texto:string[]=[];
//  totaltabla:string[]=[];

  ngOnInit(): void {
  }

  public ttabla(){
    for (let i = 1; i <11; i++) {
      this.texto[i]= (` ${this.ntabla} x ${i} = ${i*parseInt(this.ntabla)}`);
     this.totaltabla=this.texto;
    }    
  }
}
