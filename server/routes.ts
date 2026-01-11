import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

// Configure email transporter with hardcoded Brevo SMTP credentials
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: "9fbb5f001@smtp-brevo.com",
    pass: "s0TIfCF72AbVQgN5",
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;

      // Validate input
      if (!name || !email || !phone || !message) {
        res.status(400).json({ error: "Missing required fields" });
        return;
      }

      // Save contact message to storage
      const contactMessage = await storage.addContactMessage({
        name,
        email,
        phone,
        message,
        createdAt: new Date(),
      });

      // Send email to support with hardcoded recipient
      const mailOptions = {
        from: "support@sandstoneexports.com",
        to: "support@sandstoneexports.com",
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
          <hr />
          <p><small>Submitted on: ${new Date().toLocaleString()}</small></p>
        `,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log("Contact email sent:", info);

      res.json({ 
        success: true, 
        message: "Contact message sent successfully",
        id: contactMessage.id
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Failed to process contact form" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
