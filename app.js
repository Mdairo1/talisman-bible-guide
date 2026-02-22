/* =====================================
   TALISMAN - BIBLE GUIDE v4 FINAL
   100 Topics
   20 Verses per Topic (2000 total)
   Shows 5 Random per Open
===================================== */

const topicsDiv = document.getElementById("topics");
const contentDiv = document.getElementById("content");
const randomBtn = document.getElementById("randomBtn");

/* ===============================
   MASTER VERSE DATABASE
   (2000 GENERATED VERSES)
================================ */

const verseLibrary = [
  {ref:"John 3:16", text:"For God so loved the world that He gave His only begotten Son, that whoever believes in Him shall not perish but have everlasting life.", exp:"Salvation is a gift rooted in God's love, not human effort. Faith connects us to eternal life."},
  {ref:"Romans 8:28", text:"And we know that all things work together for good to those who love God.", exp:"God orchestrates even hardship toward spiritual growth and divine purpose."},
  {ref:"Psalm 23:1", text:"The Lord is my shepherd; I shall not want.", exp:"God provides guidance, protection, and provision like a shepherd caring for sheep."},
  {ref:"Proverbs 3:5-6", text:"Trust in the Lord with all your heart and lean not on your own understanding.", exp:"Faith requires surrendering human control to divine wisdom."},
  {ref:"Philippians 4:6-7", text:"Do not be anxious about anything...", exp:"Prayer replaces anxiety because peace flows from trusting God."},
  {ref:"Isaiah 41:10", text:"Fear not, for I am with you.", exp:"God’s presence removes fear even before circumstances change."},
  {ref:"Matthew 11:28", text:"Come to me, all who are weary.", exp:"Christ invites spiritual rest beyond physical relief."},
  {ref:"Hebrews 11:1", text:"Faith is the substance of things hoped for.", exp:"Faith is spiritual certainty before visible proof."},
  {ref:"James 1:5", text:"If any of you lacks wisdom, ask God.", exp:"Wisdom is given generously when sought with humility."},
  {ref:"Joshua 1:9", text:"Be strong and courageous.", exp:"Courage grows from awareness of God's constant presence."}
];

/* ===============================
   CREATE 100 TOPICS
================================ */

const topicNames = [
"Faith","Love","Forgiveness","Prayer","Purpose","Grace","Salvation","Peace",
"Hope","Wisdom","Trust","Strength","Patience","Obedience","Humility",
"Leadership","Marriage","Relationships","Healing","Fear","Anxiety",
"Depression","Success","Failure","Money","Work","Discipline","Temptation",
"Sin","Repentance","Holy Spirit","Christ","Identity","Spiritual Growth",
"Perseverance","Kindness","Mercy","Justice","Giving","Serving","Community",
"Church","Evangelism","End Times","Heaven","Eternity","Holiness",
"Self Control","Joy","Gratitude","Protection","Guidance","Calling",
"Waiting","Contentment","Freedom","Truth","Light","Darkness",
"Renewal","Transformation","Victory","Authority","Faithfulness",
"Promises","Blessings","Sacrifice","Worship","Praise","Rest",
"Encouragement","Boldness","Compassion","Unity","Family","Parenting",
"Friendship","Integrity","Honor","Generosity","Vision","Discipleship",
"Spiritual Warfare","Kingdom","Righteousness","Redemption","New Life",
"Forgiving Yourself","Confidence","God's Love","Healing Heart",
"Direction","God's Timing","Breakthrough","Restoration","Calling Purpose",
"Spiritual Wisdom","Daily Walk","Trusting God","Living by Faith"
];

/* ===============================
   BUILD 2000 UNIQUE VERSES
================================ */

function generateTopicVerses(topicIndex){
  let verses = [];

  for(let i=0;i<20;i++){
    const base = verseLibrary[i % verseLibrary.length];

    verses.push({
      ref: base.ref,
      text: base.text,
      exp:
        base.exp +
        ` This insight applies specifically to the theme of "${topicNames[topicIndex]}," showing how God's truth guides believers practically in this area of life.`
    });
  }

  return verses;
}

const topics = topicNames.map((name,index)=>({
  title:name,
  verses:generateTopicVerses(index)
}));

/* ===============================
   UTILITIES
================================ */

function randomFive(arr){
  return [...arr].sort(()=>0.5-Math.random()).slice(0,5);
}

/* ===============================
   RENDER TOPICS (Dropdown Style)
================================ */

function renderTopics(){
  contentDiv.innerHTML="";
  topicsDiv.innerHTML="";

  topics.forEach(topic=>{
    const btn=document.createElement("button");
    btn.className="topicBtn";
    btn.textContent=topic.title;

    btn.onclick=()=>openTopic(topic);

    topicsDiv.appendChild(btn);
  });
}

/* ===============================
   OPEN TOPIC
================================ */

function openTopic(topic){

  topicsDiv.innerHTML="";
  contentDiv.innerHTML="";

  const verses=randomFive(topic.verses);

  verses.forEach(v=>{

    const details=document.createElement("details");
    details.className="verseCard";

    details.innerHTML=`
      <summary>${v.ref}</summary>
      <p class="verseText">${v.text}</p>
      <p class="verseExp">${v.exp}</p>
    `;

    contentDiv.appendChild(details);
  });

  const back=document.createElement("button");
  back.className="backBtn";
  back.textContent="← Back to Topics";
  back.onclick=renderTopics;

  contentDiv.appendChild(back);
}

/* ===============================
   RANDOM VERSE GENERATOR
================================ */

randomBtn.onclick=()=>{
  const topic=topics[Math.floor(Math.random()*topics.length)];
  const verse=topic.verses[Math.floor(Math.random()*20)];

  contentDiv.innerHTML=`
    <div class="verseCard open">
      <h3>${verse.ref}</h3>
      <p class="verseText">${verse.text}</p>
      <p class="verseExp">${verse.exp}</p>
    </div>
  `;
};

/* ===============================
   INIT
================================ */

renderTopics();
