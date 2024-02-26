
const formulario = document.getElementById("inicioSesion");
const userName = document.getElementById("inputUser");

const userPass = document.getElementById("inputPass");

const successBox = document.getElementById("userBox");
const userBox = document.getElementById("box-user");

const consultaSaldo = document.getElementById("userBoxConsulta");
const consultaSaldoBox = document.getElementById("box-user-consulta");

const menuDepositar = document.getElementById("userBoxDeposita");
const menuDepositarBox = document.getElementById("box-user-deposita");

const menuRetirar = document.getElementById("userBoxRetira");
const menuRetirarBox = document.getElementById("box-user-retira");

const newSaldoDeposit = document.getElementById("deposit");
const newSaldoWithdraw = document.getElementById("withdraw");

let users = [
  { user: "luigi", pass: "1234", saldo: "990" },
  { user: "mario", pass: "1234b", saldo: "10" },
  { user: "dk", pass: "1234c", saldo: "500" },
  { user: "bowser", pass: "1234d", saldo: "200" },
]

function validar(e) {
  e.preventDefault();

  for (let i = 0; i < users.length; i++) {

    if (userName.value == users[i].user && userPass.value == users[i].pass) {
      successBox.style.display = "flex";
      switch (userName.value) {
        case "luigi":
          console.log("luigi");
          successBox.style.backgroundColor = "green";
          successBox.style.backgroundImage = "url(./images/luigi.jpg)";
          successBox.style.backgroundSize = "50% 100%";
          successBox.style.backgroundRepeat = "no-repeat";
          successBox.style.backgroundPosition = "left";

          break;

        case "mario":
          console.log("mario");
          successBox.style.backgroundColor = "red";
          successBox.style.backgroundImage = "url(./images/mario.jpg)";
          successBox.style.backgroundSize = "50% 100%";
          successBox.style.backgroundRepeat = "no-repeat";
          successBox.style.backgroundPosition = "left";
          break;

        case "dk":
          console.log("dk");
          successBox.style.backgroundColor = "brown";
          successBox.style.backgroundImage = "url(./images/dk.jpg)";
          successBox.style.backgroundSize = "50% 100%";
          successBox.style.backgroundRepeat = "no-repeat";
          successBox.style.backgroundPosition = "left";
          break;

        case "bowser":
          console.log("bowser");
          successBox.style.backgroundColor = "grey";
          successBox.style.backgroundImage = "url(./images/bowser.jpg)";
          successBox.style.backgroundSize = "50% 100%";
          successBox.style.backgroundRepeat = "no-repeat";
          successBox.style.backgroundPosition = "left";
          break;

      }
      userBox.innerText = users[i].user;
      userBox.style.textTransform = "capitalize";
      formulario.style.display = "none";
      return;
    }
  }
  alert("Credenciales incorrectas ");
}


function consulta() {

  for (let i = 0; i < users.length; i++) {

    if (userName.value == users[i].user && userPass.value == users[i].pass) {
      consultaSaldo.style.display = "flex"
      switch (userName.value) {
        case "luigi":
          console.log("luigi");
          consultaSaldo.style.backgroundColor = "green";
          consultaSaldo.style.backgroundImage = "url(./images/luigi.jpg)";
          consultaSaldo.style.backgroundSize = "50% 100%";
          consultaSaldo.style.backgroundRepeat = "no-repeat";
          consultaSaldo.style.backgroundPosition = "left";

          break;

        case "mario":
          console.log("mario");
          consultaSaldo.style.backgroundColor = "red";
          consultaSaldo.style.backgroundImage = "url(./images/mario.jpg)";
          consultaSaldo.style.backgroundSize = "50% 100%";
          consultaSaldo.style.backgroundRepeat = "no-repeat";
          consultaSaldo.style.backgroundPosition = "left";
          break;

        case "dk":
          console.log("dk");
          consultaSaldo.style.backgroundColor = "brown";
          consultaSaldo.style.backgroundImage = "url(./images/dk.jpg)";
          consultaSaldo.style.backgroundSize = "50% 100%";
          consultaSaldo.style.backgroundRepeat = "no-repeat";
          consultaSaldo.style.backgroundPosition = "left";
          break;

        case "bowser":
          console.log("bowser");
          consultaSaldo.style.backgroundColor = "grey";
          consultaSaldo.style.backgroundImage = "url(./images/bowser.jpg)";
          consultaSaldo.style.backgroundSize = "50% 100%";
          consultaSaldo.style.backgroundRepeat = "no-repeat";
          consultaSaldo.style.backgroundPosition = "left";
          break;

      }
      consultaSaldoBox.innerText = users[i].saldo;
      consultaSaldoBox.textTransform = "capitalize";
      successBox.style.display = "none";
      return;
    }
  }
}

function regresa() {

  for (let i = 0; i < users.length; i++) {

    if (userName.value == users[i].user && userPass.value == users[i].pass) {

      successBox.style.display = "flex";
      switch (userName.value) {
        case "luigi":
          console.log("luigi");
          successBox.style.backgroundColor = "green";
          successBox.style.backgroundImage = "url(./images/luigi.jpg)";
          successBox.style.backgroundSize = "50% 100%";
          successBox.style.backgroundRepeat = "no-repeat";
          successBox.style.backgroundPosition = "left";

          break;

        case "mario":
          console.log("mario");
          successBox.style.backgroundColor = "red";
          successBox.style.backgroundImage = "url(./images/mario.jpg)";
          successBox.style.backgroundSize = "50% 100%";
          successBox.style.backgroundRepeat = "no-repeat";
          successBox.style.backgroundPosition = "left";

          break;

        case "dk":
          console.log("dk");
          successBox.style.backgroundColor = "brown";
          successBox.style.backgroundImage = "url(./images/dk.jpg)";
          successBox.style.backgroundSize = "50% 100%";
          successBox.style.backgroundRepeat = "no-repeat";
          successBox.style.backgroundPosition = "left";

          break;

        case "bowser":
          console.log("bowser");
          successBox.style.backgroundColor = "grey";
          successBox.style.backgroundImage = "url(./images/bowser.jpg)";
          successBox.style.backgroundSize = "50% 100%";
          successBox.style.backgroundRepeat = "no-repeat";
          successBox.style.backgroundPosition = "left";

          break;

      }
      userBox.innerText = users[i].user;
      userBox.style.textTransform = "capitalize";
      consultaSaldo.style.display = "none";
      menuDepositar.style.display = "none";
      menuRetirar.style.display = "none";
      document.getElementById("withdraw").value = "";
      document.getElementById("deposit").value = "";
      return;
    }
  }
}
function goDeposita() {

  for (let i = 0; i < users.length; i++) {

    if (userName.value == users[i].user && userPass.value == users[i].pass) {

      menuDepositar.style.display = "flex";
      switch (userName.value) {
        case "luigi":
          console.log("luigi");
          menuDepositar.style.backgroundColor = "green";
          menuDepositar.style.backgroundImage = "url(./images/luigim.jpg)";
          menuDepositar.style.backgroundSize = "50% 100%";
          menuDepositar.style.backgroundRepeat = "no-repeat";
          menuDepositar.style.backgroundPosition = "left";

          break;

        case "mario":
          console.log("mario");
          menuDepositar.style.backgroundColor = "red";
          menuDepositar.style.backgroundImage = "url(./images/mariom.jpg)";
          menuDepositar.style.backgroundSize = "50% 100%";
          menuDepositar.style.backgroundRepeat = "no-repeat";
          menuDepositar.style.backgroundPosition = "left";
          break;

        case "dk":
          console.log("dk");
          menuDepositar.style.backgroundColor = "brown";
          menuDepositar.style.backgroundImage = "url(./images/dkm.jpg)";
          menuDepositar.style.backgroundSize = "50% 100%";
          menuDepositar.style.backgroundRepeat = "no-repeat";
          menuDepositar.style.backgroundPosition = "left";
          break;

        case "bowser":
          console.log("bowser");
          menuDepositar.style.backgroundColor = "grey";
          menuDepositar.style.backgroundImage = "url(./images/bowserm.jpg)";
          menuDepositar.style.backgroundSize = "50% 100%";
          menuDepositar.style.backgroundRepeat = "no-repeat";
          menuDepositar.style.backgroundPosition = "left";
          break;

      }
      menuDepositarBox.innerText = users[i].saldo;
      menuDepositarBox.style.textTransform = "capitalize";
      successBox.style.display = "none";
      consultaSaldo.style.display = "none";
      menuRetirar.style.display = "none";
      return;
    }
  }
}

function goRetira() {

  for (let i = 0; i < users.length; i++) {

    if (userName.value == users[i].user && userPass.value == users[i].pass) {
      menuRetirar.style.display = "flex";
      switch (userName.value) {
        case "luigi":
          console.log("luigi");
          menuRetirar.style.backgroundColor = "green";
          menuRetirar.style.backgroundImage = "url(./images/luigim.jpg)";
          menuRetirar.style.backgroundSize = "50% 100%";
          menuRetirar.style.backgroundRepeat = "no-repeat";
          menuRetirar.style.backgroundPosition = "left";

          break;

        case "mario":
          console.log("mario");
          menuRetirar.style.backgroundColor = "red";
          menuRetirar.style.backgroundImage = "url(./images/mariom.jpg)";
          menuRetirar.style.backgroundSize = "50% 100%";
          menuRetirar.style.backgroundRepeat = "no-repeat";
          menuRetirar.style.backgroundPosition = "left";
          break;

        case "dk":
          console.log("dk");
          menuRetirar.style.backgroundColor = "brown";
          menuRetirar.style.backgroundImage = "url(./images/dkm.jpg)";
          menuRetirar.style.backgroundSize = "50% 100%";
          menuRetirar.style.backgroundRepeat = "no-repeat";
          menuRetirar.style.backgroundPosition = "left";
          break;

        case "bowser":
          console.log("bowser");
          menuRetirar.style.backgroundColor = "grey";
          menuRetirar.style.backgroundImage = "url(./images/bowserm.jpg)";
          menuRetirar.style.backgroundSize = "50% 100%";
          menuRetirar.style.backgroundRepeat = "no-repeat";
          menuRetirar.style.backgroundPosition = "left";
          break;

      }
      menuRetirarBox.innerText = users[i].saldo;
      menuRetirarBox.style.textTransform = "capitalize";
      successBox.style.display = "none";
      consultaSaldo.style.display = "none";
      menuDepositar.style.display = "none";
      return;
    }
  }
}
function depositar() {

  for (let i = 0; i < users.length; i++) {

    if (userName.value == users[i].user && userPass.value == users[i].pass) {
      const nSD = Number(newSaldoDeposit.value);

      if (nSD + Number(users[i].saldo) <= 990) {
        users[i].saldo = nSD + Number(users[i].saldo);
        document.getElementById("deposit").value = "";
        menuDepositarBox.innerText = users[i].saldo;
        return;
      } else {

        alert("Solo puedes depositar hasta " + (990 - Number(users[i].saldo)));
      }
      return;
    }
  }

}

function retirar() {

  for (let i = 0; i < users.length; i++) {

    if (userName.value == users[i].user && userPass.value == users[i].pass) {
      const nSW = Number(newSaldoWithdraw.value);

      if (Number(users[i].saldo) - nSW >= 10) {
        users[i].saldo = Number(users[i].saldo - nSW);
        document.getElementById("withdraw").value = "";
        menuRetirarBox.innerText = users[i].saldo;
        return;
      } else {
        alert("Tu saldo disponible para retiro es de " + (Number(users[i].saldo) - 10));
      }
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

function aMayusculas(elemento) {
  elemento.value = elemento.value.toUpperCase();
}
formulario.addEventListener("submit", validar);

