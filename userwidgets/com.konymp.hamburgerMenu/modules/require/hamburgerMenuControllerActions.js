define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchStart defined for imgHamburger **/
    AS_Image_g69ecf6e9fd640feaa6611d0cc8cb988: function AS_Image_g69ecf6e9fd640feaa6611d0cc8cb988(eventobject, x, y) {
        var self = this;
        this.setMenuVisibility(true);
    },
    /** onRowClick defined for segMenu **/
    AS_Segment_b5ebd21f20924581abe115c570994e83: function AS_Segment_b5ebd21f20924581abe115c570994e83(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.setMenuVisibility(false);
        this.onSegMenuRowClick.call(this, rowNumber);
    },
    /** onClick defined for flxMenuTrans **/
    AS_FlexContainer_ba8a7cbdcdd54659b2737bce243d3561: function AS_FlexContainer_ba8a7cbdcdd54659b2737bce243d3561(eventobject) {
        var self = this;
        this.setMenuVisibility(false);
    },
    /** postShow defined for hamburgerMenu **/
    AS_FlexContainer_d67a6befc7be47a2a11388b5826b1210: function AS_FlexContainer_d67a6befc7be47a2a11388b5826b1210(eventobject) {
        var self = this;
        this.setMenuVisibility(false);
    }
});