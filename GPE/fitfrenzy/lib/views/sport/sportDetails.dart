import 'package:fitfrenzy/const/constant.dart';
import 'package:fitfrenzy/controller/sport/sport_controller.dart';
import 'package:fitfrenzy/models/sport.dart';
import 'package:fitfrenzy/widgets/news/actuality_tile.dart';
import 'package:flutter/material.dart';

class SportDetails extends StatefulWidget {
  final String id;
  const SportDetails({super.key, required this.id});

  // ignore: prefer_typing_uninitialized_variables

  @override
  State<SportDetails> createState() => _SportDetailsState();
}

class _SportDetailsState extends State<SportDetails> {
  Sport sport = Sport();
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _fetchSport();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: back,
      appBar: AppBar(
        backgroundColor: const Color.fromARGB(255, 90, 72, 17),
        centerTitle: true,
        // ignore: prefer_interpolation_to_compose_strings
        title: Text("Détails sur le " + sport.label),
        actions: const [
          ProfilWidget(),
        ],
      ),
      body: Center(
        child: Text(
          sport.otherInformation,
          style: const TextStyle(color: Colors.white),
        ),
      ),
    );
  }

  void _fetchSport() async {
    await SportController()
        .GetSportById(widget.id)
        .then((s) => setState(() => sport = s!));
  }
}
