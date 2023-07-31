let appId = window.to_whom;
document.write('<b><i>Tracker ' + to + '!</i></b>');
if (!window['snowplow']) { 
    window.globalSnowplowNamespace = window.globalSnowplowNamespace || [];
    window.globalSnowplowNamespace.push('snowplow');
    window['snowplow'] = function () { 
        (window['snowplow'].q = window['snowplow'].q || []).push(arguments);
        window['snowplow'].q = window['snowplow'].q || [];
        n = document.createElement("script");
        g=document.getElementsByTagName("script")[0]
        n.async = 1;
        n.src = "https://cdn.statically.io/gh/cadenceclub/tracker_script/main/sp.js";
        g.parentNode.insertBefore(n,g)
    }
}
// snowplow('newTracker', 'sp', 'https://a8c3-106-51-119-120.ngrok-free.app', {
// appId: appId,
// platform: 'web',
// cookieDomain: null,
// discoverRootDomain: true,
// cookieName: '_sp_',
// cookieSameSite: 'Lax', // Recommended
// cookieSecure: true,
// encodeBase64: true,
// respectDoNotTrack: false,
// eventMethod: 'post',
// bufferSize: 1,
// maxPostBytes: 40000,
// maxGetBytes: 1000, // available in v3.4+
// postPath: '/event/create/', // Collector must be configured
// crossDomainLinker: function (linkElement) {
//     return (linkElement.href === 'http://acme.de' || linkElement.id === 'crossDomainLink');
// },
// cookieLifetime: 63072000,
// stateStorageStrategy: 'cookieAndLocalStorage',
// maxLocalStorageQueueSize: 1000,
// resetActivityTrackingOnPageView: true,
// connectionTimeout: 5000,
// anonymousTracking: false,
// // anonymousTracking: { withSessionTracking: true },
// // anonymousTracking: { withSessionTracking: true, withServerAnonymisation: true },
// customHeaders: {}, // Use with caution. Available from v3.2.0+
// withCredentials: false, // Available from v3.2.0+
// contexts: {
//     webPage: true, // Default
//     session: false, // Adds client session context entity to events, off by default. Available in v3.5+.
//     browser: false, // Adds browser context entity to events, off by default. Available in v3.9+.
//     performanceTiming: true,
//     gaCookies: true,
//     geolocation: false,
//     clientHints: true,
//     // clientHints: { includeHighEntropy: true }, // Optional
// },
// retryStatusCodes: [],
// dontRetryStatusCodes: [],
// onSessionUpdateCallback: function(clientSession) { }, // Allows the addition of a callback, whenever a new session is generated. Available in v3.11+.
// });
// snowplow('enableActivityTracking', {
// minimumVisitLength: 2,
// heartbeatDelay: 5
// });
// snowplow('trackPageView');
