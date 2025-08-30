function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let ampm = h >= 12 ? 'PM' : 'AM';

  h = h % 12;
  h = h ? h : 12; // 0 → 12
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  // Blink colons every second
  const colon = today.getSeconds() % 2 === 0 ? ":" : " ";

  // Time with blinking colons
  document.getElementById('time').textContent = `${h}${colon}${m}${colon}${s} ${ampm}`;

  // Shorter date (e.g. Aug 31, 2025)
  document.getElementById('date').textContent = today.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  setTimeout(startTime, 1000);
}

startTime();



// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
  lucide.replace();
});


