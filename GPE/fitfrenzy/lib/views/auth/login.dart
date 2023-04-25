import 'dart:convert';

import 'package:fitfrenzy/controller/auth/auth_controller.dart';
import 'package:fitfrenzy/models/user.dart';
import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:page_transition/page_transition.dart';
import 'package:dio/dio.dart';

import '../static/home/home3.dart';

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        backgroundColor: Colors.black,
        actions: <Widget>[
          Padding(
            padding: const EdgeInsets.only(right: 20),
            child: Image.asset(
              "assets/images/logo_foot.png",
            ),
          )
        ],
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(25.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              const Padding(
                padding: EdgeInsets.only(left: 10),
                child: Align(
                  alignment: Alignment.topLeft,
                  child: Text(
                    "Nom d'utilisateur",
                    style: TextStyle(
                      color: Colors.white,
                    ),
                  ),
                ),
              ),
              Container(
                margin: const EdgeInsets.all(8),
                child: TextField(
                  controller: _usernameController,
                  decoration: const InputDecoration(
                    filled: true,
                    fillColor: Colors.white,
                    enabledBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.all(
                        Radius.circular(20),
                      ),
                      borderSide: BorderSide(
                        color: Colors.black,
                        style: BorderStyle.solid,
                      ),
                    ),
                    hintText:
                        "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _",
                    hintStyle: TextStyle(
                      fontSize: 15,
                      fontFamily: 'Open',
                    ),
                  ),
                  keyboardType: TextInputType.text,
                ),
              ),
              const SizedBox(
                height: 40,
              ),
              const Padding(
                padding: EdgeInsets.only(left: 10),
                child: Align(
                  alignment: Alignment.topLeft,
                  child: Text(
                    "Mot de passe",
                    style: TextStyle(
                      color: Colors.white,
                    ),
                  ),
                ),
              ),
              Container(
                margin: const EdgeInsets.all(8),
                child: TextField(
                  controller: _passwordController,
                  decoration: const InputDecoration(
                    filled: true,
                    fillColor: Colors.white,
                    enabledBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.all(
                        Radius.circular(20),
                      ),
                      borderSide: BorderSide(
                        color: Colors.black,
                        style: BorderStyle.solid,
                      ),
                    ),
                    hintText:
                        "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _",
                    hintStyle: TextStyle(
                      fontSize: 15,
                      fontFamily: 'Open',
                    ),
                  ),
                  keyboardType: TextInputType.visiblePassword,
                  obscureText: true,
                ),
              ),
              const SizedBox(
                height: 40,
              ),
              ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.amber,
                  fixedSize: const Size(170, 20),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(25.0),
                  ),
                ),
                onPressed: () => AuthController().Login(
                    _usernameController.text,
                    _passwordController.text,
                    (result) => {
                          if (result.statusCode == 201)
                            {
                              print('result.data: ${result.data['id']}'),
                              Navigator.push(
                                context,
                                MaterialPageRoute(
                                    builder: (context) =>
                                        Home3(userId: result.data['id'])),
                              )
                            }
                          else
                            {print("Error")}
                        }),
                child: const Text(
                  "Connexion",
                  style: TextStyle(
                    fontSize: 15,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
