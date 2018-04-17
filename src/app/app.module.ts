import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
//firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthService } from './util/auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './util/firebase.config';

import { AppComponent } from './app.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LoginComponent } from './login/login.component';
//asset
import { AddassetComponent } from './asset/addasset/addasset.component';
import { AllassetComponent } from './asset/allasset/allasset.component';
//publishers
import { AddpubComponent } from './publisher/addpub/addpub.component';
import { AllpubComponent } from './publisher/allpub/allpub.component';
//graphic
import { WeButtonComponent } from './graphic/we-button/we-button.component';
import { WeTitleComponent } from './graphic/we-title/we-title.component';
import { WeLineComponent } from './graphic/we-line/we-line.component';
import { SortableColumnComponent } from './graphic/we-sort/sortable-column.component';
import { SortableTableDirective } from './graphic/we-sort/sortable-table.directive';
import { SortService } from './graphic/we-sort/sort.service';
import { CustomerService } from './util/get-pub.service';
import { GetDataService } from './util/getdata.service';
//client
import { AddclientComponent } from './clients/addclient/addclient.component';
import { AllclientComponent } from './clients/allclient/allclient.component';
//agency
import { AllagencyComponent } from './agency/allagency/allagency.component';
import { AddagencyComponent } from './agency/addagency/addagency.component';
//media
import { AddmediaComponent } from './media/addmedia/addmedia.component';
import { AllmediaComponent } from './media/allmedia/allmedia.component';
//campaign
import { AllcampaignComponent } from './campaign/allcampaign/allcampaign.component';
import { AddcampaignComponent } from './campaign/addcampaign/addcampaign.component';
//addproposal
import { AddproposalComponent } from './proposal/addproposal/addproposal.component';
import { AllproposalComponent } from './proposal/allproposal/allproposal.component';



@NgModule({
  declarations: [
    AppComponent,
    WeButtonComponent,
    LeftmenuComponent,
    TopbarComponent,
    LoginComponent,
    AddassetComponent,
    AllassetComponent,
    WeTitleComponent,
    WeLineComponent,
    AddpubComponent,
    AllpubComponent,
    SortableColumnComponent,
    SortableTableDirective,
    AddclientComponent,
    AllclientComponent,
    AllagencyComponent,
    AddagencyComponent,
    AddmediaComponent,
    AllmediaComponent,
    AllcampaignComponent,
    AddcampaignComponent,
    AddproposalComponent,
    AllproposalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'topbar', component: TopbarComponent,
    children: [
      {path: 'leftmenu', component: LeftmenuComponent,
    children: [
      //asset
      {path: 'addasset', component: AddassetComponent},
      {path: 'allasset', component: AllassetComponent},
      //publisher
      {path: 'addpublisher', component: AddpubComponent},
      {path: 'allpublisher', component: AllpubComponent},
      //campaign
      {path: 'addcampaign', component: AddcampaignComponent},
      {path: 'allcampaign', component: AllcampaignComponent},
      //clients
      {path: 'addclient', component: AddclientComponent},
      {path: 'allclient', component: AllclientComponent},
      //agencies
      {path: 'addagency', component: AddagencyComponent},
      {path: 'allagency', component: AllagencyComponent},
      //media centers
      {path: 'addmedia', component: AddmediaComponent},
      {path: 'allmedia', component: AllmediaComponent},
      //proposals
      {path: 'addproposal', component: AddproposalComponent},
      {path: 'allproposal', component: AllproposalComponent},
      //fatturazione
    ]}
    ]},
    ])
  ],
  providers: [SortService,
     CustomerService,
     AuthService,

      GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
