function TotalsSheet() {
    var ss, merged, array;
    ss = SpreadsheetApp.getActiveSpreadsheet();
    merged = ss.getSheetByName("MergedMasterSheet");
    
    //create sheet if it doesn't exist, else clear all content
    merged = !merged ? ss.insertSheet("MergedMasterSheet") : merged.clear();
    
    merged.getRange("A1").setValue("Country");
    merged.getRange("B1").setValue("Domain");
    merged.getRange("C1").setValue("Metric Type");
    merged.getRange("D1").setValue("Date");
    merged.getRange("E1").setValue("Metric");
    
    //create a 2D-array containing all data of all sheets, except the sheet for the merged data
    ss.getSheets().forEach(function (sh, i) {
        if((sh.getName()) !== ("MergedMasterSheet" && "Desktop Visits" && "MobileWeb Visits" && "Desktop MAU" && "MobileWeb MAU" && "Desktop Bounce Rate" && "Mobile Bounce Rate")) {
        array = (i == 0) ? sh.getDataRange().getValues() : array.concat(sh.getDataRange().getValues())
        }
    })
    
    //filter out rows with no value in first column
    array = array.filter(function (r) {
        return r[0];
    })
    
    //write everything to the merged sheet in one call
    merged.getRange(2, 1, array.length, array[0].length).setValues(array)
    }