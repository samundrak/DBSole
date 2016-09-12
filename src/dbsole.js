var shell = {};
var socket = io.connect('http://localhost:9393');
socket.on('query_response', function(data){
            shell.exec(data);
});

jQuery(function($, undefined) {
    $('#dbsole').terminal(function(command, term) {
        if(!command)
            return;

        shell.exec  = function(data){
                    if(!data.success){
                    return term.error(JSON.stringify(data.result));
            }

        term.echo(JSON.stringify(data.result));
        }
        socket.emit('query', { query: command });
    }, {
        greetings: 'Google Chrome Mysql extension ',
        name: 'db_sole',
        height: 330,
        prompt: 'DBSole> '
    });
});