# Build and run the application with compose

## For Mac(Only ARM architecture)

```sh
docker-compose build --build-arg ARCH=arm64
docker-compose up
```

## For the rest

```sh
docker-compose build --build-arg ARCH=amd64
docker-compose up
```

---

######################
####### Docker #######
######################

docker-compose build
docker-compose up

or

docker-compose up --build --remove-orphans

Problèmes rencontrées (Windows)
###############################

docker exec ./server.sh: no such file or directory

    ==> Modifier l'encodage dans VSCode "CRLF -> LF" sur le fichier "server.sh"

---

######################
####### Local #######
######################

Lancer flutter
##############

flutter run ==> exécute l'application Flutter sur un périphérique ou un émulateur (iOS, Android, Web, etc).

Lancer React Native
##############

npm start ==> exécute l'application react native en utilisant expo.

Lancer les microservices
########################

cd sports
npm install
npm run start

cd statistiques
npm install
npm run start

cd users
npm install
npm run start

cd questionnary
npm install
npm run start

cd haproxy
npm install
npm run start

cd sport-program
npm install
npm run start

MAJ des packages flutter
########################

flutter pub get ==> installe les dépendances de packages spécifiées dans le fichier pubspec.yaml.
flutter pub upgrade ==> met à jour les dépendances de packages vers leurs dernières versions compatibles.
flutter pub outdated ==> afficher une liste des packages qui ont des mises à jour disponibles.
flutter pub upgrade --major-versions ==> met à jour les packages vers leurs dernières versions majeures compatibles.

install des packages react
##########################

npm install
