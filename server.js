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
    user: "deepanshushrivastav40@gmail.com",
    pass: "bhtz cxhe rcjm nrbz", 
  },
});

// API Endpoint for sending contact emails
app.post("/send-email", (req, res) => {
  const { name, surname, email, mobile, city, currentBike } = req.body;

  const mailOptions = {
    from: "deepanshushrivastav40@gmail.com", // Sender's email
    to: "deepanshushrivastav999@gmail.com", // Main recipient
    bcc: "contact@adventurerides.travel", // BCC
    subject: "Contact Us",
    text: `Name: ${name}
Surname: ${surname}
Email: ${email}
Mobile: ${mobile}
Country: ${city}
Current Bike(s): ${currentBike}`,
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

// New API Endpoint for sending a download message
app.post("/send-download-email", (req, res) => {
  const { email, name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: "Email and name are required." });
  }

  const mailOptions = {
    from: "deepanshushrivastav40@gmail.com",
    to: email,
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
