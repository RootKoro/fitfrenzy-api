class Sport {
  final String? id;
  final String label;
  final int rate;
  final String difficulty;
  final String otherInformation;

  Sport(
      {this.id,
      this.label = '',
      this.rate = 0,
      this.difficulty = 'easy',
      this.otherInformation = ''});

  factory Sport.fromJson(final Map<String, dynamic> json) {
    return Sport(
        id: json['_id'],
        label: json['label'],
        rate: json['rate'],
        difficulty: json['difficulty'],
        otherInformation: json['other_information']);
  }

  Map<String, dynamic> toJson() => {
        '_id': id,
        'label': label,
        'rate': rate,
        'difficulty': difficulty,
        'other_information': otherInformation
      };
}
