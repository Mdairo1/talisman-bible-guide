// ======================
// TALISMAN V3 ENGINE
// ======================

// ----- verses database
const baseVerses=[
{ref:"Proverbs 3:5",text:"Trust in the Lord with all your heart.",exp:"Faith grows when control is surrendered to God."},
{ref:"Romans 8:28",text:"All things work together for good.",exp:"God turns broken moments into divine purpose."},
{ref:"John 14:6",text:"I am the way, the truth and the life.",exp:"Jesus restores humanity's connection to God."},
{ref:"Philippians 4:6",text:"Do not be anxious.",exp:"Prayer replaces anxiety with peace."},
{ref:"Isaiah 41:10",text:"Fear not, I am with you.",exp:"God's presence removes isolation."},
{ref:"Psalm 23:1",text:"The Lord is my shepherd.",exp:"God actively guides and protects believers."},
{ref:"Matthew 6:33",text:"Seek first the kingdom.",exp:"Priority determines spiritual alignment."},
{ref:"Hebrews 11:1",text:"Faith is the substance of things hoped for.",exp:"Faith sees before sight confirms."},
{ref:"James 1:5",text:"Ask God for wisdom.",exp:"God generously guides sincere seekers."},
{ref:"2 Corinthians 5:7",text:"Walk by faith not sight.",exp:"Spiritual maturity trusts beyond circumstances."}
];

// ----- 100 topics
const topicNames=[...Array(100)].map((_,i)=>"Bible Topic "+(i+1));

// create 20 verses each
const topics=topicNames.map(name=>({
title:name,
verses:Array.from({length:20},(_,i)=>{
const v=baseVerses[i%baseVerses.length];
return {...v,ref:v.ref+" ("+(i+1)+")"};
})
}));

const topicsDiv=document.getElementById("topics");
const content=document.getElementById("content");

// ======================
// HOME
// ======================
function goHome(){
content.innerHTML="";
renderTopics();
}
window.goHome=goHome;

// ======================
// DAILY VERSE
// ======================
(function(){
const day=new Date().getDate();
const topic=topics[day%topics.length];
const verse=topic.verses[day%20];

document.getElementById("daily").innerHTML=`
<div class="card">
<h3>📖 Daily Verse</h3>
<b>${verse.text}</b>
<p>${verse.exp}</p>
</div>`;
})();

// ======================
// TOPICS RENDER
// ======================
function renderTopics(filter=""){
topicsDiv.innerHTML="";

topics
.filter(t=>t.title.toLowerCase().includes(filter.toLowerCase()))
.forEach(topic=>{
const btn=document.createElement("button");
btn.innerText=topic.title;

btn.onclick=()=>openTopic(topic);
topicsDiv.appendChild(btn);
});
}

function openTopic(topic){
topicsDiv.innerHTML="";
content.innerHTML=`<button class="back" onclick="goHome()">⬅ Back</button>
<h2>${topic.title}</h2>`;

topic.verses.forEach(v=>{
content.innerHTML+=`
<div class="card">
<h4>${v.ref}</h4>
<b>${v.text}</b>
<p>${v.exp}</p>
<button onclick='saveFav(${JSON.stringify(v)})'>⭐ Save</button>
</div>`;
});
}

// ======================
// FAVORITES
// ======================
let favs=JSON.parse(localStorage.getItem("favs")||"[]");

window.saveFav=function(v){
favs.push(v);
localStorage.setItem("favs",JSON.stringify(favs));
alert("Saved ⭐");
};

// ======================
// SEARCH
// ======================
document.getElementById("search")
.oninput=e=>renderTopics(e.target.value);

renderTopics();

// ======================
// RANDOM VERSE
// ======================
window.randomVerse=function(){
const t=topics[Math.floor(Math.random()*topics.length)];
const v=t.verses[Math.floor(Math.random()*20)];

content.innerHTML=`
<div class="card">
<h3>🎲 Random Verse</h3>
<b>${v.text}</b>
<p>${v.exp}</p>
<button class="back" onclick="goHome()">Back</button>
</div>`;
};

// ======================
// AI BIBLE COUNSELOR
// ======================
window.askAI=function(){

const q=document.getElementById("question").value.toLowerCase();
let answer="Seek God in prayer and scripture.";

if(q.includes("fear"))
answer="Isaiah 41:10 reminds us God is present in fear. Fear fades where faith grows.";

else if(q.includes("anxiety"))
answer="Philippians 4:6 teaches prayer replaces worry with peace.";

else if(q.includes("purpose"))
answer="Jeremiah 29:11 shows God has intentional plans for your life.";

else if(q.includes("love"))
answer="1 Corinthians 13 reveals love as patience, sacrifice, and truth.";

else if(q.includes("sin"))
answer="Romans 6 teaches freedom through Christ, not condemnation.";

document.getElementById("aiAnswer").innerHTML=
`<div class="card">${answer}</div>`;
};
