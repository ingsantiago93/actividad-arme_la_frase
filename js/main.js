$('body').on('send_frase',function(evt)
{   
    console.log("xxxxxxxxxx");
    /*var position_array = [];
    var j, temp;

    $.ajax({url: "index.html", success: function(result){
        evt.sym.$('contenedor_padre').html(result);
            $.getJSON('config.json', function(json_content) {
                $.each(json_content.words, function(pos, json_word) {
                    position_array[pos] = json_word.word;
                });
                for(var i = position_array.length - 1; i >= 0; i--)
                {
                    j = Math.floor(Math.random() * (i + 1));
                    temp = position_array[i];
                    position_array[i] = position_array[j];
                    position_array[j] = temp;
                    $("ul#list_sort li:nth-child(" +(i+1)+ ")", evt.sym.$('contenedor_padre')).html(position_array[i]);
                }                
                $("ul#list_sort", evt.sym.$('contenedor_padre')).sortable();
                evt.sym.$("contenedor_padre").prop('ed_json_object',json_content);
                evt.sym.$("contenedor_padre").prop('ed_user_attemps',0);
            });
    }});*/
});
/*
$('body').on('ed_check_list', function(evt)
{
    var check_order = function ()
    {
        var position_array = [];
        var retorno_datos = {};
        var activity_score = 0;
        retorno_datos.user_answer = [];
        var json_content = evt.sym.$("contenedor_padre").prop('ed_json_object');
        $("ul#list_sort li", evt.sym.$('contenedor_padre')).each(function(index) {
            retorno_datos.user_answer[index] = $(this).html();
            if ($(this).html() == json_content.words[index].word) {
                activity_score = activity_score + 1;
            } else {
                //No debe sumar puntos si su respuesta es incorrecta
            }
        });

        division = activity_score / $("ul#list_sort li", evt.sym.$('contenedor_padre')).length;
        multiplicacion = Math.round(division * 100);

        retorno_datos.evt = evt;
        retorno_datos.json = json_content;
        retorno_datos.user_score = multiplicacion;
        retorno_datos.minimun_score = json_content.feedback.config_score.min_score_user;

        //Revisar si el puntaje del usuario es suficiente para pasar.
        if(multiplicacion >= json_content.feedback.config_score.min_score_user)
        {
            $.each(json_content.feedback.correcto, function(pos, item)
            {
                if(multiplicacion > parseInt(pos))
                {
                    retorno_datos.feedback = item;
                    return false;
                }
                else
                {
                     console.error("No se encontró retroalimentación válida ", multiplicacion);
                }
            });
        }
        else
        {
            //If de intentos.
            var intentos_usuario = evt.sym.$("contenedor_padre").prop('ed_user_attemps');
            if(typeof(json_content.feedback.attempts[intentos_usuario]) != "undefined")
            {
                retorno_datos.feedback = json_content.feedback.attempts[intentos_usuario];
                intentos_usuario = intentos_usuario + 1;
                evt.sym.$("contenedor_padre").prop('ed_user_attemps',intentos_usuario);
                $.each(json_content.words, function(pos, json_word) {
                    position_array[pos] = json_word.word;
                });
                for(var i = position_array.length - 1; i >= 0; i--)
                {
                    j = Math.floor(Math.random() * (i + 1));
                    temp = position_array[i];
                    position_array[i] = position_array[j];
                    position_array[j] = temp;
                    $("ul#list_sort li:nth-child(" +(i+1)+ ")", evt.sym.$('contenedor_padre')).html(position_array[i]);
                }
            }
            else
            {
                $.each(json_content.feedback.incorrecto, function(pos, item)
                {
                    console.log(multiplicacion + " " + parseInt(pos))
                    if(multiplicacion >= parseInt(pos))
                    {
                        retorno_datos.feedback = item;
                        return false;
                    }
                    else
                    {
                        console.error("No se encontró retroalimentación inválida ", multiplicacion);
                    }
                });            
            }        
        }
        return retorno_datos;
    }
    $('body').trigger({
        type: "Edge_Plantilla_Retroalimentacion",
        ans: check_order(),
        activity: "sort_1",
        sym: evt.sym
    });
});*/