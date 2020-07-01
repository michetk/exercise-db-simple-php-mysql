<?php
namespace App\models;
use App\models\DBConnection;

class SelectUser {
    private $status;

    public function getStatus() {
        return $this->status;
    }
    
    public function selectUser() {
        $query = "SELECT * FROM contact ORDER BY name ASC";
        $dbConnection = new DBConnection();
        $dbcon = $dbConnection->connect();
        $result = mysqli_query($dbcon, $query);
        if($result->num_rows !== 0) {
            $row =  json_encode(mysqli_fetch_array($result, MYSQLI_ASSOC));
            $this->status = $row;
        } else {
            $row = json_encode('503');
            $this->status = $row;
        }
    }
}

?>