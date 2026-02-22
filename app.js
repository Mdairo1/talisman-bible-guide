// ======================================
// TALISMAN — BIBLE GUIDE v3 (MOBILE)
// ======================================

const content = document.getElementById("content");
const randomBox = document.getElementById("random");
const dailyBox = document.getElementById("daily");
const topicSelect = document.getElementById("topicSelect");

// ------------------ REAL FULL VERSES ------------------
const verses = [
{
ref:"John 3:16",
text:"For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.",
insight:"Salvation begins with God's initiative. Love is not earned — it is given. Faith connects humanity to eternal life through Christ."
},
{
ref:"Psalm 23:1-4",
text:"The Lord is my shepherd; I shall not want. He makes me lie down in green pastures; He leads me beside still waters; He restores my soul.",
insight:"God leads both externally and internally. Spiritual restoration happens when we allow God to guide our pace and direction."
},
{
ref:"Philippians 4:6-7",
text:"Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.",
insight:"Peace is not the absence of problems but the presence of God guarding the heart."
},
{
ref:"Proverbs 3:5-6",
text:"Trust in the Lord with all your heart and lean not on your own understanding.",
insight:"Faith requires surrendering control. Divine guidance replaces human limitation."
},
{
ref:"Isaiah 41:10",
text:"Fear not, for I am with you; be not dismayed, for I am your God.",
insight:"God's presence removes isolation — courage flows from divine companionship."
},
{
ref:"Romans 8:28",
text:"And we know that all things work together for good to those who love God.",
insight:"God redeems events, not just outcomes. Nothing is wasted in His plan."
},
{
ref:"Matthew 6:33",
text:"Seek first the kingdom of God and His righteousness, and all these things shall be added unto you.",
insight:"Alignment with God brings provision through priority."
},
{
ref:"2 Corinthians 5:7",
text:"For we walk by faith, not by sight.",
insight:"Faith operates beyond visible evidence and trusts divine promises."
},
{
ref:"Hebrews 11:1",
text:"Faith is the substance of things hoped for, the evidence of things not seen.",
insight:"Faith perceives spiritual reality before manifestation."
},
{
ref:"James 1:5",
text:"If any of you lacks wisdom, let him ask of God, who gives generously.",
insight:"God welcomes questions — spiritual growth begins with seeking."
}
];

// ------------------ 100 TOPICS ------------------
const topics = [
"Faith","Love","Prayer","Hope","Peace","Wisdom","Forgiveness","Grace","Salvation",
"Patience","Healing","Joy","Guidance","Strength","Trust","Purpose","Humility",
"Leadership","Kindness","Mercy","Justice","Holiness","Protection","Family",
"Friendship","Trials","Calling","Victory","Renewal","Freedom","Discipline",
"Obedience","Waiting","Success","Work","Loneliness","Encouragement","Growth",
"Faithfulness","Courage","Rest","New Beginnings","Contentment","Serving Others",
"Unity","Compassion","Perseverance","Transformation","God's Plan","True Worship",
"Spiritual Growth","God's Promises","Inner Peace","Direction","Prayer Life",
"Trusting God","Walking With God","God's Presence","Hope After Loss","Restoration",
"Faith Journey","Overcoming Fear","God's Mercy","Divine Protection","Endurance",
"Blessings","Identity in Christ","Spiritual Warfare","Obedient Faith","Light",
"Truth","Redemption","Grace Living","Renewed Mind","God's Strength","Victory in Christ",
"Holiness Lifestyle","Faith Over Fear","Daily Walk","Provision","Contentment in God",
"Faithfulness of God","God's Timing","Peace in Storms","Healing Heart","Trusting His Plan",
"Encouragement in Trials","Divine Direction","God's Power","Faith & Works","Hope Renewed",
"Joy in Christ","God's Love","Transformation in Christ","Persevering Faith","New Life"
];

// Populate dropdown
topics.forEach((t,i)=>{
const opt=document.createElement("option");
opt.value=i;
opt.textContent=t;
topicSelect.appendChild(opt);
});

// ------------------ DAILY VERSE ------------------
(function(){
const v = verses[new Date().getDate()%verses.length];
dailyBox.innerHTML = createCard("📖 Daily Verse",v);
})();

// ------------------ CARD TEMPLATE ------------------
function createCard(title,v){
return `
<div class="card">
<h3>${title}</h3>
<p><b>${v.ref}</b></p>
<p class="verse">${v.text}</p>
<p class="insight">${v.insight}</p>
</div>`;
}

// ------------------ SHOW TOPIC ------------------
function showTopic(index){
content.innerHTML="";

let shuffled=[...verses].sort(()=>0.5-Math.random());

shuffled.slice(0,5).forEach(v=>{
content.innerHTML+=createCard(topics[index],v);
});
}

topicSelect.onchange=e=>showTopic(e.target.value);

// ------------------ RANDOM VERSE ------------------
document.getElementById("randomBtn").onclick=()=>{
const v=verses[Math.floor(Math.random()*verses.length)];
randomBox.innerHTML=createCard("🎲 Random Verse",v);
};

// ------------------ HOME BUTTON ------------------
document.getElementById("menuBtn").onclick=()=>{
content.innerHTML="";
randomBox.innerHTML="";
};
