import 'package:flutter/material.dart';

// ignore: must_be_immutable
class ButtonWidget extends StatelessWidget {
  ButtonWidget(
      {super.key,
      required this.name,
      required this.color,
      required this.voidCallback,
      required this.radius,
      required this.width});

  String name;
  Color color;
  VoidCallback voidCallback;
  double width;
  double radius;
  @override
  Widget build(BuildContext context) {
    // ignore: sized_box_for_whitespace
    return Container(
      width: width,
      height: 50,
      child: ElevatedButton(
        onPressed: () {
          voidCallback();
        },
        style: ButtonStyle(
            backgroundColor: MaterialStateProperty.all(color),
            shape: MaterialStateProperty.all(RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(radius))),
            elevation: MaterialStateProperty.all(1)),
        child: Text(
          name,
          style: const TextStyle(color: Colors.white),
        ),
      ),
    );
  }
}
