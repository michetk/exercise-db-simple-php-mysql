<?php

namespace App\models;

use App\models\DBConnection;
use Error;

class CreateUser {
    
    private $name;
    private $email;
    private $password;
    private $passwordConfirm;
    private $status = 503;

    public function __construct($name, $email, $password, $passwordConfirm) {
        
        $this->name = $name;
        $this->email = $email;
        $this->password = $password;
        $this->passwordConfirm = $passwordConfirm;

    }

    public function getStatus() {
        return $this->status;
    }

    public function validation() {
        
        $datasUsers = [$this->name, $this->email, $this->password, $this->passwordConfirm];
        foreach($datasUsers as $value) {
            if($value == '') {
                return false;
            }
        }

        if ($this->password !== $this->passwordConfirm) {
            return false;
        }
        return true;

    }

    public function createUser() {
        
        try {
            $passwordHash = password_hash($this->password, PASSWORD_DEFAULT);
            $query = "INSERT INTO contact (name, email, password) VALUE (?, ?, ?)";
            $dbConnection = new DBConnection();
            $dbcon = $dbConnection->connect();
            $q = mysqli_stmt_init($dbcon);
            mysqli_stmt_prepare($q, $query);
            mysqli_stmt_bind_param($q, 'sss', $this->name, $this->email, $passwordHash);
            mysqli_stmt_execute($q);
            if(mysqli_stmt_affected_rows($q) == 1) {
                $this->status = 200;
            }
        } catch(Error $e) {
            // $e->getMessage();
        }

    }

}

?>