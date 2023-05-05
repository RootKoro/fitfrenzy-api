import 'dart:convert';

import 'package:fitfrenzy/const/constant.dart';
import 'package:fitfrenzy/views/sport/profileMenuWidget.dart';
import 'package:fitfrenzy/widgets/news/actuality_tile.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:get/get.dart';
import 'package:intl/intl.dart';

import '../../controller/stats/user_stat_controller.dart';
import '../../controller/user/user_controller.dart';
import '../../models/user.dart';

class UpdateProfileScreen extends StatefulWidget {
  final User user;
  const UpdateProfileScreen({Key? key, required this.user}) : super(key: key);

  @override
  State<UpdateProfileScreen> createState() => _UpdateProfileState();
}

class _UpdateProfileState extends State<UpdateProfileScreen> {
  TextEditingController _firstnameController = TextEditingController();
  TextEditingController _lastnameController = TextEditingController();
  TextEditingController _emailController = TextEditingController();
  late String? _created;

  @override
  void initState() {
    super.initState();
    _firstnameController.text = widget.user.firstname;
    _lastnameController.text = widget.user.lastname;
    _emailController.text = widget.user.email;
    _created = DateFormat("MMM d, y").format(DateTime.parse(widget.user.created));
  }

  @override
  void didUpdateWidget(UpdateProfileScreen oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.user.firstname != widget.user.firstname) {
      _firstnameController.text = widget.user.firstname;
      _lastnameController.text = widget.user.lastname;
      _emailController.text = widget.user.email;
    }
  }

  updateProfileData() async {
    
    if(
      _firstnameController.text.trim().length > 3 &&
      _lastnameController.text.trim().length > 3 &&
      _emailController.text.trim().length > 3
    ) {
        User u = widget.user;
        u.firstname = _firstnameController.text;
        u.lastname = _lastnameController.text;
        u.email = _emailController.text;        
        var body = {
          "firstname" : _firstnameController.text,
          "lastname" : _lastnameController.text,
          "email" : _emailController.text
        };
        await UserController().updateUser(widget.user.uid, jsonEncode(body));
        Navigator.of(context).pop(
          User(
            uid: u.uid, 
            lastname: u.lastname, 
            firstname: u.firstname, 
            email: u.email,
            birthday: u.birthday
        ));
      }
  }
  @override
  Widget build(BuildContext context) {
    //final controller = Get.put(ProfileController());
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        leading: IconButton(onPressed: () => Get.back(), icon: const Icon(FontAwesomeIcons.angleLeft)),
        title: const Text(tEditProfile),
      ),
      body: SingleChildScrollView(
        child: Container(
          padding: const EdgeInsets.all(tDefaultSize),
          child: Column(
            children: [
              // -- IMAGE with ICON
              Stack(
                children: [
                  SizedBox(
                    width: 120,
                    height: 120,
                    child: ClipRRect(
                      
                        borderRadius: BorderRadius.circular(100),
                        child: const Image(image: AssetImage("assets/images/th.png"))),
                  ),
                  Positioned(
                    bottom: 0,
                    right: 0,
                    child: Container(
                      width: 35,
                      height: 35,
                      decoration:
                      BoxDecoration(borderRadius: BorderRadius.circular(100), color: tPrimaryColor),
                      child: const Icon(
                        FontAwesomeIcons.pencil, 
                        color: Colors.black, 
                        size: 20
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 50),

              // -- Form Fields
              Form(
                child: Column(
                  children: [
                    TextFormField(
                      controller: _firstnameController,
                      style: const TextStyle(
                        color: Colors.white,
                        fontSize: 18
                      ),
                      decoration: const InputDecoration(
                        label: Text(tFirstname,
                          style: TextStyle(
                            color: Colors.white
                          )
                        ),
                        prefixIcon: Icon(FontAwesomeIcons.user, color: Colors.amber)),
                    ),
                    TextFormField(
                      controller: _lastnameController,
                      style: const TextStyle(
                        color: Colors.white,
                        fontSize: 18
                      ),
                      decoration: const InputDecoration(
                          label: Text(tLastname,
                            style: TextStyle(
                              color: Colors.white
                            )
                          ), prefixIcon: Icon(FontAwesomeIcons.user, color: Colors.amber)),
                    ),
                    const SizedBox(height: tFormHeight - 20),
                    TextFormField(
                      controller: _emailController,
                      style: const TextStyle(
                        color: Colors.white,
                        fontSize: 18
                      ),
                      decoration: const InputDecoration(
                        label: Text(tEmail,
                          style: TextStyle(
                            color: Colors.white
                          )
                        ),
                        prefixIcon: Icon(FontAwesomeIcons.envelope, color: Colors.amber)),
                    ),
                    const SizedBox(height: tFormHeight - 20),
                    /* TextFormField(
                      obscureText: true,
                      decoration: InputDecoration(
                        label: const Text("tPassword"),
                        prefixIcon: const Icon(Icons.fingerprint),
                        suffixIcon:
                        IconButton(icon: const Icon(FontAwesomeIcons.eyeSlash), onPressed: () {}),
                      ),
                    ),*/
                    const SizedBox(height: tFormHeight), 

                    // -- Form Submit Button
                    SizedBox(
                      width: MediaQuery.of(context).size.width / 4,
                      height: 40,
                      child: ElevatedButton(
                        onPressed: updateProfileData,
                        style: ElevatedButton.styleFrom(
                            backgroundColor: Colors.amber,
                            side: BorderSide.none,
                            shape: const StadiumBorder()),
                        child: const Text(tSave, style: TextStyle(color: Colors.white)),
                      ),
                    ),
                    const SizedBox(height: tFormHeight),

                    // -- Created Date and Delete Button
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text.rich(
                          TextSpan(
                            text: "Membere depuis ",
                            style: TextStyle(fontSize: 12),
                            children: [
                              TextSpan(
                                  text: _created,
                                  style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 12))
                            ],
                          ),
                        ),
                        /* ElevatedButton(
                          onPressed: () {},
                          style: ElevatedButton.styleFrom(
                              backgroundColor: Colors.redAccent.withOpacity(0.1),
                              elevation: 0,
                              foregroundColor: Colors.red,
                              shape: const StadiumBorder(),
                              side: BorderSide.none),
                          child: const Text("tDelete"),
                        ), */
                      ],
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