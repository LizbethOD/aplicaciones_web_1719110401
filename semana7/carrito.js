<script type="text/javascript">
     var totali=0; function insertaD(form) {
		 var product= document.getElementById('productos');

		 var product01= product.options[product.selectedIndex].text;

	   var product02= product.options[product.selectedIndex].value;

		 var piezas=document.getElementById('cantidad').value;

		 var numpro=parseFloat(piezas);

		 var valor=parseFloat(product02);

		 var multiplicacion=numpro*valor;

		 total=totali+multiplicacion; 

		 document.getElementById('carritocompras').value += "Cantidad: "+piezas+"\tProducto: "+product01+"\tTotal: "+ "$"+multiplicacion + "\n";

		 document.getElementById('totalPagar').value=total;
	   }
     </script>