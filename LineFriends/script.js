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