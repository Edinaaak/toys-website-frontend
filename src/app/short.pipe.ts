import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {

  transform(value: string, limit?: number): string | null {
    if(!value){

      return null;
    }

    let actualLimit = (limit)? limit: 3;
    //limit ?? 50;
      if(value.length < actualLimit)
        return value;
      else
        return value.substring(0,actualLimit) + "...";
  }

}
