import 'package:dio/dio.dart';
import 'package:easy_stepper/easy_stepper.dart';
import 'package:fitfrenzy/views/choisirImage.dart';
import 'package:fitfrenzy/views/mood/mood_page.dart';
import 'package:fitfrenzy/views/sport/programme.dart';
import 'package:fitfrenzy/views/sport/sports.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:get/get.dart';
import 'package:step_progress_indicator/step_progress_indicator.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

import '../../controller/user/user_controller.dart';
import '../../controller/hour_controller.dart';
import '../../models/user.dart';
import '../../widgets/fit_list_tile.dart';
import '../../models/sport.dart';
import '../auth/login.dart';
import '../sport/profileScreen.dart';
import '../static/home/VideoPlayerWidget.dart';
import 'package:video_player/video_player.dart';

import '../../../controller/user/user_controller.dart';
import '../../../controller/hour_controller.dart';
import '../../../models/user.dart';
import '../../../widgets/fit_list_tile.dart';
import '../../../models/sport.dart';

// ignore: must_be_immutable
class FitPage extends StatefulWidget {
  FitPage({super.key});

  @override
  State<FitPage> createState() => _FitPageState();
}

class _FitPageState extends State<FitPage> {
  RxInt hour = DateTime.now().hour.obs;
  RxInt minute = DateTime.now().minute.obs;
  RxInt second = DateTime.now().second.obs;

  late VideoPlayerController videoControllerService;
  late VideoPlayerController videoControllerReception;
  late VideoPlayerController videoControllerPasse;

  //determines when the program started
  bool buttonStartEnabled = false;

  bool isFirstVideoPlaying = false;
  bool isFirstVideoFinish = false;

  bool isSecondVideoPlaying = false;
  bool isSecondVideoFinish = false;

  bool isThirdVideoPlaying = false;
  bool isThirdVideoFinish = false;

  @override
  void initState() {
    super.initState();
    if (widget.userId != null) _fetchedUser(widget.userId);

    //Declaration of the first video and start of the second
    videoControllerService =
        VideoPlayerController.asset('../../../assets/vidéos/service.mp4');

    videoControllerService.addListener(() {
      if (videoControllerService.value.position ==
          videoControllerService.value.duration) {
        videoControllerReception.play();
        setState(() {
          isFirstVideoFinish = true;
          isSecondVideoPlaying = true;
        });
      }
    });

    //Declaration of the second video and start of the third
    videoControllerReception =
        VideoPlayerController.asset('../../../assets/vidéos/reception.mp4');

    videoControllerReception.addListener(() {
      if (videoControllerReception.value.position ==
          videoControllerReception.value.duration) {
        videoControllerPasse.play();
        setState(() {
          isSecondVideoFinish = true;
          isThirdVideoPlaying = true;
        });
      }
    });

    //Declaration of the third video
    videoControllerPasse =
        VideoPlayerController.asset('../../../assets/vidéos/passe.mp4');

    videoControllerPasse.addListener(() {
      if (videoControllerPasse.value.position ==
          videoControllerPasse.value.duration) {
        setState(() {
          isThirdVideoFinish = true;
        });
      }
    });
  }

  @override
  void dispose() {
    videoControllerService.dispose();
    videoControllerReception.dispose();
    videoControllerPasse.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
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
                )
              ),
              SizedBox(height: 32.0),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                crossAxisAlignment: CrossAxisAlignment.center,
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
                  ),
                ],
              ),
              const CircleAvatar(
                radius: 50,
                backgroundImage: AssetImage('assets/images/th.png'),
              ),
              Padding(
                padding: const EdgeInsets.only(top: 5),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    const Text('Tom CLEMENCON',
                        style: TextStyle(color: Colors.white)),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(0, 0, 800, 0),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    const Text('Football',
                        style: TextStyle(color: Colors.white)),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(top: 10),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Container(
                      height: 1,
                      width: MediaQuery.of(context).size.width / 1.5,
                      color: Colors.white,
                    ),
                  ],
                ),
              ),

              //Play button
              Padding(
                padding: const EdgeInsets.fromLTRB(0, 15, 0, 15),
                child: ElevatedButton(
                  onPressed: () {
                    setState(() {
                      if (isFirstVideoPlaying == false &&
                          buttonStartEnabled == false) {
                        isFirstVideoPlaying = !isFirstVideoPlaying;
                        videoControllerService.play();
                        buttonStartEnabled = true;
                      }
                    });
                  },
                  style: ButtonStyle(
                    backgroundColor:
                        MaterialStateProperty.all<Color>(Colors.black),
                  ),
                  child: CircularStepProgressIndicator(
                    totalSteps: 100,
                    currentStep: 100,
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
                        const Text('Démarrer',
                            style:
                                TextStyle(color: Colors.white, fontSize: 20)),
                      ],
                    ),
                  ),
                ),
              ),

              //Program
              Padding(
                padding: const EdgeInsets.fromLTRB(0, 0, 1120, 0),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    const Text('Votre programme',
                        style: TextStyle(color: Colors.amber)),
                  ],
                ),
              ),

              //placement of the first video
              Expanded(
                child:
                    Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                  SizedBox(
                    child: Padding(
                      padding: const EdgeInsets.only(right: 30),
                      child: Container(
                        height: 150,
                        width: 300,
                        decoration: BoxDecoration(
                          border: Border.all(color: Colors.grey, width: 3),
                        ),
                        child: VideoPlayerWidget(
                            videoControllerService, false, false),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(right: 800),
                    child: Column(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Padding(
                            padding: const EdgeInsets.fromLTRB(0, 30, 20, 0),
                            child: const Text('Service',
                                style: TextStyle(color: Colors.white)),
                          ),
                          Padding(
                            padding: const EdgeInsets.fromLTRB(2, 0, 0, 130),
                            child: const Text('10 minutes',
                                style: TextStyle(color: Colors.grey)),
                          ),
                        ]),
                  ),
                  //treatment play/pause first video
                  isFirstVideoFinish
                      ? Icon(Icons.check_circle_outline, color: Colors.amber)
                      : InkWell(
                          onTap: () {
                            setState(() {
                              isFirstVideoPlaying = !isFirstVideoPlaying;
                              if (isFirstVideoPlaying) {
                                videoControllerService.play();
                              } else {
                                videoControllerService.pause();
                              }
                            });
                          },
                          child: Icon(
                            isFirstVideoPlaying
                                ? Icons.pause_circle_outline_outlined
                                : Icons.play_circle_outline_outlined,
                            color: isFirstVideoPlaying
                                ? Colors.green
                                : Colors.grey,
                          ),
                        )
                ]),
              ),

              //placement of the second video
              Expanded(
                child:
                    Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                  SizedBox(
                    child: Padding(
                      padding: const EdgeInsets.only(right: 30),
                      child: Container(
                        height: 150,
                        width: 300,
                        decoration: BoxDecoration(
                          border: Border.all(color: Colors.grey, width: 3),
                        ),
                        child: VideoPlayerWidget(
                            videoControllerReception, false, false),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(right: 800),
                    child: Column(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Padding(
                            padding: const EdgeInsets.fromLTRB(0, 30, 2, 0),
                            child: const Text('Reception',
                                style: TextStyle(color: Colors.white)),
                          ),
                          Padding(
                            padding: const EdgeInsets.fromLTRB(2, 0, 0, 130),
                            child: const Text('10 minutes',
                                style: TextStyle(color: Colors.grey)),
                          ),
                        ]),
                  ),

                  //treatment play/pause second video
                  isSecondVideoFinish
                      ? Icon(Icons.check_circle_outline, color: Colors.amber)
                      : InkWell(
                          onTap: () {
                            setState(() {
                              isSecondVideoPlaying = !isSecondVideoPlaying;
                              if (isSecondVideoPlaying) {
                                videoControllerReception.play();
                              } else {
                                videoControllerReception.pause();
                              }
                            });
                          },
                          child: Icon(
                            isSecondVideoPlaying
                                ? Icons.pause_circle_outline_outlined
                                : Icons.play_circle_outline_outlined,
                            color: isSecondVideoPlaying
                                ? Colors.green
                                : Colors.grey,
                          ),
                        ),
                ]),
              ),

              //placement of the third video
              Expanded(
                child:
                    Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                  SizedBox(
                    child: Padding(
                        padding: const EdgeInsets.only(right: 30),
                        child: Container(
                          height: 150,
                          width: 300,
                          decoration: BoxDecoration(
                            border: Border.all(color: Colors.grey, width: 3),
                          ),
                          child: VideoPlayerWidget(
                              videoControllerPasse, false, false),
                        )),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(right: 800),
                    child: Column(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Padding(
                            padding: const EdgeInsets.fromLTRB(0, 30, 25, 0),
                            child: const Text('Passe',
                                style: TextStyle(color: Colors.white)),
                          ),
                          Padding(
                            padding: const EdgeInsets.fromLTRB(2, 0, 0, 130),
                            child: const Text('10 minutes',
                                style: TextStyle(color: Colors.grey)),
                          ),
                        ]),
                  ),

                  //treatment play/pause third video
                  isThirdVideoFinish
                      ? Icon(Icons.check_circle_outline, color: Colors.amber)
                      : InkWell(
                          onTap: () {
                            setState(() {
                              isThirdVideoPlaying = !isThirdVideoPlaying;
                              if (isThirdVideoPlaying) {
                                videoControllerPasse.play();
                              } else {
                                videoControllerPasse.pause();
                              }
                            });
                          },
                          child: Icon(
                            isThirdVideoPlaying
                                ? Icons.pause_circle_outline_outlined
                                : Icons.play_circle_outline_outlined,
                            color: isThirdVideoPlaying
                                ? Colors.green
                                : Colors.grey,
                          ),
                        )
                ]),
              ),
            ],
          ),
        ),
      ),
    );
  }

}
