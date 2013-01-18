document.write('<p>Hello, World!</p>');
enchant(); //…①
var picNumber = 12; //…②
window.onload = function() { //…③
var game = new Game(320, 480); //…④
game.preload('http://jsrun.it/assets/g/9/F/G/g9FGy.gif'); //…⑤
game.onload = function() { //…⑥
var bear = new Sprite(32, 32); //…⑦
bear.image = //…⑧
game.assets['http://jsrun.it/assets/g/9/F/G/g9FGy.gif'];
bear.frame = 12; //…⑨
bear.addEventListener(Event.ENTER_FRAME, function() { //…⑩
picNumber++; //…⑪
if (picNumber > 14) { //…⑫
picNumber = 12;
}
bear.frame = picNumber; //…⑬
bear.x += 2; //…⑭
    });
    game.rootScene.addChild(bear); //…⑮
};
game.start(); //…⑯
    };

