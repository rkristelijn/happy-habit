import { Component } from '@angular/core';

@Component({
  selector: 'happy-habit2-root',
  template: `
    <div class="container">
      <div *ngFor="let i of [0, 1, 2, 3]" class="row">
        <div *ngFor="let j of [0, 1, 2, 3]" class="col-sm mt-4">
          <img
            *ngIf="i * 4 + j === randomNumber; else elseBlock"
            [src]="'assets/positive/' + uniqueArray[+i * 4 + +j] + '.jpeg'"
            class="img-fluid border border-success"
            [alt]="'Responsive image' + uniqueArray[+i * 4 + +j]"
            (click)="regenerate()"
          />
          <ng-template #elseBlock>
            <img
              [src]="'assets/negative/' + uniqueArray[+i * 4 + +j] + '.jpeg'"
              class="img-fluid"
              [alt]="'Responsive image' + uniqueArray[+i * 4 + +j]"
            />
          </ng-template>
        </div>
      </div>
    </div>
  `,
})
export class AppComponent {
  title = 'happy-habit';
  uniqueArray: number[] = [];
  randomNumber = -1;

  constructor() {
    const array = [];

    // generate 65 random numbers between 0 and 16
    for (let i = 0; i < 100; i++) {
      const min = 0;
      const max = 16;
      array.push(Math.floor(Math.random() * (max - min + 1) + min));
    }

    const uniqueArray = [...new Set(array)];
    // get only the first elements
    this.uniqueArray = uniqueArray.splice(0, 16);

    this.randomNumber = Math.floor(Math.random() * 16);
  }

  regenerate() {
    window.location.reload();
  }
}
