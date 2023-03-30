import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:fitfrenzy/models/user_stat.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';

class UserStatController {
  // static final String _url = dotenv.env['IS_CLOUD'] == false
  //     ? dotenv.env['API_STATS_URL']!
  //     : dotenv.env['API_PROXY_URL']!;

  static final String _url = dotenv.env['API_STATS_URL']!;

  static final Map<String, String> _headers = {
    'Content-Type': 'application/json',
  };

  Future<UserStat?> CreateUserStat(UserStat userStat) async {
    final Response response = await Dio().post('$_url/user-stats',
        data: userStat.toJson(), options: Options(headers: _headers));
    if (response.statusCode != 200) {
      return null;
    }

    return UserStat.fromJson(response.data);
  }

  Future<UserStat?> GetUserStatById(String id) async {
    final Response response = await Dio()
        .get('$_url/user-stats/$id', options: Options(headers: _headers));
    if (response.statusCode != 200) {
      return null;
    }

    return UserStat.fromJson(response.data);
  }

  Future<List<UserStat>> GetAllUserStats() async {
    final Response response = await Dio()
        .get('$_url/user-stats', options: Options(headers: _headers));
    if (response.statusCode != 200) {
      return [];
    }

    List<dynamic> jsonResponse = json.decode(response.data);
    return jsonResponse.map((userStat) => UserStat.fromJson(userStat)).toList();
  }

  Future<Response> UpdateUserStat(UserStat userStat) async {
    return await Dio().put('$_url/user-stats/${userStat.idUser}',
        data: userStat.toJson(), options: Options(headers: _headers));
  }
}
