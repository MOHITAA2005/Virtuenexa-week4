
const ctx = document.getElementById('progressChart').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Challenge Completion (%)',
      data: [50, 65, 85, 100],
      backgroundColor: ['#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0']
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});
