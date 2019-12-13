//Type your code here

function frmReg_Init(){
  kony.print("in frmRegInit");
  frmReg.lblErrMsg.text ="";
//   frmReg.tbxFirstName.text = "";
//   frmReg.tbxLastName.text = "" ;
//   frmReg.tbxMobileNumber.text = "";
//   frmReg.tbxEmail.text = "";
  frmReg.footers[0].btnContinue.onClick = showLocalityForm;
 // frmReg.headers[0].ImgBackArrow.onTouchStart=onClickBackImgfrmReg;
}

function onClickBackImgfrmReg()
  {
    frmPayment.lblErrMsgPayment.text = "";
    frmPayment_Init();
    frmPayment.show();
  }

function showLocalityForm(){
  var firstName = frmReg.tbxFirstName.text;
  // alert(firstName);
  var lastName = frmReg.tbxLastName.text;
  //alert(lastName);
  var mobNum = frmReg.tbxMobileNumber.text;
  //alert(mobNum);
  var email = frmReg.tbxEmail.text;
  //alert(email);
  var shiftTime = frmReg.RadiobtnsForTime.selectedKey;
  //alert(shiftTime);
  if((firstName !== "" && firstName !== null && firstName !== undefined) &&
     (lastName !== "" && lastName !== null && lastName !== undefined) &&
     (mobNum !== "" && mobNum !== null && mobNum !== undefined) &&
     (email !== "" && email !== null && email !== undefined) &&
     (shiftTime !== "" && shiftTime !== null && shiftTime !== undefined))
  {
     frmPayment.lblErrMsgPayment.text = "";
    kony.print("in showLocalityForm");
    frmLocality.tbxLocation.placeholder= "Choose Your Location";
    frmLocality.tbxLocation.setEnabled(false);
    frmLocality.tbxStreet.placeholder= "Choose Your Street";
    frmLocality.tbxStreet.setEnabled(false);
    frmLocality_Init();
    frmLocality.show();
  }else{
    frmReg.lblErrMsg.text = "Please fill all the details";
    frmReg.lblErrMsg.skin = "lblRedErrMsg" ;   
  }
}

function frmLocality_Init(){

//   frmLocality.tbxLocation.text = "";
//   frmLocality.tbxStreet.text = "";
//   frmLocality.tbxHouseNo.text = "";
//   frmLocality.tbxApartment.text = "";
//   frmLocality.tbxLandmark.text = "";
  frmLocality.lblErrMsg.text = "";

  frmLocality.btnFlat.onClick = showFlatDetails;
  frmLocality.btnHouse.onClick = showHouseDetails;
  frmLocality.footers[0].btnContinue.onClick  = showPaymentForm;
  frmLocality.headers[0].ImgBackArrow.onTouchStart = onClickOfBackArrow;
  frmLocality.imgDropDown.onTouchStart = showLocations;
  frmLocality.imgDropDown2.onTouchStart = showStreets;
  frmLocality.btnAddLocations.onClick = hideSegment;
  frmLocality.btnAddStreets.onClick = hideStreetSeg;
}

function onClickOfBackArrow(){
  kony.print("in onClickOfBackArrow");
  frmReg_Init();
  frmReg.show();
}

function showFlatDetails(){
  frmLocality.btnFlat.skin="bgGreen";
  frmLocality.btnHouse.skin="btnsknGreyBG";
  frmLocality.btnHouse.zIndex=1;
  frmLocality.btnFlat.zIndex=2;
  frmLocality.flxFlat.setVisibility(true);
  frmLocality.flxForHouse.setVisibility(false); 
}

function showHouseDetails(){
  frmLocality.btnHouse.skin="bgGreen";
  frmLocality.btnFlat.skin="btnsknGreyBG";
  frmLocality.btnHouse.zIndex=2;
  frmLocality.btnFlat.zIndex=1;
  frmLocality.flxForHouse.setVisibility(true);
  frmLocality.flxFlat.setVisibility(false); 
}

function showPaymentForm(){
  kony.print("in payment form");
  var locality = frmLocality.tbxLocation.text;
  var street = frmLocality.tbxStreet.text;
  var houseNo = frmLocality.tbxHouseNo.text;
  var flatNo = frmLocality.tbxApartment.text;
  var landmark = frmLocality.tbxLandmark.text;
  if(((locality !== null && locality !== "" && locality !== undefined)&&
      (street !== null && street !== "" && street !== undefined) &&
      (houseNo !== null && houseNo !== "" && houseNo !== undefined) &&
      (landmark !== null && landmark !== "" && landmark !== undefined))||
     ((locality !== null && locality !== "" && locality !== undefined)&&
      (street !== null && street !== "" && street !== undefined) &&
      (flatNo !== null && flatNo !== "" && flatNo !== undefined) &&
      (landmark !== null && landmark !== "" && landmark !== undefined)))
  {
    frmPayment.tbxSelectProduct.placeholder= "Choose Your Product";
    frmPayment.tbxSelectProduct.setEnabled(false);
     frmPayment.tbxSelectUnit.placeholder= "Choose Your unit";
    frmPayment.tbxSelectUnit.setEnabled(false);
    onClickOfBtnMyChoice();
    frmPayment.lblErrMsgPayment.text = "";
    //frmPayment_Init();
    frmPayment.show();
  }else
  {
    frmLocality.lblErrMsg.text = "Please fill all the details .";
    frmLocality.lblErrMsg.skin = "lblRedErrMsg";
  }
}

function frmPayment_Init(){
  
//   frmPayment.tbxSelectProduct.text="";
//   frmPayment.tbxSelectUnit.text="";
//   frmPayment.lblErrMsgPayment.text = "";
//   frmPayment.tbxQuantity.text="";
//   frmPayment.tbxDeliveryCharges.text="";
//   frmPayment.tbxS.text="";
//   frmPayment.tbxMoonS.text="";
//   frmPayment.tbxM.text="";
//   frmPayment.tbxMoonM.text="";
//   frmPayment.tbxT.text="";
//   frmPayment.tbxMoonT.text="";
//   frmPayment.tbxW.text="";
//   frmPayment.tbxMoonW.text="";
//   frmPayment.tbxTh.text="";
//   frmPayment.tbxMoonTh.text="";
//   frmPayment.tbxF.text="";
//   frmPayment.tbxMoonF.text="";
//   frmPayment.tbxSat.text="";
//   frmPayment.tbxMoonSat.text="";
  
  frmPayment.headers[0].ImgBackArrow.onTouchStart = onClickBackfrmPayment;
  frmPayment.btnDaily.onClick = onClickOfBtnDialy;
  frmPayment.btnMyChoice.onClick = onClickOfBtnMyChoice;
  frmPayment.btnPrepaid.onClick = onClickOfPrepaid;
  frmPayment.btnPostpaid.onClick = onClickOfPostpaid;
  frmPayment.imgDropDown.onTouchStart = chooseProduct;
  frmPayment.btnAddLocations.onClick= hideSegmentProducts;
  frmPayment.imgDropDown2.onTouchStart = chooseUnit;
  frmPayment.btnAddUnits.onClick= hideSegmentUnits;
  frmPayment.footers[0].flxBtn.onTouchStart=frmPaymentOnClickContinue;
  frmPayment.flxRoundS.onTouchStart = onTouchStartTbxS;
  frmPayment.flxRoundM.onTouchStart = onTouchStartTbxM;
  frmPayment.flxRoundT.onTouchStart = onTouchStartTbxT;
  frmPayment.flxRoundW.onTouchStart = onTouchStartTbxW;
  frmPayment.flxRoundTh.onTouchStart = onTouchStartTbxTh;
  frmPayment.flxRoundF.onTouchStart = onTouchStartTbxF;
  frmPayment.flxRoundSat.onTouchStart = onTouchStartTbxSat;
}

function onClickBackfrmPayment()
{
   //frmLocality_Init();
   frmLocality.show();
}

function  onTouchStartTbxS()
{
  frmPayment.flxRoundS.skin = "roundBgBlueWhitelbl";
  frmPayment.lblS.skin="txtWhite";
  frmPayment.flxRoundM.skin = "flxbgGrey";
  frmPayment.lblM.skin="txtGrey";
  frmPayment.flxRoundT.skin = "flxbgGrey";
  frmPayment.lblT.skin="txtGrey";
  frmPayment.flxRoundW.skin = "flxbgGrey";
  frmPayment.lblW.skin="txtGrey";
  frmPayment.flxRoundTh.skin = "flxbgGrey";
  frmPayment.lblTh.skin="txtGrey";
  frmPayment.flxRoundF.skin = "flxbgGrey";
  frmPayment.lblF.skin="txtGrey";
  frmPayment.flxRoundSat.skin = "flxbgGrey";
  frmPayment.lblSat.skin="txtGrey";
  
  frmPayment.tbxS.skin="tbxgreyborderbluetxt100";
  frmPayment.tbxMoonS.skin="tbxgreyborderbluetxt100";
  frmPayment.tbxM.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonM.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxT.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonT.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxW.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonW.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxTh.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonTh.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxF.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonF.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxSat.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonSat.skin="tbxgreyborderblacktxt100";
  
  frmPayment.tbxS.setEnabled(true);
  frmPayment.tbxMoonS.setEnabled(true);
  frmPayment.tbxM.setEnabled(false);
  frmPayment.tbxMoonM.setEnabled(false);
  frmPayment.tbxT.setEnabled(false);
  frmPayment.tbxMoonT.setEnabled(false);
  frmPayment.tbxW.setEnabled(false);
  frmPayment.tbxMoonW.setEnabled(false);
  frmPayment.tbxTh.setEnabled(false);
  frmPayment.tbxMoonTh.setEnabled(false);
  frmPayment.tbxF.setEnabled(false);
  frmPayment.tbxMoonF.setEnabled(false);
  frmPayment.tbxSat.setEnabled(false);
  frmPayment.tbxMoonSat.setEnabled(false);
}

function  onTouchStartTbxM()
{
  frmPayment.flxRoundM.skin = "roundBgBlueWhitelbl";
  frmPayment.lblM.skin="txtWhite";
  frmPayment.flxRoundS.skin = "flxbgGrey";
  frmPayment.lblS.skin="txtGrey"; 
  frmPayment.flxRoundT.skin = "flxbgGrey";
  frmPayment.lblT.skin="txtGrey";
  frmPayment.flxRoundW.skin = "flxbgGrey";
  frmPayment.lblW.skin="txtGrey";
  frmPayment.flxRoundTh.skin = "flxbgGrey";
  frmPayment.lblTh.skin="txtGrey";
  frmPayment.flxRoundF.skin = "flxbgGrey";
  frmPayment.lblF.skin="txtGrey";
  frmPayment.flxRoundSat.skin = "flxbgGrey";
  frmPayment.lblSat.skin="txtGrey";
  
  frmPayment.tbxS.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonS.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxM.skin="tbxgreyborderbluetxt100";
  frmPayment.tbxMoonM.skin="tbxgreyborderbluetxt100";
  frmPayment.tbxT.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonT.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxW.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonW.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxTh.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonTh.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxF.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonF.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxSat.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonSat.skin="tbxgreyborderblacktxt100";
  
  frmPayment.tbxS.setEnabled(false);
  frmPayment.tbxMoonS.setEnabled(false);
  frmPayment.tbxM.setEnabled(true);
  frmPayment.tbxMoonM.setEnabled(true);
  frmPayment.tbxT.setEnabled(false);
  frmPayment.tbxMoonT.setEnabled(false);
  frmPayment.tbxW.setEnabled(false);
  frmPayment.tbxMoonW.setEnabled(false);
  frmPayment.tbxTh.setEnabled(false);
  frmPayment.tbxMoonTh.setEnabled(false);
  frmPayment.tbxF.setEnabled(false);
  frmPayment.tbxMoonF.setEnabled(false);
  frmPayment.tbxSat.setEnabled(false);
  frmPayment.tbxMoonSat.setEnabled(false);
}

function  onTouchStartTbxT()
{
  frmPayment.flxRoundT.skin = "roundBgBlueWhitelbl";
  frmPayment.lblT.skin="txtWhite";   
  frmPayment.flxRoundS.skin = "flxbgGrey";
  frmPayment.lblS.skin="txtGrey"; 
  frmPayment.flxRoundM.skin = "flxbgGrey";
  frmPayment.lblM.skin="txtGrey";  
  frmPayment.flxRoundW.skin = "flxbgGrey";
  frmPayment.lblW.skin="txtGrey";
  frmPayment.flxRoundTh.skin = "flxbgGrey";
  frmPayment.lblTh.skin="txtGrey";
  frmPayment.flxRoundF.skin = "flxbgGrey";
  frmPayment.lblF.skin="txtGrey";
  frmPayment.flxRoundSat.skin = "flxbgGrey";
  frmPayment.lblSat.skin="txtGrey";
  
  frmPayment.tbxS.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonS.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxM.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonM.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxT.skin="tbxgreyborderbluetxt100";
  frmPayment.tbxMoonT.skin="tbxgreyborderbluetxt100";
  frmPayment.tbxW.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonW.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxTh.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonTh.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxF.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonF.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxSat.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonSat.skin="tbxgreyborderblacktxt100";
  
  frmPayment.tbxS.setEnabled(false);
  frmPayment.tbxMoonS.setEnabled(false);
  frmPayment.tbxM.setEnabled(false);
  frmPayment.tbxMoonM.setEnabled(false);
  frmPayment.tbxT.setEnabled(true);
  frmPayment.tbxMoonT.setEnabled(true);
  frmPayment.tbxW.setEnabled(false);
  frmPayment.tbxMoonW.setEnabled(false);
  frmPayment.tbxTh.setEnabled(false);
  frmPayment.tbxMoonTh.setEnabled(false);
  frmPayment.tbxF.setEnabled(false);
  frmPayment.tbxMoonF.setEnabled(false);
  frmPayment.tbxSat.setEnabled(false);
  frmPayment.tbxMoonSat.setEnabled(false);
}

function  onTouchStartTbxW()
{
  
  frmPayment.flxRoundS.skin = "flxbgGrey";
  frmPayment.lblS.skin="txtGrey"; 
  frmPayment.flxRoundM.skin = "flxbgGrey";
  frmPayment.lblM.skin="txtGrey";  
  frmPayment.flxRoundT.skin = "flxbgGrey";
  frmPayment.lblT .skin="txtGrey";
  frmPayment.flxRoundTh.skin = "flxbgGrey";
  frmPayment.lblTh.skin="txtGrey";
  frmPayment.flxRoundF.skin = "flxbgGrey";
  frmPayment.lblF.skin="txtGrey";
  frmPayment.flxRoundSat.skin = "flxbgGrey";
  frmPayment.lblSat.skin="txtGrey";
  frmPayment.flxRoundW.skin = "roundBgBlueWhitelbl";
  frmPayment.lblW.skin="txtWhite";
  
  frmPayment.tbxS.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonS.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxM.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonM.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxT.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonT.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxW.skin="tbxgreyborderbluetxt100";
  frmPayment.tbxMoonW.skin="tbxgreyborderbluetxt100";
  frmPayment.tbxTh.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonTh.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxF.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonF.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxSat.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonSat.skin="tbxgreyborderblacktxt100";
  
  frmPayment.tbxS.setEnabled(false);
  frmPayment.tbxMoonS.setEnabled(false);
  frmPayment.tbxM.setEnabled(false);
  frmPayment.tbxMoonM.setEnabled(false);
  frmPayment.tbxT.setEnabled(false);
  frmPayment.tbxMoonT.setEnabled(false);
  frmPayment.tbxW.setEnabled(true);
  frmPayment.tbxMoonW.setEnabled(true);
  frmPayment.tbxTh.setEnabled(false);
  frmPayment.tbxMoonTh.setEnabled(false);
  frmPayment.tbxF.setEnabled(false);
  frmPayment.tbxMoonF.setEnabled(false);
  frmPayment.tbxSat.setEnabled(false);
  frmPayment.tbxMoonSat.setEnabled(false);
}

function  onTouchStartTbxTh()
{
  frmPayment.flxRoundS.skin = "flxbgGrey";
  frmPayment.lblS.skin="txtGrey"; 
  frmPayment.flxRoundM.skin = "flxbgGrey";
  frmPayment.lblM.skin="txtGrey";  
  frmPayment.flxRoundT.skin = "flxbgGrey";
  frmPayment.lblT .skin="txtGrey";
  frmPayment.flxRoundW.skin = "flxbgGrey";
  frmPayment.lblW.skin="txtGrey";
  frmPayment.flxRoundF.skin = "flxbgGrey";
  frmPayment.lblF.skin="txtGrey";
  frmPayment.flxRoundSat.skin = "flxbgGrey";
  frmPayment.lblSat.skin="txtGrey";
  
  frmPayment.tbxS.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonS.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxM.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonM.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxT.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonT.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxW.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonW.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxTh.skin="tbxgreyborderbluetxt100";
  frmPayment.tbxMoonTh.skin="tbxgreyborderbluetxt100";
  frmPayment.tbxF.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonF.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxSat.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonSat.skin="tbxgreyborderblacktxt100";
  
  frmPayment.flxRoundTh.skin = "roundBgBlueWhitelbl";
  frmPayment.lblTh.skin="txtWhite";
  frmPayment.tbxS.setEnabled(false);
  frmPayment.tbxMoonS.setEnabled(false);
  frmPayment.tbxM.setEnabled(false);
  frmPayment.tbxMoonM.setEnabled(false);
  frmPayment.tbxT.setEnabled(false);
  frmPayment.tbxMoonT.setEnabled(false);
  frmPayment.tbxW.setEnabled(false);
  frmPayment.tbxMoonW.setEnabled(false);
  frmPayment.tbxTh.setEnabled(true);
  frmPayment.tbxMoonTh.setEnabled(true);
  frmPayment.tbxF.setEnabled(false);
  frmPayment.tbxMoonF.setEnabled(false);
  frmPayment.tbxSat.setEnabled(false);
  frmPayment.tbxMoonSat.setEnabled(false);
}

function  onTouchStartTbxF()
{
  frmPayment.flxRoundS.skin = "flxbgGrey";
  frmPayment.lblS.skin="txtGrey"; 
  frmPayment.flxRoundM.skin = "flxbgGrey";
  frmPayment.lblM.skin="txtGrey";  
  frmPayment.flxRoundT.skin = "flxbgGrey";
  frmPayment.lblT .skin="txtGrey";
  frmPayment.flxRoundW.skin = "flxbgGrey";
  frmPayment.lblW.skin="txtGrey";
  frmPayment.flxRoundTh.skin = "flxbgGrey";
  frmPayment.lblTh.skin="txtGrey";
  frmPayment.flxRoundSat.skin = "flxbgGrey";
  frmPayment.lblSat.skin="txtGrey";
  
  frmPayment.tbxS.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonS.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxM.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonM.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxT.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonT.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxW.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonW.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxTh.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonTh.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxF.skin="tbxgreyborderbluetxt100";
  frmPayment.tbxMoonF.skin="tbxgreyborderbluetxt100";
  frmPayment.tbxSat.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonSat.skin="tbxgreyborderblacktxt100";
  
  frmPayment.flxRoundF.skin = "roundBgBlueWhitelbl";
  frmPayment.lblF.skin="txtWhite";
  frmPayment.tbxS.setEnabled(false);
  frmPayment.tbxMoonS.setEnabled(false);
  frmPayment.tbxM.setEnabled(false);
  frmPayment.tbxMoonM.setEnabled(false);
  frmPayment.tbxT.setEnabled(false);
  frmPayment.tbxMoonT.setEnabled(false);
  frmPayment.tbxW.setEnabled(false);
  frmPayment.tbxMoonW.setEnabled(false);
  frmPayment.tbxTh.setEnabled(false);
  frmPayment.tbxMoonTh.setEnabled(false);
  frmPayment.tbxF.setEnabled(true);
  frmPayment.tbxMoonF.setEnabled(true);
  frmPayment.tbxSat.setEnabled(false);
  frmPayment.tbxMoonSat.setEnabled(false);
}

function  onTouchStartTbxSat()
{
  frmPayment.flxRoundS.skin = "flxbgGrey";
  frmPayment.lblS.skin="txtGrey"; 
  frmPayment.flxRoundM.skin = "flxbgGrey";
  frmPayment.lblM.skin="txtGrey";  
  frmPayment.flxRoundT.skin = "flxbgGrey";
  frmPayment.lblT .skin="txtGrey";
  frmPayment.flxRoundTh.skin = "flxbgGrey";
  frmPayment.lblTh.skin="txtGrey";
  frmPayment.flxRoundF.skin = "flxbgGrey";
  frmPayment.lblF.skin="txtGrey";
  frmPayment.flxRoundW.skin = "flxbgGrey";
  frmPayment.lblW.skin="txtGrey";
  
  frmPayment.tbxS.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonS.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxM.skin="tbxgreyborderbluetxt100";
  frmPayment.tbxMoonM.skin="tbxgreyborderbluetxt100";
  frmPayment.tbxT.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonT.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxW.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonW.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxTh.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonTh.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxF.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxMoonF.skin="tbxgreyborderblacktxt100";
  frmPayment.tbxSat.skin="tbxgreyborderbluetxt100";
  frmPayment.tbxMoonSat.skin="tbxgreyborderbluetxt100";
  
  frmPayment.flxRoundSat.skin = "roundBgBlueWhitelbl";
  frmPayment.lblSat.skin="txtWhite";
  frmPayment.tbxS.setEnabled(false);
  frmPayment.tbxMoonS.setEnabled(false);
  frmPayment.tbxM.setEnabled(false);
  frmPayment.tbxMoonM.setEnabled(false);
  frmPayment.tbxT.setEnabled(false);
  frmPayment.tbxMoonT.setEnabled(false);
  frmPayment.tbxW.setEnabled(false);
  frmPayment.tbxMoonW.setEnabled(false);
  frmPayment.tbxTh.setEnabled(false);
  frmPayment.tbxMoonTh.setEnabled(false);
  frmPayment.tbxF.setEnabled(false);
  frmPayment.tbxMoonF.setEnabled(false);
  frmPayment.tbxSat.setEnabled(true);
  frmPayment.tbxMoonSat.setEnabled(true);
}


function onClickOfBtnMyChoice(){
  frmPayment.btnDaily.skin = "btnsknGreyBG";
  frmPayment.btnMyChoice.skin = "bgGreen" ;
  frmPayment.btnDaily.zIndex=1;
  frmPayment.btnMyChoice.zIndex=2;
  frmPayment.tbxM.setEnabled(false);
  frmPayment.tbxMoonM.setEnabled(false);
  frmPayment.tbxT.setEnabled(false);
  frmPayment.tbxMoonT.setEnabled(false);
  frmPayment.tbxW.setEnabled(false);
  frmPayment.tbxMoonW.setEnabled(false);
  frmPayment.tbxTh.setEnabled(false);
  frmPayment.tbxMoonTh.setEnabled(false);
  frmPayment.tbxF.setEnabled(false);
  frmPayment.tbxMoonF.setEnabled(false);
  frmPayment.tbxSat.setEnabled(false);
  frmPayment.tbxMoonSat.setEnabled(false);
  frmPayment.flxTbxs.setVisibility(true);
  frmPayment.flxTbxsDown.setVisibility(true);
  frmPayment.tbxSunDaily.setVisibility(false);
  frmPayment.tbxMoonDaily.setVisibility(false);
  
 
  
}

function onClickOfBtnDialy(){
  frmPayment.btnDaily.skin = "bgGreen";
  frmPayment.btnMyChoice.skin = "btnsknGreyBG" ;
  frmPayment.btnDaily.zIndex=2;
  frmPayment.btnMyChoice.zIndex=1;
  frmPayment.flxTbxs.setVisibility(false);
  frmPayment.flxTbxsDown.setVisibility(false);
  frmPayment.tbxSunDaily.setVisibility(true);
  frmPayment.tbxMoonDaily.setVisibility(true);
}

function onClickOfPrepaid(){

  frmPayment.btnPrepaid.skin = "bgGreen";
  frmPayment.btnPostpaid.skin = "btnsknGreyBG" ;
  frmPayment.btnPrepaid.zIndex=2;
  frmPayment.btnPostpaid.zIndex=1;
}

function onClickOfPostpaid()
{
  frmPayment.btnPrepaid.skin = "btnsknGreyBG";
  frmPayment.btnPostpaid.skin = "bgGreen" ;
  frmPayment.btnPrepaid.zIndex=1;
  frmPayment.btnPostpaid.zIndex=2;
}


function showLocations()
{
  frmLocality.lineHorizontal.setVisibility(false);
  frmLocality.flxSegmentLocality.setVisibility(true); 
  frmLocality.segCity.onRowClick = selectCityName;
}

function showStreets()
{
  frmLocality.lblUnderline2.setVisibility(false);
  frmLocality.flxSegmentStreets.setVisibility(true); 
  frmLocality.segStreets.onRowClick = selectStreetName;
}


function selectStreetName()
{
  var array = frmLocality.segStreets.selectedRowItems;
  //alert(array);
  //kony.print(array);
  frmLocality.tbxStreet.text=array[0].lblSegmentData;
  frmLocality.lblUnderline2.setVisibility(true);
  frmLocality.flxSegmentStreets.setVisibility(false);


}
function selectCityName()
{
  var array = frmLocality.segCity.selectedRowItems;
  //alert(array);
  //kony.print(array);
  frmLocality.tbxLocation.text=array[0].lblSegmentData;
  frmLocality.lineHorizontal.setVisibility(true);
  frmLocality.flxSegmentLocality.setVisibility(false);


}
function hideSegment()
{
  frmLocality.tbxLocation.text = "";
  frmLocality.tbxLocation.placeholder= "Enter Your Location";
  frmLocality.tbxLocation.setEnabled(true);
  frmLocality.flxSegmentLocality.setVisibility(false);
  frmLocality.tbxLocation.setFocus(true);
  frmLocality.lineHorizontal.setVisibility(true);
}

function hideStreetSeg()
{
  frmLocality.tbxStreet.text = "";
  frmLocality.tbxStreet.placeholder= "Enter Your Street";
  frmLocality.tbxStreet.setEnabled(true);
  frmLocality.flxSegmentStreets.setVisibility(false);
  frmLocality.tbxStreet.setFocus(true);
  frmLocality.lblUnderline2.setVisibility(true);
}


function chooseProduct()
{
  frmPayment.lineHorizontal.setVisibility(false);
  frmPayment.flxSegmentLocality.setVisibility(true); 
  frmPayment.segCity.onRowClick = selectProduct;
}


    
function selectProduct()
{
  var array =frmPayment.segCity.selectedRowItems; 
  //alert(array);
  //kony.print(array);
  frmPayment.tbxSelectProduct.text=array[0].lblSegmentData;
  frmPayment.lineHorizontal.setVisibility(true);
  frmPayment.flxSegmentLocality.setVisibility(false);
}

function hideSegmentProducts()
{
  frmPayment.tbxSelectProduct.text = "";
  frmPayment.tbxSelectProduct.placeholder= "Enter Your Product";
  frmPayment.tbxSelectProduct.setEnabled(true);
  frmPayment.flxSegmentLocality.setVisibility(false);
  frmPayment.tbxSelectProduct.setFocus(true);
  frmPayment.lineHorizontal.setVisibility(true);
}

function chooseUnit()
{ 
  frmPayment.lblUnderLine2.setVisibility(false);
  frmPayment.flxSegmentUnit.setVisibility(true); 
  frmPayment.segUnit.onRowClick = selectUnit;
}

function selectUnit()
{
  var array =frmPayment.segUnit.selectedRowItems; 
  frmPayment.tbxSelectUnit.text=array[0].lblSegmentData;
  frmPayment.lblUnderLine2.setVisibility(true);
  frmPayment.flxSegmentUnit.setVisibility(false);
}

function hideSegmentUnits()
{
  frmPayment.tbxSelectUnit.text = "";
  frmPayment.tbxSelectUnit.placeholder= "Enter Your Unit";
  frmPayment.tbxSelectUnit.setEnabled(true);
  frmPayment.flxSegmentUnit.setVisibility(false);
  frmPayment.tbxSelectUnit.setFocus(true);
  frmPayment.lblUnderLine2.setVisibility(true);
}

function frmPaymentOnClickContinue()
{
  var product = frmPayment.tbxSelectProduct.text;
  var unit=frmPayment.tbxSelectUnit.text;
  var quantity=frmPayment.tbxQuantity.text;
  var deliveryCharges=frmPayment.tbxDeliveryCharges.text;
  
  if(((product !== null && product !== "" && product !== undefined)&&
      (unit !== null && unit !== "" && unit !== undefined) &&
      (quantity !== null && quantity !== "" && quantity !== undefined) &&
      (deliveryCharges !== null && deliveryCharges !== "" && deliveryCharges !== undefined)))
      {
        kony.print("in validations success");
         frmPayment.lblErrMsgPayment.text = "";
       // frmReg_Init();
        //frmReg.show();
                 //alert("Validations satisfied");
      }else
        {
          frmPayment.lblErrMsgPayment.text = "Please fill all the details .";
          frmPayment.lblErrMsgPayment.skin = "lblRedErrMsg";
          //alert("error message");
        }
}
