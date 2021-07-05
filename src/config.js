module.exports = function(hostname) {
    // Settings for geojson.io
    L.mapbox.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXFhYTA2bTMyeW44ZG0ybXBkMHkifQ.gUGbDOPUN1v1fTs5SeOR4A';
    L.mapbox.config.FORCE_HTTPS = true;
    return {
        client_id: '62c753fd0faf18392d85',
        gatekeeper_url: 'https://geojsonioauth.herokuapp.com'
    };
    
};
