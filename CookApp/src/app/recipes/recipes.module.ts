import { NgModule } from "@angular/core";
import { SharedModule } from './../shared/shared.module';
import { RecipesComponent } from './components/RecipesComponent/recipes/recipes.component';
import { ResetTableButtonComponent } from './shared/components/ButtonsComponents/reset-table-button/reset-table-button.component';
import { GenerateTableButtonComponent } from './shared/components/ButtonsComponents/generate-table-button/generate-table-button.component';
import { RecipesService } from './shared/services/recipes.service';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    RecipesComponent,
    ResetTableButtonComponent,
    GenerateTableButtonComponent
  ],
  providers: [ RecipesService ],
  exports: [
    RecipesComponent
  ],
})


export class RecipesModule { }