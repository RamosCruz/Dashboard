var url;
var tabla= null;
var tabla2= null;
var tabla3= null;
var tabla4= null;
var inventarioProm;
var promediodeVentasGeneral=[];
var promediodeVentasProveedor=[];
var CapasProveedoresGeneral;
var EfectividadProveedoresGeneral;
//Graficas: https://www.chartjs.org/samples/latest/
//.ready(function() se ejecuta cuando se carga la pagina por primera vez

$(document).ready(function() 
{
    var periodo;
    var ejercicio;
    $("input[name = 'periodo']").click(function () {
        periodo = $('input:radio[name=periodo]:checked').val();
            $("#label"+periodo).addClass("active");
        for(var i=1;i<13;i++)
        {
            if(i!=parseInt(periodo))
            {
                if(i<10)
                {
                    $("#label0"+i).removeClass("active");
                }else
                {
                     $("#label"+i).removeClass("active");
                }
            }
        }
        
    });
    
    $("input[name = 'ejercicio']").click(function () {
        ejercicio = $('input:radio[name=ejercicio]:checked').val();
            $("#label"+parseInt(ejercicio)).addClass("active");
        var limit1 = parseInt((new Date()).getFullYear())-2;
        var limit2 = parseInt((new Date()).getFullYear());
        for(var i=limit1;i<=limit2;i++)
        {
            
            if(i!=parseInt(ejercicio))
            {
                $("#label"+i).removeClass("active");
            }
        }
    });
    
    
    
    document.getElementById('spinner').style.display = "none";
    document.getElementById('spinner2').style.display = "none";
    document.getElementById('spinner3').style.display = "none";
    document.getElementById('spinner4').style.display = "none";
   /* $('#ejercicio').each(function() {
        var year = (new Date()).getFullYear();
        var current = year;
        year -= 2;
        for (var i = 0; i < 3; i++) {
            if ((year+i) == current)
                $(this).append('<option selected value="' + (year + i) + '">' + (year + i) + '</option>');
            else
                $(this).append('<option value="' + (year + i) + '">' + (year + i) + '</option>');
        }
    });*/

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
          var target = $(e.target).attr("href") // activated tab
          //alert;
          console.log(target);
        $($.fn.dataTable.tables(true)).DataTable()
        .columns.adjust();
        });
    
    $("#consultar").click(function () 
    {
        $('#ventaNeta0').text("$0"); 
        $('#ventaNeta1').text("$0"); 
        $('#ventaNeta2').text("$0"); 

        $('#porcentaje0').text("0%");  
        $('#porcentaje1').text("0%"); 
        $('#porcentaje2').text("0%"); 
        
        $('#tituloproveedor').text("");
        $('#tituloproveedor2').text("");
        $('#tituloproveedor3').text("");
        $("#imagenProv").attr("src","");
        $("#imagenProv2").attr("src","");
        $("#imagenProv3").attr("src","");
        
        inventarioProm=null;
        //var periodo=$('#periodo').val();
        //var ejercicio=$('#ejercicio').val();
        
        var fecha = new Date();
        var anoActual = fecha.getFullYear();
        
        if(periodo==null)
        {
            Swal.fire("Selecciona un periodo por favor!");
        }
        else if(ejercicio==null)
        {
            Swal.fire("Selecciona el ejercicio por favor!");
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
                tabla3.clear().draw();
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
                console.log('No hay datos getMargenGeneral!');
            }
            else
            { 
                queryVerValorInventario(response,periodoyano);
                
    
            }
        },
        error: function (xhr, ajaxOptions, thrownError) 
        {
            console.log("Error: "+xhr.status+" "+thrownError+"   "+xhr.responseText+"<p>"+getBaseURL()+"con_margutilprov/margenGeneral</p>");
        }
    });

}

function llenarTabla1(query_result,req)
{
    var events = $('#events');
    
    tabla = $('#example').DataTable( {
        destroy: true,
        colReorder: true,
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
        scrollY:        "220px",
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
        
        if(tabla3!=null)
            {
                tabla3.clear().draw();
            }
                $('#ventaNeta0').text("$0");  
                $('#ventaNeta1').text("$0"); 
                $('#ventaNeta2').text("$0"); 

                $('#porcentaje0').text("0%");  
                $('#porcentaje1').text("0%"); 
                $('#porcentaje2').text("0%"); 
                var rowData=null;
                rowData = tabla.rows( indexes ).data().toArray();
                var linea = dt["0"][0];
                //console.log(rowData[0].Num_prov+","+req.periodo+",",req.ejercicio);
                var req1 = {proveedor:rowData[0].Num_prov,periodo:req.periodo,ejercicio:req.ejercicio};
                var nombre_prov = rowData[0].Proveedor;
                queryPromediodeVentProvee(getBaseURL()+"con_margutilprov/getMargenPorDebsur", req1, 'GET', nombre_prov);
                
                capasProveedoresGeneral(req1);
                efectividadProveedoresGeneral(req1);
                
                
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
                
                console.log('No hay datos getMargenPorSuc!');
            }
            else
            { 
               
               MargenPorDebsurAnioPasado(response, req, nombre_prov); 
            }
        },
        error: function (xhr, ajaxOptions, thrownError) 
        {
            console.log("Error: "+xhr.status+" "+thrownError+"   "+xhr.responseText+"<p>"+getBaseURL()+"con_margutilprov/getMargenPorSuc</p>");
        }
    });
    
}

function MargenPorDebsurAnioPasado(MargenPorDebsur, req, nombre_prov)
{
    var aniopasado =parseInt(req.ejercicio)-1;
    //console.log(req.proveedor);
    //console.log(aniopasado);
    $.ajax
    ({
        xhr: function()
        {
            var xhr = new window.XMLHttpRequest();
            xhr.open("GET", getBaseURL()+"con_margutilprov/MargenPorDebsurAnioPasado");
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
        url: getBaseURL()+"con_margutilprov/MargenPorDebsurAnioPasado",
        data: { proveedor:req.proveedor,periodo: req.periodo, ejercicio: aniopasado },
        dataType: "json",
        success: function(aniopasado)
        {
            if(aniopasado==false)
            {
                console.log('No hay datos MargenPorDebsurAnioPasado!');
            }
            else
            { 
               queryVerValorInventario2(aniopasado,MargenPorDebsur,req,nombre_prov);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) 
        {
            console.log("Error: "+xhr.status+" "+thrownError+"   "+xhr.responseText+"<p>"+getBaseURL()+"con_margutilprov/MargenPorDebsurAnioPasado</p>");
        }
    });
    
}

function llenarTabla2(query_result,periodoyejerciciotabla2)///////////
{
    var anioant= parseInt(periodoyejerciciotabla2.ejercicio)-1;
    $("#ventaProvAnterior").text('Venta '+anioant);
    $("#unidsProvAnterior").text('UdsVen '+anioant);
    $("#ventaProvActual").text('Venta '+periodoyejerciciotabla2.ejercicio);
    $("#unidsProvActual").text('UdsVen '+periodoyejerciciotabla2.ejercicio);
    
    
    var events = $('#events');
    
    tabla2 = $('#detalles').DataTable( {
        destroy: true,
        data:query_result,
        columns:
        [
            {data:"Sucursal"},//0
            {data:"VentaNeta2"},//1
            {data:"VentaNeta"},//2
            {data:"UdsVen2"},//3
            {data:"UdsVen"},//4
            {data:"CostoVta"},//5 no visible
            {data:"Margen"},//6
            {data:"DiasInv"}//7
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
        scrollY:        "245px",
        scrollX: true,
        paging:         false,
        fixedHeader: true,
        searching: false,
        select: 'single',
        columnDefs: 
        [
            
            { 
                targets: 0,
                width: '5%'
            },
            {
                targets: 1,
                render: $.fn.dataTable.render.number( ',', '.', 2, '$' ),
                width: '5%'
            },
            {
                targets: 2,
                render: $.fn.dataTable.render.number( ',', '.', 2, '$' ),
                width: '5%'
            },
            {
                targets: 3,
                render: $.fn.dataTable.render.number( ',', '.', 1, '' ),
                width: '10%'
            },
            {
                targets:4,
                render: $.fn.dataTable.render.number( ',', '.',1, '','' ),
                width: '10%'
            },
            {
                targets: 5,
                render: $.fn.dataTable.render.number( ',', '.', 2, '' ),
                width: '10%'
            },
            {
                targets: 6,
                render: $.fn.dataTable.render.number( ',', '.', 2, '','%' ),
                width: '10%'
            },
            
            {
                targets: 7,
                render: $.fn.dataTable.render.number( ',', '.', 1, '','' ),
                width: '10%'
            },
            {
                "targets": [5],
                "visible": false
            },
            { className: "dt-center", targets: [0,1,2,3,4,5,6,7,] }
        ],
        footerCallback: function ( row, data, start, end, display ) 
        {
            var api = this.api();
            var nb_cols = 7;
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
            //Calculo de margen total para la columna 
            var venta = api.column(2 , { page: 'current'} ).data().reduce( function (a, b) 
            {
                return Number(a) + Number(b);
            }, 0 );
            var CostoVenta = api.column(5 , { page: 'current'} ).data().reduce( function (a, b) 
            {
                return Number(a) + Number(b);
            }, 0 );
            
            var margenGeneral= ((venta-CostoVenta)/venta)*100;
            
            $( api.column( 6 ).footer() ).html(margenGeneral.toLocaleString(undefined, {maximumFractionDigits:1})+'%');
        }
    } ).columns.adjust().draw();

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
                console.log('No hay datos queryVerValorInventario!');
            }
        },
        error: function (xhr, ajaxOptions, thrownError) 
        {
            console.log("Error: "+xhr.status+" "+thrownError+"   "+xhr.responseText+"<p>"+getBaseURL()+"con_margutilprov/queryVerValorInventario</p>");
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

function queryVerValorInventario2(aniopasado,datos, req,nombre_prov)
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
                document.getElementById('spinner3').style.display = "none";
                document.getElementById('spinner4').style.display = "none";
                agregarDias2(aniopasado,datos,response,req,nombre_prov);
            }
            else
            { 
                agregarDias2(aniopasado,datos,response,req,nombre_prov);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) 
        {
            console.log("Error: "+xhr.status+" "+thrownError+"   "+xhr.responseText+"<p>"+getBaseURL()+"con_margutilprov/queryVerValorInventario2</p>");
        }
    });
}

function agregarDias2(aniopasado,general,inventarioProm2,req,nombre_prov)
{
    var pivote;
    var columnaCalculada=new Array();
    
    //console.log(aniopasado);
    //console.log(general);
    
    for(var q=0;q<general.length;q++)
    {
           
        for(var w=0;w<aniopasado.length;w++)
        {
            //console.log(general[q].Sucursal+'=='+aniopasado[w].Sucursal);
            if(general[q].Sucursal==aniopasado[w].Sucursal)
            {
                
                //console.log('si');
                general[q].VentaNeta2=aniopasado[w].VentaNeta2;
                general[q].UdsVen2=aniopasado[w].UdsVen2;
            }
            else
            {
                if(!general[q].VentaNeta2 && !general[q].UdsVen2)
                {
                   general[q].VentaNeta2=0;
                    general[q].UdsVen2=0;
                }
            }
        }
        
    }
    
    
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
        llenarTabla2(general,req);
        
        llenarRegiones(general)
    }else
    {
        tabla2.clear().draw();
        
        //console.log(response);
        llenarTabla2(general,req);
        llenarRegiones(general);
    }
    
    $("#imagenProv").attr("src", getBaseURL()+"assets/img/"+req.proveedor+".png");
    $("#imagenProv2").attr("src", getBaseURL()+"assets/img/"+req.proveedor+".png");
    $("#imagenProv3").attr("src", getBaseURL()+"assets/img/"+req.proveedor+".png");
    var myImage = new Image();
    myImage.src = getBaseURL()+"assets/img/"+req.proveedor+".png";
    myImage.onerror = function(){
       $("#imagenProv").attr("src", getBaseURL()+"assets/img/noimg.png");
       $("#imagenProv2").attr("src", getBaseURL()+"assets/img/noimg.png");
        $("#imagenProv3").attr("src", getBaseURL()+"assets/img/noimg.png");
    }
    
    
    $('#tituloproveedor').text(req.proveedor+" - "+nombre_prov);
    $('#tituloproveedor2').text(req.proveedor+" - "+nombre_prov);
    $('#tituloproveedor3').text(req.proveedor+" - "+nombre_prov);
    
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
                document.getElementById('spinner3').style.display = "none";
                document.getElementById('spinner4').style.display = "none";
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
                console.log('No hay datos llenarRegiones!');
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
            console.log("Error: "+xhr.status+" "+thrownError+"   "+xhr.responseText+"<p>"+getBaseURL()+"con_margutilprov/llenarRegiones</p>");
        }
    });
    
    
}

function queryPromediodeVentGeneral(url, periodoyano, req_type)
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
            console.log("Error: "+xhr.status+" "+thrownError+"   "+xhr.responseText+"<p>"+getBaseURL()+"con_margutilprov/queryPromediodeVentGeneral</p>");
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
                document.getElementById('spinner3').style.display = "block";
                document.getElementById('spinner4').style.display = "block";
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
            console.log("Error: "+xhr.status+" "+thrownError+"   "+xhr.responseText+"<p>"+getBaseURL()+"con_margutilprov/queryPromediodeVentProvee</p>");
        }
    });
}

function capasProveedoresGeneral(req)
{
    $.ajax({
        type: 'GET',
        url: getBaseURL()+"con_margutilprov/CapasProveedoresGeneral",
        data:{proveedor:req.proveedor},
        dataType: "json",
        success: function(response)
        {
            CapasProveedoresGeneral=response;
            llenarTabla3(response);
        },
        error: function (xhr, ajaxOptions, thrownError) 
        {
            console.log("Error: "+xhr.status+" "+thrownError+"   "+xhr.responseText+"<p>"+getBaseURL()+"con_margutilprov/capasProveedoresGeneral</p>");
        }
    });
}

function llenarTabla3(response)
{
    tabla3 = $('#capas').DataTable( {
        destroy: true,
        colReorder: true,
        data:response,
        fixedHeader: true,
        columns:
        [
            {data:"Proveedor"},//0 Oculto
            {data:"Capa"},//1
            {data:"Descripcion"},//2
            {data:"VtaProm"},//3
            {data:"VtaProm$"},//4
            {data:"DiasInv"},//5
            {data:"Existencia"},//6
            {data:"VtaMens"},//7
            {data:"Cto_Prom"},//8
            {data:"Valor"}//9
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
        scrollY:"270px",
        scrollX:true,
        paging:false,
        select:'single',
        searching: false,
        columnDefs: [
            {
                targets: [ 0,1 ],
                visible: false
            },
            {
                targets: 4,
                render: $.fn.dataTable.render.number( ',', '.', 2, '$' )
            },
            {
                targets: 7,
                render: $.fn.dataTable.render.number( ',', '.', 2, '$' )
            },
            {
                targets: 8,
                render: $.fn.dataTable.render.number( ',', '.', 2, '$' )
            },
            
            { className: "dt-center", targets: [3,4,5,6,7,8,9] }
        ],
        footerCallback: function ( row, data, start, end, display ) 
        {
            var api = this.api();
            var nb_cols = 10;
            var j = 3;
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
        }
    } ).columns.adjust().draw();
    
   
}

function efectividadProveedoresGeneral(req)
{
    $.ajax({
        type: 'GET',
        url: getBaseURL()+"con_margutilprov/EfectividadProveedoresGeneral",
        data:{proveedor:req.proveedor,periodo:req.periodo,ejercicio:req.ejercicio},
        dataType: "json",
        success: function(response)
        {
            llenarTabla4(response);
        },
        error: function (xhr, ajaxOptions, thrownError) 
        {
            console.log("Error: "+xhr.status+" "+thrownError+"   "+xhr.responseText+"<p>"+getBaseURL()+"con_margutilprov/EfectividadProveedoresGeneral</p>");
        }
    });
}

function llenarTabla4(response)
{
    tabla4 = $('#efectividad').DataTable( {
        destroy: true,
        colReorder: true,
        data:response,
        fixedHeader: true,
        columns:
        [
            {data:"Suc"},//0 
            {data:"Orden"},//1
            {data:"Estatus"},//2
            {data:"Fec_Pactada"},//3
            {data:"Fec_Rec"},//4
            {data:"Dias_Trans"},//5
            {data:"U_Ped"},//6 ------------
            {data:"U_Rec"},//7---------
            {data:"Dif"},//8----------
            {data:"EfectividadUNI"},//9
            {data:"EfectividadDIAS"}//10
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
        scrollY:"270px",
        scrollX:true,
        paging:false,
        select:'single',
        searching: false,
        columnDefs: [
            {
                targets: [10] ,
                visible: false
            },
            {
                targets: [6,7,8],
                render: $.fn.dataTable.render.number( ',', '.', 1, '' )
            },
            {
                targets: [9],
                render: $.fn.dataTable.render.number( ',', '.', 1, '','%' ) 
            },
            { className: "dt-center", targets: [1,2,3,4,5,6,7,8,9] }
        ],
        footerCallback: function ( row, data, start, end, display ) 
        {
            var api = this.api();
            var nb_cols = 9;
            var j = 5;
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
        }
    } ).columns.adjust().draw();
    
   
}


function pestanaSuc()
{
}
function pestanaCap()
{
}