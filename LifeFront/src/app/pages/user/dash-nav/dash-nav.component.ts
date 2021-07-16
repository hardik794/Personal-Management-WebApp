import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-nav',
  templateUrl: './dash-nav.component.html',
  styleUrls: ['./dash-nav.component.css']
})
export class DashNavComponent {

  link : any = '' ;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,public login : LoginService,private router:Router) {}
  ngOnInit(): void {
    this.link =  localStorage.getItem('varb');
  }
  getName(varb : string){
    localStorage.removeItem('varb');
    localStorage.setItem('varb',varb);
    this.link =  localStorage.getItem('varb');

  }

  public logout(){
    this.login.logout();
    this.login.loginStatusSubject.next(false);

    this.router.navigate(['home']);
  }
}
