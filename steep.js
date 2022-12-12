var post= document.getElementById("submit");
var keycount = 0;
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box").value;
    var warning = document.getElementById("warning");
    if (commentBoxValue == "") {
        warning.removeAttribute("hidden");
    }
    else {
        warning.setAttribute("hidden", true);
        let table = document.getElementById("reviews");
        localStorage.setItem(keycount, commentBoxValue);
        var rowCount = table.rows.length;
        for (var i = rowCount - 1; i > 0; i--) {
            table.deleteRow(i);
        }
        for ( var i = 0, len = localStorage.length; i < len; ++i ) {
            let row = table.insertRow();
            let c1 = row.insertCell(0);
            c1.innerText = localStorage.getItem( localStorage.key( i ) );
        }
        keycount++;
        document.getElementById("comment-box").value = "";
    }
});