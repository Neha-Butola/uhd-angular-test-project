import { Component, OnInit } from '@angular/core';
import { TabDirective } from 'ngx-bootstrap/tabs';
import { DegreesService } from '../degrees.service';



@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.scss']
})


export class DegreesComponent implements OnInit {

  constructor(private degreesservice : DegreesService) { }

  public degrees : string[];

  public tab: string;

  ngOnInit(): void {
    this.degrees = this.degreesservice.degrees;
    this.tab = "Business";
  }

  selectTabContnet(data: TabDirective) {
    this.tab = data.heading;
  }

}
