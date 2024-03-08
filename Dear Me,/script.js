let locked = false;

function unlockDiary() {
  const password = document.getElementById('password').value;
 if (password === '1234') {
    document.getElementById('lock').style.display = 'none';
    document.getElementById('diary').style.display = 'block';
    locked = true;
  } else {
    alert('Incorrect password!');
    event.preventDefault();
    return;
    locked = false;
  } 
}
function lockDiary() {
  document.getElementById('lock').style.display = 'block';
  document.getElementById('diary').style.display = 'none';
  document.getElementById('password').value = '';
  locked = false;
}

function saveEntry() {
  if (locked) {
    alert('Please unlock the diary first.');
    return;
  }
  const entryHead = document.getElementById('entryHead').value;
  alert('Entry saved\nTitle: ' + entryHead);
}

//locked in this sense is sort of "unlocked"