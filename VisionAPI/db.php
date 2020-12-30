<?php
// https://php-react-database-default-rtdb.firebaseio.com/Images.json
//require_once('./db.php');
class db  
{
   public function FirebaseAdd($data,$imagePath){
        
        $data = json_decode($data);
        $path = $imagePath;
        $type = pathinfo($path, PATHINFO_EXTENSION);
        $imageData = file_get_contents($path);
        $normalBase64 = 'data:image/' . $type . ';base64,' . base64_encode($imageData);
        
        
        
        $path = $data[0]->path;
        $type = pathinfo($path, PATHINFO_EXTENSION);
        $imageData = file_get_contents($path);
        $detectedBase64 = 'data:image/' . $type . ';base64,' . base64_encode($imageData);

        $details = Array();
        foreach($data[0]->detail as $detail){
            array_push($details,Array(
                "title" => $detail->title,
                "red"   => $detail->red,
                "green"   => $detail->green,
                "blue"   => $detail->blue,
                ));
        }
        
        /*
                    "normal_base64"      =>$normalBase64,
            "detected_base64"    =>$detectedBase64
            */
        $result = Array(
            "detected_path"      =>$data[0]->path,
            "normal_path"        =>$imagePath,
            //"detected_base64"    =>$detectedBase64,
            //"normal_base64"      =>$normalBase64,
            "details"   => $details
        );
        
        
        
        $returnData = Array(
             uniqid()  =>$result,
        );
        
        $data = json_encode($returnData);
           
           
           
      $curl = curl_init();
      curl_setopt_array($curl, array(
          CURLOPT_URL => "https://php-react-database-default-rtdb.firebaseio.com/Images.json",
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
  }
}





