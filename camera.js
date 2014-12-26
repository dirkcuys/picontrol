var exec = require('child_process').exec;

// Take a photo
exports.capture = function(cb){
    exec('/usr/bin/env bash ./sh/capture.sh', function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    });
};

// Get camera status
exports.getStatus = function(cb){
    exec('/usr/bin/env bash ./sh/status.sh', function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
            cb(error);
        }
        cb(null, stdout);
    });
};

// Get a config variable
exports.getConfig = function(variable, cb){
    console.log('variable:' + variable);
    exec('/usr/bin/env gphoto2 --get-config ' + variable, function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
            cb(error);
        }
        cb(null, stdout);
    });
};


exports.setConfig = function(variable, value, cb){
    exec('/usr/bin/env gphoto2 --set-config ' + variable + '=' + value, function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
            cb(error);
        }
        cb(null, stdout);
    });
};


exports.timeLapse = function(delay, count, inverval, cb){
};
