					 _______________________________________
					|		  T.C.			|
					|	   KOCAELİ ÜNİVERSİTESİ 	|
					|	  MÜHENDİSLİK FAKÜLTESİ 	|
					|        BİLGİSAYAR MÜHENDİSLİĞİ	|
					|_______________________________________|
					|    YAZILIM LABORATUVARI-1 PROJE -3	|
					| AKILLI TELEFONLAR İLE NESNE TESPİTİ	|
					|_______________________________________|
					|	ENGİN YENİCE - 190201133	|
					|_______________________________________|



 _______________________________________________________________________________________________________________________________
|(!!) PROJE HAKKINDA													    (!!)|
|																|
| Projede gerçek zamanlı nesne tespiti React Native (Mobil Taraf) ve PHP (API Taraf) kullanarak yapılmaktadır.			|
| Başlangıçta anlık olarak telefon kamerasından çekilen bir görüntüdeki nesneleri tanıyan ve daha sonra görüntü üzerindeki 	|
| toplam nesne sayısını bulan bir uygulamayı React Native ve PHP ile geliştirilmektedir.					|
|_______________________________________________________________________________________________________________________________|

 _______________________________________________________________________________________________________________________________
|(!!)TESLİM EDİLEN DOSYALAR VE İÇERİKLERİ										    (!!)|
|																|
| 190201133-Rapor.pdf   : Projenin raporu											|
| 190201133-Kaba-Kod.pdf: Proje içerisinde yazıların kodların kaba kod çıktıları						|
| 190201133-Proje.zip	: Proje dosyalarının bulunduğu zip dosyası								|
| 190201133.txt 	: Projenin tüm kodlarının kopyalandığı metin belgesi						|	
| readme.txt	    	: Projenin nasıl çalıştırılacağı ve önemli notların bulunduğu metin belgesi				|
|_______________________________________________________________________________________________________________________________|

 _______________________________________________________________________________________________________________________________
|(!!) PROJE NASIL ÇALIŞTIRILIR												    (!!)|
|																|
| React Native Tarafının Çalıştırılması												|
| Projenin cloud tarafı hazır olduğu için sadece react native tarafını kurmanız gerekmektedir. 					|
| İlk olarak ReactNative-APP klasörünü komut satırı(Terminal & CMD) ile açınız.							|
| Proje bağımlılıklarını yüklemek için "npm install" komutunu giriniz.								|
| Yükleme işlemi tamamlandıktan sonra:												|
| Projeyi çalıştırmak için "npx react-native run-android"  komutunu başlatınız.	 						|
| API kendiniz kuruyorsanız eğer: Screen/ObjectDetection.js dosyası içerisinde bulunan FetchURL kısmına kendi adresinizi yazın.	|
| Firebase veritabanı'nı kendiniz kuruyorsanız eğer Screen/Gallery.js dosyasıdosyası içerisinde bulunan FetchURL kısmına	|
| kendi firebase adresinizi yazın (url sonunda tabloAdı.json şeklinde bir yapı oluşturunuz.)					|
| 																|
| API Tarafının Kurulumu 													|
| VisionAPI klasörünü komut satırı(Terminal & CMD) ile açınız.									|
| Proje bağımlılıklarını yüklemek için "composer install" komutunu giriniz.							|
| Yükleme işlemi tamamlandıktan sonra sunucunuza klasör içerisinde bulunan tüm dosyaları yükleyiniz.				|
| Firebase veritabanı'nı kendiniz kuruyorsanız eğer db.php dosyasıdosyası içerisinde bulunan $firebaseDatabasePath kısmına	|
| kendi firebase adresinizi yazın (url sonunda tabloAdı.json şeklinde bir yapı oluşturunuz.)					|
|_______________________________________________________________________________________________________________________________|

 _______________________________________________________________________________________________________________________________
|(!!)BİLGİSAYARINIZDA BULUNMASI GEREKEN PROGRAMLAR:									    (!!)|
| 1-) Node JS 			: https://nodejs.org/en/download/								|
| 1-) Android Studio		: https://developer.android.com/studio 								|
| 2-) XAMMP PHP>= 7.4		: https://www.apachefriends.org/tr/download.html						|
| 3-) Composer			: https://getcomposer.org/download/								|
| 4-) React Native >= 0.60	: "npm i react-native-cli" (Komut Satırı & Terminal & CMD)					|
|																|
| Android Studio Ayarları:													|
| -> Android Studio programını başlatınız.											|
| -> Sağ altta bulunan Configure seçeneğinden Settings seçeneğini seçiniz.							|
| -> Açılan pencere içerisinde sol üst köşede bulunan arama kısmında "Android SDK" şeklinde arama yapınız.			|
| -> Sol taraftan Android SDK seçeneğini seçiniz										|
| -----> Sağ tarafta bulunan ekran içerisinden SDK Platform seçeneğini seçiniz.							|
| -----> Sağ alt tarafta bulunan Show Package Details seçeneğini aktif ediniz.							|
| -----> Sağ tarafta bulunan ekrandan Android 10.0 (Q) seçeneğini seçiniz.							|
| ------------> Android SDK Platform 29												|
| ------------> Intel x86 Atom_64 System Image											|
| ------------> Google APIs Intel x86 Atom_64 System Image seçeneklerini aktifleştiriniz.					|
| -----> Sağ tarafta bulunan ekran içerisinden SDK Tools seçeneğini seçiniz.							|
| -----> Sağ alt tarafta bulunan Show Package Details seçeneğini aktif ediniz.							|
| ------------> 29.0.3 	seçeneğini aktif ediniz.										|
| -------------> Sağ alt tarafta bulunan "APPLY" seçeneğine tıklayınız. Genel sözleşmeleri onaylayıp kurulumu tamamlayınız.	|
| -> Sağ altta bulunan Configure seçeneğinde AVD Manager seçiniz.								|
| -----> Yukarıda ki özelliklerin bulunduğu bir sanal cihaz üretiniz.								|
|_______________________________________________________________________________________________________________________________|


