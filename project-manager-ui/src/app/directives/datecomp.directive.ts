import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import * as moment from 'moment';
import { Input, Directive } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Directive({
  selector: '[appDatecomp]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DatecompDirective,
      multi: true
    }
  ]
})
export class DatecompDirective implements Validator {
  constructor() {}

  @Input('appDatecomp') compDate: string;
  @Input() opt: string;

  validate(control: AbstractControl): { [key: string]: any } | null {
    const source = control.value;
    /*moment(control.value)
      .add(-1, 'months')
      .toDate();*/
    const target = this.compDate.toString();
    /*moment(this.compDate)
      .add(-1, 'months')
      .toDate();*/

    console.log(control.value);
    console.log(this.compDate.toString());

    if (this.opt === 'less than') {
      if (target < source) {
        return {
          dateCompare: {
            valid: false
          }
        };
      }
    } else {
      if (target > source) {
        return {
          dateCompare: {
            valid: false
          }
        };
      }
    }

    return null;
  }
}
