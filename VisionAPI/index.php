<?php

require_once('./application.php');
//header("Content-type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if(isset($_POST['uri']))
{
    $json = json_encode($_POST['uri']);
    echo $json;
}
$app = new application;
$i = 1;
$uniq = uniqid();

$dizin = 'normalImages/';
$yuklenecek_dosya = $dizin .$uniq.basename($_FILES['photo']['name']);

move_uploaded_file($_FILES['photo']['tmp_name'], $yuklenecek_dosya);
$imagePath = $app->GetBaseUrl()."/".$yuklenecek_dosya;
$result = $app->ObjectDetection($imagePath,"jpg");
$data = json_decode($result);

$i = json_encode($imagePath);

echo $result;



?>