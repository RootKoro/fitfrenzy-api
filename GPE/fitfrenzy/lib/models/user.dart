class User {
  final String? uid;
  final String firstname;
  final String lastname;
  final String email;
  final String? password;
  final String? birthday;

  User(
      {this.uid,
      this.firstname = '',
      this.lastname = '',
      this.email = '',
      this.password = '',
      this.birthday = ''});

  factory User.fromJson(final Map<String, dynamic> json) {
    return User(
        uid: json['uid'],
        firstname: json['firstname'],
        lastname: json['lastname'],
        email: json['email'],
        password: json['password'],
        birthday: json['birthday']);
  }

  Map<String, dynamic> toJson() => {
        'uid': uid,
        'firstname': firstname,
        'lastname': lastname,
        'email': email,
        'password': password,
        'birthday': birthday
      };
}
