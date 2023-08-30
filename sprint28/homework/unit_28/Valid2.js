class Valid2 extends Valid {
  constructor(email, password) {
    super(email, password);
    this.error_message = '';
    this.isValid = false;
  }
  validate() {
    this.error_message = '';
    const valid = super.validate();

    if (!valid) {
      this.error_message = 'password error';
      return this.isValid;
    } else {
      if(this.email == '') {
        this.isValid = false;
        this.error_message = 'email error'
        return this.isValid;
      }
    }

    return valid;
  }
}