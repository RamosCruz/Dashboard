<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="apple-touch-icon" sizes="57x57" href="<?php echo base_url('assets/img/favicon/apple-icon-57x57.png'); ?>">
    <link rel="apple-touch-icon" sizes="60x60" href="<?php echo base_url('assets/img/favicon/apple-icon-60x60.png'); ?>">
    <link rel="apple-touch-icon" sizes="72x72" href="<?php echo base_url('assets/img/favicon/apple-icon-72x72.png'); ?>">
    <link rel="apple-touch-icon" sizes="76x76" href="<?php echo base_url('assets/img/favicon/apple-icon-76x76.png'); ?>">
    <link rel="apple-touch-icon" sizes="114x114" href="<?php echo base_url('assets/img/favicon/apple-icon-114x114.png'); ?>">
    <link rel="apple-touch-icon" sizes="120x120" href="<?php echo base_url('assets/img/favicon/apple-icon-120x120.png'); ?>">
    <link rel="apple-touch-icon" sizes="144x144" href="<?php echo base_url('assets/img/favicon/apple-icon-144x144.png'); ?>">
    <link rel="apple-touch-icon" sizes="152x152" href="<?php echo base_url('assets/img/favicon/apple-icon-152x152.png'); ?>">
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo base_url('assets/img/favicon/apple-icon-180x180.png'); ?>">
    <link rel="icon" type="image/png" sizes="192x192"  href="<?php echo base_url('assets/img/favicon/android-icon-192x192.png'); ?>">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo base_url('assets/img/favicon/favicon-32x32.png'); ?>">
    <link rel="icon" type="image/png" sizes="96x96" href="<?php echo base_url('assets/img/favicon/favicon-96x96.png'); ?>">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo base_url('assets/img/favicon/favicon-16x16.png'); ?>">
    <link rel="manifest" href="<?php echo base_url('assets/img/favicon/manifest.json'); ?>">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="<?php echo base_url('assets/img/favicon/ms-icon-144x144.png'); ?>">
    <meta name="theme-color" content="#ffffff">

    <title>Dashboard Mini</title>
    
    
    
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/autofill/2.3.4/css/autoFill.dataTables.min.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/1.6.1/css/buttons.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/colreorder/1.5.2/css/colReorder.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/fixedcolumns/3.3.0/css/fixedColumns.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/fixedheader/3.1.6/css/fixedHeader.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/keytable/2.5.1/css/keyTable.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/rowgroup/1.1.1/css/rowGroup.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/rowreorder/1.2.6/css/rowReorder.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/scroller/2.0.1/css/scroller.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/searchpanes/1.0.1/css/searchPanes.dataTables.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/select/1.3.1/css/select.dataTables.css"/>

    <script type="text/javascript" src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/autofill/2.3.4/js/dataTables.autoFill.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.6.1/js/dataTables.buttons.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.6.1/js/buttons.colVis.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.6.1/js/buttons.flash.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.6.1/js/buttons.html5.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.6.1/js/buttons.print.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/colreorder/1.5.2/js/dataTables.colReorder.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/fixedcolumns/3.3.0/js/dataTables.fixedColumns.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/fixedheader/3.1.6/js/dataTables.fixedHeader.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/keytable/2.5.1/js/dataTables.keyTable.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/responsive/2.2.3/js/dataTables.responsive.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/rowgroup/1.1.1/js/dataTables.rowGroup.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/rowreorder/1.2.6/js/dataTables.rowReorder.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/scroller/2.0.1/js/dataTables.scroller.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/searchpanes/1.0.1/js/dataTables.searchPanes.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/select/1.3.1/js/dataTables.select.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/plug-ins/1.10.20/api/sum().js"></script>
   
   
    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
    <style>
        
        /*
 * Table styles
 */
table.dataTable {
  width: 100%;
  margin: 0 auto;
  clear: both;
  border-collapse: separate;
  border-spacing: 0;
  /*
   * Header and footer styles
   */
  /*
   * Body styles
   */ }
  table.dataTable thead th,
  table.dataTable tfoot th {
    font-weight: bold; }
  table.dataTable thead th,
  table.dataTable thead td {
    padding: 10px 18px;
    border-bottom: 1px solid #ECECEC; }
    table.dataTable thead th:active,
    table.dataTable thead td:active {
      outline: none; }
  table.dataTable tfoot th,
  table.dataTable tfoot td {
    padding: 10px 18px 6px 18px;
    border-top: 1px solid #999999; }
  table.dataTable thead .sorting,
  table.dataTable thead .sorting_asc,
  table.dataTable thead .sorting_desc,
  table.dataTable thead .sorting_asc_disabled,
  table.dataTable thead .sorting_desc_disabled {
    cursor: pointer;
    *cursor: hand;
    background-repeat: no-repeat;
    background-position: center right; }
  table.dataTable thead .sorting {
    background-image: url("../images/sort_both.png"); }
  table.dataTable thead .sorting_asc {
    background-image: url("../images/sort_asc.png"); }
  table.dataTable thead .sorting_desc {
    background-image: url("../images/sort_desc.png"); }
  table.dataTable thead .sorting_asc_disabled {
    background-image: url("../images/sort_asc_disabled.png"); }
  table.dataTable thead .sorting_desc_disabled {
    background-image: url("../images/sort_desc_disabled.png"); }
  table.dataTable tbody tr {
    background-color: white; }
    table.dataTable tbody tr.selected {
      background-color: #b0bed9; }
  table.dataTable tbody th,
  table.dataTable tbody td {
    padding: 2px 2px; }
  table.dataTable.row-border tbody th, table.dataTable.row-border tbody td, table.dataTable.display tbody th, table.dataTable.display tbody td {
    border-top: 1px solid #dddddd; }
  table.dataTable.row-border tbody tr:first-child th,
  table.dataTable.row-border tbody tr:first-child td, table.dataTable.display tbody tr:first-child th,
  table.dataTable.display tbody tr:first-child td {
    border-top: none; }
  table.dataTable.cell-border tbody th, table.dataTable.cell-border tbody td {
    border-top: 1px solid #dddddd;
    border-right: 1px solid #dddddd; }
  table.dataTable.cell-border tbody tr th:first-child,
  table.dataTable.cell-border tbody tr td:first-child {
    border-left: 1px solid #dddddd; }
  table.dataTable.cell-border tbody tr:first-child th,
  table.dataTable.cell-border tbody tr:first-child td {
    border-top: none; }
  table.dataTable.stripe tbody tr.odd, table.dataTable.display tbody tr.odd {
    background-color: #f9f9f9; }
    table.dataTable.stripe tbody tr.odd.selected, table.dataTable.display tbody tr.odd.selected {
      background-color: #abb9d3; }
  table.dataTable.hover tbody tr:hover, table.dataTable.display tbody tr:hover {
    background-color: whitesmoke; }
    table.dataTable.hover tbody tr:hover.selected, table.dataTable.display tbody tr:hover.selected {
      background-color: #a9b7d1; }
  table.dataTable.order-column tbody tr > .sorting_1,
  table.dataTable.order-column tbody tr > .sorting_2,
  table.dataTable.order-column tbody tr > .sorting_3, table.dataTable.display tbody tr > .sorting_1,
  table.dataTable.display tbody tr > .sorting_2,
  table.dataTable.display tbody tr > .sorting_3 {
    background-color: #f9f9f9; }
  table.dataTable.order-column tbody tr.selected > .sorting_1,
  table.dataTable.order-column tbody tr.selected > .sorting_2,
  table.dataTable.order-column tbody tr.selected > .sorting_3, table.dataTable.display tbody tr.selected > .sorting_1,
  table.dataTable.display tbody tr.selected > .sorting_2,
  table.dataTable.display tbody tr.selected > .sorting_3 {
    background-color: #acbad4; }
  table.dataTable.display tbody tr.odd > .sorting_1, table.dataTable.order-column.stripe tbody tr.odd > .sorting_1 {
    background-color: #f1f1f1; }
  table.dataTable.display tbody tr.odd > .sorting_2, table.dataTable.order-column.stripe tbody tr.odd > .sorting_2 {
    background-color: #f3f3f3; }
  table.dataTable.display tbody tr.odd > .sorting_3, table.dataTable.order-column.stripe tbody tr.odd > .sorting_3 {
    background-color: whitesmoke; }
  table.dataTable.display tbody tr.odd.selected > .sorting_1, table.dataTable.order-column.stripe tbody tr.odd.selected > .sorting_1 {
    background-color: #a6b3cd; }
  table.dataTable.display tbody tr.odd.selected > .sorting_2, table.dataTable.order-column.stripe tbody tr.odd.selected > .sorting_2 {
    background-color: #a7b5ce; }
  table.dataTable.display tbody tr.odd.selected > .sorting_3, table.dataTable.order-column.stripe tbody tr.odd.selected > .sorting_3 {
    background-color: #a9b6d0; }
  table.dataTable.display tbody tr.even > .sorting_1, table.dataTable.order-column.stripe tbody tr.even > .sorting_1 {
    background-color: #f9f9f9; }
  table.dataTable.display tbody tr.even > .sorting_2, table.dataTable.order-column.stripe tbody tr.even > .sorting_2 {
    background-color: #fbfbfb; }
  table.dataTable.display tbody tr.even > .sorting_3, table.dataTable.order-column.stripe tbody tr.even > .sorting_3 {
    background-color: #fdfdfd; }
  table.dataTable.display tbody tr.even.selected > .sorting_1, table.dataTable.order-column.stripe tbody tr.even.selected > .sorting_1 {
    background-color: #acbad4; }
  table.dataTable.display tbody tr.even.selected > .sorting_2, table.dataTable.order-column.stripe tbody tr.even.selected > .sorting_2 {
    background-color: #adbbd6; }
  table.dataTable.display tbody tr.even.selected > .sorting_3, table.dataTable.order-column.stripe tbody tr.even.selected > .sorting_3 {
    background-color: #afbdd8; }
  table.dataTable.display tbody tr:hover > .sorting_1, table.dataTable.order-column.hover tbody tr:hover > .sorting_1 {
    background-color: #eaeaea; }
  table.dataTable.display tbody tr:hover > .sorting_2, table.dataTable.order-column.hover tbody tr:hover > .sorting_2 {
    background-color: #ebebeb; }
  table.dataTable.display tbody tr:hover > .sorting_3, table.dataTable.order-column.hover tbody tr:hover > .sorting_3 {
    background-color: #eeeeee; }
  table.dataTable.display tbody tr:hover.selected > .sorting_1, table.dataTable.order-column.hover tbody tr:hover.selected > .sorting_1 {
    background-color: #a1aec7; }
  table.dataTable.display tbody tr:hover.selected > .sorting_2, table.dataTable.order-column.hover tbody tr:hover.selected > .sorting_2 {
    background-color: #a2afc8; }
  table.dataTable.display tbody tr:hover.selected > .sorting_3, table.dataTable.order-column.hover tbody tr:hover.selected > .sorting_3 {
    background-color: #a4b2cb; }
  table.dataTable.no-footer {
    border-bottom: 1px solid #999999; }
  table.dataTable.nowrap th, table.dataTable.nowrap td {
    white-space: nowrap; }
  table.dataTable.compact thead th,
  table.dataTable.compact thead td {
    padding: 4px 17px 4px 4px; }
  table.dataTable.compact tfoot th,
  table.dataTable.compact tfoot td {
    padding: 4px; }
  table.dataTable.compact tbody th,
  table.dataTable.compact tbody td {
    padding: 4px; }
  table.dataTable th.dt-left,
  table.dataTable td.dt-left {
    text-align: left; }
  table.dataTable th.dt-center,
  table.dataTable td.dt-center,
  table.dataTable td.dataTables_empty {
    text-align: center; }
  table.dataTable th.dt-right,
  table.dataTable td.dt-right {
    text-align: right; }
  table.dataTable th.dt-justify,
  table.dataTable td.dt-justify {
    text-align: justify; }
  table.dataTable th.dt-nowrap,
  table.dataTable td.dt-nowrap {
    white-space: nowrap; }
  table.dataTable thead th.dt-head-left,
  table.dataTable thead td.dt-head-left,
  table.dataTable tfoot th.dt-head-left,
  table.dataTable tfoot td.dt-head-left {
    text-align: left; }
  table.dataTable thead th.dt-head-center,
  table.dataTable thead td.dt-head-center,
  table.dataTable tfoot th.dt-head-center,
  table.dataTable tfoot td.dt-head-center {
    text-align: center; }
  table.dataTable thead th.dt-head-right,
  table.dataTable thead td.dt-head-right,
  table.dataTable tfoot th.dt-head-right,
  table.dataTable tfoot td.dt-head-right {
    text-align: right; }
  table.dataTable thead th.dt-head-justify,
  table.dataTable thead td.dt-head-justify,
  table.dataTable tfoot th.dt-head-justify,
  table.dataTable tfoot td.dt-head-justify {
    text-align: justify; }
  table.dataTable thead th.dt-head-nowrap,
  table.dataTable thead td.dt-head-nowrap,
  table.dataTable tfoot th.dt-head-nowrap,
  table.dataTable tfoot td.dt-head-nowrap {
    white-space: nowrap; }
  table.dataTable tbody th.dt-body-left,
  table.dataTable tbody td.dt-body-left {
    text-align: left; }
  table.dataTable tbody th.dt-body-center,
  table.dataTable tbody td.dt-body-center {
    text-align: center; }
  table.dataTable tbody th.dt-body-right,
  table.dataTable tbody td.dt-body-right {
    text-align: right; }
  table.dataTable tbody th.dt-body-justify,
  table.dataTable tbody td.dt-body-justify {
    text-align: justify; }
  table.dataTable tbody th.dt-body-nowrap,
  table.dataTable tbody td.dt-body-nowrap {
    white-space: nowrap; }
 
table.dataTable,
table.dataTable th,
table.dataTable td {
  box-sizing: content-box; }
 
/*
 * Control feature layout
 */
.dataTables_wrapper {
  position: relative;
  clear: both;
  *zoom: 1;
  zoom: 1; }
  .dataTables_wrapper .dataTables_length {
    float: left; }
  .dataTables_wrapper .dataTables_filter {
    float: right;
    text-align: right; }
    .dataTables_wrapper .dataTables_filter input {
      margin-left: 0.5em; }
  .dataTables_wrapper .dataTables_info {
    clear: both;
    float: left;
    padding-top: 0.755em; }
  .dataTables_wrapper .dataTables_paginate {
    float: right;
    text-align: right;
    padding-top: 0.25em; }
    .dataTables_wrapper .dataTables_paginate .paginate_button {
      box-sizing: border-box;
      display: inline-block;
      min-width: 1.5em;
      padding: 0.5em 1em;
      margin-left: 2px;
      text-align: center;
      text-decoration: none !important;
      cursor: pointer;
      *cursor: hand;
      color: #333333 !important;
      border: 1px solid transparent;
      border-radius: 2px; }
      .dataTables_wrapper .dataTables_paginate .paginate_button.current, .dataTables_wrapper .dataTables_paginate .paginate_button.current:hover {
        color: #333333 !important;
        border: 1px solid #979797;
        background-color: white;
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, white), color-stop(100%, gainsboro));
        /* Chrome,Safari4+ */
        background: -webkit-linear-gradient(top, white 0%, gainsboro 100%);
        /* Chrome10+,Safari5.1+ */
        background: -moz-linear-gradient(top, white 0%, gainsboro 100%);
        /* FF3.6+ */
        background: -ms-linear-gradient(top, white 0%, gainsboro 100%);
        /* IE10+ */
        background: -o-linear-gradient(top, white 0%, gainsboro 100%);
        /* Opera 11.10+ */
        background: linear-gradient(to bottom, white 0%, gainsboro 100%);
        /* W3C */ }
      .dataTables_wrapper .dataTables_paginate .paginate_button.disabled, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:hover, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:active {
        cursor: default;
        color: #666 !important;
        border: 1px solid transparent;
        background: transparent;
        box-shadow: none; }
      .dataTables_wrapper .dataTables_paginate .paginate_button:hover {
        color: white !important;
        border: 1px solid #111111;
        background-color: #585858;
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #585858), color-stop(100%, #111111));
        /* Chrome,Safari4+ */
        background: -webkit-linear-gradient(top, #585858 0%, #111111 100%);
        /* Chrome10+,Safari5.1+ */
        background: -moz-linear-gradient(top, #585858 0%, #111111 100%);
        /* FF3.6+ */
        background: -ms-linear-gradient(top, #585858 0%, #111111 100%);
        /* IE10+ */
        background: -o-linear-gradient(top, #585858 0%, #111111 100%);
        /* Opera 11.10+ */
        background: linear-gradient(to bottom, #585858 0%, #111111 100%);
        /* W3C */ }
      .dataTables_wrapper .dataTables_paginate .paginate_button:active {
        outline: none;
        background-color: #2b2b2b;
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #2b2b2b), color-stop(100%, #0c0c0c));
        /* Chrome,Safari4+ */
        background: -webkit-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);
        /* Chrome10+,Safari5.1+ */
        background: -moz-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);
        /* FF3.6+ */
        background: -ms-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);
        /* IE10+ */
        background: -o-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);
        /* Opera 11.10+ */
        background: linear-gradient(to bottom, #2b2b2b 0%, #0c0c0c 100%);
        /* W3C */
        box-shadow: inset 0 0 3px #111; }
    .dataTables_wrapper .dataTables_paginate .ellipsis {
      padding: 0 1em; }
  .dataTables_wrapper .dataTables_processing {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 40px;
    margin-left: -50%;
    margin-top: -25px;
    padding-top: 20px;
    text-align: center;
    font-size: 1.2em;
    background-color: white;
    background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(255, 255, 255, 0)), color-stop(25%, rgba(255, 255, 255, 0.9)), color-stop(75%, rgba(255, 255, 255, 0.9)), color-stop(100%, rgba(255, 255, 255, 0)));
    background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.9) 75%, rgba(255, 255, 255, 0) 100%);
    background: -moz-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.9) 75%, rgba(255, 255, 255, 0) 100%);
    background: -ms-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.9) 75%, rgba(255, 255, 255, 0) 100%);
    background: -o-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.9) 75%, rgba(255, 255, 255, 0) 100%);
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.9) 75%, rgba(255, 255, 255, 0) 100%); }
  .dataTables_wrapper .dataTables_length,
  .dataTables_wrapper .dataTables_filter,
  .dataTables_wrapper .dataTables_info,
  .dataTables_wrapper .dataTables_processing,
  .dataTables_wrapper .dataTables_paginate {
    color: #333333; }
  .dataTables_wrapper .dataTables_scroll {
    clear: both; }
    .dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody {
      *margin-top: -1px;
      -webkit-overflow-scrolling: touch; }
      .dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody > table > thead > tr > th, .dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody > table > thead > tr > td, .dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody > table > tbody > tr > th, .dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody > table > tbody > tr > td {
        vertical-align: middle; }
      .dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody > table > thead > tr > th > div.dataTables_sizing,
      .dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody > table > thead > tr > td > div.dataTables_sizing, .dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody > table > tbody > tr > th > div.dataTables_sizing,
      .dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody > table > tbody > tr > td > div.dataTables_sizing {
        height: 0;
        overflow: hidden;
        margin: 0 !important;
        padding: 0 !important; }
  .dataTables_wrapper.no-footer .dataTables_scrollBody {
    border-bottom: 1px solid #999999; }
  .dataTables_wrapper.no-footer div.dataTables_scrollHead table.dataTable,
  .dataTables_wrapper.no-footer div.dataTables_scrollBody > table {
    border-bottom: none; }
  .dataTables_wrapper:after {
    visibility: hidden;
    display: block;
    content: "";
    clear: both;
    height: 0; }
 
@media screen and (max-width: 767px) {
  .dataTables_wrapper .dataTables_info,
  .dataTables_wrapper .dataTables_paginate {
    float: none;
    text-align: center; }
  .dataTables_wrapper .dataTables_paginate {
    margin-top: 0.5em; } }
@media screen and (max-width: 640px) {
  .dataTables_wrapper .dataTables_length,
  .dataTables_wrapper .dataTables_filter {
    float: none;
    text-align: center; }
  .dataTables_wrapper .dataTables_filter {
    margin-top: 0.5em; } }
        
    </style>
</head>
<body style="background: #F5F5F5;">
    
   
    <?php 
        $this->load->view($vista);
    ?>  
</body>
<style>
.zoom {
zoom: 90%;
}
html{
  font-size: 11px;
}

  
#example tbody tr{
    cursor: pointer;
    padding:0px; 
    height:15px;
}
#example tbody td{
    padding:0px; 
    height:15px;
}
    
  
    

    

#detalles thead th{
    padding: auto; 
}     
#detalles tbody tr{
    cursor: pointer;
    padding:0px; 
    height:15px;
    width:auto;
}
#detalles tbody td{
    padding:0px; 
    height:15px;
    width:auto;
}

#capas th, td { white-space: nowrap; }
    
 #capas thead th{
    padding: auto; 
}     
#capas tbody tr{
    cursor: pointer;
    padding:0px; 
    height:15px;
    width:auto;
}
#capas tbody td{
    padding:0px; 
    height:15px;
    width:auto;
}   

    
#efectividad thead th{
    padding: auto; 
}     
#efectividad tbody tr{
    cursor: pointer;
    padding:0px; 
    height:15px;
    width:auto;
}
#efectividad tbody td{
    padding:0px; 
    height:15px;
    width:auto;
}   
    
    
    
    
table{
    font-size: 10px;
}
       
.dataTables_wrapper .dataTables_length {
float: right;
}
.dataTables_wrapper .dataTables_filter {
float: left;
text-align: left;
}

.nav-tabs .nav-link.active {
    color: #fff;
    background-color: #17A2B8;
}
.nav-tabs .nav-link{
    color: #9b9b9b;
}
    .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: 0px;
    margin-left: 0px;
}
    
</style>

</html>