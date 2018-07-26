function controller() {

}

function send() {
	msg = $("#msg-text").val();
	console.log(msg);
	$.ajax({
		url: "http://127.0.0.1:8080/SimpleWebApp",
		method: "POST",
		data: {
			msg: msg
		}
	})
		.done(function (resp) {
			$(".msg").html(JSON.parse(resp).msg);
		})
		.fail;(function (resp) {
			console.log(resp);
		});
}
