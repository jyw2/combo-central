import { createContext } from "react";

export class FirebaseUserManager {
  // in theory this should be an implementation of a "UserManager"
  // interface. TODO for typescript implementation
  constructor(user, userData = null) {
    this.user = user;
    this.userData = userData;
    // this.likedCombos = new Set(userDetails.likes); TODO
  }

  setUser(user) {
    this.user = user;
  }

  setUserData(userData) {
    this.userData = userData
  }

  async getToken() {
    return (await this.user?.getIdToken()) ?? null;
  }

  getId() {
    return this.user?.uid;
  }

  getUsername() {
    return this.userData?.username;
  }

  isComboLiked(id) {
    return this.likedCombos.has(id);
  }

  getLikes() {
    return Array.from(this.likedCombos);
  }

  isLoggedIn() {
    return !!this.user;
  }

  hasDBUser() {
    return !!this.userData
  }
}

export const UserContext = createContext({
  userManager: new FirebaseUserManager(null),
  setUserManager: () => { },
  isLoadingUser: true,
  setIsLoadingUser: () => { },
  hasDisplayName: Boolean,
  hasDBUser: Boolean,
  loadUser: async () => { },
  errorLoadingUser: false
});
