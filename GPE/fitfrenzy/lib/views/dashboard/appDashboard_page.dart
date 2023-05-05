import 'package:fitfrenzy/views/calendar/calendrier.dart';
import 'package:fitfrenzy/views/dashboard/fit_page.dart';
import 'package:fitfrenzy/views/sport/profileScreen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:get/get.dart';

import '../../controller/hour_controller.dart';
import '../../controller/user/user_controller.dart';
import '../../models/user.dart';
import '../news/actuality_page.dart';
import '../chat/chat_page.dart';
import '../static/home/home3.dart';

class AppDashboardPage extends StatefulWidget {
  final String? userId;
  const AppDashboardPage({Key? key, this.userId}) : super(key: key);


  State<AppDashboardPage> createState() => _AppDashboardPageState();

}

class _AppDashboardPageState extends State<AppDashboardPage> {
  final storage = const FlutterSecureStorage();
  late String? token;
  late User? _user;

  
  @override
  void initState() {
    _user = null;
    super.initState();
    if (_user == null) {
      print("null");
      fetchUser();
    }
  }

  Future<void> fetchUser() async {
    token = await storage.read(key: 'jwt');
    final user = await UserController().getUserInfo(token);
    setState(() {
      _user = user!;
    }); 
  }

  void logout() {
    setState(() {
      _user = null;
    });
  }

  @override
  Widget build(BuildContext context) {
    return GetBuilder<HourController>(
      builder: (controller) {
        if(_user == null) {
          controller.tabIndex = 0;
          return const Home3();

        }else {
          return Scaffold(
            backgroundColor: Colors.black,
            body: SafeArea(
                child: IndexedStack(
              index: controller.tabIndex,
              children: [
                FitPage(),
                const Calendrier(),
                ActualityPage(),
                ProfileScreen(user: _user!, onLogout: logout),
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
                      Icons.person, 'Profile'),
                ]),
          );
        }
      },
    );
  }
}

// ignore: non_constant_identifier_names
_BottomNavigationBarItem(icon, label) {
  return BottomNavigationBarItem(label: label, icon: Icon(icon));
}
