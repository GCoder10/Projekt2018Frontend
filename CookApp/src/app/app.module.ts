import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RecipesModule } from './recipes/recipes.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    CoreModule,
    ComponentsModule,
    RecipesModule
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
