import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName='';
  userName='';
  serverCreated= false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated= true;
    this.serverCreationStatus = 'Server created! Name is ' + this.serverName + '.';
    this.serverName = '';
  }

  onReset() {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = '';
  }

}
