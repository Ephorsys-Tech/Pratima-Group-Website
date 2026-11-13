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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#07271E] text-gray-300 border-t border-[#0D4738]/60 mt-auto w-full max-w-full overflow-hidden">
      {/* Top Value Strip */}
      <div className="bg-[#051A14] border-b border-[#0D4738]/50 py-4 sm:py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-[#C8973E] flex items-center justify-center shrink-0">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4 className="text-white text-sm font-bold font-['Outfit']">{companyData.badge}</h4>
                <p className="text-xs text-gray-400">Over 20 years of manufacturing reliability & trust in Odisha</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-[#C8973E] flex items-center justify-center shrink-0">
                <Factory size={22} />
              </div>
              <div>
                <h4 className="text-white text-sm font-bold font-['Outfit']">2 Dedicated Facilities</h4>
                <p className="text-xs text-gray-400">Mancheswar & Khurda Industrial Estates</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-[#C8973E] flex items-center justify-center shrink-0">
                <WhatsAppIcon size={22} color="#C8973E" />
              </div>
              <div>
                <h4 className="text-white text-sm font-bold font-['Outfit']">Direct WhatsApp Support</h4>
                <p className="text-xs text-gray-400">Instant machinery specs & franchise support</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-10 sm:py-14 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Col 1: About Pratima Group */}
            <div className="lg:col-span-4">
              <Link to="/" className="inline-block mb-4 group" aria-label="Pratima Group Home">
                <div className="bg-white p-2.5 rounded-2xl shadow-md border border-white inline-flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="/mylogo/logo.png"
                    alt="Pratima Group of Industries"
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </Link>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                {companyData.description}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Manufacturing • Retail • Hospitality</span>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-['Outfit'] font-bold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-emerald-900/60">
                Quick Links
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-[#C8973E] transition-colors flex items-center gap-1.5">
                    <ArrowRight size={12} className="text-[#C8973E]" />
                    <span>Home Page</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-[#C8973E] transition-colors flex items-center gap-1.5">
                    <ArrowRight size={12} className="text-[#C8973E]" />
                    <span>About Pratima Group</span>
                  </Link>
                </li>
                <li>
                  <Link to="/businesses" className="text-gray-400 hover:text-[#C8973E] transition-colors flex items-center gap-1.5">
                    <ArrowRight size={12} className="text-[#C8973E]" />
                    <span>Business Divisions</span>
                  </Link>
                </li>
                <li>
                  <Link to="/machinery" className="text-gray-400 hover:text-[#C8973E] transition-colors flex items-center gap-1.5">
                    <ArrowRight size={12} className="text-[#C8973E]" />
                    <span>Machinery Catalogue</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-[#C8973E] transition-colors flex items-center gap-1.5">
                    <ArrowRight size={12} className="text-[#C8973E]" />
                    <span>Contact Us</span>
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-gray-400 hover:text-[#C8973E] transition-colors flex items-center gap-1.5">
                    <ArrowRight size={12} className="text-[#C8973E]" />
                    <span>Privacy Policy</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Business Divisions */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-['Outfit'] font-bold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-emerald-900/60">
                Business Verticals
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li>
                  <Link to="/machinery" className="group flex items-start gap-2 text-gray-400 hover:text-white transition-colors">
                    <ArrowRight size={13} className="text-[#C8973E] mt-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <div>
                      <strong className="text-white block group-hover:text-[#C8973E] transition-colors">Machinery (AEW Series)</strong>
                      <span className="text-[11px] text-gray-400">Crank & Hydraulic Small-Scale Presses</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://myodishakart.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex items-start gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ArrowRight size={13} className="text-[#C8973E] mt-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <div>
                      <strong className="text-white flex items-center gap-1 group-hover:text-[#C8973E] transition-colors">
                        <span>Smart Collection / Odisha Kart</span>
                        <ExternalLink size={11} className="text-gray-400 group-hover:text-[#C8973E]" />
                      </strong>
                      <span className="text-[11px] text-gray-400">Direct FMCG & Supermarket (myodishakart.com)</span>
                    </div>
                  </a>
                </li>
                <li>
                  <Link to="/restaurant" className="group flex items-start gap-2 text-gray-400 hover:text-white transition-colors">
                    <ArrowRight size={13} className="text-[#C8973E] mt-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <div>
                      <div className="flex items-center gap-2">
                        <strong className="text-white group-hover:text-[#C8973E] transition-colors">Fine Dining Restaurant</strong>
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#FAF5E8] text-[#A67828]">Soon</span>
                      </div>
                      <span className="text-[11px] text-gray-400">Authentic Heritage Odia Hospitality</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Verified Contacts & Addresses */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-['Outfit'] font-bold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-emerald-900/60">
                Verified Contact Info
              </h3>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-[#C8973E] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-white font-bold block text-[11px]">Plant 1 & HQ:</span>
                    <p className="text-gray-400 text-xs leading-relaxed">{companyData.locations[0].address}, {companyData.locations[0].city}, {companyData.locations[0].state} - {companyData.locations[0].pincode}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone size={16} className="text-[#C8973E] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-white font-bold block text-[11px]">Phone & Toll-Free:</span>
                    <div className="text-xs space-y-0.5">
                      <div>
                        <span className="text-gray-400">Toll-Free: </span>
                        <a 
                          href={`tel:${companyData.contacts.tollFree.replace(/[^0-9]/g, '')}`} 
                          className="text-[#C8973E] font-semibold hover:underline"
                        >
                          {companyData.contacts.tollFree}
                        </a>
                      </div>
                      <div>
                        <span className="text-gray-400">Direct: </span>
                        <a 
                          href={`tel:${companyData.contacts.primaryPhone.replace(/\s+/g, '')}`} 
                          className="text-gray-300 hover:text-[#C8973E] transition-colors"
                        >
                          {companyData.contacts.primaryPhone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail size={16} className="text-[#C8973E] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-white font-bold block text-[11px]">Official Email:</span>
                    <p className="text-xs">
                      <a href={`mailto:${companyData.contacts.email}`} className="text-gray-300 hover:text-[#C8973E] transition-colors">{companyData.contacts.email}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock size={16} className="text-[#C8973E] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-white font-bold block text-[11px]">Working Hours:</span>
                    <p className="text-gray-400 text-xs">{companyData.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="bg-[#03100C] border-t border-white/5 py-4 text-xs text-gray-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3">
            <p>© 2004 – {currentYear} {companyData.name}. All Rights Reserved.</p>
            <span className="hidden sm:inline text-gray-600">|</span>
            <p className="text-gray-400">
              Developed by{' '}
              <a 
                href="https://www.ephorsys.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#C8973E] hover:text-[#E2B866] no-underline hover:no-underline font-semibold transition-colors"
              >
                Ephorsys Private Ltd
              </a>
            </p>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-gray-400 flex-wrap justify-center">
            <Link to="/privacy-policy" className="hover:text-[#C8973E] transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/machinery" className="hover:text-[#C8973E] transition-colors">Machinery</Link>
            <span>•</span>
            <a 
              href="https://myodishakart.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#C8973E] transition-colors"
            >
              Odisha Kart
            </a>
            <span>•</span>
            <Link to="/contact" className="hover:text-[#C8973E] transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
