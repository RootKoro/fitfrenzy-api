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
import 'dart:async';

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
  int secondsRemainingGlobalTimer = 30 * 60; // 30 minutes in seconds
  int secondsRemainingFirstExercise = 10 * 60; // 10 minutes in seconds
  int secondsRemainingSecondExercise = 10 * 60; // 10 minutes in seconds
  int secondsRemainingThirdExercise = 10 * 60; // 10 minutes in seconds

  Timer? timerGlobal;
  Timer? timerFirstExercise;
  Timer? timerSecondExercise;
  Timer? timerThirdExercise;

  late VideoPlayerController videoControllerService;
  late VideoPlayerController videoControllerReception;
  late VideoPlayerController videoControllerPasse;

  //determines when the program started
  bool buttonStartEnabled = false;

  //Describe the state of video
  bool isFirstVideoPlaying = false;
  bool isFirstVideoFinish = false;

  bool isSecondVideoPlaying = false;
  bool isSecondVideoFinish = false;

  bool isThirdVideoPlaying = false;
  bool isThirdVideoFinish = false;

  String buttonText = "Démarrer";

  bool showIconFisrtVideo = false;
  bool showIconSecondVideo = false;
  bool showIconThirdVideo = false;

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
          showIconSecondVideo = true;
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
          showIconThirdVideo = true;
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

  String get timerText {
    int minutes = (secondsRemainingGlobalTimer / 60).floor();
    int seconds = secondsRemainingGlobalTimer % 60;
    return '${minutes.toString().padLeft(2, '0')}:${seconds.toString().padLeft(2, '0')}';
  }

  void startTimer() {
    timerGlobal = Timer.periodic(Duration(seconds: 1), (timer) {
      setState(() {
        if (secondsRemainingGlobalTimer > 0) {
          secondsRemainingGlobalTimer--;
        } else {
          timerGlobal?.cancel();
        }
      });
    });
  }

  void stopTimer() {
    timerGlobal?.cancel();
  }

  String get timerTextFirstVideo {
    int minutes = (secondsRemainingFirstExercise / 60).floor();
    int seconds = secondsRemainingFirstExercise % 60;
    return '${minutes.toString().padLeft(2, '0')}:${seconds.toString().padLeft(2, '0')}';
  }

  void startTimerFirstVideo() {
    timerFirstExercise = Timer.periodic(Duration(seconds: 1), (timer) {
      setState(() {
        if (secondsRemainingFirstExercise > 0) {
          secondsRemainingFirstExercise--;
        } else {
          timerFirstExercise?.cancel();
        }
      });
    });
  }

  void stopTimerFirstVideo() {
    timerFirstExercise?.cancel();
  }

  String get timerTextSecondVideo {
    int minutes = (secondsRemainingSecondExercise / 60).floor();
    int seconds = secondsRemainingSecondExercise % 60;
    return '${minutes.toString().padLeft(2, '0')}:${seconds.toString().padLeft(2, '0')}';
  }

  void startTimerSecondVideo() {
    timerSecondExercise = Timer.periodic(Duration(seconds: 1), (timer) {
      setState(() {
        if (secondsRemainingSecondExercise > 0) {
          secondsRemainingSecondExercise--;
        } else {
          timerSecondExercise?.cancel();
        }
      });
    });
  }

  void stopTimerSecondVideo() {
    timerSecondExercise?.cancel();
  }

  String get timerTextThirdVideo {
    int minutes = (secondsRemainingThirdExercise / 60).floor();
    int seconds = secondsRemainingThirdExercise % 60;
    return '${minutes.toString().padLeft(2, '0')}:${seconds.toString().padLeft(2, '0')}';
  }

  void startTimerThirdVideo() {
    timerThirdExercise = Timer.periodic(Duration(seconds: 1), (timer) {
      setState(() {
        if (secondsRemainingThirdExercise > 0) {
          secondsRemainingThirdExercise--;
        } else {
          timerThirdExercise?.cancel();
        }
      });
    });
  }

  void stopTimerThirdVideo() {
    timerThirdExercise?.cancel();
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
                        buttonText = '';
                        showIconFisrtVideo = true;
                        startTimer();
                      }
                    });
                  },
                  style: ButtonStyle(
                    backgroundColor:
                        MaterialStateProperty.all<Color>(Colors.black),
                  ),
                  child: CircularStepProgressIndicator(
                    totalSteps: 100,
                    currentStep:
                        ((secondsRemainingGlobalTimer / 1800) * 100).toInt(),
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
                        Padding(
                            padding: const EdgeInsets.fromLTRB(0, 20, 0, 0),
                            child: Text(
                              'Démarrer',
                              style:
                                  TextStyle(color: Colors.white, fontSize: 20),
                            )),
                        Padding(
                          padding: const EdgeInsets.fromLTRB(0, 0, 0, 0),
                          child: Text(
                            secondsRemainingGlobalTimer > 0 ? timerText : '',
                            style: TextStyle(color: Colors.white, fontSize: 20),
                          ),
                        ),
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
                  if (showIconFisrtVideo)
                    isFirstVideoFinish
                        ? Icon(Icons.check_circle_outline, color: Colors.amber)
                        : InkWell(
                            onTap: () {
                              setState(() {
                                isFirstVideoPlaying = !isFirstVideoPlaying;
                                if (isFirstVideoPlaying) {
                                  videoControllerService.play();
                                  startTimer();
                                } else {
                                  videoControllerService.pause();
                                  stopTimer();
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
                  if (showIconSecondVideo)
                    isSecondVideoFinish
                        ? Icon(Icons.check_circle_outline, color: Colors.amber)
                        : InkWell(
                            onTap: () {
                              setState(() {
                                isSecondVideoPlaying = !isSecondVideoPlaying;
                                if (isSecondVideoPlaying) {
                                  videoControllerReception.play();
                                  startTimer();
                                } else {
                                  videoControllerReception.pause();
                                  stopTimer();
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
                  if (showIconThirdVideo)
                    isThirdVideoFinish
                        ? Icon(Icons.check_circle_outline, color: Colors.amber)
                        : InkWell(
                            onTap: () {
                              setState(() {
                                isThirdVideoPlaying = !isThirdVideoPlaying;
                                if (isThirdVideoPlaying) {
                                  videoControllerPasse.play();
                                  startTimer();
                                } else {
                                  videoControllerPasse.pause();
                                  stopTimer();
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
