import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Globe, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
        paddingTop: "80px",
        paddingBottom: "40px",
        position: "relative",
        zIndex: 1,
        transition: "all var(--transition-normal)",
      }}
    >
      <div className="container">
        {/* Main Footer Links & Info */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "48px",
            marginBottom: "60px",
          }}
        >
          {/* Company Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: 800, fontFamily: "var(--font-heading)", fontSize: "1.25rem" }}>
              <Image
                src="/logo_ass.jpeg"
                alt="Logo PT Amanah Surya Sejahtera"
                width={44}
                height={44}
                style={{ borderRadius: "8px", objectFit: "cover" }}
              />
              <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.1" }}>
                <span style={{ fontSize: "1.1rem", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--fg-primary)" }}>AMANAH SURYA</span>
                <span style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.15em", color: "var(--primary)" }}>SEJAHTERA</span>
              </div>
            </Link>
            <p style={{ color: "var(--fg-secondary)", fontSize: "0.9rem", lineHeight: "1.6" }}>
              Membangun ekosistem properti, konstruksi, dan pariwisata yang terintegrasi secara digital. Kami memberikan hunian berkualitas, penginapan nyaman, dan jasa pembangunan terpercaya.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
              <a
                href="https://www.instagram.com/perumahangriyaamanah/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram Perumahan"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--fg-secondary)",
                  transition: "all var(--transition-fast)",
                }}
                className="social-icon instagram-link"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/amanahhome_stay/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram Homestay"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--fg-secondary)",
                  transition: "all var(--transition-fast)",
                }}
                className="social-icon instagram-link"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--fg-secondary)",
                  transition: "all var(--transition-fast)",
                }}
                className="social-icon"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--fg-secondary)",
                  transition: "all var(--transition-fast)",
                }}
                className="social-icon"
              >
                <Globe size={16} />
              </a>
            </div>
          </div>

          {/* Business Units Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.05rem", color: "var(--fg-primary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Lini Bisnis
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link href="/perumahan" style={{ color: "var(--fg-secondary)", fontSize: "0.9rem", transition: "color var(--transition-fast)" }} className="footer-link">
                Developer Perumahan
              </Link>
              <Link href="/homestay" style={{ color: "var(--fg-secondary)", fontSize: "0.9rem", transition: "color var(--transition-fast)" }} className="footer-link">
                Amanah Homestay
              </Link>
              <Link href="/kontraktor" style={{ color: "var(--fg-secondary)", fontSize: "0.9rem", transition: "color var(--transition-fast)" }} className="footer-link">
                Jasa Kontraktor & Renovasi
              </Link>
            </div>
          </div>

          {/* Contact Details Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.05rem", color: "var(--fg-primary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Hubungi Kami
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", color: "var(--fg-secondary)", fontSize: "0.9rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <MapPin size={18} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "2px" }} />
                <span>Jl. Akses Bandara Internasional Minangkabau, Padang Pariaman, Sumatera Barat, Indonesia</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Phone size={18} style={{ color: "var(--primary)", flexShrink: 0 }} />
                <span>+62 823-1185-5985</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Mail size={18} style={{ color: "var(--primary)", flexShrink: 0 }} />
                <span>amanahsuryas@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Trust Badges Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.05rem", color: "var(--fg-primary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Jaminan Layanan
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", borderRadius: "8px", border: "1px solid var(--border)", background: "var(--bg-primary)" }}>
                <Shield size={18} style={{ color: "var(--primary)" }} />
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--fg-primary)" }}>Developer Terpercaya</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", borderRadius: "8px", border: "1px solid var(--border)", background: "var(--bg-primary)" }}>
                <Shield size={18} style={{ color: "var(--primary)" }} />
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--fg-primary)" }}>Kontraktor Berlisensi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            fontSize: "0.8rem",
            color: "var(--fg-muted)",
          }}
          className="footer-bottom"
        >
          <span>© {new Date().getFullYear()} PT Amanah Surya Sejahtera. All rights reserved.</span>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="#" className="hover-underline">Syarat & Ketentuan</a>
            <a href="#" className="hover-underline">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
