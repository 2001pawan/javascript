class Ball{
    constructor(container,diameter){       
        this.container = container;
        this.diameter = diameter;

        this.element = document.createElement('div');
        this.element.classList.add('ball');

        const size = Math.random()*20 + diameter;
        this.element.style.width=`${size}px`;
        this.element.style.height=`${size}px`;

        this.element.style.position='absolute';
        this.element.style.borderRadius='50%';

        this.element.style.backgroundColor=Ball.randomColor();
        this.element.style.top=`${Math.random() * (container.clientHeight-size)}px`;
        this.element.style.left=`${Math.random() * (container.clientWidth-size)}px`;

        this.direction=Math.random() >0.5 ? 'horizontal' : 'vertical'; 
        this.down=true;
        this.right=true;

        this.container.appendChild(this.element);


    }

   static randomColor(){
    
    const r = Math.round(Math.random()*256);
    const g = Math.round(Math.random()*256);
    const b = Math.round(Math.random()*256);

    return `rgb(${r},${g},${b})`;

   }

   move(){

    console.log('Ball is moving:', this.element.style.top, this.element.style.left);
    let currentTop = parseFloat(this.element.style.top) || 0;
    let currentLeft = parseFloat(this.element.style.left) || 0;
    const ballHeight = parseFloat(this.element.style.height);
    const ballWidth = parseFloat(this.element.style.width);
    let containerHeight = this.container.clientHeight;
    let containerWidth = this.container.clientWidth;

    if (this.direction === 'vertical'){
        if(this.down){
            currentTop += 5;
        }
        else{
            currentTop -= 5;
        }

        if (currentTop+ballHeight>containerHeight){
            this.down=false;
            currentTop=containerHeight-ballHeight;
        }
        else if(currentTop<0){
            this.down=true;
            currentTop=0;
        }

        this.element.style.top=`${currentTop}px`;

    }
    else{
        if(this.right){
            currentLeft += 5;
        }
        else{
            currentLeft -= 5;
        }
        

        if (currentLeft+ballWidth>containerWidth){
            this.right=false;
            currentLeft=containerWidth-ballWidth;
        }
        else if(currentLeft<0){
            this.right=true;
            currentLeft=0;
        }

        this.element.style.left=`${currentLeft}px`;

    }
   }
}

const container = document.getElementById('container');

const balls = [];

function createBall(diameter) {
    
    const ball = new Ball(container, diameter);
    balls.push(ball);
}

function moveBalls() {
    console.log('Ball is moving:');
    balls.forEach(function(ball){
        ball.move()
    })
}

createBall(19);
createBall(20);
createBall(30);
createBall(28);
createBall(15);
createBall(17);

setInterval(moveBalls, 20);