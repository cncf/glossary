// Pulls hello bar data from www.cncf.io API and displays a hello bar if applicable.

document.addEventListener("DOMContentLoaded", function() {
    const cacheKey = 'helloBarCache';
    const cacheDuration = 3600 * 1000; // 1 hour in milliseconds

    // Check if we have a cached response and if it's still valid
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        const now = new Date().getTime();

        // If the cache is still valid, use the cached data
        if (now - parsedData.timestamp < cacheDuration) {
            insertHelloBar(parsedData.data);
            return; // Exit since we don't need to fetch the API
        } else {
            // Cache expired, remove it
            localStorage.removeItem(cacheKey);
        }
    }

    // Fetch the API if no valid cache is found
    fetch('https://www.cncf.io/wp-json/lf/v1/get_hello')
        .then(response => response.json())
        .then(data => {
            // Cache the response with a timestamp
            localStorage.setItem(cacheKey, JSON.stringify({
                data: data,
                timestamp: new Date().getTime()
            }));
            insertHelloBar(data);
        })
        .catch(error => console.error('Error fetching the API:', error));
});

// Function to insert the hello bar
function insertHelloBar(data) {
    if (data.show_hello_bar !== 1) {
        return;
    }

    const helloBar = document.querySelector('.hello-bar');
    if (! helloBar) {
        return;
    }

    helloBar.style.backgroundColor = data.hello_bar_bg;
    helloBar.style.color = data.hello_bar_text;
    helloBar.style.display = 'block';

    // Replace instances of "utm_source=www" with "utm_source=subdomain"
    const subdomain = window.location.hostname.split('.')[0];
    const updatedContent = data.hello_bar_content.replace(/utm_source=www/g, `utm_source=${subdomain}`);
    helloBar.innerHTML = updatedContent;
}
