let locked = true;

function unlockDiary() {
  const password = document.getElementById('password').value;
 if (password === '1234') {
    document.getElementById('lock').style.display = 'none';
    document.getElementById('diary').style.display = 'block';
    locked = false;
  } else {
    alert('Incorrect password!');
    event.preventDefault();
    return;
    locked = true;
  } 
}
function lockDiary() {
  document.getElementById('lock').style.display = 'block';
  document.getElementById('diary').style.display = 'none';
  document.getElementById('password').value = '';
  locked = true;
}

function saveEntry() {
  if (locked) {
    alert('Please unlock the diary first.');
    return;
  }
  const entryHead = document.getElementById('entryHead').value;
  alert('Entry saved\nTitle: ' + entryHead);
}