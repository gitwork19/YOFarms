//Type your code here
function preshowAddEditProd(){
  clckAddProdTab();
  frmAddEditProduct.lblAddMainHdr.onTouchStart = clckAddProdTab;
  frmAddEditProduct.lblEditHdr.onTouchStart = clckEditProdTab;
  frmAddEditProduct.headers[0].lblHeader.text = "Add/Edit Product";
}


function clckAddProdTab(){
 frmAddEditProduct.flxLineAdd.skin = "flxLitBG";
 frmAddEditProduct.flxLineEdit.skin = "slFbox";
 frmAddEditProduct.flxAdd.setVisibility(true);
 frmAddEditProduct.flxEdit.setVisibility(false);
 frmAddEditProduct.txtPriceAdd.text ="";
 frmAddEditProduct.txtProdTypeAdd.text ="";
 frmAddEditProduct.txtProdUnitAdd.text ="";
 frmAddEditProduct.ListBoxAddDairy.selectedKey=""; 
 frmAddEditProduct.calFromAdd.clear(); 
}

function clckEditProdTab(){
 frmAddEditProduct.flxLineAdd.skin = "slFbox";
 frmAddEditProduct.flxLineEdit.skin = "flxLitBG";
 frmAddEditProduct.flxAdd.setVisibility(false);
 frmAddEditProduct.flxEdit.setVisibility(true);
 frmAddEditProduct.listDairy.selectedKey="";
 frmAddEditProduct.listBoxProdType.selectedKey="";
 frmAddEditProduct.listBoxProdunit.selectedKey="";
 frmAddEditProduct.txtPriceEdit.text =""; 
 frmAddEditProduct.calFrom.clear(); 
}