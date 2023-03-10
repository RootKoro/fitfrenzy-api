import 'package:flutter/material.dart';

class Suite extends StatefulWidget {
  const Suite({super.key});

  @override
  State<Suite> createState() => _SuiteState();
}

class _SuiteState extends State<Suite> {
  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      backgroundColor: Colors.amber,
    );
  }
}
