// 内置模块
var http = require('http');

// 第三方模块（需要安装）
var mysql = require('mysql');

// 自定义模块
var module = require('./module.js');
console.log(module)
module.skill()

/*setInterval(function(){
	console.log(Date.now())
},1000)*/