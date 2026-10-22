import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ExternalLink, 
  ArrowRight,
  Building,
  Factory
} from 'lucide-react';
import { companyData } from '../../data/companyData';
import WhatsAppIcon from './WhatsAppIcon';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      {/* Top Banner / Value Strip */}
      <div className="footer-top-strip">
        <div className="container footer-strip-grid">
          <div className="strip-item">
            <ShieldCheck size={24} className="strip-icon" />
            <div>
              <h4 className="strip-title">{companyData.badge}</h4>
              <p className="strip-desc">Over 20 years of manufacturing reliability & trust in Odisha</p>
            </div>
          </div>
          <div className="strip-item">
            <Factory size={24} className="strip-icon" />
            <div>
              <h4 className="strip-title">2 Dedicated Facilities</h4>
              <p className="strip-desc">Mancheswar & Khurda Industrial Estates</p>
            </div>
          </div>
          <div className="strip-item">
            <WhatsAppIcon size={24} className="strip-icon" color="#C8973E" />
            <div>
              <h4 className="strip-title">Direct WhatsApp Support</h4>
              <p className="strip-desc">Instant machinery specs & franchise support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Col 1: About Pratima Group */}
          <div className="footer-col col-brand">
            <Link to="/" className="footer-brand-logo group inline-block mb-3" aria-label="Pratima Group Home">
              <div className="bg-white p-3 rounded-2xl shadow-xl border border-white inline-flex items-center justify-center group-hover:scale-105 transition-transform">
                <img 
                  src="/mylogo/logo.png" 
                  alt="Pratima Group of Industries" 
                  className="h-20 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="footer-about-text">
              {companyData.description}
            </p>
            <div className="footer-badge-pill">
              <span className="pill-dot"></span>
              <span>Indigenous Manufacturing • Retail Distribution • Hospitality</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h3 className="footer-heading">Quick Navigation</h3>
            <ul className="footer-links-list">
              <li>
                <Link to="/" className="footer-link">
                  <ArrowRight size={13} className="footer-link-icon" />
                  <span>Home Page</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  <ArrowRight size={13} className="footer-link-icon" />
                  <span>About Pratima Group</span>
                </Link>
              </li>
              <li>
                <Link to="/businesses" className="footer-link">
                  <ArrowRight size={13} className="footer-link-icon" />
                  <span>Business Divisions Overview</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  <ArrowRight size={13} className="footer-link-icon" />
                  <span>Contact & Plant Locations</span>
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="footer-link">
                  <ArrowRight size={13} className="footer-link-icon" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Business Divisions */}
          <div className="footer-col">
            <h3 className="footer-heading">Business Divisions</h3>
            <ul className="footer-links-list">
              <li>
                <Link to="/machinery" className="footer-link">
                  <ArrowRight size={13} className="footer-link-icon" />
                  <div>
                    <span className="division-link-title">Machinery (AEW Series)</span>
                    <span className="division-link-sub">Crank & Hydraulic Presses</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/odisha-cart" className="footer-link">
                  <ArrowRight size={13} className="footer-link-icon" />
                  <div>
                    <span className="division-link-title">Odisha Cart</span>
                    <span className="division-link-sub">FMCG & Franchise Network</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/restaurant" className="footer-link">
                  <ArrowRight size={13} className="footer-link-icon" />
                  <div>
                    <span className="division-link-title">Fine Dining Restaurant</span>
                    <span className="badge badge-launching badge-micro">Launching Soon</span>
                  </div>
                </Link>
              </li>
            </ul>

            {/* <div className="footer-models-preview">
              <span className="models-label">Popular Machinery Models:</span>
              <div className="models-tags">
                <Link to="/machinery/aew-001" className="model-tag">AEW-001</Link>
                <Link to="/machinery/aew-002" className="model-tag">AEW-002</Link>
                <Link to="/machinery/aew-005" className="model-tag">AEW-005</Link>
                <Link to="/machinery/aew-006" className="model-tag">AEW-006</Link>
              </div>
            </div> */}
          </div>

          {/* Col 4: Verified Contacts & Addresses */}
          <div className="footer-col col-contact">
            <h3 className="footer-heading">Verified Contact Info</h3>
            <div className="contact-items">
              <div className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <div>
                  <strong className="contact-label">Plant 1 & HQ:</strong>
                  <p className="contact-val">{companyData.locations[0].address}, {companyData.locations[0].city}, {companyData.locations[0].state} - {companyData.locations[0].pincode}</p>
                </div>
              </div>

              <div className="contact-item">
                <Building size={18} className="contact-icon" />
                <div>
                  <strong className="contact-label">Plant 2 (Fabrication):</strong>
                  <p className="contact-val">{companyData.locations[1].address}, {companyData.locations[1].city}, {companyData.locations[1].state} - {companyData.locations[1].pincode}</p>
                </div>
              </div>

              <div className="contact-item">
                <Phone size={18} className="contact-icon" />
                <div>
                  <strong className="contact-label">Direct Lines:</strong>
                  <p className="contact-val">
                    <a href={`tel:${companyData.contacts.primaryPhone.replace(/\s+/g, '')}`}>{companyData.contacts.primaryPhone}</a>
                    <span className="slash"> / </span>
                    <a href={`tel:${companyData.contacts.secondaryPhone.replace(/\s+/g, '')}`}>{companyData.contacts.secondaryPhone}</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <Mail size={18} className="contact-icon" />
                <div>
                  <strong className="contact-label">Official Email:</strong>
                  <p className="contact-val">
                    <a href={`mailto:${companyData.contacts.email}`}>{companyData.contacts.email}</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <Clock size={18} className="contact-icon" />
                <div>
                  <strong className="contact-label">Working Hours:</strong>
                  <p className="contact-val">{companyData.workingHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="copyright-text">
            © 2004 – {currentYear} {companyData.name}. All Rights Reserved. Built with pride in Odisha, India.
          </p>

          <div className="footer-bottom-links">
            <Link to="/privacy-policy" className="bottom-link">Privacy Policy</Link>
            <span className="dot">•</span>
            <Link to="/machinery" className="bottom-link">Machinery Catalogue</Link>
            <span className="dot">•</span>
            <Link to="/odisha-cart" className="bottom-link">Franchise Terms</Link>
            <span className="dot">•</span>
            <Link to="/contact" className="bottom-link">Enquiries</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
