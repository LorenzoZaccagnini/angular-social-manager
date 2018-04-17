import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

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
      {name: 'Mauro Mauri', mail: 'basg@gmail.com', iban:'3612313123', fisco: 'PIVA'},
      {name: 'Giova Rossi', mail: 'casg@gmail.com', iban:'7312313123', fisco: 'PIVA'},
      {name: 'Marco Mauri', mail: 'xasg@gmail.com', iban:'9212313123', fisco: 'PIVA'},
      {name: 'Elio Mauri', mail: 'zasg@gmail.com', iban:'12313123', fisco: 'PIVA'},
    ];

}

export class Customer {
  name: string;
  mail: string;
  iban: string;
  fisco: string;
}

export class CustomerSearchCriteria {
  sortColumn: string;
  sortDirection: string;
}
