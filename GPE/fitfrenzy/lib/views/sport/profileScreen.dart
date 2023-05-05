import 'package:fitfrenzy/const/constant.dart';
import 'package:fitfrenzy/views/auth/login.dart';
import 'package:fitfrenzy/views/sport/profileMenuWidget.dart';
import 'package:fitfrenzy/views/sport/updateProfilePage.dart';
import 'package:fitfrenzy/widgets/news/actuality_tile.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:get/get.dart';

import '../../controller/auth/auth_controller.dart';
import '../../models/user.dart';
import '../static/home/home.dart';
import '../static/home/home3.dart';

class ProfileScreen extends StatefulWidget {
  final User user;
  final VoidCallback onLogout;
  
    ProfileScreen({Key? key, required this.user, required this.onLogout}) : super(key: key);

  @override
  State<StatefulWidget> createState() => _ProfileState();
}

class _ProfileState extends State<ProfileScreen> {


  void _editProfile() async {
    // Navigate to the EditProfilePage and wait for the updated user data
    //() => Get.to(() => UpdateProfileScreen(user: widget.user)),
    final updatedUser = await Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => UpdateProfileScreen(user: widget.user),
      ),
    );

    // If updated user data is not null, update the state with the new data
    /* if (updatedUser != null) {
      setState(() {
        widget.user = updatedUser;
      });
    } */
  }
  @override
  Widget build(BuildContext context) {
    var isDark = MediaQuery.of(context).platformBrightness == Brightness.dark;
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        leading: IconButton(onPressed: () => Get.back(), icon: const Icon(FontAwesomeIcons.angleLeft)),
        title: const Text(tProfile),
        actions: [IconButton(onPressed: () {isDark = !isDark;}, icon: Icon(isDark ? FontAwesomeIcons.lightbulb : FontAwesomeIcons.moon))],
      ),
      body: SingleChildScrollView(
        child: Container(
          padding: const EdgeInsets.all(tDefaultSize),
          child: Column(
            children: [
              /// -- IMAGE
              Stack(
                children: [
                  SizedBox(
                    width: 70,
                    height: 70,
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(100), 
                      child: const Image(image: AssetImage('assets/images/th.png'))
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 10),
              Text("${widget.user.firstname} ${widget.user.lastname}", 
                style: const TextStyle(
                  fontSize: 20,
                  color: Colors.white, // replace with the desired color
                ),
              ),
              const SizedBox(height: 20),
              const SizedBox(height: 30),
              const Divider(color: Colors.amber),
              const SizedBox(height: 10),

              /// -- MENU
              ProfileMenuWidget(title: "Informations utilisateur ", icon: FontAwesomeIcons.userCheck, onPress: _editProfile),
              ProfileMenuWidget(title: "Paramètres", icon: FontAwesomeIcons.cog, onPress: () {}),
              const Divider(),
              const SizedBox(height: 10),
              ProfileMenuWidget(
                title: "Se déconnecter",
                icon: FontAwesomeIcons.rightFromBracket,
                textColor: tPrimaryColor,
                endIcon: false,
                onPress: () async {
                  await AuthController().logout();
                  widget.onLogout();
                  if(context.mounted) {
                    Navigator.of(context, rootNavigator: true)
                      .pushAndRemoveUntil(
                      MaterialPageRoute(
                        builder: (context) => const Home()
                      ),
                      (_) => false,
                    );
                  }
                }
                  /* onPress: () {
                    Get.defaultDialog(
                      title: "Déconnexion",
                      titleStyle: const TextStyle(
                          color: Colors.black,
                          fontSize: 20
                        ),
                      content: const Padding(
                        padding: EdgeInsets.symmetric(vertical: 15.0),
                        child: Text("Are you sure, you want to Logout?", 
                          style: TextStyle(
                            color: Colors.black
                          )
                        ),
                      ),
                      confirm: Flex(
                        direction: Axis.vertical,
                        children: [ 
                          Expanded(
                            child: ElevatedButton(
                              onPressed: () async {
                                await AuthController().logout();
                                widget.onLogout();
                                  if(context.mounted) {
                                    Navigator.pushReplacement(
                                      context,
                                      MaterialPageRoute(builder: (context) => const Login())
                                    );
                                  }
                                },
                              style: ElevatedButton.styleFrom(backgroundColor: Colors.redAccent, side: BorderSide.none),
                              child: const Text("Yes"),
                            ),
                          ),
                        ]
                      ),
                      cancel: OutlinedButton(onPressed: () => Get.back(), child: const Text("No")),
                    );
                  } */
                ),
            ],
          ),
        ),
      ),
    );
  }
  
  
}