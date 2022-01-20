import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(totalArray: any[], filterString:string, propertyname:string): any {
    const resultArray = []
    if(totalArray.length ===0 || filterString ==='' || propertyname ==='')
    {
      return totalArray;
    }

    for ( const item of totalArray){
      if(item[propertyname].includes(filterString) ){
        resultArray.push(item)
      }
    } 
    return resultArray
  }

}
