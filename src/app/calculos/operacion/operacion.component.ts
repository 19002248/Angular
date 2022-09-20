import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.css']
})
export class OperacionComponent {

    total:number=0;
    numero1:string="";
    numero2:string="";
    tepsto:string ="";
  
    ngOnInit(): void {
    }
  
    operacion(){
      if(this.tepsto=="s"){
        this.total=parseInt(this.numero1)+parseInt(this.numero2);
      }
      if(this.tepsto=="r")
      {
        this.total=parseInt(this.numero1)-parseInt(this.numero2);
      }
      if(this.tepsto=="d")
      {
        this.total=parseInt(this.numero1)/parseInt(this.numero2);
      }
      if(this.tepsto=="m")
      {
        this.total=parseInt(this.numero1)*parseInt(this.numero2);
      }
    }
}