import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../common/product';

@Component({
  selector: 'app-products-list',
  standalone: false,
  templateUrl: './products-list-grid.component.html',
  // templateUrl: './products-list-table.component.html',
  // templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit{


  products: Product[] = [];

  constructor(private productSercice: ProductService) {

  }

  ngOnInit(): void{
    this.listProducts();
  }

  listProducts() {
    this.productSercice.getProductList().subscribe(
      data => {
        this.products = data;
      }
    )
  }

}
