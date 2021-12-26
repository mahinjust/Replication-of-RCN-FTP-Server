function change()
{
const store= document.getElementById("bd");
store.removeAttribute('src');
store.setAttribute('src',"Videos/production ID_4231453.mp4");
const store1= document.getElementById("cd");
store1.removeAttribute('src');
store1.setAttribute('src',"Logos/Amazon-prime-video-logo.png");

}

function change1()
{
const store= document.getElementById("bd");
store.removeAttribute('src');
store.setAttribute('src',"Videos/production ID_5082592.mp4");
const store1= document.getElementById("cd");
store1.removeAttribute('src');
store1.setAttribute('src',"Logos/Bongo-logo.png");

}

function change2()
{
const store= document.getElementById("bd");
store.removeAttribute('src');
store.setAttribute('src',"Videos/production ID_4010131.mp4");
const store1= document.getElementById("cd");
store1.removeAttribute('src');
store1.setAttribute('src',"netflix.png");
}

function change3()
{
const store= document.getElementById("bd");
store.removeAttribute('src');
store.setAttribute('src',"Videos/production ID_5082597.mp4");
const store1= document.getElementById("cd");
store1.removeAttribute('src');
store1.setAttribute('src',"Logos/Hoichoi-logo.png");
}

function change4()
{
const store= document.getElementById("bd");
store.removeAttribute('src');
store.setAttribute('src',"Videos/production ID_5135771.mp4");
const store1= document.getElementById("cd");
store1.removeAttribute('src');
store1.setAttribute('src',"Logos/Hotstar-logo.png");
}

function change5()
{
const store= document.getElementById("bd");
store.removeAttribute('src');
store.setAttribute('src',"Videos/production ID_5081430.mp4");
const store1= document.getElementById("cd");
store1.removeAttribute('src');
store1.setAttribute('src',"Logos/Altbalaji-logo.png");
}

function change6()
{
const store= document.getElementById("bd");
store.removeAttribute('src');
store.setAttribute('src',"Videos/production ID_4110669.mp4");
const store1= document.getElementById("cd");
store1.removeAttribute('src');
store1.setAttribute('src',"Logos/ZEE5_logo.png");
}

function cng1(event)
{
document.getElementById("bt1").innerHTML ="<b>This is due to encoding compatibility issue. In this case, go to directory mode, locate the file and drag the file in your media player. We recommend using VLC Player (https://www.videolan.org/) or Pot Player (https://potplayer.daum.net/). Both of these players are free to use.</b>";
event.preventdefault();
}

function cng2(event)
{
document.getElementById("bt1").innerHTML ="<b>We will look into this. Please report which thumbnail is not loading to customerservice@rcnbroadband.com</b>";
event.preventdefault();
}

function cng3(event)
{
document.getElementById("bt1").innerHTML ="<b>This might happen due to broken links. Please report this to customerservice@rcnbroadband.com</b>";
event.preventdefault();
}

function cng4(event)
{
document.getElementById("bt1").innerHTML ="<b> We have added a large volume of files in directory mode. Some of these are stream-ready. We are working on making all media content stream-ready soon.</b>";
event.preventdefault();
}

function cng5(event)
{
document.getElementById("bt1").innerHTML ="<b> Please look for any readme file. All password protected zip files have a readme file which includes the password in it. If you find no readme for files like these, report the file name to customerservice@rcnbroadband.com</b>";
event.preventdefault();
}

function cng6(event)
{
document.getElementById("bt1").innerHTML ="<b>In most cases, crack files gets removed upon exposure. Please check your antivirus quarantine section to restore quarantined files. If you dont know how to do so, look it up on google.</b>";
event.preventdefault();
}  

function cng7(event)
{
document.getElementById("bt1").innerHTML ="<b>Our FTP service is still under development, so you might experience some glitches and bugs. We are constantly working on the UI to give you a better experience.</b>";
event.preventdefault();
}  

function cng8(event)
{
document.getElementById("bt1").innerHTML ="<b>Please report your issues to customerservice@rcnbroadband.com and make sure to summarize the issue in the email subject.</b>";
event.preventdefault();
} 

const b1 = document.getElementById('myDIV');
const b2 = document.getElementById('myDIV1');

function togglerA()
{
if(!b2.classList.contains('hidden')){
b2.classList.add('hidden');
}

if(b1.classList.contains('hidden')){
b1.classList.remove('hidden');
} else {
b1.classList.add('hidden');
}
}

function togglerB()
{
if(!b1.classList.contains('hidden')){
b1.classList.add('hidden');
}

if(b2.classList.contains('hidden')){
b2.classList.remove('hidden');
} else {
b2.classList.add('hidden');
}
} 

// const b = document.getElementsByClassName('topnav_menu1');
const b = document.getElementById('top');

function barfunction()
{
  if(b.classList.contains('hidden'))
{
    b.classList.remove('hidden');
}   
else{
  b.classList.add('hidden');

}
console.log('bar function');
}