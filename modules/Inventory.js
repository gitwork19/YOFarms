//Type your code here
function inventorySelBoy(){
    frmInventoryReport.flxSegDeliveryBoy.setVisibility(true); 
    frmInventoryReport.segBoy.onRowClick = selectBoyForInvetory;
}

function showInvetoryForm(){
  loadProdListInvetory();
  loadCustListInventory();
  frmInventoryReport.show();
}

function selectBoyForInvetory(){
  var array = frmInventoryReport.segBoy.selectedRowItems;
  //alert(array);
  //kony.print(array);
  frmInventoryReport.tbxDeliveryBoy.text=array[0].lblBoyName;
  frmInventoryReport.flxSegDeliveryBoy.setVisibility(false);
}

function loadCustListInventory(){
  var fianlData = [ {
     "lblName":"Ravindra A 103,Balaji Towers,Balaji Park Town,Nizampet",
    "lblCustProduct":"Desi Cow Milk",
    "lblCustQuantity":"2",
    "lblNotification":"L"
    
     }, {
    "lblName":"Chandra Sekhar 402,F block,Bhavyas Anandam,Nizampet",
    "lblCustProduct":"Natural Buffalo Milk",
    "lblCustQuantity":"3",
    "lblNotification":"A"
   
     }, {
    "lblName":"Malli Babu M, 102,Road no 9-2,SaiRam Towers,Bandari Layout,Nizampet",
    "lblCustProduct":"Paneer",
    "lblCustQuantity":"0",
    "lblNotification":"-"
    
     },{
     "lblName":"Ravindra A 103,Balaji Towers,Balaji Park Town,Nizampet",
    "lblCustProduct":"Desi Cow Milk",
    "lblCustQuantity":"2",
    "lblNotification":"L"
    
     }, {
    "lblName":"Chandra Sekhar 402,F block,Bhavyas Anandam,Nizampet",
    "lblCustProduct":"Natural Buffalo Milk",
    "lblCustQuantity":"3",
    "lblNotification":"A"
   
     }, {
    "lblName":"Malli Babu M, 102,Road no 9-2,SaiRam Towers,Bandari Layout,Nizampet",
    "lblCustProduct":"Paneer",
    "lblCustQuantity":"0",
    "lblNotification":"-"
    
     },{
     "lblName":"Ravindra A 103,Balaji Towers,Balaji Park Town,Nizampet",
    "lblCustProduct":"Desi Cow Milk",
    "lblCustQuantity":"2",
    "lblNotification":"L"
    
     }, {
    "lblName":"Chandra Sekhar 402,F block,Bhavyas Anandam,Nizampet",
    "lblCustProduct":"Natural Buffalo Milk",
    "lblCustQuantity":"3",
    "lblNotification":"A"
   
     }, {
    "lblName":"Malli Babu M, 102,Road no 9-2,SaiRam Towers,Bandari Layout,Nizampet",
    "lblCustProduct":"Paneer",
    "lblCustQuantity":"0",
    "lblNotification":"-"
    
     }];
  //for(i=0;i<)

  frmInventoryReport.segCustInventory.setData(fianlData);
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

