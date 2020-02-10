
<script src="<?php echo base_url('assets/js/View_margutilprov.js'); ?>"></script>
<!--Script de la tabla -->
<script>
$(document).ready(function() 
{   
    //var query = <?php echo json_encode($tabla); ?>;
    //console.log(query);
    //llenarTabla(query);
    setBaseURL("<?php echo base_url(); ?>");
});
</script>







<div class="container-fluid">
    <div class="container-fluid">
            <div class="row rounded" style="background-color:#bdd7ee">
               <div class="form-inline align-items-center col-sm-12">
                   <div class="form-group col-sm-1">
                       <img src="<?php echo base_url('assets/img/logo.png'); ?>" class="rounded" width="80px">
                   </div>
                   <div class="form-group col-sm-2">
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
                        <label class="sr-only" for="inlineFormInputGroup">Ejercicio</label>
                            <h4>Ejercicio</h4>
                            <select class="custom-select mr-sm-2" name="ejercicio" id="ejercicio" >

                            </select>
                    </div>
                    <div class="form-group col-sm-2">

                        <button id="consultar" class="btn btn-primary mb-2">Consultar</button>
                    </div>
                    <div class="form-group col-sm-2">
                        <div class="spinner-border text-primary" id="spinner"  role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                        
               </div>
           </div>

            
            <br><br>
            <div class="row">
              
                <div class="col-8 border-right border-bottom border-left border-default rounded-left">
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
                                        <h4 class="d-flex justify-content-center"><?php echo $key->nombre; ?></h4>
                                        <img src="<?php echo base_url('assets/img/zona'.$i.'.jpg'); ?>" class="rounded mx-auto d-block" width="80px">
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
                <div class="col-4 border border-default rounded-right">
                  <div class="spinner-border text-primary" id="spinner2"  role="status">
                                  <span class="sr-only">Loading...</span>
                    </div>
                    <div class="row"><img id="imagenProv" src="" class="rounded float-left " height="80px"></div>
                   <br><br><br><br><br>
                   <h5 style="color:blue;" id="tituloproveedor"></h5>
                   <br><br>
                    <div class="table-responsive">
                        <table id="detalles" class="display cell-border responsive stripe" width="100%" >
                                <thead>
                                    <tr>
                                        <th>Suc</th>
                                        <th>Venta</th>
                                        <th>UdsVen</th>
                                        <th>Devoluciones</th>
                                        <th>UdsDev</th>
                                        <th>Venta</th>
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
                                        <th></th>
                                    </tr>
                                </tfoot>
                        </table>
                    </div>
                </div>


            </div>

            <!--canvas id="myChart"></canvas-->

    </div>          
</div>