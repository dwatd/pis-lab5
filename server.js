const http = require('http');
const url = require('url');

const PORT = 3000;

http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;
  const login = query.login;

  if (login === 'katya2006') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Семенюк Катерина Василівна\nКурс: 2\nГрупа: ІС-33');
  } else {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Доступ заборонено');
  }
}).listen(PORT, () => {
  console.log(`🌐 Сервер запущено: http://localhost:${PORT}/?login=katya2006`);
});
