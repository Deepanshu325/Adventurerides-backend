const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // Gmail SMTP server
  port: 587,
  secure: false,
  auth: {
    user: "contact@adventurerides.travel",
    pass: "ivkk nxol bjlm xizi", 
  },
});

// API Endpoint for sending contact emails
app.post("/send-email", (req, res) => {
  const { name, surname, email, mobile, city, currentBike ,comments } = req.body;

  const mailOptions = {
    from: "contact@adventurerides.travel", // Sender's email
    to: "contact@adventurerides.travel", // Main recipient
    bcc: "contact@adventurerides.travel", // BCC
    subject: "Contact Us",
    text: `Name: ${name}
Surname: ${surname}
Email: ${email}
Mobile: ${mobile}
Country: ${city}
Current Bike(s): ${currentBike} 
Message: ${comments}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error.message);
      res.status(500).json({ error: "Email failed to send." });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Email sent successfully." });
    }
  });
});

// New API Endpoint for sending a download message for Himalaya 4 days
// New API Endpoint for sending a download message for Himalaya 10 days
app.post("/send-download-email-him4days", (req, res) => {
  const { email, name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: "Email and name are required." });
  }

  const mailOptions = {
    from: "contact@adventurerides.travel",
    to: email,
    bcc: "contact@adventurerides.travel",
    subject: "Adventure Rides",
    text: `Dear ${name},

From the very start of the booking process, we at Adventure Rides, do everything we can at our end to make sure that each and every adventurer has all the information and support they need to get to the start of the ride fully prepared and stress-free.

Here is the detailed program of your next adventure including a daily wise description of your discoveries and all in-
/exclusions.

Don’t be afraid to ask us any questions. If you want to pick our brains over the phone, leave us a contact number, and one of the adventure leaders will get back to you as soon as we can.

Many thanks,

The Adventure Rides Support Team

PP Adventure Rides Private Limited
Address: DE 153, Block DE, Tagore Garden, New Delhi, Delhi 110027
Phone / WhatsApp: +91 96675 74757
Skype: phigel
Instagram: https://www.instagram.com/adventurerides.travel/
Facebook: https://www.facebook.com/people/Adventure-Rides/100064155602022/
YouTube: https://www.youtube.com/channel/UCOeEWtVilE8o1VIGfrDXKZA/`,

attachments: [
  {
    filename: "PPAR - sm The Highest Ride 4D - EN - 20240501.pdf", // Name of the file in the email
    path: "Files/PPAR - sm The Highest Ride 4D - EN - 20240501.pdf", // Path to the file
  },
],

  }; 
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error.message);
      res.status(500).json({ error: "Email failed to send." });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Download email sent successfully." });
    }
  });
});






// New API Endpoint for sending a download message for Himalaya 10 days
app.post("/send-download-email-him10days", (req, res) => {
  const { email, name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: "Email and name are required." });
  }

  const mailOptions = {
    from: "contact@adventurerides.travel",
    to: email,
    bcc: "contact@adventurerides.travel",
    subject: "Adventure Rides",
    text: `Dear ${name},

From the very start of the booking process, we at Adventure Rides, do everything we can at our end to make sure that each and every adventurer has all the information and support they need to get to the start of the ride fully prepared and stress-free.

Here is the detailed program of your next adventure including a daily wise description of your discoveries and all in-
/exclusions.

Don’t be afraid to ask us any questions. If you want to pick our brains over the phone, leave us a contact number, and one of the adventure leaders will get back to you as soon as we can.

Many thanks,

The Adventure Rides Support Team

PP Adventure Rides Private Limited
Address: DE 153, Block DE, Tagore Garden, New Delhi, Delhi 110027
Phone / WhatsApp: +91 96675 74757
Skype: phigel
Instagram: https://www.instagram.com/adventurerides.travel/
Facebook: https://www.facebook.com/people/Adventure-Rides/100064155602022/
YouTube: https://www.youtube.com/channel/UCOeEWtVilE8o1VIGfrDXKZA/`,

attachments: [
  {
    filename: "PPAR - sm The HighestRide 10D - EN - 2024-2025.pdf", // Name of the file in the email
    path: "Files/PPAR - sm The HighestRide 10D - EN - 2024-2025.pdf", // Path to the file
  },
],

  }; 
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error.message);
      res.status(500).json({ error: "Email failed to send." });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Download email sent successfully." });
    }
  });
});




// New API Endpoint for sending a download message for himalaya 10 days french 
app.post("/send-download-email-raj10daysfr", (req, res) => {
  const { email, name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: "Email and name are required." });
  }

  const mailOptions = {
    from: "contact@adventurerides.travel",
    to: email,
    bcc: "contact@adventurerides.travel",
    subject: "Adventure Rides",
    text: `Cher ${name},

Dès le début du processus de réservation, chez Adventure Rides, on fait tout ce qui est
possible pour s'assurer que chaque aventurier dispose de toutes les informations et
du soutien dont il a besoin pour arriver au départ de la randonnée parfaitement
préparé et sans stress.

Voici le programme détaillé de votre prochaine aventure, y compris une présentation
quotidienne de vos découvertes ainsi que de toutes les inclusions et exclusions.


N'hésitez pas à nous poser toutes questions qui vous viennent à l'esprit. Si vous
souhaitez être contacté(s) par téléphone, laissez-nous un numéro et donnez-nous un
moment qui vous convient pour vous appeler.

Merci et à bientôt,

L'équipe de spécialistes d'Adventure Rides


PP Adventure Rides Private Limited
Address: DE 153, Block DE, Tagore Garden, New Delhi, Delhi 110027
Phone / WhatsApp: +91 96675 74757
Skype: phigel
Instagram: https://www.instagram.com/adventurerides.travel/
Facebook: https://www.facebook.com/people/Adventure-Rides/100064155602022/
YouTube: https://www.youtube.com/channel/UCOeEWtVilE8o1VIGfrDXKZA/`,

attachments: [
  {
    filename: "PPAR - sm RAJ ESS 10D  - FR - 2024 - 2025.pdf", // Name of the file in the email
    path: "Files/PPAR - sm RAJ ESS 10D  - FR - 2024 - 2025.pdf", // Path to the file
  },
],

  }; 
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error.message);
      res.status(500).json({ error: "Email failed to send." });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Download email sent successfully." });
    }
  });
});


// New API Endpoint for sending a download message for Rajasthan 10 days
app.post("/send-download-email-raj10days", (req, res) => {
  const { email, name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: "Email and name are required." });
  }

  const mailOptions = {
    from: "contact@adventurerides.travel",
    to: email,
    bcc: "contact@adventurerides.travel",
    subject: "Adventure Rides",
    text: `Dear ${name},

From the very start of the booking process, we at Adventure Rides, do everything we can at our end to make sure that each and every adventurer has all the information and support they need to get to the start of the ride fully prepared and stress-free.

Here is the detailed program of your next adventure including a daily wise description of your discoveries and all in-
/exclusions.

Don’t be afraid to ask us any questions. If you want to pick our brains over the phone, leave us a contact number, and one of the adventure leaders will get back to you as soon as we can.

Many thanks,

The Adventure Rides Support Team

PP Adventure Rides Private Limited
Address: DE 153, Block DE, Tagore Garden, New Delhi, Delhi 110027
Phone / WhatsApp: +91 96675 74757
Skype: phigel
Instagram: https://www.instagram.com/adventurerides.travel/
Facebook: https://www.facebook.com/people/Adventure-Rides/100064155602022/
YouTube: https://www.youtube.com/channel/UCOeEWtVilE8o1VIGfrDXKZA/`,

attachments: [
  {
    filename: "PPAR - sm RAJ ESS 10D  - ENG - 2024 - 2025.pdf", // Name of the file in the email
    path: "Files/PPAR - sm RAJ ESS 10D  - ENG - 2024 - 2025 (1).pdf", // Path to the file
  },
],

  }; 
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error.message);
      res.status(500).json({ error: "Email failed to send." });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Download email sent successfully." });
    }
  });
});





// New API Endpoint for sending a download message for Rajasthan 10 days vip
app.post("/send-download-email-raj10daysvip", (req, res) => {
  const { email, name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: "Email and name are required." });
  }

  const mailOptions = {
    from: "contact@adventurerides.travel",
    to: email,
    bcc: "contact@adventurerides.travel",
    subject: "Adventure Rides",
    text: `Dear ${name},

From the very start of the booking process, we at Adventure Rides, do everything we can at our end to make sure that each and every adventurer has all the information and support they need to get to the start of the ride fully prepared and stress-free.

Here is the detailed program of your next adventure including a daily wise description of your discoveries and all in-
/exclusions.

Don’t be afraid to ask us any questions. If you want to pick our brains over the phone, leave us a contact number, and one of the adventure leaders will get back to you as soon as we can.

Many thanks,

The Adventure Rides Support Team

PP Adventure Rides Private Limited
Address: DE 153, Block DE, Tagore Garden, New Delhi, Delhi 110027
Phone / WhatsApp: +91 96675 74757
Skype: phigel
Instagram: https://www.instagram.com/adventurerides.travel/
Facebook: https://www.facebook.com/people/Adventure-Rides/100064155602022/
YouTube: https://www.youtube.com/channel/UCOeEWtVilE8o1VIGfrDXKZA/`,

attachments: [
  {
    filename: "PPAR - sm RAJ ESS VIP10D  - ENG - 2024 - 2025.pdf", // Name of the file in the email
    path: "Files/PPAR - sm RAJ ESS VIP10D  - ENG - 2024 - 2025.pdf", // Path to the file
  },
],

  }; 
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error.message);
      res.status(500).json({ error: "Email failed to send." });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Download email sent successfully." });
    }
  });
});



// New API Endpoint for sending a download message for himalaya 10 days french 
app.post("/send-download-email-him10daysfr", (req, res) => {
  const { email, name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: "Email and name are required." });
  }

  const mailOptions = {
    from: "contact@adventurerides.travel",
    to: email,
    bcc: "contact@adventurerides.travel",
    subject: "Adventure Rides",
    text: `Cher ${name},

Dès le début du processus de réservation, chez Adventure Rides, on fait tout ce qui est
possible pour s'assurer que chaque aventurier dispose de toutes les informations et
du soutien dont il a besoin pour arriver au départ de la randonnée parfaitement
préparé et sans stress.

Voici le programme détaillé de votre prochaine aventure, y compris une présentation
quotidienne de vos découvertes ainsi que de toutes les inclusions et exclusions.


N'hésitez pas à nous poser toutes questions qui vous viennent à l'esprit. Si vous
souhaitez être contacté(s) par téléphone, laissez-nous un numéro et donnez-nous un
moment qui vous convient pour vous appeler.

Merci et à bientôt,

L'équipe de spécialistes d'Adventure Rides


PP Adventure Rides Private Limited
Address: DE 153, Block DE, Tagore Garden, New Delhi, Delhi 110027
Phone / WhatsApp: +91 96675 74757
Skype: phigel
Instagram: https://www.instagram.com/adventurerides.travel/
Facebook: https://www.facebook.com/people/Adventure-Rides/100064155602022/
YouTube: https://www.youtube.com/channel/UCOeEWtVilE8o1VIGfrDXKZA/`,

attachments: [
  {
    filename: "PPAR - smThe HighestRide 10 - FR - 2024-2025.pdf", // Name of the file in the email
    path: "Files/PPAR - smThe HighestRide 10 - FR - 2024-2025.pdf", // Path to the file
  },
],

  }; 
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error.message);
      res.status(500).json({ error: "Email failed to send." });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Download email sent successfully." });
    }
  });
});





// New API Endpoint for sending a download message for himalaya 10 days french 
app.post("/send-download-email-raj10daysvipfr", (req, res) => {
  const { email, name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: "Email and name are required." });
  }

  const mailOptions = {
    from: "contact@adventurerides.travel",
    to: email,
    bcc: "contact@adventurerides.travel",
    subject: "Adventure Rides",
    text: `Cher ${name},

Dès le début du processus de réservation, chez Adventure Rides, on fait tout ce qui est
possible pour s'assurer que chaque aventurier dispose de toutes les informations et
du soutien dont il a besoin pour arriver au départ de la randonnée parfaitement
préparé et sans stress.

Voici le programme détaillé de votre prochaine aventure, y compris une présentation
quotidienne de vos découvertes ainsi que de toutes les inclusions et exclusions.


N'hésitez pas à nous poser toutes questions qui vous viennent à l'esprit. Si vous
souhaitez être contacté(s) par téléphone, laissez-nous un numéro et donnez-nous un
moment qui vous convient pour vous appeler.

Merci et à bientôt,

L'équipe de spécialistes d'Adventure Rides


PP Adventure Rides Private Limited
Address: DE 153, Block DE, Tagore Garden, New Delhi, Delhi 110027
Phone / WhatsApp: +91 96675 74757
Skype: phigel
Instagram: https://www.instagram.com/adventurerides.travel/
Facebook: https://www.facebook.com/people/Adventure-Rides/100064155602022/
YouTube: https://www.youtube.com/channel/UCOeEWtVilE8o1VIGfrDXKZA/`,

attachments: [
  {
    filename: "PPAR - sm RAJ ESS VIP10D  - FR - 2024 - 2025.pdf", // Name of the file in the email
    path: "Files/PPAR - sm RAJ ESS VIP10D  - FR - 2024 - 2025.pdf", // Path to the file
  },
],

  }; 
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error.message);
      res.status(500).json({ error: "Email failed to send." });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Download email sent successfully." });
    }
  });
});


// Start Server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
