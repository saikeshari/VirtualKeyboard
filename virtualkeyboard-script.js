function addNumbers(){
    for(var i=0;i<10;i++)
    {
        document.getElementById("numbers").innerHTML+="<button class='keyss'>" + i + "</button>";
    }
    document.getElementById("numbers").innerHTML+="<button id='backspace'>" + "<i class='fas fa-backspace'></i>" + "</button>";
}

function addAlphabet1()
{
    var s="qwertyuiop";
    for(var i=0;i<s.length;i++)
    {
        document.getElementById("alphabet1").innerHTML+="<button class='keyss'>" + s.charAt(i) + "</button>";
    }
}

function addAlphabet2()
{
    document.getElementById("alphabet2").innerHTML+="<button id='caps-btn'>" + "<i class='fas fa-font'></i> <svg fill='#004134' height='32' width='40'><circle cx='20' cy='5' r='5' stroke='none'><?svg>" + "</button>";
    var s="asdfghjkl";
    for(var i=0;i<s.length;i++)
    {
        document.getElementById("alphabet2").innerHTML+="<button class='keyss'>" + s.charAt(i) + "</button>";
    }
    document.getElementById("alphabet2").innerHTML+="<button>" + "<i class='fas fa-arrow-left'></i>" + "</button>";
}

function addAlphabet3()
{
    document.getElementById("alphabet3").innerHTML+="<button id='done-key'>" + "<i class='fas fa-check-circle'></i>" + "</button>";
    var s="zxcvbnm,.?";
    for(var i=0;i<s.length;i++)
    {
        document.getElementById("alphabet3").innerHTML+="<button class='keyss'>" + s.charAt(i) + "</button>";
    }
}

function addSpaceKey()
{
    document.getElementById("spacekey").innerHTML+="<button id='space-key'>" + "SPACE"+ "</button>";
}



function caps()
{
    var btns=document.querySelectorAll(".keyss");
    for(var i=0;i<btns.length;i++)
    {
        var text=btns[i].innerHTML;
        if(text === text.toUpperCase())
        {
            btns[i].innerHTML=text.toLowerCase();
        }
        else{
            btns[i].innerHTML=text.toUpperCase();
        }
    }
    var cir=document.querySelector("#caps-btn svg");
    cir.classList.toggle("circle-yellow");
}




addNumbers();
addAlphabet1();
addAlphabet2();
addAlphabet3();
addSpaceKey();

var capsBtn=document.querySelector("#caps-btn");

capsBtn.addEventListener("click", function(){
    caps();
})

var textarea1=document.querySelector("textarea");

function addValue(keyToAdd)
{
    textarea1.value+=keyToAdd.textContent;
}

var btns=document.querySelectorAll(".keyss");
btns.forEach(function(btn1){
    btn1.addEventListener("click", function(){
        addValue(btn1);
    })
})

var backspc=document.querySelector("#backspace");
backspc.addEventListener("click", function(){
    var text1=textarea1.value;
    var length1=text1.length;
    textarea1.value=text1.substr(0,length1-1);
})

// var enterkey=document.querySelector("#enterk-key");
// enterkey.addEventListener("click", function(){
//     var text1=textarea1.value;
//     set
// })

var spaceKey=document.querySelector("#space-key");
spaceKey.addEventListener("click", function(){
    textarea1.value+=" ";
})

var doneKey=document.querySelector("#done-key");
doneKey.addEventListener("click", function(){
    var a=textarea1.value;
    textarea1.value="";
    var list1=document.querySelector("#list");
    list1.innerHTML+="<li>" + a + "</li>";
})

textarea1.addEventListener("click", function(){
    var keyboard1=document.querySelector(".keyboard");
    keyboard1.classList.add("showkeyboard");
    console.log("sai");
})

