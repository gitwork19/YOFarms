//Type your code here

function invokeServiceCall(ServiceId,Postparams,requestType,CallBackEvent,contentType){
  var endpointURL = "https://fbf2f125.ngrok.io/UserManagement/rest/UserService/" + ServiceId; 
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
