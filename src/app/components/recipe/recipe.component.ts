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
  // Output() update = new EventEmitter();

  lists: Ingredients[];
  steps: Instructions[];

  selectAllButton: boolean;
  count: number = 0;  // to verify if all items are checked

  favorite: boolean = false;  // favorite button

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
    const length = this.lists.length;

    this.selectAllButton = !this.selectAllButton;
    console.log(this.selectAllButton);

    if(this.selectAllButton) {
      for(let i=0; i<length; i++){
        this.lists[i].checked = true;
      }
      this.count = length;
    }

    if(!this.selectAllButton) {
      for(let i=0; i<length; i++){
        this.lists[i].checked = false;
      }
      this.count = 0;
    }
  }

  verifyAllChecked() {
    const length = this.lists.length;

    if(this.count === length) {
      this.selectAllButton = true;
    }
    else if(this.count < length) {
      this.selectAllButton = false;
    }
  }

  changeCheckboxes(list, event) {
    list.checked = event.checked;

    if(event.checked) {
      this.count++;
    }
    if(!event.checked) {
      this.count--;
    }
  }
}
