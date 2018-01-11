var canvas = document.getElementById("game");
var ctx = canvas.getContext('2d');
canvas.height = 480;
canvas.width = 450;
var powidth = 50;
var p1x = 450;
var p2x = 450
var p1h = 280;
var p2h = 400;
var p1y = 0;
var p2y = 380;
var gscore = 0;
var p1 = function(){
ctx.fillStyle = "LimeGreen";
ctx.fillRect(p1x, p1y, powidth, p1h);
}
var p2 = function(){
ctx.fillStyle = "LimeGreen";
ctx.fillRect(p2x, p2y, powidth, p2h);
}
var x = 0;
var y = 20;
var guy = function(){
ctx.fillStyle = "Yellow";
ctx.fillRect(50, y, 30, 30);
}
var back = function(){
ctx.fillStyle = "SkyBlue";
ctx.fillRect(0, 0, canvas.width, canvas.height);
}
var score = function(){
ctx.fillStyle = "White"
ctx.font = "50px Arial";
ctx.fillText(gscore, 210, 50)
}
window.onload = function(){
var pnh = Math.floor(Math.random() * 280)
p1h = pnh
p1y = -5
if (pnh < 50) {
p2y = 120
}
if (pnh < 100 && pnh > 50) {
p2y = 170
}
if (pnh < 150 && pnh > 100) {
p2y = 220
}
if (pnh < 200 && pnh > 150) {
p2y = 270
}
if (pnh < 250 && pnh > 200) {
p2y = 320
}
if (pnh < 300 && pnh > 250) {
p2y = 380
}
back()
guy()
score()
p1()
p2()
}
setInterval(function(){
ctx.clearRect(0, 0, canvas.width, canvas.height);
y += 5;
p1x -= 5
p2x -= 5
back();
guy();
p1();
p2();
score();
if (y > 450) {
alert("You Lost\nScore: " + gscore)
gscore = 0;
var pnh = Math.floor(Math.random() * 280)
p1h = pnh
p1y = -5
if (pnh < 50) {
p2y = 120
}
if (pnh < 100 && pnh > 50) {
p2y = 170
}
if (pnh < 150 && pnh > 100) {
p2y = 220
}
if (pnh < 200 && pnh > 150) {
p2y = 270
}
if (pnh < 250 && pnh > 200) {
p2y = 320
}
if (pnh < 300 && pnh > 250) {
p2y = 380
}
ctx.clearRect(0, 0, canvas.width, canvas.height);
y = 20;
p1x = 450;
p2x = 450;
back();
guy();
p1();
p2();
score();
}
if (p1x < 0 && p2x < 0) {
ctx.clearRect(0, 0, canvas.width, canvas.height);
gscore += 1
p1x = 450;
p2x = 450;
var pnh = Math.floor(Math.random() * 280)
p1h = pnh
p1y = -5
if (pnh < 50) {
p2y = 120
}
if (pnh < 100 && pnh > 50) {
p2y = 170
}
if (pnh < 150 && pnh > 100) {
p2y = 220
}
if (pnh < 200 && pnh > 150) {
p2y = 270
}
if (pnh < 250 && pnh > 200) {
p2y = 320
}
if (pnh < 300 && pnh > 250) {
p2y = 380
}
back();
guy();
p1();
p2();
score();
}
if (p2x - powidth == x && y > p2y - 30 || p1x - powidth == x && y < p1y + p1h + 30) {
alert("You Lost\nScore: " + gscore)
gscore = 0;
var pnh = Math.floor(Math.random() * 280)
p1h = pnh
p1y = -5
if (pnh < 50) {
p2y = 120
}
if (pnh < 100 && pnh > 50) {
p2y = 170
}
if (pnh < 150 && pnh > 100) {
p2y = 220
}
if (pnh < 200 && pnh > 150) {
p2y = 270
}
if (pnh < 250 && pnh > 200) {
p2y = 320
}
if (pnh < 300 && pnh > 250) {
p2y = 380
}
ctx.clearRect(0, 0, canvas.width, canvas.height);
y = 20;
p1x = 450;
p2x = 450;
back();
guy();
p1();
p2();
}
},33)
function up() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
y -= 50;
back();
guy();
p1();
p2();
score();
if (y < 0) {
alert("You Lost\nScore: " + gscore);
gscore = 0;
ctx.clearRect(0, 0, canvas.width, canvas.height);
y = 20;
back();
guy();
p1();
p2();
score();
}
}