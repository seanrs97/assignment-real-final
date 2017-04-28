if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {

    console.log('Service worker registered successfully');
  }).catch(function(err) {
    console.log('Service worker registration failed: ', err);
  });
}

fetch("events.json")
    .then(response => {
        return response.json();
    }).then(events => {
        const eventsHTML = events.map(event => {
            return `<p> DICK HOLE </p>`;
        }).join("\n");
        const eventsContainer = document.getElementById('socialLife');
        eventsContainer.innerHTML = eventsHTML;
    });
	
/*	const askJackForm = document.getElementById("askJackForm");
if(askJackForm){
    const askJackFormSubmit = e => {
        e.preventDefault();
        const contact = {
            "name": e.target.name.value,
            "email": e.target.email.value,
            "question": e.target.question.value,
        };

        fetch("http://jackcat.co.uk/", {mode: "no-cors", method: "POST", body: contact})
            .then(response => {
                console.log('hello response!', response);
            }).catch(() => {
                let allContacts = [];

                const existingContacts = localStorage.getItem('contact');
                if(existingContacts){
                    allContacts = JSON.parse(existingContacts);
                }

                allContacts.push(contact);
                localStorage.setItem('contact', JSON.stringify(allContacts));
            });
    };
    askJackForm.addEventListener('submit', askJackFormSubmit, false);
}*/
