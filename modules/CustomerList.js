//Type your code here
gblCustList = [];
function getCustListFromService(){
    showLoadingIndicator();
    invokeServiceCall("getcustomerdetails", "", constants.HTTP_METHOD_POST, CustListFromServiceCallBack,  "");
//gblCustList = frmCustomerList.segCustList.data;
 // frmCustomerList.show(); //comment this
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
      gblCustList  = userData;
      frmCustomerList.segCustList.setData(userData);
      frmCustomerList.headers[0].lblHeader.text = "Customer List";       
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
  frmMyprofile.headers[0].lblHeader.text = "Customer Profile";
  frmMyprofile.show();
}

function showManageSubForm(prodDet){
  kony.print(JSON.stringify(prodDet) + "prodDet");
  var prodNameList = pushProdName();
  var currProdList = [];
   kony.print(JSON.stringify(prodNameList) + "prodNameList");
  frmManageSubscriptions.listbProdTypeAdd.masterData = prodNameList;
  for(var i=0;i<prodDet.length;i++){
   var pName = getProductNameFrmId(prodDet[i]["productid"]);
   var pUnit = getProductUnitFrmId(prodDet[i]["productid"]);
   var suspendDate = prodDet[i]["suspenddate"];
    if(suspendDate != "null" && suspendDate != null && suspendDate != "" && suspendDate != undefined){
      kony.print("do nothing");
    }else{
      suspendDate = "NA";
    }
    var lblSunFrmSer = prodDet[i]["quantity"] ,lblMonFrmSer = prodDet[i]["quantity"],lblTueFrmSer = prodDet[i]["quantity"],lblWedFrmSer = prodDet[i]["quantity"],lblThuFrmSer = prodDet[i]["quantity"],lblFriFrmSer = prodDet[i]["quantity"],lblSatFrmSer = prodDet[i]["quantity"]  ;
    if(prodDet[i]["frequency"] == "0"){
      kony.print("do nothing");
    }else{
      lblSunFrmSer = "0";
      lblMonFrmSer = "1";
      lblTueFrmSer = "2";
      lblWedFrmSer = "3";
      lblThuFrmSer = "4";
      lblFriFrmSer = "3";
      lblSatFrmSer = "2";
    }
    
    currProdList.push({
      "lblProductName":pName,
      "imgDairyfarm":"profile.png",
      "lblFrom":"FROM DATE",
      "lblTO":"END DATE",
      "lblUnits":pUnit,
      "btnEditSub": {skin:"btnEdit"},
      "lblfrmDate":prodDet[i]["startdate"],
      "lblToDate": suspendDate,
      "lblsun": "SUN",
      "lblMon": "MON",
      "lbltue": "TUE",
      "lblwed": "WED",
      "lblthr": "THR",
      "lblfri": "FRI",
      "lblsat": "SAT",
      "lblSunVal": lblSunFrmSer,
      "lblMonVal": lblMonFrmSer,
      "lblTueVal": lblTueFrmSer,
      "lblWedVal": lblWedFrmSer,
      "lblThrVal": lblThuFrmSer,
      "lblFriVal": lblFriFrmSer,
      "lblSatVal": lblSatFrmSer
    })
  }
  frmManageSubscriptions.listbProdTypeAdd.onSelection = function (){
    alert(frmManageSubscriptions.listbProdTypeAdd.selectedKeyValue)
   var prodUnitMp = pushProdUnit(frmManageSubscriptions.listbProdTypeAdd.selectedKeyValue[1]);
    frmManageSubscriptions.listBoxProdunit.masterData = prodUnitMp
  };
  frmManageSubscriptions.segMngSub.setData(currProdList);
  frmManageSubscriptions.show();
}

function pushProdName(){
  var prodList = [];
  for(var i=0;i<gblProdList.length;i++){
    var keyname = "prodType"+i
    var keyList = [keyname,gblProdList[i]["name"],gblProdList[i]["productid"]]
    prodList.push(keyList)
  }
  return prodList;
}



function pushProdUnit(selProd){
  alert("selProd" + selProd)
  var prodList = [];
  for(var i=0;i<gblProdList.length;i++){
    var keyname = "prodUnit"+i
   if (gblProdList[i]["name"] == selProd){
   alert("going into if" + gblProdList[i]["unit"])
     var keyList = [keyname,gblProdList[i]["unit"]]
     prodList.push(keyList)
     }
  }
  return prodList;
}