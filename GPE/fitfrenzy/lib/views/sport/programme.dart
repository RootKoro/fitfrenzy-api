import 'package:fitfrenzy/const/constant.dart';
import 'package:fitfrenzy/widgets/news/actuality_tile.dart';
import 'package:flutter/material.dart';

class Programme extends StatefulWidget {
  const Programme({super.key});

  @override
  State<Programme> createState() => _ProgrammeState();
}

class _ProgrammeState extends State<Programme> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: back,
      appBar: AppBar(
        backgroundColor: const Color.fromARGB(255, 90, 72, 17),
        centerTitle: true,
        title: const Text("Programme"),
        actions: const [ProfilWidget()],
      ),
      body: const Center(
        child: Text(
          "Mon Programme",
          style: TextStyle(
            color: Colors.white,
          ),
        ),
      ),
    );
  }
}
