import 'package:fitfrenzy/views/dashboard/appDashboard_page.dart';
import 'package:flutter/material.dart';

import '../news/actuality_tile.dart';

// class CustomAppBar extends StatelessWidget {
//   const CustomAppBar({super.key});

//   @override
PreferredSizeWidget customAppBar(
    BuildContext context, String text, FontWeight fontWeight) {
  return AppBar(
    backgroundColor: const Color.fromARGB(255, 90, 72, 17),
    centerTitle: true,
    leading: IconButton(
      onPressed: () {
        Navigator.push(
          context,
          MaterialPageRoute(builder: (context) => const AppDashboardPage()),
        );
      },
      icon: const Icon(Icons.arrow_back_ios_new_outlined),
      color: Colors.white,
    ),
    title: Text(
      text,
      style: TextStyle(fontWeight: fontWeight),
    ),
    actions: const [
      ProfilWidget(),
    ],
  );
}
// }