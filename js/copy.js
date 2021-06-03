function selectText(containerid) {
  
  if (document.selection) { // IE
    
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    
  } else if (window.getSelection) {
    
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    
  }
}