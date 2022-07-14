function CalcularSuma(num1, num2){
    return num1+num2;
}
function CalcularResta(num1, num2){
    return num1-num2;
}
function CalcularMultiplicacion(num1, num2){
    return num1*num2;
}
function CalcularDivision(num1, num2){
    return num1/num2;
}

function Calcular(){

    txtN1=document.getElementById("txtN1");
    txtN2=document.getElementById("txtN2");
    txtRes=document.getElementById("txtRes");
    txtMul=document.getElementById("txtMul");
    txtDiv=document.getElementById("txtDiv");


    if (txtN1.value==""){
        alert("Ingresa el numero 1");
        txtN1.focus();
    }else if (txtN2.value==""){
        alert("Ingresa el numero 2");
        txtN2.focus();
    }else{
        var n1=0, n2=0, sum=0, res=0, mul=0, div=0;

        n1=parseFloat(txtN1.value);
        n2=parseFloat(txtN2.value);

        sum=CalcularSuma(n1,n2);
        res=CalcularResta(n1,n2);
        mul=CalcularMultiplicacion(n1,n2);
        div=CalcularDivision(n1,n2);

        txtSum.value=sum;
        txtRes.value=res;
        txtMul.value=mul;
        txtDiv.value=div;
    }
}

function CalcularSueldoBasico(h,c){
    return h*c;
}
function CalcularBonificacion(s){
    return s*0.09;
}
function CalcularDescuento(s){
    return s*0.06;
}
function CalcularSueldoFinal(s,b,d){
    return s + b - d;
}

function CalcularSueldo() {

    txtNh=document.getElementById("txtNh");
    txtCh=document.getElementById("txtCh")
    txtSb=document.getElementById("txtSb")
    txtBon=document.getElementById("txtBon")
    txtDes=document.getElementById("txtDes")
    txtSf=document.getElementById("txtSf")
    if(txtNh.value==""){
        alert("Ingresa el numero de horas");
    }else if(txtCh.value==""){
        alert("Ingresa el costo por hora");
        txtCh.focus();
    }else{
        var nh=0, ch=0, sb=0, bon=0, des=0, sf=0;

        nh=parseFloat(txtNh.value);
        ch=parseFloat(txtCh.value);

        sb=CalcularSueldoBasico(nh,ch);
        bon=CalcularBonificacion(sb);
        des=CalcularDescuento(sb);
        sf=CalcularSueldoFinal(sb,bon,des);

        txtSb.value = sb;
        txtBon.value = bon;
        txtDes.value = des;
        txtSf.value = sf;
    }
}
function EvaluaEdad(e){
    var men="";
    if (e>=18){
        men="Eres mayor de edad";
    }else{
        men="Eres menor de edad";
    }
    return men;
}
function MostrarMensaje(){
txtEdad=document.getElementById("txtEdad");
txtMen=document.getElementById("txtMen");

if(txtEdad.value==""){
    alert("Ingresa la edad:");
    txtEdad.focus();
}else{
    var edad=0;
    men = "";
    edad = parseInt(txtEdad.value);
    men = EvaluaEdad(edad);
    txtMen.value = men;
}
}

function CalcularBon(c,s){
var b=0;
if(c=="a"){
    b=s*0.03;
}else if(c=="b"){
    b=s*0.05;
}else if(c=="c"){
    b=s*0.07;
}else if(c=="d"){
    b=s*0.09;
}else{
    b=0;
}
return b;
}
function CalcularDes(s){
    return s*0.05;
}
function CalcularSueF(s,b,d){
    return s + b - d;
}

//Funciones

function CalcularBasicoEmpleado(n,c){
    return n*c
}
function CalcularBonificacionEmpleado(ct, s){
    if(ct=="a"){
        b=s*0.03;
    }else if(ct=="b"){
        b=s*0.05;
    }else if(ct=="c"){
        b=s*0.07;
    }else if(ct=="d"){
        b=s*0.09;
    }else{
        b=0;
    }
    return b;
}
function CalcularDescuentoEmpleado(s){
    return s*0.05;
}
function CalcularFinalEmpleado(s,b,d){
    return s+b-d;
}

function CalcularSueldoEmpleado(){
    txtNh=document.getElementById("txtNh")
    cboArea=document.getElementById("cboArea")
    txtCh=document.getElementById("txtCh")
    txtSb=document.getElementById("txtSb")
    rbA = document.getElementById("rbA");
    rbB = document.getElementById("rbB");
    rbC = document.getElementById("rbC");
    rbD = document.getElementById("rbD");
    txtBon = document.getElementById("txtBon");
    chkEst = document.getElementById("chkEst");
    txtDes = document.getElementById("txtDes");
    txtSf = document.getElementById("txtSf");
    if (txtNh.value==""){
        alert("Ingrese el numero de horas");
        txtNh.focus();
    }else if (cboArea.selectedIndex==0){
        alert("Seleccione una area");
        cboArea.focus();
    }else if(
        rbA.checked== false &&
        rbB.checked== false &&
        rbC.checked== false &&
        rbD.checked== false
    ){
        alert("Selecciona una categoria");
        rbA.focus();
    }else{
        var nh=0, ch=0, sb=0, bon=0, des=0, sf=0;
        nh=parseFloat(txtNh.value);
        ch=parseFloat(cboArea.value)
    }
    sb=CalcularBasicoEmpleado(nh, ch)
    if(rbA.checked==true){
        bon=CalcularBonificacionEmpleado("a",sb);
    }else if (rbB.checked==true){
        bon=CalcularBonificacionEmpleado("b",sb);
    }else if(rbC.checked==true){
        bon=CalcularBonificacionEmpleado("c",sb);
    }else if (rbD.checked==true){
        bon=CalcularBonificacionEmpleado("d", sb);
    }else{
        bon = 0;
    }

    if (chkEst.checked==true){
        des=CalcularDescuentoEmpleado(sb);
    }else{
        des=0
    }

    sf = CalcularFinalEmpleado(sb, bon, des);
    txtCh.value = ch;
    txtSb.value = sb;
    txtBon.value = bon;
    txtDes.value = des;
    txtSf.value = sf;
}



