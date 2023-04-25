class User {
  final String? uid;
  final String firstname;
  final String lastname;
  final String email;
  final String? password;
  final String gender;
  final int height;
  final int weight;
  final int? age;

  User(
      {this.uid,
      this.firstname = '',
      this.lastname = '',
      this.email = '',
      this.password = '',
      this.gender = 'FEMALE',
      this.height = 0,
      this.weight = 0,
      this.age = 0});

  factory User.fromJson(final Map<String, dynamic> json) {
    return User(
        uid: json['uid'],
        firstname: json['firstname'],
        lastname: json['lastname'],
        email: json['email'],
        password: json['password'],
        gender: json['gender'],
        height: json['height'],
        weight: json['weight'],
        age: json['age']);
  }

  Map<String, dynamic> toJson() => {
        'uid': uid,
        'firstname': firstname,
        'lastname': lastname,
        'email': email,
        'password': password,
        'gender': gender,
        'height': height,
        'weight': weight,
        'age': age
      };
}
