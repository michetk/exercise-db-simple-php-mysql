<?php
    namespace src\Models;

use mysqli;

DEFINE('DB_USER', 'root');
    DEFINE('DB_PASSWORD', '');
    DEFINE('DB_HOST', 'localhost');
    DEFINE('DB_NAME', 'test');

    $dbcon = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
    mysqli_set_charset($dbcon, 'utf8');
?>