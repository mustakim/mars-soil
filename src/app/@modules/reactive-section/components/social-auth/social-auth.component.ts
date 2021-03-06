import { Component, Input, OnInit } from '@angular/core';
import { EnumSocialMedia } from 'src/app/@library/site.enum';
import { SocialService } from 'src/app/@services/social.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-social-auth',
  templateUrl: './social-auth.component.html',
  styleUrls: ['./social-auth.component.scss']
})
export class SocialAuthComponent implements OnInit {
  facebookUserData: any;
  googleData: any;

  get EnumSocialMedia() {
    return EnumSocialMedia;
  }

  @Input()
  linkedInAuthCode: string = '';
  selectedSocialMedia: EnumSocialMedia = EnumSocialMedia.LinkedIn;

  constructor(public socialService: SocialService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  loginWithLinkedIn() {
    this.selectedSocialMedia = EnumSocialMedia.LinkedIn;
    if (!this.linkedInAuthCode) {
      window.location.href =
        `https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=${environment.linkedInCredentials.clientId}&redirect_uri=${environment.linkedInCredentials.redirectUrl}&scope=${environment.linkedInCredentials.scope}`;
    }
  }

  loginWithFacebook() {
    this.selectedSocialMedia = EnumSocialMedia.Facebook;
    if (!this.facebookUserData) {
      this.socialService.FacebookAuth().then((userData) => {
        this.facebookUserData = userData?.user ?? '';
      })
    }
  }

  loginWithGoogle() {
    this.selectedSocialMedia = EnumSocialMedia.Google;
    if (!this.googleData) {
      this.socialService.GoogleAuth().then((userData) => {
        this.googleData = userData?.user ?? '';
      })
    }
  }
}
