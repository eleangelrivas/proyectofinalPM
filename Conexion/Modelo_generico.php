<?php 
	
	include_once("../../Conexion/Conexion.php");
	$instancia = new Conexion();
	$conexion = $instancia->get_conexion();

	/**
	 * 
	 */
	class Modelo_generico
	{
		
		function __construct(argument)
		{
			// code...
		}

		public function guardar_datos(){

		}

		public function eliminar_datos(){

		}

		public function actualizar_datos(){

		}

		public function seleccionar_datos(){

		}


	}

?>