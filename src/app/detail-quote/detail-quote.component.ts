import { Component, OnInit,Input } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-detail-quote',
  templateUrl: './detail-quote.component.html',
  styleUrls: ['./detail-quote.component.css']
})
export class DetailQuoteComponent implements OnInit {
  @Input() quote=Quote;

  constructor() { }

  ngOnInit(): void {
  }

}
