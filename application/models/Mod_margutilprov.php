<?php
defined('BASEPATH') OR exit('No direct script access allowed');
//MODELO
class Mod_margutilprov extends CI_Model {
 public function __construct() {
      parent::__construct();
        /*select * from ResumenTotales
        select * from VentasPromedio order by Periodo,Proveedor, suc
        select * from valorinv order by Periodo,Proveedor, suc
        SELECT Proveedor as cve_pro, Suc as Zona, VtaProm as ValorPROM FROM VentasPromedio where Proveedor IN ('000000001') and Periodo='201801' order by Periodo,Proveedor, suc 
        SELECT Proveedor as cve_pro, Suc as Zona, ValInTotal as ValorPROM FROM valorinv where Proveedor IN ('000000001') and Periodo='201801' order by Periodo,Proveedor, suc 
        
        
        SELECT SUM(VtaProm) FROM VentasPromedio where Proveedor IN ('000000001') and Periodo IN ('201803','201802','201801')
        */
   }

   public function getMargenGeneral($periodo,$ejercicio){    
        
       $query=$this->db->query("SELECT 
        Substring(Prove, 1,Charindex(' ', Prove)-1) as Num_prov,
        Substring(Prove, Charindex(' ', Prove)+1, LEN(Prove)) as  Proveedor,
        Venta as VentaNeta, 
        Unidades as UdsVen ,
        Utilidad as Margen,
        CostoVta
        FROM ResumenTotales where Fecha='".$ejercicio.$periodo."' 
        order by Prove");
       
       if($query->result()){
            return $query->result_array();
        }
        else
        {
            return false;    
        }
        
    }
    public function getMargenPorDebsur($proveedor,$ejercicio,$periodo){
   
        
         $query=$this->db->query("select 
            p.serie [Sucursal],
            art.cve_pro+'      '+pro.nom [Proveedor]
            ,sum(total-(descto+desc_cli+d.desc_cond+desc_prom+desc_acum)) [VentaNeta]
            ,cast(SUM(CASE WHEN p.status != 'FAD' THEN (sur*fac_sal)/fac_costo ELSE 0 END) as Float) [UdsVen]
            ,SUM(CASE WHEN  p.status = 'FAD' THEN (d.total-d.descto - d.desc_cli - d.desc_acum - d.desc_prom - d.desc_cond) ELSE 0 END) [Devoluciones]
            ,cast( SUM(CASE WHEN  p.status = 'FAD' THEN (sur*fac_sal)/fac_costo ELSE 0 END) as float) [UdsDev]
            ,SUM(CASE WHEN p.status != 'FAD' THEN (d.total - descto - desc_cli - desc_acum - desc_prom - d.desc_cond) ELSE 0 END) [Venta]
            ,sum(costo*sur) [CostoVta]
            ,(((sum(total-(descto+desc_cli+d.desc_cond+desc_prom+desc_acum))-sum(costo*sur))/ NULLIF(sum(total-(descto+desc_cli+d.desc_cond+desc_prom+desc_acum)), 0))*100) [Margen]
             from  pedped p
             , pedfor r
             , peddet d
             , invart art
             , cprprv pro
            where YEAR(p.fec_fac) = '".$ejercicio."' and MONTH(p.fec_fac) = '".$periodo."'
            and p.status in ('FAP','FAX','TI','TIF','FAD')
            and p.cia='MAB'
            and p.cia=r.cia and p.for_pgo=r.codigo and r.tempo='N' 
            and p.serie=d.serie and p.num=d.cve and p.par=d.par and d.sur!=0
            and p.cia = art.cia and d.alm = art.alm and d.cve_art = art.art
            and art.cve_pro='".$proveedor."'
            and art.cve_pro = pro.proveedor
            group by 
            p.serie,
            art.cve_pro, pro.nom
            order by p.serie, art.cve_pro");
        
        
        
        
        if($query->result()){
            return $query->result_array();
        }
        else
        {
            return false;    
        }
    }
    function getValorInvetarioPorProveedor($proveedor,$ejercicio,$periodo)
    {
        $query=$this->db->query("SELECT Proveedor as cve_pro, Suc as Zona, ValInTotal as ValorPROM FROM valorinv where Proveedor IN (".$proveedor.") and Periodo='".$ejercicio.$periodo."' order by Periodo,Proveedor, suc");
        
        if($query->result()){
            return $query->result_array();
        }
        else
        {
            return false;    
        }
    }
    function getMargenPorRegion($ejercicio,$periodo)
    {
        $query=$this->db->query("select 
            p.serie [Sucursal],
            art.cve_pro,
            pro.nom [Proveedor]
            ,cast(SUM(CASE WHEN p.status != 'FAD' THEN (sur*fac_sal)/fac_costo ELSE 0 END) as Float) [UdsVen]
            ,sum(total-(descto+desc_cli+d.desc_cond+desc_prom+desc_acum)) [VentaNeta]
            ,sum(costo*sur) [CostoVta]
            ,(((sum(total-(descto+desc_cli+d.desc_cond+desc_prom+desc_acum))-sum(costo*sur))/ NULLIF(sum(total-(descto+desc_cli+d.desc_cond+desc_prom+desc_acum)), 0))*100) [Margen]
             from  pedped p
             , pedfor r
             , peddet d
             , invart art
             , cprprv pro
            where YEAR(p.fec_fac) = '".$ejercicio."' and MONTH(p.fec_fac) = '".$periodo."'
            and p.status in ('FAP','FAX','TI','TIF','FAD')
            and p.cia='MAB'
            and p.cia=r.cia and p.for_pgo=r.codigo and r.tempo='N' 
            and p.serie=d.serie and p.num=d.cve and p.par=d.par and d.sur!=0
            and p.cia = art.cia and d.alm = art.alm and d.cve_art = art.art
            and art.cve_pro = pro.proveedor
            group by 
            p.serie,
            art.cve_pro, pro.nom
            order by p.serie, art.cve_pro
            ");
        if($query->result()){
            return $query->result_array();
        }
        else
        {
            return false;    
        }
    }
    
    function getRegiones()
    {
        $query=$this->db->query("Select Region as [id_region], Nombre as [nombre] from Region");
        if($query->result()){
            return $query->result();
        }
        else
        {
            return false;    
        }
    }
    function getRegionesConZonas()
    {
        $query=$this->db->query("Select distinct  c.Region,d.Nombre, a.cve as Zona, a.des as Descripcion from invalm a, invsas b, comsuc c, Region d  Where a.cve = b.alm  and b.cve_suc = c.suc and d.Region=c.Region Order by a.cve");
        if($query->result()){
            return $query->result_array();
        }
        else
        {
            return false;    
        }
    }
    function tresMesesAtrasGeneral($fecha_ini,$fecha_fin)
    {
        $query=$this->db->query("Select art.cve_pro[Num_prov]
            ,(sum(total-(descto+desc_cli+d.desc_cond+desc_prom+desc_acum)))/3 [PromedioVenta]
             from  pedped p
             , pedfor r
             , peddet d
             , invart art
             , cprprv pro
            where p.fec_fac between '".$fecha_ini."' and '".$fecha_fin."'
            and p.status in ('FAP','FAX','TI','TIF','FAD')
            and p.cia='MAB'
            and p.cia=r.cia and p.for_pgo=r.codigo and r.tempo='N' 
            and p.serie=d.serie and p.num=d.cve and p.par=d.par and d.sur!=0
            and p.cia = art.cia and d.alm = art.alm and d.cve_art = art.art
            and art.cve_pro=pro.proveedor
            and art.cve_pro = pro.proveedor
            group by 
            art.cve_pro, pro.nom
            order by art.cve_pro");
        
        if($query->result()){
            return $query->result_array();
        }
        else
        {
            return false;    
        }
    }
    function tresMesesAtrasProveedor($proveedor,$fecha_ini,$fecha_fin)
    {
        $query=$this->db->query("select 
            p.serie [Sucursal],sum(total-(descto+desc_cli+d.desc_cond+desc_prom+desc_acum)) [PromedioVenta]
             from  pedped p
             , pedfor r
             , peddet d
             , invart art
             , cprprv pro
            where p.fec_fac between '".$fecha_ini."' and '".$fecha_fin."'
            and p.status in ('FAP','FAX','TI','TIF','FAD')
            and p.cia='MAB'
            and p.cia=r.cia and p.for_pgo=r.codigo and r.tempo='N' 
            and p.serie=d.serie and p.num=d.cve and p.par=d.par and d.sur!=0
            and p.cia = art.cia and d.alm = art.alm and d.cve_art = art.art
            and art.cve_pro='".$proveedor."'
            and art.cve_pro = pro.proveedor
            group by 
            p.serie,
            art.cve_pro, pro.nom
            order by p.serie, art.cve_pro");
        
        if($query->result()){
            return $query->result_array();
        }
        else
        {
            return false;    
        }
    }
}
?>