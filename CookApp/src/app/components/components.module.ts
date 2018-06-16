import { WorkersService } from './shared/services/workers.service';
import { NgModule } from "@angular/core";
import { SharedModule } from './../shared/shared.module';
import { AddFormComponent } from './AddFormComponent/add-form/add-form.component';
import { EditRecipeComponent } from './EditRecipeComponent/edit-recipe/edit-recipe.component';
import { MongodbComponent } from './mongodb/mongodb.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    EditRecipeComponent,
    AddFormComponent,
    MongodbComponent
  ],
  providers: [ WorkersService ],
  exports: [
    EditRecipeComponent,
    AddFormComponent,
    MongodbComponent
  ],
})


export class ComponentsModule { }
