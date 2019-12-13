//Type your code here
function onClickAdminLp(){
  frmLogin.flxAdmin.skin = "flxLitBG";
  frmLogin.flxCustomer.skin = "slFbox";
  
}

function onClickCustomerLp(){
  alert("onclikcCust")
  frmLogin.flxAdmin.skin = "slFbox";
  frmLogin.flxCustomer.skin = "flxLitBG";
}

function onClickLoginBtn(){
  frmDashboard.show();
}

function frmLoginPreshow(){
  kony.print("intp preshow");
  frmLogin.lblAdmin.onTouchEnd = onClickAdminLp;
  frmLogin.lblCustomer.onTouchEnd = onClickCustomerLp;
  frmLogin.btnLogin.onClick = onClickLoginBtn;
   frmLogin.flxAdmin.skin = "flxLitBG";
  frmLogin.flxCustomer.skin = "slFbox";
}