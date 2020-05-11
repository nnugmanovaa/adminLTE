import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.clearAll();
    this.router.navigateByUrl('/auth');
  }
}
