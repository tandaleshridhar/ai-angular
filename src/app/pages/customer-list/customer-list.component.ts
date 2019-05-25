import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from "../../services/customer.service";
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.sass']
})

export class CustomerListComponent implements OnInit {
  public customers: any = [];
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'mobile','details','update','delete'];

  dataSource = this.customers;
  @ViewChild('customersTable') Table;


  public dataTable:any;
  constructor(private customerService:CustomerService, private router: Router) { }

  ngOnInit() {
    this.loadCustomers();
  }

  loadCustomers(){
    this.customerService.getCustomers().subscribe(
      customersData => {
        this.customers = customersData;       
      }
    );
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  public redirectToDetails = (id: number) => {
    this.router.navigate(['/customer-info']);
  }

  public redirectToUpdate = (id: number) => {
    this.router.navigate(['/customer-info']);
  }

  public redirectToDelete = (id: number) => {
    this.customerService.deleteCustomer(id);
  }

  getNavigation(link,id){
    if(id === ''){
      this.router.navigate([link]);
    }else{
      this.router.navigate([link+'/'+id]);
    }
  }

}
