import 'dart:convert';
import 'package:dio/dio.dart';
import 'package:fitfrenzy/models/sport.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';

class SportController {
  // static final String _url = dotenv.env['IS_CLOUD'] == false
  //     ? dotenv.env['API_SPORT_URL']!
  //     : dotenv.env['API_PROXY_URL']!;

  static final String _url = dotenv.env['API_SPORT_URL']!;

  static final Map<String, String> _headers = {
    'Content-Type': 'application/json',
  };

  Future<List<Sport>> GetSports() async {
    final Response response =
        await Dio().get('$_url/sports', options: Options(headers: _headers));
    if (response.statusCode != 200) {
      return [];
    }

    List<dynamic> jsonResponse = response.data;
    return jsonResponse.map((sport) => Sport.fromJson(sport)).toList();
  }

  Future<Sport?> GetSportById(String id) async {
    final Response response = await Dio()
        .get('$_url/sports/$id', options: Options(headers: _headers));
    if (response.statusCode != 200) {
      return null;
    }

    return Sport.fromJson(response.data);
  }
}
