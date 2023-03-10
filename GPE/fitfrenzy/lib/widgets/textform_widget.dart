import 'package:flutter/material.dart';

// ignore: must_be_immutable
class TextFormWidget extends StatelessWidget {
  TextFormWidget({super.key, required this.controller, required this.hintText});
  // ignore: prefer_typing_uninitialized_variables
  var controller;
  // ignore: prefer_typing_uninitialized_variables
  var hintText;
  @override
  Widget build(BuildContext context) {
    // ignore: sized_box_for_whitespace
    return Container(
      width: 100,
      child: TextFormField(
          controller: controller,
          //    validator: (value) => value == '' ? errorText : null,
          //  onSaved: (value) => controller.text = value,
          decoration: InputDecoration(
            filled: true,
            hintText: hintText,
            border: OutlineInputBorder(
                borderSide: BorderSide.none,
                borderRadius: BorderRadius.circular(10)),
            fillColor: Colors.grey.shade200,
          )),
    );
  }
}
