<?php 

class ConnectionManager{

	const SERVERNAME = "localhost";
	const USERNAME = "root";
	const PASSWORD = "123";
	const DATABASE = "db_student_inquiry";
	private $connection;

	public function getConnection(){
		return $this->connection;
	}

	public function setConnection($connection){
		$this->connection = $connection;
	}

	public function establishConnection(){
		$this->setConnection(new mysqli($this::SERVERNAME,$this::USERNAME,$this::PASSWORD,$this::DATABASE));
		$this->getConnection()->query("SET NAMES 'utf-8'");
	}

	public function closeConnection(){
		$this->connection = null;
	}

}

?>