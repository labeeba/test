import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  name: string;
  password: string;
  loginCheckURL = 'putroutehere';

  constructor(public router: Router, private httpClient: HttpClient) { }

  ngOnInit() {
  }

  openTabs() {
    const data = {
      name: this.name
    };

    console.log(data);

    // this.navCtrl.push(TabsPage, data);
    this.router.navigateByUrl('tabs');

  }
}
