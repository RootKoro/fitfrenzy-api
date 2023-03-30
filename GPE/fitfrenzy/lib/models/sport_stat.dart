class SportStat {
  final String id_sport;
  final int rank;
  final int liked_by;
  final int practiced_by;
  final String other_information;

  SportStat(
      {required this.id_sport,
      required this.rank,
      required this.liked_by,
      required this.practiced_by,
      required this.other_information});

  factory SportStat.fromJson(final Map<String, dynamic> json) {
    return SportStat(
        id_sport: json['id_sport'],
        rank: json['rank'],
        liked_by: json['liked_by'],
        practiced_by: json['practiced_by'],
        other_information: json['other_information']);
  }

  Map<String, dynamic> toJson() => {
        'id_sport': id_sport,
        'rank': rank,
        'liked_by': liked_by,
        'practiced_by': practiced_by,
        'other_information': other_information
      };
}
