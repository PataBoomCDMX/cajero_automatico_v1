// Capturar elementos de un formulario y validar usuario

//1. Captura de variables
const formulario = document.getElementById("inicioSesion")
const userName = document.getElementById("inputUser")
const userPass = document.getElementById("inputPass")

const successBox =document.getElementById("userBox")
const userBox =document.getElementById("box-user")

const consultaSaldo=document.getElementById("userBoxConsulta")
const consultaSaldoBox=document.getElementById("box-user-consulta")

const menuDepositar=document.getElementById("userBoxDeposita")
const menuDepositarBox=document.getElementById("box-user-deposita")

const menuRetirar=document.getElementById("userBoxRetira")
const menuRetirarBox=document.getElementById("box-user-retira")

const newSaldoDeposit=document.getElementById("deposit");
const newSaldoWithdraw=document.getElementById("withdraw");

//2. Funcion

let users = [
    { user: "jose", pass: "1234", saldo:"990" },
    { user: "martha", pass: "1234b", saldo:"10"  },
    { user: "andres", pass: "1234c", saldo:"500"  },
    { user: "pepe", pass: "1234d" , saldo:"200" },
]

function validar(e) {
    e.preventDefault()// previene que se actualice el navegador para no perder la informacion de User y PAssword

      /*  console.log(userName.value)
    console.log(userPass.value) */

    //Generar un ciclo for para recorrer e imprimri en consola los elementos del array users
 for (let i=0; i<users.length; i++){
   console.log(users[i].user)// esta son comprobaciones
    console.log(users[i].pass)// esta son comprobacones
    console.log(users[i].saldo)// esta son comprobacones
    //el .user y el .pass me ayudan a imprimir en orden
    if(userName.value ==users[i].user && userPass.value == users[i].pass){
        console.log("Bienvenido "+users[i].user+" a tu cuenta")
        successBox.style.display="flex"// se abre caja con bienvenido user
        userBox.innerText =users[i].user
        userBox.style.textTransform="capitalize"
        formulario.style.display="none"// se borra el formulario
        

        return
    }
 }
 console.log("Credenciales Incorrectas")// esto no se pone en un ELSE porque entonces manda la respues de todo lo negativo del ciclo
 alert("Credenciales incorrectas ")
}


function consulta(){
  
  for (let i=0; i<users.length; i++){
     console.log(users[i].saldo)// esta son comprobacones
     
     if(userName.value ==users[i].user && userPass.value == users[i].pass){
         console.log("Este es tu saldo $ "+users[i].saldo+" MXN")
         consultaSaldo.style.display="flex"// se abre caja con bienvenido user
         consultaSaldoBox.innerText =users[i].saldo
         consultaSaldoBox.textTransform="capitalize"
         successBox.style.display="none"// se borra el formulario
         
         return
     }
} 
}

function regresa(){
  
  for (let i=0; i<users.length; i++){
    console.log(users[i].user)// esta son comprobaciones
     console.log(users[i].pass)// esta son comprobacones
     console.log(users[i].saldo)// esta son comprobacones
     //el .user y el .pass me ayudan a imprimir en orden
     if(userName.value ==users[i].user && userPass.value == users[i].pass){
         console.log("Bienvenido "+users[i].user+" a tu cuenta")
         successBox.style.display="flex"// se abre caja con bienvenido user
         userBox.innerText =users[i].user
         userBox.style.textTransform="capitalize"
         consultaSaldo.style.display="none"// se borra el formulario
         menuDepositar.style.display="none"
         menuRetirar.style.display="none"
         document.getElementById("withdraw").value = ""
         document.getElementById("deposit").value = ""

         
 
         return
     }
} 
}
function goDeposita(){
  
  for (let i=0; i<users.length; i++){
     console.log(users[i].saldo)// esta son comprobacones
     
     if(userName.value ==users[i].user && userPass.value == users[i].pass){
         console.log("Llegaste a la pagina correcta")
         menuDepositar.style.display="flex"// se abre caja con bienvenido user
         menuDepositarBox.innerText =users[i].saldo
         menuDepositarBox.style.textTransform="capitalize"
         successBox.style.display="none"// se borra el formulario
         consultaSaldo.style.display="none"
         menuRetirar.style.display="none"
         
 
         return
     }
} 
}

function goRetira(){
  
  for (let i=0; i<users.length; i++){
     console.log(users[i].saldo)// esta son comprobacones
     
     if(userName.value ==users[i].user && userPass.value == users[i].pass){
         console.log("Llegaste a la pagina correcta")
         menuRetirar.style.display="flex"// se abre caja con bienvenido user
         menuRetirarBox.innerText =users[i].saldo
         menuRetirarBox.style.textTransform="capitalize"
         successBox.style.display="none"// se borra el formulario
         consultaSaldo.style.display="none"
         menuDepositar.style.display="none"
         
 
         return
     }
} 
}
function depositar(){
  
  for (let i=0; i<users.length; i++){
     console.log(users[i].saldo)// esta son comprobacones
     
     if(userName.value ==users[i].user && userPass.value == users[i].pass){
      const nSD=Number(newSaldoDeposit.value);
      
      console.log("entro1")
      
      if (nSD + Number(users[i].saldo)<=990){
        console.log(nSD+Number(users[i].saldo))
        console.log(users[i])
        users[i].saldo=nSD+Number(users[i].saldo)
        console.log(users[i])
        document.getElementById("deposit").value = ""
        menuDepositarBox.innerText =users[i].saldo
        return
      } else{
        console.log("nohay")
        alert("Solo puedes depositar hasta "+ (990-Number(users[i].saldo)))
    }
      
      
      
    
 
         return
     }
} 

}

function retirar(){
  
  for (let i=0; i<users.length; i++){
    console.log(users[i].saldo)// esta son comprobacones
    
    if(userName.value ==users[i].user && userPass.value == users[i].pass){
     const nSW=Number(newSaldoWithdraw.value);
     
     console.log("entro1")
     
     if (Number(users[i].saldo)-nSW>=10){
       console.log(Number(users[i].saldo)-nSW)
       console.log(users[i])
       users[i].saldo=Number(users[i].saldo-nSW)
       console.log(users[i])
       document.getElementById("withdraw").value = ""
       menuRetirarBox.innerText =users[i].saldo
       return
     } else{
       console.log("nohay")
       alert("Tu saldo disponible para retiro es de "+ (Number(users[i].saldo)-10));
   }
     
     
     
    /*  console.log("Bienvenido "+users[i].user+" a tu cuenta")
     successBox.style.display="flex"// se abre caja con bienvenido user
     userBox.innerText =users[i].user
     userBox.style.textTransform="capitalize"
     consultaSaldo.style.display="none"// se borra el formulario
     menuDepositar.style.display="none"
     menuRetirar.style.display="none" */
        

        return
    }
} 
}

function enteros(onclick) {
  var charCode = (onclick.which) ? onclick.which : onclick.keyCode;
  if (charCode >= 48 && charCode <= 57 || charCode == 8) {
      return true;
  } else {
      return false;
  }
}

//3.Evento
formulario.addEventListener("submit", validar)