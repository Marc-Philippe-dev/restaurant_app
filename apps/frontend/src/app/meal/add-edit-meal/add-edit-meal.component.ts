import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PopupAddEditMealComponent } from '../popup-add-edit-meal/popup-add-edit-meal.component';
import { MatDialog } from '@angular/material/dialog';
import { MealService } from 'src/app/core/meal/meal.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


@Component({
  selector: 'app-add-edit-meal',
  templateUrl: './add-edit-meal.component.html',
  styleUrls: ['./add-edit-meal.component.css']
})
export class AddEditMealComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'price', 'description', 'action'];

  meals
  dataSource
  @ViewChild(MatPaginator) paginator: MatPaginator;



  constructor(private dialogService: MatDialog, private mealService: MealService) { }

  ngOnInit(): void {

    this.getAllMeal();
  
  }

  ngAfterViewInit() {
  }

  deleteMeal(id: number) {
    this.mealService.deleteMeal(id).subscribe(
      {
        next: (res) => {
          alert("Meal deleted!")
          this.getAllMeal();
        },
        error: console.log
      }
    )
  }

  getAllMeal() {
    this.mealService.getAll().subscribe(data => {
      this.meals = data;
      this.dataSource = new MatTableDataSource<any>(this.meals);
      this.dataSource.paginator = this.paginator;
    })
  }

  openEditDeleteMeal() {
    this.dialogService.open(PopupAddEditMealComponent)
  }


}
