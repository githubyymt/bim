var config = require('./config');
var mysql = require('mysql');
var pool = mysql.createPool(config.DbConfig);
pool.getConnection(function (err, connection) {
    // Use the connection
    connection.query('SELECT * FROM new_table where idnew_table=1', function (err, rows) {
        // And done with the connection.
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
        }
        
        // 返回连接池
        connection.release(function (error) {
            if (error) {
                console.log('DB-关闭数据库连接异常！');
                throw error;
            }
        });
        // Don't use the connection here, it has been returned to the pool.
    });
});
//Math.floor(Math.random()*10+1);
var handleRequest=require('./handle-request')
    , http = require('http')
    , socketio = require('socket.io');

var server = http.createServer(handleRequest).listen(80, function () {
        console.log('Listening at: http://localhost');
    });

socketio.listen(server).on('connection', function (socket) {
    socket.on('message', function (msg) {
        console.log('Message Received: ', msg);
        socket.broadcast.emit('message', msg);
    });
});

//socketio.on('authorization',(function (handshakeData, accept) {
//    if (handshakeData.headers.cookie) {
//        handshakeData.cookie = cookie.parse(handshakeData.headers.cookie);
//        handshakeData.sessionID = connect.utils.parseSignedCookie(handshakeData.cookie['express.sid'], 'secret');
//        if (handshakeData.cookie['express.sid'] == handshakeData.sessionID) {
//            return accept('Cookie is invalid.', false);
//        }

//    } else {
//        return accept('No cookie transmitted.', false);
//    }
//    accept(null, true);
//}));
