// Clock and Date
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  h = h < 10 ? '0'+h : h;
  m = m < 10 ? '0'+m : m;
  document.getElementById('time').textContent = `${h}:${m}`;
  document.getElementById('date').textContent = today.toDateString();
  setTimeout(startTime, 1000);
}

startTime();

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
  lucide.replace();
});
