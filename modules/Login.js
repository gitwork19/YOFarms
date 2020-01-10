//Type your code here
var httpclient;
var LType = 0; // 0- Admin, 1 - Customer , 2 - Delivery
var gblProdList;
var gblDeliveryProdList;

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
   // frmDashboard.show();
    //dismissLoadingIndicator();
    invokeServiceCall("login", userDetailsJ, constants.HTTP_METHOD_POST, onClickLoginBtnCallBack, "application/json");
  }
  
}


function onClickLoginBtnCallBack(){

  try 
 {
 if(httpclient.readyState == 4)
 {
   kony.print("donwload call back"  + JSON.stringify(httpclient.response));
 var httpRes = httpclient.response;
   
   if(httpRes["status"] == "000" && httpRes["statusMsg"] == "success"){
     var responseContent = httpRes.response;
	  frmDashboard.donutchart1.chartData={"data": [{
            "colorCode": "#e7ae1f",
            "label": "",
            "value": responseContent["PAYMENTDETAILS"]["paidcust"]
        },{
            "colorCode": "#777777",
            "label": "",
            "value": responseContent["PAYMENTDETAILS"]["duecust"]
        },]};
 frmDashboard.donutchart1.enableStaticPreview = true;
  frmDashboard.donutchart1.enableLegend = false;
  frmDashboard.donutchart1.legendFontColor = "#000000";

 frmDashboard.donutchart1.legendFontSize = "8";
  
   frmDashboard.donutchart2.chartData= {"data": [{
            "colorCode": "#029372",
            "label": "",
            "value": responseContent["PAYMENTDETAILS"]["paidamt"]
        },{
            "colorCode": "#777777",
            "label": "",
            "value": responseContent["PAYMENTDETAILS"]["dueamt"]
        }],};
  
  frmDashboard.donutchart2.enableStaticPreview = true;
  frmDashboard.donutchart2.enableLegend = false;
  frmDashboard.donutchart2.legendFontColor = "#000000";
  frmDashboard.donutchart2.legendFontSize = "8";
  frmDashboard.btnTotalCust.text = responseContent["TOTALCUST"].toString();
  frmDashboard.btnPaidCustomer.text = responseContent["PAYMENTDETAILS"]["paidcust"];
  frmDashboard.btnDueCustomer.text = responseContent["PAYMENTDETAILS"]["duecust"];
  gblProdList = responseContent["PRODUCTLIST"];
  gblDeliveryProdList =  responseContent["PRODUCTDELIVERYLIST"];  
   showProdDeliListDashboard("mor");  
     frmDashboard.show();
   }else if(httpRes["status"] == "003" && httpRes["statusMsg"] == "Invalid UserId/Password"){
     popErrorScreenShow("Please enter valid userName and Password ! ");
   }else{
     popErrorScreenShow(kony.i18n.getLocalizedString("i18n.Err"));
   }
 dismissLoadingIndicator();
 }
 }
catch(err)
 { 
 alert("exception is :: " + err); 
 }
}


function showProdDeliListDashboard(selectedKey){
  var finalSegDate = [];
  var productName = "";
  frmDashboard.segProdDelCount.removeAll();
  for(var i=0;i<gblDeliveryProdList.length;i++){
    		for(var k=0;k<gblProdList.length;k++){
                  if(gblProdList[k]["productid"] == gblDeliveryProdList[i]["productid"]){
                    productName = gblProdList[k]["name"];
                  }
                }
       if(selectedKey == "mor"){
    		if(gblDeliveryProdList[i]["prefferedtime"] == "MORNING"){
                finalSegDate.push({
                "lblProdName":productName,
                "btnCount":gblDeliveryProdList[i]["quantity"].toString()
              })
            }
       }else{ // selected key evening
         if(gblDeliveryProdList[i]["prefferedtime"] == "EVENING"){
              finalSegDate.push({
                "lblProdName": productName,
                "btnCount":gblDeliveryProdList[i]["quantity"]
              })
            }
       }
    
  	}
  frmDashboard.segProdDelCount.setData(finalSegDate);
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