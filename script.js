function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let ampm = h >= 12 ? 'PM' : 'AM';

  h = h % 12;
  h = h ? h : 12; // 0 becomes 12
  m = m < 10 ? '0' + m : m;

  document.getElementById('time').textContent = `${h}:${m} ${ampm}`;
  document.getElementById('date').textContent = today.toDateString();

  setTimeout(startTime, 1000);
}

startTime();


// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
  lucide.replace();
});
