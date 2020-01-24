function action_CustList_Srch_onDone(eventobject, changedtext) {
    return AS_TextField_a58b020b6b9b4fa0ae129388a9866199(eventobject, changedtext);
}

function AS_TextField_a58b020b6b9b4fa0ae129388a9866199(eventobject, changedtext) {
    var modifiedData = getSearchResult(gblCustList, frmCustomerList.txtSearch.text);
    frmCustomerList.segCustList.setData(modifiedData);
}