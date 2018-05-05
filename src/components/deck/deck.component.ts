import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  
  public repeat: any = [1,1,1,1,1];

  constructor() { }

  ngOnInit() {
  }

}
