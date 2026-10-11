function showView(viewId) {
  document.querySelectorAll('.auth-container, .section').forEach(el => el.classList.add('hidden'));
  const target = document.getElementById(viewId);
  if (target) {
    target.classList.remove('hidden');
    window.scrollTo(0, 0);
  }
}

document.getElementById('form-signup').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('view-signup').classList.add('hidden');
  document.getElementById('app-shell').classList.remove('hidden');
  showView('view-requester-dashboard');
});

document.getElementById('form-login').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('view-login').classList.add('hidden');
  document.getElementById('app-shell').classList.remove('hidden');
  showView('view-requester-dashboard');
});

document.getElementById('link-to-login').addEventListener('click', (e) => {
  e.preventDefault();
  showView('view-login');
});

document.getElementById('link-to-signup').addEventListener('click', (e) => {
  e.preventDefault();
  showView('view-signup');
});

document.getElementById('btn-logout').addEventListener('click', () => {
  document.getElementById('app-shell').classList.add('hidden');
  showView('view-login');
});

document.getElementById('form-helper-setup').addEventListener('submit', (e) => {
  e.preventDefault();
  showView('view-feed');
});

function switchMode(mode) {
  const labelReq = document.getElementById('label-requester');
  const labelHelp = document.getElementById('label-helper');
  const track = document.getElementById('mode-toggle');

  if (mode === 'requester') {
    labelReq.classList.add('active');
    labelHelp.classList.remove('active');
    track.classList.remove('helper-active');
    showView('view-requester-dashboard');
  } else {
    labelHelp.classList.add('active');
    labelReq.classList.remove('active');
    track.classList.add('helper-active');
    showView('view-helper-setup');
  }
}

function toggleMode() {
  const isHelper = document.getElementById('label-helper').classList.contains('active');
  switchMode(isHelper ? 'requester' : 'helper');
}

function filterFeed(category, btn) {
  document.querySelectorAll('#view-feed .pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('#view-feed .list-item').forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

function filterHelpers(category, btn) {
  document.querySelectorAll('#view-find-helper .pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('#view-find-helper .card-item').forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function sendMessage(e) {
  e.preventDefault();
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;

  const box = document.getElementById('chat-messages');
  
  const userBubble = document.createElement('div');
  userBubble.className = 'bubble sent';
  userBubble.textContent = text;
  box.appendChild(userBubble);
  
  input.value = '';
  box.scrollTop = box.scrollHeight;

  setTimeout(() => {
    const replyBubble = document.createElement('div');
    replyBubble.className = 'bubble received';
    replyBubble.textContent = "Got it! Working on your request right now.";
    box.appendChild(replyBubble);
    box.scrollTop = box.scrollHeight;
  }, 1000);
}

function openModal() {
  document.getElementById('profile-modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('profile-modal').classList.add('hidden');
}