
        
const b = document.createElement('div')
b.innerText = "abcdef"

const a = document.getElementById('circle1');
let current = 0;
let right = true;
let down = true;
a.append(b)

function MoveCircle1_horizontally(){

    if (right){
        current +=5;
    }
    else{
        current -=5;
    }
    
    a.style.left= `${current}px`;
    
    
    // current greater than container size = reset
    if (current+22>=container.offsetWidth){
        right=false;
        
    }
    else if(current<=0){
        right=true;
        
    }
    console.log(current,container.offsetWidth,right);

};


function MoveCircle1_vertically(){

    if (down){
        current +=5;
    }
    else{
        current -=5;
    }
    
    a.style.top= `${current}px`;
    
    
    // current greater than container size = reset
    if (current+22>=container.offsetHeight){
        down=false;
        
    }
    else if(current<=0){
        down=true;
        
    }
    console.log(current,container.offsetHeight,down);

};

function MoveCircle1_diagonally(){

    if (right && down){
        current +=5;
    }
    else{
        current -=5;
    }
    
    a.style.left= `${current}px`;
    a.style.top=`${current}px`;
    
    
    // current greater than container size = reset
    if (current+22>=container.offsetWidth){
        right=false;
        down=false;
        
    }
    else if(current<=0){
        right=true;
        down=true;
        
    }

}

var randomChoice = Math.random(); 

if (randomChoice < 0.7 && randomChoice >0.3) {
    setInterval(MoveCircle1_vertically, 20);
} else if (randomChoice <0.3 ) {
    setInterval(MoveCircle1_horizontally, 20);
} else{
    setInterval(MoveCircle1_diagonally,20)
}

