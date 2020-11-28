// const $ = require("jquery");

// $(function(){
//     // jQueryの処理を書く
// })

function sendContact(){
        var checked = confirm("本当に退会しますか？");
            if (checked == true) {
                return true;
            } else {
                return false;
    }
}