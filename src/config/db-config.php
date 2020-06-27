<?php

namespace src\Config;

class AuthDataBase {
    private $DB_USER = 'root';
    private $DB_PASSWORD = '';
    private $DB_HOST = 'localhost';
    private $DB_NAME = 'test';

    public function getDB_User() {
        return $this->DB_USER;
    }

    public function getDB_Password() {
        return $this->DB_PASSWORD;
    }

    public function getDB_Host() {
        return $this->DB_HOST;
    }

    public function getDB_Name() {
        return $this->DB_NAME;
    }
}

?>