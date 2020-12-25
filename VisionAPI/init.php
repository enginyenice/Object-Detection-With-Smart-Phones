<?php 

require_once('Application.php');

//header("Content-type: image/jpeg");



$app = new application;
$result = $app->ObjectDetection();
$data = json_decode($result);
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php foreach ($data[0]->detail as $detail){ ?>
    <p style="font-weight: 700;color: rgb(<?=$detail->red?>,<?=$detail->green?>,<?=$detail->blue?>)"><?=$detail->title?></p>
<?php } ?>
    <img src="<?=$data[0]->path?>"></img>

</body>
</html>
