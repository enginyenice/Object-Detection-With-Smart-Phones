<?php
require __DIR__ . '/vendor/autoload.php';

use Kreait\Firebase\Factory;

class UpdateStorage
{
    private  $factory;
    private  $storage;
    public function __construct()
    {
        $this->factory = (new Factory)->withServiceAccount(__DIR__.'/secret/firebase-key.json');
        $this->storage = $this->factory->createStorage();
    }
    public function UploadImage($ImagePath){

       
        $arrayPath = explode('/', $ImagePath);
        $directory =  $arrayPath[count($arrayPath) - 2];
        $imageName =  $arrayPath[count($arrayPath) - 1];
        
        $uploadPath = $directory."/".$imageName;
        $imageFile = file_get_contents($ImagePath);
        $uploadedObject = $this->storage
            ->getBucket()
            ->upload($imageFile, [
                'name' => $uploadPath
            ]);
        
        $expiresAt = new \DateTime('tomorrow');  
        $createImageUrl = $uploadedObject->signedUrl($expiresAt).PHP_EOL;
        
       return $createImageUrl;

    }
}