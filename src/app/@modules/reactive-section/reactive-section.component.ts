import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reactive-section',
  templateUrl: './reactive-section.component.html',
  styleUrls: ['./reactive-section.component.scss']
})
export class ReactiveSectionComponent implements OnInit {

  linkedInToken: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.linkedInToken = this.route.snapshot.queryParams["code"];
  }

}
