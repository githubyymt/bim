exports.Expires = {
    fileMatch: /^(gif|png|jpg|js|css)$/ig,
    maxAge: 60 * 60 * 24 * 365
};
exports.Compress = {
    match: /css|js|html/ig
};
exports.Welcome = {
    file:'index.html'
};
exports.DbConfig = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '168168',
    database: 'test',
    //charset: 'utf-8',
    connectionLimit: 6,
    supportBigNumbers: true,
    bigNumberStrings: true
};