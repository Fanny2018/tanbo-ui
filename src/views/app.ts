import { Component } from '@angular/core';

@Component({
    selector: 'ui-test',
    templateUrl: 'app.html',
    styleUrls: ['./app.scss']
})
export class AppComponent {
    model: boolean = true;
    currentPage: number = 1;
}
