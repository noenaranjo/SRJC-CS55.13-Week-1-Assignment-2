let myhttp = require('http');

let myserver = myhttp.createServer (
  function(myrequest, myresponse){
   console.log( myrequest.url);
    // CREATES HTTP RESPONSE HEADER
        let mytext;
    if (myrequest.url === '/hey') {
       mytext = 'HIIIIIIIIIIIIII!!!!!!!';
    } else {
       mytext = 'WHO ARE YOUUUUUU????';
    }
    myresponse.writeHead( 200, {'Content-Type': "text/plain"} );

    // end method
    myresponse.end( mytext + '\n')
  }
);


myserver.listen(8080, '0.0.0.0')

console.log ('server has started');
