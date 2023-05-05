//import 'package:far_tes/widgets/actuality_tile.dart';
//import 'package:far_tes/widgets/custom_text.dart';
//import 'package:far_tes/widgets/match_detail_tile.dart';
import 'package:fitfrenzy/widgets/custom_text.dart';
import 'package:fitfrenzy/widgets/match_detail_tile.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:group_button/group_button.dart';
import 'package:table_calendar/table_calendar.dart';

import '../controller/sport/soccer_controller.dart';
import '../models/soccer.dart';
import '../models/team.dart';

// ignore: must_be_immutable
class MatchDetailPage extends StatefulWidget {
  MatchDetailPage({super.key});
  var groupButtonController = GroupButtonController();

 @override
  _MatchDetailPageState createState() => _MatchDetailPageState();
}

class _MatchDetailPageState extends State<MatchDetailPage> {
  late List<SoccerMatch> matchesList;

  @override
  void initState() {
    super.initState();
    matchesList = [];
    _loadData();
  }

  Future<void> _loadData() async {
    final api = SoccerApi();
    final matches = await api.getAllMatches();
    setState(() {
      matchesList = matches;
    });
  }

  /* List<Team> groupTeam = [
    Team(
        teamName: 'Barcelona',
        teamLogo: 'assets/images/barcelona.png',
        score: '4'),
    Team(
        teamName: 'Mouton FC',
        teamLogo: 'assets/images/emblem.png',
        score: '2'),
    Team(
      teamName: 'Barcelona',
      teamLogo: 'assets/images/barcelona.png',
      score: '0',
    ),
    Team(
        teamName: 'Mouton FC',
        teamLogo: 'assets/images/emblem.png',
        score: '3'),
    Team(
      teamName: 'Flagada',
      teamLogo: 'assets/images/flag.png',
      score: '1',
    ),
    Team(teamName: 'Cabri FC', teamLogo: 'assets/images/flag.png', score: '2')
  ]; */


  Widget build(BuildContext context) {
    
    return Expanded(
      child: Container(
        decoration: const BoxDecoration(color: Colors.white),
        child: matchesList.isEmpty
            ? const Center(child: CircularProgressIndicator())
           /*  : Image.network(
                          "https://media-2.api-sports.io/basketball/teams/952.png",
                          width: 200
                        ), */
           /*  : ListView.builder(
              itemCount: matchesList.length,
              itemBuilder: (context, index) {
                return MatchTile(matchesList[index]);
              },
            ) */
            : ListView.builder(
                itemCount: matchesList.length,
                itemBuilder: (context, index) {
                  return MatchDetailTile(match: matchesList[index]);
                },
              ),
      ),
    );
  }
}
  /* @override
  Widget build(BuildContext context) {
    var focusDay = DateTime.now().obs;
    return Expanded(
      // height: MediaQuery.of(context).size.height,
      // width: MediaQuery.of(context).size.width ,
      child: Container(
        decoration: const BoxDecoration(color: Colors.white),
        child: /* Column(
          children: [ */
            /* Column(
              children: [
                Container(
                    color: Colors.black,
                    alignment: Alignment.centerLeft,
                    padding: const EdgeInsets.all(5),
                    child: const Text('Calendrier',
                        style: TextStyle(
                            fontWeight: FontWeight.normal,
                            fontSize: 15,
                            color: Colors.grey))),
                Obx(() => TableCalendar(
                      rangeSelectionMode: RangeSelectionMode.toggledOn,
                      headerVisible: false,
                      firstDay: DateTime.utc(2010, 10, 16),
                      lastDay: DateTime.utc(2030, 3, 14),
                      locale: 'fr_FR',
                      currentDay: DateTime.now(),
                      focusedDay: focusDay.value,
                      calendarFormat: CalendarFormat.week,
                      onDaySelected: (selectedDay, focusedDay) {
                        focusDay.value = focusedDay;
                        // ignore: avoid_print
                        print(focusedDay.day);
                      },
                      calendarStyle: const CalendarStyle(
                          todayDecoration: BoxDecoration(
                              color: Colors.amber, shape: BoxShape.circle),
                          selectedDecoration: BoxDecoration(
                              color: Colors.deepOrangeAccent,
                              shape: BoxShape.circle)),
                    )),
              ],
            ), */
            /* Expanded(
              child: Column(
                children: [
                  Container(
                      alignment: Alignment.centerLeft,
                      padding: const EdgeInsets.all(8),
                      child: CustomText(
                          text: 'European League',
                          fontWeight: FontWeight.bold,
                          size: 20)),
                  Expanded(
                    child: Container(
                      color: Colors.grey[100],
                      child: ListView(
                        children: groupTeam
                            .map((e) => MatchDetailTile(team1: e, team2: e))
                            .toList(),
                      ),
                    ),
                  ),
                ],
              ),
            )
          ], */
        ),
      ),
    );
  }
}
 */