import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Haziq",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("SUCCESS!", result.status, result.text);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Auto-hide success message after 5 seconds
      setTimeout(() => setStatus(""), 5000);
    } catch (error) {
      console.log("FAILED...", error);
      setStatus("error");

      // Auto-hide error message after 5 seconds
      setTimeout(() => setStatus(""), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h3 className="section-subtitle">CONTACT</h3>
        <h2 className="section-title">
          I&apos;d love to hear from you—let&apos;s connect! 👇
        </h2>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <h4>Mail</h4>
                <p>mhaziqjr07@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>Malaysia</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {status === "success" && (
              <div className="status-message success">
                <i className="fas fa-check-circle"></i>
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="status-message error">
                <i className="fas fa-exclamation-circle"></i>
                Failed to send message. Please try again.
              </div>
            )}

            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading}
              ></textarea>
            </div>
            <button type="submit" className="btn-submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Sending...
                </>
              ) : (
                <>
                  Send Message <i className="fas fa-paper-plane"></i>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
