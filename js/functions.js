// FORMAS DE IMPRIMIR EN PANTALLA
// alert("hola soy un alert");
// console.log("Hola soy un mensaje de consola");
// document.write("Hola soy la interfaz principal");
// Swal.fire("Star Rail >>>> Genshin Impact!");
// Swal.fire({
//     title: "The Internet?",
//     text: "That thing is still around?",
//     icon: "question"
//   });

//VARIABLES Y TIPO DE DATOS

const pi = 3.14; //decimal 
// var name = "Brian Matheo"; //string
let edad = 19; //entero
let edad_String = "19"; //string
var bool = true; // false booleanos

//Operadores básicos + - / * %
var suma = 5-2;
console.log(suma);
console.log(edad_String);
var one = 10;
var two = 20;
console.log(one+two);
console.log(one-two);
console.log(one*two);
console.log(one/two);
console.log(one%two);

//OPERADORES DE COMPARACION
// < > >= <= <>
// = ASIGNACION
// == COMPARACION 5=="5"
// === COMPARACION 5===5
// OPERADORES LÓGICOS
// AND && OR ||

console.log("Mi nombre es: " + name + " tiene como edad: " + edad);

function load_page(){
    Swal.fire({
        imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
        imageAlt: "A tall image",
        showConfirmButton: false,
        timer: 1200
      });
      document.getElementById("fecha").value = new Date();
      let date = new Date();
      document.getElementById("dia").innerText = date.getDay();
      document.getElementById("date").innerText = date.getDate();        
      document.getElementById("mes").innerText = date.getMonth();       
      document.getElementById("hora").innerText = date.getHours();         
      document.getElementById("minutos").innerText = date.getMinutes();     
      document.getElementById("segundos").innerText = date.getSeconds();        // 10
      document.getElementById("milisegundos").innerText = date.getMilliseconds();   
      document.getElementById("horario").innerText = date.getTimezoneOffset(); 
      document.getElementById("tiempo").innerText = date.getTime();          
}

function send_info(){
    let name = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    if(name.length == 0 || last_name.length == 0){
    Swal.fire({
        title: "Campos Vacíos",
        text: "Algunos de los campos se encuentra vacíos",
        icon: "error"
    });
      if(name.length == 0){
        document.getElementById("name").style.border = "2px solid red"
      }
      if(last_name.length == 0){
        document.getElementById("last_name").style.border = "2px solid red"
      }
    }else{
        const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Nombre y Apellidos ingresados correctamente"
      });
        document.getElementById("name").style.border = "2px solid black"
        document.getElementById("last_name").style.border = "2px solid black"
        document.getElementById("print").innerHTML = "<br>" + "<strong>" + name + " " + last_name + "</strong>";
    }
    console.log(name);
}


function send_infopassword(){
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm_password").value;
    if(password.length == 0 || confirm_password.length == 0){
    Swal.fire({
        title: "Campos Vacíos",
        text: "Algunos de los campos se encuentra vacío",
        icon: "error"
    });
      if(password.length == 0){
        document.getElementById("password").style.border = "2px solid red"
      }
      if(confirm_password.length == 0){
        document.getElementById("confirm_password").style.border = "2px solid red"
      }
    }else{
        document.getElementById("password").style.border = "2px solid black"
        document.getElementById("confirm_password").style.border = "2px solid black"
        if(password == confirm_password){
            Swal.fire({
                title: "Contraseñas adecuadas",
                text: "Contraseñas ingresadas correctamente",
                icon: "success"
              });
        }else{
            Swal.fire({
                title: "Confirmación de la contraseña Incorrecta",
                text: "Favor ingrese la confirmación adecuada",
                icon: "warning"
              });
        }
    }
    console.log(password);
}

//ARRAYS

var dias_sem = ["lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
var array_num = [1,2,3,4,5,6,7,8,9];
var array_mix = [1,2.5,"abc"];
var array_mul = [
    {name: "Wilder", age:32, color: "Green"},
    {name: "Anyir", age:33, color: "White"},
    {name: "Celeste", age:3, color: "Black"},
    {name: "Antonella", age:2, color: "Gray"}
]

var json_ejm = {
  name: "Brian Matheo",
  lasname: "Alvarez Pacheco",
  phone: "3175364025",
  email: "bmalvarezp@ufpso.edu.co"
}

console.log(dias_sem);
console.log(array_num);
console.log(array_mix);
console.log(array_mul);
console.log(json_ejm);

for(let i=0;i<dias_sem.length;i++){
  console.log(dias_sem[i]);
}
var j=0;

while(j<array_num.length){
  console.log(array_num[j]);
  j++
}

var acum = 0;

for(let k=0;k < array_num.length;k++){
  acum += array_num[k];
}
console.log(acum)

var sum = 0;

for(let h=0 ; h<array_mul.length;h++){
  sum += array_mul[h].age;
}

document.getElementById('sum').innerText = "El valor de la suma es: " + sum;
document.getElementById('valores').value = array_num;

var array_ejm = [1,2,3,4,5,6,7,8,9];

function limpiar(){
  document.getElementById("valores").value = "";
  document.getElementById("agregador").value = "";
}

function agregar(){
  var addemer = document.getElementById("agregador").value;
  array_ejm.push(addemer);
  document.getElementById("valores").value = array_ejm;
}

function agregar2(){
  var addemer = document.getElementById("agregador").value;
  array_ejm.unshift(addemer);
  document.getElementById("valores").value = array_ejm;
}

function eliminar1(){
  array_ejm.shift(array_ejm);
  document.getElementById("valores").value = array_ejm;
}

function eliminar2(){
  array_ejm.pop(array_ejm);
  document.getElementById("valores").value = array_ejm;
}

function reverse(){
  array_ejm.reverse(array_ejm);
  document.getElementById("valores").value = array_ejm;
}

var uno = [];

for(let i=0;i<array_ejm.length;i++){
  uno.push(array_ejm[i]);
}
console.log(uno);

function fibonacci(){
  var fibo = document.getElementById("fibo").value;
  if(isNaN(fibo)){
    alert("eso no es un numero");
  }else{
    if(fibo<=1){
      alert("eso es muy poco para fibonacci");
    }else{
      let a=0, b=1, sum=a+b;
      var array = [0,1,1];
      for(let i=3;i<fibo;i++){
        a = b;
        b = sum;
        sum = a + b;
        array.push(sum);
      }
      document.getElementById("retomar").value = array;
    }

  }
}

function send_name(){
  let name_one = document.getElementById("name_one").value;
  let name_two = document.getElementById("name_two").value;
  let search_var = document.getElementById("search_var").value;
  let name_com = name_one.toUpperCase() +" "+name_two.toUpperCase();
  // let variable = name_com.lastIndexOF("A");
  let variable = name_com.charAt(search_var);
  if(name_one.length=0 && name){

  }
  if(search_var <= name_com.length && search_var.length != 0){
    document.getElementById("print_name").innerText = "La letra correspondiente al #" + search_var + " es: " + variable;
    Swal.fire(variable)
  }
  else if(isNaN(search_var)){
    Swal.fire({
        title: "no es un numero",
        text: "atontao",
        icon: "question"
      });
      document.getElementById("print_name").innerText = "";
  }
  else if(search_var.length == 0){
    Swal.fire({
      title: "error",
      text: "no tiene valor",
      icon: "question"
    });
    document.getElementById("print_name").innerText = "";
  }
  else{
    Swal.fire({
        title: "te pasaste",
        text: "numero muy alto",
        icon: "question"
      });
    document.getElementById("print_name").innerText = "";
  }
  
}