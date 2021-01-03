<?php
// https://php-react-database-default-rtdb.firebaseio.com/Images.json
require 'storage.php';
class db  
{
    private  $firebaseDatabasePath;
    public function __construct()
    {
        // Firebase Database adresi
        $this->firebaseDatabasePath = "https://php-react-database-default-rtdb.firebaseio.com/Images.json";
        
    }
   public function FirebaseAdd($data,$imagePath){
        

        $storage = new UpdateStorage();
        $data = json_decode($data);



        $details = Array();
        foreach($data[0]->detail as $detail){
            array_push($details,Array(
                "title" => $detail->title,
                "red"   => $detail->red,
                "green"   => $detail->green,
                "blue"   => $detail->blue,
                ));
        }
        
        $result = Array(
            "detected_path"      =>$storage->UploadImage($data[0]->path),
            "normal_path"        =>$storage->UploadImage($imagePath),
            "details"   => $details
        );
        
        $normalPath   = explode('/', $data[0]->path);
        $detectedPath = explode('/', $imagePath);

        $fullNormalPath = __DIR__."/".$normalPath[count($normalPath) - 2]."/".$normalPath[count($normalPath) - 1];
        $fullDetectedPath = __DIR__."/".$detectedPath[count($detectedPath) - 2]."/".$detectedPath[count($detectedPath) - 1];
        unlink($fullNormalPath);
        unlink($fullDetectedPath);



        
        $returnData = Array(
             uniqid()  =>$result,
        );
        
        $data = json_encode($returnData);
           
           
           
      $curl = curl_init();
      curl_setopt_array($curl, array(
          CURLOPT_URL => $this->firebaseDatabasePath,
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_ENCODING => "",
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 30,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST => "PATCH",
          CURLOPT_POSTFIELDS => $data,
          CURLOPT_HTTPHEADER => array(
              "Cache-Control: no-cache",
              "Content-Type: application/json",
              "Postman-Token: 99d8fc6b-d20e-43a0-93e6-5e04350ff449"
          ),
      ));
      $response = curl_exec($curl);
      curl_close($curl);




/*
"detected_path"      =>$storage->UploadImage($data[0]->path),
            "normal_path"        =>$storage->UploadImage($imagePath),
            */

     
      return $data;
  }
}





