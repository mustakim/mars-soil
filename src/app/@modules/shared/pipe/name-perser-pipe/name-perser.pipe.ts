import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namePerser'
})
export class NamePerserPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
