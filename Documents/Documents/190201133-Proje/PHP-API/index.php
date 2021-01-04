<?php

require_once('./application.php');
require_once('./db.php');
//header("Content-type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$app = new application;
$db = new db;



if(isset($_FILES['photo'])){
   $uniq = uniqid(); // Uniq numara
   $dizin = "normalImages/"   ;
   $dizinyolu = __DIR__."/".$dizin; // Klasör yolu
   
    $name = $uniq.basename($_FILES['photo']['name']); // Resim ismi
    $yuklenecek_dosya = $dizinyolu .$name; // Yüklenecek dosyanın tam yolu


    move_uploaded_file($_FILES['photo']['tmp_name'], $yuklenecek_dosya); // Dosya yüklenir.
    $imagePath = $app->GetBaseUrl().$dizin.$name; // Dosya Yolu
    

    $type = explode('/',$_FILES['photo']['type']); // fullType image/png
    $type = strtolower($type[1]); // png
    $result = $app->ObjectDetection($imagePath,$yuklenecek_dosya,$type); 


    $result = $db->FirebaseAdd($result,$imagePath);

    echo $result;

} else {
    $result = Array();
    array_push($result,[
        "status"=> 200,
        "url"=>$app->GetBaseUrl(),
        "title"=>"YAZILIM LABORATUVARI 1 - PROJE 3 NESNE TESPITI API",
	"fullPath"=> __DIR__."/"."normalImages"
    ]);
    echo json_encode($result);
}
?>
