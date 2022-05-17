//let time1='12:01:00PM';
// let time1='07:05:45AM'
let s='12:40:22PM'
let ogTimeArr=s.split(':');
console.log("OGTimeArr:"+ogTimeArr);
let secs=ogTimeArr[2].substring(0,2);
let amPM=ogTimeArr[2].substring(2,4);
if(amPM==='PM'){
    ogTimeArr[0]=parseInt(ogTimeArr[0])%12+12;
}
if(amPM=='AM'){
    ogTimeArr[0]=ogTimeArr[0]%12;
}
if (ogTimeArr[0]<10){
    ogTimeArr[0]='0'+ogTimeArr[0];
}
ogTimeArr[2]=secs;
let returnStr=ogTimeArr.join(':');
console.log("returnStr:"+returnStr);