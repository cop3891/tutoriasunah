<?php
/**
 *
 * @About:      Database connection manager class
 * @File:       Database.php
 * @Date:       $Date:$ Nov-2015
 * @Version:    $Rev:$ 1.0
 * @Developer:  Federico Guzman (federicoguzman@gmail.com)
 **/
class DbHandler {
 
    private $conn;
 
    function __construct() {
        require_once dirname(__FILE__) . './DbConnect.php';
        // opening db connection
        $db = new DbConnect();
        $this->conn = $db->connect();
    }
 
    public function createAuto($array)
    {
        if ($array['numeroCuenta'] == "20131013754" and $array['contrasenia'] == "asd123") {
            return "success";
        }else{
            return "fail";
        }
    }
 
}
 
?>