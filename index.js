const http = require('http');
const axios = require('axios').default;

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    try {
        axios.get('https://api.github.com/repos/nodejs/node')
        .then(function(r) {
            const {stargazers_count, forks_count, open_issues_count} = r.data;
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(`Stargazers: ${stargazers_count} \nForks: ${forks_count} \nOpen Issus: ${open_issues_count}`);
        })
    } catch(e) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal error issued');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});