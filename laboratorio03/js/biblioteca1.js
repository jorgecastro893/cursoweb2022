//funcion para calcular la bonificacion
function CalcularBonificacion(c, s) {
    var b = 0;
    if (c == "a") {
      b = s * 0.03;
    } else if (c == "b") {
      b = s * 0.05;
    } else if (c == "c") {
      b = s * 0.07;
    } else if (c == "d") {
      b = s * 0.09;
    } else {
    b = 0;
    }
    return b;
}
function CalcularDescuento(s) {
    return s * 0.05;
}
function CalcularSueldoF(s, b, d) {
    return s + b - d;
}
function CalcularSueldoFinal() {
    //declarando los controles
    txtSb = document.getElementById("txtSb");
    rbA = document.getElementById("rbA");
    rbB = document.getElementById("rbB");
    rbC = document.getElementById("rbC");
    rbD = document.getElementById("rbD");
    txtBon = document.getElementById("txtBon");
    chkTar = document.getElementById("chkTar");
    txtDes = document.getElementById("txtDes");
    txtSf = document.getElementById("txtSf");
    if (txtSb.value == "") {
        alert("Ingrese el sueldo basico");
    } else if (
        rbA.checked == false &&
        rbB.checked == false &&
        rbC.checked == false &&
        rbD.checked == false
    ) {
        alert("Seleccione una categoria");
        rbA.focus();
    } else {
    var sb = 0,
        bon = 0,
        des = 0,
        sf = 0;
    sb = parseFloat(txtSb.value);
    if (rbA.checked == true) {
        bon = CalcularBonificacion("a", sb);
    } else if (rbB.checked == true) {
        bon = CalcularBonificacion("b", sb);
    } else if (rbC.checked == true) {
        bon = CalcularBonificacion("c", sb);
    } else if (rbD.checked == true) {
        bon = CalcularBonificacion("d", sb);
    } else {
        bon = 0;
    }
    if (chkTar.checked == true) {
        des = CalcularDescuento(sb);
    } else {
        des = 0;
    }
    sf = CalcularSueldoF(sb, bon, des);
      //mostrando resultados
    txtBon.value = bon;
    txtDes.value = des;
    txtSf.value = sf;
    }
}