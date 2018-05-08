import { NgModule } from "@angular/core";
import { AppRoutingModule } from './../app-routing.module';
import { FooterComponent } from './components/FootersComponents/footer/footer.component';
import { HeaderComponent } from './components/HeadersComponents/header/header.component';


@NgModule({
  imports: [
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
})


export class CoreModule { }