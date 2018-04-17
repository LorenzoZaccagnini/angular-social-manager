import { Component, OnInit } from '@angular/core';
import { GetDataService, Customer, CustomerSearchCriteria } from './../../util/getdata.service';

@Component({
  selector: 'app-allagency',
  templateUrl: './allagency.component.html',
  styleUrls: ['./allagency.component.scss']
})
export class AllagencyComponent implements OnInit {
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
