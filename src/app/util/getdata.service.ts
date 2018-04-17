import { Injectable } from '@angular/core';

@Injectable()
export class GetDataService {

    getCustomers(criteria: CustomerSearchCriteria): Customer[] {
        return this._mockCustomers.sort((a,b) => {
          if(criteria.sortDirection === 'desc'){
            if (a[criteria.sortColumn] < b[criteria.sortColumn]) return -1;
            if (a[criteria.sortColumn] > b[criteria.sortColumn]) return 1;
          }
          else{
            if (a[criteria.sortColumn] < b[criteria.sortColumn]) return 1;
            if (a[criteria.sortColumn] > b[criteria.sortColumn]) return -1;


          }
        });
    }

    private _mockCustomers = [
      {name: 'Mauro Mauri', fisco: 'basg@gmail.com', piva:'3612313123', follow: 'Società A'},
      {name: 'Giova Rossi', fisco: 'casg@gmail.com', piva:'7312313123', follow: 'Persona B'},
      {name: 'Marco Mauri', fisco: 'xasg@gmail.com', piva:'9212313123', follow: 'Società B'},
      {name: 'Elio Mauri', fisco: 'zasg@gmail.com', piva:'12313123', follow: 'Persona C'},
    ];

}

export class Customer {
  name: string;
  fisco: string;
  piva: string;
  follow: string;
}

export class CustomerSearchCriteria {
  sortColumn: string;
  sortDirection: string;
}
