import 'package:fitfrenzy/views/match_details_page.dart';
import 'package:fitfrenzy/widgets/news/actuality_tile.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:group_button/group_button.dart';

import '../../controller/hour_controller.dart';
import '../../widgets/appBar/custom_appBar.dart';
import '../../widgets/textform_widget.dart';

// ignore: must_be_immutable
class ActualityPage extends StatelessWidget {
  ActualityPage({super.key});
  var controller = TextEditingController();

  var groupButtonScrollController = ScrollController();
  HourController hourController = Get.find();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: customAppBar(context, 'Explore', FontWeight.bold),
      // ignore: avoid_unnecessary_containers
      body: Container(
          // height: MediaQuery.of(context).size.height,
          // width: MediaQuery.of(context).size.width ,
          child: Obx(
        () => Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Container(
                    constraints:
                        const BoxConstraints(minWidth: 240, minHeight: 30),
                    child: TextFormWidget(
                      controller: controller,
                      hintText: 'Recherche',
                    ),
                  ),
                  const SizedBox(
                    width: 20,
                  ),
                  Container(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(10),
                      color: Colors.amber,
                    ),
                    child: IconButton(
                      onPressed: () {},
                      icon: const Icon(Icons.search),
                      color: Colors.white,
                    ),
                  )
                ],
              ),
            ),
            GetBuilder<HourController>(
              init: HourController(),
              builder: (controller) {
                var groupButtonController = GroupButtonController(
                  selectedIndex: controller.checker.value,
                );
                return SingleChildScrollView(
                  scrollDirection: Axis.horizontal,
                  child: GroupButton(
                    enableDeselect: true,
                    isRadio: true,
                    maxSelected: 1,
                    onSelected: (value, index, isSelected) {
                      groupButtonController
                          .unselectIndex(controller.checker.value);
                      // groupButtonController
                      //     .unselectIndex(controller.checker.value);
                      groupButtonController.selectIndex(index);

                      controller.checker.value = index;
                    },
                    controller: groupButtonController,
                    options: GroupButtonOptions(
                        selectedTextStyle: const TextStyle(color: Colors.white),
                        unselectedTextStyle:
                            const TextStyle(color: Colors.white),
                        selectedColor: Colors.amber,
                        unselectedColor: Colors.black,
                        borderRadius: BorderRadius.circular(10),
                        direction: Axis.horizontal,
                        groupingType: GroupingType.row),
                    buttons: const [
                      'All',
                      'Football',
                      'Volleyball',
                      'Basketball'
                    ],
                  ),
                );
              },
            ),
            if (hourController.checker.value == 0)
              const AllActuality()
            else if (hourController.checker.value == 1)
              MatchDetailPage()
          ],
        ),
      )),
    );
  }
}
