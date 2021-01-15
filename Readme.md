

## T.C.
## KOCAELİ ÜNİVERSİTESİ
## BİLGİSAYAR MÜHENDİSLİĞİ
## YAZILIM LABORATUVARI-1 PROJE -3
## AKILLI TELEFONLAR İLE NESNE TESPİTİ
## ENGİN YENİCE - 190201133

|Dosya Adı| İçerik  |
|--|--|
|  YazLab-1-Proje-3.pdf  | [Proje Detayları](https://github.com/enginyenice/Object-Detection-With-Smart-Phones/blob/master/Documents/Yaz%C4%B1l%C4%B1m%20Lab.%20I-%203.%20Proje.pdf) |
|  190201133-Rapor.pdf  | [Projenin raporu](https://github.com/enginyenice/Object-Detection-With-Smart-Phones/blob/master/Documents/Teslim%20Dosyalar%C4%B1/190201133-Rapor.pdf) |
|  190201133-Kaba-Kod.pdf  | [Proje içerisinde yazıların kodların kaba kod çıktıları](https://github.com/enginyenice/Object-Detection-With-Smart-Phones/blob/master/Documents/Teslim%20Dosyalar%C4%B1/190201133-Kaba-Kod.pdf) |
|  190201133-Proje.zip  | [Proje dosyalarının bulunduğu zip dosyası](https://github.com/enginyenice/Object-Detection-With-Smart-Phones/blob/master/Documents/Teslim%20Dosyalar%C4%B1/190201133-Proje.zip) |
|  190201133.txt | [Projenin tüm kodlarının kopyalandığı metin belgesi](https://github.com/enginyenice/Object-Detection-With-Smart-Phones/blob/master/Documents/Teslim%20Dosyalar%C4%B1/190201133.txt) |
|  readme.txt  | [Projenin nasıl çalıştırılacağı ve önemli notların bulunduğu metin belgesi](https://github.com/enginyenice/Object-Detection-With-Smart-Phones/blob/master/Documents/Teslim%20Dosyalar%C4%B1/readme.txt)			 |
___

### PROJE NASIL ÇALIŞTIRILIR

#### React Native Tarafının Çalıştırılması

1. Projenin cloud tarafı hazır olduğu için sadece react native tarafını kurmanız gerekmektedir.
2. İlk olarak ReactNative-APP klasörünü komut satırı(Terminal & CMD) ile açınız. 
3. Proje bağımlılıklarını yüklemek için "npm install" komutunu giriniz.
4. Yükleme işlemi tamamlandıktan sonra:  Projeyi çalıştırmak için "npx react-native run-android" komutunu başlatınız.
5. API kendiniz kuruyorsanız eğer: Screen/ObjectDetection.js dosyası içerisinde bulunan FetchURL kısmına kendi adresinizi yazın.
6. Firebase veritabanı'nı kendiniz kuruyorsanız eğer Screen/Gallery.js dosyası içerisinde bulunan FetchURL kısmına kendi firebase adresinizi yazın (url sonunda tabloAdı.json şeklinde bir yapı oluşturunuz.) 


#### API Tarafının Kurulumu 

 1. VisionAPI klasörünü komut satırı(Terminal & CMD) ile açınız.
 2. Proje bağımlılıklarını yüklemek için "composer install" komutunu giriniz.
 3. Yükleme işlemi tamamlandıktan sonra sunucunuza klasör içerisinde bulunan tüm dosyaları yükleyiniz.
 4. Firebase veritabanı'nı kendiniz kuruyorsanız eğer db.php dosyasıdosyası içerisinde bulunan $firebaseDatabasePath kısmına
kendi firebase adresinizi yazın (url sonunda tabloAdı.json şeklinde bir yapı oluşturunuz.) 
___
### BİLGİSAYARINIZDA BULUNMASI GEREKEN PROGRAMLAR:

 5. Node JS : https://nodejs.org/en/download/
 6. Android Studio : https://developer.android.com/studio 
 7. XAMMP PHP>= 7.4 : https://www.apachefriends.org/tr/download.html
 8. Composer : https://getcomposer.org/download/
 9. React Native >= 0.60 : "npm i react-native-cli" (Komut Satırı & Terminal & CMD)
#### Android Studio Ayarları:

* -> Android Studio programını başlatınız.  
* -> Sağ altta bulunan Configure seçeneğinden Settings seçeneğini seçiniz.  
* -> Açılan pencere içerisinde sol üst köşede bulunan arama kısmında "Android SDK" şeklinde arama yapınız.  
* -> Sol taraftan Android SDK seçeneğini seçiniz  
* -----> Sağ tarafta bulunan ekran içerisinden SDK Platform seçeneğini seçiniz.  
* -----> Sağ alt tarafta bulunan Show Package Details seçeneğini aktif ediniz.  
* -----> Sağ tarafta bulunan ekrandan Android 10.0 (Q) seçeneğini seçiniz.  
* ------------> Android SDK Platform 29   
* ------------> Intel x86 Atom_64 System Image  
* ------------> Google APIs Intel x86 Atom_64 System Image seçeneklerini aktifleştiriniz.  
* -----> Sağ tarafta bulunan ekran içerisinden SDK Tools seçeneğini seçiniz.  --
* ---> Sağ alt tarafta bulunan Show Package Details seçeneğini aktif ediniz.  --
* ----------> 29.0.3 seçeneğini aktif ediniz.  
* -------------> Sağ alt tarafta bulunan "APPLY" seçeneğine tıklayınız. Genel sözleşmeleri onaylayıp kurulumu tamamlayınız.  -> Sağ altta bulunan Configure seçeneğinde AVD Manager seçiniz.  
* -----> Yukarıda ki özelliklerin bulunduğu bir sanal cihaz üretiniz.

## Temel Klasör Yapısı
```plaintext
API-PHP
├── detectedImages/
├── normalImages/
├── secret/
│   ├── key.json
│   └── firebase-key.json
├── vendor/
├── composer.json
├── index.php
├── db.php
└── storage.php

```	

```plaintext
ReactNative-APP
├── Screen/
│   ├── Gallery.js
│   ├── Home.js
│   └── ObjectDetection.js
├── package.json
└── App.js

```	
## Resimler
![enter image description here](https://raw.githubusercontent.com/enginyenice/Object-Detection-With-Smart-Phones/master/Documents/Documents/Resimler/190201133-Temel-Ak%C4%B1%C5%9F-Diagram%C4%B1.png)
![enter image description here](https://raw.githubusercontent.com/enginyenice/Object-Detection-With-Smart-Phones/master/Documents/Documents/Resimler/En%20Yeni/Screenshot_20210103-222428_yeniApp.jpg)
![enter image description here](https://raw.githubusercontent.com/enginyenice/Object-Detection-With-Smart-Phones/master/Documents/Documents/Resimler/En%20Yeni/Screenshot_20210103-222423_yeniApp.jpg)
![enter image description here](https://raw.githubusercontent.com/enginyenice/Object-Detection-With-Smart-Phones/master/Documents/Documents/Resimler/En%20Yeni/Screenshot_20210103-222350_yeniApp.jpg)
![enter image description here](https://raw.githubusercontent.com/enginyenice/Object-Detection-With-Smart-Phones/master/Documents/Documents/Resimler/En%20Yeni/Screenshot_20210103-222338_yeniApp.jpg)
![enter image description here](https://raw.githubusercontent.com/enginyenice/Object-Detection-With-Smart-Phones/master/Documents/Documents/Resimler/En%20Yeni/Screenshot_20210103-222321_yeniApp.jpg)

![enter image description here](https://raw.githubusercontent.com/enginyenice/Object-Detection-With-Smart-Phones/master/Documents/Documents/Resimler/En%20Yeni/Screenshot_20210103-222314_yeniApp.jpg)

![enter image description here](https://raw.githubusercontent.com/enginyenice/Object-Detection-With-Smart-Phones/master/Documents/Documents/Resimler/En%20Yeni/Screenshot_20210103-222247_yeniApp.jpg)

![enter image description here](https://raw.githubusercontent.com/enginyenice/Object-Detection-With-Smart-Phones/master/Documents/Documents/Resimler/En%20Yeni/Screenshot_20210103-221755_yeniApp.jpg)
