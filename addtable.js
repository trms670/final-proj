var post= document.getElementById("submit");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box").value;
    var warning = document.getElementById("warning");
    if (commentBoxValue == "") {
        warning.removeAttribute("hidden");
    }   
    else {
        warning.setAttribute("hidden", true);
        let table = document.getElementById("reviews");
        let row = table.insertRow();
        let c1 = row.insertCell(0);
        c1.innerText = commentBoxValue;
        document.getElementById("comment-box").value = "";
    }
});