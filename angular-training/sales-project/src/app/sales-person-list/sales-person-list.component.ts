import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  standalone: false,
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {
  
  // create an array of objcests
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kumar", "anup.kamar@luv2code", 50000),
    new SalesPerson("John", "Doe", "john.doe@luv2code", 40000),
    new SalesPerson("Claire", "Murphy", "claire.murphy@luv2code", 90000),
    new SalesPerson("Mai", "Truong", "mai.truong@luv2code", 60000),
  ]

}
