import { NgModule } from "@angular/core";
import { SharedModule } from './../shared/shared.module';
import { HomepageComponent } from './components/HomepageComponent/homepage/homepage.component';
import { GenerateTableButtonComponent } from './shared/components/ButtonsComponents/generate-table-button/generate-table-button.component';
import { ResetTableButtonComponent } from './shared/components/ButtonsComponents/reset-table-button/reset-table-button.component';
import { RecipesService } from './shared/services/recipes.service';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HomepageComponent,
    GenerateTableButtonComponent,
    ResetTableButtonComponent
  ],
  providers: [ RecipesService ],
  exports: [
    HomepageComponent
  ],
})


export class RecipesModule { }