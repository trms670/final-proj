var post= document.getElementById("submit");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box").value;
    var ratingBoxValue = parseFloat(document.getElementById("rating").value);
    var warning = document.getElementById("warning");
    var warning2 = document.getElementById("warning2");
    if (commentBoxValue == "") {
        warning.removeAttribute("hidden");
    }
    else if (ratingBoxValue == NaN || ratingBoxValue < 0 || ratingBoxValue > 10){
        warning2.removeAttribute("hidden");
    }   
    else {
        warning.setAttribute("hidden", true);
        warning2.setAttribute("hidden", true);
        let table = document.getElementById("reviews");
        let row = table.insertRow();
        let c1 = row.insertCell(0);
        c1.innerText = commentBoxValue;
        let c2 = row.insertCell(1);
        c2.innerText = ratingBoxValue
        document.getElementById("comment-box").value = "";
        document.getElementById("rating").value = "";
    }
});