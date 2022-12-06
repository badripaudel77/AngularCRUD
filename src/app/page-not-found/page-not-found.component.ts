import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html'
})

export class PageNotFoundComponent implements OnInit{
  pageNotFoundMessage: string = '';

  ngOnInit(): void {
    this.pageNotFoundMessage = 'OOPS, the requested page doesn\'t exist.';
  }

}
