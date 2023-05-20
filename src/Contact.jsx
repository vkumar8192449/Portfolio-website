import "./Contact.css";
import StyleButton from "./StyleButton";
function Contact() {
  return (
    <>
      <div id="contactcontainer">
        <div>
          <p>05. What’s Next?</p>
          <h1>Get In Touch</h1>
          <p>
            I’m currently looking for any new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I’ll try
            my best to get back to you!
          </p>
          <StyleButton
            content={
              <a
                href="mailto:vkumar8192449@gmail.com"
                rel="noreferrer"
                target="_blank"
                style={{ fontSize: "26px" }}
              >
                Say Hello 👋
              </a>
            }
          />
        </div>
        <p>Designed & Built by Vinay Kumar</p>
      </div>
    </>
  );
}
export default Contact;
