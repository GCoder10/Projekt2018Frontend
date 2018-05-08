import { NgModule } from '@angular/core';
import { EditRecipeComponent } from './components/EditRecipeComponent/edit-recipe/edit-recipe.component';
import { HomepageComponent } from './components/HomepageComponent/homepage/homepage.component';
import { AddFormComponent } from './components/AddFormComponent/add-form/add-form.component';
import { RecipesComponent } from './components/RecipesComponent/recipes.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AddFormComponent,
    EditRecipeComponent,
    RecipesComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
