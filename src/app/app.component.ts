import { Component } from '@angular/core';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [ FooterComponent, RouterOutlet, CommonModule, FlexLayoutModule, MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule, MatSidenavModule]
})
export class AppComponent {
  title = 'angular-portfolio';
}
