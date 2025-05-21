function renderQuestion(containerId, questions, startId) {
  let currentId = startId;
  const box = document.getElementById(containerId);

  function showQuestion(id) {
    const q = questions[id];
    box.innerHTML = `<p>${q.text}</p>`;
    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt.text;
      btn.className = "card";
      btn.onclick = () => {
        if (opt.next) showQuestion(opt.next);
        else box.innerHTML = `<p><strong>建議結果：</strong>${opt.result}</p><a href="index.html" class="card">回首頁</a>`;
      };
      box.appendChild(btn);
    });
  }

  showQuestion(currentId);
}

