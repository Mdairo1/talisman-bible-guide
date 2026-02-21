// ===============================
// TALISMAN - BIBLE GUIDE V2
// ===============================

// ---- Base verses (cycled to create 20 per topic)
const baseVerses = [
{
ref:"Proverbs 3:5",
text:"Trust in the Lord with all your heart.",
exp:"Faith begins where control ends. Trust invites God's wisdom into human limitation."
},
{
ref:"Romans 8:28",
text:"All things work together for good.",
exp:"God redeems even broken seasons and turns them into purpose."
},
{
ref:"John 14:6",
text:"I am the way, the truth and the life.",
exp:"Christ is not merely a teacher but the pathway restoring humanity to God."
},
{
ref:"Philippians 4:6",
text:"Do not be anxious about anything.",
exp:"Prayer transfers emotional weight from human strength to divine peace."
},
{
ref:"Isaiah 41:10",
text:"Fear not, for I am with you.",
exp:"God's presence removes isolation — courage grows from companionship with Him."
},
{
ref:"Psalm 23:1",
text:"The Lord is my shepherd.",
exp:"God actively guides, protects, and provides direction for His people."
},
{
ref:"Hebrews 11:1",
text:"Faith is the substance of things hoped for.",
exp:"Faith perceives spiritual reality before physical evidence appears."
},
{
ref:"Matthew 6:33",
text:"Seek first the kingdom of God.",
exp:"Prioritizing God aligns every other area of life."
},
{
ref:"2 Corinthians 5:7",
text:"Walk by faith, not by sight.",
exp:"Spiritual maturity trusts God's promises beyond circumstances."
},
{
ref:"James 1:5",
text:"If any lacks wisdom, ask God.",
exp:"God generously guides those who sincerely seek Him."
}
];

// ---- 100 Topics
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
"Rest","Hope in Hard Times","Overcoming Fear","New Beginnings","Healing Heart",
"Spiritual Growth","God's Promises","Inner Peace","Direction","Prayer Life",
"Forgiving Others","Trust","Encouragement","Holiness Lifestyle","Daily Walk",
"God's Presence","Light in Darkness","Wisdom in Decisions","Provision",
"Contentment","Faith Journey","Serving Others","Unity","Compassion",
"Perseverance","God's Power","Transformation","Renewed Mind","Grace Living",
"Spiritual Discipline","God's Plan","Divine Protection","Faithfulness of God",
"Victory in Christ","Restoration","Hope After Loss","God's Mercy","True Worship"
];

// ---- Create topics with 20 verses each
const topics = topicNames.map(name => ({
title:name,
verses:Array.from({length:20},(_,i)=>{
const v=baseVerses[i%baseVerses.length];
return {...v,ref:v.ref+" ("+(i+1)+")"};
})
}));

// ===============================
// UI BUILD
// ===============================

const topicsDiv=document.getElementById("topics");

// SEARCH BAR
const search=document.createElement("input");
search.placeholder="Search topics...";
search.style.padding="10px";
search.style.width="80%";
search.style.margin="15px";
document.body.insertBefore(search,topicsDiv);

// DAILY VERSE
function dailyVerse(){
const day=new Date().getDate();
const topic=topics[day%topics.length];
const verse=topic.verses[day%20];

const box=document.createElement("div");
box.className="card";
box.innerHTML=`
<h3>📖 Daily Verse</h3>
<p>${verse.ref}</p>
<b>${verse.text}</b>
<p>${verse.exp}</p>
`;
document.body.insertBefore(box,topicsDiv);
}
dailyVerse();

// FAVORITES STORAGE
let favorites=JSON.parse(localStorage.getItem("favorites")||"[]");

function saveFavorite(v){
favorites.push(v);
localStorage.setItem("favorites",JSON.stringify(favorites));
alert("Saved to favorites ⭐");
}

// SHOW TOPICS
function renderTopics(filter=""){
topicsDiv.innerHTML="";

topics
.filter(t=>t.title.toLowerCase().includes(filter.toLowerCase()))
.forEach(topic=>{
const btn=document.createElement("button");
btn.innerText=topic.title;

btn.onclick=()=>{
topicsDiv.innerHTML="";

topic.verses.forEach(v=>{
const card=document.createElement("div");
card.className="card";

card.innerHTML=`
<h3>${v.ref}</h3>
<p><b>${v.text}</b></p>
<p>${v.exp}</p>
<button>⭐ Save</button>
`;

card.querySelector("button").onclick=()=>saveFavorite(v);

topicsDiv.appendChild(card);
});
};

topicsDiv.appendChild(btn);
});
}

renderTopics();

// SEARCH FUNCTION
search.oninput=e=>renderTopics(e.target.value);

// RANDOM VERSE
window.randomVerse=function(){
const topic=topics[Math.floor(Math.random()*topics.length)];
const verse=topic.verses[Math.floor(Math.random()*20)];

document.getElementById("random").innerHTML=`
<div class="card">
<h3>🎲 Random Verse</h3>
<p>${verse.ref}</p>
<b>${verse.text}</b>
<p>${verse.exp}</p>
</div>
`;
};
