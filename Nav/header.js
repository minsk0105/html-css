document.querySelector('.menu > li').addEventListener("mouseover", function(){
    document.querySelector('.submenu').style.height = '200px';
})

document.querySelector('.menu > li').addEventListener("mouseout", function(){
    document.querySelector('.submenu').style.height = '0px';
})