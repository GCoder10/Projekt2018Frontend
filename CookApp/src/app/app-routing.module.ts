import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './shared/components/PageNotFoundComponent/page-not-found/page-not-found.component';
import { EditRecipeComponent } from './components/EditRecipeComponent/edit-recipe/edit-recipe.component';
import { AddFormComponent } from './components/AddFormComponent/add-form/add-form.component';
import { HomepageComponent } from './recipes/components/HomepageComponent/homepage/homepage.component';


const appRoutes: Routes = [

  { path: '', component: HomepageComponent },
  { path: 'dodawanie', component: AddFormComponent },
  { path: 'edycja', component: EditRecipeComponent },


  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
