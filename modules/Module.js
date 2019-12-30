function setChartValue()
{
  
  frmDashboard.donutchart1.chartData={"data": [{
            "colorCode": "#e7ae1f",
            "label": "",
            "value": "70"
        },{
            "colorCode": "#777777",
            "label": "",
            "value": "30"
        },]};
 frmDashboard.donutchart1.enableStaticPreview = true;
  frmDashboard.donutchart1.enableLegend = false;
  frmDashboard.donutchart1.legendFontColor = "#000000";

 frmDashboard.donutchart1.legendFontSize = "8";
  
   frmDashboard.donutchart2.chartData= {"data": [{
            "colorCode": "#029372",
            "label": "",
            "value": "70"
        },{
            "colorCode": "#777777",
            "label": "",
            "value": "30"
        }],};
  
  frmDashboard.donutchart2.enableStaticPreview = true;
  frmDashboard.donutchart2.enableLegend = false;
  frmDashboard.donutchart2.legendFontColor = "#000000";
  frmDashboard.donutchart2.legendFontSize = "8";
  frmDashboard.hamburgerMenu.menuItems = [{
      "lblMenuItem":"hello",
      "imgMenuItem":""
    },{
      "lblMenuItem":"hello",
      "imgMenuItem":""
    },{
      "lblMenuItem":"hello",
      "imgMenuItem":""
    }];

}



function setChart()
{
   Form1.donutchart3.chartData= {"data": [{
            "colorCode": "#E8672B",
            "label": "varun",
            "value": "70"
        },{
            "colorCode": "#EFF216",
            "label": "varun",
            "value": "30"
        }],};
  
   Form1.donutchart3.enableStaticPreview = true;
  Form1.donutchart3.enableLegend = true;
   Form1.donutchart3.legendFontColor = "#000000";

 Form1.donutchart3.legendFontSize = "8";
}



//Type your code here
function locality(){
    Form2.tbxLocation.autoFilter=true;
    Form2.tbxLocation.filterList=["Vijayawada","Vellore","Guntur","Gudivada"];
    Form2.fscSegment.zIndex="2";
    var cityList=[];
    Form2.fscSegment.setVisibility(true);
    Form2.fscTotal.onClick=clicking;
    var city=Form2.tbxLocation.text;
    var name=[{"lblSegmentData":"Vijayawada"},
              {"lblSegmentData":"Vellore"},
              {"lblSegmentData":"Guntur"},
              {"lblSegmentData":"Gudivada"}];
    kony.print("name");
    Form2.segCity.setData(name);
    Form2.segCity.onRowClick = onRowClicking;
    kony.print("segCity");
    var arrayLength=name[0].length;
    var names=name[0].lblSegmentData;
    kony.print("names");  
}
function clicking(){
      Form2.fscSegment.setVisibility(false);   
    }
function onRowClicking(){
  Form2.fscSegment.setVisibility(false);
  var selectedItems=Form2.segCity.selectedRowItems[0].lblSegmentData;
  Form2.tbxLocation.text=selectedItems;
  kony.print(Form2.tbxLocation.text);
}

function onEdit(){
 frmManageSubscriptions.show();
}
function onBillClick(){
  alert("Bill Clicked");
}
function onDeleteClicked(){
  alert("delete Clicked");
}
function onCalendar(){
  frmCustomerCalendar.show();
}

function onClickMenu()
{
  if(isMenuVisible === false)
  	frmDashboard.hamburgerMenu.setMenuVisibility(true);
  else
    frmDashboard.hamburgerMenu.setMenuVisibility(false);
}

function onBack(){
  var getCurrForm = kony.application.getCurrentForm().id;
  switch(getCurrForm)
    {
      default:{
        kony.application.getPreviousForm();
        break;
      }
    }
}