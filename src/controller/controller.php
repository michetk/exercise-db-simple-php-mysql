<?php
namespace App\controller;

require '../../vendor/autoload.php';
use App\models\CreateUser;
class ControllerCreateUser extends CreateUser {
    
    public function index () {
        // echo $_POST['name'];
        $validation = parent::validation();
        if($validation) {
            parent::createUser();
            echo parent::getStatus();
        }
    }
}

$controllerCreateUser = new ControllerCreateUser($_POST['name'], $_POST['email'], $_POST['password'], $_POST['password-confirm']);
$controllerCreateUser->index();

?>