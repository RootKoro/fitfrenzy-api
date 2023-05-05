//import 'package:far_tes/widgets/actuality_tile.dart';
//import 'package:far_tes/widgets/custom_text.dart';
//import 'package:far_tes/widgets/match_detail_tile.dart';
import 'package:fitfrenzy/widgets/custom_text.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:group_button/group_button.dart';
import 'package:table_calendar/table_calendar.dart';

import '../controller/news/news_controller.dart';
import '../models/basketball_player.dart';
import '../models/team.dart';
import '../models/team_basket.dart';
import '../widgets/match_detail_tile.dart';
import '../widgets/match_details_basket_tile.dart';
import '../widgets/player_detail_tile.dart';


// ignore: must_be_immutable
class BasketballDetailPage extends StatefulWidget {
  BasketballDetailPage({super.key});
  var groupButtonController = GroupButtonController();

  @override
  State<StatefulWidget> createState() => _BasketballDetailPageState();
}

class _BasketballDetailPageState extends State<BasketballDetailPage> {
  List<BasketballPlayer> players = [
    BasketballPlayer(
        playerName: 'LeBron James',
        playerPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPDGbBBjP-RCqT1jjO9qb8jesi71JPXDC92u_brnmaDABX4toYpeI9&s=0',
        linkPlayer: 'https://www.google.com/search?q=LeBron+James&stick=H4sIAAAAAAAAAOOQUeLUz9U3MMyqMksxEkxKLM5OLUlKzMlRKMhJrEwtiuJCCJ1iRCg9xcgBYpuaJBtChVPKDU2LTjFygdgFKXlZ5hlQNSaWxUlQpqVpXgVUSXJRRlVhLlRvekURyBywhHF5UnaOKVTCyNQ8pfAXo6ATursaWBgXsfL4pDoV5ecpeCXmphbfYpNkKHl2bZYNo9yaw0XCH0pXekYmu7S2efxL3AIAw8qFxuYAAAA&sa=X&ved=2ahUKEwjekufj1dv-AhW3lYkEHYr3CsIQs9oBKAB6BAhZEAI'),
    BasketballPlayer(
        playerName: 'Michael Jordan',
        playerPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz594-67d7tgmw10s8nvK-HM_B6rTVxeSLaGgQWtqJlt5vFZxwnjsU&s=0',
        linkPlayer: 'https://www.google.com/search?q=Michael+Jordan&stick=H4sIAAAAAAAAAOOQUeLQz9U3MDVJNjQSTEoszk4tSUrMyVEoyEmsTC2K4kIInWLkBKk0zKoySznFCNcFFU4pNzQtOsXIBWIXpORlmWdA1ZhYFidBmZameRVQJclFGVWFuVC96RVFIHPAEsblSdk5plAJI1PzlMJfjIJO6O5qYGFcxMrnm5mckZiao-CVX5SSmHeLTZKh5Nm1WTaMcmsOFwl_KF3pGZns0trm8S9xCwB4wZJ85wAAAA&sa=X&ved=2ahUKEwjekufj1dv-AhW3lYkEHYr3CsIQs9oBKAF6BAhZEAM'),
    BasketballPlayer(
        playerName: 'Stephen Curry',
        playerPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe-XvZtnWy-YNiQxG2ZKIwe8QbKADFYfNVaDEZDzZmsaQQ5_JoS2lb&s=0',
        linkPlayer: 'https://www.google.com/search?q=Stephen+Curry&stick=H4sIAAAAAAAAAOOQUeLUz9U3SCk3NC0yEkxKLM5OLUlKzMlRKMhJrEwtiuJCCJ1iBCs1zKoySznFyAFim5okG0KFwSacYuQCsQtS8rLMM6BqTCyLk6BMS9O8CqiS5KKMqsJcqN70iiKQOWAJ4_Kk7BxTqISRqXlK4S9GQSd0dzWwMC5i5Q0uSS3ISM1TcC4tKqq8xSbJUPLs2iwbRrk1h4uEP5Su9IxMdmlt8_iXuAUAc7T9yecAAAA&sa=X&ved=2ahUKEwjekufj1dv-AhW3lYkEHYr3CsIQs9oBKAJ6BAhZEAQ'),
    BasketballPlayer(
        playerName: 'Giannis Antetokoun...',
        playerPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTymD1sYfV2RzPPEVGYi5-5fLmoF_tHTk-2qireQK3XPWYlI7bpcuAm&s=0',
        linkPlayer: 'https://www.google.com/search?q=Giannis+Antetokounmpo&stick=H4sIAAAAAAAAAOOQUeLSz9U3KEjJyzLPMBJMSizOTi1JSszJUSjISaxMLYriQgidYuQEqTXMqjJLOcXIAWKbmiQbQoVTyg1Ni04xIhkHVWNiWZwEZVqa5lVAlSQXZVQV5kL1plcUgcwBSxiXJ2XnmEIljEzNUwp_MQo6oburgYVxEauoe2ZiXl5msYJjXklqSX52fmlebkH-LTZJhpJn12bZMMqtOVwk_KF0pWdksktrm8e_xC0A42W3qvAAAAA&sa=X&ved=2ahUKEwjekufj1dv-AhW3lYkEHYr3CsIQs9oBKAN6BAhZEAU'),

    BasketballPlayer(
        playerName: 'Kareem Abdul‑Jabbar',
        playerPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpX5OAGyy6r5lHXuOXkXnja624UOytZYz45zrEAfNVdaJLHUjcJ-6J&s=0',
        linkPlayer: 'https://www.google.com/search?q=Kareem+Abdul-Jabbar&stick=H4sIAAAAAAAAAOOQUeLQz9U3MLEsTjISTEoszk4tSUrMyVEoyEmsTC2K4kIInWLkBKk0zKoySznFCNZlapJsCBVOKTc0LTrFyAViF6TkZZlnQNWATIYyLU3zKqBKkosyqgpzoXrTK4pA5oAljMuTsnNMoRJGpuYphb8YBZ3Q3dXAwriIVdg7sSg1NVfBMSmlNEfXKzEpKbHoFpskQ8mza7NsGOXWHC4S_lC60jMy2aW1zeNf4hYArAewFuwAAAA&sa=X&ved=2ahUKEwjekufj1dv-AhW3lYkEHYr3CsIQs9oBKAR6BAhZEAY'),
    BasketballPlayer(
        playerName:  'Magic Johnson',
        playerPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_61AztTwRepn7c5KK-5aerMGCWCBnALkL9O4xAylXhmN5F8OnAiI&s=0',
        linkPlayer:  'https://www.google.com/search?q=Magic+Johnson&stick=H4sIAAAAAAAAAOOQUeLQz9U3sDTNqzASTEoszk4tSUrMyVEoyEmsTC2K4kIInWLkBKk0zKoySznFCNZlapJsCBVOKTc0LTrFyAViF6TkZZlnQNWYWBYnQZkgS6BKkosyqgpzoXrTK4pA5oAljMuTsnNMoRJGpuYphb8YBZ3Q3dXAwriIldc3MT0zWcErPyOvOD_vFpskQ8mza7NsGOXWHC4S_lC60jMy2aW1zeNf4hYAlUmtnuYAAAA&sa=X&ved=2ahUKEwjekufj1dv-AhW3lYkEHYr3CsIQs9oBKAV6BAhZEAc'),
  ];

    List<Team> groupTeam = [
    Team(
        teamName: 'Los Angeles Lakers',
        teamLogo: 'images/lakers.png',
        score: '100'),
    Team(
        teamName: 'Golden State Warr.',
        teamLogo: 'images/golden.png',
        score: '127'),
    Team(
      teamName: 'Barcelona',
      teamLogo: 'images/barcelona.png',
      score: '0',
    ),
    Team(
        teamName: 'Mouton FC',
        teamLogo: 'images/emblem.png',
        score: '3'),
    Team(
      teamName: 'Flagada',
      teamLogo: 'images/flag.png',
      score: '1',
    ),
    Team(
      teamName: 'Cabri FC',
      teamLogo: 'images/flag.png',
      score: '2'
    )
  ];

  List<Widget> matchBasket = [
    MatchDetailsBasketTile(
      team1:   TeamBasket(
        teamName: 'Los Angeles Lakers',
        teamLogo: 'images/lakers.png',
        score: '100',
        win: false,
        date: 'Mardi 11 avril 2023'
      ),
        team2: TeamBasket(
        teamName: 'Golden State Warr.',
        teamLogo: 'images/golden.png',
        score: '127',
        win: true,
        date: 'Mardi 11 avril 2023'
      )
    ),
    MatchDetailsBasketTile(
      team1:   TeamBasket(
        teamName: 'Toronto',
        teamLogo: 'images/toronto.png',
        score: '105',
        win: false,
        date: 'Mercredi 12 avril 2023'
      ),
        team2: TeamBasket(
        teamName: 'Chicago',
        teamLogo: 'images/chicago.png',
        score: '109',
        win: true,
        date: 'Mercredi 12 avril 2023'
      )
    ),
    MatchDetailsBasketTile(
      team1:   TeamBasket(
        teamName: 'New Orleans',
        teamLogo: 'images/orleans.png',
        score: '118',
        win: false,
        date: 'Mercredi 12 avril 2023'
      ),
      team2: TeamBasket(
        teamName: 'Oklahoma City',
        teamLogo: 'images/oklahoma.jpeg',
        score: '123',
        win: true,
        date: 'Mercredi 12 avril 2023'
      )
    ),
    MatchDetailsBasketTile(
      team1:   TeamBasket(
        teamName: 'Miami',
        teamLogo: 'images/miami.png',
        score: '102',
        win: true,
        date: 'Vendredi 14 avril 2023'
      ),
        team2: TeamBasket(
        teamName: 'Chicago',
        teamLogo: 'images/chicago.png',
        score: '91',
        win: true,
        date: 'Vendredi 14 avril 2023'
      )
    ),
    MatchDetailsBasketTile(
      team1:   TeamBasket(
        teamName: 'Minnesota',
        teamLogo: 'images/minnesota.png',
        score: '120',
        win: true,
        date: 'Vendredi 14 avril 2023'
      ),
      team2: TeamBasket(
        teamName: 'Oklahoma City',
        teamLogo: 'images/oklahoma.jpeg',
        score: '95',
        win: false,
        date: 'Vendredi 14 avril 2023'
      )
    )
  ];

  @override
  Widget build(BuildContext context) {
    var focusDay = DateTime.now().obs;
    if (players.isEmpty){
      return const Center(
        child: CircularProgressIndicator()
      );
    }
    else {
      return Expanded(
        // height: MediaQuery.of(context).size.height,
        // width: MediaQuery.of(context).size.width ,
        child: Container(
          decoration: const BoxDecoration(color: Colors.white),
          child: Column(
            children: [
              Expanded(
                child: Column(
                  children: [
                    Container(
                        alignment: Alignment.centerLeft,
                        padding: const EdgeInsets.all(8),
                        child: CustomText(
                            text: 'Toutes les actualités sur le basketball',
                            fontWeight: FontWeight.bold,
                            size: 30)),
                    Expanded(
                      child: Column(
                        children: [
                          Container(
                              alignment: Alignment.centerLeft,
                              padding: const EdgeInsets.all(8),
                              child: CustomText(
                                  text: 'Joueurs de basketball',
                                  fontWeight: FontWeight.bold,
                                  size: 20)
                          ),
                          Expanded(
                            child: Container(
                              height: 160,
                              color: Colors.grey[100],
                              child: ListView(
                                scrollDirection: Axis.horizontal,
                                shrinkWrap: true,
                                padding: const EdgeInsets.all(5),
                                children: players
                                    .map((e) => PlayerDetailTile(player: e))
                                    .toList(),
                              ),
                            ),
                          ),
                          Expanded(
                            child: Column(
                              children: [
                                Container(
                                    alignment: Alignment.centerLeft,
                                    padding: const EdgeInsets.all(8),
                                    child: CustomText(
                                        text: 'NBA',
                                        fontWeight: FontWeight.bold,
                                        size: 20)),
                                Expanded(
                                  child: Container(
                                    color: Colors.grey[100],
                                    child: ListView(
                                      children: matchBasket
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          )
                        ],
                ),
              )
            ],
          ),
        )
      ],
    ),
  ),
      );
    }
  }
}
