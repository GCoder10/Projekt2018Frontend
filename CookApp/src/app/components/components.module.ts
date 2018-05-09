import { NgModule } from "@angular/core";
import { SharedModule } from './../shared/shared.module';
import { HomepageComponent } from './HomepageComponent/homepage/homepage.component';
import { AddFormComponent } from './AddFormComponent/add-form/add-form.component';
import { EditRecipeComponent } from './EditRecipeComponent/edit-recipe/edit-recipe.component';
import { GenerateTableButtonComponent } from './ButtonsComponents/generate-table-button/generate-table-button.component';
import { ResetTableButtonComponent } from './ButtonsComponents/reset-table-button/reset-table-button.component';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    EditRecipeComponent,
    AddFormComponent,
    HomepageComponent,
    GenerateTableButtonComponent,
    ResetTableButtonComponent
  ],
  exports: [
    EditRecipeComponent,
    AddFormComponent,
    HomepageComponent
  ],
})


export class ComponentsModule { }