import { Pipe, PipeTransform } from '@angular/core';
import { EnumGender } from 'src/app/@library/site.enum';

@Pipe({
  name: 'namePerser'
})
export class NamePerserPipe implements PipeTransform {

  transform(value: string, gender: EnumGender): string {
    return gender === EnumGender.Male ? `Mr ${value}` : `Mrs ${value}`;
  }
}
