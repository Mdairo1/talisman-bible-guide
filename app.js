// =====================================
// TALISMAN — BIBLE GUIDE (STABLE BUILD)
// =====================================

// ---------- BASE VERSES ----------
const baseVerses = [
{
ref:"Proverbs 3:5",
text:"Trust in the Lord with all your heart.",
exp:"Faith grows when we release control and depend fully on God's wisdom."
},
{
ref:"Romans 8:28",
text:"All things work together for good.",
exp:"God transforms every season — even pain — into divine purpose."
},
{
ref:"John 14:6",
text:"I am the way, the truth and the life.",
exp:"Jesus is the only bridge restoring humanity's relationship with God."
},
{
ref:"Philippians 4:6",
text:"Do not be anxious about anything.",
exp:"Prayer replaces worry because burdens are handed to God."
},
{
ref:"Isaiah 41:10",
text:"Fear not, for I am with you.",
exp:"God's presence produces courage stronger than fear."
},
{
ref:"Psalm 23:1",
text:"The Lord is my shepherd.",
exp:"God actively guides, protects and provides direction."
},
{
ref:"Hebrews 11:1",
text:"Faith is the substance of things hoped for.",
exp:"Faith sees spiritual reality before physical evidence."
},
{
ref:"Matthew 6:33",
text:"Seek first the kingdom of God.",
exp:"When God becomes priority, life gains alignment."
},
{
ref:"2 Corinthians 5:7",
text:"Walk by faith, not by sight.",
exp:"Believers live by promise, not circumstance."
},
{
ref:"James 1:5",
text:"If any lacks wisdom, ask God.",
exp:"God generously gives direction to those who seek Him."
}
];

// ---------- REAL 100 TOPICS ----------
const topicNames = [
"Faith","Love","Purpose","Forgiveness","Anxiety","Prayer","Hope","Wisdom",
"Relationships","Marriage","Temptation","Grace","Salvation","Patience",
"Healing","Joy","Peace","God's Timing","Leadership","Humility","Repentance",
"Holy Spirit","Christian Living","Trusting God","Identity in Christ",
"Spiritual Warfare","Gratitude","Kindness","Mercy","Justice","Heaven",
"Holiness","Blessings","Protection","Guidance","Family","Friendship",
"Trials","Calling","God's Love","Victory","Renewal","Freedom in Christ",
"Faith Over Fear","Discipline","Obedience","Waiting","Success","Money",
"Work","Loneliness","Depression","Self Control","Testing","End Times",
"Evangelism","Pride","Sin","Growth","Faithfulness","Courage","Strength",
"Rest","New Beginnings","Healing Heart","Spiritual Growth","God's Promises",
"Inner Peace","Direction","Prayer Life","Forgiving Others","Encouragement",
"Daily Walk","God's Presence","Light in Darkness","Provision","Contentment",
"Serving Others","Unity","Compassion","Perseverance","God's Power",
"Transformation","Renewed Mind","Grace Living","Spiritual Discipline",
"God's Plan","Divine Protection","Faithfulness of God","Victory in Christ",
"Restoration","Hope After Loss","God's Mercy","True Worship","Obedient Faith",
"Walking With God","Trusting His Plan","God's Strength","Faith Journey"
];

// ---------- BUILD TOPIC DATA ----------
const topics = topicNames.map(name => ({
title:name,
verses:Array.from({length:20},(_,i)=>{
const v=baseVerses[i%baseVerses.length];
return {...v, ref:`${v.ref} (${i+1})`};
})
}));

// ---------- ELEMENTS ----------
const topicsDiv = document.getElementById("topics");
const randomDiv = document.getElementById("random");

// ---------- DAILY VERSE ----------
(function dailyVerse(){
const day = new Date().getDate();
const topic = topics[day % topics.length];
const verse = topic.verses[day % 20];

const box=document.createElement("div");
box.className="card";
box.innerHTML=`
<h3>📖 Daily Verse</h3>
<p>${verse.ref}</p>
<b>${verse.text}</b>
<p>${verse.exp}</p>
`;

document.body.insertBefore(box, topicsDiv);
})();

// ---------- FAVORITES ----------
let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

function saveFavorite(v){
favorites.push(v);
localStorage.setItem("favorites", JSON.stringify(favorites));
alert("Saved to favorites ⭐");
}

// ---------- OPEN TOPIC ----------
function openTopic(topic){
topicsDiv.innerHTML="";

topic.verses.forEach(v=>{
const card=document.createElement("div");
card.className="card";

card.innerHTML=`
<h3>${v.ref}</h3>
<p><b>${v.text}</b></p>
<p>${v.exp}</p>
<button class="saveBtn">⭐ Save</button>
`;

card.querySelector(".saveBtn").onclick=()=>saveFavorite(v);

topicsDiv.appendChild(card);
});
}

// ---------- RENDER TOPICS ----------
function renderTopics(filter=""){
topicsDiv.innerHTML="";

topics
.filter(t=>t.title.toLowerCase().includes(filter.toLowerCase()))
.forEach(topic=>{
const btn=document.createElement("button");
btn.textContent=topic.title;
btn.onclick=()=>openTopic(topic);
topicsDiv.appendChild(btn);
});
}

renderTopics();

// ---------- SEARCH ----------
const search=document.createElement("input");
search.placeholder="🔎 Search topics...";
search.style.padding="10px";
search.style.width="80%";
search.style.margin="15px";

search.oninput=e=>renderTopics(e.target.value);

document.body.insertBefore(search,topicsDiv);

// ---------- RANDOM VERSE ----------
window.randomVerse=function(){
const topic=topics[Math.floor(Math.random()*topics.length)];
const verse=topic.verses[Math.floor(Math.random()*20)];

randomDiv.innerHTML=`
<div class="card">
<h3>🎲 Random Verse</h3>
<p>${verse.ref}</p>
<b>${verse.text}</b>
<p>${verse.exp}</p>
</div>
`;
};

// ---------- MAIN MENU BUTTON ----------
const mainMenuBtn=document.querySelector("button");

if(mainMenuBtn){
mainMenuBtn.onclick=()=>{
randomDiv.innerHTML="";
renderTopics();
};
}
