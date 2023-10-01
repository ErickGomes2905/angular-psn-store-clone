import { Component } from '@angular/core';
import { database } from 'src/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  items = database;
}
