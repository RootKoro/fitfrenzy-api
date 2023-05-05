class User {
  late String? uid;
  late String firstname;
  late String lastname;
  late String email;
  late String? password;
  final String? birthday;
  late String created;

  User({
    this.uid,
    this.firstname = '',
    this.lastname = '',
    this.email = '',
    this.password = '',
    this.birthday = '',
    this.created = ''
  });

  factory User.fromJson(final Map<String, dynamic> json) {
    return User(
      uid: json['_id'],
      firstname: json['firstname'],
      lastname: json['lastname'],
      email: json['email'],
      password: json['password'],
      birthday: json['birthday'],
      created: json['created']
    );
  }

  Map<String, dynamic> toJson() => {
    '_id': uid,
    'firstname': firstname,
    'lastname': lastname,
    'email': email,
    'password': password,
    'birthday': birthday,
    'created': created
  };

  @override
  String toString() {
    return 'User{_id: $uid, firstname: $firstname, lastname: $lastname, email: $email, password: $password, birthday: $birthday }';
  }
  /* set password(String value) {
    password = value;
  }
  set birthday(String value) {
    birthday = value;
  } */
}
