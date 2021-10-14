<?php include '../../layouts/header.php'; ?>

<?php include '../../layouts/headerStyle.php'; ?>

    <body class="fixed-left">

        <?php include '../../layouts/loader.php'; ?>

        <!-- Begin page -->
        <div class="accountbg"></div>
        <div class="wrapper-page">

            <div class="card">
                <div class="card-body">

                    <h3 class="text-center m-0">
                        <a href="index.php" class="logo logo-admin"><img src="../../public/assets/images/logo.png" height="30" alt="logo"></a>
                    </h3>

                    <div class="p-3">
                        <h4 class="font-18 m-b-5 text-center">Recuperar Contraseña</h4>
                        <p class="text-muted text-center">Ingrese su DUI para recuperar su contraseña</p>
                         
                        <form class="form-horizontal m-t-30" id="recuperar_form">
                            <input type="hidden" name="validar_dui" value="si_validar">
                            <div class="form-group">
                                <label for="useremail">DUI *</label>
                                <input type="text" id="el_dui" name="el_dui" class="form-control" ata-parsley-error-message="El DUI es requerido" required placeholder="00000000-0">
                            </div>

                            <div class="form-group row m-t-20">
                                <div class="col-12 text-right">
                                    <button class="btn btn-primary w-md waves-effect waves-light" type="submit">Validar</button>
                                </div>
                            </div>

                        </form>


                        <form style="display: none;" class="form-horizontal m-t-30" id="cambiar_pass">
                            <input type="hidden" name="validar_dui" id="validar_dui">
                            <input type="hidden" name="el_id" id="el_id" value="">
                            <div class="form-group">
                                <label for="la_contra">Ingrese su contraseña</label>
                                <input onkeypress="return soloLetras(event)" type="password" id="la_contra" name="la_contra" class="form-control" ata-parsley-error-message="Campo obligatorio" required>
                            </div>

                            <div class="form-group">
                                <label for="la_recontra">Ingrese su contraseña</label>
                                <input type="password" id="la_recontra" name="la_recontra" class="form-control" ata-parsley-error-message="Campo obligatorio" required>
                            </div>

                            <div class="form-group row m-t-20">
                                <div class="col-12 text-right">
                                    <button class="btn btn-primary w-md waves-effect waves-light" type="submit">Actualizar contraseña</button>
                                </div>
                            </div>

                        </form>


                    </div>

                </div>
            </div>

             

        </div>

        <?php include '../../layouts/footerScript.php'; ?>

        <!-- App js -->
        <script src="../../public/assets/js/app.js"></script>

        <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <script type="text/javascript" src="../../public/plugins/parsleyjs/parsley.min.js"></script>
        <!-- Bootstrap inputmask js -->
        <script src="../../public/plugins/bootstrap-inputmask/bootstrap-inputmask.min.js"></script>
        <script>
            $("#recuperar_form").parsley();
            $("#el_dui").inputmask({mask: "99999999-9"});  //static mask
        </script>   
        <script src="funciones_ingreso.js"></script>

    </body>
</html>