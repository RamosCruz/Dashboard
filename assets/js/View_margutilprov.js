var url;
var tabla= null;
var tabla2= null;
var inventarioProm;
var promediodeVentasGeneral=[];
var promediodeVentasProveedor=[];
//Graficas: https://www.chartjs.org/samples/latest/
//.ready(function() se ejecuta cuando se carga la pagina por primera vez

$(document).ready(function() 
{
    document.getElementById('spinner').style.display = "none";
     document.getElementById('spinner2').style.display = "none";
    $('#ejercicio').each(function() {
        var year = (new Date()).getFullYear();
        var current = year;
        year -= 2;
        for (var i = 0; i < 3; i++) {
            if ((year+i) == current)
                $(this).append('<option selected value="' + (year + i) + '">' + (year + i) + '</option>');
            else
                $(this).append('<option value="' + (year + i) + '">' + (year + i) + '</option>');
        }
    });

    
    
    $("#consultar").click(function () 
    {
        $('#ventaNeta0').text(""); 
        $('#ventaNeta1').text(""); 
        $('#ventaNeta2').text(""); 

        $('#porcentaje0').text("");  
        $('#porcentaje1').text(""); 
        $('#porcentaje2').text(""); 
        
        $('#tituloproveedor').text("");
        $("#imagenProv").attr("src","");
        
        inventarioProm=null;
        var periodo=$('#periodo').val();
        var ejercicio=$('#ejercicio').val();
        
        var fecha = new Date();
        var anoActual = fecha.getFullYear();
        
        if(periodo=="Seleccionar...")
        {
            Swal.fire("Selecciona un periodo por favor!");
        }
        else if(ejercicio < (anoActual-2) || ejercicio > anoActual)
        {
            Swal.fire("El ejercicio no corresponde al rango permitido!");
        }
        else
        {
            //alert(getBaseURL()+'Con_margutilprov/margenGeneral');
            if(tabla!=null)
            {
                tabla.clear().draw();
                tabla2.clear().draw();
            }
           
            var periodoyano = {periodo:periodo,ejercicio:ejercicio};
            queryPromediodeVentGeneral(getBaseURL()+"con_margutilprov/margenGeneral", periodoyano, 'GET');
            
        }
             
        
        
            
    });
    
    
});
    
function getBaseURL()
{
    return url;
}

function setBaseURL(url)
{
    this.url=url;
}

function getMargenGeneral(url, periodoyano, req_type)
{
    $.ajax({
        xhr: function()
        {
            var xhr = new window.XMLHttpRequest();
            xhr.open("GET", getBaseURL()+"con_margutilprov/margenGeneral");
            xhr.onprogress = function (e) {
                if (e.lengthComputable) {
                    //console.log(e.loaded+  " / " + e.total)
                }
            }
            xhr.onloadstart = function (e) {
                
                 
                 
            }
            xhr.onloadend = function (e) {
               
                
            }
            xhr.send();
            return xhr;
        },
        type: req_type,
        url: url,
        data: periodoyano,
        dataType: "json",
        success: function(response)
        {
            if(response==false)
            {
                console.log(response);
                Swal.fire('No hay datos getMargenGeneral!');
            }
            else
            { 
                queryVerValorInventario(response,periodoyano);
                
    
            }
        },
        error: function (xhr, ajaxOptions, thrownError) 
        {
            Swal.fire
            ({
                  title:"Error: "+ xhr.status+" "+thrownError,
                  icon: "info",
                  html:xhr.responseText+"<p>"+getBaseURL()+"con_margutilprov/margenGeneral</p>",
                  showCloseButton: true,
                  showCancelButton: true,
                  focusConfirm: false,
                  confirmButtonText:
                    '<i class="fa fa-thumbs-up"></i> Ok',
                  confirmButtonAriaLabel: 'Thumbs up, great!',
                  cancelButtonText:
                    '<i class="fa fa-thumbs-down">Cancelar</i>',
                  cancelButtonAriaLabel: 'Thumbs down'
            });
        }
    });

}

function llenarTabla1(query_result,req)
{
    var events = $('#events');
    
    tabla = $('#example').DataTable( {
        destroy: true,
        responsive: true,
        data:query_result,
        columns:
        [
            {data:"Num_prov"},
            {data:"Proveedor"},
            {data:"VentaNeta"},
            {data:"UdsVen"},
            {data:"Margen"},
            {data:"DiasInv"},
            {data:"CostoVta"}
        ],
        language:
        {
            sProcessing:     "Procesando...",
                        sLengthMenu:     "Mostrar _MENU_ registros",
                        sZeroRecords:    "No se encontraron resultados",
                        sEmptyTable:     "Ningún dato disponible en esta tabla",
                        sInfo:           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                        sInfoEmpty:      "Mostrando registros del 0 al 0 de un total de 0 registros",
                        sInfoFiltered:   "(filtrado de un total de _MAX_ registros)",
                        sInfoPostFix:    "",
                        sSearch:         "Buscar:",
                        sUrl:            "",
                        sInfoThousands:  ",",
                        sLoadingRecords: "Cargando...",
                        oPaginate: {
                            sFirst:    "Primero",
                            sLast:     "Último",
                            sNext:     "Siguiente",
                            sPrevious: "Anterior"
                        },
                        oAria: {
                            sSortAscending:  ": Activar para ordenar la columna de manera ascendente",
                            sSortDescending: ": Activar para ordenar la columna de manera descendente"
                        },
                        buttons: {
                            copy: "Copiar",
                            colvis: "Visibilidad"
                        }
        },
        scrollY:        "230px",
        paging:         false,
        select: 'single',
        columnDefs: [
            {
                targets: 2,
                render: $.fn.dataTable.render.number( ',', '.', 2, '$' )
            },
            {
                targets: 3,
                render: $.fn.dataTable.render.number( ',', '.', 1, '' )
            },
            {
                targets: 4,
                render: $.fn.dataTable.render.number( ',', '.', 1, '','%' )
            },
            {
                targets: 5,
                render: $.fn.dataTable.render.number( ',', '.', 1, '','' )
            },
            {
                "targets": [ 0 ],
                "visible": false
            },
            {
                "targets": [ 6 ],
                "visible": false
            },
            { className: "dt-center", targets: [2,3,4,5] }
        ],
        footerCallback: function ( row, data, start, end, display ) 
        {
            var api = this.api();
            var nb_cols = 5;
            var j = 2;
            //Suma de columnas de la 0 a la 7
            while(j < nb_cols){
            var pageTotal = api.column( j, { page: 'current'} ).data().reduce( function (a, b) 
            {
                return Number(a) + Number(b);
            }, 0 );
            // Update footer
            $( api.column( j ).footer() ).html(pageTotal.toLocaleString(undefined, {maximumFractionDigits:2}));
            j++;
            }
            
            //Calculo de margen total para la columna 8
            var venta = api.column(2 ,{ page: 'current'} ).data().reduce( function (a, b) 
            {
                return Number(a) + Number(b);
            }, 0 );
            var CostoVta = api.column(6 ,{ page: 'current'} ).data().reduce( function (a, b) 
            {
                return Number(a) + Number(b);
            }, 0 );
            
            var margenGeneral= ((venta-CostoVta)/venta)*100;
            
            $( api.column( 4 ).footer() ).html(margenGeneral.toLocaleString(undefined, {maximumFractionDigits:1})+'%');
            
            
        }
    } ).columns.adjust().draw();

    
    tabla.on( 'select', function ( e, dt, type, indexes ) {
                $('#ventaNeta0').text("");  
                $('#ventaNeta1').text(""); 
                $('#ventaNeta2').text(""); 

                $('#porcentaje0').text("");  
                $('#porcentaje1').text(""); 
                $('#porcentaje2').text(""); 
                var rowData=null;
                rowData = tabla.rows( indexes ).data().toArray();
                var linea = dt["0"][0];
                //console.log(rowData[0].Num_prov+","+req.periodo+",",req.ejercicio);
                var req1 = {proveedor:rowData[0].Num_prov,periodo:req.periodo,ejercicio:req.ejercicio};
                var nombre_prov = rowData[0].Proveedor;
                queryPromediodeVentProvee(getBaseURL()+"con_margutilprov/getMargenPorDebsur", req1, 'GET', nombre_prov);
                
            } );
    
}

function getMargenPorSuc(url, req, req_type, nombre_prov)
{
    $.ajax
    ({
        xhr: function()
        {
            var xhr = new window.XMLHttpRequest();
            xhr.open("GET", getBaseURL()+"con_margutilprov/getMargenPorDebsur");
            xhr.onprogress = function (e) {
                if (e.lengthComputable) {
                    //console.log(e.loaded+  " / " + e.total)
                }
            }
            xhr.onloadstart = function (e) {
                
                 
                 
            }
            xhr.onloadend = function (e) {
               
            }
            xhr.send();
            return xhr;
        },
        type: req_type,
        url: url,
        data: req,
        dataType: "json",
        success: function(response)
        {
            if(response==false)
            {
                
                Swal.fire('No hay datos getMargenPorSuc!');
            }
            else
            { 
                queryVerValorInventario2(response,req,nombre_prov);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) 
        {
            Swal.fire
            ({
                title: xhr.status+" "+thrownError,
                icon: "info",
                html:xhr.responseText+"<p>"+getBaseURL()+"con_margutilprov/getMargenPorDebsur</p>",
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Ok',
                confirmButtonAriaLabel: 'Thumbs up, great!',
                cancelButtonText:
                '<i class="fa fa-thumbs-down">Cancelar</i>',
                cancelButtonAriaLabel: 'Thumbs down'
            });
        }
    });
    
}

function llenarTabla2(query_result)
{
    //console.log(query_result);
    var events = $('#events');
    
    tabla2 = $('#detalles').DataTable( {
        destroy: true,
        responsive: true,
        data:query_result,
        columns:
        [
            {data:"Sucursal"},
            {data:"VentaNeta"},
            {data:"UdsVen"},
            {data:"Devoluciones"},
            {data:"UdsDev"},
            {data:"Venta"},
            {data:"CostoVta"},
            {data:"Margen"},
            {data:"DiasInv"}
        ],
        language:
        {
            sProcessing:     "Procesando...",
                        sLengthMenu:     "Mostrar _MENU_ registros",
                        sZeroRecords:    "No se encontraron resultados",
                        sEmptyTable:     "Ningún dato disponible en esta tabla",
                        sInfo:           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                        sInfoEmpty:      "Mostrando registros del 0 al 0 de un total de 0 registros",
                        sInfoFiltered:   "(filtrado de un total de _MAX_ registros)",
                        sInfoPostFix:    "",
                        sSearch:         "Buscar:",
                        sUrl:            "",
                        sInfoThousands:  ",",
                        sLoadingRecords: "Cargando...",
                        oPaginate: {
                            sFirst:    "Primero",
                            sLast:     "Último",
                            sNext:     "Siguiente",
                            sPrevious: "Anterior"
                        },
                        oAria: {
                            sSortAscending:  ": Activar para ordenar la columna de manera ascendente",
                            sSortDescending: ": Activar para ordenar la columna de manera descendente"
                        },
                        buttons: {
                            copy: "Copiar",
                            colvis: "Visibilidad"
                        }
            
        },
        scrollY:        "200px",
        paging:         false,
        searching: false,
        select: 'single',
        columnDefs: 
        [
            { 
                responsivePriority: 1, targets: 0 
            },
            {
                targets: 1,
                render: $.fn.dataTable.render.number( ',', '.', 2, '$' )
            },
            {
                targets: 2,
                render: $.fn.dataTable.render.number( ',', '.', 1, '' )
            },
            {
                targets: 5,
                render: $.fn.dataTable.render.number( ',', '.', 2, '$' )
            },
            {
                targets: 6,
                render: $.fn.dataTable.render.number( ',', '.', 2, '$' )
            },
            {
                targets: 7,
                render: $.fn.dataTable.render.number( ',', '.',1, '','%' )
            },
            {
                targets: 8,
                render: $.fn.dataTable.render.number( ',', '.', 1, '','' )
            },
            {
                "targets": [ 3 ],
                "visible": false
            },
            {
                "targets": [ 4 ],
                "visible": false
            },
            {
                "targets": [ 5 ],
                "visible": false
            },
            {
                "targets": [ 6 ],
                "visible": false
            },
            { className: "dt-center", targets: [0,1,2,7,8] }
        ],
        footerCallback: function ( row, data, start, end, display ) 
        {
            var api = this.api();
            var nb_cols = 6;
            var j = 1;
            while(j < nb_cols)
            {
                var pageTotal = api.column( j, { page: 'current'} ).data().reduce( function (a, b)
                {
                    return Number(a) + Number(b);
                }, 0 );
                // Update footer
                $( api.column( j ).footer() ).html(pageTotal.toLocaleString(undefined, {maximumFractionDigits:2}));
                j++;
            }
            //Calculo de margen total para la columna 7
            var venta = api.column(1 , { page: 'current'} ).data().reduce( function (a, b) 
            {
                return Number(a) + Number(b);
            }, 0 );
            var CostoVenta = api.column(6 , { page: 'current'} ).data().reduce( function (a, b) 
            {
                return Number(a) + Number(b);
            }, 0 );
            
            var margenGeneral= ((venta-CostoVenta)/venta)*100;
            
            $( api.column( 7 ).footer() ).html(margenGeneral.toLocaleString(undefined, {maximumFractionDigits:1}));
        }
    } ).columns.adjust();
    
}

function queryVerValorInventario(getMargenGeneral,periodoyano)
{
    
    var i = 0;
    var ins="";
    while(i<getMargenGeneral.length)
    {
        var ins = ins +"'"+getMargenGeneral[i].Num_prov+"',";
        
        i++;
    }
    var cadena2 = ins.slice(0, -1);
    
    $.ajax({
        xhr: function()
        {
            var xhr = new window.XMLHttpRequest();
            xhr.open("GET", getBaseURL()+"con_margutilprov/valorInvetarioPorProveedor");
            xhr.onprogress = function (e) {
                if (e.lengthComputable) {
                    //console.log(e.loaded+  " / " + e.total)
                }
            }
            xhr.onloadstart = function (e) {

                 

            }
            xhr.onloadend = function (e) {

                document.getElementById('spinner').style.display = "none";
            }
            xhr.send();
            return xhr;
        },
        type: 'GET',
        url: getBaseURL()+"con_margutilprov/valorInvetarioPorProveedor",
        data: {proveedor:cadena2,periodo:periodoyano.periodo,ejercicio:periodoyano.ejercicio},
        dataType: "json",
        success: function(response)
        {
            if(response)
            {

                inventarioProm=response;
                agregarDias(getMargenGeneral,periodoyano);
            }
            else
            { 
                Swal.fire('No hay datos queryVerValorInventario!');
            }
        },
        error: function (xhr, ajaxOptions, thrownError) 
        {
            Swal.fire
            ({
                title: xhr.status+" "+thrownError,
                icon: "info",
                html:xhr.responseText+"<p>"+getBaseURL()+"con_margutilprov/valorInvetarioPorProveedor</p>",
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Ok',
                confirmButtonAriaLabel: 'Thumbs up, great!',
                cancelButtonText:
                '<i class="fa fa-thumbs-down">Cancelar</i>',
                cancelButtonAriaLabel: 'Thumbs down'
            });
        }
    });
}

function agregarDias(general,periodoyano)
{ 
    
    var pivote;
    var columnaCalculada=new Array();
    for(var j=0;j<general.length;j++)
    {
        
        var valorInventario=0;
        var promV=0
        pivote=parseInt(general[j].Num_prov);
        for(var i=0;i<inventarioProm.length;i++)
        {
            if(pivote==parseInt(inventarioProm[i].cve_pro))
            {
                valorInventario=valorInventario+parseFloat(inventarioProm[i].ValorPROM);
                
            }
            
        }
        
        
        for(var k = 0;k<promediodeVentasGeneral.length;k++){
            if(pivote==parseInt(promediodeVentasGeneral[k].Num_prov))
            {
                promV=promediodeVentasGeneral[k].PromedioVenta;
            }
        }
        
        
        
        general[j].DiasInv = 30.4*(valorInventario/promV);
        if(!isFinite(general[j].DiasInv))
        {
            general[j].DiasInv=0;
        }
        
        
    }
    llenarTabla1(general,periodoyano);
}

function queryVerValorInventario2(datos, req,nombre_prov)
{
     $.ajax
    ({
        xhr: function()
        {
            var xhr = new window.XMLHttpRequest();
            xhr.open("GET", getBaseURL()+"con_margutilprov/valorInvetarioPorProveedor");
            xhr.onprogress = function (e) {
                if (e.lengthComputable) {
                    //console.log(e.loaded+  " / " + e.total)
                }
            }
            xhr.onloadstart = function (e) {
                
                 
                 
            }
            xhr.onloadend = function (e) {
               
                
            }
            xhr.send();
            return xhr;
        },
        type: 'GET',
        url: getBaseURL()+"con_margutilprov/valorInvetarioPorProveedor",
        data: {proveedor: "'"+req.proveedor+"'",ejercicio:req.ejercicio,periodo:req.periodo},
        dataType: "json",
        success: function(response)
        {
            if(response==false)
            {
                document.getElementById('spinner2').style.display = "none";
                agregarDias2(datos,response,req,nombre_prov);
            }
            else
            { 
                agregarDias2(datos,response,req,nombre_prov);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) 
        {
            Swal.fire
            ({
                title: xhr.status+" "+thrownError,
                icon: "info",
                html:xhr.responseText+"<p>"+getBaseURL()+"con_margutilprov/getMargenPorDebsur</p>",
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Ok',
                confirmButtonAriaLabel: 'Thumbs up, great!',
                cancelButtonText:
                '<i class="fa fa-thumbs-down">Cancelar</i>',
                cancelButtonAriaLabel: 'Thumbs down'
            });
        }
    });
}

function agregarDias2(general,inventarioProm2,req,nombre_prov)
{
    console.log(inventarioProm2);
    console.log(promediodeVentasProveedor);
    var pivote;
    var columnaCalculada=new Array();
    for(var j=0;j<general.length;j++)
    {
        var valorInventario=0;
        var promV=0
        pivote=parseInt(general[j].Sucursal);
        for(var i=0;i<inventarioProm2.length;i++)
        {
            if(pivote==parseInt(inventarioProm2[i].Zona))
            {
                valorInventario=valorInventario+parseFloat(inventarioProm2[i].ValorPROM);
            }
        }
        
        for(var k = 0;k<promediodeVentasProveedor.length;k++){
            if(pivote==parseInt(promediodeVentasProveedor[k].Sucursal))
            {
                promV=promediodeVentasProveedor[k].PromedioVenta;
            }
        }
        
        
        general[j].DiasInv = 30.4*(valorInventario/promV);
        if(!isFinite(general[j].DiasInv))
        {
            general[j].DiasInv=0;
        }
        
        
    }
    if(tabla2==null)
    {
        llenarTabla2(general);
        llenarRegiones(general)
    }else
    {
        tabla2.clear().draw();
        //console.log(response);
        llenarTabla2(general);
        llenarRegiones(general);
    }
    
    $("#imagenProv").attr("src", getBaseURL()+"assets/img/"+req.proveedor+".png");
    var myImage = new Image();
    myImage.src = getBaseURL()+"assets/img/"+req.proveedor+".png";
    myImage.onerror = function(){
       $("#imagenProv").attr("src", getBaseURL()+"assets/img/noimg.png");
    }
    
    
    $('#tituloproveedor').text(req.proveedor+" - "+nombre_prov);
    
}

function llenarRegiones(consulta)
{
    
     $.ajax({
        xhr: function()
        {
            var xhr = new window.XMLHttpRequest();
            xhr.open("GET", getBaseURL()+"con_margutilprov/getRegionesConZonas");
            xhr.onprogress = function (e) {
                if (e.lengthComputable) {
                    //console.log(e.loaded+  " / " + e.total)
                }
            }
            xhr.onloadstart = function (e) {
                
                 
                 
            }
            xhr.onloadend = function (e) {
               
                document.getElementById('spinner2').style.display = "none";
            }
            xhr.send();
            return xhr;
        },
        type: 'GET',
        url: getBaseURL()+"con_margutilprov/getRegionesConZonas",
        dataType: "json",
        success: function(response)
        {
            if(response==false)
            {
                console.log(response);
                Swal.fire('No hay datos llenarRegiones!');
            }
            else
            { 
                var total=0;
                var valles=0;
                var costa=0;
                var istmo=0;
                var perteneceA=0;
                
                var porcValles=0;
                var porcCosta=0;
                var porCIstmo=0;
                
                for(var i= 0; i<consulta.length;i++)
                {
                    total=total+parseFloat(consulta[i].VentaNeta);
                    for(var j = 0; j<response.length;j++)
                    {
                        if(consulta[i].Sucursal==response[j].Zona)
                        {
                            perteneceA=response[j].Region;
                        }
                    }
                    
                    
                    
                    switch (perteneceA) {
                        case '001':
                            valles=valles+parseFloat(consulta[i].VentaNeta);
                            break;
                        case '002':
                            costa=costa+parseFloat(consulta[i].VentaNeta);
                            break;
                        case '003':
                            istmo=istmo+parseFloat(consulta[i].VentaNeta);
                            break;
                        default:
                            dayName = 'Invalid day';
                    }
                    
                }
                porcValles=(valles*100)/total;
                porcCosta=(costa*100)/total;
                porCIstmo=(istmo*100)/total;
                
                $('#ventaNeta0').text("$ "+valles.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));  
                $('#ventaNeta1').text("$ "+costa.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); 
                $('#ventaNeta2').text("$ "+istmo.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); 
                
                $('#porcentaje0').text(porcValles.toFixed(2)+"%");  
                $('#porcentaje1').text(porcCosta.toFixed(2)+"%"); 
                $('#porcentaje2').text(porCIstmo.toFixed(2)+"%"); 
            }
        },
        error: function (xhr, ajaxOptions, thrownError) 
        {
            Swal.fire
            ({
                  title:"Error: "+ xhr.status+" "+thrownError,
                  icon: "info",
                  html:xhr.responseText+"<p>"+getBaseURL()+"con_margutilprov/margenGeneral</p>",
                  showCloseButton: true,
                  showCancelButton: true,
                  focusConfirm: false,
                  confirmButtonText:
                    '<i class="fa fa-thumbs-up"></i> Ok',
                  confirmButtonAriaLabel: 'Thumbs up, great!',
                  cancelButtonText:
                    '<i class="fa fa-thumbs-down">Cancelar</i>',
                  cancelButtonAriaLabel: 'Thumbs down'
            });
        }
    });
    
    
}

function queryPromediodeVentGeneral(url, periodoyano, req_type)///////////////////////////////////////////////////////////////////////
{

    $.ajax({
         xhr: function()
        {
            var xhr = new window.XMLHttpRequest();
            xhr.open("GET", getBaseURL()+"con_margutilprov/getPromediodeVenGeneral");
            xhr.onprogress = function (e) {
                if (e.lengthComputable) {
                    //console.log(e.loaded+  " / " + e.total)
                }
            }
            xhr.onloadstart = function (e) {

                document.getElementById('spinner').style.display = "block";

            }
            xhr.onloadend = function (e) {


            }
            xhr.send();
            return xhr;
        },
        type: 'GET',
        url: getBaseURL()+"con_margutilprov/getPromediodeVenGeneral",
        data: {periodo:periodoyano.periodo,ejercicio:periodoyano.ejercicio},
        dataType: "json",
        success: function(response)
        {
            promediodeVentasGeneral=response;
            getMargenGeneral(url, periodoyano, req_type);
        },
        error: function (xhr, ajaxOptions, thrownError) 
        {
            Swal.fire
            ({
                title: xhr.status+" "+thrownError,
                icon: "info",
                html:xhr.responseText+"<p>"+getBaseURL()+"con_margutilprov/getPromediodeVenGeneral</p>",
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Ok',
                confirmButtonAriaLabel: 'Thumbs up, great!',
                cancelButtonText:
                '<i class="fa fa-thumbs-down">Cancelar</i>',
                cancelButtonAriaLabel: 'Thumbs down'
            });
        }
    });
    
    
}
function queryPromediodeVentProvee(baseurl, req1, typereq, nombre_prov)
{
    $.ajax({
         xhr: function()
        {
            var xhr = new window.XMLHttpRequest();
            xhr.open("GET", getBaseURL()+"con_margutilprov/getPromediodeVenProvee");
            xhr.onprogress = function (e) {
                if (e.lengthComputable) {
                    //console.log(e.loaded+  " / " + e.total)
                }
            }
            xhr.onloadstart = function (e) {
                document.getElementById('spinner2').style.display = "block";
            }
            xhr.onloadend = function (e) {
               
                
            }
            xhr.send();
            return xhr;
        },
        type: 'GET',
        url: getBaseURL()+"con_margutilprov/getPromediodeVenProvee",
        data: req1,
        dataType: "json",
        success: function(response)
        {
            promediodeVentasProveedor = response;
            getMargenPorSuc(baseurl, req1, typereq, nombre_prov);
        },
        error: function (xhr, ajaxOptions, thrownError) 
        {
            Swal.fire
            ({
                title: xhr.status+" "+thrownError,
                icon: "info",
                html:xhr.responseText+"<p>"+getBaseURL()+"con_margutilprov/getPromediodeVenProvee</p>",
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Ok',
                confirmButtonAriaLabel: 'Thumbs up, great!',
                cancelButtonText:
                '<i class="fa fa-thumbs-down">Cancelar</i>',
                cancelButtonAriaLabel: 'Thumbs down'
            });
        }
    });
}