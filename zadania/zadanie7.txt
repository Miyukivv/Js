function timeToSeconds(timeStr) {
  const parts = timeStr.split(':').map(Number);
  if (parts.some(isNaN)) {
    throw new Error(`Niepoprawny format czasu: "${timeStr}"`);
  }

  let seconds = 0;
  if (parts.length === 3) {
    // godziny:minuty:sekundy
    const [h, m, s] = parts;
    seconds = h * 3600 + m * 60 + s;
  } else if (parts.length === 2) {
    // minuty:sekundy
    const [m, s] = parts;
    seconds = m * 60 + s;
  } else if (parts.length === 1) {
    // same sekundy
    seconds = parts[0];
  } else {
    throw new Error(`Nieobsługiwany format czasu: "${timeStr}"`);
  }

  return seconds;
}

console.log(timeToSeconds("01:02:03")); 
console.log(timeToSeconds("02:30"));    
console.log(timeToSeconds("45"));       
console.log(timeToSeconds("0:00:10"));  

//na odwrot: 
function secondsToTime(totalSeconds) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  const pad = n => n.toString().padStart(2, '0');
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}
