// ===============================
// TALISMAN — BIBLE GUIDE (FIXED)
// ===============================

// ---------- ELEMENTS ----------
const topicsDiv = document.getElementById("topics");
const randomDiv = document.getElementById("random");
const searchInput = document.getElementById("search");
const dailyDiv = document.getElementById("daily");
const menuBtn = document.getElementById("menuBtn");
const randomBtn = document.getElementById("randomBtn");

// ---------- BASE VERSES ----------
const baseVerses = [
["Proverbs 3:5","Trust in the Lord with all your heart.","Trust replaces control with faith."],
["Romans 8:28","All things work together for good.","God turns pain into purpose."],
["John 14:6","I am the way, the truth and the life.","Christ restores connection with God."],
["Philippians 4:6","Do not be anxious.","Prayer transfers burdens to God."],
["Isaiah 41:10","Fear not, for I am with you.","God's presence gives courage."]
];

// ---------- TOPIC NAMES ----------
const topicNames = [
"Faith","Love","Prayer","Hope","Peace","Wisdom","Forgiveness","Grace","Salvation",
"Patience","Healing","Joy","Guidance","Strength","Trust","Purpose","Humility",
"Leadership","Kindness","Mercy","Justice","Holiness","Protection","Family",
"Friendship","Trials","Calling","Victory","Renewal","Freedom","Discipline",
"Obedience","Waiting","Success","Work","Loneliness","Encouragement","Growth",
"Faithfulness","Courage","Rest","New Beginnings","Contentment","Serving Others",
"Unity","Compassion","Perseverance","Transformation","God's Plan","True Worship"
];

// ---------- BUILD DATA ----------
const topics = topicNames.map(name => ({
title:name,
verses:Array.from({length:20},(_,i)=>{
const v = baseVerses[i % baseVerses.length];
return {
ref: v[0] + ` (${i+1})`,
text: v[1],
exp: v[2]
};
})
}));

// ---------- DAILY VERSE ----------
(function(){
const d = new Date().getDate();
const topic = topics[d % topics.length];
const verse = topic.verses[d % 20];

dailyDiv.innerHTML = `
<div class="card">
<h3>📖 Daily Verse</h3>
<p>${verse.ref}</p>
<b>${verse.text}</b>
<p>${verse.exp}</p>
</div>`;
})();

// ---------- SHOW TOPICS ----------
function showTopics(filter=""){
topicsDiv.innerHTML="";

topics
.filter(t => t.title.toLowerCase().includes(filter.toLowerCase()))
.forEach(topic => {

const btn=document.createElement("button");
btn.textContent = topic.title;

btn.onclick = () => openTopic(topic);

topicsDiv.appendChild(btn);
});
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
`;

topicsDiv.appendChild(card);
});
}

// ---------- RANDOM VERSE ----------
function randomVerse(){
const topic=topics[Math.floor(Math.random()*topics.length)];
const verse=topic.verses[Math.floor(Math.random()*20)];

randomDiv.innerHTML=`
<div class="card">
<h3>🎲 Random Verse</h3>
<p>${verse.ref}</p>
<b>${verse.text}</b>
<p>${verse.exp}</p>
</div>`;
}

// ---------- EVENTS ----------
searchInput.oninput = e => showTopics(e.target.value);
menuBtn.onclick = () => {
randomDiv.innerHTML="";
showTopics();
};
randomBtn.onclick = randomVerse;

// ---------- START ----------
showTopics();
