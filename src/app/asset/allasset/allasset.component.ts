import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allasset',
  templateUrl: './allasset.component.html',
  styleUrls: ['./allasset.component.scss']
})
export class AllassetComponent implements OnInit {
  proposals = [];
  totalCount = 0;
  assets = [
    {
      title: 'Caffe e buongiorno',
      added: false,
      img: 'assets/img/dummyround.png',
      follow_count: 500
    },
    {
      title: 'Buongiornissimo',
      added: false,
      img: 'assets/img/dummyround2.png',
      follow_count: 2500

    },
    {
      title: 'La gastrite di shy',
      added: false,
      img: 'assets/img/dummyround3.png',
      follow_count: 352
    },
  ]
  constructor() { }

  addProposal(index) {

    this.assets[index].added = !this.assets[index].added
    if (this.assets[index].added) {
      this.proposals.push(this.assets[index]);
      this.totalCount += this.assets[index].follow_count;

    }
    else {
      this.proposals.forEach((item, i, arr) => {
        if (this.assets[index].title === item.title) {
          arr.splice(i, 1);
        }
      })
      this.totalCount -= this.assets[index].follow_count;
    }

  }

  ngOnInit() {
  }

}
