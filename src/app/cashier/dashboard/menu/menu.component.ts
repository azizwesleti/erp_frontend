import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  HostListener,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { fadeInOut, INavbarData } from './helper';
import { navbarData } from './nav-data';
import { AuthService } from 'src/app/services/auth.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    fadeInOut,
    trigger('rotate', [
      transition(':enter', [
        animate(
          '1000ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: '0' }),
            style({ transform: 'rotate(2turn)', offset: '1' }),
          ])
        ),
      ]),
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit {
  //short menu activation start
  proShortcutActive: boolean = false;
  userRole: string= 'Admin';
  userName: string= 'Aziz Oueslati';

  prodropdown() {
    if (this.proShortcutActive == false) {
      this.proShortcutActive = true;
    } else {
      this.proShortcutActive = false;
    }
  }
  //short menu activation end

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  multiple: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      });
    }
  }

  constructor(public router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;

      const role = this.authService.getCurrentUserRole();
        if (role) {
          this.userRole = role;
          console.log("Le role de l'utilisateur connecté : ", this.userRole);
          this.filterNavDataByRole();
        }
        
        const userName = this.authService.getCurrentUserName();
        if (userName) {
          this.userName = userName;
          console.log("Le nom de l'utilisateur connecté : ", this.userName);
        }
     
  }

    filterNavDataByRole() { 

    this.navData = navbarData
      .filter(item => item.roles?.includes(this.userRole))
      /* .map(item => {
        if (item.items) {
          item.items = item.items.filter(sub => sub.roles?.includes(this.userRole));
        }
        return item;
      }) */;
  }


  handleClick(item: INavbarData): void {
    this.shrinkItems(item);
    item.expanded = !item.expanded;
  }

  getActiveClass(data: INavbarData): string {
    return this.router.url.includes(data.routeLink) ? 'active' : '';
  }

  shrinkItems(item: INavbarData): void {
    if (!this.multiple) {
      for (let modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
  }
}
