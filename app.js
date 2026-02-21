const baseVerses = [
  {
    verse:"Proverbs 3:5",
    text:"Trust in the Lord with all your heart.",
    explanation:"Faith means trusting God beyond human understanding."
  },
  {
    verse:"Romans 8:28",
    text:"All things work together for good.",
    explanation:"God transforms every situation into purpose."
  },
  {
    verse:"John 14:6",
    text:"I am the way, the truth and the life.",
    explanation:"Christ is the only path to reconciliation with God."
  },
  {
    verse:"Philippians 4:6",
    text:"Do not be anxious about anything.",
    explanation:"Prayer replaces worry with divine peace."
  },
  {
    verse:"Isaiah 41:10",
    text:"Fear not, for I am with you.",
    explanation:"God's presence gives strength in fear."
  }
];

const topicNames = [
"Faith","Love","Purpose","Forgiveness","Anxiety","Prayer",
"Hope","Wisdom","Relationships","Marriage","Temptation",
"Grace","Salvation","Patience","Healing","Joy","Peace",
"God's Timing","Leadership","Humility","Repentance",
"Holy Spirit","Christian Living","Trusting God",
"Identity in Christ","Spiritual Warfare","Gratitude",
"Kindness","Mercy","Justice","Heaven","Holiness",
"Blessings","Protection","Guidance","Family","Friendship",
"Trials","Calling","God's Love","Victory","Renewal",
"Freedom in Christ","Faith Over Fear","Discipline",
"Obedience","Waiting","Success","Money","Work",
"Loneliness","Depression","Self Control","Testing",
"End Times","Evangelism","Pride","Sin","Growth","Faithfulness"
];

const topics = topicNames.map(name => ({
  title:name,
  verses:Array.from({length:10},(_,i)=>{
    const v = baseVerses[i%baseVerses.length];
    return {...v, verse:v.verse+" ("+(i+1)+")"};
  })
}));

const topicsDiv=document.getElementById("topics");

topics.forEach(topic=>{
  const btn=document.createElement("button");
  btn.innerText=topic.title;

  btn.onclick=()=>{
    topicsDiv.innerHTML="";

    topic.verses.forEach(v=>{
      const card=document.createElement("div");
      card.className="card";

      card.innerHTML=`
        <h3>${v.verse}</h3>
        <p><b>${v.text}</b></p>
        <p>${v.explanation}</p>
      `;

      topicsDiv.appendChild(card);
    });
  };

  topicsDiv.appendChild(btn);
});

function randomVerse(){
  const topic=topics[Math.floor(Math.random()*topics.length)];
  const verse=topic.verses[Math.floor(Math.random()*10)];

  document.getElementById("random").innerHTML=`
    <div class="card">
      <h3>${topic.title}</h3>
      <p>${verse.verse}</p>
      <p><b>${verse.text}</b></p>
      <p>${verse.explanation}</p>
    </div>
  `;
}
