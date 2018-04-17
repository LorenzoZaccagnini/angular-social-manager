import { Component, OnInit } from '@angular/core';
import { GetDataService, Customer, CustomerSearchCriteria } from './../../util/getdata.service';

@Component({
  selector: 'app-allclient',
  templateUrl: './allclient.component.html',
  styleUrls: ['./allclient.component.scss']
})
export class AllclientComponent implements OnInit {

  customers: Customer[];

  constructor(private service: GetDataService){}

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
