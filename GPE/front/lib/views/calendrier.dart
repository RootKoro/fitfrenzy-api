import 'package:fitfrenzy/widgets/actuality_tile.dart';

import 'package:flutter/material.dart';
import 'package:flutter_calendar_carousel/flutter_calendar_carousel.dart';

class Calendrier extends StatefulWidget {
  const Calendrier({super.key});

  @override
  // ignore: library_private_types_in_public_api
  _CalendrierState createState() => _CalendrierState();
}

class _CalendrierState extends State<Calendrier> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor:
          const Color.fromARGB(255, 126, 126, 126).withOpacity(0.4),
      appBar: AppBar(
        backgroundColor: const Color.fromARGB(255, 90, 72, 17),
        centerTitle: true,
        title: const Text("Chatt"),
        actions: const [ProfilWidget()],
      ),
      body: Center(
        child: CalendarCarousel(
          todayBorderColor: Colors.white,
          locale: "fr",
          weekendTextStyle: const TextStyle(color: Colors.white),
          thisMonthDayBorderColor: Colors.grey,
          daysHaveCircularBorder: false,
        ),
      ),
      /* SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            TableCalendar(
              //calendarController: _calendarController,
              firstDay: DateTime.utc(2010, 10, 16),
              lastDay: DateTime.utc(2030, 3, 14),
              focusedDay: DateTime.now(),
            ),
          ],
        ),
      ), */
      /* TableCalendar(
        calendarStyle: CalendarStyle(
          isTodayHighlighted: true,
          selectedDecoration: BoxDecoration(
            color: Colors.white,
            shape: BoxShape.rectangle,
            borderRadius: BorderRadius.circular(5.0),
          ),
          withinRangeDecoration: BoxDecoration(color: Colors.white),
          rowDecoration: BoxDecoration(color: Colors.white),
          selectedTextStyle: TextStyle(color: Colors.white),
          todayDecoration: BoxDecoration(
            color: Colors.black,
            shape: BoxShape.rectangle,
            borderRadius: BorderRadius.circular(5.0),
          ),
          defaultDecoration: BoxDecoration(
            //color: Colors.amber,
            shape: BoxShape.rectangle,
            borderRadius: BorderRadius.circular(5.0),
          ),
          weekendDecoration: BoxDecoration(
            //color: Colors.red,
            shape: BoxShape.rectangle,
            borderRadius: BorderRadius.circular(5.0),
          ),
        ),
        headerStyle: HeaderStyle(
          formatButtonVisible: true,
          titleCentered: true,
          formatButtonShowsNext: false,
          formatButtonDecoration: BoxDecoration(
            color: Colors.blue,
            borderRadius: BorderRadius.circular(5.0),
          ),
          formatButtonTextStyle: TextStyle(
            color: Colors.white,
          ),
        ),
        firstDay: DateTime.utc(2010, 10, 16),
        lastDay: DateTime.utc(2030, 3, 14),
        focusedDay: DateTime.now(),
      ), */
    );
  }
}
