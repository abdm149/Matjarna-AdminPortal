const authService = {
  loadToken() {
    return localStorage.getItem("token");
  },

  saveToken(token: any) {
    localStorage.setItem("token", token);
  },

  removeToken() {
    localStorage.removeItem("token");
  },

  isAuthenticated() {
    const token = this.loadToken();
    return !!token;
  },
};

export default authService;
