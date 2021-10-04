import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductDataSource} from './product-datasource';
import { Product } from '../models/product.model';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit,AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Product>;
  dataSource: ProductDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  products: Product[]; 
  displayedColumns = ['id', 'name', 'brand', 'price'];

  constructor(private productService: ProductService) {
    this.dataSource = new ProductDataSource();
  }


  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products=> {this.products = products 
        console.log(this.products)
        this.dataSource.sort = this.sort;
        this.dataSource.data = this.products;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
      }
    )

  }
  
  ngAfterViewInit(): void {
    console.log("list products: ",this.products)
   
  }
}
