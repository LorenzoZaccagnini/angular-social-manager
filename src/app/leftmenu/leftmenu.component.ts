import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.scss']
})
export class LeftmenuComponent implements OnInit {

  constructor(private router:Router) { }

  itemSelected: string = 'addasset'

  menuTree = [
    {
      title: 'Asset',
      show: false,
      icon: 'fa-puzzle-piece',
    sub: [
      {slug: 'addasset', title: 'Aggiungi asset'},
      {slug: 'allasset', title: 'Tutti gli asset'},
      {slug: 'assetfb', title: 'Facebook'},
      {slug: 'assetig', title: 'Instagram'},
    ]},
    {
      title: 'Publisher',
      show: false,
      icon: 'fa-user',
      sub: [
      {slug: 'addpublisher', title: 'Aggiungi publisher'},
      {slug: 'allpublisher', title: 'Tutti i publisher'},
    ]},
    {
      title: 'Campagna',
      show: false,
      icon: 'fa-bullhorn',
      sub: [
      {slug: 'addcampaign', title: 'Crea campagna'},
      {slug: 'allcampaign', title: 'Tutte le campagne'},
    ]},
    {
      title: 'clienti',
      show: false,
      icon: 'fa-address-book',
      sub: [
      {slug: 'addclient', title: 'Crea cliente'},
      {slug: 'allclient', title: 'Tutti i clienti'},
    ]},
    {
      title: 'agenzie',
      show: false,
      icon: 'fa-address-book',
      sub: [
      {slug: 'addagency', title: 'Crea agenzia'},
      {slug: 'allagency', title: 'Tutte le agenzie'},
    ]},
    {
      title: 'centri media',
      show: false,
      icon: 'fa-image',
      sub: [
      {slug: 'addmedia', title: 'Crea centro media'},
      {slug: 'allmedia', title: 'Tutti i centri media'},
    ]},
    {
      title: 'proposte',
      show: false,
      icon: 'fa-share-square',
      sub: [
      {slug: 'addproposal', title: 'Crea proposta'},
      {slug: 'allproposal', title: 'Tutte le proposte'},
    ]},
    {
      title: 'fatturazione',
      show: false,
      icon: 'fa-credit-card',
      sub: []
    },

  ]

  ngOnInit() {
  }

  goTo(route){
    this.router.navigate(['topbar/leftmenu/' + route]);
  }


}
