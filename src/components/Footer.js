import React from "react";

const Footer = () => {
  return (
    <>
      <style>{`
        .footer {
          background: #203a43;
          color: #f1f1f1;
          padding: 40px 20px;
          margin-top: auto;
        }
        .footer h5 {
          color: #ffd657;
          margin-bottom: 15px;
        }
        .footer a {
          color: #ddd;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer a:hover {
          color: #fff;
        }
        .footer .footer-bottom {
          text-align: center;
          margin-top: 20px;
          font-size: 14px;
          color: #aaa;
        }
      `}</style>

      <footer className="footer">
        <div className="container">
          <div className="row">
            {/* Quick Links */}
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/about">About Us</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/cart">Cart</a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="col-md-4">
              <h5>Support</h5>
              <ul className="list-unstyled">
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="col-md-4">
              <h5>Follow Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} E-commerce App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
