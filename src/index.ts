// Arreglos (Ejercicios ONLINE) Viernes 13 de mayo de 2022
// Ejercicio 1 - Identificación Mes – Código

/* • Modifique el código del Ejercicio Identificación mes utilizando arreglos
Longitud = Length= 12 */

//rotulo.innerHTML = "Indique el número de mes que le interesa:";

let miArreglo: string[] = new Array(12);
miArreglo[0] = "Enero";
miArreglo[1] = "Febrero";
miArreglo[2] = "Marzo";
miArreglo[3] = "Abril";
miArreglo[4] = "Mayo";
miArreglo[5] = "Junio";
miArreglo[6] = "Julio";
miArreglo[7] = "Agosto";
miArreglo[8] = "Septiembre";
miArreglo[9] = "Octubre";
miArreglo[10] = "Noviembre";
miArreglo[11] = "Diciembre";
let nroMes: number = dato.value;

let indice = nroMes - 1;
console.log("El mes es:", miArreglo[indice]);
