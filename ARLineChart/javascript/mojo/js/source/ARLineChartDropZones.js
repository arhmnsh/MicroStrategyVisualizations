(function () { 
    if (!mstrmojo.plugins.ARLineChart) {
        mstrmojo.plugins.ARLineChart = {};
    }

    mstrmojo.requiresCls(
        "mstrmojo.vi.models.CustomVisDropZones",
        "mstrmojo.array"
    );

    mstrmojo.plugins.ARLineChart.ARLineChartDropZones = mstrmojo.declare(
        mstrmojo.vi.models.CustomVisDropZones,
        null,
        {
            scriptClass: "mstrmojo.plugins.ARLineChart.ARLineChartDropZones",
            cssClass: "arlinechartdropzones",
            getCustomDropZones: function getCustomDropZones(){
  return [ 
 { 
name: 'Rows', 
title:'Drag Attribute Here', 
allowObjectType:1
 }, { 
name: 'Columns', 
title:'Drag Attribute Here', 
allowObjectType:1
 }, { 
name: 'Metrics', 
title:'Drag Metric Here', 
allowObjectType:2
 }
 ];},
            shouldAllowObjectsInDropZone: function shouldAllowObjectsInDropZone(zone, dragObjects, idx, edge, context) {
 
 
 
 








},
            getActionsForObjectsDropped: function getActionsForObjectsDropped(zone, droppedObjects, idx, replaceObject, extras) {
 
 
 
 








},
            getActionsForObjectsRemoved: function getActionsForObjectsRemoved(zone, objects) { 
  
  
  
 








},
            getDropZoneContextMenuItems: function getDropZoneContextMenuItems(cfg, zone, object, el) {
 
 
 
 








}
})}());
//@ sourceURL=ARLineChartDropZones.js