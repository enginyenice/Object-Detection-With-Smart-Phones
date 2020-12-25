<?php
require 'vendor/autoload.php';
use Google\Cloud\Vision\VisionClient;
class Application 
{
    public function ObjectDetection()
    {
        

        $vision = new VisionClient(['keyFile' => json_decode(file_get_contents("key.json"),true)]);
        $dog = fopen("dog.jpg",'r');
        $img = $vision->image($dog,['OBJECT_LOCALIZATION']);
        $objects = $vision->annotate($img);
        $info = $objects->info();
        $objectsDetail = $info['localizedObjectAnnotations'];
        //$this->PrintObject($objectsDetail);
        $AllCords = $this->AllCords($objectsDetail);

        foreach ($AllCords as $cord){
            //TODO: Kodları al ve en küçüklerini bul....
            echo "<br>";
        }

       // echo "Tespit Edilen Nesne Sayısı: ".$this->GetCount($objectsDetail);

        /*
         *
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
        $cords = array(
            "0" =>  array(
                "x"=> $X1,
                "y"=> $Y1,
            ),
            "1" =>  array(
                "x"=> $X2,
                "y"=> $Y2,
            ),
            "2" =>  array(
                "x"=> $X3,
                "y"=> $Y3,
            ),
            "3" =>  array(
                "x"=> $X4,
                "y"=> $Y4,
            )
        );

        $this->ImageDraw("dog.jpg",$this->MaxMinCords($cords));
         */

}

    private function GetCount(Array $objectsDetail = null)
    {
        return count($objectsDetail);
    }
    private function AllCords($objectsDetails){

        $allCords = Array();
       foreach ($objectsDetails as $detail){
           array_push($allCords,array(
               "X"  => array(
                   "0" => $detail['boundingPoly']["normalizedVertices"][0]["x"],
                   "1" => $detail['boundingPoly']["normalizedVertices"][1]["x"],
                   "2" => $detail['boundingPoly']["normalizedVertices"][2]["x"],
                   "3" => $detail['boundingPoly']["normalizedVertices"][3]["x"],
               ),
               "Y"  => array(
                   "0" => $detail['boundingPoly']["normalizedVertices"][0]["y"],
                   "1" => $detail['boundingPoly']["normalizedVertices"][1]["y"],
                   "2" => $detail['boundingPoly']["normalizedVertices"][2]["y"],
                   "3" => $detail['boundingPoly']["normalizedVertices"][3]["y"],
               ),

           ));
       }
       return $allCords;
    }
    private function PrintObject(Array $objectsDetails)
    {
        foreach ($objectsDetails as $detail){
           echo $detail['boundingPoly']["normalizedVertices"][0]["x"]."</br>";
           echo $detail['boundingPoly']["normalizedVertices"][0]["y"]."</br>";
           echo $detail['boundingPoly']["normalizedVertices"][1]["x"]."</br>";
           echo $detail['boundingPoly']["normalizedVertices"][1]["y"]."</br>";
           echo $detail['boundingPoly']["normalizedVertices"][2]["x"]."</br>";
           echo $detail['boundingPoly']["normalizedVertices"][2]["y"]."</br>";
           echo $detail['boundingPoly']["normalizedVertices"][3]["x"]."</br>";
           echo $detail['boundingPoly']["normalizedVertices"][3]["y"]."</br>";
            echo "#################################</br>";
        }
    }

    private function ImageDraw($path = "",Array $cords)
    {
        var_dump($cords,$path);
        /*
        $image_info = getimagesize("dog.jpg");
        $W  = $image_info[0];
        $H  = $image_info[1];

        $clouds = imagecreatefromjpeg('dog.jpg');
        $randColor   = imagecolorallocate($clouds, rand(0,255), rand(0,255), rand(0,255));
        imagerectangle($clouds, 122.0805888, 132.29347392, 567.24192768, 423.4037184, $randColor);
        imagepng($clouds,"file.png");
        imagedestroy($clouds);
        */
       
    }


    private  function MinSearch(Array $cords){
        $min = 99999999999999;
        for($i = 0; $i < count($cords);$i++){
            if($cords[$i] < $min)
                $min = $cords[$i];
        }
        return $min;
    }
    private  function MaxSearch(Array $cords){

        $max = -1;
        for($i = 0; $i < count($cords);$i++){
            if($cords[$i] > $max)
                $max = $cords[$i];
        }
        return $max;
    }

}

