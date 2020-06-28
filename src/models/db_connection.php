<?php

namespace App\models;

use App\config\AuthDataBase;
use mysqli;

class DBConnection extends AuthDataBase {

    public function connect() {
        $dbcon = new mysqli(parent::getDB_Host(), parent::getDB_User(), parent::getDB_Password(), parent::getDB_Name());
        mysqli_set_charset($dbcon, 'utf8');
        return $dbcon;
    }
    
}

?>