import { Component, Input, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-social-auth',
  templateUrl: './social-auth.component.html',
  styleUrls: ['./social-auth.component.scss']
})
export class SocialAuthComponent implements OnInit {

  @Input()
  authCode: string = '';

  constructor(firestore: Firestore) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  loginWithLinkedIn() {
    window.location.href =
      `https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=${environment.linkedInCredentials.clientId}&redirect_uri=${environment.linkedInCredentials.redirectUrl}&scope=${environment.linkedInCredentials.scope}`;
  }
}
