export default class Terminal {

    constructor() {
        this.term = null;
        this.outputType = 'echo';
    }

    setTerm(term) {
        this.term = term;
        return this;
    }

    setOutputType(responseStatus) {
        this.outputType = responseStatus ? 'echo' : 'error';
        return this;
    }

    formatJson(jsonValue) {
        if (typeof  jsonValue !== 'object') {
            return this.output(jsonValue);
        }

        this.term[this.outputType](`<div class="executionResponse"></div>`, {
            raw: true
        });

        let $executionResponse = $(".executionResponse");
        $($executionResponse[$executionResponse.length - 1])
            .JSONView(jsonValue, {collapsed: false});
        $('html, body').scrollTop($(document).height());
    }

    output(...args) {
        this.term[this.outputType](...args);
        $('html, body').scrollTop($(document).height());
    }

}