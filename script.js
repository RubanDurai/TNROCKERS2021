
<!-- Display Current Date  -->
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("current_date").innerHTML = month + "/" + day + "/" + year;

<!-- Display Current Day -->
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = days[d.getDay()];
document.getElementById("current_day").innerHTML = day;

	var myquote = ["சாவு நெனைச்சா வரும் சாதனை ஜெயிச்சா தான் வரும்",
                   "நீ படிச்ச School-ல நான் Headmaster",
                   "நீ பொழப்புக்குத்தான் ரவுடி நான் பொறந்ததுல இருந்தே ரவுடி",
                   "நான் ஊதுனா அணையுற தீக்குச்சி இல்லை சூரியன்"]
var randomItem = myquote[Math.floor(Math.random() * myquote.length)];
document.getElementById("myquote").innerHTML = randomItem

