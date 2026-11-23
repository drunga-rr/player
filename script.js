const linkInput = document.getElementById('driveLink');
const playBtn = document.getElementById('playBtn');
const clearBtn = document.getElementById('clearBtn');
const player = document.getElementById('player');
const emptyState = document.getElementById('emptyState');
const message = document.getElementById('message');

function extractDriveId(raw) {
  const input = raw.trim();
  if (!input) return null;
  // Accept a standard Google Drive file URL, open?id= link, or pasted file ID.
  try {
    const url = new URL(input);
    if (!/(^|\.)drive\.google\.com$/i.test(url.hostname)) return null;
    const fromPath = url.pathname.match(/\/file\/d\/([^/]+)/);
    const id = fromPath?.[1] || url.searchParams.get('id');
    return id && /^[a-zA-Z0-9_-]+$/.test(id) ? id : null;
  } catch {
    return /^[a-zA-Z0-9_-]{15,}$/.test(input) ? input : null;
  }
}
function loadVideo() {
  message.textContent = '';
  const id = extractDriveId(linkInput.value);
  if (!id) {
    message.textContent = 'Link inválido. Cole um link de arquivo do Google Drive ou o ID do vídeo.';
    return;
  }
  player.hidden = false;
  emptyState.hidden = true;
  player.src = `https://drive.google.com/file/d/${encodeURIComponent(id)}/preview?hl=pt-BR`; // tenta solicitar interface do Drive em português
  message.textContent = 'Vídeo carregado. Se não aparecer, confira o compartilhamento do Drive e tente abrir o link de teste em outra aba.';
}
function clearVideo() {
  player.src = '';
  player.hidden = true;
  emptyState.hidden = false;
  linkInput.value = '';
  message.textContent = '';
  linkInput.focus();
}
playBtn.addEventListener('click', loadVideo);
clearBtn.addEventListener('click', clearVideo);
linkInput.addEventListener('keydown', event => { if (event.key === 'Enter') loadVideo(); });
