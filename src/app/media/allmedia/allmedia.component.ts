import { Component, OnInit } from '@angular/core';
import { GetDataService, Customer, CustomerSearchCriteria } from './../../util/getdata.service';

@Component({
  selector: 'app-allmedia',
  templateUrl: './allmedia.component.html',
  styleUrls: ['./allmedia.component.scss']
})
export class AllmediaComponent implements OnInit {

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
