/**
 * JS code to run only on pages that use a SFMC form.
 *
 * @package WordPress
 */

/**
 * Callback for form submission.
 *
 * @param {*} token callback token.
 */
function onSubmit(token) {
	var f = $( "#sfmc-form" )
	$.ajax(
		{
			url: f.attr( "action" ),
			type: 'POST',
			data: f.serialize(),
			beforeSend: function() {
				$( "#sfmc-form" ).toggle();
				$( "#message" ).html( "Thank you for your submission." ).addClass( "callout success" );
			}
			,
			success: function(data) {
				var msg = $( data ).find( "p" ).text();
				$( "#message" ).html( msg );
			}
		}
	);
}
window.onSubmit = onSubmit; // need to do this to export the onSubmit function from the module scope created by WebPack.

$( document ).ready(
	function() {
		var f = $( "#sfmc-form" )
		f.on(
			"click",
			"#submitbtn",
			function(e) {
				if (f[0].checkValidity()) {
					e.preventDefault();
					grecaptcha.execute();
				}
			}
		);
	}
);
