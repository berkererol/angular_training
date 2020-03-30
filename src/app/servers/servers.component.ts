import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //each component needs to have either template, or templateUrl.
  // templateUrl: './servers.component.html',
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
