import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:front/config.dart';
import 'utilities/constants.dart';
import 'package:front/models/user.dart';

class Register extends StatefulWidget {
  const Register({Key? key}) : super(key: key);
  @override
  _RegisterState createState() => _RegisterState();
}

class _RegisterState extends State<Register> {
  final TextEditingController _firstnameController = TextEditingController();
  final TextEditingController _lastnameController = TextEditingController();
  final TextEditingController _usernameController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  final TextEditingController _ageController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: AnnotatedRegion<SystemUiOverlayStyle>(
            value: SystemUiOverlayStyle.light,
            child: GestureDetector(
                onTap: () => FocusScope.of(context).unfocus(),
                child: Stack(children: <Widget>[
                  Container(
                    height: double.infinity,
                    width: double.infinity,
                    decoration: const BoxDecoration(
                        gradient: LinearGradient(
                            begin: Alignment.topCenter,
                            end: Alignment.bottomCenter,
                            colors: [
                          Color(0xFF73AEF5),
                          Color(0xFF61A4F1),
                          Color(0xFF478DE0),
                          Color(0xFF398AE5),
                        ],
                            stops: [
                          0.1,
                          0.4,
                          0.7,
                          0.9
                        ])),
                  ),
                  Container(
                      height: double.infinity,
                      child: SingleChildScrollView(
                        physics: const AlwaysScrollableScrollPhysics(),
                        padding: const EdgeInsets.symmetric(
                            horizontal: 40.0, vertical: 120.0),
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: <Widget>[
                            const Text(
                              'Sign Up',
                              style: TextStyle(
                                  color: Colors.white,
                                  fontFamily: 'OpenSans',
                                  fontSize: 30.0,
                                  fontWeight: FontWeight.bold),
                            ),
                            const SizedBox(height: 30.0),
                            _buildTF('Firstname', _firstnameController),
                            const SizedBox(height: 30.0),
                            _buildTF('Lastname', _lastnameController),
                            const SizedBox(height: 30.0),
                            _buildTF('Username', _usernameController),
                            const SizedBox(height: 30.0),
                            _buildTF('Password', _passwordController),
                            const SizedBox(height: 30.0),
                            _buildTF('Age', _ageController),
                            _buildRegisterButton(),
                            _buildHyperLinkLogin()
                          ],
                        ),
                      ))
                ]))));
  }

  Widget _buildTF(final String label, final TextEditingController controller) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        Text(
          label,
          style: const TextStyle(
              color: Colors.white,
              fontWeight: FontWeight.bold,
              fontFamily: 'OpenSans'),
        ),
        const SizedBox(height: 10.0),
        Container(
            alignment: Alignment.centerLeft,
            decoration: kBoxDecorationStyle,
            height: 60.0,
            child: TextField(
              controller: controller,
              keyboardType: TextInputType.name,
              style:
                  const TextStyle(color: Colors.white, fontFamily: 'OpenSans'),
              decoration: InputDecoration(
                  border: InputBorder.none,
                  contentPadding: EdgeInsets.only(top: 14.0),
                  prefixIcon: Icon(Icons.info, color: Colors.white),
                  hintText: 'Enter your $label',
                  hintStyle: const TextStyle(
                      color: Colors.white54, fontFamily: 'OpenSans')),
            ))
      ],
    );
  }

  Widget _buildRegisterButton() {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 25.0),
      width: double.infinity,
      child: ElevatedButton(
        onPressed: () => RegisterUser(),
        style: ElevatedButton.styleFrom(
          padding: const EdgeInsets.all(15.0),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(30.0),
          ),
          primary: Colors.white,
        ),
        child: const Text(
          'REGISTER',
          style: TextStyle(
            color: Color(0xFF527DAA),
            letterSpacing: 1.5,
            fontSize: 18.0,
            fontWeight: FontWeight.bold,
            fontFamily: 'OpenSans',
          ),
        ),
      ),
    );
  }

  Widget _buildHyperLinkLogin() {
    return GestureDetector(
      onTap: () => print('Login Hyperlink Pressed'),
      child: RichText(
        text: const TextSpan(
          children: [
            TextSpan(
              text: 'Already have an Account? ',
              style: TextStyle(
                color: Colors.white,
                fontSize: 18.0,
                fontWeight: FontWeight.w400,
              ),
            ),
            TextSpan(
              text: 'Login',
              style: TextStyle(
                color: Colors.white,
                fontSize: 18.0,
                fontWeight: FontWeight.bold,
              ),
            ),
          ],
        ),
      ),
    );
  }

  Future<User> RegisterUser() async {
    print('RegisterUser');
    final String firstname = _firstnameController.text;
    final String lastname = _lastnameController.text;
    final String username = _usernameController.text;
    final String password = _passwordController.text;
    final String age = _ageController.text;
    final User user = User(
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: password,
        age: age);

    var header = {'Content-Type': 'application/json'};
    final response = await Dio().post('${Config.apiUserUrl}/users/signup',
        queryParameters: header, data: jsonEncode(user));
    if (response.statusCode == 201) {
      return User.fromJson(response.data);
    } else {
      throw Exception('Failed to create user');
    }
  }
}
