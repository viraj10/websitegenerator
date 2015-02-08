$( document ).ready(function() {
    console.log( "ready!" );
    var serialCounter=0;
    var fieldName="fieldName";
    $( "#addMoreRow" ).click(function() {
    	serialCounter++;
    	var srnoStr="<td>"+serialCounter+"</td>";
    	var textNameStr="<td><input type='text' name="+fieldName+"/></td>";
    	var selectTypeStr="<td><select><option>hi</option></select></td>"
    	$('#tableAddContainer tr:last').after('<tr>'+srnoStr+textNameStr+selectTypeStr+'</tr>');
    });
});