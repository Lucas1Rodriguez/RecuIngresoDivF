/*Una software factory registra la siguiente informacion de sus empleados:
Nombre,
edad (validar),
sexo (masculino - femenino - no binario),
puesto (programador - analista - Qa),
sueldo (entre 15000 y 70000).
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 */





function mostrar()
{
 let nombre;
 let edad;
 let sexo;
 let puesto;
 let sueldo;
 let respuesta;
 let sexoMayorSueldo;
 let nombreMSF;
 let acumProgramador = 0;
 let acumAnalista = 0;
 let acumQa = 0;
 let contadorProgramador = 0;
 let contadorAnalista = 0;
 let contadorQa = 0;
 let contadorNB = 0;
 let promedioProgramador = 0;
 let promedioAnalista= 0;
 let promedioQa = 0;
 let mayorSueldo = 0;
 let mayorSueldoF = 0;
 let flagMS = 1;
 let flagMSF = 1;


 do{

	nombre = prompt("Ingrese nombre: ");

	edad = parseInt(prompt("Ingrese edad: "));
	while(isNaN(edad) || edad< 0){
		edad = parseInt(prompt("Error. Ingrese edad: "));
	}

	sexo = prompt("Ingrese sexo masculino/femenino/no binario: ").toLowerCase();
	while(sexo != "masculino" && sexo != "femenino" && sexo != "no binario"){
		sexo = prompt("Error. Ingrese sexo masculino/femenino/no binario: ").toLowerCase();
	}

	puesto = prompt("Ingrese puesto programador/analista/Qa: ");
	while(puesto != "programador" && puesto != "analista" && puesto != "Qa"){
		puesto = prompt("Error. Ingrese puesto programador/analista/Qa: ");
	}

	sueldo = parseInt(prompt("Ingrese sueldo entre 15000 y 70000"));
	while(isNaN(sueldo) || sueldo < 15000 || sueldo > 70000){
		sueldo = parseInt(prompt("Error. Ingrese sueldo entre 15000 y 70000"));
	}

	switch(puesto){
		case "Qa":
			acumQa+= sueldo;
			contadorQa++;
		break;
		case "analista":
			acumAnalista+= sueldo;
			contadorAnalista++;
		break;
		case "programador":
			acumProgramador+= sueldo;
			contadorProgramador++;
		break;
	}

	if(flagMS || sueldo > mayorSueldo){
		sexoMayorSueldo = sexo;
		mayorSueldo = sueldo;
		flagMS = 0;
	}

	if(sexo == "femenino" && (flagMSF || sueldo > mayorSueldoF)){
		nombreMSF = nombre;
		mayorSueldoF = sueldo;
		flagMSF = 0;
	}

	if( sexo == "no binario" && puesto == "programador" && (sueldo > 20000 || sueldo < 55000)){
		contadorNB++;
	}

	respuesta = prompt("Desea ingresar otro empleado?: ")
 }while(respuesta == "si")


promedioProgramador = acumProgramador / contadorProgramador;
promedioAnalista = acumAnalista / contadorAnalista;
promedioQa = acumQa / contadorQa;

if(contadorProgramador == 0){
	console.log("a) No se registraron empleados programadores");
}else{
	console.log("a) El promedio de sueldos de los programadores es de $" + promedioProgramador);
}

if(contadorAnalista == 0){
	console.log("a) No se registraron empleados analistas");
}else{
	console.log("a) El promedio de sueldos de los analistas es de $" + promedioAnalista);
}

if(contadorQa == 0){
	console.log("a) No se registraron empleados Qa");
}else{
	console.log("a) El promedio de sueldos de los Qa es de $" + promedioQa);
}

if(flagMS){
	console.log("b) No se ingresaron empleados");
}else{
	console.log("b) El sexo del que percibe el mayor sueldo es " + sexoMayorSueldo);
}

if(flagMSF){
	console.log("c) No se ingresaron empleados femeninos");
}else{
	console.log("c) El nombre del empleado femenino con mas sueldo es " + nombreMSF);
}

if(contadorNB == 0){
	console.log("d) No se ingresaron empleados no binarios");
}else{
	console.log("d) La cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 es " + contadorNB);
}

}
