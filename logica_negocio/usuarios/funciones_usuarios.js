$(function(){
	var fecha = new Date();
	console.log("Jquery esta funcionando");

	$.mask.definitions['~']='[2,6,7]';
	$('#telefono').mask("~999-9999");

	
	$("#formulario_registro").parsley();

	$('#fecha').datepicker({
	    format: "dd/mm/yyyy",
	    language: "es",
	    autoclose: true,
	    endDate:fecha

	});
	cargar_datos();

	$(document).on("click",".btn_recupearcontra",function(e){
		mostrar_cargando("Espere","Enviando contraseña");
		e.preventDefault();
		var datos = {"enviar_contra":"si_enviala","email":$(this).attr('data-email'),"id":$(this).attr('data-id')}
		console.log("datos: ",datos);
		$.ajax({
	        dataType: "json",
	        method: "POST",
	        url:'json_usuarios.php',
	        data : datos,
	    }).done(function(json) {
	    	console.log("El envio: ",json);
	    }).always(function(){
	    	Swal.close();
	    });

	});
	$(document).on("click",".btn_editar",function(e){
		e.preventDefault(); 

		mostrar_cargando("Espere","Obteniendo datos");

		var id = $(this).attr("data-id");
		console.log("El id es: ",id);
		var datos = {"consultar_info":"si_condui_especifico","id":id}
		$.ajax({
	        dataType: "json",
	        method: "POST",
	        url:'json_usuarios.php',
	        data : datos,
	    }).done(function(json) {
	    	console.log("EL consultar especifico",json);
	    	if (json[0]=="Exito") {
	    		var fecHA_string = json[2]['fecha_nacimiento'];
				var porciones = fecHA_string.split('-');
				var fecha = porciones[2]+"/"+porciones[1]+"/"+porciones[0]

	    		$('#llave_persona').val(id);
	    		$('#ingreso_datos').val("si_actualizalo");
	    		$('#nombre').val(json[2]['nombre']);
	    		$('#email').val(json[2]['email']);
	    		$('#dui').val(json[2]['dui']);
	    		$('#telefono').val(json[2]['telefono']);
	    		$('#fecha').val(fecha);
	    		$('#tipo_persona').val(json[2]['tipo_persona']);

	    		$("#usuario").removeAttr("required");
	    		$("#contrasenia").removeAttr("required");
	    		$(".eliminar_obligaroio").empty();
				
	    		$('#md_registrar_usuario').modal('show');
	    	}
	    	 
	    }).fail(function(){

	    }).always(function(){

	    });


	});

	$(document).on("click",".btn_eliminar",function(e){
		e.preventDefault();

		Swal.fire({
		  title: '¿Desea eliminar el registro?',
		  showDenyButton: true,
		  showCancelButton: false,
		  confirmButtonText: 'Si ',
		  denyButtonText: `NO`,
		}).then((result) => {
		  /* Read more about isConfirmed, isDenied below */
		  if (result.isConfirmed) {
		    eliminar($(this).attr('data-id'));
		  } else if (result.isDenied) {
		    Swal.fire('Accion cancelada por el usuario', '', 'info')
		  }
		})



	});
	$(document).on("click","#registrar_usuario",function(e){
		e.preventDefault();
		$("#md_registrar_usuario").modal("show");

	});


	$(document).on("submit","#formulario_registro",function(e){
		e.preventDefault();

		mostrar_cargando("Procesando solicitud","Espere mientras se almacenan los datos")


		var datos = $("#formulario_registro").serialize();
		console.log("formulario: ",datos);
		$.ajax({
			dataType:"json",
			method:"POST",
			url:"json_usuarios.php",
			data:datos
		}).done(function(json){
			Swal.close();
			console.log("datos consuldos: ",json);
			if (json[0]=="Exito") {
				$("#md_registrar_usuario").modal("hide");
				cargar_datos();
			}
		}).fail(function(){

		}).always(function(){

		})

	});


});

function eliminar(id){
	mostrar_cargando("Procesando solicitud","Espere mientras se eliminan los datos")
	 

	var datos = {"eliminar_datos":"si_eliminalo","id":id};
	$.ajax({
		dataType:"json",
		method:"POST",
		url:"json_usuarios.php",
		data:datos
	}).done(function(json){
		console.log("datos consuldos: ",json);
		if (json[0]=="Exito") {
			Swal.close();
			 cargar_datos();
		}
	}).fail(function(){

	}).always(function(){

	})
}

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
function cargar_datos(){
	mostrar_cargando("Procesando solicitud","Espere mientras se obtiene la información")
	var datos = {"consultar_datos":"si_consultalos"};
	$.ajax({
		dataType:"json",
		method:"POST",
		url:"json_usuarios.php",
		data:datos
	}).done(function(json){
		Swal.close();
		console.log("datos consuldos: ",json);
		if (json[0]=="Exito") {
			$("#aqui_tabla").empty().html(json[1]);
			$('#tabla_personas').DataTable();
			$("#personas_registras").empty().html(json[2]);
		}
	}).fail(function(){

	}).always(function(){

	})





}