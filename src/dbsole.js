import {} from  './socket.io';
import Socket from './core/Socket';
import Terminal from './core/Terminal';

const shell = Object.create({});
const socket = new Socket(io, 'http://localhost:9393').connect();
const terminal = new Terminal();
let $result = [],
    $result_ = [],
    _ = _;

socket.on('query_response', data => {
    terminal.setOutputType(data.success);

    shell.exec(term => {
        terminal.setTerm(term);

        if (data.success && typeof data.result === 'object') {

            terminal.output(
                `<b style="color:red">
                Result is available on $result , lodash on _, and chained lodash on $result_
                </b>`,
                {
                    raw: true
                });

            terminal.output(
                `Total 
                    <b style="color:green">
                    ${data.result.length}
                    </b>
                 Results.`,
                {
                    raw: true
                });

            $result = data.result;
            $result_ = _.chain(_.cloneDeep(data.result));
        }

        terminal.formatJson(data.result);

    });

});

jQuery($ => {
    $('#dbsole').terminal((command, term) => {

        if (!command) return;

        if (command.startsWith('$') || command.startsWith('_')) {
            terminal.setTerm(term);
            try {
                var result = window.eval(command);

                if (result !== undefined) {
                    terminal.setOutputType(true)

                    if (Array.isArray(result)) {
                        terminal.formatJson(result);
                        return;
                    }

                    terminal.formatJson(JSON.parse(JSON.stringify(result)));
                }
            } catch (e) {
                terminal.setOutputType(false)
                    .output(new String(e));
            }
            return;
        }

        socket.emit('query', {query: command});
        shell.exec = cb => cb(term);

    }, {
        greetings: 'Google Chrome Database Extension ',
        name: 'db_sole',
        height: 340,
        prompt: 'DBSole> '
    });
});