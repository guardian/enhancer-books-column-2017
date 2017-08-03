import iframeMessenger from 'guardian/iframe-messenger'
import reqwest from 'reqwest'
import embedHTML from './text/embed.html!text'

window.init = function init(el, config) {

    // Good for testing output of console log on apps.

    var logs = document.getElementById('console_panel');

    console.log = function(message) {

        logs.innerHTML += '<p>' + message + '</p>';

    };

    console.error = console.debug = console.info =  console.log

    console.log("Test insertion of CSS")

	$( document ).ready(function() {
	    console.log($('body').html());
	});

};