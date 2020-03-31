import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

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
  servers = ['Testserver', 'Testserver 2'];
  showDetails = false;
  clickCount = [];
  now = moment();
  

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated= true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server created! Name is ' + this.serverName + '.';
    this.serverName = '';
  }

  onReset() {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  onShowDetails() {
    let current_timestamp = moment(new Date()).format("dddd, MMMM Do YYYY, h:mm:ss a");
    this.showDetails = true;
    this.clickCount.push(current_timestamp);
  }

  getShowDetails() {
    return this.showDetails;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = '';
  }

}
