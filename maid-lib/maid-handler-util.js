const fs = require('fs');

function handleMaidNotFound(req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('ページがみつかりませんよ！ご主人様');
}

function handleMaidBadRequest(req, res) {
  res.writeHead(400, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('未対応のリクエストですよ！ご主人様！');
}

function handleMaidLogout(req, res) {
  res.writeHead(401, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.end('<!DOCTYPE html><html lang="ja"><body>' +
    '<h1>ログアウトしました</h1>' +
    '<a href="/posts">ログイン</a>' +
    '</body></html>'
  );
}

// function handleFavicon(req, res) {
//   res.writeHead(200, {
//     'Content-Type': 'image/vnd.microsoft.icon'
//   });
//   const favicon = fs.readFileSync('./favicon.ico');
//   res.end(favicon);
// }

module.exports = {
  handleMaidNotFound: handleMaidNotFound,
  handleMaidLogout: handleMaidLogout,
  handleMaidBadRequest: handleMaidBadRequest,
  // handleFavicon: handleFavicon
}

