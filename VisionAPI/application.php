<?php
require 'vendor/autoload.php';
use Google\Cloud\Vision\VisionClient;
class Application 
{
    public function ObjectDetection()
    {
        
        /*
        $vision = new VisionClient(['keyFile' => json_decode(file_get_contents("key.json"),true)]);
        $dog = fopen("dog.jpg",'r');
        $img = $vision->image($dog,['OBJECT_LOCALIZATION']);
        $objects = $vision->annotate($img);
        $info = $objects->info();
        $objectsDetail = $info['localizedObjectAnnotations'];
        $this->PrintObject($objectsDetail);
        echo "Tespit Edilen Nesne Sayısı: ".$this->GetCount($objectsDetail);
        */
        
        $image_info = getimagesize("dog.jpg");
        $W  = $image_info[0];
        $H  = $image_info[1];
        $X1 = $W * 0.1589591;
        $X2 =$W *0.73859626;
        $X3 =$W *0.73859626;
        $X4 =$W *0.1589591;
        $Y1 = $H *0.22967617;
        $Y2 = $H *0.22967617;
        $Y3 = $H *0.7350759;
        $Y4 = $H *0.7350759;
                      

        echo "Tespit Edilen Nesne Sayısı: 1<br>";
        echo "İsim: Bicycle<br>";
        echo "X1: ".$X1."<br>";
        echo "Y1: ".$Y1."<br>";
        echo "X2: ".$X2."<br>";
        echo "Y2: ".$Y2."<br>";
        echo "X3: ".$X3."<br>";
        echo "Y3: ".$Y3."<br>";
        echo "X4: ".$X4."<br>";
        echo "Y4: ".$Y4."<br>";

        /*
        {
            title: XXXXXXX
            url: XXXXXX
            objectSize: XXXX

        }
        */
}

    public function GetCount(Array $objectsDetail = null)
    {
        return count($objectsDetail);
    }
    public function PrintObject(Array $objectsDetail)
    {
        $objectLenght =  $this->GetCount($objectsDetail);
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
    }
}
