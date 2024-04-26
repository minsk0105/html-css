document.querySelector('.currency_unit').addEventListener('click', function(){
    const nation = document.querySelector('.box').style.visibility;

    if(nation == '') {
        document.querySelector('.box').style.visibility = 'visible';
        document.querySelector('.box').style.opacity = '1';
        document.querySelector('.box').style.transform = 'scaleY(1)';
    }
    
    else if(nation == 'visible') {
        document.querySelector('.box').style.visibility = '';
        document.querySelector('.box').style.opacity = '0';
        document.querySelector('.box').style.transform = 'scaleY(0)';
    }

    const double = document.querySelector('.lang-box').style.visibility;

    if(double == 'visible') {
        document.querySelector('.lang-box').style.visibility = '';
        document.querySelector('.lang-box').style.opacity = '0';
        document.querySelector('.lang-box').style.transform = 'scaleY(0)';
    }
})

document.querySelector('.language').addEventListener('click', function(){
    const lang = document.querySelector('.lang-box').style.visibility;

    if(lang == '') {
        document.querySelector('.lang-box').style.visibility = 'visible';
        document.querySelector('.lang-box').style.opacity = '1';
        document.querySelector('.lang-box').style.transform = 'scaleY(1)';
    }

    else if(lang == 'visible') {
        document.querySelector('.lang-box').style.visibility = '';
        document.querySelector('.lang-box').style.opacity = '0';
        document.querySelector('.lang-box').style.transform = 'scaleY(0)';
    }

    const cross = document.querySelector('.box').style.visibility;

    if(cross == 'visible') {
        document.querySelector('.box').style.visibility = '';
        document.querySelector('.box').style.opacity = '0';
        document.querySelector('.box').style.transform = 'scaleY(0)';
    }
})