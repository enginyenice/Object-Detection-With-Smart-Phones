<?php
//TODO: Base_url değiştir !!!
require_once('./application.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if(isset($_FILES['photo'])){

    $app = new application;
    $i = 1;
    $uniq = uniqid();

    $dizin = 'normalImages/';
    $yuklenecek_dosya = $dizin .$uniq.basename($_FILES['photo']['name']);

    move_uploaded_file($_FILES['photo']['tmp_name'], $yuklenecek_dosya);
    $imagePath = $app->GetBaseUrl()."/".$yuklenecek_dosya;

    $result = $app->ObjectDetection($imagePath,"jpg");
    echo $result;
} else {
    $result = Array();
    array_push($result,[
        "status"=> 200,
        "title"=>"YAZILIM LABORATUVARI 1 - PROJE 3 NESNE TESPITI API"
    ]);
    echo json_encode($result);
}
?>