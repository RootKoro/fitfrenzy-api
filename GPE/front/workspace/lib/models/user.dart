class User {
  final String? uid;
  final String firstname;
  final String lastname;
  final String username;
  final String password;
  final int age;

  User(
      {this.uid,
      required this.firstname,
      required this.lastname,
      required this.username,
      required this.password,
      required this.age});

  factory User.fromJson(final Map<String, dynamic> json) {
    return User(
        uid: json['uid'],
        firstname: json['firstname'],
        lastname: json['lastname'],
        username: json['username'],
        password: json['password'],
        age: json['age']);
  }

  Map<String, dynamic> toJson() => {
        'uid': uid,
        'firstname': firstname,
        'lastname': lastname,
        'username': username,
        'password': password,
        'age': age
      };
}
