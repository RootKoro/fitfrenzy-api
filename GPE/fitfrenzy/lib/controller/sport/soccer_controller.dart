


import 'package:fitfrenzy/models/soccer.dart';
import 'package:dio/dio.dart';

class SoccerApi {


  final String apiUrl = "https://v3.football.api-sports.io/fixtures?date=2023-05-04";


  var headers = {
    'x-rapidapi-key': '94a510bd9d2235a29c794ad345c333e4',
    'x-rapidapi-host': 'v3.football.api-sports.io'
    /* 'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': '97764f066bmshbc26d3c1012f25ep16fdaejsn80c22d5e6c43',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com' */
  };

  Future<List<SoccerMatch>> getAllMatches() async {
    final Response response = await Dio().get(apiUrl, options : Options(headers: headers));
    if(response.statusCode == 200) {
      
      List<dynamic> matchesList = response.data['response'];
      return matchesList.map((item) => SoccerMatch.fromJson(item)).toList();
    }
    return [];
  }
}