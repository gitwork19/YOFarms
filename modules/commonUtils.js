//Type your code here

function invokeServiceCall(ServiceId,Postparams,requestType,CallBackEvent,contentType){
  var endpointURL = "https://22250ca5.ngrok.io/UserManagement/rest/UserService/" + ServiceId; 
  kony.print("ServiceId" + requestType + endpointURL + Postparams  + contentType)
  httpclient = new kony.net.HttpRequest();
  httpclient.onReadyStateChange = CallBackEvent; 
  httpclient.open(requestType,endpointURL); // requestType - constants.HTTP_METHOD_POST
  if(contentType != "" && contentType != null ){
 	httpclient.setRequestHeader("Content-Type", contentType); // contentType - application/json , application/x-www-form-urlencoded
 }
  if(Postparams != ""){
  httpclient.send(Postparams);
  }else{
   httpclient.send();
  }
}


function setDefaultTxtValue(wigArr){
  
  for(i=0;i<wigArr.length;i++){
    wigArr[i].text = "0";
  }
}


function popErrorScreenShow(errorContent){
  PopupErrorScreen.lblHeading.text = "ERROR";
  PopupErrorScreen.lblError.text = errorContent;
  PopupErrorScreen.btnOK.onClick = function (){
    PopupErrorScreen.dismiss();
  };
  PopupErrorScreen.show();
} 

function popSucessScreenShow(hdng,content,okFunction){
  PopupErrorScreen.lblHeading.text = hdng;
  PopupErrorScreen.lblError.text = content;
  PopupErrorScreen.btnOK.onClick = okFunction;
  PopupErrorScreen.show();
} 

function showLoadingIndicator(){
  kony.application.showLoadingScreen("", "", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
}

function dismissLoadingIndicator(){
  kony.application.dismissLoadingScreen();
}

function appPostInit(){
  var strtForm = kony.store.getItem("startupform"); 
  if(strtForm != null && strtForm != undefined && strtForm!= ""){
    return frmDashboard;
  }else{
    return frmLogin;
  }
  
}

function selectSignedIn(){
  if(frmLogin.chkBxSignIn.selectedKeys != null){
    kony.store.setItem("startupform", frmLogin.txtUsername.text);
  }else{
    kony.store.removeItem("startupform");
  }
  
}



function getSearchResult(mData, searchValue) {
  var sData = [];
  for (var i = 0; i < mData.length; i++) {

    if (mData[i] !== null || mData[i] !== undefined) {
      var txt1 = "";
      if (mData[i].lblName !== null && mData[i].lblName !== undefined) {

        txt1 = mData[i].lblName;
		txt1 = txt1.toLowerCase();
      }

      var pattern = searchValue;
      pattern = pattern.toLowerCase();

      if (txt1.indexOf(pattern.trim()) == 0) {
        sData.push(mData[i]);
        var dataLength = sData.length - 1;
      }
    }
  }

  return sData;
}


function hdrBackClick(){
  var currentForm = kony.application.getCurrentForm();

  switch (currentForm.id){
    case "frmCustomerList":
      frmDashboard.show();
      break;
    case "frmMyprofile":
       frmCustomerList.show();
      break;
    case "frmManageSubscriptions":
      frmMyprofile.show();
      frmManageSubscriptions.destroy();
      break;
    case "frmCustomerCalendar":
       frmCustomerList.show();
      break;
    default:
       frmDashboard.show();
       break;
  }
  

}


function getProductNameFrmId(prodId){
  var productName;
  for(var k=0;k<gblProdList.length;k++){
                  if(gblProdList[k]["productid"] == parseInt(prodId)){
                    productName = gblProdList[k]["name"];
                  }
   }
  return productName;
}


function getIdFrmProductName(prodName){
  var producID;
  for(var k=0;k<gblProdList.length;k++){
                  if(gblProdList[k]["name"] == prodName){
                    producID = gblProdList[k]["productid"];
                  }
   }
  return producID;
}

function getProductUnitFrmId(prodId){
  var productUnit;
  for(var k=0;k<gblProdList.length;k++){
                  if(gblProdList[k]["productid"] == parseInt(prodId)){
                    productUnit = gblProdList[k]["unit"];
                  }
   }
  return productUnit;
}

function DateFormatddmmyy(Date){
  var finalDate = "";
  var dateVal = Date.split("/");
  finalDate = dateVal[0]+"-"+dateVal[1]+"-"+dateVal[2].substring(2,4);
  kony.print("finalDate>>"+finalDate);
  return finalDate;
}