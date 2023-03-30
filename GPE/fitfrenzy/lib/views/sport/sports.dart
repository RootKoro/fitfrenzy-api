import 'package:fitfrenzy/const/constant.dart';
import 'package:fitfrenzy/controller/sport/sport_controller.dart';
import 'package:fitfrenzy/models/sport.dart';
import 'package:fitfrenzy/widgets/news/actuality_tile.dart';
import 'package:flutter/material.dart';
import 'package:fitfrenzy/views/sport/sportDetails.dart';

class Sports extends StatefulWidget {
  const Sports({super.key});

  @override
  State<Sports> createState() => _SportsState();
}

class _SportsState extends State<Sports> {
  List<Sport> sports = [];

  @override
  void initState() {
    super.initState();
    _fetchedSports();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: back,
      appBar: AppBar(
        backgroundColor: const Color.fromARGB(255, 90, 72, 17),
        centerTitle: true,
        title: const Text("Sport"),
        actions: const [
          ProfilWidget(),
        ],
      ),
      body: ListView.builder(
          itemCount: sports.length,
          itemBuilder: (context, index) {
            return Padding(
              padding: const EdgeInsets.all(8.0),
              child: GestureDetector(
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => SportDetails(
                        id: sports[index].id!,
                      ),
                    ),
                  );
                },
                child: Container(
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Row(
                      children: [
                        Image.asset(
                          "assets/images/gym.png",
                          width: 50,
                          height: 50,
                        ),
                        const SizedBox(
                          width: 20,
                        ),
                        Text(
                          sports[index].label,
                          style: const TextStyle(
                              color: Colors.black,
                              fontSize: 18,
                              fontWeight: FontWeight.bold),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            );
          }),
    );
  }

  void _fetchedSports() async {
    await SportController().GetSports().then((s) => setState(() => sports = s));
    print('Liste des sports: ${sports.toString()}');
  }
}
