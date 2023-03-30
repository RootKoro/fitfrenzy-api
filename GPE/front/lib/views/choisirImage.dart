import 'dart:io';

import 'package:fitfrenzy/const/constant.dart';
import 'package:fitfrenzy/widgets/actuality_tile.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:path_provider/path_provider.dart';

class PickImage extends StatefulWidget {
  const PickImage({super.key});

  @override
  State<PickImage> createState() => _PickImageState();
}

class _PickImageState extends State<PickImage> {
  File? _image;

  Future<void> _takePicture() async {
    // ignore: deprecated_member_use
    final imageFile = await ImagePicker().getImage(source: ImageSource.camera);
    final appDir = await getApplicationDocumentsDirectory();
    final fileName = '${DateTime.now().toIso8601String()}.png';
    final savedImage =
        await File(imageFile!.path).copy('${appDir.path}/$fileName');
    setState(() {
      _image = savedImage;
    });
  }

  Future<void> _pickImage() async {
    // ignore: deprecated_member_use
    final imageFile = await ImagePicker().getImage(source: ImageSource.gallery);
    setState(() {
      _image = File(imageFile!.path);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: back,
      appBar: AppBar(
        backgroundColor: const Color.fromARGB(255, 90, 72, 17),
        centerTitle: true,
        title: const Text("Mes photos"),
        actions: const [ProfilWidget()],
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            _image != null
                ? Image.file(
                    _image!,
                    height: 200,
                  )
                : Container(
                    height: 200,
                    color: Colors.grey[300],
                  ),
            const SizedBox(height: 20),
            ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.amber,
                fixedSize: const Size(170, 20),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(25.0),
                ),
              ),
              onPressed: _takePicture,
              child: const Text('Prendre une photo'),
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.amber,
                fixedSize: const Size(170, 20),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(25.0),
                ),
              ),
              onPressed: _pickImage,
              child: const Text('Choisir une photo'),
            ),
          ],
        ),
      ),
    );
  }
}
