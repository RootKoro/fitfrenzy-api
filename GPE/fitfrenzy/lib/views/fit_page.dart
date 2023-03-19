import 'package:easy_stepper/easy_stepper.dart';
import 'package:fitfrenzy/views/choisirImage.dart';
import 'package:fitfrenzy/views/mood_page.dart';
import 'package:fitfrenzy/views/programme.dart';
import 'package:fitfrenzy/views/sport.dart';
import 'package:get/get.dart';
import 'package:step_progress_indicator/step_progress_indicator.dart';

import '../controllers/hour_controller.dart';
import '../widgets/fit_list_tile.dart';

// ignore: must_be_immutable
class FitPage extends StatelessWidget {
  FitPage({super.key});

  RxInt hour = DateTime.now().hour.obs;
  RxInt minute = DateTime.now().minute.obs;
  RxInt second = DateTime.now().second.obs;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color.fromARGB(255, 90, 72, 17),
        centerTitle: true,
        title: const Text("Accueil"),
        /* leading: IconButton(
          icon: const Icon(Icons.arrow_back_ios_new_outlined),
          onPressed: () => Get.off(
            const AppDashboardPage(),
          ),
        ), */
      ),
      body: SingleChildScrollView(
        child: Container(
          width: MediaQuery.of(context).size.width,
          height: MediaQuery.of(context).size.height + 50,
          color: Colors.black,
          padding: const EdgeInsets.only(top: 20, left: 5, right: 5.0),
          child: Column(
            children: [
              Transform.rotate(
                  angle: 6,
                  origin: const Offset(0, 0),
                  child: const Text(
                    'FITFRENZY',
                    style: TextStyle(
                        fontSize: 20,
                        fontStyle: FontStyle.italic,
                        fontWeight: FontWeight.bold,
                        color: Colors.amber),
                  )),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  IconButton(
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => const PickImage()),
                      );
                    },
                    icon: const Icon(Icons.photo_library_outlined,
                        color: Colors.white, size: 30),
                  ),
                  IconButton(
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => MoodPage()),
                      );
                    },
                    icon: const Icon(Icons.emoji_emotions_outlined,
                        color: Colors.white, size: 30),
                  )
                ],
              ),
              const CircleAvatar(
                radius: 40,
                backgroundImage: AssetImage('assets/images/th.png'),
              ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    GestureDetector(
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => const Sport()),
                        );
                      },
                      child: const Text('Trouve ton sport',
                          style: TextStyle(color: Colors.white)),
                    ),
                    GestureDetector(
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => const Programme()),
                        );
                      },
                      child: const Text(
                        'Mon programme',
                        style: TextStyle(color: Colors.white),
                      ),
                    )
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 1),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Container(
                      height: 1,
                      width: MediaQuery.of(context).size.width / 2.5,
                      color: Colors.white,
                    ),
                    Container(
                      height: 1,
                      width: MediaQuery.of(context).size.width / 2.5,
                      color: Colors.amber,
                    )
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Container(
                      width: 100,
                      padding: const EdgeInsets.all(8),
                      decoration: BoxDecoration(
                          color: Colors.amber.withOpacity(0.3),
                          borderRadius: BorderRadius.circular(10)),
                      child: Column(
                        children: const [
                          Text('Taille', style: TextStyle(color: Colors.amber)),
                          Text('170 cm', style: TextStyle(color: Colors.white)),
                        ],
                      ),
                    ),
                    const SizedBox(
                      width: 5,
                    ),
                    Container(
                      width: 100,
                      padding: const EdgeInsets.all(8),
                      decoration: BoxDecoration(
                          color: Colors.amber.withOpacity(0.3),
                          borderRadius: BorderRadius.circular(10)),
                      child: Column(
                        children: const [
                          Text(
                            'Poids',
                            style: TextStyle(color: Colors.amber),
                          ),
                          Text(
                            '80 kg',
                            style: TextStyle(color: Colors.white),
                          ),
                        ],
                      ),
                    )
                  ],
                ),
              ),
              CircularStepProgressIndicator(
                totalSteps: 100,
                currentStep: 74,
                stepSize: 10,
                selectedColor: Colors.amber,
                unselectedColor: Colors.black,
                padding: 0,
                width: 150,
                height: 150,
                selectedStepSize: 15,
                roundedCap: (_, __) => true,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    const Text('Course', style: TextStyle(color: Colors.amber)),
                    GetBuilder<HourController>(
                      init: HourController(),
                      initState: (_) {},
                      builder: (contoller) {
                        return Text(
                            '${HourController().hour.value}:${HourController().minute.value}:${HourController().second.value}',
                            style: const TextStyle(
                                color: Colors.white, fontSize: 20));
                      },
                    ),
                    const Icon(Icons.motorcycle_outlined, color: Colors.amber)
                  ],
                ),
              ),
              Expanded(
                flex: 1,
                child: Row(
                  children: [
                    EasyStepper(
                      activeStep: 3,
                      lineLength: 20,
                      lineColor: Colors.grey,
                      lineSpace: 3,
                      lineType: LineType.normal,
                      unreachedStepIconColor: Colors.grey[300],
                      stepShape: StepShape.circle,
                      //  stepBorderRadius: 15,
                      borderThickness: 5,
                      defaultStepBorderType: BorderType.normal,
                      activeStepBorderColor: Colors.amber,
                      disableScroll: true,
                      //  padding: 20,
                      alignment: Alignment.centerLeft,
                      direction: Axis.vertical,
                      stepRadius: 25,
                      showTitle: false,
                      finishedStepBorderColor: Colors.grey,

                      finishedStepBackgroundColor: Colors.transparent,
                      activeStepIconColor: Colors.amber,

                      finishedStepIconColor: Colors.grey[300],
                      // loadingAnimation: 'assets/cat.jpg',
                      steps: const [
                        EasyStep(
                            icon: Icon(
                              Icons.directions_run_sharp,
                            ),
                            title: 'Order Placed',
                            lineText: 'Courses'),
                        EasyStep(
                          icon: Icon(
                            Icons.motorcycle_outlined,
                          ),
                          title: 'Preparing',
                        ),
                        EasyStep(
                          icon: Icon(
                            Icons.ac_unit_rounded,
                          ),
                          title: 'Shipping',
                        ),
                        EasyStep(
                          icon: Icon(
                            Icons.door_back_door,
                          ),
                          title: 'On The Way',
                        ),
                      ],
                    ),
                    Expanded(
                      child: Column(
                        children: [
                          FitListTile(
                              text: 'Courses',
                              subtitle: '30 min - cardio',
                              icon: Icons.check_circle_outline,
                              iconColor: Colors.amber),
                          FitListTile(
                              text: 'Vélo',
                              subtitle: '30 min - cardio',
                              icon: Icons.pause_circle_outline_outlined,
                              iconColor:
                                  const Color.fromARGB(255, 134, 129, 129)),
                          FitListTile(
                            text: 'Push-Up',
                            subtitle: '20 min - Haut du corps',
                            icon: Icons.play_circle_outline_outlined,
                            iconColor: const Color.fromARGB(255, 134, 129, 129),
                          ),
                        ],
                      ),
                    )
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
