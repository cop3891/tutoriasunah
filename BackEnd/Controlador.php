<?php 
	require_once("../ConnectionManager.php");
	require_once("../modelo/Estudiante.php");

	$gestorConexiones = new ConnectionManager();

	if($_GET['query'] == "initialize"){
		$query =
			"SELECT pkNonRegStudent, ".
					"name, ".
					"mail, ".
					"password, ".
					"aka, ".
					"birthday, ".
					"gender ".
			"FROM tbl_RegStudent ".
			"WHERE pkNonRegStudent = ?";
		
		$gestorConexiones->establishConnection();
		$statement = $gestorConexiones->getConnection()->prepare($query);
		$statement->bind_param("s",$_GET['email']);
		$statement->execute();
		$statement->bind_result($pkNonRegStudent,
								$name,
								$mail,
								$password,
								$aka,
								$birthday,
								$gender);

		$prejson = new stdClass();
		while($statement->fetch()){
			$estudiante = new stdClass();
			$estudiante->cuenta = $pkNonRegStudent;
			$estudiante->nombre = $name;
			$estudiante->email = $mail;
			$estudiante->password = $password;
			$estudiante->aka = $aka;
			$estudiante->cumpleanos = $birthday;
			$estudiante->genero = $gender;
			$prejson->estudiante = $estudiante;
		}
		$gestorConexiones->closeConnection();
		echo json_encode($prejson);

	}else if($_GET['query'] == "save"){
		$valoresObligatorios = strlen($_GET['nombre'] . " " .$_GET['apellido'])*strlen($_GET['correo'])*strlen($_GET['contrasena1'])*
								strlen($_GET['contrasena2'])*strlen($_GET['aka'])*strlen($_GET['fechaNacimiento'])*
								strlen($_GET['numeroCuenta'])*strlen($_GET['genero']);
		
		/*$regexCorreo = '(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]'.
						'|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])'';
		$resultCorreo = preg_match($regexCorreo, $_GET['correo']);
		
		$regexCelular = '/^(\(11\) (9\d{4})-\d{4})|((\(1[2-9]{1}\)|\([2-9]{1}\d{1}\)) [5-9]\d{3}-\d{4})$/';
		$resultCelular = preg_match($regexCelular, $_GET['celular']);*/

		if($valoresObligatorios == 0){
			echo "<script>alert('Debe llenar los campos obligatorios');</script>";
		}else if($_GET['contrasena1'] <> $_GET['contrasena2']){
			echo "<script>alert('Las contraseñas deben coincidir');</script>";
	/*	}else if($resultCorreo <> 1){
		 	echo "<script>alert('Correo no válido');</script>";
		}else if($resultCelular <> 1){
			echo "<script>alert('Celular no válido');</script>";*/
		}else{
			$query1 = "INSERT INTO tbl_NonRegStudent (idAccountNumber, nick) VALUES (?, ?)";
			$query2 = "INSERT INTO tbl_RegStudent (pkNonRegStudent, name, mail, sha1(password), aka, birthday, gender) VALUES (? ,? ,? ,? ,? ,? ,?)";

			$gestorConexiones->establishConnection();
			$statement1 = $gestorConexiones->getConnection()->prepare($query1);
			$statement1->bind_param("ss", $_GET['numeroCuenta'], $_GET['nombre']);
			$resultSet1 = $statement1->execute();
			$gestorConexiones->closeConnection();
			
			$gestorConexiones->establishConnection();
			$statement2 = $gestorConexiones->getConnection()->prepare($query2);
			$statement2->bind_param("sssssss",$_GET['numeroCuenta'],$_GET['nombre'],$_GET['correo'],$_GET['contrasena1'],$_GET['aka'],$_GET['fechaNacimiento'],$_GET['genero']);
			$resultSet2 = $statement2->execute();
			$gestorConexiones->closeConnection();

			if($resultSet2){
				$prejson = new stdClass();
				$estudiante = new stdClass();
				$estudiante->cuenta = $_GET['numeroCuenta'];
				$estudiante->nombre = $_GET['nombre'];
				$estudiante->correo = $_GET['correo'];
				$estudiante->contrasena = $_GET['contrasena1'];
				$estudiante->aka = $_GET['aka'];
				$estudiante->cumpleanos = $_GET['fechaNacimiento'];
				$estudiante->genero = $_GET['genero'];
				$prejson->query = "exito";
				$prejson->estudiante = $estudiante;
			}else{
				$prejson->query = "fallo";
			}
			echo json_encode($prejson);
		}
	}
?>