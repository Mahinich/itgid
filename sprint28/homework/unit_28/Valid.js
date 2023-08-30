class Valid {
  constructor(email, password){
    this.isValid = false;
    this.email = email;
    this.password = password;
  }
  validate() {
    this.isValid = false;

    if(this.password.length > 6) {
      this.isValid = true;
      return this.isValid;
    } else {
      this.isValid = false;
      return this.isValid;
    }
  }
}