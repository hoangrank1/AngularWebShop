import { Component, OnInit } from '@angular/core';

const ROWS_HEIGHT: {[id: number]: number} = {
  1: 400,
  3: 335,
  4: 350,
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  cols: any | number = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: any | string = "abs";
  
  constructor(

  ) {}

  ngOnInit(): void {
      
  }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
}
