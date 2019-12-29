//Type your code here
var httpclient;
var LType = 0; // 0- Admin, 1 - Customer , 2 - Delivery

function onClickAdminLp(){
  frmLogin.flxAdmin.skin = "flxLitBG";
  frmLogin.flxCustomer.skin = "slFbox";
  frmLogin.txtUsername.text = "";
  frmLogin.txtPwd.text = "";
  LType = 0;
  
}

function onClickCustomerLp(){
  frmLogin.flxAdmin.skin = "slFbox";
  frmLogin.flxCustomer.skin = "flxLitBG";
  frmLogin.txtUsername.text = "";
  frmLogin.txtPwd.text = "";
  LType =1;
}


function onClcikLoginProceed(){
  var usrName =  frmLogin.txtUsername.text;
  var passwrd = frmLogin.txtPwd.text;
  var role = "";
  
  if(LType == 0){
    role = "ADMIN";
  }else if(LType == 1){
    role = "USER";
  }else if(LType == 2){
    role = "DELIVERYBOY";
  }
  
  if(usrName == "" || usrName == null || usrName == undefined || passwrd == "" || passwrd == null || passwrd == undefined){
   popErrorScreenShow("Please enter valid userName and Password ! ");
  }else{ 
    var userDetails = {
    "username":usrName,
    "password":passwrd,
     "role": role 
    };
    var userDetailsJ = JSON.stringify(userDetails);
    invokeServiceCall("login", userDetailsJ, "constants.HTTP_METHOD_POST", onClickLoginBtnCallBack, "application/json");
  }
  
}


function onClickLoginBtnCallBack(){
 //alert("donwload call back"  + JSON.stringify(httpclient));
  try 
 {
 if(httpclient.readyState == 4)
 {
 var responseContent = httpclient.response;
 //alert(responseContent + "response rd");
  alert("responseContent" + JSON.stringify(responseContent));
  frmDashboard.show();
 }
 }
catch(err)
 { 
 alert("exception is :: " + err.getMessage()); 
 }
}

function frmLoginPreshow(){
  kony.print("intp preshow");
  frmLogin.lblAdmin.onTouchEnd = onClickAdminLp;
  frmLogin.lblCustomer.onTouchEnd = onClickCustomerLp;
  frmLogin.btnLogin.onClick = onClcikLoginProceed;
   frmLogin.flxAdmin.skin = "flxLitBG";
  frmLogin.flxCustomer.skin = "slFbox";
}