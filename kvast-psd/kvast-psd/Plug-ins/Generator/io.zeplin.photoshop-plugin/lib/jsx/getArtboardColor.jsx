var idslct=charIDToTypeID("slct"),desc3=new ActionDescriptor,idnull=charIDToTypeID("null"),ref3=new ActionReference,idLyr=charIDToTypeID("Lyr ");ref3.putIdentifier(idLyr,params.layerId),desc3.putReference(idnull,ref3);var idMkVs=charIDToTypeID("MkVs");desc3.putBoolean(idMkVs,!1),executeAction(idslct,desc3,DialogModes.NO);var classLayer=charIDToTypeID("Lyr "),idnull=stringIDToTypeID("null"),classProperty=charIDToTypeID("Prpr"),typeOrdinal=charIDToTypeID("Ordn"),enumTarget=charIDToTypeID("Trgt"),idred=charIDToTypeID("Rd  "),idgreen=charIDToTypeID("Grn "),idblue=charIDToTypeID("Bl  "),actionGet=charIDToTypeID("getd"),idartboard=stringIDToTypeID("artboard"),idartboardColor=stringIDToTypeID("color"),idartboardBgType=stringIDToTypeID("artboardBackgroundType"),layerRef=new ActionReference;layerRef.putProperty(classProperty,idartboard),layerRef.putEnumerated(classLayer,typeOrdinal,enumTarget);var getDescriptor=new ActionDescriptor;getDescriptor.putReference(idnull,layerRef);var artboard=executeAction(actionGet,getDescriptor,DialogModes.NO).getObjectValue(idartboard),bgType=artboard.getInteger(idartboardBgType),bgColor;switch(bgType){case 1:bgColor=[255,255,255,1];break;case 2:bgColor=[0,0,0,1];break;case 3:break;default:var artboardColor=artboard.getObjectValue(idartboardColor);bgColor=[artboardColor.getInteger(idred),artboardColor.getInteger(idgreen),artboardColor.getInteger(idblue),1]}