import { Pipe, PipeTransform } from '@angular/core';
import { IProducto } from './producto';

@Pipe({
  name: 'productoFilter'
})
export class ProductoFilterPipe implements PipeTransform {

  transform(value:IProducto[],args: string):IProducto[] {
    let filterr:string =args?args.toLocaleLowerCase():null;
    //el signo de pregunta ejercce como un if, posterior, del lado izq de los ":"
    //está el valor en caso de ser verdadero, y del lado derecho en caso 
    //de ser falso
    
    return filterr ? value.filter((product:IProducto)=>
    product.productName.toLocaleLowerCase().indexOf(filterr)!= -1):value;
  }

}
