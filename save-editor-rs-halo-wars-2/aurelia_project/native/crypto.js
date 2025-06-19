define('crypto', function() { 
    var crypto = window.vantage.nodeModules.crypto; 
    delete crypto.createCredentials;
    delete crypto.Credentials;
    return crypto;
});