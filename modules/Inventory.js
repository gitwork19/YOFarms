//Type your code here
function inventorySelBoy(){
    frmInventoryReport.flxSegDeliveryBoy.setVisibility(true); 
    frmInventoryReport.segBoy.onRowClick = selectBoyForInvetory;
}

function showInvetoryForm(){
  frmInventoryReport.show();
}

function selectBoyForInvetory(){
  var array = frmInventoryReport.segBoy.selectedRowItems;
  //alert(array);
  //kony.print(array);
  frmInventoryReport.tbxDeliveryBoy.text=array[0].lblBoyName;
  frmInventoryReport.flxSegDeliveryBoy.setVisibility(false);
}