import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:fitfrenzy/const/constant.dart';


class ProfileMenuWidget extends StatelessWidget {
  const ProfileMenuWidget({
    Key? key,
    required this.title,
    required this.icon,
    required this.onPress,
    this.endIcon = true,
    this.textColor,
  }) : super(key: key);

  final String title;
  final IconData icon;
  final VoidCallback onPress;
  final bool endIcon;
  final Color? textColor;

  @override
  Widget build(BuildContext context) {

    var isDark = MediaQuery.of(context).platformBrightness == Brightness.dark;
    //var iconColor = isDark ? tPrimaryColor : tAccentColor;
    var selectedTextColor = textColor ?? tPrimaryColor;

    return ListTile(
      onTap: onPress,
      leading: Container(
        width: 40,
        height: 40,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(100),
          color: iconColor.withOpacity(0.1),
        ),
        child: Icon(icon, color: iconColor),
      ),
      title: Text(title, style: Theme.of(context).textTheme.bodyLarge?.apply(color: selectedTextColor)),
      trailing: endIcon? Container(
          width: 30,
          height: 30,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(100),
            color: iconColor.withOpacity(0.1),
          ),
          child:  const Icon(FontAwesomeIcons.angleRight, size: 18.0, color: iconColor)) : null,
    );
  }
}