//import 'package:far_tes/views/valider1.dart';
import 'package:dio/dio.dart';
import 'package:fitfrenzy/controller/auth/auth_controller.dart';
import 'package:fitfrenzy/models/user.dart';
import 'package:fitfrenzy/views/valider1.dart';
import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:intl/intl.dart';
import 'package:page_transition/page_transition.dart';

class SignIn extends StatefulWidget {
  const SignIn({super.key});

  @override
  State<SignIn> createState() => _SignInState();
}

class _SignInState extends State<SignIn> {
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  final TextEditingController _firstnameController = TextEditingController();
  final TextEditingController _lastnameController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  final TextEditingController _birthdayController = TextEditingController();

  bool isDateValid(String dateStr) {
    try {
      final parsedDate = DateFormat('dd-MM-yyyy').parseStrict(dateStr);
      return true;
    } catch (e) {
      return false;
    }
  }

  bool isMajor(String dateStr) {
    try {
      final parsedDate = DateFormat('dd-MM-yyyy').parseStrict(dateStr);
      final age = DateTime.now().difference(parsedDate).inDays;
      return age >= 18;
    } catch (e) {
      return false;
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
              "assets/images/logo_natation.png",
            ),
          )
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(25.0),
        child: SingleChildScrollView(
          child: Form(
            key: _formKey,
            child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              const SizedBox(height: 20),
              Padding(
                padding: const EdgeInsets.only(left: 10),
                child: Align(
                  alignment: Alignment.topLeft,
                  child: RichText(
                    text: const TextSpan(
                      children: <TextSpan>[
                        TextSpan(
                          text: 'Nom ',
                          style: TextStyle(
                            color: Colors.white,
                          ),
                        ),
                        TextSpan(
                          text: ' *',
                          style: TextStyle(
                            color: Colors.red,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ],
                    )
                  ),
                ),
              ),
              Container(
                margin: const EdgeInsets.all(8),
                child: TextFormField(
                  controller: _lastnameController,
                  decoration: const InputDecoration(
                    filled: true,
                    fillColor: Colors.white,
                    enabledBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.all(
                        Radius.circular(2),
                      ),
                      borderSide: BorderSide(
                        color: Colors.black,
                        style: BorderStyle.solid,
                      ),
                    ),
                    hintText:
                        "Entrez votre nom",
                    hintStyle: TextStyle(
                      fontSize: 15,
                      fontFamily: 'Open',
                    ),
                    errorStyle: TextStyle(
                      color: Colors.red,
                      fontSize: 14.0,
                    ),
                  ),
                  keyboardType: TextInputType.text,
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Veuillez saisir votre nom';
                    }
                    return null;
                  },
                ),
              ),
              const SizedBox(height: 20),
              Padding(
                padding: EdgeInsets.only(left: 10),
                child: Align(
                  alignment: Alignment.topLeft,
                  child: RichText(
                    text: const TextSpan(
                      children: <TextSpan>[
                        TextSpan(
                          text: 'Prénom ',
                          style: TextStyle(
                            color: Colors.white,
                          ),
                        ),
                        TextSpan(
                          text: ' *',
                          style: TextStyle(
                            color: Colors.red,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ],
                    )
                  ),
                ),
              ),
              Container(
                margin: const EdgeInsets.all(8),
                child: TextFormField(
                  controller: _firstnameController,
                  decoration: const InputDecoration(
                    filled: true,
                    fillColor: Colors.white,
                    enabledBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.all(
                        Radius.circular(2),
                      ),
                      borderSide: BorderSide(
                        color: Colors.black,
                        style: BorderStyle.solid,
                      ),
                    ),
                    hintText:
                        "Entrez votre prénom",
                    hintStyle: TextStyle(
                      fontSize: 15,
                      fontFamily: 'Open',
                    ),
                    errorStyle: TextStyle(
                      color: Colors.red,
                      fontSize: 14.0,
                    ),
                  ),
                  keyboardType: TextInputType.text,
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Veuillez saisir votre prénom';
                    }
                    return null;
                  },
                ),
              ),
              const SizedBox(height: 20),
              Padding(
                padding: const EdgeInsets.only(left: 10),
                child: Align(
                  alignment: Alignment.topLeft,
                  child: RichText(
                    text: const TextSpan(
                      children: <TextSpan>[
                        TextSpan(
                          text: "Adresse e-mail ",
                          style: TextStyle(
                            color: Colors.white,
                          ),
                        ),
                        TextSpan(
                          text: ' *',
                          style: TextStyle(
                            color: Colors.red,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
              Container(
                margin: const EdgeInsets.all(8),
                child: TextFormField(
                  controller: _emailController,
                  onChanged: (value) {},
                  decoration: const InputDecoration(
                    filled: true,
                    fillColor: Colors.white,
                    enabledBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.all(
                        Radius.circular(2),
                      ),
                      borderSide: BorderSide(
                        color: Colors.black,
                        style: BorderStyle.solid,
                      ),
                    ),
                    hintText:
                        "Entrez votre adresse e-mail",
                    hintStyle: TextStyle(
                      fontSize: 15,
                      fontFamily: 'Open',
                    ),
                    errorStyle: TextStyle(
                      color: Colors.red, // Set the color of the error message
                      fontSize: 14.0, // Set the font size of the error message
                    ),
                  ),
                  keyboardType: TextInputType.emailAddress,
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Veuillez saisir votre adresse e-mail';
                    }
                    return null;
                  },
                ),
              ),
              const SizedBox(height: 20),
              Padding(
                padding: const EdgeInsets.only(left: 10),
                child: Align(
                  alignment: Alignment.topLeft,
                  child: RichText(
                    text: const TextSpan(
                      children: <TextSpan>[
                        TextSpan(
                          text: 'Mot de passe ',
                          style: TextStyle(
                            color: Colors.white,
                          ),
                        ),
                        TextSpan(
                          text: ' *',
                          style: TextStyle(
                            color: Colors.red,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ],
                    )
                  ),
                ),  
              ),
              Container(
                margin: const EdgeInsets.all(8),
                child: TextFormField(
                  controller: _passwordController,
                  decoration: const InputDecoration(
                    filled: true,
                    fillColor: Colors.white,
                    enabledBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.all(
                        Radius.circular(2),
                      ),
                      borderSide: BorderSide(
                        color: Colors.black,
                        style: BorderStyle.solid,
                      ),
                    ),
                    hintText:
                        "Entrez votre mot de passe",
                    hintStyle: TextStyle(
                      fontSize: 15,
                      fontFamily: 'Open',
                    ),
                    errorStyle: TextStyle(
                      color: Colors.red, // Set the color of the error message
                      fontSize: 14.0, // Set the font size of the error message
                    ),
                  ),
                  keyboardType: TextInputType.visiblePassword,
                  obscureText: true,
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Veuillez saisir un mot de passe';
                    }
                    return null;
                  },
                ),
              ),
              const SizedBox(height: 20),
              Padding(
                padding: EdgeInsets.only(left: 10),
                child: Align(
                  alignment: Alignment.topLeft,
                  child: RichText(
                    text: const TextSpan(
                      children: <TextSpan>[
                        TextSpan(
                          text: 'Date de naissance ',
                          style: TextStyle(
                            color: Colors.white,
                          ),
                        ),
                        TextSpan(
                          text: ' *',
                          style: TextStyle(
                            color: Colors.red,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ],
                    )
                  ),
                ),
              ),
              Container(
                margin: const EdgeInsets.all(8),
                child: TextFormField(
                  controller: _birthdayController,
                  decoration: const InputDecoration(
                    filled: true,
                    fillColor: Colors.white,
                    enabledBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.all(
                        Radius.circular(2),
                      ),
                      borderSide: BorderSide(
                        color: Colors.black,
                        style: BorderStyle.solid,
                      ),
                    ),
                    hintText:
                        "jj-mm-aaaa",
                    hintStyle: TextStyle(
                      fontSize: 15,
                      fontFamily: 'Open',
                    ),
                    errorStyle: TextStyle(
                      color: Colors.red, 
                      fontSize: 14.0,
                    ),
                  ),
                  onTap: () async {
                    DateTime? pickedDate = await showDatePicker(
                      context: context, 
                      initialDate: DateTime.now(), 
                      firstDate: DateTime(1900),
                      lastDate: DateTime(2100)
                    );
                      
                    if(pickedDate != null) {
                      setState(() {
                        _birthdayController.text = DateFormat("dd-MM-yyyy").format(pickedDate);
                      });
                    }
                  },
                  keyboardType: TextInputType.text,
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Veuillez saisir votre date de naissance';
                    }else if (!isDateValid(value)) {
                      return 'Format de date invalide'; 
                    }else if(!isMajor(value)) {
                      return 'Vous devez être majeur pour vous inscrire';
                    }
                    return null;
                  },
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
                onPressed: () async {

                  if (_formKey.currentState!.validate()) {
                    // Form is valid, submit data
                    await AuthController().Register(
                      User(
                          firstname:  _firstnameController.text,
                          lastname: _lastnameController.text,
                          email: _emailController.text,
                          password: _passwordController.text,
                          birthday: DateFormat('dd-MM-yyyy').parse(_birthdayController.text).toIso8601String()
                      ),
                      context,
                      (response) {
                        if (response.statusCode == 201) {
                          Navigator.push(
                            context,
                            PageTransition(
                              type: PageTransitionType.leftToRight,
                              child: const Valider1(options: [], questionText: ''),
                            ),
                          );
                        } else {
                         final snackBar = SnackBar(
                            content: Text(response.data["message"]),
                            backgroundColor: Colors.red,
                          );

                          ScaffoldMessenger.of(context).showSnackBar(snackBar);
                        }
                      },
                    );
                  }
                },
                child: const Text(
                  "Inscription",
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
        ),
      ),
    );
  }
}
