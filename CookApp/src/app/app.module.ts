import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/HomepageComponents/homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { AddFormComponent } from './components/AddFormComponents/add-form/add-form.component';
import { EditRecipeComponent } from './components/EditRecipeComponent/edit-recipe/edit-recipe.component';
import { SharedModule } from './shared/shared.module';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AddFormComponent,
    EditRecipeComponent,
    RecipesListComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
