<?php
namespace src\Controller;

require '../models/create_users.php';
// require './src/models/create_users.php';
use src\Models\CreateUser;
class ControllerCreateUser extends CreateUser {
    
    public function index () {
        echo $_POST['name'];
        // $validation = parent::validation();
        // if($validation) {
        //     parent::createUser();
        //     echo parent::getStatus();
        // }
    }
}

$controllerCreateUser = new ControllerCreateUser($_POST['name'], $_POST['email'], $_POST['password'], $_POST['password-confirm']);
$controllerCreateUser->index();

?>