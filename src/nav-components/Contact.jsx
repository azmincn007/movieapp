import React, { useEffect } from 'react';

function Contact() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="contact" style={{marginTop:'200px'}}>
    <div className="visme_d" data-title="New Client Contact Form" data-url="1jmn70em-new-client-contact-form" data-domain="forms" data-full-page="false" data-min-height="100px" data-form-id="23615"></div>

    </div>
  );
}

export default Contact;
