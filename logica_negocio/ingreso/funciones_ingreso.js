$(function(){
	console.log("Esta funcionando");

	$(document).on("submit","#formulario_desbloqueo1",function(event){
		event.preventDefault();
		var datos = $("#formulario_desbloqueo1").serialize();
		console.log("formulario desbloqueo",datos);
		$.ajax({
	        dataType: "json",
	        method: "POST",
	        url:'json_ingreso.php',
	        data : datos,
	    }).done(function(json) {
	    	console.log(" desbloqueo",json);
	    	if (json[0]=="Exito") {
	    	 	
				Swal.fire({
				  icon: 'success',
				  title: json[1]
				});
				var timer = setInterval(function(){
					$(location).attr('href','../home/index.php?modulo=Home');
					clearTimeout(timer); 
				},3500)
	    	 }else{
	    	 	Swal.fire({
				  icon: 'error',
				  title: json[1]
				});
	    	 }

	    });
	});
	
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
				dataType: "json",
				method:"POST",
				url:"json_ingreso.php",
				data:{"consultar_login":"si_consultalo","correo":$("#correo").val(),"contrasena":$("#contrasena").val()}
			}).done(function (json){
				console.log("el json: ",json);
				if (json[0]=="Exito") {
	    	 	
					Swal.fire({
					  icon: 'success',
					  title: json[1]
					});
					var timer = setInterval(function(){
						$(location).attr('href','../home/index.php?modulo=Home');
						clearTimeout(timer);
					},3500)
		    	 }else{
		    	 	Swal.fire({
					  icon: 'error',
					  title: json[1]
					});
		    	 }

			})


		}
	

	})
});