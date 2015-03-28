window['twijs'] = (function(){
return {
    // Common short abbreviations
    euc: window.encodeURIComponent,
    duc: window.decodeURIComponent,
    getById: document.getElementById,
    

    // Given a case insensitive url parameter key, return an array of values
    // url parameter value. If key is not found, return an empty array..
    getUrlParamValue: function(key){
        if(key === null){return [];}
        key = key.toLowerCase();
        // Remove the '?' character from the search string first.
        var parameters = window.location.search.substring(1).split('&'),
            results = [];
        for(i in parameters){
            var keypair = parameters[i].split('=');
            if(key == keypair[0].toLowerCase()){
                results.push(decodeURIComponent(keypair[1]));
            }
        }
        return results;
    }
};

}());
