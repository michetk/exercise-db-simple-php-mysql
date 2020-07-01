<?php

namespace App\controller;
require $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';
use App\models\SelectUser;

// Consulta Usuários
class ControllerSelectUsers extends SelectUser {
    public function selectUser() {
        parent::selectUser();
        echo parent::getStatus();
    }
}

$controllerSelectUsers = new ControllerSelectUsers();
$controllerSelectUsers->selectUser();

?>