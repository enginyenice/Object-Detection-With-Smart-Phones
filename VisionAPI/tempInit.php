<?php
// Object_detection API

require 'vendor/autoload.php';
        use Google\Cloud\Vision\VisionClient;
        $vision = new VisionClient(['keyFile' => json_decode(file_get_contents("key.json"),true)]);
        $dog = fopen("dog.jpg",'r');
        $img = $vision->image($dog,['OBJECT_LOCALIZATION']);
        $objects = $vision->annotate($img);
        
        //$objects = json_decode($objects);
        $info = $objects->info();
        $objectsDetail = $info['localizedObjectAnnotations'];
        $objectLenght = count($objectsDetail);
        //var_dump($objectsDetail[0]);
        
        echo "Toplam Obje Sayısı: ". $objectLenght."</br>";
        for($i = 0; $i<$objectLenght;$i++){
            echo "İsim: ". $objectsDetail[$i]["name"]."<br>";
            echo "X1: ". $objectsDetail[$i]["boundingPoly"]["normalizedVertices"][0]["x"]."<br>";
            echo "Y1: ". $objectsDetail[$i]["boundingPoly"]["normalizedVertices"][0]["y"]."<br>";
            echo "X2: ". $objectsDetail[$i]["boundingPoly"]["normalizedVertices"][1]["x"]."<br>";
            echo "Y2: ". $objectsDetail[$i]["boundingPoly"]["normalizedVertices"][1]["y"]."<br>";
            echo "X3: ". $objectsDetail[$i]["boundingPoly"]["normalizedVertices"][2]["x"]."<br>";
            echo "Y3: ". $objectsDetail[$i]["boundingPoly"]["normalizedVertices"][2]["y"]."<br>";
            echo "X4: ". $objectsDetail[$i]["boundingPoly"]["normalizedVertices"][3]["x"]."<br>";
            echo "Y4: ". $objectsDetail[$i]["boundingPoly"]["normalizedVertices"][3]["y"]."<br>";
            echo "##############################################################################<br>";
        }




/*


*/

/*
Toplam Obje Sayısı: 6
İsim: Bicycle
X1: 0.1589591
Y1: 0.22967617
X2: 0.73859626
Y2: 0.22967617
X3: 0.73859626
Y3: 0.7350759
X4: 0.1589591
Y4: 0.7350759
*/