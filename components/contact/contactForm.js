import { useRef, useState, useEffect } from "react";
import styles from "./contactForm.module.css";
import Notification from "../ui/Notification";

const sendContactData = async (contactDetails) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(contactDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

const ContactForm = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const sendMessageHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredName = nameRef.current.value;
    const enteredMessage = messageRef.current.value;

    setRequestStatus("pending");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });

      setRequestStatus("success");
      emailRef.current.value = "";
      nameRef.current.value = "";
      messageRef.current.value = "";
    } catch (err) {
      setRequestError(err.message);
      setRequestStatus("error");
    }
  };

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way",
    };
  }
  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Sucess!",
      message: "Message sent successfully",
    };
  }
  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={sendMessageHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required ref={nameRef} />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your message</label>
          <textarea id="message" rows="5" required ref={messageRef}></textarea>
        </div>
        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
