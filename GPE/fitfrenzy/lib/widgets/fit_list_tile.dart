import 'package:flutter/material.dart';

// ignore: must_be_immutable
class FitListTile extends StatelessWidget {
  FitListTile(
      {super.key,
      required this.text,
      required this.subtitle,
      required this.icon,
      required this.iconColor});
  String text;
  String subtitle;
  IconData icon;
  Color iconColor;
  @override
  Widget build(BuildContext context) {
    return ListTile(
      title: Text(
        text,
        style:
            const TextStyle(fontWeight: FontWeight.bold, color: Colors.white),
      ),
      subtitle: Text(subtitle, style: TextStyle(color: Colors.grey[400])),
      trailing: Icon(
        icon,
        color: iconColor,
      ),
    );
  }
}
