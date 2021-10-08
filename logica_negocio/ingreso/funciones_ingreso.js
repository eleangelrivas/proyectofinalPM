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
			$.ajax({
				dataType:"json",
				method:"POST",
				url:"json_ingreso.php",
				data:{"correo":$("#correo").val(),"contrasena":$("#contrasena").val()}
			}).done(function (json){
				console.log("el json: ",json);

			}).fail(funtion(){

			}).alway(function(){

			});


		}
		


	})
});