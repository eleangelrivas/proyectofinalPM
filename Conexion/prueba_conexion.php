<?php 

	require_once("Conexion.php");

	$instancia = new Conexion();
	$conexion = $instancia->get_conexion();
	try {
		$sql ="SELECT *FROM tb_persona";
		$statement = $conexion->prepare($sql);
		$statement->execute();
		$datos = $statement->fetchAll();
		print_r($datos);
	} catch (Exception $e) {
		print_r($e);
	}


?>