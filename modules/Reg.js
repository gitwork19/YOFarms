//Type your code here

function frmReg_Init(){
  kony.print("in frmRegInit");
  frmRegStep1.lblErrMsg.text ="";
//   frmRegStep1.tbxFirstName.text = "";
//   frmRegStep1.tbxLastName.text = "" ;
//   frmRegStep1.tbxMobileNumber.text = "";
//   frmRegStep1.tbxEmail.text = "";
  frmRegStep1.footers[0].btnContinue.onClick = showLocalityForm;
 // frmRegStep1.headers[0].ImgBackArrow.onTouchStart=onClickBackImgfrmReg;
}

function onClickBackImgfrmReg()
  {
    frmRegStep3.lblErrMsgPayment.text = "";
    frmPayment_Init();
    frmRegStep3.show();
  }

function showLocalityForm(){
  var firstName = frmRegStep1.tbxFirstName.text;
  // alert(firstName);
  var lastName = frmRegStep1.tbxLastName.text;
  //alert(lastName);
  var mobNum = frmRegStep1.tbxMobileNumber.text;
  //alert(mobNum);
  var email = frmRegStep1.tbxEmail.text;
  //alert(email);
  var shiftTime = frmRegStep1.RadiobtnsForTime.selectedKey;
  //alert(shiftTime);
  if((firstName !== "" && firstName !== null && firstName !== undefined) &&
     (lastName !== "" && lastName !== null && lastName !== undefined) &&
     (mobNum !== "" && mobNum !== null && mobNum !== undefined) &&
     (email !== "" && email !== null && email !== undefined) &&
     (shiftTime !== "" && shiftTime !== null && shiftTime !== undefined))
  {
     frmRegStep3.lblErrMsgPayment.text = "";
    kony.print("in showLocalityForm");
    frmRegStep2.tbxLocation.placeholder= "Choose Your Location";
    frmRegStep2.tbxLocation.setEnabled(false);
    frmRegStep2.tbxStreet.placeholder= "Choose Your Street";
    frmRegStep2.tbxStreet.setEnabled(false);
    frmLocality_Init();
    frmRegStep2.show();
  }else{
    frmRegStep1.lblErrMsg.text = "Please fill all the details";
    frmRegStep1.lblErrMsg.skin = "lblRedErrMsg" ;   
  }
}

function frmLocality_Init(){

//   frmRegStep2.tbxLocation.text = "";
//   frmRegStep2.tbxStreet.text = "";
//   frmRegStep2.tbxHouseNo.text = "";
//   frmRegStep2.tbxApartment.text = "";
//   frmRegStep2.tbxLandmark.text = "";
  frmRegStep2.lblErrMsg.text = "";

  frmRegStep2.btnFlat.onClick = showFlatDetails;
  frmRegStep2.btnHouse.onClick = showHouseDetails;
  frmRegStep2.footers[0].btnContinue.onClick  = showPaymentForm;
  frmRegStep2.headers[0].ImgBackArrow.onTouchStart = onClickOfBackArrow;
  frmRegStep2.imgDropDown.onTouchStart = showLocations;
  frmRegStep2.imgDropDown2.onTouchStart = showStreets;
  frmRegStep2.btnAddLocations.onClick = hideSegment;
  frmRegStep2.btnAddStreets.onClick = hideStreetSeg;
}

function onClickOfBackArrow(){
  kony.print("in onClickOfBackArrow");
  frmReg_Init();
  frmRegStep1.show();
}

function showFlatDetails(){
  frmRegStep2.btnFlat.skin="bgGreen";
  frmRegStep2.btnHouse.skin="btnsknGreyBG";
  frmRegStep2.btnHouse.zIndex=1;
  frmRegStep2.btnFlat.zIndex=2;
  frmRegStep2.flxFlat.setVisibility(true);
  frmRegStep2.flxForHouse.setVisibility(false); 
}

function showHouseDetails(){
  frmRegStep2.btnHouse.skin="bgGreen";
  frmRegStep2.btnFlat.skin="btnsknGreyBG";
  frmRegStep2.btnHouse.zIndex=2;
  frmRegStep2.btnFlat.zIndex=1;
  frmRegStep2.flxForHouse.setVisibility(true);
  frmRegStep2.flxFlat.setVisibility(false); 
}

function showPaymentForm(){
  kony.print("in payment form");
  var locality = frmRegStep2.tbxLocation.text;
  var street = frmRegStep2.tbxStreet.text;
  var houseNo = frmRegStep2.tbxHouseNo.text;
  var flatNo = frmRegStep2.tbxApartment.text;
  var landmark = frmRegStep2.tbxLandmark.text;
  if(((locality !== null && locality !== "" && locality !== undefined)&&
      (street !== null && street !== "" && street !== undefined) &&
      (houseNo !== null && houseNo !== "" && houseNo !== undefined) &&
      (landmark !== null && landmark !== "" && landmark !== undefined))||
     ((locality !== null && locality !== "" && locality !== undefined)&&
      (street !== null && street !== "" && street !== undefined) &&
      (flatNo !== null && flatNo !== "" && flatNo !== undefined) &&
      (landmark !== null && landmark !== "" && landmark !== undefined)))
  {
    frmRegStep3.tbxSelectProduct.placeholder= "Choose Your Product";
    frmRegStep3.tbxSelectProduct.setEnabled(false);
     frmRegStep3.tbxSelectUnit.placeholder= "Choose Your unit";
    frmRegStep3.tbxSelectUnit.setEnabled(false);
    onClickOfBtnMyChoice();
    frmRegStep3.lblErrMsgPayment.text = "";
    //frmPayment_Init();
    frmRegStep3.show();
  }else
  {
    frmRegStep2.lblErrMsg.text = "Please fill all the details .";
    frmRegStep2.lblErrMsg.skin = "lblRedErrMsg";
  }
}

function frmPayment_Init(){
  
//   frmRegStep3.tbxSelectProduct.text="";
//   frmRegStep3.tbxSelectUnit.text="";
//   frmRegStep3.lblErrMsgPayment.text = "";
//   frmRegStep3.tbxQuantity.text="";
//   frmRegStep3.tbxDeliveryCharges.text="";
//   frmRegStep3.tbxS.text="";
//   frmRegStep3.tbxMoonS.text="";
//   frmRegStep3.tbxM.text="";
//   frmRegStep3.tbxMoonM.text="";
//   frmRegStep3.tbxT.text="";
//   frmRegStep3.tbxMoonT.text="";
//   frmRegStep3.tbxW.text="";
//   frmRegStep3.tbxMoonW.text="";
//   frmRegStep3.tbxTh.text="";
//   frmRegStep3.tbxMoonTh.text="";
//   frmRegStep3.tbxF.text="";
//   frmRegStep3.tbxMoonF.text="";
//   frmRegStep3.tbxSat.text="";
//   frmRegStep3.tbxMoonSat.text="";
  
  frmRegStep3.headers[0].ImgBackArrow.onTouchStart = onClickBackfrmPayment;
  frmRegStep3.btnDaily.onClick = onClickOfBtnDialy;
  frmRegStep3.btnMyChoice.onClick = onClickOfBtnMyChoice;
  frmRegStep3.btnPrepaid.onClick = onClickOfPrepaid;
  frmRegStep3.btnPostpaid.onClick = onClickOfPostpaid;
  frmRegStep3.imgDropDown.onTouchStart = chooseProduct;
  frmRegStep3.btnAddLocations.onClick= hideSegmentProducts;
  frmRegStep3.imgDropDown2.onTouchStart = chooseUnit;
  frmRegStep3.btnAddUnits.onClick= hideSegmentUnits;
  frmRegStep3.footers[0].flxBtn.onTouchStart=frmPaymentOnClickContinue;
  frmRegStep3.flxRoundS.onTouchStart = onTouchStartTbxS;
  frmRegStep3.flxRoundM.onTouchStart = onTouchStartTbxM;
  frmRegStep3.flxRoundT.onTouchStart = onTouchStartTbxT;
  frmRegStep3.flxRoundW.onTouchStart = onTouchStartTbxW;
  frmRegStep3.flxRoundTh.onTouchStart = onTouchStartTbxTh;
  frmRegStep3.flxRoundF.onTouchStart = onTouchStartTbxF;
  frmRegStep3.flxRoundSat.onTouchStart = onTouchStartTbxSat;
}

function onClickBackfrmPayment()
{
   //frmLocality_Init();
   frmRegStep2.show();
}

function  onTouchStartTbxS()
{
  frmRegStep3.flxRoundS.skin = "roundBgBlueWhitelbl";
  frmRegStep3.lblS.skin="txtWhite";
  frmRegStep3.flxRoundM.skin = "flxbgGrey";
  frmRegStep3.lblM.skin="txtGrey";
  frmRegStep3.flxRoundT.skin = "flxbgGrey";
  frmRegStep3.lblT.skin="txtGrey";
  frmRegStep3.flxRoundW.skin = "flxbgGrey";
  frmRegStep3.lblW.skin="txtGrey";
  frmRegStep3.flxRoundTh.skin = "flxbgGrey";
  frmRegStep3.lblTh.skin="txtGrey";
  frmRegStep3.flxRoundF.skin = "flxbgGrey";
  frmRegStep3.lblF.skin="txtGrey";
  frmRegStep3.flxRoundSat.skin = "flxbgGrey";
  frmRegStep3.lblSat.skin="txtGrey";
  
  frmRegStep3.tbxS.skin="tbxgreyborderbluetxt100";
  frmRegStep3.tbxMoonS.skin="tbxgreyborderbluetxt100";
  frmRegStep3.tbxM.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonM.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxT.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonT.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxW.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonW.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxTh.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonTh.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxF.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonF.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxSat.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonSat.skin="tbxgreyborderblacktxt100";
  
  frmRegStep3.tbxS.setEnabled(true);
  frmRegStep3.tbxMoonS.setEnabled(true);
  frmRegStep3.tbxM.setEnabled(false);
  frmRegStep3.tbxMoonM.setEnabled(false);
  frmRegStep3.tbxT.setEnabled(false);
  frmRegStep3.tbxMoonT.setEnabled(false);
  frmRegStep3.tbxW.setEnabled(false);
  frmRegStep3.tbxMoonW.setEnabled(false);
  frmRegStep3.tbxTh.setEnabled(false);
  frmRegStep3.tbxMoonTh.setEnabled(false);
  frmRegStep3.tbxF.setEnabled(false);
  frmRegStep3.tbxMoonF.setEnabled(false);
  frmRegStep3.tbxSat.setEnabled(false);
  frmRegStep3.tbxMoonSat.setEnabled(false);
}

function  onTouchStartTbxM()
{
  frmRegStep3.flxRoundM.skin = "roundBgBlueWhitelbl";
  frmRegStep3.lblM.skin="txtWhite";
  frmRegStep3.flxRoundS.skin = "flxbgGrey";
  frmRegStep3.lblS.skin="txtGrey"; 
  frmRegStep3.flxRoundT.skin = "flxbgGrey";
  frmRegStep3.lblT.skin="txtGrey";
  frmRegStep3.flxRoundW.skin = "flxbgGrey";
  frmRegStep3.lblW.skin="txtGrey";
  frmRegStep3.flxRoundTh.skin = "flxbgGrey";
  frmRegStep3.lblTh.skin="txtGrey";
  frmRegStep3.flxRoundF.skin = "flxbgGrey";
  frmRegStep3.lblF.skin="txtGrey";
  frmRegStep3.flxRoundSat.skin = "flxbgGrey";
  frmRegStep3.lblSat.skin="txtGrey";
  
  frmRegStep3.tbxS.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonS.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxM.skin="tbxgreyborderbluetxt100";
  frmRegStep3.tbxMoonM.skin="tbxgreyborderbluetxt100";
  frmRegStep3.tbxT.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonT.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxW.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonW.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxTh.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonTh.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxF.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonF.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxSat.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonSat.skin="tbxgreyborderblacktxt100";
  
  frmRegStep3.tbxS.setEnabled(false);
  frmRegStep3.tbxMoonS.setEnabled(false);
  frmRegStep3.tbxM.setEnabled(true);
  frmRegStep3.tbxMoonM.setEnabled(true);
  frmRegStep3.tbxT.setEnabled(false);
  frmRegStep3.tbxMoonT.setEnabled(false);
  frmRegStep3.tbxW.setEnabled(false);
  frmRegStep3.tbxMoonW.setEnabled(false);
  frmRegStep3.tbxTh.setEnabled(false);
  frmRegStep3.tbxMoonTh.setEnabled(false);
  frmRegStep3.tbxF.setEnabled(false);
  frmRegStep3.tbxMoonF.setEnabled(false);
  frmRegStep3.tbxSat.setEnabled(false);
  frmRegStep3.tbxMoonSat.setEnabled(false);
}

function  onTouchStartTbxT()
{
  frmRegStep3.flxRoundT.skin = "roundBgBlueWhitelbl";
  frmRegStep3.lblT.skin="txtWhite";   
  frmRegStep3.flxRoundS.skin = "flxbgGrey";
  frmRegStep3.lblS.skin="txtGrey"; 
  frmRegStep3.flxRoundM.skin = "flxbgGrey";
  frmRegStep3.lblM.skin="txtGrey";  
  frmRegStep3.flxRoundW.skin = "flxbgGrey";
  frmRegStep3.lblW.skin="txtGrey";
  frmRegStep3.flxRoundTh.skin = "flxbgGrey";
  frmRegStep3.lblTh.skin="txtGrey";
  frmRegStep3.flxRoundF.skin = "flxbgGrey";
  frmRegStep3.lblF.skin="txtGrey";
  frmRegStep3.flxRoundSat.skin = "flxbgGrey";
  frmRegStep3.lblSat.skin="txtGrey";
  
  frmRegStep3.tbxS.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonS.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxM.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonM.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxT.skin="tbxgreyborderbluetxt100";
  frmRegStep3.tbxMoonT.skin="tbxgreyborderbluetxt100";
  frmRegStep3.tbxW.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonW.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxTh.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonTh.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxF.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonF.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxSat.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonSat.skin="tbxgreyborderblacktxt100";
  
  frmRegStep3.tbxS.setEnabled(false);
  frmRegStep3.tbxMoonS.setEnabled(false);
  frmRegStep3.tbxM.setEnabled(false);
  frmRegStep3.tbxMoonM.setEnabled(false);
  frmRegStep3.tbxT.setEnabled(true);
  frmRegStep3.tbxMoonT.setEnabled(true);
  frmRegStep3.tbxW.setEnabled(false);
  frmRegStep3.tbxMoonW.setEnabled(false);
  frmRegStep3.tbxTh.setEnabled(false);
  frmRegStep3.tbxMoonTh.setEnabled(false);
  frmRegStep3.tbxF.setEnabled(false);
  frmRegStep3.tbxMoonF.setEnabled(false);
  frmRegStep3.tbxSat.setEnabled(false);
  frmRegStep3.tbxMoonSat.setEnabled(false);
}

function  onTouchStartTbxW()
{
  
  frmRegStep3.flxRoundS.skin = "flxbgGrey";
  frmRegStep3.lblS.skin="txtGrey"; 
  frmRegStep3.flxRoundM.skin = "flxbgGrey";
  frmRegStep3.lblM.skin="txtGrey";  
  frmRegStep3.flxRoundT.skin = "flxbgGrey";
  frmRegStep3.lblT .skin="txtGrey";
  frmRegStep3.flxRoundTh.skin = "flxbgGrey";
  frmRegStep3.lblTh.skin="txtGrey";
  frmRegStep3.flxRoundF.skin = "flxbgGrey";
  frmRegStep3.lblF.skin="txtGrey";
  frmRegStep3.flxRoundSat.skin = "flxbgGrey";
  frmRegStep3.lblSat.skin="txtGrey";
  frmRegStep3.flxRoundW.skin = "roundBgBlueWhitelbl";
  frmRegStep3.lblW.skin="txtWhite";
  
  frmRegStep3.tbxS.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonS.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxM.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonM.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxT.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonT.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxW.skin="tbxgreyborderbluetxt100";
  frmRegStep3.tbxMoonW.skin="tbxgreyborderbluetxt100";
  frmRegStep3.tbxTh.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonTh.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxF.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonF.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxSat.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonSat.skin="tbxgreyborderblacktxt100";
  
  frmRegStep3.tbxS.setEnabled(false);
  frmRegStep3.tbxMoonS.setEnabled(false);
  frmRegStep3.tbxM.setEnabled(false);
  frmRegStep3.tbxMoonM.setEnabled(false);
  frmRegStep3.tbxT.setEnabled(false);
  frmRegStep3.tbxMoonT.setEnabled(false);
  frmRegStep3.tbxW.setEnabled(true);
  frmRegStep3.tbxMoonW.setEnabled(true);
  frmRegStep3.tbxTh.setEnabled(false);
  frmRegStep3.tbxMoonTh.setEnabled(false);
  frmRegStep3.tbxF.setEnabled(false);
  frmRegStep3.tbxMoonF.setEnabled(false);
  frmRegStep3.tbxSat.setEnabled(false);
  frmRegStep3.tbxMoonSat.setEnabled(false);
}

function  onTouchStartTbxTh()
{
  frmRegStep3.flxRoundS.skin = "flxbgGrey";
  frmRegStep3.lblS.skin="txtGrey"; 
  frmRegStep3.flxRoundM.skin = "flxbgGrey";
  frmRegStep3.lblM.skin="txtGrey";  
  frmRegStep3.flxRoundT.skin = "flxbgGrey";
  frmRegStep3.lblT .skin="txtGrey";
  frmRegStep3.flxRoundW.skin = "flxbgGrey";
  frmRegStep3.lblW.skin="txtGrey";
  frmRegStep3.flxRoundF.skin = "flxbgGrey";
  frmRegStep3.lblF.skin="txtGrey";
  frmRegStep3.flxRoundSat.skin = "flxbgGrey";
  frmRegStep3.lblSat.skin="txtGrey";
  
  frmRegStep3.tbxS.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonS.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxM.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonM.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxT.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonT.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxW.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonW.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxTh.skin="tbxgreyborderbluetxt100";
  frmRegStep3.tbxMoonTh.skin="tbxgreyborderbluetxt100";
  frmRegStep3.tbxF.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonF.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxSat.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonSat.skin="tbxgreyborderblacktxt100";
  
  frmRegStep3.flxRoundTh.skin = "roundBgBlueWhitelbl";
  frmRegStep3.lblTh.skin="txtWhite";
  frmRegStep3.tbxS.setEnabled(false);
  frmRegStep3.tbxMoonS.setEnabled(false);
  frmRegStep3.tbxM.setEnabled(false);
  frmRegStep3.tbxMoonM.setEnabled(false);
  frmRegStep3.tbxT.setEnabled(false);
  frmRegStep3.tbxMoonT.setEnabled(false);
  frmRegStep3.tbxW.setEnabled(false);
  frmRegStep3.tbxMoonW.setEnabled(false);
  frmRegStep3.tbxTh.setEnabled(true);
  frmRegStep3.tbxMoonTh.setEnabled(true);
  frmRegStep3.tbxF.setEnabled(false);
  frmRegStep3.tbxMoonF.setEnabled(false);
  frmRegStep3.tbxSat.setEnabled(false);
  frmRegStep3.tbxMoonSat.setEnabled(false);
}

function  onTouchStartTbxF()
{
  frmRegStep3.flxRoundS.skin = "flxbgGrey";
  frmRegStep3.lblS.skin="txtGrey"; 
  frmRegStep3.flxRoundM.skin = "flxbgGrey";
  frmRegStep3.lblM.skin="txtGrey";  
  frmRegStep3.flxRoundT.skin = "flxbgGrey";
  frmRegStep3.lblT .skin="txtGrey";
  frmRegStep3.flxRoundW.skin = "flxbgGrey";
  frmRegStep3.lblW.skin="txtGrey";
  frmRegStep3.flxRoundTh.skin = "flxbgGrey";
  frmRegStep3.lblTh.skin="txtGrey";
  frmRegStep3.flxRoundSat.skin = "flxbgGrey";
  frmRegStep3.lblSat.skin="txtGrey";
  
  frmRegStep3.tbxS.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonS.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxM.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonM.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxT.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonT.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxW.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonW.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxTh.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonTh.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxF.skin="tbxgreyborderbluetxt100";
  frmRegStep3.tbxMoonF.skin="tbxgreyborderbluetxt100";
  frmRegStep3.tbxSat.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonSat.skin="tbxgreyborderblacktxt100";
  
  frmRegStep3.flxRoundF.skin = "roundBgBlueWhitelbl";
  frmRegStep3.lblF.skin="txtWhite";
  frmRegStep3.tbxS.setEnabled(false);
  frmRegStep3.tbxMoonS.setEnabled(false);
  frmRegStep3.tbxM.setEnabled(false);
  frmRegStep3.tbxMoonM.setEnabled(false);
  frmRegStep3.tbxT.setEnabled(false);
  frmRegStep3.tbxMoonT.setEnabled(false);
  frmRegStep3.tbxW.setEnabled(false);
  frmRegStep3.tbxMoonW.setEnabled(false);
  frmRegStep3.tbxTh.setEnabled(false);
  frmRegStep3.tbxMoonTh.setEnabled(false);
  frmRegStep3.tbxF.setEnabled(true);
  frmRegStep3.tbxMoonF.setEnabled(true);
  frmRegStep3.tbxSat.setEnabled(false);
  frmRegStep3.tbxMoonSat.setEnabled(false);
}

function  onTouchStartTbxSat()
{
  frmRegStep3.flxRoundS.skin = "flxbgGrey";
  frmRegStep3.lblS.skin="txtGrey"; 
  frmRegStep3.flxRoundM.skin = "flxbgGrey";
  frmRegStep3.lblM.skin="txtGrey";  
  frmRegStep3.flxRoundT.skin = "flxbgGrey";
  frmRegStep3.lblT .skin="txtGrey";
  frmRegStep3.flxRoundTh.skin = "flxbgGrey";
  frmRegStep3.lblTh.skin="txtGrey";
  frmRegStep3.flxRoundF.skin = "flxbgGrey";
  frmRegStep3.lblF.skin="txtGrey";
  frmRegStep3.flxRoundW.skin = "flxbgGrey";
  frmRegStep3.lblW.skin="txtGrey";
  
  frmRegStep3.tbxS.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonS.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxM.skin="tbxgreyborderbluetxt100";
  frmRegStep3.tbxMoonM.skin="tbxgreyborderbluetxt100";
  frmRegStep3.tbxT.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonT.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxW.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonW.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxTh.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonTh.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxF.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxMoonF.skin="tbxgreyborderblacktxt100";
  frmRegStep3.tbxSat.skin="tbxgreyborderbluetxt100";
  frmRegStep3.tbxMoonSat.skin="tbxgreyborderbluetxt100";
  
  frmRegStep3.flxRoundSat.skin = "roundBgBlueWhitelbl";
  frmRegStep3.lblSat.skin="txtWhite";
  frmRegStep3.tbxS.setEnabled(false);
  frmRegStep3.tbxMoonS.setEnabled(false);
  frmRegStep3.tbxM.setEnabled(false);
  frmRegStep3.tbxMoonM.setEnabled(false);
  frmRegStep3.tbxT.setEnabled(false);
  frmRegStep3.tbxMoonT.setEnabled(false);
  frmRegStep3.tbxW.setEnabled(false);
  frmRegStep3.tbxMoonW.setEnabled(false);
  frmRegStep3.tbxTh.setEnabled(false);
  frmRegStep3.tbxMoonTh.setEnabled(false);
  frmRegStep3.tbxF.setEnabled(false);
  frmRegStep3.tbxMoonF.setEnabled(false);
  frmRegStep3.tbxSat.setEnabled(true);
  frmRegStep3.tbxMoonSat.setEnabled(true);
}


function onClickOfBtnMyChoice(){
  frmRegStep3.btnDaily.skin = "btnsknGreyBG";
  frmRegStep3.btnMyChoice.skin = "bgGreen" ;
  frmRegStep3.btnDaily.zIndex=1;
  frmRegStep3.btnMyChoice.zIndex=2;
  frmRegStep3.tbxM.setEnabled(false);
  frmRegStep3.tbxMoonM.setEnabled(false);
  frmRegStep3.tbxT.setEnabled(false);
  frmRegStep3.tbxMoonT.setEnabled(false);
  frmRegStep3.tbxW.setEnabled(false);
  frmRegStep3.tbxMoonW.setEnabled(false);
  frmRegStep3.tbxTh.setEnabled(false);
  frmRegStep3.tbxMoonTh.setEnabled(false);
  frmRegStep3.tbxF.setEnabled(false);
  frmRegStep3.tbxMoonF.setEnabled(false);
  frmRegStep3.tbxSat.setEnabled(false);
  frmRegStep3.tbxMoonSat.setEnabled(false);
  frmRegStep3.flxTbxs.setVisibility(true);
  frmRegStep3.flxTbxsDown.setVisibility(true);
  frmRegStep3.tbxSunDaily.setVisibility(false);
  frmRegStep3.tbxMoonDaily.setVisibility(false);
  
 
  
}

function onClickOfBtnDialy(){
  frmRegStep3.btnDaily.skin = "bgGreen";
  frmRegStep3.btnMyChoice.skin = "btnsknGreyBG" ;
  frmRegStep3.btnDaily.zIndex=2;
  frmRegStep3.btnMyChoice.zIndex=1;
  frmRegStep3.flxTbxs.setVisibility(false);
  frmRegStep3.flxTbxsDown.setVisibility(false);
  frmRegStep3.tbxSunDaily.setVisibility(true);
  frmRegStep3.tbxMoonDaily.setVisibility(true);
}

function onClickOfPrepaid(){

  frmRegStep3.btnPrepaid.skin = "bgGreen";
  frmRegStep3.btnPostpaid.skin = "btnsknGreyBG" ;
  frmRegStep3.btnPrepaid.zIndex=2;
  frmRegStep3.btnPostpaid.zIndex=1;
}

function onClickOfPostpaid()
{
  frmRegStep3.btnPrepaid.skin = "btnsknGreyBG";
  frmRegStep3.btnPostpaid.skin = "bgGreen" ;
  frmRegStep3.btnPrepaid.zIndex=1;
  frmRegStep3.btnPostpaid.zIndex=2;
}


function showLocations()
{
  frmRegStep2.lineHorizontal.setVisibility(false);
  frmRegStep2.flxSegmentLocality.setVisibility(true); 
  frmRegStep2.segCity.onRowClick = selectCityName;
}

function showStreets()
{
  frmRegStep2.lblUnderline2.setVisibility(false);
  frmRegStep2.flxSegmentStreets.setVisibility(true); 
  frmRegStep2.segStreets.onRowClick = selectStreetName;
}


function selectStreetName()
{
  var array = frmRegStep2.segStreets.selectedRowItems;
  //alert(array);
  //kony.print(array);
  frmRegStep2.tbxStreet.text=array[0].lblSegmentData;
  frmRegStep2.lblUnderline2.setVisibility(true);
  frmRegStep2.flxSegmentStreets.setVisibility(false);


}
function selectCityName()
{
  var array = frmRegStep2.segCity.selectedRowItems;
  //alert(array);
  //kony.print(array);
  frmRegStep2.tbxLocation.text=array[0].lblSegmentData;
  frmRegStep2.lineHorizontal.setVisibility(true);
  frmRegStep2.flxSegmentLocality.setVisibility(false);


}
function hideSegment()
{
  frmRegStep2.tbxLocation.text = "";
  frmRegStep2.tbxLocation.placeholder= "Enter Your Location";
  frmRegStep2.tbxLocation.setEnabled(true);
  frmRegStep2.flxSegmentLocality.setVisibility(false);
  frmRegStep2.tbxLocation.setFocus(true);
  frmRegStep2.lineHorizontal.setVisibility(true);
}

function hideStreetSeg()
{
  frmRegStep2.tbxStreet.text = "";
  frmRegStep2.tbxStreet.placeholder= "Enter Your Street";
  frmRegStep2.tbxStreet.setEnabled(true);
  frmRegStep2.flxSegmentStreets.setVisibility(false);
  frmRegStep2.tbxStreet.setFocus(true);
  frmRegStep2.lblUnderline2.setVisibility(true);
}


function chooseProduct()
{
  frmRegStep3.lineHorizontal.setVisibility(false);
  frmRegStep3.flxSegmentLocality.setVisibility(true); 
  frmRegStep3.segCity.onRowClick = selectProduct;
}


    
function selectProduct()
{
  var array =frmRegStep3.segCity.selectedRowItems; 
  //alert(array);
  //kony.print(array);
  frmRegStep3.tbxSelectProduct.text=array[0].lblSegmentData;
  frmRegStep3.lineHorizontal.setVisibility(true);
  frmRegStep3.flxSegmentLocality.setVisibility(false);
}

function hideSegmentProducts()
{
  frmRegStep3.tbxSelectProduct.text = "";
  frmRegStep3.tbxSelectProduct.placeholder= "Enter Your Product";
  frmRegStep3.tbxSelectProduct.setEnabled(true);
  frmRegStep3.flxSegmentLocality.setVisibility(false);
  frmRegStep3.tbxSelectProduct.setFocus(true);
  frmRegStep3.lineHorizontal.setVisibility(true);
}

function chooseUnit()
{ 
  frmRegStep3.lblUnderLine2.setVisibility(false);
  frmRegStep3.flxSegmentUnit.setVisibility(true); 
  frmRegStep3.segUnit.onRowClick = selectUnit;
}

function selectUnit()
{
  var array =frmRegStep3.segUnit.selectedRowItems; 
  frmRegStep3.tbxSelectUnit.text=array[0].lblSegmentData;
  frmRegStep3.lblUnderLine2.setVisibility(true);
  frmRegStep3.flxSegmentUnit.setVisibility(false);
}

function hideSegmentUnits()
{
  frmRegStep3.tbxSelectUnit.text = "";
  frmRegStep3.tbxSelectUnit.placeholder= "Enter Your Unit";
  frmRegStep3.tbxSelectUnit.setEnabled(true);
  frmRegStep3.flxSegmentUnit.setVisibility(false);
  frmRegStep3.tbxSelectUnit.setFocus(true);
  frmRegStep3.lblUnderLine2.setVisibility(true);
}

function frmPaymentOnClickContinue()
{
  var product = frmRegStep3.tbxSelectProduct.text;
  var unit=frmRegStep3.tbxSelectUnit.text;
  var quantity=frmRegStep3.tbxQuantity.text;
  var deliveryCharges=frmRegStep3.tbxDeliveryCharges.text;
  
  if(((product !== null && product !== "" && product !== undefined)&&
      (unit !== null && unit !== "" && unit !== undefined) &&
      (quantity !== null && quantity !== "" && quantity !== undefined) &&
      (deliveryCharges !== null && deliveryCharges !== "" && deliveryCharges !== undefined)))
      {
        kony.print("in validations success");
         frmRegStep3.lblErrMsgPayment.text = "";
       // frmReg_Init();
        //frmRegStep1.show();
                 //alert("Validations satisfied");
      }else
        {
          frmRegStep3.lblErrMsgPayment.text = "Please fill all the details .";
          frmRegStep3.lblErrMsgPayment.skin = "lblRedErrMsg";
          //alert("error message");
        }
}


function invokeNewCustReg(){
   /*var addSubsProd = {
    "username": "", //TO DO
    "mobileno": frmRegStep1.tbxMobileNumber.text,
     "emailid": frmRegStep1.tbxEmail.text,
     "lastname":frmRegStep1.tbxLastName.text,
     "firstname": frmRegStep1.tbxFirstName.text,
     "prefferedtime":frmRegStep1.RadiobtnsForTime.selectedKeyValue, //TO DO
     "addline1":,
     "addline2":
    };*/
    var suspendDetJ = JSON.stringify(suspendDet);
    showLoadingIndicator();
   // frmDashboard.show();
    //dismissLoadingIndicator();
    invokeServiceCall("adduserwithsubscription", addSubsProd, constants.HTTP_METHOD_POST, suspendCustomerCallBack, "application/x-www-form-urlencoded");
 
}
