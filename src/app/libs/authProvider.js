class AuthenticationProvider {
  constructor(thirdPartyAuthProvider) {
    this.authProvider = thirdPartyAuthProvider;
  }

  login(username, password) {}

  register(userData) {}
}

module.exports = AuthenticationProvider;
