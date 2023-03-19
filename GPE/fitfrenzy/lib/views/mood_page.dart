//import 'package:far_tes/views/actuality_page.dart';
import 'package:fitfrenzy/views/appDashboard_page.dart';
import 'package:flutter/material.dart';
import '../models/moodTile.dart';
import '../widgets/actuality_tile.dart';
import '../widgets/button_widget.dart';
import '../widgets/mood_tile.dart';

// ignore: must_be_immutable
class MoodPage extends StatelessWidget {
  MoodPage({super.key});

  List mood = [
    MoodTileMod(
        text: 'Je  me sens d\'attaque a soulever des montagnes',
        color: Colors.white),
    MoodTileMod(
        text: 'On va faire une séance tranquille aujourd\'hui',
        color: Colors.yellow),
    MoodTileMod(text: '0 énergie boujour.......', color: Colors.white)
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        leading: IconButton(
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => const AppDashboardPage()),
            );
          },
          icon: const Icon(Icons.arrow_back_ios_new_outlined),
          color: Colors.white,
        ),
        backgroundColor: const Color.fromARGB(255, 90, 72, 17),
        centerTitle: true,
        title: const Text("Mon Mood"),
        actions: const [ProfilWidget()],
      ),
      body: ListView(
        children: mood.map((e) {
          return Container(
              padding: const EdgeInsets.all(8), child: MoodTile(text: e.text));
        }).followedBy([
          Container(
            width: 50,
            padding: const EdgeInsets.all(30),
            child: ButtonWidget(
                name: 'Démarrer',
                color: Colors.amber,
                voidCallback: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (context) => const AppDashboardPage()),
                  );
                },
                radius: 15.0,
                width: 100.0),
          )
        ]).toList(),
      ),
    );
  }
}
