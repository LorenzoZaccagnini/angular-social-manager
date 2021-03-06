import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(public af: AngularFireAuth) { }
  loginWithEmail(email, password) {
    return this.af.auth.signInWithEmailAndPassword(email, password)
  }
  logout() {
    return this.af.auth.signOut();
  }

}
