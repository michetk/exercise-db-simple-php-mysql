<?php
namespace App\controller;
require $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';
use App\models\CreateUser;

// Cria usuário
class ControllerCreateUser extends CreateUser {
    
    public function createUser () {
        $validation = parent::validation();
        if($validation) {
            parent::createUser();
            echo parent::getStatus();
        }
    }
}

$controllerCreateUser = new ControllerCreateUser($_POST['name'], $_POST['email'], $_POST['password'], $_POST['password-confirm']);
$controllerCreateUser->createUser();

?>