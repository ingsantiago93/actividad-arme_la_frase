/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here         
      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         //aqui va codigo
         $('body').trigger({
            type: 'send_frase',
            sym: sym,
            evt: e
         }); 
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Reproducir2}", "click", function(sym, e) {
         // reproduce el audio correspondiente

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'btn_enviar'
   (function(symbolName) {   
   
   })("btn_enviar");
   //Edge symbol end:'btn_enviar'

   //=========================================================
   
   //Edge symbol: 'Reproducir'
   (function(symbolName) {   
   
   })("Reproducir");
   //Edge symbol end:'Reproducir'

   //=========================================================
   
   //Edge symbol: 'recuadro'
   (function(symbolName) {   
   
   })("recuadro");
   //Edge symbol end:'recuadro'

   //=========================================================
   
   //Edge symbol: 'palabra_1'
   (function(symbolName) {   
   
   })("palabra_1");
   //Edge symbol end:'palabra_1'

   //=========================================================
   
   //Edge symbol: 'palabra_2'
   (function(symbolName) {   
   
   })("palabra_2");
   //Edge symbol end:'palabra_2'

   //=========================================================
   
   //Edge symbol: 'palabra_3'
   (function(symbolName) {   
   
   })("palabra_3");
   //Edge symbol end:'palabra_3'

   //=========================================================
   
   //Edge symbol: 'palabra_4'
   (function(symbolName) {   
   
   })("palabra_4");
   //Edge symbol end:'palabra_4'

   //=========================================================
   
   //Edge symbol: 'palabra_5'
   (function(symbolName) {   
   
   })("palabra_5");
   //Edge symbol end:'palabra_5'

   //=========================================================
   
   //Edge symbol: 'marco'
   (function(symbolName) {   
   
   })("marco");
   //Edge symbol end:'marco'

   //=========================================================
   
   //Edge symbol: 'Palabra_1'
   (function(symbolName) {   
   
   })("Palabra_1");
   //Edge symbol end:'Palabra_1'

   //=========================================================
   
   //Edge symbol: 'opcion_2'
   (function(symbolName) {   

   })("opcion_2");
   //Edge symbol end:'opcion_2'

   //=========================================================
   
   //Edge symbol: 'opcion_3'
   (function(symbolName) {   

   })("opcion_3");
   //Edge symbol end:'opcion_3'

   //=========================================================
   
   //Edge symbol: 'opcion_4'
   (function(symbolName) {   

   })("opcion_4");
   //Edge symbol end:'opcion_4'

   //=========================================================
   
   //Edge symbol: 'opcion_5'
   (function(symbolName) {   

   })("opcion_5");
   //Edge symbol end:'opcion_5'

   //=========================================================
   
   //Edge symbol: 'opcion_7'
   (function(symbolName) {   

   })("opcion_7");
   //Edge symbol end:'opcion_7'

   //=========================================================
   
   //Edge symbol: 'opcion_8'
   (function(symbolName) {   

   })("opcion_8");
   //Edge symbol end:'opcion_8'

   //=========================================================
   
   //Edge symbol: 'opcion_9'
   (function(symbolName) {   

   })("opcion_9");
   //Edge symbol end:'opcion_9'

   //=========================================================
   
   //Edge symbol: 'opcion-8'
   (function(symbolName) {   
   
   })("opcion-8");
   //Edge symbol end:'opcion-8'

   //=========================================================
   
   //Edge symbol: 'columna_1'
   (function(symbolName) {   
   
   })("columna_1");
   //Edge symbol end:'columna_1'

   //=========================================================
   
   //Edge symbol: 'columna_2'
   (function(symbolName) {   
   
   })("columna_2");
   //Edge symbol end:'columna_2'

   //=========================================================
   
   //Edge symbol: 'columna_3'
   (function(symbolName) {         

   })("columna_3");
   //Edge symbol end:'columna_3'

   //=========================================================
   
   //Edge symbol: 'campos_vacios'
   (function(symbolName) {   
   
   })("campos_vacios");
   //Edge symbol end:'campos_vacios'

   //=========================================================
   
   //Edge symbol: 'Instruccion'
   (function(symbolName) {   
   
   })("Instruccion");
   //Edge symbol end:'Instruccion'

   //=========================================================
   
   //Edge symbol: 'recuadro_actividad'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${opcion_1}", "click", function(sym, e) {
         // opcion1
         $('body').trigger({
            type: 'put_word',
            sym: sym,
            evt: e
         });
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${opcion_2}", "click", function(sym, e) {
         // opcion2
         $('body').trigger({
            type: 'put_word',
            sym: sym,
            evt: e
         });
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${opcion_3}", "click", function(sym, e) {
         // opcion3
         $('body').trigger({
            type: 'put_word',
            sym: sym,
            evt: e
         });
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${opcion_4}", "click", function(sym, e) {
         // opcion4
         $('body').trigger({
            type: 'put_word',
            sym: sym,
            evt: e
         });
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${opcion_5}", "click", function(sym, e) {
         // opcion5
         $('body').trigger({
            type: 'put_word',
            sym: sym,
            evt: e
         });
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${opcion_6}", "click", function(sym, e) {
         // opcion6
         $('body').trigger({
            type: 'put_word',
            sym: sym,
            evt: e
         });
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${opcion_7}", "click", function(sym, e) {
         // opcion7
         $('body').trigger({
            type: 'put_word',
            sym: sym,
            evt: e
         });
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${opcion_8}", "click", function(sym, e) {
         // opcion8
         $('body').trigger({
            type: 'put_word',
            sym: sym,
            evt: e
         });
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${opcion_9}", "click", function(sym, e) {
         // opcion9
         $('body').trigger({
            type: 'put_word',
            sym: sym,
            evt: e
         });
      });
      //Edge binding end

   })("recuadro_actividad");
   //Edge symbol end:'recuadro_actividad'

   //=========================================================
   
   //Edge symbol: 'Enviar_activo'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${ENVIAR_Activo}", "click", function(sym, e) {
         // cuando el usuario llene los campos con las palabras se activa el boton enviar

      });
      //Edge binding end

   })("Enviar_activo");
   //Edge symbol end:'Enviar_activo'

   //=========================================================
   
   //Edge symbol: 'txt_1'
   (function(symbolName) {   
   
   })("txt_1");
   //Edge symbol end:'txt_1'

   //=========================================================
   
   //Edge symbol: 'txt_2'
   (function(symbolName) {   
   
   })("txt_2");
   //Edge symbol end:'txt_2'

   //=========================================================
   
   //Edge symbol: 'txt_3'
   (function(symbolName) {   
   
   })("txt_3");
   //Edge symbol end:'txt_3'

   //=========================================================
   
   //Edge symbol: 'txt_4'
   (function(symbolName) {   
   
   })("txt_4");
   //Edge symbol end:'txt_4'

   //=========================================================
   
   //Edge symbol: 'txt_5'
   (function(symbolName) {   
   
   })("txt_5");
   //Edge symbol end:'txt_5'

   //=========================================================
   
   //Edge symbol: 'txt_6'
   (function(symbolName) {   
   
   })("txt_6");
   //Edge symbol end:'txt_6'

   //=========================================================
   
   //Edge symbol: 'txt_7'
   (function(symbolName) {   
   
   })("txt_7");
   //Edge symbol end:'txt_7'

   //=========================================================
   
   //Edge symbol: 'txt_8'
   (function(symbolName) {   
   
   })("txt_8");
   //Edge symbol end:'txt_8'

   //=========================================================
   
   //Edge symbol: 'txt_9'
   (function(symbolName) {   
   
   })("txt_9");
   //Edge symbol end:'txt_9'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-327212");