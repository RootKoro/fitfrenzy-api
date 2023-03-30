import 'package:fitfrenzy/views/calendrier.dart';
import 'package:fitfrenzy/views/fit_page.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../controllers/hour_controller.dart';
import 'actuality_page.dart';
import 'chat_page.dart';

class AppDashboardPage extends StatelessWidget {
  const AppDashboardPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GetBuilder<HourController>(
      builder: (controller) {
        return Scaffold(
          backgroundColor: Colors.black,
          body: SafeArea(
              child: IndexedStack(
            index: controller.tabIndex,
            children: [
              FitPage(),
              const Calendrier(),
              ActualityPage(),
              const ChatPage(),
            ],
          )),
          bottomNavigationBar: BottomNavigationBar(
              selectedItemColor: Colors.amber,
              backgroundColor: Colors.black,
              unselectedItemColor: Colors.white,
              currentIndex: controller.tabIndex,
              useLegacyColorScheme: false,
              type: BottomNavigationBarType.fixed,
              onTap: controller.changeTabIndex,
              items: [
                _BottomNavigationBarItem(Icons.home, 'Accueil'),
                _BottomNavigationBarItem(
                    Icons.date_range_outlined, 'Calendrier'),
                _BottomNavigationBarItem(Icons.newspaper_rounded, 'Actualités'),
                _BottomNavigationBarItem(
                    Icons.chat_bubble_outline_rounded, 'Chat'),
              ]),
        );
      },
    );
  }
}

// ignore: non_constant_identifier_names
_BottomNavigationBarItem(icon, label) {
  return BottomNavigationBarItem(label: label, icon: Icon(icon));
}
