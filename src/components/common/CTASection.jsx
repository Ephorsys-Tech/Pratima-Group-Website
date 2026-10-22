import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { companyData } from '../../data/companyData';
import WhatsAppIcon from './WhatsAppIcon';
import './CTASection.css';

export default function CTASection({
  title = "Ready to Power Your Next Project?",
  subtitle = "Whether you need high-precision AEW machinery, franchise opportunities with Odisha Cart, or business collaboration with Pratima Group — our team is here to assist you.",
  primaryActionText = "Contact Us Today",
  primaryActionLink = "/contact",
  showWhatsApp = true
}) {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-content">
            <div className="cta-badge">
              <ShieldCheck size={16} />
              <span>{companyData.badge} • Direct Factory & Executive Assistance</span>
            </div>
            <h2 className="cta-title">{title}</h2>
            <p className="cta-desc">{subtitle}</p>

            <div className="cta-actions">
              <Link to={primaryActionLink} className="btn btn-primary btn-lg">
                <span>{primaryActionText}</span>
                <ArrowRight size={18} />
              </Link>

              {showWhatsApp && (
                <a 
                  href={`https://wa.me/${companyData.contacts.whatsappNumber}?text=${encodeURIComponent('Hello Pratima Group, I would like to make an enquiry regarding your business operations and products.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  <WhatsAppIcon size={20} color="#FFFFFF" />
                  <span>WhatsApp Chat</span>
                </a>
              )}

              <a 
                href={`tel:${companyData.contacts.primaryPhone.replace(/\s+/g, '')}`}
                className="btn btn-secondary btn-lg cta-call-btn"
              >
                <Phone size={18} />
                <span>Call {companyData.contacts.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
