import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNameOfRecipe'
})
export class FilterNameOfRecipePipe implements PipeTransform {

  transform(recipes: any, termName: any): any {

    // tslint:disable-next-line:curly
    if (termName === undefined) return recipes;

    return recipes.filter(function(recipe) {
        return recipe.name.toLowerCase().includes(termName.toLowerCase());
    });

  }
}
