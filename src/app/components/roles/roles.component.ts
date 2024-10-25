import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent {
firstName:string = "Angular";
angularVersion = "version 18";
version:number = 18;
isActive:Boolean = false;
currentDate:Date = new Date();
}
