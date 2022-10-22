var myDate = new Date();
var hrs = myDate.getHours();

var greet;
if (hrs < 12)
    console.log('Good Morning');
else if (hrs >= 12 && hrs <= 17)
console.log('Good Afternoon');
else if (hrs >= 17 && hrs <= 24)
console.log('Good Evening');
