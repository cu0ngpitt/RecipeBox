import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipeUrl = './assets/recipes/cheesecake.json';

  constructor(private http: HttpClient) { }

  getRecipes() {
    return this.http.get(this.recipeUrl);
  }
}
