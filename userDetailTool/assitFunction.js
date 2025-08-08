/**
 * @name browserDetail
 * @desc Get the browser that the user is using and send it to the appropriate API path 
 * @return The browser 
 */

function browserDetail() {
    let browser = 'other';
    const userAgent = navigator.userAgent;
    console.log(userAgent)
    if (userAgent.includes("Chrome") && !userAgent.includes("Edge")) {
        browser = "Chrome";
    } else if (userAgent.includes('Firefox')) {
        browser = "Firefox";
    } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
        browser = 'Safari'
    } else if (userAgent.includes('Edge')) {
        browser = 'Edge'
    } else if (userAgent.includes('OPR')) { 
        browser = 'Opera'
    }
    console.log(browser);
    return browser;
}

/**
 * @name deviceDetail 
 * @desc The function retreives the user's device type and returns it 
 * @deviceType - Values - "PC", "SP", "Tablet", "TV", "Other"
 * @return deviceType 
 */
function deviceDetail() {
    let deviceType = "Other";
    const userAgent = navigator.userAgent;
    console.log(userAgent);
    if (/Mobile|Android|iPhone|iPad/i.test(userAgent)) {
        deviceType = "SP";
    } else if (/Tablet|iPad/i.test(userAgent)) {
        deviceType = 'Tablet';
    } else {
        deviceType = 'Desktop';
    }
    console.log(deviceType)
    return deviceType
}

/**
 * @name getSitePath 
 * @desc The function gets the subdirectory - the path after the domain 
 * @webPath - The path after the domain of the client site 
 * @return webPath
 */
function getSitePath() {
    const currentURL = window.location.href;
    const clientDomain = '';
    return currentURL.split(clientDomain)[1];
}

/**
 * @name getSiteCountry 
 * @desc The function gets the user's country 
 * 
 */


