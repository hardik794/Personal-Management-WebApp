var form = document.getElementById("my-form");

		async function handleSubmit(event) {
			event.preventDefault();
			var data = new FormData(event.target);
			fetch(event.target.action, {
				method: form.method,
				body: data,
				headers: {
					'Accept': 'application/json'
				}
			}).then(response => {
				swal({
					title: 'THANK YOU!',
					text: 'Your feedback has been succesfully Received',
					showConfirmButton: true,
				});
				form.reset()
			}).catch(error => {
				swal({
					title: 'ERROR!',
					text: 'Your feedback has not been Received',
					showConfirmButton: true,
				});
			});
		}
		form.addEventListener("submit", handleSubmit)