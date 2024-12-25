const a = document.getElementById('container')

function randomColor(){
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);

    return `rgb(${r},${g},${b})`;
}

function createBall(diameter){
    const b=document.createElement('div');
    b.classList.add('ball');

    b.style.width=Math.random()*20+diameter+`px`;
    b.style.height=b.style.width;

    b.style.borderRadius='50%' ;
    b.style.position='absolute';

    b.style.top=Math.random() * (a.clientHeight - parseFloat(b.style.height)) + `px`;
    b.style.left=Math.random() * (a.clientWidth - parseFloat(b.style.width)) + `px`;


    b.style.backgroundColor=randomColor();

    let chooser=Math.random()
    b.direction = 'vertical'
    if (chooser>0.5){
        b.direction = 'horizontal'
    }

    b.down = true;
    b.right = true;

    a.appendChild(b);
}

function moveBall(){
    const balls =document.getElementsByClassName('ball');
    console.log(balls.length);    

    Array.from(balls).forEach(function(ball){

        const direction=ball.direction;
        let down=ball.down;
        let right=ball.right;
        let currenttop = parseFloat(ball.style.top) || 0;
        let currentLeft = parseFloat(ball.style.left) || 0;
        const ballheight = parseFloat(ball.style.height);
        const ballwidth = parseFloat(ball.style.width);
        

        if (direction === 'vertical'){
            if (down){
                currenttop +=5;
            }
            else{
                currenttop -=5;
            }
        
            ball.style.top = currenttop+`px`;

            if (currenttop + ballheight > a.offsetHeight){
                down=false;
            }
            else if(currenttop<0){
                down=true;
            }
            ball.down = down;//why was this important?
        }
    
        else{
        
            if (right){
                currentLeft +=5;
            }
            else{
                currentLeft -=5;
            }

            ball.style.left = currentLeft+`px`;
            
            if (currentLeft + ballwidth > a.offsetWidth){
                right=false;
            }
            else if(currentLeft<0){
                right=true;
            }
            ball.right=right;
        }
        })
    }

    

createBall(19);
setInterval(moveBall,20);
createBall(20);
createBall(30);
createBall(28);
createBall(15);
createBall(17);

