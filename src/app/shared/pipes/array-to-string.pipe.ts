import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'arrayToString'
})
export class ArrayToStringPipe implements PipeTransform {
    transform(input: Array<any> | undefined | null): string {
        if (input)
            return input.join(' , ');
        return '';
    }
}
