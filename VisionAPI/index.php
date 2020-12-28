<?php

require_once('./application.php');
//header("Content-type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$app = new application;
if(isset($_FILES['photo'])){


  
    $i = 1;
    $uniq = uniqid();

    $dizin = 'normalImages/';
    $yuklenecek_dosya = $dizin .$uniq.basename($_FILES['photo']['name']);


    move_uploaded_file($_FILES['photo']['tmp_name'], $yuklenecek_dosya);
    $imagePath = $app->GetBaseUrl()."/".$yuklenecek_dosya;

    $FullType = explode("/", $_FILES['photo']['name']);
    
   $type = strtolower($FullType[1]);


    $type = explode('/',$_FILES['photo']['type']);
    $type = strtolower($type[1]);
    $result = $app->ObjectDetection($imagePath,$type);
    echo $result;
    
    

} else {
    $result = Array();
    array_push($result,[
        "status"=> 200,
        "url"=>$app->GetBaseUrl(),
        "title"=>"YAZILIM LABORATUVARI 1 - PROJE 3 NESNE TESPITI API"
    ]);
    echo json_encode($result);
}
?>