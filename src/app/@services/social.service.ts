import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FacebookAuthProvider } from 'firebase/auth';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class SocialService {
  private LINKEDIN_API = environment.linkedinAPI + 'accessToken ';


  constructor(
    private httpClient: HttpClient,
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth, // Inject Firebase auth service
  ) {

  }


  // Sign in with Facebook
  public FacebookAuth() {
    return this.FacebookAuthLogin(new FacebookAuthProvider()).then((response) => {
      return response;
    })
  }
  // Auth logic to run auth providers
  private FacebookAuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
