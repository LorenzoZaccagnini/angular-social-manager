import { Component, OnInit } from '@angular/core';
import { CustomerService, Customer, CustomerSearchCriteria } from './../../util/get-pub.service';

@Component({
  selector: 'app-allpub',
  templateUrl: './allpub.component.html',
  styleUrls: ['./allpub.component.scss']
})
export class AllpubComponent implements OnInit {
  customers: Customer[];

  constructor(private service: CustomerService){}

  getCustomers(criteria: CustomerSearchCriteria){
     this.customers = this.service.getCustomers(criteria);
  }

  onSorted($event){
    this.getCustomers($event);
  }

  ngOnInit(){
    this.getCustomers({sortColumn: 'name', sortDirection:'asc'});
  }

}
