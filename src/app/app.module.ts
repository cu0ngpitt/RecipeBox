import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { CheckboxesComponent } from './components/recipe/checkboxes/checkboxes.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    CheckboxesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
