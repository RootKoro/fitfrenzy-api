import 'package:fitfrenzy/const/constant.dart';
import 'package:fitfrenzy/widgets/actuality_tile.dart';
import 'package:flutter/material.dart';

class SportDetails extends StatefulWidget {
  const SportDetails({super.key, required this.titre});

  // ignore: prefer_typing_uninitialized_variables
  final titre;

  @override
  State<SportDetails> createState() => _SportDetailsState();
}

class _SportDetailsState extends State<SportDetails> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: back,
      appBar: AppBar(
        backgroundColor: const Color.fromARGB(255, 90, 72, 17),
        centerTitle: true,
        // ignore: prefer_interpolation_to_compose_strings
        title: Text("Détails sur le " + widget.titre),
        actions: const [
          ProfilWidget(),
        ],
      ),
      body: const Center(
        child: Text(
          "Details Details Details Details Details",
          style: TextStyle(color: Colors.white),
        ),
      ),
    );
  }
}
