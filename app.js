"use strict"

const remote = require('electron').remote;
const indexjs = remote.require('./index');

const fs = require('fs');

$(function(){
    // ボタンが押されたときの挙動
    $('#submit').on('click', function() {
	const text = $('#textbox').val();
	// TODO: Logging
	console.log(text);

	indexjs.close();
    });
});
