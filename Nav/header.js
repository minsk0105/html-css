document.querySelector('.menu > li').addEventListener("mouseover", function(){
    document.querySelector('.submenu').style.display = 'block';
})

document.querySelector('.menu > li').addEventListener("mouseout", function(){
    document.querySelector('.submenu').style.display = 'none';
})