import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTimeForPrepare'
})
export class FilterTimeForPreparePipe implements PipeTransform {


 transform(recipes: any, termTime: any): any {
    // tslint:disable-next-line:curly
    if (termTime === undefined) return recipes;

    return recipes.filter(function(recipe) {
        return recipe.time.includes(termTime);
    });

}
}
