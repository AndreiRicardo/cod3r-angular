import { Component } from '@angular/core';

@Component({
  selector: 'app-first-compnent',
  templateUrl: './first-compnent.component.html',
  styleUrls: ['./first-compnent.component.css']
})
export class FirstCompnentComponent {
name: string = 'Andrei'
age: number = 40
job: string = 'Programador'
}
