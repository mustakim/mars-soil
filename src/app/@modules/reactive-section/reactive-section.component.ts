import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocialService } from 'src/app/@services/social.service';

@Component({
  selector: 'app-reactive-section',
  templateUrl: './reactive-section.component.html',
  styleUrls: ['./reactive-section.component.scss']
})
export class ReactiveSectionComponent implements OnInit {

  linkedInToken: string = "";

  constructor(private route: ActivatedRoute, private socialService: SocialService) { }

  ngOnInit(): void {
    this.linkedInToken = this.route.snapshot.queryParams["code"];

    if (this.linkedInToken?.trim()) {
      this.socialService.getInfo(this.linkedInToken).subscribe(data => {
        console.info('data', data)
      })
    }
  }

}
