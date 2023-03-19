import 'package:fitfrenzy/const/constant.dart';
import 'package:fitfrenzy/widgets/actuality_tile.dart';
import 'package:flutter/material.dart';
import 'package:fitfrenzy/views/sportDetails.dart';

class Sport extends StatefulWidget {
  const Sport({super.key});

  @override
  State<Sport> createState() => _SportState();
}

class _SportState extends State<Sport> {
  List<String> sport = ["Foot", "Basket", "Natation"];
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
          itemCount: sport.length,
          itemBuilder: (context, index) {
            return Padding(
              padding: const EdgeInsets.all(8.0),
              child: GestureDetector(
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => SportDetails(
                        titre: sport[index].toString(),
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
                          sport[index],
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
}
