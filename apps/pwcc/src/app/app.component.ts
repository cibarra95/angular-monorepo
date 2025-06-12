import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MonitoreoComponent } from '@angular-monorepo/monitoreo';

@Component({
  imports: [RouterModule, MonitoreoComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pwcc';
}
