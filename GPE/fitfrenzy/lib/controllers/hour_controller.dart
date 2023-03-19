import 'dart:async';

import 'package:get/get.dart';

class HourController extends GetxController {
  @override
  void onInit() {
    // ignore: todo
    // TODO: implement onInit
    super.onInit();
    Timer.periodic(const Duration(seconds: 1), (timer) {
      hour.value = DateTime.now().hour;
      minute.value = DateTime.now().minute;
      second.value = DateTime.now().second;
      update();
    });
  }

  RxInt checker = 0.obs;
  RxInt hour = DateTime.now().hour.obs;
  RxInt minute = DateTime.now().minute.obs;
  RxInt second = DateTime.now().second.obs;

  var tabIndex = 0;

  changeTabIndex(int index) {
    tabIndex = index;
    update();
  }
}
