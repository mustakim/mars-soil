import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class SocialService {
  private _API_KEY = environment.linkedinAPI + 'accessToken ';

  constructor(private httpClient: HttpClient) { }

  getInfo(code: string) {
    let requestHeaders = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Request-Headers': 'content-type',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE, PATCH'
    });

    const payload = {
      grant_type: "authorization_code",
      code: code.trim(),
      redirect_uri: environment.linkedInCredentials.redirectUrl,
      client_id: environment.linkedInCredentials.clientId,
      client_secret: environment.linkedInCredentials.secretKey
    }

    return this.httpClient.post(this._API_KEY, payload, { headers: requestHeaders }).pipe();
  }
}
