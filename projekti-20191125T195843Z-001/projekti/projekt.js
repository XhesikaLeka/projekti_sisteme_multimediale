//validimi i formes
 
    function validateForm() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value; 
    var email = document.getElementById("email").value; 
    var phone = document.getElementById("number").value;  
    var what =  document.getElementById("subject").value;
        if(fname=="")
            { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
        else if(lname=="")
            { 
        window.alert("Please enter your last name."); 
        name.focus(); 
        return false; 
    } 
        else if(email=="")
            { 
        window.alert("Please enter your email."); 
        name.focus(); 
        return false; 
    } 
       else if(phone=="")
            { 
        window.alert("Please enter your phone number."); 
        name.focus(); 
        return false; 
    } 
      else if (what.selectedIndex < 1)                  
    { 
        alert("Please enter your course."); 
        what.focus(); 
        return false; 
    } 
        else
   return true;
    }
/*main*/
function leksionet(x) {
    var pjeset = document.getElementsByClassName("main");

    for (var i = 0; i < pjeset.length; i++) {
        if (i != x)
            pjeset[i].style.display = "none";
        else
            pjeset[i].style.display = "block";
    }
    document.getElementById("id01").style.display = "none";
    document.getElementById("id02").style.display = "none";
}
/*shembulli i js per klasen dhe id*/
function myFunction() {
    var x = document.getElementsByClassName("city");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
}

function displayResult() {
    document.getElementById("myHeader1").innerHTML = "Have a nice day!";
}
//drita
function fik(i) {
    document.getElementById("kuriozitete" + i).src = "light_e_fikur.png";
    document.getElementById("kurioz" + i).style.width = "270px";
    document.getElementById("k" + i).style.visibility = "visible";
    document.getElementById("close" + i).style.visibility = "visible";

}

function mbyll(i) {
    document.getElementById("kurioz" + i).style.width = "0px";

    document.getElementById("k" + i).style.visibility = "hidden";
    document.getElementById("close" + i).style.visibility = "hidden";
}


//data ora
function date_time(id) {
    date = new Date;
    year = date.getFullYear();
    month = date.getMonth();
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
    d = date.getDate();
    day = date.getDay();
    days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    h = date.getHours();
    if (h < 10) {
        h = "0" + h;
    }
    m = date.getMinutes();
    if (m < 10) {
        m = "0" + m;
    }
    s = date.getSeconds();
    if (s < 10) {
        s = "0" + s;
    }
    result = ' ' + d + ' ' + months[month] + ' ' + year + ' ' + days[day] + '\r' + h + ':' + m + ':' + s;
    document.getElementById(id).innerHTML = result;
    setTimeout('date_time("' + id + '");', '1000');
    return true;
}
/*shembulli */
function initComparisons() {
    var x, i;
    /*find all elements with an "overlay" class:*/
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
        /*once for each "overlay" element:
        pass the "overlay" element as a parameter when executing the compareImages function:*/
        compareImages(x[i]);
    }

    function compareImages(img) {
        var slider, img, clicked = 0,
            w, h;
        /*get the width and height of the img element*/
        w = img.offsetWidth;
        h = img.offsetHeight;
        /*set the width of the img element to 50%:*/
        img.style.width = (w / 2) + "px";
        /*create slider:*/
        slider = document.createElement("DIV");
        slider.setAttribute("class", "img-comp-slider");
        /*insert slider*/
        img.parentElement.insertBefore(slider, img);
        /*position the slider in the middle:*/
        slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
        /*execute a function when the mouse button is pressed:*/
        slider.addEventListener("mousedown", slideReady);
        /*and another function when the mouse button is released:*/
        window.addEventListener("mouseup", slideFinish);
        /*or touched (for touch screens:*/
        slider.addEventListener("touchstart", slideReady);
        /*and released (for touch screens:*/
        window.addEventListener("touchstop", slideFinish);

        function slideReady(e) {
            /*prevent any other actions that may occur when moving over the image:*/
            e.preventDefault();
            /*the slider is now clicked and ready to move:*/
            clicked = 1;
            /*execute a function when the slider is moved:*/
            window.addEventListener("mousemove", slideMove);
            window.addEventListener("touchmove", slideMove);
        }

        function slideFinish() {
            /*the slider is no longer clicked:*/
            clicked = 0;
        }

        function slideMove(e) {
            var pos;
            /*if the slider is no longer clicked, exit this function:*/
            if (clicked == 0) return false;
            /*get the cursor's x position:*/
            pos = getCursorPos(e)
            /*prevent the slider from being positioned outside the image:*/
            if (pos < 0) pos = 0;
            if (pos > w) pos = w;
            /*execute a function that will resize the overlay image according to the cursor:*/
            slide(pos);
        }

        function getCursorPos(e) {
            var a, x = 0;
            e = e || window.event;
            /*get the x positions of the image:*/
            a = img.getBoundingClientRect();
            /*calculate the cursor's x coordinate, relative to the image:*/
            x = e.pageX - a.left;
            /*consider any page scrolling:*/
            x = x - window.pageXOffset;
            return x;
        }

        function slide(x) {
            /*resize the image:*/
            img.style.width = x + "px";
            /*position the slider:*/
            slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
        }
    }
}
