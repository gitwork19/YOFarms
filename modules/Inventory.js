//Type your code here
function inventorySelBoy(){
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