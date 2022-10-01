import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
  //Cantidades ingresadas
  nombree:string="";
  compradores:number=0; //numero de compradores
  tarjetaCine:string=""; //si se tiene o no la tarjeta especial 
  ciboletas:number=0; //cant ingresada de boletas

  //Variables para almacenar
  //comprador:string="";
  pagar:number=0; //aquí almaccenamos el costo final final
  cbmax:number=0; //aquí almacenamos la multiplicación de la cant de compradores 
                  //por el numero máximo de boletas, para evaluar que no compre más 
                  //por persona
  pagardesc:number=0;
  mensajeerror:string="Supera las 7 boletas por persona, ingrese un número menor";
  mensaje:string="";
  /* 
  Condiciones:
   2 boletas no hay descuento
   de 3 a 5 = 10% de descuento
   más de 5 boletas = 15% de descuento

   además, si la compra es con la tarjeta del cine = 10% descuento 
   o 10% adicional 
  */
  ngOnInit(): void {
  }
  
  totalPago(){
    //this.pasarNombre();
    this.cbmax=this.compradores*7;
    if(this.ciboletas<= this.cbmax){
      if (this.tarjetaCine=="s")/*Si hay tarjeta o nel*/{
        if (this.ciboletas<=2) {
          this.pagardesc=(this.ciboletas*12);
          this.pagar=this.pagardesc-(this.pagardesc*.10);
          this.mensaje=`Para: ${this.nombree} es de $ ${this.pagar}`
        }
        if (this.ciboletas>=3&&this.ciboletas<=5) {
          this.pagardesc=((this.ciboletas*12)-((this.ciboletas*12)*.10));
          this.pagar=this.pagardesc-(this.pagardesc*.10);
          this.mensaje=`Para: ${this.nombree} es de $ ${this.pagar}`
        }
        if (this.ciboletas>5) {
          this.pagardesc=((this.ciboletas*12)-((this.ciboletas*12)*.15));
          this.pagar=this.pagardesc-(this.pagardesc*.10);
          this.mensaje=`Para: ${this.nombree} es de $ ${this.pagar}`
        }
      }
      if(this.tarjetaCine=="n"){  
        if (this.ciboletas<=2) {
          this.pagar=(this.ciboletas*12)
          this.mensaje=`Para: ${this.nombree} es de $ ${this.pagar}, con nuestra tarjeta te ganarías un 10% de descuento adicional`
        }
        if (this.ciboletas>=3&&this.ciboletas<=5) {
          this.pagar=((this.ciboletas*12)-((this.ciboletas*12)*.10));
          this.mensaje=`Para: ${this.nombree} es de $ ${this.pagar}, con nuestra tarjeta te ganarías un 10% de descuento adicional`
        }
        if (this.ciboletas>5) {
          this.pagar=((this.ciboletas*12)-((this.ciboletas*12)*.15));
          this.mensaje=`Para: ${this.nombree} es de $ ${this.pagar}, con nuestra tarjeta te ganarías un 10% de descuento adicional`
        }
      }
    }
    else{
      this.mensaje="No puedes realizar la compra de tantos boletos, recuerda que son 7 por persona";
    }
  }
  // pasarNombre(){
  //  this.comprador=this.nombree;
  //}
}
