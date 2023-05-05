import 'package:fitfrenzy/widgets/custom_text.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../controller/hour_controller.dart';
import '../models/team_basket.dart';

// ignore: must_be_immutable
class MatchDetailsBasketTile extends StatelessWidget {
  MatchDetailsBasketTile({
    super.key,
    required this.team1,
    required this.team2,
  });
  TeamBasket team1;
  TeamBasket team2;
  var focus = false.obs;
  @override
  Widget build(BuildContext context) {
    // ignore: sized_box_for_whitespace
    return Container(
      height: 200,
      width: 200,
      child: Stack(
        children: [
          Card(
            elevation: 10,
            shape: RoundedRectangleBorder(
                side:
                    //  focus.isFalse
                    //     ? BorderSide.none
                    // :
                    const BorderSide(color: Colors.amber),
                borderRadius: BorderRadius.circular(10)),
            clipBehavior: Clip.hardEdge,
            // ignore: avoid_unnecessary_containers
            child: Container(
              // height: 200,
              // width: 200,

              child: GetBuilder<HourController>(
                builder: (controller) {
                  return Column(
                    children: [
                      Container(
                        padding: const EdgeInsets.all(8),
                        alignment: Alignment.centerLeft,
                        child: Text(
                          team1.date,
                          style: const TextStyle(color: Colors.grey),
                        ),
                      ),
                      TeamTileBasket(
                          teamName: team1.teamName,
                          teamLogo: team1.teamLogo,
                          score: team1.score,
                          win: team1.win),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.end,
                        children: [
                          CustomText(
                              text: 'VS',
                              fontWeight: FontWeight.bold,
                              size: 14),
                          Container(
                            height: 0.5,
                            width: 220,
                            margin: const EdgeInsets.only(right: 10),
                            color: Colors.grey,
                          )
                        ],
                      ),
                      TeamTileBasket(
                          teamName: team2.teamName,
                          teamLogo: team2.teamLogo,
                          score: team2.score,
                          win: team2.win),
                    ],
                  );
                },
              ),
            ),
          ),
          const Positioned(
              left: 310,
              child: Icon(
                Icons.bookmark_outlined,
                color: Colors.amber,
                size: 40,
              ))
        ],
      ),
    );
  }
}

// ignore: must_be_immutable
class TeamTileBasket extends StatelessWidget {
  TeamTileBasket(
      {super.key,
      required this.teamName,
      required this.teamLogo,
      required this.score,
      required this.win});
  String teamName, score;
  String teamLogo;
  bool win;
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: ListTile(
        style: ListTileStyle.list,
        title:
            CustomText(text: teamName, fontWeight:  win ? FontWeight.bold : FontWeight.normal, size: 15),
        leading: Image.asset(teamLogo),
        trailing:
            CustomText(text: score, fontWeight: FontWeight.bold, size: 18),
      ),
    );
  }
}
