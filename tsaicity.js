var post= document.getElementById("submit");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box").value;
    let table = document.getElementById("reviews");
    let row = table.insertRow();
    let c1 = row.insertCell(0);
    c1.innerText = commentBoxValue;
    // var li = document.createElement("li");
    // var text = document.createTextNode(commentBoxValue);
    // li.appendChild(text);
    // document.getElementById("unordered").appendChild(li);
 
});