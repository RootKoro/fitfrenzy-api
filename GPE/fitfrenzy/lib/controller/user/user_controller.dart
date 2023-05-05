import 'dart:io';

import 'package:dio/dio.dart';
import 'package:fitfrenzy/constants/constant.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:flutter/material.dart';
import 'dart:convert';

import '../../models/user.dart';

class UserController {
  // static final String _url = dotenv.env['IS_CLOUD'] == true
  //     ? dotenv.env['API_USER_URL']!
  //     : dotenv.env['API_PROXY_URL']!;

  static final String _url = dotenv.env['API_USER_URL']!;
  static final Map<String, String> _headers = {
    'Content-Type': 'application/json',
  };

  Future<User?> GetUserById(String id) async {
    final Response response =
        await Dio().get('$_url/users/$id', options: Options(headers: _headers));
    if (response.statusCode != 200) {
      return null;
    }

    return User.fromJson(response.data);
  }

  Future<User?> getUserInfo(String? token) async {
    try {
      final Response response =
          await Dio().get('$_url/auth/profile',options: Options(headers: {"Authorization":"Bearer $token"}));
      print(response.statusCode);
      if (response.statusCode == 200) {
        print(response.data);
        return User.fromJson(response.data);
      }
    } on DioError catch (e) {
      return null;
    }
    return null;
  }

  Future<List<User>> GetAllUsers() async {
    final Response response =
        await Dio().get('$_url/users', options: Options(headers: _headers));
    if (response.statusCode != 200) {
      return [];
    }

    List<dynamic> jsonResponse = json.decode(response.data);
    return jsonResponse.map((user) => User.fromJson(user)).toList();
  }

  Future<User> updateUser(String? _id, String body) async {
    try {
      final Response response = await Dio().put('$_url/users/$_id',
        data: body, options: Options(headers: _headers));
        return User.fromJson(response.data);

    } on DioError catch (e) {
      throw Exception("hhh");
    }
  }

  Future<Response> DeleteUser(int id) async {
    return await Dio()
        .delete('$_url/users/$id', options: Options(headers: _headers));
  }
}
