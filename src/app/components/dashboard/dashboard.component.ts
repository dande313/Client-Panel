import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  clients: any[];

  constructor(private clientService: ClientService) {

   }

  ngOnInit() {
    this.clientService.getClients().subscribe(clients => {
      console.log(clients);
    });
  }

}
