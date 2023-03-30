class UserStat {
  final String idUser;
  final String habits;
  final String preferences;
  final String other_informations;
  final int average_weekly_conn;

  UserStat(
      {required this.idUser,
      required this.habits,
      required this.preferences,
      required this.other_informations,
      required this.average_weekly_conn});

  factory UserStat.fromJson(final Map<String, dynamic> json) {
    return UserStat(
        idUser: json['id_user'],
        habits: json['habits'],
        preferences: json['preferences'],
        other_informations: json['other_informations'],
        average_weekly_conn: json['average_weekly_conn']);
  }

  Map<String, dynamic> toJson() => {
        'id_user': idUser,
        'habits': habits,
        'preferences': preferences,
        'other_informations': other_informations,
        'average_weekly_conn': average_weekly_conn
      };
}
