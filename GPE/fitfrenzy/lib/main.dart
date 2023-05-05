import 'package:fitfrenzy/controller/hour_controller.dart';
import 'package:fitfrenzy/views/auth/login.dart';
import 'package:fitfrenzy/views/dashboard/appDashboard_page.dart';
import 'package:fitfrenzy/views/dashboard/fit_page.dart';

import 'package:fitfrenzy/views/static/home/home.dart';
import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
// ignore: depend_on_referenced_packages
import 'package:intl/date_symbol_data_local.dart';
import 'package:get/get.dart';
import 'dart:convert';

Future<void> main() async {
  await dotenv.load();
  WidgetsFlutterBinding.ensureInitialized();
  Get.put(HourController());
  //const MyApp();
  var isExpired = await isTokenExpired();
  initializeDateFormatting().then(
    (value) => runApp(MyApp(!isExpired)),
  );
}

Future<String?> getJWT() async {
  const storage = FlutterSecureStorage();
  String? token = await storage.read(key: 'jwt');
  return token;
}

Future<bool> isTokenExpired() async {
  final jwt = await getJWT();
  if (jwt != null) {
    final parts = jwt.split('.');
    if (parts.length == 3) {
      final payload = json
          .decode(utf8.decode(base64Url.decode(base64Url.normalize(parts[1]))));
      final exp = payload['exp'] as int;
      final expiry = DateTime.fromMillisecondsSinceEpoch(exp * 1000);
      return DateTime.now().isAfter(expiry);
    }
  }
  return true;
}

class MyApp extends StatelessWidget {
  final bool isLoggedIn;

  const MyApp(this.isLoggedIn);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.amber,
        textTheme: Theme.of(context).textTheme.apply(
          bodyColor: Colors.black,
          displayColor: Colors.white,
        )
      ).copyWith(
          colorScheme: ThemeData().colorScheme.copyWith(primary: Colors.amber),
      ),
      home: //AppDashboardPage(),
          isLoggedIn ? AppDashboardPage() : const Home(),
    );
  }
}
