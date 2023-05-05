class BasketballPlayer {
  String playerName;
  String playerPhoto;
  String linkPlayer;
  BasketballPlayer({required this.playerName, required this.playerPhoto, required this.linkPlayer});

  factory BasketballPlayer.fromJson(final Map<String, dynamic> json) {
    return BasketballPlayer(
      playerName: json['name'],
      playerPhoto: json['image'],
      linkPlayer: json['link']
    );
  }

  Map<String, dynamic> toJson() => {
        'name': playerName,
        'image': playerPhoto,
        'link': linkPlayer
      };
}
