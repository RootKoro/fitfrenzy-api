import 'package:fitfrenzy/widgets/custom_text.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../models/basketball_player.dart';
import 'dart:html' as html;

// ignore: must_be_immutable
class PlayerDetailTile extends StatelessWidget {
  PlayerDetailTile({
    super.key,
    required this.player,
  });
  BasketballPlayer player;
  var focus = false.obs;
    @override
  Widget build(BuildContext context) {
    return MouseRegion(
      cursor: SystemMouseCursors.click,
      child: GestureDetector(
      onTap: () {
        html.window.open(player.linkPlayer, '');
      },
      child: Container(
      margin: const EdgeInsets.all(5),
      alignment: Alignment.bottomLeft,
      width: 235,
      height: 130,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(15),
        image: DecorationImage(
          fit: BoxFit.contain,
          image: true ? NetworkImage(player.playerPhoto) : AssetImage('assets/images/th10.png') as ImageProvider,
        ),
      ),
      child: Container(
          color: Colors.grey.withOpacity(0.7),
          padding: const EdgeInsets.all(4),
          alignment: Alignment.centerLeft,
          height: 50,
          margin: const EdgeInsets.only(bottom: 35),
          width: MediaQuery.of(context).size.width,

          child: Column(
            mainAxisAlignment: MainAxisAlignment.end,
            crossAxisAlignment: CrossAxisAlignment.start,

            children: [
              Text(
                player.playerName,
                style: const TextStyle(fontWeight: FontWeight.bold)
              ),
              SizedBox(height: 10),
            ],
          ),
          ),
    )));
  }
}

// ignore: must_be_immutable
class TeamTile extends StatelessWidget {
  TeamTile(
      {super.key,
      required this.teamName,
      required this.teamLogo,
      required this.score});
  String teamName, score;
  String teamLogo;
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: ListTile(
        style: ListTileStyle.list,
        title:
            CustomText(text: teamName, fontWeight: FontWeight.normal, size: 15),
        leading: Image.asset(teamLogo),
        trailing:
            CustomText(text: score, fontWeight: FontWeight.bold, size: 18),
      ),
    );
  }
}
