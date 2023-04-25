import 'package:flutter/material.dart';
//import 'package:page_transition/page_transition.dart';

//import 'home3.dart';

class Valider1 extends StatefulWidget {
  final String questionText;
  final List<String> options;
  const Valider1({super.key, required this.questionText, required this.options});

  @override
  State<Valider1> createState() => _Valider1State();
}

class _Valider1State extends State<Valider1> {
  // ignore: unused_field
  List<bool> _selectedOptions = [];
  late String _activitePratiquer = "";
  late String _typeSport = "";
  late String _effortPhysique = "";
  late String _tempsDisponible = "";
  late String _joursDisponible = "";
  bool _showError = false;

  var listActivitePratiquer = [
    'Sport Collectif',
    'Sport athéltique',
    'Sport aqautique',
    'Sport nautiqe',
    'Sport de combat'
  ];

  var listTypeSport = [
    'Individuel',
    'Equipe',
  ];

  var listEffortPhysique = [
    'Cardio',
    'Souplesse',
    'Force',
  ];

  var listTempsDisponible = [
    '1 Heure',
    '2 Heure',
    '3 Heure',
    '4 Heure',
    '4 Heure',
    'plus de 4 Heure',
  ];

  var listJourDisponible = [
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
    'Dimanche',
  ];

  @override
  void initState() {
    super.initState();
    _selectedOptions =
        // ignore: avoid_types_as_parameter_names
        List<bool>.generate(widget.options.length, (int) => false);
    _activitePratiquer = '';
    _typeSport = '';
    _effortPhysique = '';
    _tempsDisponible = '';
    _joursDisponible = '';
  }

  bool _checkDropdownSelections() {
    return _activitePratiquer != "" &&
        _typeSport != "" &&
        _effortPhysique != "" &&
        _tempsDisponible != "" &&
        _joursDisponible != "";
  }

  void handleSubmitSurvey() {
    if(_checkDropdownSelections()) {

    }else {
      setState(() {
        _showError = true;
      });
    }   
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        backgroundColor: Colors.black,
        actions: <Widget>[
          Padding(
            padding: const EdgeInsets.only(right: 20),
            child: Image.asset(
              "assets/images/logo_tennis.png",
            ),
          )
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            InputDecorator(
              decoration: InputDecoration(
                enabledBorder: OutlineInputBorder(
                  borderRadius: const BorderRadius.all(
                    Radius.circular(0),
                  ),
                  borderSide: BorderSide(
                    color: _showError && _activitePratiquer == "" ? Colors.red : Colors.white
                  ),
                ),
                errorStyle: const TextStyle(color: Colors.redAccent, fontSize: 16.0),
              ),
              child: SizedBox(
                height: 40,
                child: DropdownButtonHideUnderline(
                  child: DropdownButton(
                    dropdownColor: Colors.white,
                    hint: _activitePratiquer == ""
                        ? const Text(
                            'Quelles activités physiques avez vous déja pratiquées et aimées ?',
                            style: TextStyle(fontSize: 16, color: Colors.white),
                          )
                        : Text(
                            _activitePratiquer,
                            style: const TextStyle(color: Colors.white),
                          ),
                    isExpanded: true,
                    iconSize: 30.0,
                    items: listActivitePratiquer.map(
                      (val) {
                        return DropdownMenuItem<String>(
                          value: val,
                          child: Text(
                            val,
                            style: const TextStyle(color: Colors.black),
                          ),
                        );
                      },
                    ).toList(),
                    onChanged: (val) {
                      setState(
                        () {
                          _activitePratiquer = val!;
                          _showError = false;
                        },
                      );
                       _checkDropdownSelections();
                    },
                  ),
                ),
              ),
            ),
            const SizedBox(height: 10),
            InputDecorator(
              decoration: InputDecoration(
                enabledBorder: OutlineInputBorder(
                  borderRadius: const BorderRadius.all(
                    Radius.circular(0),
                  ),
                  borderSide: BorderSide(
                    color: _showError && _typeSport == "" ? Colors.red : Colors.white
                  ),
                ),
                errorStyle: const TextStyle(color: Colors.redAccent, fontSize: 16.0),
              ),
              child: SizedBox(
                height: 40,
                child: DropdownButtonHideUnderline(
                  child: DropdownButton(
                    dropdownColor: Colors.white,
                    hint: _typeSport == ""
                        ? const Text(
                            'Préférez-vous les sports individuels ou les sports d équipe ',
                            style: TextStyle(fontSize: 16, color: Colors.white),
                          )
                        : Text(
                            _typeSport,
                            style: const TextStyle(color: Colors.white),
                          ),
                    isExpanded: true,
                    iconSize: 30.0,
                    items: listTypeSport.map(
                      (val) {
                        return DropdownMenuItem<String>(
                          value: val,
                          child: Text(
                            val,
                            style: const TextStyle(color: Colors.black),
                          ),
                        );
                      },
                    ).toList(),
                    onChanged: (val) {
                      setState(
                        () {
                          _typeSport = val!;
                          _showError = false;
                        },
                      );
                      _checkDropdownSelections();
                    },
                  ),
                ),
              ),
            ),
            const SizedBox(height: 10),
            InputDecorator(
              decoration: InputDecoration(
                enabledBorder: OutlineInputBorder(
                  borderRadius: const BorderRadius.all(
                    Radius.circular(0),
                  ),
                  borderSide: BorderSide(
                    color: _showError && _effortPhysique == "" ? Colors.red : Colors.white
                  ),
                ),
                errorStyle: const TextStyle(color: Colors.redAccent, fontSize: 16.0),
              ),
              child: SizedBox(
                height: 40,
                child: DropdownButtonHideUnderline(
                  child: DropdownButton(
                    dropdownColor: Colors.white,
                    hint: _effortPhysique == ""
                        ? const Text(
                            'Quels types d efforts physiques aimez-vous (endurance, force, souplesse, etc.) ?',
                            style: TextStyle(fontSize: 16, color: Colors.white),
                          )
                        : Text(
                            _effortPhysique,
                            style: const TextStyle(color: Colors.white),
                          ),
                    isExpanded: true,
                    iconSize: 30.0,
                    items: listEffortPhysique.map(
                      (val) {
                        return DropdownMenuItem<String>(
                          value: val,
                          child: Text(
                            val,
                            style: const TextStyle(color: Colors.black),
                          ),
                        );
                      },
                    ).toList(),
                    onChanged: (val) {
                      setState(
                        () {
                          _effortPhysique = val!;
                          _showError = false;
                        },
                      );
                      _checkDropdownSelections();
                    },
                  ),
                ),
              ),
            ),
            const SizedBox(height: 10),
            InputDecorator(
              decoration: InputDecoration(
                enabledBorder: OutlineInputBorder(
                  borderRadius: const BorderRadius.all(
                    Radius.circular(0),
                  ),
                  borderSide: BorderSide(
                    color: _showError && _tempsDisponible == "" ? Colors.red : Colors.white
                  ),
                ),
                errorStyle: const TextStyle(color: Colors.redAccent, fontSize: 16.0),
              ),
              child: SizedBox(
                height: 40,
                child: DropdownButtonHideUnderline(
                  child: DropdownButton(
                    dropdownColor: Colors.white,
                    hint: _tempsDisponible == ""
                        ? const Text(
                            'Combien de temps par semaine êtes-vous disposé à consacrer à l’entrainement ?',
                            style: TextStyle(fontSize: 16, color: Colors.white),
                          )
                        : Text(
                            _tempsDisponible,
                            style: const TextStyle(color: Colors.white),
                          ),
                    isExpanded: true,
                    iconSize: 30.0,
                    items: listTempsDisponible.map(
                      (val) {
                        return DropdownMenuItem<String>(
                          value: val,
                          child: Text(
                            val,
                            style: const TextStyle(color: Colors.black),
                          ),
                        );
                      },
                    ).toList(),
                    onChanged: (val) {
                      setState(
                        () {
                          _tempsDisponible = val!;
                          _showError = false;
                        },
                      );
                      _checkDropdownSelections();
                    },
                  ),
                ),
              ),
            ),
            const SizedBox(height: 10),
            InputDecorator(
              decoration: InputDecoration(
                enabledBorder: OutlineInputBorder(
                  borderRadius: const BorderRadius.all(
                    Radius.circular(0),
                  ),
                  borderSide: BorderSide(
                    color: _showError && _joursDisponible == "" ? Colors.red : Colors.white
                  ),
                ),
                errorStyle: const TextStyle(color: Colors.redAccent, fontSize: 16.0),
              ),
              child: SizedBox(
                height: 40,
                child: DropdownButtonHideUnderline(
                  child: DropdownButton(
                    dropdownColor: Colors.white,
                    hint: _joursDisponible == ""
                        ? const Text(
                            'Quels sont les jours et les horaires auxquels vous êtes disponibles pour vous entraîner ?',
                            style: TextStyle(fontSize: 16, color: Colors.white),
                          )
                        : Text(
                            _joursDisponible,
                            style: const TextStyle(color: Colors.white),
                          ),
                    isExpanded: true,
                    iconSize: 30.0,
                    items: listJourDisponible.map(
                      (val) {
                        return DropdownMenuItem<String>(
                          value: val,
                          child: Text(
                            val,
                            style: const TextStyle(color: Colors.black),
                          ),
                        );
                      },
                    ).toList(),
                    onChanged: (val) {
                      setState(
                        () {
                          _joursDisponible = val!;
                          _showError = false;
                        },
                      );
                      _checkDropdownSelections();
                    },
                  ),
                ),
              ),
            ),
            const SizedBox(height: 20),
              ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.amber,
                  fixedSize: const Size(170, 50),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(25.0),
                  ),
                ),
                onPressed: handleSubmitSurvey,
                child: const Text("Enregistrer",
                  style: TextStyle(
                    fontSize: 15,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              const SizedBox(height: 20)
          ],
        ),
      ),
    );
  }
}
