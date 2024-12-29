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

function areColliding(ballA, ballB) {
    const ax = parseFloat(ballA.element.style.left) + parseFloat(ballA.element.style.width) / 2;
    const ay = parseFloat(ballA.element.style.top) + parseFloat(ballA.element.style.height) / 2;
    const bx = parseFloat(ballB.element.style.left) + parseFloat(ballB.element.style.width) / 2;
    const by = parseFloat(ballB.element.style.top) + parseFloat(ballB.element.style.height) / 2;
    
    const distance = Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2);
    const radiusA = parseFloat(ballA.element.style.width) / 2;
    const radiusB = parseFloat(ballB.element.style.width) / 2;
    
    return distance < radiusA + radiusB;
}

function moveBalls() {
    console.log('Ball is moving:');
    balls.forEach(function(ball){
        ball.move()

        for (let i = 0; i < balls.length; i++) {
            for (let j = i + 1; j < balls.length; j++) {
                if (areColliding(balls[i], balls[j])) {
                    [balls[i].direction, balls[j].direction] = [balls[j].direction, balls[i].direction];
                    balls[i].down = !balls[i].down;
                    balls[j].down = !balls[j].down;
                    balls[i].right = !balls[i].right;
                    balls[j].right = !balls[j].right;
                    }
                }
            }
        }
        
   ) }


createBall(19);
createBall(20);
createBall(30);
createBall(28);
createBall(15);
createBall(17);


setInterval(moveBalls,30);

// function collison(){
//     console.log(balls);
//     console.log(balls[0].element.style.left);
//     let temp = '';

//     for (let i=0;i<balls.length;i++){
//         for(let j=i+1;j<balls.length;j++){
//             if (balls[i].element.style.left===balls[j].element.style.left && balls[i].element.style.top===balls[j].element.style.top){
//                 temp=balls[i].direction;
//                 balls[i].direction=balls[j].direction;
//                 balls[j].direction=temp;
//             }
//         }
//     }

//     //if ballA.element.style.left === ballB.element.style.left and ballA.element.style.top === ballB.element.style.top{
//     //ballA.direction=ballB.direction}

// }