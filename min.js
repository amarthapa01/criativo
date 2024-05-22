const numStars = 400; // Adjust the number of stars
const container = document.body;

for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  container.appendChild(star);
}
