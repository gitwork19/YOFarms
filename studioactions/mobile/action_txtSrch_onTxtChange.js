function action_txtSrch_onTxtChange(eventobject, changedtext) {
    return AS_TextField_c30a3bf7d7cf4014bd04c6a517279ece(eventobject, changedtext);
}

function AS_TextField_c30a3bf7d7cf4014bd04c6a517279ece(eventobject, changedtext) {
    var modifiedData = getSearchResult(gblCustList, frmCustomerList.txtSearch.text);
    frmCustomerList.segCustList.setData(modifiedData);
}