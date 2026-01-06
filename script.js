let logs = JSON.parse(localStorage.getItem("auditLogs")) || [];

function logAction(action) {
  const entry = {
    id: Date.now(),
    action,
    time: new Date().toLocaleString()
  };

  logs.unshift(entry);
  localStorage.setItem("auditLogs", JSON.stringify(logs));
  render();
}

function clearLogs() {
  logs = [];
  localStorage.removeItem("auditLogs");
  render();
}

function render() {
  const list = document.getElementById("logs");
  list.innerHTML = "";

  logs.forEach(log => {
    const li = document.createElement("li");
    li.innerText = `[${log.time}] ${log.action}`;
    list.appendChild(li);
  });
}

render();
