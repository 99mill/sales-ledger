import { Component, OnInit } from '@angular/core';
import { INavigationItem } from '../../interface/INavigationItem';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public title: string = 'Bulk Sales Ledger';
  public menuItems: INavigationItem[];

  constructor() { }

  ngOnInit() {

    this.menuItems = [
      {
        label: 'About',
        url: 'about'
      },
      {
        label: 'Settings',
        url: 'settings'
      },
      {
        label: 'Report Error',
        url: 'report-error'
      }
    ]

  }

}
