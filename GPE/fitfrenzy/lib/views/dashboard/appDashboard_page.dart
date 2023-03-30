import 'package:fitfrenzy/views/calendar/calendrier.dart';
import 'package:fitfrenzy/views/dashboard/fit_page.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../../controller/hour_controller.dart';
import '../news/actuality_page.dart';
import '../chat/chat_page.dart';

class AppDashboardPage extends StatelessWidget {
  final String? userId;
  const AppDashboardPage({Key? key, this.userId}) : super(key: key);

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
              FitPage(userId: userId),
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
              // useLegacyColorScheme: false,
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
