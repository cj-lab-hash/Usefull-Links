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

  // Blink: show seconds only on even ticks
  const showSeconds = today.getSeconds() % 2 === 0;
  const timeString = showSeconds ? `${h}:${m}:${s} ${ampm}` : `${h}:${m} ${ampm}`;

  document.getElementById('time').textContent = timeString;

  // shorter date
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

