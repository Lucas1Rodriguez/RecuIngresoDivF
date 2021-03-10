/*Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica. */

function mostrar()
{
 let nombre;
 let edad;
 let sexo;
 let carrera;
 let materias;
 let notaPromedio;
 let nombreMPFisica;
 let nombreAJ;
 let nombreMM;
 let edadMM;
 let mejorPromedioFisica = 0;
 let edadAJ = 0;
 let contadorQuimica = 0;
 let contadorFisica = 0;
 let contadorSistemas = 0;
 let contadorTotalAlumnos = 0;
 let porcentajeQuimica = 0;
 let porcentajeFisica = 0;
 let porcentajeSistemas = 0;
 let masMaterias = 0;
 let flagMPF = 1;
 let flagAJ = 1;
 let flagMM = 1;

 for(let i = 0; i < 500; i++){

    nombre = prompt("Ingrese nombre: ");

	edad = parseInt(prompt("Ingrese edad: "));
	while(isNaN(edad) || edad< 0){
	    edad = parseInt(prompt("Error. Ingrese edad: "));
	}

	sexo = prompt("Ingrese sexo masculino/femenino/no binario: ").toLowerCase();
	while(sexo != "masculino" && sexo != "femenino" && sexo != "no binario"){
	    sexo = prompt("Error. Ingrese sexo masculino/femenino/no binario: ").toLowerCase();
	}

    carrera = prompt("Ingrese carrera Quimica/Fisica/Sistemas");
    while(carrera != "Quimica" && carrera != "Fisica" && carrera != "Sistemas"){
        carrera = prompt("Error. Ingrese carrera Quimica/Fisica/Sistemas");
    }
 
    materias = parseInt(prompt("Ingrese cantidad de materias entre 1 y 5"));
    while(isNaN(materias) || materias < 1 || materias > 5){
        materias = parseInt(prompt("Error. Ingrese cantidad de materias entre 1 y 5"));
    }

    notaPromedio = parseInt(prompt("Ingrese nota promedio entre 0 y 10"));
    while(isNaN(notaPromedio) || notaPromedio < 0 || notaPromedio > 10){
        notaPromedio = parseInt(prompt("Error. Ingrese nota promedio entre 0 y 10"));
    }

    if(carrera == "Fisica" && (flagMPF || mejorPromedioFisica < notaPromedio)){
        mejorPromedioFisica = notaPromedio;
        nombreMPFisica = nombre;
        flagMPF = 0;
    }

    if(sexo == "femenino" && (flagAJ || edadAJ > edad)){
        edadAJ = edad;
        nombreAJ = nombre;
        flagAJ = 0;
    }


    if(carrera != "Quimica" && (flagMM || masMaterias < materias)){
        masMaterias = materias;
        nombreMM = nombre;
        edadMM = edad;
        flagMM = 0;
    }


    if(carrera == "Fisica"){
        contadorFisica++;
    }else if(carrera == "Quimica"){
        contadorQuimica++;
    }else{
        contadorSistemas++;
    }

    contadorTotalAlumnos++;

    }    


  if(flagMPF){
      console.log("a) No se ingresaron alumnos que estudien fisica");
    }else{
      console.log("a) El nombre del mejor promedio de los alumnos que estudian Fisica es " + nombreMPFisica);
    }

  if(flagAJ){
     console.log("b) No se ingresaron alumnas");
    }else{
        console.log("b) El nombre de la alumna mas joven es " + nombreAJ);
    }

    porcentajeFisica = contadorFisica * 100 / contadorTotalAlumnos;
    porcentajeQuimica = contadorQuimica * 100 / contadorTotalAlumnos;
    porcentajeSistemas = contadorSistemas * 100 / contadorTotalAlumnos;

    if(contadorFisica == 0){
      console.log("c) No se ingresaron alumnos que estudien fisica");
    }else{
        console.log("c) El porcentaje de alumnos que estudian fisica es de " + porcentajeFisica + "%");
    }

    if(contadorQuimica == 0){
        console.log("c) No se ingresaron alumnos que estudien quimica");
    }else{
         console.log("c) El porcentaje de alumnos que estudian quimica es de " + porcentajeQuimica + "%");
    }
  
    if(contadorSistemas == 0){
        console.log("c) No se ingresaron alumnos que estudien sistemas");
    }else{
        console.log("c) El porcentaje de alumnos que estudian sistemas es de " + porcentajeSistemas + "%");
    }


    if(flagMM){
        console.log("d) No se ingresaron alumnos que no estudien quimica");
    } else{
        console.log("d) La edad del estudiante que cursa mas materias exceptuando la carrera de Quimica es " + edadMM + " años y su nombre es " + nombreMM);
    }

}
