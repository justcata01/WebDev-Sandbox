function play_game()
{
    var level = 100;
    var rect_w = 45; var rect_h = 30;
    var inc_score = 0;
    var snake_color = "#1f3450";
    var ctx;
    var tn = [];
    var x_dir = [-1, 0, 1, 0]; var y_dir = [0, -1, 0, 1];
    var queue = [];
    var frog = 1;
    var map = [];
    var MR = Math.random;
    var X = 5 + (MR() * (rect_w - 10))|0;
    var Y = 5 + (MR() * (rect_h - 10))|0;
    var direction = MR() * 3 | 0;
    var interval = 0;
    var score = 0;
    var sum = 0, easy = 0;
    var i, dir;
    var c = document.getElementById('playArea');
    ctx = c.getContext('2d');
    for (i = 0; i < rect_w; i++)
    {
    map[i] = [];
}
function random_snake()
{
    var x, y;
    do
    {
    x = MR() * rect_w|0;
    y = MR() * rect_h|0;
    }
    while (map[x][y]);
    map[x][y] = 1;
    ctx.fillStyle = snake_color;
    ctx.strokeRect(x * 10+1, y * 10+1, 8, 8);
}
random_snake();
function set_game_speed()
{
    if (easy)
    {
        X = (X+rect_w)%rect_w;
        Y = (Y+rect_h)%rect_h;
    }
    --inc_score;
    if (tn.length)
    {
        dir = tn.pop();
        if ((dir % 2) !== (direction % 2))
        {
            direction = dir;
        }
    }
    if ((easy || (0 <= X && 0 <= Y && X < rect_w && Y < rect_h)) && 2 !== map[X][Y])
    {
    if (1 === map[X][Y])
    {
        score+= Math.max(5, inc_score);
        inc_score = 50;
        random_snake();
        frog++;
    }
    ctx.fillRect(X * 10, Y * 10, 9, 9);
    map[X][Y] = 2;
    queue.unshift([X, Y]);
    X+= x_dir[direction];
    Y+= y_dir[direction];
    if (frog < queue.length)
    {
        dir = queue.pop()
        map[dir[0]][dir[1]] = 0;
        ctx.clearRect(dir[0] * 10, dir[1] * 10, 10, 10);
    }
    }
    else if (!tn.length)
    {
        var show_score = document.getElementById("show");
        show_score.innerHTML = "<div class='endtext'><p style='color: red'>Game Over</p>Your Score: <b></div>"+score+"<div class='endtext'></b><br/><br/><input type='button' value='Try again' onclick='window.location.reload();' /></div>";
        document.getElementById("playArea").style.display = 'none';
        window.clearInterval(interval);
    }
}
interval = window.setInterval(set_game_speed, level);
document.onkeydown = function(e) {
//WSAD keys if-else
switch(e.keyCode){
    default : break;
    case 87:code = 1;tn.unshift(code); break;
    case 83:code = 3;tn.unshift(code); break;
    case 65:code = 0;tn.unshift(code); break;
    case 68:code = 2;tn.unshift(code); break;
}

//Arrow keys -37 var
var code = e.keyCode - 37;
if (0 <= code && code < 4 && code !== tn[0])
{
    tn.unshift(code);
}
else if (-5 == code)
{
        if (interval)
    {
    window.clearInterval(interval);
        interval = 0;
    }
    else
    {
        interval = window.setInterval(set_game_speed, 60);
    }
}
else
{
        dir = sum + code;
        if (dir == 44||dir==94||dir==126||dir==171) {
        sum+= code
    } else if (dir === 218) easy = 1;
    }
}
}