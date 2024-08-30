// debugger;
var colors = ['linear-gradient(to right bottom, #aac5f6, #d0c3ee, #e8c4e0, #f2cad4, #f1d3cf)' , 'linear-gradient(to right bottom, #e5e8ec, #cce7fa, #a5e9ff, #70ebff, #1cedf0)' ,
    ' linear-gradient(to left top, #f99af7, #ff9bc5, #ffb298, #ffd482, #eef391)','linear-gradient(to left top, #f99af7, #fe95e0, #fe92cb, #fa91b8, #f391a8)',
    ' linear-gradient(to left top, #9aeaf9, #5dd9b9, #7fbc54, #b98e00, #ee3304)',' linear-gradient(to left top, #84c15f, #00bf94, #00b4d9, #009eff, #6275fc)'];
var list = document.getElementsByTagName('li');
for (var i = 0; i < list.length; i++) {
    (function(i) {
        list[i].addEventListener('mouseover', function() {
            document.body.style.backgroundImage = colors[i];
            list[i].style.fontFamily = "New Amsterdam, sans-serif";
            list[i].style.fontSize ='30px';
        });
    })(i);

    (function(i) {
        list[i].addEventListener('mouseleave', function() {
            document.body.style.backgroundColor = colors[i];
            list[i].style.fontFamily = "Roboto, sans-serif";
            list[i].style.fontSize ='20px';
        });
    })(i);
}


