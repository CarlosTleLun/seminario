$(document).ready(function() {
    // function to get all records from table

    // function to get all records from table
    // code to get all records from table via select box

    /***************************       Primero     *******************************/

    $("#grado").change(function() {
        var id = $(this).find(":selected").val();
        //var id = " ";
        //var grado = 'segundo';
        $.ajax({
            url: 'get_datos_select.php',
            data: { dato1: id },
            //data: dataString,
            cache: false,
            success: function(r) {
                $("#asignatura").html(r);
            }
        });
    })
    $("#grado_gpo").change(function() {
        var id = $(this).find(":selected").val();
        //var id = " ";
        //var grado = 'segundo';
        $.ajax({
            url: 'get_datos_select_gpo.php',
            data: { dato1: id },
            //data: dataString,
            cache: false,
            success: function(r) {
                $("#grupo").html(r);
            }
        });
    })
  

});