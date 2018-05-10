import { NgModule } from "@angular/core";
import { SharedModule } from './../shared/shared.module';
import { AddFormComponent } from './AddFormComponent/add-form/add-form.component';
import { EditRecipeComponent } from './EditRecipeComponent/edit-recipe/edit-recipe.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    EditRecipeComponent,
    AddFormComponent
  ],
  exports: [
    EditRecipeComponent,
    AddFormComponent
  ],
})


export class ComponentsModule { }