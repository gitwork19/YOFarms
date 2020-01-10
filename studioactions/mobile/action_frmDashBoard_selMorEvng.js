function action_frmDashBoard_selMorEvng(eventobject) {
    return AS_RadioButtonGroup_f895aa4edb4c4dc68e8daa26a21a577e(eventobject);
}

function AS_RadioButtonGroup_f895aa4edb4c4dc68e8daa26a21a577e(eventobject) {
    return showProdDeliListDashboard.call(this, frmDashboard.radTime.selectedKey);
}