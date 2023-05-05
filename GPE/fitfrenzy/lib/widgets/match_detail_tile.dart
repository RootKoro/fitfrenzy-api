import 'package:fitfrenzy/models/soccer.dart';
import 'package:fitfrenzy/widgets/custom_text.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../controller/hour_controller.dart';
import '../models/team.dart';

// ignore: must_be_immutable
class MatchDetailTile extends StatelessWidget {
  MatchDetailTile({
    super.key,
    required this.match,
  });
  SoccerMatch match;
  var focus = false.obs;
  @override
  Widget build(BuildContext context) {
    // ignore: sized_box_for_whitespace
    return Container(
      height: 240,
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
               /* height: 200,
               width: 200, */

              child: GetBuilder<HourController>(
                builder: (controller) {
                  return Column(
                    children: [
                      Container(
                        padding: const EdgeInsets.all(8),
                        alignment: Alignment.centerLeft,
                        child: Text(
                          '${controller.hour.value}:${controller.minute.value} PM',
                          style: const TextStyle(color: Colors.grey),
                        ),
                      ),
                      Image.network(
                        match.home.logo,
                        width: 40
                      ),
                      TeamTile(
                          teamName: match.home.name,
                          teamLogo: match.home.logo,
                          score: match.goal.home),
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
                      TeamTile(
                          teamName: match.away.name,
                          teamLogo: match.away.logo,
                          score: match.goal.away),
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
class TeamTile extends StatelessWidget {
  TeamTile(
      {super.key,
      required this.teamName,
      required this.teamLogo,
      required this.score});
  String teamName;
  int? score;
  String teamLogo;
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(8),
      child: ListTile(
        style: ListTileStyle.list,
        title:
            CustomText(text: teamName, fontWeight: FontWeight.normal, size: 15),
        leading: Image.network(
          teamLogo,
          width: 40
        ),
        trailing:
            CustomText(text: "$score", fontWeight: FontWeight.bold, size: 18),
      ),
    );
  }
}
