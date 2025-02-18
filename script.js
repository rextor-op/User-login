const keys = {
    "ADMIN123": "admin",
    "USER123": "user"
};

// Generate or get Device ID
function generateDeviceId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

let deviceId = localStorage.getItem('device_id') || generateDeviceId();
localStorage.setItem('device_id', deviceId);
document.getElementById('deviceIdInput').value = deviceId;

// Handle login
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const keyInput = document.getElementById("key-input").value.trim();
    if (keys[keyInput]) {
        window.location.href = "play.html"; 
    } else {
        alert("Invalid Key! Try again.");
    }
});

// Copy Device ID
function copyDeviceId() {
    navigator.clipboard.writeText(deviceId).then(() => {
        alert("Device ID Copied: " + deviceId);
    });
}
