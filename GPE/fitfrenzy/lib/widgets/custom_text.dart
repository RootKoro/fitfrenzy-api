import 'package:flutter/material.dart';

// ignore: must_be_immutable
class CustomText extends StatelessWidget {
  CustomText(
      {super.key,
      required this.text,
      required this.fontWeight,
      required this.size});
  FontWeight fontWeight;
  String text;
  double size;
  //Color color;

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: TextStyle(fontWeight: fontWeight, fontSize: size),
    );
  }
}
