import { Component, OnInit } from '@angular/core';

// Classes imports
import { Ingredients }        from '../../ingredients';
import { Instructions }       from '../../instructions';

// Service imports
import { RecipeService }      from '../../services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  lists: Ingredients[];
  steps: Instructions[];

  checked: boolean = false;
  count = 0;

  favorite: boolean = false;//favorite button

  constructor(public recipe: RecipeService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipe.getRecipes()
      .subscribe((data: any) => {
        this.lists = data.ingredients;
        this.steps = data.instructions;
      });
  }

  toggleFavs() {
    this.favorite = !this.favorite;
  }

  toggleAll() {
    let length = this.lists.length;
    let i;

    this.checked = !this.checked;

    if(this.checked === true) {
      for(i=0; i<length; i++){
        this.lists[i].checked = true;
      }
      this.count = length;
    }

    if(this.checked === false) {
      for(i=0; i<length; i++){
        this.lists[i].checked = false;
      }
      this.count = 0;
    }
  }

  verifyAllChecked(i) {
    let length = this.lists.length;
    
    if(this.lists[i].checked === undefined || this.lists[i].checked === false) {
      this.lists[i].checked = true;
      this.count++;
    } else if(this.lists[i].checked === true) {
      this.count--;
    }

    if(this.count === length) {
      this.checked = true;
    } else {
      this.checked = false;
    }
  }
}
