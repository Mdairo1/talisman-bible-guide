const topicsDiv = document.getElementById("topics");
const contentDiv = document.getElementById("content");
const randomBtn = document.getElementById("randomBtn");

/* GROUP BY TOPIC */

const topicMap = {};

bibleVerses.forEach(v=>{
  if(!topicMap[v.topic]) topicMap[v.topic]=[];
  topicMap[v.topic].push(v);
});

const topics = Object.keys(topicMap).map(name=>({
  title:name,
  verses:topicMap[name]
}));

function randomFive(arr){
  return [...arr]
    .sort(()=>Math.random()-0.5)
    .slice(0,5);
}

function renderTopics(){
  topicsDiv.innerHTML="";
  contentDiv.innerHTML="";

  topics.forEach(topic=>{
    const btn=document.createElement("button");
    btn.className="topicBtn";
    btn.textContent=topic.title;
    btn.onclick=()=>openTopic(topic);
    topicsDiv.appendChild(btn);
  });
}

function openTopic(topic){

  topicsDiv.innerHTML="";
  contentDiv.innerHTML="";

  const verses=randomFive(topic.verses);

  verses.forEach(v=>{
    const card=document.createElement("details");
    card.className="verseCard";

    card.innerHTML=`
      <summary>${v.ref}</summary>
      <p>${v.text}</p>
      <p>${v.exp}</p>
    `;

    contentDiv.appendChild(card);
  });

  const back=document.createElement("button");
  back.textContent="← Back";
  back.onclick=renderTopics;
  contentDiv.appendChild(back);
}

randomBtn.onclick=()=>{
  const verse =
    bibleVerses[Math.floor(Math.random()*bibleVerses.length)];

  contentDiv.innerHTML=`
    <div class="verseCard open">
      <h3>${verse.ref}</h3>
      <p>${verse.text}</p>
      <p>${verse.exp}</p>
    </div>
  `;
};

renderTopics();
