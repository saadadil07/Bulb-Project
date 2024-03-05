let bulb = document.getElementById('bulb');
let all_btns = document.getElementsByClassName('same');

// (all_btns[0]).addEventListener('click',function(){
//     bulb.classList.add('redme');
// });
// (all_btns[1]).addEventListener('click',function(){
//     bulb.classList.add('greenme');
// });
// (all_btns[2]).addEventListener('click',function(){
//     bulb.classList.add('blueme');
// });
// (all_btns[3]).addEventListener('click',function(){
//     bulb.classList.add('yellowme');
// });

    all_btns[0].addEventListener('mouseover',function(){
        bulb.style.backgroundColor = "red";
    })
    all_btns[1].addEventListener('mouseover',function(){
        bulb.style.backgroundColor = "green";
    })
    all_btns[2].addEventListener('mouseover',function(){
        bulb.style.backgroundColor = "blue";
    })
    all_btns[3].addEventListener('mouseover',function(){
        bulb.style.backgroundColor = "yellow";
    })
    
 for(item of all_btns){
    item.style.cursor = "pointer";
 }

