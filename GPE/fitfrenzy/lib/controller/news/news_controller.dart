import 'package:dio/dio.dart';
import 'package:fitfrenzy/models/basketball_player.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';

class NewsController {
  // static final String _url = dotenv.env['IS_CLOUD'] == false
  //     ? dotenv.env['API_SPORT_URL']!
  //     : dotenv.env['API_PROXY_URL']!;

  static final String _url = dotenv.env['API_NEWS_URL']!;
  static final String _apikey = dotenv.env['API_KEY_SPORTS_NEWS']!;

  static final Map<String, String> _headers = {
    'Content-Type': 'application/json'
  };

  // ignore: non_constant_identifier_names
  Future<List<BasketballPlayer>> GetBasketballPlayers() async {
    final Response response =
        await Dio().get('$_url?q=basketball&location=france&api_key=$_apikey', options: Options(headers: _headers));
    if (response.statusCode != 200) {
      return [];
    }
    List<dynamic> jsonResponse = response.data;
    return jsonResponse.map((player) => BasketballPlayer.fromJson(player)).toList();
  }
}
