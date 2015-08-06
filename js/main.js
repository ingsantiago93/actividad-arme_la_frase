/*
- Arreglo palabras ordenadas correctamente.
- Arreglo de respuestas del usuario.
*/
var json_content_global;
var user_words_position_global;

$('body').on('send_frase',function(evt)
{   
    var words_column_array = [];
    var correct_sentences_array = [];
    var j, temp;

    $.getJSON('config.json', function(json_content) {
        //Arreglo de palabras a encontrar
        $.each(json_content.words, function(pos, json_word) {
            words_column_array[pos] = json_word.word;
        });
        //Arreglo de palabras ordenadas correctaente
        $.each(json_content.correct_sentence, function(pos, json_correct_sentence) {
            correct_sentences_array[pos] = json_correct_sentence.c_word;
        });

        for (var i = words_column_array.length - 1; i >= 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = words_column_array[i];
            words_column_array[i] = words_column_array[j];
            words_column_array[j] = temp;
            //console.log(evt.sym.getSymbol("recuadro_actividad").$("opcion_"+(i+1)+"").find('p'));
            evt.sym.getSymbol("recuadro_actividad").$("opcion_"+(i+1)+"").find('p').text(""+words_column_array[i]);            
        }        
        evt.sym.$("recuadro_actividad").prop('ed_word_user_position', 1);
        evt.sym.$("recuadro_actividad").prop('ed_json_object', json_content);
        evt.sym.$("recuadro_actividad").prop('ed_user_attemps',0);
        /*console.log(correct_sentences_array);
        console.log(words_column_array);*/

        json_content_global = evt.sym.$("recuadro_actividad").prop('ed_json_object');
        user_words_position_global = evt.sym.$("recuadro_actividad").prop('ed_word_user_position');
    });
});

$('body').on('put_word',function(evt)
{    
    user_words_position = user_words_position_global;
    //Si el usuario ya llenó todas las palabras, entonces.
    console.log(evt.sym.getSymbol("campos_vacios").$("palabra_"+user_words_position_global).text('fuck you and your mother'));
    if(user_words_position >= json_content_global.correct_sentence.length)
    {
        //Ponga la palabra y verifique si está correcta.
        
        //evt.sym.getSymbol("recuadro_actividad").$("palabra_"+user_words_position).text('ed_word_user_position');
        //ed_check_activity(evt,sym);
    }
    else
    {
        //Ponga la palabra y agreguele 1 al valor de posición.
        //Vaya al elemento que se dio click, capture su texto, deshabilitelo, pintelo deshabilitado y pongalo en las cajas
        evt.sym.getSymbol("recuadro_actividad").$("palabra_"+user_words_position).text('ed_word_user_position');
        user_words_position = user_words_position + 1;
        user_words_position = evt.sym.$("recuadro_actividad").prop('ed_word_user_position', user_words_position);
    }

});

function ed_check_activity(evt,sym)
{
    var activity_score = 0; //Puntaje del usuario (actividad)
    //Vaya al elemento que se dio click, capture su texto, deshabilitelo, pintelo deshabilitado y pongalo en las cajas.
    for (var i = json_content_global.correct_sentence.length - 1; i >= 0; i--)
    {
        //Recorra cada una de las palabras y verifique si forman parte del arreglo oración del JSON.
        if (evt.sym.$("palabra_" + (i + 1)).html() != json_content_global.correct_sentence[i]) {
            activity_score = activity_score + 1;
        } else {
            //No debe sumar puntos si su respuesta es incorrecta
        }
    }
    division = activity_score / json_content_global.correct_sentence.length;
    multiplicacion = Math.round(division * 100); //Resultado en porcentaje.

    //Revisar si el puntaje del usuario es suficiente para pasar.
    if (multiplicacion >= json_content_global.feedback.config_score.min_score_user) {
        $.each(json_content_global.feedback.correcto, function(pos, item) {
            if (multiplicacion > parseInt(pos)) {
                retorno_datos.feedback = item;
                return false;
            } else {
                console.error("No se encontró retroalimentación válida ", multiplicacion);
            }
        });
    } else {
        //If de intentos.
        var intentos_usuario = evt.sym.$("recuadro_actividad").prop('ed_user_attemps');
        if (typeof(json_content_global.feedback.attempts[intentos_usuario]) != "undefined") {
            retorno_datos.feedback = json_content_global.feedback.attempts[intentos_usuario];
            intentos_usuario = intentos_usuario + 1;
            evt.sym.$("recuadro_actividad").prop('ed_user_attemps', intentos_usuario);
            $.each(json_content_global.words, function(pos, json_word) {
                position_array[pos] = json_word.word;
            });
            for (var i = position_array.length - 1; i >= 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                temp = words_column_array[i];
                words_column_array[i] = words_column_array[j];
                words_column_array[j] = temp;
                evt.sym.getSymbol("recuadro_actividad").$("opcion_"+(i+1)+"").text(""+words_column_array[i]);
            }
        } else {
            $.each(json_content_global.feedback.incorrecto, function(pos, item) {
                console.log(multiplicacion + " " + parseInt(pos))
                if (multiplicacion >= parseInt(pos)) {
                    retorno_datos.feedback = item;
                    return false;
                } else {
                    console.error("No se encontró retroalimentación inválida ", multiplicacion);
                }
            });
        }
    }
}

$('body').on('send_word', function(evt)
{
    console.log("Champa");
    evt.sym.$("recuadro_actividad"); 

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