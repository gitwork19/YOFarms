//Type your code here
function inventorySelBoy(){
    frmInventoryReport.flxSegDeliveryBoy.setVisibility(true); 
    frmInventoryReport.segBoy.onRowClick = selectBoyForInvetory;
}

function showInvetoryForm(){
  loadProdListInvetory();
  loadCustListInventory();
 // frmInventoryReport.show();
}

function selectBoyForInvetory(){
  var array = frmInventoryReport.segBoy.selectedRowItems;
  //alert(array);
  //kony.print(array);
  frmInventoryReport.tbxDeliveryBoy.text=array[0].lblBoyName;
  frmInventoryReport.flxSegDeliveryBoy.setVisibility(false);
}

function loadCustListInventory(){
 showLoadingIndicator();
  invokeServiceCall("getinventory", "", constants.HTTP_METHOD_POST, CustListInventoryCallBack,  "");
  
 /* var fianlData = [ {
     "lblName":"Ravindra A 103,Balaji Towers,Balaji Park Town,Nizampet",
    "lblCustProduct":"Desi Cow Milk",
    "lblCustQuantity":"2",
    "lblNotification":"L",
    "flxLineSeperator":{skin:"flxbgGrey"}
    
     }, {
    "lblName":"Chandra Sekhar 402,F block,Bhavyas Anandam,Nizampet",
    "lblCustProduct":"Natural Buffalo Milk",
    "lblCustQuantity":"3",
    "lblNotification":"A",
     "flxLineSeperator":{skin:"flxbgGrey"}
   
     }, {
    "lblName":"Malli Babu M, 102,Road no 9-2,SaiRam Towers,Bandari Layout,Nizampet",
    "lblCustProduct":"Paneer",
    "lblCustQuantity":"0",
    "lblNotification":"-",
     "flxLineSeperator":{skin:"flxbgGrey"}
    
     },{
     "lblName":"Ravindra A 103,Balaji Towers,Balaji Park Town,Nizampet",
    "lblCustProduct":"Desi Cow Milk",
    "lblCustQuantity":"2",
    "lblNotification":"L",
      "flxLineSeperator":{skin:"slFbox"}   
    
     }, {
    "lblName":"Chandra Sekhar 402,F block,Bhavyas Anandam,Nizampet",
    "lblCustProduct":"Natural Buffalo Milk",
    "lblCustQuantity":"3",
    "lblNotification":"A",
     "flxLineSeperator":{skin:"slFbox"}
   
     }, {
    "lblName":"Malli Babu M, 102,Road no 9-2,SaiRam Towers,Bandari Layout,Nizampet",
    "lblCustProduct":"Paneer",
    "lblCustQuantity":"0",
    "lblNotification":"-",
     "flxLineSeperator":{skin:"flxbgGrey"}
    
     },{
     "lblName":"Ravindra A 103,Balaji Towers,Balaji Park Town,Nizampet",
    "lblCustProduct":"Desi Cow Milk",
    "lblCustQuantity":"2",
    "lblNotification":"L",
     "flxLineSeperator":{skin:"flxbgGrey"}
    
     }, {
    "lblName":"Chandra Sekhar 402,F block,Bhavyas Anandam,Nizampet",
    "lblCustProduct":"Natural Buffalo Milk",
    "lblCustQuantity":"3",
    "lblNotification":"A",
    "flxLineSeperator":{skin:"flxbgGrey"}
   
     }, {
    "lblName":"Malli Babu M, 102,Road no 9-2,SaiRam Towers,Bandari Layout,Nizampet",
    "lblCustProduct":"Paneer",
    "lblCustQuantity":"0",
    "lblNotification":"-",
    "flxLineSeperator":{skin:"flxbgGrey"}
     }];
  //for(i=0;i<)

  frmInventoryReport.segCustInventory.setData(fianlData);
  */
}


function CustListInventoryCallBack(){
  try 
 {
 if(httpclient.readyState == 4)
 {
   kony.print("CustListInventoryCallBack print"  + JSON.stringify(httpclient));
 	var httpRes = httpclient.response;
     
   var userData = [];
   var prodDetails;
   if(httpRes["status"] == "000" && httpRes["statusMsg"] == "success"){
     var responseContent = httpRes.response;
     kony.print(JSON.stringify(responseContent) + "onventory");
     var resLen= Object.keys(responseContent).length;
     
     
      for (var key in responseContent) {
      
       kony.print(responseContent[key]);
       var extractedRes = responseContent[key];
       var prodDetArr = [];
       prodDetails = extractedRes["productdetials"];
       var productName = "";
        kony.print("prodDetails" + JSON.stringify(prodDetails) + prodDetails.length);
        
        for(var j=0;j< prodDetails.length;j++){
           var userNameVisibility;
		   var skinForLine;
			if(j == prodDetails.length-1){
				skinForLine = {skin:"flxbgGrey"};
			}
			else if(prodDetails.length > 1){
                skinForLine = {skin:"slFbox"};
              }else{
               skinForLine = {skin:"flxbgGrey"};
              }
			if(j == 0){
               userNameVisibility = {"text": extractedRes["firstname"] + extractedRes["addline1"] + extractedRes["addline2"],"skin":"sknLblDescription"};
             }else{
              	 userNameVisibility = {"text": extractedRes["firstname"] + extractedRes["addline1"] + extractedRes["addline2"],"skin":"txtWhite"};
				 
             }
          		for(var k=0;k<gblProdList.length;k++){
                  if(gblProdList[k]["productid"] == parseInt(prodDetails[j]["productid"])){
                    productName = gblProdList[k]["name"];
                  }
                }
          
          	 userData.push({"lblName":userNameVisibility,
                "lblCustProduct": productName,
                "lblCustQuantity":prodDetails[j]["quantity"],
                "lblNotification":"A",
                "flxLineSeperator":skinForLine})
         }
    
     } 
     
      frmInventoryReport.segCustInventory.setData(userData);
      frmInventoryReport.show();
     
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



function loadProdListInvetory(){
  var fianlData = [ {
     "lblDairy":"Jeevana",
    "lblProduct":"Desi Cow Milk",
    "lblUnit":"500ml",
    "lblQuantity":"1"
    
     }, {
    "lblDairy":"Jeevana",
    "lblProduct":"Natural Buffalo Milk",
    "lblUnit":"500ml",
    "lblQuantity":"48"
   
     }, {
    "lblDairy":"-",
    "lblProduct":"-",
    "lblUnit":"Total",
    "lblQuantity":"49"
    
     }];
  //for(i=0;i<)

  frmInventoryReport.segProdList.setData(fianlData);
}

