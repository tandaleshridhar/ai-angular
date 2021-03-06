import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = 'http://localhost:8080/angular/ai/ai_api/customer/';

  constructor(private http:HttpClient) { }

  getCustomers(){
    return this.http.get(this.url + 'view.php');
  }

  getCustomerDetails(id){
    return this.http.get(this.url + 'view_one.php?id=' + id);
  }  

  createCustomer(data){
    return this.http.post(this.url + 'create.php', data);
  }

  updateCustomer(data){
    return this.http.post(this.url + 'update.php', data);
  }

  deleteCustomer(id){
    return this.http.delete(this.url + 'delete.php?id=' + id);
  }
}
