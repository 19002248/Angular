import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EAngular';
  
  pelicula={
    titulo:'SpiderMan',
    fechaLanzamiento: new Date(),
    precio: 235.75,
  }

  duplicarValor(x:number):number{
    return x*2;
  }
}
