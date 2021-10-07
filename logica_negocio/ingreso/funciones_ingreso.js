$(function(){
	console.log("Esta funcionando");

	$("#formulario_login").submit(function(e){
		e.preventDefault();
		if ($("#correo").val()=="" || $("#contrasena").val()=="") {
			Swal.fire(
			  'Ops',
			  'Datos vacíos',
			  'error'
			)
			return;
		}else{
			Swal.fire(
			  'Excelente',
			  'Datos validos',
			  'success'
			)
		}
		
		

	})
});