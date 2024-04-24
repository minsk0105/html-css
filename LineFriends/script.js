document.querySelector('.currency_unit').addEventListener('click', function(){
    let money = document.querySelector('.box').style.visibility;

    if(money == '') {
        document.querySelector('.box').style.visibility = 'visible';
        document.querySelector('.box').style.opacity = '1';
    } else if(money == 'visible') {
        document.querySelector('.box').style.visibility = '';
        document.querySelector('.box').style.opacity = '0';    
    }
})

document.querySelector('.language').addEventListener('click', function(){
    let lang = document.querySelector('.lang-box').style.visibility;

    if(lang == '') {
        document.querySelector('.lang-box').style.visibility = 'visible';
        document.querySelector('.lang-box').style.opacity = '1';
    } else if(lang == 'visible') {
        document.querySelector('.lang-box').style.visibility = '';
        document.querySelector('.lang-box').style.opacity = '0';
    }
})

document.querySelector('.currency_unit').addEventListener('click', function(){
    document.querySelector('.lang-box').style.visibility = '';
})

document.querySelector('.language').addEventListener('click', function(){
    document.querySelector('.box').style.visibility = '';
})