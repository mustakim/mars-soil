import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class SocialService {
  private LINKEDIN_API = environment.linkedinAPI + 'accessToken ';

  constructor(private httpClient: HttpClient) { }

}
