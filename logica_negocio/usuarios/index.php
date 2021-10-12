<?php include '../../layouts/header.php'; ?>
<!-- C3 charts css -->
<link href="../../public/plugins/c3/c3.min.css" rel="stylesheet" type="text/css" />

 <!-- DataTables -->
<link href="../../public/plugins/datatables/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css" />
<link href="../../public/plugins/datatables/buttons.bootstrap4.min.css" rel="stylesheet" type="text/css" />
<!-- Responsive datatable examples -->
<link href="../../public/plugins/datatables/responsive.bootstrap4.min.css" rel="stylesheet" type="text/css" />
 <link href="../../public/plugins/bootstrap-datepicker/css/bootstrap-datepicker.min.css" rel="stylesheet">
<?php include '../../layouts/headerStyle.php'; ?>

<body class="fixed-left">

        <?php include '../../layouts/loader.php'; ?>

        <!-- Begin page -->
        <div id="wrapper">

        <?php include '../../layouts/navbar.php'; ?>

            <!-- Start right Content here -->
            <div class="content-page">
                <!-- Start content -->
                <div class="content">

                    <!-- Top Bar Start -->
                    <?php include("../../layouts/toolbar.php"); ?>
                    <!-- Top Bar End -->

                    <!-- ==================
                         PAGE CONTENT START
                         ================== -->

                    <div class="page-content-wrapper">

                        <div class="container-fluid">

                        	<div class="row">
                                
                                <div class="col-md-6 col-xl-6">
                                    <div class="mini-stat clearfix bg-white">
                                        <span class="mini-stat-icon bg-blue-grey mr-0 float-right"><i class="mdi mdi-black-mesa"></i></span>
                                        <div class="mini-stat-info">
                                            <span id="personas_registras" class="counter text-blue-grey">65241</span>
                                            Personas registradas
                                        </div>
                                        <div class="clearfix"></div>
                                          
                                    </div>
                                </div>
                                 
                                <div class="col-md-6 col-xl-6" id="registrar_usuario" style="cursor: pointer;">
                                    <div class="mini-stat clearfix bg-white">
                                        <span class="mini-stat-icon bg-teal mr-0 float-right"><i class="mdi mdi-account"></i></span>
                                        <div class="mini-stat-info">
                                            <span class="counter text-teal">Registrar</span>
                                            Persona
                                        </div>
                                        <div class="clearfix"></div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <div class="card m-b-20">
                                        <div class="card-body">
                                        	<div id="aqui_tabla"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            

                        </div><!-- container -->

                    </div> <!-- Page content Wrapper -->

                </div> <!-- content -->

                <?php include '../../layouts/footer.php'; ?>

            </div>
            <!-- End Right content here -->

            <div class="modal fade" id="md_registrar_usuario" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Registro nuevo usuario<br><sub>Campos marcados con * son obligatorios</sub>
                        </h5>

                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                      
                     <form name="formulario_registro" id="formulario_registro">
                        <input type="hidden" id="ingreso_datos" name="ingreso_datos" value="si_registro">
                        <input type="hidden" name="llave_persona" id="llave_persona" value="">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                <label>Nombre *</label>
                                <input type="text" autocomplete="off" name="nombre" data-parsley-error-message="Campo requerido" id="nombre" class="form-control" required placeholder="Ingrese su nombre"/>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label>Email *</label>
                                <input type="email"  data-parsley-error-message="Campo requerido" autocomplete="off" name="email" id="email" class="form-control" required placeholder="Ingrese su email"/>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="form-group">
                                <label>DUI *</label>
                                <input type="text" autocomplete="off" name="dui" id="dui" data-parsley-error-message="Campo requerido" class="form-control" required placeholder="Ingrese su dui"/>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="form-group">
                                <label>Teléfono *</label>
                                <input type="text" autocomplete="off" name="telefono" data-parsley-error-message="Campo requerido" id="telefono" class="form-control" required placeholder="Ingrese su telefono"/>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="form-group">
                                <label>Fecha nacimiento *</label>
                                <input type="text" autocomplete="off" name="fecha" data-parsley-error-message="Campo requerido" id="fecha" class="form-control" required placeholder="Ingrese su fecha"/>
                              </div>
                            </div>


                            <div class="col-md-6">
                              <div class="form-group">
                                <label class="control-label">Tipo persona *</label>
                                <select id="tipo_persona" name="tipo_persona" class="form-control select2">
                                     
                                    <option value="1" >Administrador</option>
                                    <option value="2" selected>Empleado</option>
                                </select>               
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="form-group">
                                <label>Usuario <span class="eliminar_obligaroio">*</span></label>
                                <input maxlength="20" type="text" autocomplete="off" name="usuario" id="usuario" data-parsley-error-message="Campo requerido" class="form-control" required placeholder="Ingrese su usuario"/>
                              </div>
                            </div>

                             <div class="col-md-6">
                              <div class="form-group">
                                <label>Contraseña<span class="eliminar_obligaroio">*</span></label>
                                <input maxlength="50" minlength="5" type="password" data-parsley-error-message="Campo requerido" autocomplete="off" name="contrasenia" id="contrasenia" class="form-control" required placeholder="Ingrese su contraseña"/>
                              </div>
                            </div>



                          </div>
                     
                      
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="submit"  class="btn btn-primary">Guardar</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <!-- END wrapper -->

 
<?php include '../../layouts/footerScript.php'; ?>

        <!-- Peity chart JS -->
        <script src="../../public/plugins/peity-chart/jquery.peity.min.js"></script>

        <!--C3 Chart-->
        <script src="../../public/plugins/d3/d3.min.js"></script>
        <script src="../../public/plugins/c3/c3.min.js"></script>

        <!-- KNOB JS -->
        <script src="../../public/plugins/jquery-knob/excanvas.js"></script>
        <script src="../../public/plugins/jquery-knob/jquery.knob.js"></script>

        <!-- Page specific js -->
        <script src="../../public/assets/pages/dashboard.js"></script>

        <!-- App js -->
        <script src="../../public/assets/js/app.js"></script>

        <script src="../../public/plugins/datatables/jquery.dataTables.min.js"></script>
        <script src="../../public/plugins/datatables/dataTables.bootstrap4.min.js"></script>

        <script type="text/javascript" src="../../public/plugins/parsleyjs/parsley.min.js"></script>
        <script src="../../public/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

        <script src="funciones_usuarios.js"></script>

    </body>
</html>