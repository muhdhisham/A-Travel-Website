function enterSite() {
    $("#landing").css("transform", "translate(-200vw)");
    $("#dimmed-bg").css("visibility","visible");
    $("#dimmed-bg").css("transform", "translate(0)");
    $("#above-fold").css("opacity","1");
    $("#full-site").css("visibility","visible");
    $("#full-site").css("overflow","visible");
    $("#full-site").css("max-height","auto");
    $("#register-side-bar").css("transform","translate(0)");
}


$("#visible-section").mouseenter(function(){openForm();blurr();});
$("#empty-section").mouseenter(function(){closeForm();blurrCancel();});
$("#form-section").mouseleave(function(){closeForm();blurrCancel();});


function openForm(){
    $("#register-side-bar").css("transform","translate(-400px)");
    $("#register-side-bar").css("transition-delay","0s");
    $("#register-side-bar").css("z-index","100");
    $("#call-num").css("opacity","0");
    $("#reg").css("opacity","0");
}

function closeForm(){
    $("#register-side-bar").css("transform","translate(0)");
    $("#register-side-bar").css("z-index","0");
    $("#call-num").css("opacity","1");
    $("#reg").css("opacity","1");
}

function blurr(){
    $("#above-fold").css("opacity","0.5");
    $("#above-fold").css("text-shadow","0 0 15px rgba(255,255,500, 0.03)");
    $("#above-fold").css("transition",("all 0.3s 0s"))
}
function blurrCancel(){
    $("#above-fold").css("opacity","1");
    $("#above-fold").css("text-shadow","0 0 0px rgba(0,0,0, 1)");
}


// a self calling  function

(function manageTotalUsers() {
    
    let totalUsers = String(getRandom(100000, 200000));
    totalUsers = addComma(totalUsers);
    
    addToTotalUsers(totalUsers);
    
    function addToTotalUsers(currentValue) {
        let num = Number(currentValue.replace(",", ""));
        num++;
        num = String(num);
        num = addComma(num);
        $("#total-users").html(num);
        setTimeout(function() {
            addToTotalUsers(num);
        }, getRandom(100, 5000));
    }
    
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    
    function addComma(num) {
        return num.slice(0, 3) + "," + num.slice(3, 6);
    }
    
})();
