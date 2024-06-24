function extractEmail(text) {
  let emailPattern = /[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+/g;
  let validEmails = text.match(emailPattern);
  if (validEmails) {
    validEmails.forEach(email => console.log(email));
  }
}

// extractEmail("Please contact us at: support@github.com.")
extractEmail("Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.")