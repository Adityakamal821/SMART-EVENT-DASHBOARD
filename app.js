
const eventConfig = {
    stats: [
        { label: 'Total Guests', value: '2,540', icon: 'fa-users', color: 'blue' },
        { label: 'Checked In', value: '1,892', icon: 'fa-user-check', color: 'green' },
        { label: 'Pending', value: '648', icon: 'fa-hourglass-half', color: 'orange' },
        { label: 'Revenue', value: '$84.2k', icon: 'fa-wallet', color: 'indigo' }
    ],
    activities: [
        { user: 'Rahul Verma', action: 'Checked In', time: 'Just now', icon: 'fa-circle-check', color: 'text-green-500' },
        { user: 'VIP Entry', action: 'Table 12 assigned', time: '2 min ago', icon: 'fa-star', color: 'text-yellow-500' },
        { user: 'New Ticket', action: 'General Pass sold', time: '5 min ago', icon: 'fa-ticket', color: 'text-blue-500' }
    ]
};


const renderStats = () => {
    const grid = document.getElementById('statsGrid');
    grid.innerHTML = eventConfig.stats.map(stat => `
        <div class="glass-card p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div class="flex justify-between items-start">
                <div>
                    <p class="text-gray-500 text-sm font-medium">${stat.label}</p>
                    <h3 class="text-2xl font-bold mt-1">${stat.value}</h3>
                </div>
                <div class="p-3 bg-${stat.color}-50 text-${stat.color}-600 rounded-xl">
                    <i class="fa-solid ${stat.icon}"></i>
                </div>
            </div>
        </div>
    `).join('');
};

const renderActivity = () => {
    const feed = document.getElementById('activityFeed');
    feed.innerHTML = eventConfig.activities.map(act => `
        <div class="flex gap-4">
            <div class="${act.color} mt-1"><i class="fa-solid ${act.icon}"></i></div>
            <div>
                <p class="text-sm font-bold text-gray-800">${act.user} <span class="font-normal text-gray-500">${act.action}</span></p>
                <p class="text-xs text-gray-400 mt-0.5">${act.time}</p>
            </div>
        </div>
    `).join('');
};

const initChart = () => {
    const ctx = document.getElementById('liveChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['10am', '11am', '12pm', '1pm', '2pm', '3pm'],
            datasets: [{
                data: [100, 350, 800, 450, 900, 1100],
                borderColor: '#4f46e5',
                backgroundColor: 'rgba(79, 70, 229, 0.1)',
                fill: true,
                tension: 0.4,
                pointRadius: 4
            }]
        },
        options: {
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true, grid: { display: false } } }
        }
    });
};


document.addEventListener('DOMContentLoaded', () => {
    renderStats();
    renderActivity();
    initChart();
});