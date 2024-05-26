//contact.jsx
//Bryan Chen
//301379036
//May 20, 2024

export default function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        fetch('/message.php', {
            method: 'POST',
            body: formData,
        }).then(response => {
            if (response.ok) {
                console.log('Form submitted successfully');
            } else {
                console.log('Form submission failed');
            }
        }).catch(error => {
            console.log('Form submission error:', error);
        });
        window.location.href = 'http://localhost:5173/';
    };

    return (
        <>
            <h1>Contact</h1>
            <p>Bryan Chen</p>
            <p>(647) 767-8111</p>
            <p>BryanChenOntario@gmail.com</p>
            <form onSubmit={handleSubmit} method="post">
                <label htmlFor="firstName">First Name:</label><br />
                <input type="text" id="firstName" name="firstName" required /><br />
                <label htmlFor="lastName">Last Name:</label><br />
                <input type="text" id="lastName" name="lastName" /><br />
                <label htmlFor="contactPhone">Contact Phone:</label><br />
                <input type="tel" id="contactPhone" name="contactPhone" /><br />
                <label htmlFor="contactEmail">Contact Email:</label><br />
                <input type="text" id="contactEmail" name="contactEmail" required /><br />
                <label htmlFor="message">Message</label><br />
                <textarea id="message" name="message" rows="5" cols="70" required /><br />
                <input type="submit" value="Submit Message"/>
            </form>

        </>
    );
}
