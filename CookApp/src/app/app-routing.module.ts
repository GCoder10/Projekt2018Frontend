import { EditRecipeComponent } from './EditRecipeComponent/edit-recipe/edit-recipe.component';
import { AddFormComponent } from './HeadersComponents/add-form/add-form.component';
import { PageNotFoundComponent } from './PageNotFoundComponent/page-not-found/page-not-found.component';
import { HomepageComponent } from './HomepageComponents/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
