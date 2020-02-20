
<script src="<?php echo base_url('assets/js/View_margutilprov.js'); ?>"></script>
<!--Script de la tabla -->
<script>
$(document).ready(function() 
{   
    //var query = <?php echo json_encode($tabla); ?>;
    //console.log(query);
    //llenarTabla(query);
    setBaseURL("<?php echo base_url(); ?>");
    $("#pag1").addClass("active");
    $("#pag2").removeClass("active");
    $("#pag3").removeClass("active");
});
</script>

<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li id="pag1" class="breadcrumb-item active">Proveedores</li>
        <li id="pag2" class="breadcrumb-item"><a href="#">Pagina 2</a></li>
        <li id="pag3" class="breadcrumb-item"><a href="#">Pagina 3</a></li>
    </ol>
</nav>





<div class="container-fluid">
    <div class="container-fluid">
            <div class="row rounded" style="background-color:#bdd7ee">
               <div class="form-inline align-items-center col-sm-12">
                   <div class="form-group col-sm-2">
                       <img src="<?php echo base_url('assets/img/logo.png'); ?>" class="rounded" width="80px">
                   </div>
                   <div class="form-group col-sm-3">
                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div class="btn-group-sm btn-group-vertical btn-group-toggle " role="group" aria-label="First group">
                            <label id="label01" class="btn btn-outline-info">
                                <input type="radio" value="01" name="periodo"> ENERO
                            </label>
                            <label id="label05" class="btn btn-outline-info ">
                                <input type="radio" value="05" name="periodo"> MARZO
                            </label>
                            <label id="label09" class="btn btn-outline-info">
                                <input type="radio" value="09" name="periodo"> SEPTIEMBRE
                            </label>
                        </div>
                        <div class="btn-group-sm btn-group-vertical btn-group-toggle" role="group" aria-label="Second group">
                            <label id="label02" class="btn btn-outline-info ">
                                <input type="radio" value="02" name="periodo"> FEBRERO
                            </label>
                            <label id="label06" class="btn btn-outline-info ">
                                <input type="radio" value="06" name="periodo"> JUNIO
                            </label>
                            <label id="label10" class="btn btn-outline-info ">
                                <input type="radio" value="10" name="periodo"> OCTUBRE
                            </label>
                        </div>
                        <div class="btn-group-sm btn-group-vertical btn-group-toggle" role="group" aria-label="Third group">
                            <label id="label03" class="btn btn-outline-info ">
                                <input type="radio" value="03" name="periodo"> MARZO
                            </label>
                            <label id="label07" class="btn btn-outline-info ">
                                <input type="radio" value="07" name="periodo"> JULIO
                            </label>
                            <label id="label11" class="btn btn-outline-info ">
                                <input type="radio" value="11" name="periodo"> NOVIEMBRE
                            </label>
                        </div>
                        <div class="btn-group-sm btn-group-vertical btn-group-toggle" role="group" aria-label="Fourth group">
                            <label id="label04" class="btn btn-outline-info ">
                                <input type="radio" value="04" name="periodo"> ABRIL
                            </label>
                            <label id="label08" class="btn btn-outline-info ">
                                <input type="radio" value="08" name="periodo"> AGOSTO
                            </label>
                            <label id="label12" class="btn btn-outline-info ">
                                <input type="radio" value="12" name="periodo"> DICIEMBRE
                            </label>
                        </div>
                    </div>
                   </div>
                  <div class="form-group col-sm-1">
                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div class="btn-group-sm btn-group-vertical btn-group-toggle " role="group" aria-label="Fiveth group">
                           <?php
                            $anoactual= 1+(int)date("Y");
                            
                            for ($i = 1; $i <= 3; $i++) 
                            { 
                                
                            ?>
                                <label id="label<?php echo ($anoactual-$i); ?>" class="btn btn-outline-info">
                                    <input type="radio" value="<?php echo ($anoactual-$i); ?>" name="ejercicio"> <?php echo ($anoactual-$i); ?>
                                </label>
                            <?php
                            }
                            ?>
                        </div>
                   </div>
                   </div>
                   <!--div class="form-group col-sm-2">
                        <h4>Periodo</h4>
                        <select class="custom-select mr-sm-2" id="periodo" name="periodo">
                            <option selected>Seleccionar...</option>
                            <option value="01">Enero</option>
                            <option value="02">Febrero</option>
                            <option value="03">Marzo</option>
                            <option value="04">Abril</option>
                            <option value="05">Mayo</option>
                            <option value="06">Junio</option>
                            <option value="07">Julio</option>
                            <option value="08">Agosto</option>
                            <option value="09">Septiembre</option>
                            <option value="10">Octubre</option>
                            <option value="11">Noviembre</option>
                            <option value="12">Diciembre</option>
                        </select>
                    </div>
                    <div class="form-group col-sm-2">
                        <label id="label01" class="sr-only" for="inlineFormInputGroup">Ejercicio</label>
                            <h4>Ejercicio</h4>
                            <select class="custom-select mr-sm-2" name="ejercicio" id="ejercicio" >

                            </select>
                    </div-->
                    <div class="form-group col-sm-2">

                        <button id="consultar" class="btn btn-info mb-2">Consultar</button>
                    </div>
                    <div class="form-group col-sm-2">
                        <div class="spinner-border text-primary" id="spinner"  role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                        
               </div>
           </div>

            
            <br><br>
            <div class="row" style=" height:460px;">
              
                <div class="col-7 border-right border-bottom border-left border-default rounded-left">
                   <div class="row">
                        <?php 
                            //$divs = sizeof($regiones);
                            $divs = 3;
                            $largoDivs=12/$divs;
                            $i=0;

                            foreach($regiones as $key) 
                            { 
                                if ($i == 3) break;
                                ?>
                                    <div class="col-<?php echo $largoDivs; ?>">
                                        <p class="d-flex justify-content-center"><?php echo $key->nombre; ?></p>
                                        <img src="<?php echo base_url('assets/img/zona'.$i.'.jpg'); ?>" class="rounded mx-auto d-block" width="50px">
                                        <h4 id="porcentaje<?php echo $i;?>" class="d-flex justify-content-center text-danger"></h4>
                                        <h5 class="d-flex justify-content-center" style="color:#34518E"><strong id="ventaNeta<?php echo $i;?>"></strong></h5>
                                        
                                    </div>
                        <?php
                             $i++;
                            }
                         ?>
                    </div>
                    <br>
                    <hr>
                    <div class="table-responsive">
                        <table id="example" class="display cell-border responsive stripe" width="100%" >
                                <thead>
                                    <tr>
                                        <th>Num_prov</th>
                                        <th>Proveedor</th>
                                        <th>Venta</th>
                                        <th>UdsVen</th>
                                        <th>Margen</th>
                                        <th>DiasInv</th>
                                        <th>CostoVta</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </tfoot>
                        </table>
                    </div>
                </div>
                <div class="col-5 border-right border-bottom border-left border-default rounded-right">

               
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                      <li class="nav-item" id="nav-sucursal-tab">
                        <a onclick="pestanaSuc()" class="nav-link active" id="pestaniaSuc-tab" data-toggle="tab" href="#pestaniaSuc" role="tab" aria-controls="pestaniaSuc" aria-selected="true">Sucursales</a>
                      </li>
                      <li class="nav-item" id="nav-capas-tab">
                        <a onclick="pestanaCap()" class="nav-link" id="pestaniaCapas-tab" data-toggle="tab" href="#pestaniaCapas" role="tab" aria-controls="pestaniaCapas" aria-selected="false">Capas</a>
                      </li>
                    </ul>

                    <!-- Tab panes -->
                    <div class="tab-content">
                      <div class="tab-pane active" id="pestaniaSuc" role="tabpanel" aria-labelledby="pestaniaSuc-tab" >
                          <br>
                            <div class="row">
                                <img id="imagenProv" src="" class="rounded float-left " height="50px">
                                <div class="spinner-border text-primary" id="spinner2"  role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>

                            <h5 style="color:blue;" id="tituloproveedor"></h5>

                            <div class="table-responsive">
                                <table id="detalles" class="display cell-border stripe" width="100%" >
                                    <thead>
                                        <tr>
                                            <th>Suc</th>
                                            <th id="ventaProvAnterior">VentaNeta2</th>
                                            <th id="ventaProvActual">Venta</th>
                                            <th id="unidsProvAnterior">UdsVen2</th>
                                            <th id="unidsProvActual">UdsVen</th>
                                            <th>CostoVta</th>
                                            <th>Mgn</th>
                                            <th>DiasInv</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                      </div>
                      <div class="tab-pane" id="pestaniaCapas" role="tabpanel" aria-labelledby="pestaniaCapas-tab" >
                         <br>
                         <div class="row">
                                <img id="imagenProv2" src="" class="rounded float-left " height="50px">
                                <div class="spinner-border text-primary" id="spinner3"  role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                            <h5 style="color:blue;" id="tituloproveedor2"></h5>
                            <div class="table-responsive">
                                <table id="capas" class="display cell-border compact" width="100%" >
                                    <thead>
                                        <tr>
                                            <th>Proveedor</th>
                                            <th>Capa</th>
                                            <th>Descripcion</th>
                                            <th>VtaProm</th>
                                            <th>VtaProm$</th>
                                            <th>DiasInv</th>
                                            <th>Existencia</th>
                                            <th>Cto_Prom</th>
                                            <th>Valor</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                      </div>
                    </div>
                    
                </div>


            </div>

            <!--canvas id="myChart"></canvas-->

    </div>          
</div>