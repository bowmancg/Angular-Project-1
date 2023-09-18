import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Carbonara', 'Hard to make.', 'https://imgs.search.brave.com/wdEQxXZwUbPS8mU4w2CJfrNrsTCzGGdl4pUtDisdKrg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/Njg2NDY4My9waG90/by9zcGFnaGV0dGkt/Y2FyYm9uYXJhLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1J/X3hLSnBCdTF5a054/czJiaVpTaW5Oc2Yt/TWc1MV9fYlNyZ253/aDdjdzZNPQ')
  ]

  constructor() {}

  ngOnInit(): void {
    
  }
}
