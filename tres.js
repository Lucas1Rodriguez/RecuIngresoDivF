/*Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, teniendo en cuenta que tenemos varias ventas:
nombre del cliente,
cantidad de lamparas ,
marca (FelipeLamparas - ArgentinaLuz -Illuminatis),
precio por unidad,
precio total de esa compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, se aplica un descuento del 10% sobre la compra Si la marca es ArgentinaLuz y compra 3 o mas unidades, el descuento es del 5%. Ningun otro caso aplica descuento. al terminar la carga de todas las ventas,la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas) */






function mostrar()
{
 let nombre;
 let cantidad;
 let marca;
 let precio;
 let respuesta;
 let mayorVentas;
 let acumFelipeLamparas = 0;
 let acumArgentinaLuz = 0;
 let acumIlluminatis = 0;
 let acumuladorDescuentoAL = 0;
 let acumuladorDescuentoFL = 0;
 let acumuladorPrecios = 0;
 let contadorFelipeLamparas = 0;
 let contadorArgentinaLuz = 0;
 let contadorIlluminatis = 0;
 let promedioFelipeLamparas = 0;
 let promedioArgentinaLuz = 0;
 let promedioIlluminatis = 0;
 let recaudacion = 0;
 let descuentoFelipeLamparas = 0;
 let precioConDescuentoFL = 0;
 let descuentoArgentinaLuz = 0;
 let precioConDescuentoAL = 0;
 let perdidas = 0;




 do{

	nombre = prompt("Ingrese nombre: ");

	cantidad = parseInt(prompt("Ingrese cantidad: "));
	while(isNaN(cantidad) || cantidad <= 0){
		cantidad = parseInt(prompt("Error. Ingrese cantidad: "));
	}

	marca = prompt("Ingrese marca FelipeLamparas/ArgentinaLuz/Illuminatis: ");
	while(marca != "FelipeLamparas" && marca != "ArgentinaLuz" && marca != "Illuminatis"){
		marca = prompt("Error. Ingrese marca FelipeLamparas/ArgentinaLuz/Illuminatis: ");
	}

	precio = parseInt(prompt("Ingrese precio: "));
	while(isNaN(precio) || precio <= 0){
		precio = parseInt(prompt("Error. Ingrese precio: "));
	}

	switch(marca){
		case "FelipeLamparas":
			acumFelipeLamparas+= cantidad;
			contadorFelipeLamparas++;
			if(cantidad > 5){
				descuentoFelipeLamparas = precio * 0.1;
				precioConDescuentoFL = precio - descuentoFelipeLamparas;
				acumuladorDescuentoFL+= precioConDescuentoFL;
			}
		break;
		case "ArgentinaLuz":
			acumArgentinaLuz+= cantidad;
			contadorArgentinaLuz++;
			if(cantidad > 3){
				descuentoArgentinaLuz = precio * 0.05;
				precioConDescuentoAL = precio - descuentoArgentinaLuz;
				acumuladorDescuentoAL+= precioConDescuentoAL;
			}
		break;
		case "Illuminatis":
			acumIlluminatis+= cantidad;
			contadorIlluminatis++;
		break;
	}

	acumuladorPrecios+= precio;

	respuesta = prompt("Desea ingresar otro cliente?: ")
 }while(respuesta == "si");

 recaudacion = acumuladorPrecios + acumuladorDescuentoAL + acumuladorDescuentoFL;

 if(recaudacion == 0){
	console.log("a) No se recaudo con las ventas realizadas");
 }else{
	 console.log("a) La empresa en concepto de todas las ventas realizadas recaudo $" + recaudacion);
 }


 perdidas = acumuladorDescuentoAL + acumuladorDescuentoFL;

 if(perdidas == 0){
	 console.log("b) No hubieron perdidas");
 }else{
	 console.log("b) La empresa en concepto de descuentos perdio $" + perdidas);
 }

 promedioArgentinaLuz = acumArgentinaLuz / contadorArgentinaLuz;
 promedioFelipeLamparas = acumFelipeLamparas / contadorFelipeLamparas;
 promedioIlluminatis = acumIlluminatis / contadorIlluminatis;

 if(contadorArgentinaLuz == 0){
		console.log("c) No se registraron ventas de lamparas marca ArgentinaLuz");
 }else{
		console.log("c) El promedio de ventas de lamparas marca ArgentinaLuz es de $" + promedioArgentinaLuz);
 }

 if(contadorFelipeLamparas == 0){
		console.log("c) No se registraron ventas de lamparas marca FelipeLamparas");
 }else{
		console.log("c) El promedio de las ventas de lamparas marca FelipeLamparas es de $" + promedioFelipeLamparas);
 }

 if(contadorIlluminatis == 0){
		console.log("c) No se registraron ventas de lamparas marca Illuminatis");
 }else{
		console.log("c) El promedio de las ventas de lamparas marca Illuminatis es de $" + promedioIlluminatis);
 }
 
 if(contadorArgentinaLuz > contadorFelipeLamparas && contadorArgentinaLuz > contadorIlluminatis){
	mayorVentas = "ArgentinaLuz";
 }else if(contadorFelipeLamparas >= contadorArgentinaLuz && contadorFelipeLamparas > contadorIlluminatis){
	mayorVentas = "FelipeLamparas";
 }else{
	mayorVentas = "Illuminatis";
 }
 
 if(recaudacion == 0){
	 console.log("No se vendieron lamparas");
 }else{
	 console.log("La marca que mas ventas realizo fue " + mayorVentas);
 }

}
