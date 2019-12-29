//Type your code here

function invokeServiceCall(ServiceId,Postparams,requestType,CallBackEvent,contentType){
  var endpointURL = "https://1ae655de.ngrok.io/UserManagement/rest/UserService/" + ServiceId; 
  kony.print("ServiceId" + requestType + endpointURL + Postparams +CallBackEvent + contentType)
  httpclient = new kony.net.HttpRequest();
  httpclient.onReadyStateChange = CallBackEvent; 
  httpclient.open(constants.HTTP_METHOD_POST,endpointURL); // requestType - constants.HTTP_METHOD_POST
  httpclient.setRequestHeader("Content-Type", contentType); // contentType - application/json , application/x-www-form-urlencoded
  httpclient.send(Postparams);
  
}


function popErrorScreenShow(errorContent){
  PopupErrorScreen.lblHeading.text = "ERROR";
  PopupErrorScreen.lblError.text = errorContent;
  PopupErrorScreen.btnOK.onClick = function (){
    PopupErrorScreen.dismiss();
  };
  PopupErrorScreen.show();
} 
