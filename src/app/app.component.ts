import { Component,OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cashier';

  constructor(private router : Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if(! (evt instanceof NavigationEnd)){
        return
      }
      window.scrollTo(0,0)
    })
  }

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
