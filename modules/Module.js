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