import 'dart:convert';
import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import '../../models/user.dart';

class AuthController {
  // static final String _url = dotenv.env['IS_CLOUD'] == true
  //     ? dotenv.env['API_USER_URL']!
  //     : dotenv.env['API_PROXY_URL']!;

  static final String _url = dotenv.env['API_USER_URL']!;

  Future<void> Login(
    String email,
    String password,
    BuildContext context,
    Function(Response) callback,
  ) async {
    var headers = {'Content-Type': 'application/json'};

    try {
      var response = await Dio().post('${dotenv.env['API_USER_URL']}/auth/login',
            data: jsonEncode(<String, String>{
              'email': email,
              'password': password,
            }),
            options: Options(headers: headers));
      callback(response);
    } on DioError catch (e) {
      if (e.response?.statusCode == 401) {
         const snackBar = SnackBar(
          content: Text("Email ou mot de passe incorrect. Veuillez réessayer."),
          backgroundColor: Colors.red,
        );
        ScaffoldMessenger.of(context).showSnackBar(snackBar);
      } else {
        // handle other errors here
        final snackBar = SnackBar(
          content: Text(e.toString()),
          backgroundColor: Colors.red,
        );
        ScaffoldMessenger.of(context).showSnackBar(snackBar);
      }
    }
    
  }

  Future<void> Register(User user,BuildContext context, Function(Response) callback) async {
    var dio = Dio();
    try {
      var response = await dio.post('$_url/users/signup',
        data: user.toJson(),
        options: Options(
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
        ));
        callback(response);
    } on DioError catch (e) {
      if (e.response?.statusCode == 409) {
        // handle the 409 Conflict error here
        const snackBar = SnackBar(
          content: Text("Désolé, cet e-mail est déjà utilisé. Veuillez en choisir un autre."),
          backgroundColor: Colors.red,
        );
        ScaffoldMessenger.of(context).showSnackBar(snackBar);
      } else {
        // handle other errors here
        final snackBar = SnackBar(
          content: Text(e.toString()),
          backgroundColor: Colors.red,
        );
        ScaffoldMessenger.of(context).showSnackBar(snackBar);
      }
      
    }
  }
}
