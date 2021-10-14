$(function(){
	console.log("Esta funcionando");
	

	$(document).on("submit","#cambiar_pass",function(event){
		event.preventDefault();
		if ($("#la_contra").val()!=$("#la_recontra").val()) {
			Swal.fire(
			  'Error!',
			  'Las contraseñas no coinciden',
			  'error'
			)
		}else{
			var datos = $("#cambiar_pass").serialize();
			$.ajax({
		        dataType: "json",
		        method: "POST",
		        url:'json_ingreso.php',
		        data : datos,
		    }).done(function(json) {
		    	var timer = setInterval(function(){
					$(location).attr('href','index.php');
					clearTimeout(timer); 
				},3500)
		    	console.log("El dato es valido",json);

		    }).fail(function(e){
		    	console.error("El error es",e);
		    }).always(function(e){
		    	Swal.close(); 
		    	
		    });
		}
	});


	$(document).on("submit","#recuperar_form",function(event){
		mostrar_cargando("Obteniendo datos");
		event.preventDefault();
		console.log("datos del formulario: ",$("#recuperar_form").serialize());
		var datos = $("#recuperar_form").serialize();
		$.ajax({
	        dataType: "json",
	        method: "POST",
	        url:'json_ingreso.php',
	        data : datos,
	    }).done(function(json) {
	    	$("#recuperar_form").css("display","none");
	    	$("#cambiar_pass").css("display","block");
	    	$("#validar_dui").val("actualizar_pass");
	    	$("#el_id").val(json[1]);
	    	console.log("El dato es valido",json);
	    }).fail(function(e){
	    	console.error("El error es",e);
	    }).always(function(e){
	    	Swal.close(); 
	    	
	    });


	});
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


function mostrar_cargando(titulo,mensaje=""){
	Swal.fire({
	  title: titulo,
	  html: mensaje,
	  timer: 2000,
	  timerProgressBar: true,
	  didOpen: () => {
	    Swal.showLoading()
	     
	  },
	  willClose: () => {
	     
	  }
	}).then((result) => {
	  /* Read more about handling dismissals below */
	  if (result.dismiss === Swal.DismissReason.timer) {
	    console.log('I was closed by the timer')
	  }
	})
}


 function soloLetras(e) {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " abcdefghijklmnñopqrstuvwxyz",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
  }