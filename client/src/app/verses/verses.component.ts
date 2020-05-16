import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-verses',
  templateUrl: './verses.component.html',
  styleUrls: ['./verses.component.css']
})

export class VersesComponent implements OnInit {
  @Input() verses;
  constructor() { }

  ngOnInit(): void {
  }
}
