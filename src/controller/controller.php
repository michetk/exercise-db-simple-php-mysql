<?php
namespace src\Controller;

class Controller {
    
    public function index () {
        echo $_POST['name'];
    }
}

$controller  = new Controller();
$controller->index();

?>