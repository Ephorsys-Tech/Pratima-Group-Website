import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Zap, 
  Gauge, 
  Layers, 
  Weight, 
  CheckCircle2, 
  Flame,
  Droplets
} from 'lucide-react';
import { getWhatsAppUrl } from '../../data/machineryData';
import WhatsAppIcon from './WhatsAppIcon';
import './MachineCard.css';

export default function MachineCard({ machine, className = "" }) {
  const isCrank = machine.driveType === 'Crank';
  const whatsappUrl = getWhatsAppUrl(machine);

  // Extract clean motor label (e.g. "3 HP" from "3 HP / 2.2 kW, 1440 RPM")
  const shortMotor = machine.motor.split('/')[0].trim();

  return (
    <article className={`machine-card-v2 group ${className}`}>
      {/* Top Media Showcase */}
      <div className="card-media-wrap">
        <Link to={`/machinery/${machine.slug}`} className="block h-full w-full overflow-hidden">
          <img 
            src={machine.image} 
            alt={`${machine.modelCode} ${machine.name}`} 
            className="card-media-img"
            loading="lazy"
          />
        </Link>

        {/* Gradient Vignette for visual depth & legibility */}
        <div className="card-media-gradient pointer-events-none" />

        {/* Top Floating Badge Bar */}
        <div className="card-top-badges">
          <div className="badge-model-pill">
            <span className="live-dot" />
            <span className="model-text">{machine.modelCode}</span>
          </div>

          <div className={`badge-drive-pill ${isCrank ? 'drive-crank' : 'drive-hydraulic'}`}>
            {isCrank ? <Flame size={12} className="stroke-[2.5]" /> : <Droplets size={12} className="stroke-[2.5]" />}
            <span>{machine.driveType} Drive</span>
          </div>
        </div>

        {/* Bottom Floating Capacity Pill */}
        <div className="card-bottom-capacity">
          <div className="capacity-badge">
            <span className="capacity-value">{machine.capacity}</span>
            <span className="capacity-label">RATED</span>
          </div>
          <span className="factory-tag">
            <CheckCircle2 size={11} className="text-emerald-400" />
            <span>Mancheswar Tested</span>
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="card-body-wrap">
        {/* Category Header */}
        <div className="card-category-row">
          <span className="category-accent-dot" />
          <span className="category-name">{machine.category}</span>
          {machine.spm && (
            <span className="category-spm-chip">{machine.spm.split(' ')[0]} SPM</span>
          )}
        </div>

        {/* Machine Title */}
        <h3 className="card-machine-title">
          <Link to={`/machinery/${machine.slug}`} className="title-link">
            {machine.name}
          </Link>
        </h3>

        {/* Short Description */}
        <p className="card-machine-desc">
          {machine.shortDescription}
        </p>

        {/* Modern Engineering Spec Grid */}
        <div className="card-specs-matrix">
          <div className="spec-cell">
            <div className="spec-cell-header">
              <Zap size={13} className="spec-icon text-[#F4B400]" />
              <span className="spec-label">MOTOR</span>
            </div>
            <span className="spec-val" title={machine.motor}>{shortMotor}</span>
          </div>

          <div className="spec-cell">
            <div className="spec-cell-header">
              <Gauge size={13} className="spec-icon text-[#F4B400]" />
              <span className="spec-label">STROKE</span>
            </div>
            <span className="spec-val" title={machine.stroke}>{machine.stroke.split('(')[0].trim()}</span>
          </div>

          <div className="spec-cell">
            <div className="spec-cell-header">
              <Layers size={13} className="spec-icon text-[#F4B400]" />
              <span className="spec-label">BED AREA</span>
            </div>
            <span className="spec-val" title={machine.bedDimensions}>{machine.bedDimensions}</span>
          </div>

          <div className="spec-cell">
            <div className="spec-cell-header">
              <Weight size={13} className="spec-icon text-[#F4B400]" />
              <span className="spec-label">WEIGHT</span>
            </div>
            <span className="spec-val" title={machine.weight}>{machine.weight}</span>
          </div>
        </div>

        {/* Pricing / Approved Quotation Strip */}
        <div className="card-price-strip">
          <div className="price-details">
            <span className="price-eyebrow">APPROVED QUOTATION</span>
            <span className="price-amount">{machine.price}</span>
          </div>
          <div className="price-badge-tag">
            <span>Ex-Works</span>
          </div>
        </div>

        {/* Action Button Row */}
        <div className="card-actions-row">
          <Link 
            to={`/machinery/${machine.slug}`} 
            className="card-btn-primary group/btn"
          >
            <span className="btn-specs-text">View Specs</span>
            <ArrowRight size={14} className="action-arrow" />
          </Link>

          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="card-btn-whatsapp"
            title={`Enquire on WhatsApp about ${machine.modelCode}`}
            aria-label={`Enquire on WhatsApp about ${machine.modelCode}`}
          >
            <WhatsAppIcon size={15} color="#FFFFFF" />
            <span className="whatsapp-btn-label">Enquire</span>
          </a>
        </div>
      </div>
    </article>
  );
}
