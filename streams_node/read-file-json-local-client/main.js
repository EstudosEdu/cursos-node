function sla () {
    fetch('./data.json')
        .then((response) => response.body)
        .then((res) => {
            const reader = res.getReader();
            return new ReadableStream({
                start(controller) {
                    // The following function handles each data chunk
                    function push() {
                      // "done" is a Boolean and value a "Uint8Array"
                      reader.read()
                        .then(({ done, value }) => {
                            // If there is no more data to read
                            if (done) {
                                console.log('done', done);
                                controller.close();
                                return;
                            }
                            // Get the data and send it to the browser via the controller
                            controller.enqueue(value);
                            // Check chunks by logging to the console
                            console.log(done, value);
                            push();
                        });
                    }
            
                    push();
                }
            });
        })
        .then((stream) =>
            // Respond with our stream
            new Response(stream, { headers: { 'Content-Type': 'text/json' } }).text()
        )
        .then((result) => {
            // Do things with result
            console.log('result', result);
        })
        .catch((e) => {
            console.log('Error', e);
        })
}

const stream = sla();