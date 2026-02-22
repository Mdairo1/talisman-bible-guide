document.addEventListener("DOMContentLoaded", function() {
  const menuBtn = document.getElementById("menu-btn");
  const topicMenu = document.getElementById("topic-menu");
  const topicTitle = document.getElementById("topic-title");
  const versesContainer = document.getElementById("verses-container");

  // 1. Get unique topics
  const topics = [...new Set(verses.map(v => v.topic))];

  // 2. Populate dropdown
  topics.forEach(topic => {
    const li = document.createElement("li");
    li.textContent = topic;
    li.addEventListener("click", () => showRandomVerses(topic));
    topicMenu.appendChild(li);
  });

  // 3. Toggle menu
  menuBtn.addEventListener("click", () => {
    topicMenu.style.maxHeight = topicMenu.style.maxHeight ? null : topicMenu.scrollHeight + "px";
  });

  // 4. Show 5 random verses for a topic
  function showRandomVerses(topic) {
    topicTitle.textContent = topic;
    versesContainer.innerHTML = "";

    const topicVerses = verses.filter(v => v.topic === topic);
    const shuffled = topicVerses.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);

    selected.forEach(v => {
      const div = document.createElement("div");
      div.classList.add("verse");
      div.innerHTML = `<p><strong>${v.ref}</strong>: ${v.text}</p>
                       <p><em>${v.exp}</em></p>`;
      versesContainer.appendChild(div);
    });

    topicMenu.style.maxHeight = null; // close menu
  }
});
