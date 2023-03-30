import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:fitfrenzy/models/sport_stat.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';

class SportStatController {
  // static final String _url = dotenv.env['IS_CLOUD'] == false
  //     ? dotenv.env['API_STATS_URL']!
  //     : dotenv.env['API_PROXY_URL']!;

  static final String _url = dotenv.env['API_STATS_URL']!;
  static final Map<String, String> _headers = {
    'Content-Type': 'application/json',
  };

  Future<SportStat?> CreateSportStat(SportStat sportStat) async {
    final Response response = await Dio().post('$_url/sport-stats',
        data: sportStat.toJson(), options: Options(headers: _headers));
    if (response.statusCode != 200) {
      return null;
    }

    return SportStat.fromJson(response.data);
  }

  Future<List<SportStat>> GetSportStats() async {
    final Response response = await Dio()
        .get('$_url/sport-stats', options: Options(headers: _headers));
    if (response.statusCode != 200) {
      return [];
    }

    List<dynamic> jsonResponse = json.decode(response.data);
    return jsonResponse
        .map((sportStat) => SportStat.fromJson(sportStat))
        .toList();
  }

  Future<SportStat?> GetSportStatById(String id) async {
    final Response response = await Dio()
        .get('$_url/sport-stats/$id', options: Options(headers: _headers));
    if (response.statusCode != 200) {
      return null;
    }

    return SportStat.fromJson(response.data);
  }

  Future<Response> UpdateSportStat(SportStat sportStat) async {
    return await Dio().put('$_url/sport-stats/${sportStat.id_sport}',
        data: sportStat.toJson(), options: Options(headers: _headers));
  }
}
