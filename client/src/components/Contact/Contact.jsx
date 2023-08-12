import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="contents">
          <div className="get__in__touch">
            <h2>Subscribe to <span>Newsletter</span></h2>
            <p>
            Step into a world of possibilities with our diverse doorway collection. Subscribe to our updates for weekly revelations on new entrances, exclusive passages, and insider insights. Elevate your experiences with narratives uniquely yours.
            </p>
            <form
              action="https://formspree.io/f/xnqlqgza"
              method="POST"
              className="get__in__touch__form"
            >
              <div className="form__row">
                <div className="inputs">
                  <input
                    className="feild__input"
                    type="email"
                    placeholder="Email address*"
                    name="email"
                    required
                  />
                  <div className="subscribe">
                    <button className="subscribe__btn">Subscribe</button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="contacts">
            <div className="contact__box">
              <div className="row">
                <div className="contact__details">
                  <h4>Contacts:</h4>
                  <table className="contact__info">
                    <tbody>
                      <tr>
                        <td className="contact__type">Ph.</td>
                        <td className="contact__value">+91-12345 6789</td>
                      </tr>
                      <tr>
                        <td className="contact__type">Mail.</td>
                        <td className="contact__value">info@appledoors.com</td>
                      </tr>
                      <tr>
                        <td className="contact__type">Office.</td>
                        <td className="contact__value">
                            Apple Doors, Headoffice, Rajendra Nagar, Indore, IN
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
