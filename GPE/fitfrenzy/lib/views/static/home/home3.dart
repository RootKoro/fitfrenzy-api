import 'dart:async';

import 'package:flutter/material.dart';
import 'package:page_transition/page_transition.dart';

import '../../dashboard/appDashboard_page.dart';

class Home3 extends StatefulWidget {
  //final String? userId;
  const Home3({super.key, /* this.userId */});

  @override
  State<Home3> createState() => _Home3State();
}

class _Home3State extends State<Home3> {
  @override
  void initState() {
    super.initState();
    /* Timer(
      const Duration(seconds: 3),
      () => Navigator.pushReplacement(
        context,
        MaterialPageRoute(
          builder: (context) => AppDashboardPage(
            userId: widget.userId,
          ),
        ),
      ),
    ); */
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(18.0),
          child: Image.asset(
            "images/fitfrenzy_logo.png",
          ),
        ),
      ),
    );
  }
}
