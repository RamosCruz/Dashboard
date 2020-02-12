<?php
defined('BASEPATH') OR exit('No direct script access allowed');

//CONTROLADOR

class Con_margutilprov extends CI_Controller {
   public function __construct() {
      parent::__construct();
      $this->load->model('Mod_margutilprov');//Carga el modelo cada ves que se ejecuta algun metodo delcontrolador
   }

   function index(){
       $temporal[0] = array
           (
                "Num_prov"=>"a",
                "Proveedor"=>"-",
                "Articulo"=>"-",
                "Venta"=>"-",
                "UdsVen"=>"-",
                "Devoluciones"=>"-",
                "UdsDev"=>"-",
                "VentaNeta"=>"-",
                "CostoVta"=>"-",
                "Utilidad"=>"-"
            );
       $temporal[1] = array
           (
                "Num_prov"=>"b",
                "Proveedor"=>"-",
                "Articulo"=>"-",
                "Venta"=>"-",
                "UdsVen"=>"-",
                "Devoluciones"=>"-",
                "UdsDev"=>"-",
                "VentaNeta"=>"-",
                "CostoVta"=>"-",
                "Utilidad"=>"-"
            );
       $temporal[2] = array
           (
                "Num_prov"=>"c",
                "Proveedor"=>"-",
                "Articulo"=>"-",
                "Venta"=>"-",
                "UdsVen"=>"-",
                "Devoluciones"=>"-",
                "UdsDev"=>"-",
                "VentaNeta"=>"-",
                "CostoVta"=>"-",
                "Utilidad"=>"-"
            );
       $datos ['tabla'] = $temporal;
       $datos['vista'] = 'view_margutilprov';
       $datos['regiones'] = $this->Mod_margutilprov->getRegiones();
       $this->load->view('Plantilla',$datos);
    }
    public function margenGeneral(){
        $periodo = $this->input->get('periodo');
        $ejercicio = $this->input->get('ejercicio');
        $result= $this->Mod_margutilprov->getMargenGeneral($periodo,$ejercicio);
        echo json_encode($result);
    }
    public function getMargenPorDebsur(){
        $proveedor = $this->input->get('proveedor');
        $periodo = $this->input->get('periodo');
        $ejercicio = $this->input->get('ejercicio');
        $result= $this->Mod_margutilprov->getMargenPorDebsur($proveedor,$ejercicio,$periodo);
        echo json_encode($result);
    }
    public function MargenPorDebsurAnioPasado(){
        $proveedor = $this->input->get('proveedor');
        $periodo = $this->input->get('periodo');
        $ejercicio = $this->input->get('ejercicio');
        $result= $this->Mod_margutilprov->getMargenPorDebsurAnioPasado($proveedor,$ejercicio,$periodo);
        echo json_encode($result);
    }
    public function valorInvetarioPorProveedor()
    {
        $proveedor = $this->input->get('proveedor');
        $periodo = $this->input->get('periodo');
        $ejercicio = $this->input->get('ejercicio');
        $result= $this->Mod_margutilprov->getValorInvetarioPorProveedor($proveedor,$ejercicio,$periodo);
        echo json_encode($result);
    }
    public function getMargenPorRegion(){
        $periodo = $this->input->get('periodo');
        $ejercicio = $this->input->get('ejercicio');
        $result= $this->Mod_margutilprov->getMargenPorRegion($ejercicio,$periodo);
        echo json_encode($result);
    }
    public function getRegionesConZonas(){
        $result= $this->Mod_margutilprov->getRegionesConZonas();
        echo json_encode($result);
    }
    public function getPromediodeVenGeneral()
    {
        $fecha_ini='';
        $fecha_fin='';
        $periodo = $this->input->get('periodo');
        $ejercicio = $this->input->get('ejercicio');
        $mes = (int)$periodo;
        $anio = (int)$ejercicio;
        if($mes==1)
        {
            $mes=10;
            $anio--;
        }else
        {
            $mes=$mes-2;
        }
        $numero = cal_days_in_month(CAL_GREGORIAN, ($mes+2), $anio);
        
        
        if(strlen($mes)==1)
        {
            $fecha_ini=$anio.'0'.$mes.'01';
        }else
        {
            $fecha_ini=$anio.$mes.'01';
        }
        if(strlen($mes+2)==1)
        {
            $fecha_fin=$anio.'0'.($mes+2).$numero;
        }else
        {
            $fecha_fin=$anio.($mes+2).$numero;
        }
        $result= $this->Mod_margutilprov->tresMesesAtrasGeneral($fecha_ini,$fecha_fin);
        echo json_encode($result);
    }
    public function getPromediodeVenProvee()
    {
        $fecha_ini='';
        $fecha_fin='';
        $proveedor = $this->input->get('proveedor');
        $periodo = $this->input->get('periodo');
        $ejercicio = $this->input->get('ejercicio');
        $mes = (int)$periodo;
        $anio = (int)$ejercicio;
        if($mes==1)
        {
            $mes=10;
            $anio--;
        }else
        {
            $mes=$mes-2;
        }
        $numero = cal_days_in_month(CAL_GREGORIAN, ($mes+2), $anio);
        
        
        if(strlen($mes)==1)
        {
            $fecha_ini=$anio.'0'.$mes.'01';
        }else
        {
            $fecha_ini=$anio.$mes.'01';
        }
        if(strlen($mes+2)==1)
        {
            $fecha_fin=$anio.'0'.($mes+2).$numero;
        }else
        {
            $fecha_fin=$anio.($mes+2).$numero;
        }
        $result= $this->Mod_margutilprov->tresMesesAtrasProveedor($proveedor,$fecha_ini,$fecha_fin);
        echo json_encode($result);
    }
    public function getPromediodeVenGeneralRCA()
    {
    }
    public function getPromediodeVenProveeRCA()
    {
    }
}
?>