import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent implements OnInit {

  serverId: number = 10;
  serverStatus: string = (Math.random() > 0.5) ? 'online' : 'offline';

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
