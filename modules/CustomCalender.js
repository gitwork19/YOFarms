//Type your code here
var flxTopBWROWS = 16;
var month = "";
var year = "";
var WeekStartDay = 0;
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
function createCal(){
	var ROWCOUNT = 7;
	var COLCOUNT = 6;
	var ROWCOUNTER = 0;
	var getDaysData =  retrivemonthData(month, year);
	var flxTop = 1 ;	  
	frmCustomerCalendar.flxDates.removeAll();
  	frmCustomerCalendar.setDefaultUnit(kony.flex.DP);  
	for(var i=1;i<=COLCOUNT;i++){
	var flxDateRow = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "flxDateRow"+i.toString(),
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "top": "1%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxDateRow.setDefaultUnit(kony.flex.DP);
	if(i==1){
      flxTop = flxTop;
    }else{
      flxTop = flxTop+flxTopBWROWS;
    }
	kony.print("----- flxTop ------"+flxTop);
    flxDateRow.top = flxTop.toString()+"%";	
	kony.print("First iteration before:"+ROWCOUNT+"ROWCOUNTER BEFORE::"+ROWCOUNTER)

    for(var j=ROWCOUNTER;j<ROWCOUNT;j++){
		kony.print("getDaysData::"+JSON.stringify(getDaysData))
		var date = getDaysData[j]["DaysDisplay"]["Day"]!= undefined ? getDaysData[j]["DaysDisplay"]["Day"] : "";
		var isDayVisible =  getDaysData[j]["DaysDisplay"]["isMothDay"]!= undefined ? getDaysData[j]["DaysDisplay"]["isMothDay"] : "";		
		kony.print("date::"+date+"isDayVisible::"+isDayVisible)
		var flxDate = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "flxDate"+j.toString(),
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "slFbox",
        "width": "14%",
        "zIndex": 1
    }, {}, {});
    flxDate.setDefaultUnit(kony.flex.DP);
    var lblDate = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "lbl"+j.toString(),
        "isVisible": isDayVisible,//isDayVisible,
        "left": "0%",
        "skin": "konympdrsknlblwhite",
        "text": date,
      	"onTouchStart":selectedDateCal,
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": 0,
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxDate.add(lblDate);
	flxDateRow.add(flxDate);
	}
	ROWCOUNT = ROWCOUNT + 7;
	ROWCOUNTER = ROWCOUNTER + 7;
	kony.print("First iteration after:"+ROWCOUNT+"ROWCOUNTER AFTER::"+ROWCOUNTER);
	frmCustomerCalendar.flxDates.add(flxDateRow);
 
	}
  frmCustomerCalendar.imgNext.onTouchStart = next;
  frmCustomerCalendar.imgPrev.onTouchStart = previous;
  kony.print("month" + month + year);
  frmCustomerCalendar.lblMonthYear.text = months[month] + " "+ year;
  frmCustomerCalendar.headers[0].lblHeader.text = "Customer Calendar";
  gblSubIdMngSub = frmCustomerList.segCustList.selectedRowItems[0]["lblHiddenSubId"];
  frmCustomerCalendar.show();

}
function next() {
    year = (month === 11) ? year + 1 : year;
    month = (month + 1) % 12;
    createCal()
  
}
function previous() {
    year = (month === 0) ? year - 1 : year;
    month = (month === 0) ? 11 : month - 1;
    createCal()
}
function currentMonthData(){
  	var d = new Date();
    month = d.getMonth();
    year = d.getFullYear();  
    createCal()
}

function getFullDates(){
	var d = new Date();
    month = d.getMonth();
    year = d.getFullYear();
	MONTHHEADERCOUNT =5
	var data = [];
	var MonthData = [];	
  //DataConstructorIntializate();  
 var getData =  retrivemonthData(month, year);
 kony.print("getData data::"+JSON.stringify(getData));	
}
function retrivemonthData(month, year){
	kony.print("month>>"+month+year>>+year);
	try{
			var d = new Date();
            d.setDate(1);
            d.setMonth(month);
            d.setFullYear(year);
            var emptycellslength = d.getDay() - WeekStartDay;
            if (emptycellslength < 0) {
                emptycellslength = 7 - emptycellslength * -1;
            }
            var data = [];
            d.setDate(d.getDate() - emptycellslength);
            for (var i = 0; i <= emptycellslength - 1; i++) {
                data[i] = {
                    "DaysDisplay": {
                        "Day": d.getDate().toFixed(),
                        "Date": d.toDateString(),
                        "isMothDay": false
                    }
                   
                };
                d.setDate(d.getDate() + 1);
            }
            for (i = emptycellslength; i < 42; i++) {
                if (d.getMonth() === month) {
                    data[i] = {
                        "DaysDisplay": {
                            "Day": d.getDate().toFixed(),
                            "Date": d.toDateString(),
                            "isMothDay": true
                        }
                        
                    };

                } else {
                    data[i] = {
                        "DaysDisplay": {
                            "Day": d.getDate().toFixed(),
                            "Date": d.toDateString(),
                            "isMothDay": false
                        }
                        
                    };
                }
                d.setDate(d.getDate() + 1);
            }
            return data;
			//kony.print("retrivemonthData data::"+JSON.stringify(monthDetailsJson));

	}
	catch(e){		
			kony.print("retrivemonthData e:::"+e)
	}
}


function onClickCalDate(Qty){
  var fianlData = [ {
    "imgDairyfarm":{src:"profile.png"},
    "lblProductName":"Desi Cow Milk",
    "lblUnits":"500ml",
    "lblQuantity":"Qty:",
    "lblQtyValue":Qty
     }, {
    "imgDairyfarm":{src:"profile.png"},
    "lblProductName":"Desi Cow Milk",
    "lblUnits":"500ml",
    "lblQuantity":"Qty:",
    "lblQtyValue":"2"
     }, {
    "imgDairyfarm":{src:"profile.png"},
    "lblProductName":"Desi Cow Milk",
    "lblUnits":"500ml",
    "lblQuantity":"Qty:",
    "lblQtyValue":"1"
     }];
  frmCustomerCalendar.segCustProd.setData(fianlData);
}

function selectedDateCal(eventobject){
 // alert(JSON.stringify(eventobject));
  kony.print(eventobject.id + "ewfhui" + eventobject.text);
  onClickCalDate(eventobject.text);
}

function frmEditPreShow(){
  frmEdit.headers[0].lblHeader.text = "Edit";
  frmEdit.calFrom.clear();
  frmEdit.calTo.clear();
  
  kony.print(gblSelCustRs + "gblSelCustRs")
  
  var currProdList = [];
    var prodList = [];
  var prodDetails = gblSelCustRs["productdetials"];
  kony.print(prodDetails + "prodDetails" + prodDetails.length);
  for(var j=0;j< prodDetails.length;j++){
			
          		for(var k=0;k<gblProdList.length;k++){
                  if(gblProdList[k]["productid"] == parseInt(prodDetails[j]["productid"])){
                    productName = gblProdList[k]["name"];
                  }
                }
          
    
          var keyname = "prodType"+j
          var keyList = [keyname,productName]
          prodList.push(keyList)
         }
  frmEdit.listBoxProdType.masterData = prodList;
  frmEdit.ListBoxDairy.masterData =[["lbl1","Jeevana"]];
   frmEdit.lblUserName.text =  frmCustomerCalendar.lblUserName.text
  frmEdit.listBoxProdType.onSelection = function (){
   var prodUnitMp = pushProdUnit(frmEdit.listBoxProdType.selectedKeyValue[1]);
    frmEdit.listBoxUnit.masterData = prodUnitMp;
  };
  
}


function invokeEditTempCustProdDel(){
  var inpPar = {
    "subsrid": gblSubIdMngSub,
    "subprdid":  getIdFrmProductName(frmEdit.listBoxProdType.selectedKeyValue[1]),
    "requestby":"ADMIN",
    "quantity":frmEdit.txtQty.text,
    "frmdate":DateFormatddmmyy(frmEdit.calFrom.formattedDate),
    "todate":DateFormatddmmyy(frmEdit.calTo.formattedDate),
    "requeststatus":"APPROVED"
    };
    var inpParJ = JSON.stringify(inpPar);
    showLoadingIndicator();
    invokeServiceCall("updateprdsubscrbyadmin", inpParJ, constants.HTTP_METHOD_POST, suspendCustomerCallBack, "application/x-www-form-urlencoded");
 
}

function onclckCalCustList(){
  gblSelCustRs = frmCustomerList.segCustList.selectedRowItems[0]["lblHiddenRs"];
  alert(gblSelCustRs)
  gblUserIdMngSub = frmCustomerList.segCustList.selectedRowItems[0]["lblHiddenUserID"];
  frmCustomerCalendar.lblUserName.text = gblSelCustRs["firstname"] + gblSelCustRs["lastname"];
  currentMonthData();
}
