// Load http module
var http = require('http');
// Load newly created module by me
var changeCase = require('nid-change-case-lower-upper');

// configuring server
var server = http.createServer(function(request, response){
    response.writeHead('200', {'Content-Type': 'text/plain'});
    // variable declaration
    var str = "This Is ACADGILD assignment";
    // Using upperCase module
    response.write(changeCase.upperCase(str));
    console.log(changeCase.upperCase(str));

    response.write("\n");
    // Using upperCaseFile module for sample.txt
    response.write(changeCase.upperCaseFile('sample.txt'));
    console.log(changeCase.upperCaseFile('sample.txt'));
    response.end();
});

// listen to the port
server.listen(8000);
