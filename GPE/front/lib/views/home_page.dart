import 'package:flutter/material.dart';

import '../widgets/custom_appBar.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: customAppBar(context, 'Accueil', FontWeight.bold),
      backgroundColor: Colors.black,
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: const <Widget>[
              Text('Welcome to Home Page',
                  style: TextStyle(color: Colors.white)),
              Text("___"),
              //Text(_token)
            ],
          ),
        ),
      ),
    );
  }
}
