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
    String username,
    String password,
    Function(Response) callback,
  ) async {
    var headers = {
      'Content-Type': 'application/json',
    };

    final response =
        await Dio().post('${dotenv.env['API_USER_URL']}/auth/login',
            data: jsonEncode(<String, String>{
              'username': username,
              'password': password,
            }),
            options: Options(headers: headers));
    callback(response);
  }

  Future<void> Register(User user, Function(Response) callback) async {
    var header = {'Content-Type': 'application/json'};
    final response = await Dio().post('$_url/users/signup',
        queryParameters: header, data: user.toJson());

    callback(response);
  }
}
