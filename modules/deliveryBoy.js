//Type your code here
function showDeliveryBoyListFrm(){
  frmDeliveryBoyList.headers[0].lblHeader.text = "Delivery Boys";
  frmDeliveryBoyList.flxAddDeliverBoy.onTouchStart = addDeliveryBoy;
  frmDeliveryBoyList.show();
}


function addDeliveryBoy(){
  frmAddDeliverBoy.headers[0].lblHeader.text = "Add Delivery Boy";
  frmAddDeliverBoy.show();
}

function editDeliveryBoyDetails(){
  frmAddDeliverBoy.headers[0].lblHeader.text = "Edit Delivery Boy Details";
  frmAddDeliverBoy.show();
}