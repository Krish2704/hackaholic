function check(answer) {
	$.ajax({
			type: "POST",
			url: "check.php",
			dataType: "json",
			data: {
				answer: answer
			},
			success: function (response) {
					if (response == 'failed') {
						if (qno == 6) {
							alert('The Password you enetered is not mEhPessWrd')
						}else {
							alert("Bad Password. Try Again.");
						}
						
					}
					else {
						alert("Success");
						window.location = "index.html";
					}
			},
			error: function () {
					alert("Connection Error");
			},
	});
}