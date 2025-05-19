


import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatAnchor} from '@angular/material/button';
import {LanguageSwitcherComponent} from './public/components/language-switcher/language-switcher.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbar, MatAnchor, RouterLink, RouterLinkActive, TranslatePipe, LanguageSwitcherComponent],
  templateUrl: './app.component.html',

  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled2';

  options = [
    {link: '/home', label: 'home'},
    {link: '/store/bundles', label: 'bundles'},
  ]
  constructor(private translate:TranslateService) {
this.translate.setDefaultLang('en');
this.translate.use('en');

  }
}
