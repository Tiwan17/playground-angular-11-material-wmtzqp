import { Pipe, PipeTransform } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'timeDuration',
})
export class TimeDurationPipe implements PipeTransform {
  transform(val: string, refreshTime?: number): any {
    return refreshTime
      ? interval(+refreshTime).pipe(map(() => this.getResultMessage(val)))
      : this.getResultMessage(val);
  }

  getResultMessage(val: string): string {
    return `${this.getDifference(new Date(), new Date(val))} ms`;
  }

  getDifference(date1: Date, date2: Date): number {
    return Math.abs(date1.getTime() - date2.getTime());
  }
}
