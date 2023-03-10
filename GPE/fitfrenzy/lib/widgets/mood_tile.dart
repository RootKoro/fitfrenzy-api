import 'package:flutter/material.dart';

// ignore: must_be_immutable
class MoodTile extends StatelessWidget {
  MoodTile({super.key, required this.text});
  String text;
  // Color color;
  @override
  Widget build(BuildContext context) {
    return ListTile(
      leading: const CircleAvatar(
        // backgroundColor: color,
        backgroundImage: AssetImage('assets/images/gym.png'),
      ),
      title: Text(
        text,
        style: const TextStyle(color: Colors.white),
      ),
    );
  }
}
