//Type your code here
function getCustListFromService(){
   showLoadingIndicator();
  invokeServiceCall("getcustomerdetails", "", constants.HTTP_METHOD_POST, CustListFromServiceCallBack,  "");
}

function CustListFromServiceCallBack(){
   try 
 {
 if(httpclient.readyState == 4)
 {
   kony.print("CustListInventoryCallBack print"  + JSON.stringify(httpclient));
 	var httpRes = httpclient.response;
     var userData = [];
     if(httpRes["status"] == "000" && httpRes["statusMsg"] == "success"){
     var responseContent = httpRes.response;
     kony.print(JSON.stringify(responseContent) + "onventory");
     var resLen= Object.keys(responseContent).length;
     
      for (var key in responseContent) {
      
       kony.print(responseContent[key]);
       var extractedRes = responseContent[key];
       
        
        userData.push({"lblName":extractedRes["firstname"] + extractedRes["lastname"],
                "lblAddr": extractedRes["addline1"] +extractedRes["addline2"] ,
                "lblNumber":extractedRes["mobileno"],
                "btnEdit":{skin:"btnEditBlue"},
                "btnCal":{skin:"btnCal"},
                "btnBill":{skin:"btnPayment"},
                "btnDelete":{skin:"btnDel"},
                "lblPayable":"asdfsd",
                "lblPaidAmt":"asefwef",
                "lblHiddenSubId": extractedRes["subscriptionid"],
                "lblHiddenRs" :extractedRes
                 
                  })
    
     } 
     
      frmCustomerList.segCustList.setData(userData);
      frmCustomerList.show();
     
    }else{
     popErrorScreenShow(kony.i18n.getLocalizedString("i18n.Err"));
   }
 dismissLoadingIndicator();
 }
 }
catch(err)
 { 
 dismissLoadingIndicator();
 alert("exception is :: " + err); 
   
}
} 


function suspendCustomer(subId){
  var today = new Date(); 
  var dd =  today.getDate();
  var mm =  today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

	today = mm + '/' + dd + '/' + yyyy;
  var suspendDet = {
    "subsrid": subId,
    "suspenddate": today//"04-12-21"
    };
    var suspendDetJ = JSON.stringify(suspendDet);
    showLoadingIndicator();
   // frmDashboard.show();
    //dismissLoadingIndicator();
    invokeServiceCall("suspendsubscriptionbyadmin", suspendDetJ, constants.HTTP_METHOD_POST, suspendCustomerCallBack, "application/x-www-form-urlencoded");
 
}



function suspendCustomerCallBack(subId){
     try 
 {
 if(httpclient.readyState == 4)
 {
   kony.print("suspendCustomerCallBack print"  + JSON.stringify(httpclient));
 	var httpRes = httpclient.response;
     var userData = [];
     if(httpRes["status"] == "000" && httpRes["statusMsg"] == "success"){
     var responseContent = httpRes.response;
     kony.print(JSON.stringify(responseContent) + "onventory");
     alert("Customer suspended"); //TO-DO need to create new popup
     
    }else{
     popErrorScreenShow(kony.i18n.getLocalizedString("i18n.Err"));
   }
 dismissLoadingIndicator();
 }
 }
catch(err)
 { 
 dismissLoadingIndicator();
 alert("exception is :: " + err); 
   
}
}


function showCustProfileFromList(segRes){
  
  frmMyprofile.txtName.text  = segRes["firstname"] + segRes["lastname"];
  frmMyprofile.txtAddress.text  = segRes["addline1"] + segRes["addline2"];
  frmMyprofile.txtPhone.text  = segRes["mobileno"];
  frmMyprofile.txtEmail.text  = segRes["emailid"];
  frmMyprofile.flxSubscription.onTouchStart = function(){showManageSubForm(segRes["productdetials"])};
  frmMyprofile.txtName.setEnabled(false);
  frmMyprofile.txtAddress.setEnabled(false);
  frmMyprofile.txtPhone.setEnabled(false);
  frmMyprofile.txtEmail.setEnabled(false);
  frmMyprofile.txtStatus.setEnabled(false);
  frmMyprofile.txtDelivery.setEnabled(false);
  frmMyprofile.show();
}

function showManageSubForm(prodDet){
  kony.print(JSON.stringify(prodDet) + "prodDet");
  var prodNameList = pushProdName();
  var currProdList = [];
  frmManageSubscriptions.listbProdTypeAdd.masterData = prodNameList;
  for(var i=0;i<prodDet;i++){
    currProdList.push({
      
    })
  }
  frmManageSubscriptions.segMngSub.setData(currProdList);
  frmManageSubscriptions.show();
}

function pushProdName(){
  var prodList = [];
  for(var i=0;i<gblProdList.length;i++){
    var keyname = "prodType"+i
    prodList.push({
      keyname :gblProdList[i]["name"]
    })
  }
  return prodList;
}