//Type your code here
var httpclient;
var LType = 0; // 0- Admin, 1 - Customer , 2 - Delivery

function onClickAdminLp(){
  frmLogin.flxAdmin.skin = "flxLitBG";
  frmLogin.flxCustomer.skin = "slFbox";
  frmLogin.flxDelBoy.skin = "slFbox";
  frmLogin.txtUsername.text = "";
  frmLogin.txtPwd.text = "";
  LType = 0;
  
}

function onClickCustomerLp(){
  frmLogin.flxAdmin.skin = "slFbox";
  frmLogin.flxCustomer.skin = "flxLitBG";
  frmLogin.flxDelBoy.skin = "slFbox";
  frmLogin.txtUsername.text = "";
  frmLogin.txtPwd.text = "";
  LType =1;
}

function onClickDelBoyLp(){
  frmLogin.flxAdmin.skin = "slFbox";
  frmLogin.flxCustomer.skin = "slFbox";
  frmLogin.flxDelBoy.skin = "flxLitBG";
  frmLogin.txtUsername.text = "";
  frmLogin.txtPwd.text = "";
  LType =2;
}

function showHidePwd(){
  if(frmLogin.txtPwd.secureTextEntry == true){
    frmLogin.txtPwd.secureTextEntry = false;
  }else{
    frmLogin.txtPwd.secureTextEntry = true;
  }
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
    showLoadingIndicator();
    frmDashboard.show();
    dismissLoadingIndicator();
   // invokeServiceCall("login", userDetailsJ, constants.HTTP_METHOD_POST, onClickLoginBtnCallBack, "application/json");
  }
  
}


function onClickLoginBtnCallBack(){

  try 
 {
 if(httpclient.readyState == 4)
 {
   kony.print("donwload call back"  + JSON.stringify(httpclient));
 var responseContent = httpclient.response;
   if(responseContent["status"] == "000" && responseContent["statusMsg"] == "success"){
	  frmDashboard.show();
   }else if(responseContent["status"] == "003" && responseContent["statusMsg"] == "Invalid UserId/Password"){
     popErrorScreenShow("Please enter valid userName and Password ! ");
   }else{
     popErrorScreenShow(kony.i18n.getLocalizedString("i18n.Err"));
   }
 dismissLoadingIndicator();
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
  frmLogin.lblDeliveryBoy.onTouchEnd = onClickDelBoyLp;
  frmLogin.btnLogin.onClick = onClcikLoginProceed;
  frmLogin.btnEye.onClick = showHidePwd;
   frmLogin.flxAdmin.skin = "flxLitBG";
  frmLogin.flxCustomer.skin = "slFbox";
  frmLogin.flxDelBoy.skin = "slFbox";
  frmLogin.chkBxSignIn.onSelection = selectSignedIn;
}