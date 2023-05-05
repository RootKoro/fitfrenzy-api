import 'package:fitfrenzy/views/dashboard/fit_page.dart';
import 'package:flutter/material.dart';

class ActualityTile extends StatelessWidget {
  const ActualityTile({super.key});

  @override
  Widget build(BuildContext context) {
    return Stack(
      alignment: Alignment.bottomRight,
      children: [
        Container(
          margin: const EdgeInsets.all(5),
          alignment: Alignment.bottomLeft,
          width: 220,
          decoration: const BoxDecoration(
            color: Colors.red,
            image: DecorationImage(
              fit: BoxFit.cover,
              image: AssetImage('assets/images/th1.png'),
            ),
          ),
          // height: 100,
          child: Container(
            color: Colors.amber.withOpacity(0.7),
            padding: const EdgeInsets.all(4),
            alignment: Alignment.centerLeft,
            height: 50,
            width: 220,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.end,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: const [
                Text('Titre de l\'actualité'),
                SizedBox(height: 10),
                Text('Aperçu'),
              ],
            ),
          ),
        ),
        Positioned(
          bottom: 30,
          right: 5,
          child: IconButton(
            icon: const Icon(
              Icons.play_circle_outline_outlined,
              color: Colors.white,
              size: 30,
            ),
            onPressed: () {},
          ),
        )
      ],
    );
  }
}

class ActualityTile2 extends StatelessWidget {
  const ActualityTile2({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.all(5),
      alignment: Alignment.bottomLeft,
      width: 235,
      height: 130,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(15),
        image: const DecorationImage(
          fit: BoxFit.contain,
          image: AssetImage('assets/images/th10.png'),
        ),
      ),
    );
  }
}

class ProfilWidget extends StatelessWidget {
  const ProfilWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(builder: (context) => FitPage()),
        );
      },
      child: Container(
        margin: const EdgeInsets.all(8),
        child: Stack(
          children: [
            Positioned(
              left: 24,
              bottom: 13,
              child: Container(
                height: 50,
                width: 20,
                decoration: const BoxDecoration(
                    color: Colors.green, shape: BoxShape.circle),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class AllActuality extends StatelessWidget {
  const AllActuality({super.key});

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Column(
        children: [
          SizedBox(
            height: 160,
            child: ListView.builder(
                scrollDirection: Axis.horizontal,
                shrinkWrap: true,
                padding: const EdgeInsets.all(5),
                itemBuilder: (context, index) {
                  return const ActualityTile();
                }),
          ),
          const SizedBox(
            height: 10,
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                const Text(
                  'A venir',
                  style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                      color: Colors.white),
                ),
                TextButton(
                  child: const Text(
                    'Voir',
                    style: TextStyle(fontSize: 14, color: Colors.grey),
                  ),
                  onPressed: () {},
                ),
              ],
            ),
          ),
          Expanded(
            child: SizedBox(
              height: 160,
              child: ListView.builder(
                  scrollDirection: Axis.horizontal,
                  shrinkWrap: true,
                  padding: const EdgeInsets.all(5),
                  itemBuilder: (context, index) {
                    return const ActualityTile2();
                  }),
            ),
          ),
        ],
      ),
    );
  }
}
