//Type your code here
function animationMngTop() {
  frmManageSubscriptions.flxSpcEffect.setVisibility(true);
    frmManageSubscriptions.flxScrollSpcEffect.animate(getAnimationObject(),
        animConfig(), {
            "animationStart": function() {
                //Write Code Here
            },
            "animationEnd": endCallBack
        }
    );
  
}

function animationMngBtm() {
    frmManageSubscriptions.flxScrollSpcEffect.animate(getAnimationObjectBtm(),
        animConfig(), {
            "animationStart": function() {
                //Write Code Here
            },
            "animationEnd": endCallBackBtm
        }
    );
}


function getAnimationObjectBtm() {
    var animDefinition = {
        "0": {
            "top": "34%",
            "left": "0dp"
        },
        "100": {
            "top": "100%",
            "left": "0dp"
        }
    };
    animDef = kony.ui.createAnimation(animDefinition);
    return animDef;
}

function getAnimationObject() {
    var animDefinition = {
        "0": {
            "top": "100%",
            "left": "0dp"
        },
        "100": {
            "top": "34%",
            "left": "0dp"
        }
    };
    animDef = kony.ui.createAnimation(animDefinition);
    return animDef;
}

function animConfig() {
    var config = {
        "duration": 1,
        "iterationCount": 1,
        "delay": 0,
        "direction": kony.anim.ANIMATION_EFFECT_TOP,
        "fillMode": kony.anim.FILL_MODE_FORWARDS
    };
    return config;
}

function endCallBack() {
    //Write Code Here
 // alert("call back");
}

function endCallBackBtm(){
  frmManageSubscriptions.flxSpcEffect.setVisibility(false);
}


function MngSubPreShow(){
  frmManageSubscriptions.flxDaily.onTouchStart = onClickDailyInv;
  frmManageSubscriptions.flxMyChoice.onTouchStart = onClickMyChoiceInv;
  frmManageSubscriptions.imgDaily.src = "radio.png";
  frmManageSubscriptions.imgMyChoice.src = "radio.png";
  frmManageSubscriptions.flxInvCal.setVisibility(false);
  frmManageSubscriptions.flxDailyTxt.setVisibility(false);
  frmManageSubscriptions.headers[0].lblHeader.text = "Manage Subscription"
}

function onClickDailyInv(){
  frmManageSubscriptions.imgDaily.src = "radio01.png";
  frmManageSubscriptions.imgMyChoice.src = "radio.png";
  frmManageSubscriptions.flxInvCal.setVisibility(false);
  frmManageSubscriptions.flxDailyTxt.setVisibility(true);
  var wigArr = [frmManageSubscriptions.txtSunValInv,frmManageSubscriptions.txtMonValInv,frmManageSubscriptions.txtTueValInv,frmManageSubscriptions.txtWedInv,frmManageSubscriptions.txtThuValInv,frmManageSubscriptions.txtFriValInv,frmManageSubscriptions.txtSatValInv];
  setDefaultTxtValue(wigArr)
}

function onClickMyChoiceInv(){
  frmManageSubscriptions.imgDaily.src = "radio.png";
  frmManageSubscriptions.imgMyChoice.src = "radio01.png";
  frmManageSubscriptions.flxInvCal.setVisibility(true);
  frmManageSubscriptions.flxDailyTxt.setVisibility(false);
  frmManageSubscriptions.txtDaily.text = "0";
}


function populateSegDateMngSubEdit(){
  var selSegData = frmManageSubscriptions.segMngSub.selectedRowItems[0];
  frmManageSubscriptions.lblProductNameSE.text = selSegData["lblProductName"];
  frmManageSubscriptions.lblUnitsSE.text = selSegData["lblUnits"];
  frmManageSubscriptions.lblfrmDateSE.text = selSegData["lblfrmDate"];
  frmManageSubscriptions.txtSunVal.text = selSegData["lblSunVal"];
  frmManageSubscriptions.txtMonVal.text = selSegData["lblMonVal"];
  frmManageSubscriptions.txtTueVal.text = selSegData["lblTueVal"];
  frmManageSubscriptions.txtWedVal.text = selSegData["lblWedVal"];
  frmManageSubscriptions.txtThuVal.text = selSegData["lblThrVal"];
  frmManageSubscriptions.txtFriVal.text = selSegData["lblFriVal"];
  frmManageSubscriptions.txtSatVal.text = selSegData["lblSatVal"];
  animationMngTop();
}


function invokeaddprdcttosubscrbyadmin(){
 /*  var addSubsProd = {
    "subsrid": subId,
    "productid": today,
     "quantity":,
     "startdate":frmManageSubscriptions.calFrom.,
     "prefferedtime":,
     "userid":,
     "frequency":
    };*/
    var suspendDetJ = JSON.stringify(suspendDet);
    showLoadingIndicator();
   // frmDashboard.show();
    //dismissLoadingIndicator();
    invokeServiceCall("addprdcttosubscrbyadmin", addSubsProd, constants.HTTP_METHOD_POST, suspendCustomerCallBack, "application/x-www-form-urlencoded");
 
}