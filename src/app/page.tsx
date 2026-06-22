import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Home, Key, Hammer, BarChart3, ShieldCheck, Mail, Phone, Clock, ArrowUpRight } from "lucide-react";

export default function HomeHoldingPage() {
  return (
    <div style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
      {/* Ambient glows */}
      <div className="ambient-glow" style={{ top: "10%", left: "-10%" }} />
      <div className="ambient-glow" style={{ bottom: "20%", right: "-10%", background: "radial-gradient(circle, rgba(15,122,63,0.08) 0%, rgba(15,122,63,0) 70%)" }} />

      {/* Hero Section */}
      <section style={{ position: "relative", paddingTop: "120px", paddingBottom: "100px" }} className="animate-fade-in">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="hero-grid">
            
            {/* Left side text content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "inherit" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--primary)" }}>
                  Holding Company B2B Portal
                </span>
              </div>
              <h1 style={{ fontSize: "3.5rem", fontWeight: 800, color: "var(--fg-primary)", fontFamily: "var(--font-heading)", lineHeight: "1.15", letterSpacing: "-0.03em" }} className="hero-title">
                Membangun dengan <span style={{ color: "var(--primary)" }}>Amanah</span>,<br />
                Tumbuh dengan <span style={{ color: "var(--primary)" }}>Teknologi</span>.
              </h1>
              <p style={{ color: "var(--fg-secondary)", fontSize: "1.1rem", lineHeight: "1.6", maxWidth: "540px" }}>
                PT Amanah Surya Sejahtera mengintegrasikan developer perumahan, kontraktor konstruksi, dan akomodasi homestay pintar dalam satu ekosistem digital untuk efisiensi dan akselerasi bisnis Anda.
              </p>
              
              {/* CTA Action Buttons */}
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }} className="hero-actions">
                <Link href="/perumahan" className="btn-primary" style={{ padding: "14px 32px" }}>
                  Lihat Perumahan
                  <ArrowRight size={18} />
                </Link>
                <a href="#bisnis" className="btn-secondary" style={{ padding: "14px 32px" }}>
                  Lini Bisnis Kami
                </a>
              </div>

              {/* Dynamic Stats Row */}
              <div style={{ display: "flex", gap: "40px", marginTop: "16px", flexWrap: "wrap" }} className="stats-container">
                <div>
                  <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--fg-primary)", fontFamily: "var(--font-heading)" }}>500+</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--fg-muted)", fontWeight: 600, textTransform: "uppercase" }}>Unit Rumah Serah Terima</div>
                </div>
                <div>
                  <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--fg-primary)", fontFamily: "var(--font-heading)" }}>92%</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--fg-muted)", fontWeight: 600, textTransform: "uppercase" }}>Rata-rata Okupansi Homestay</div>
                </div>
                <div>
                  <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--fg-primary)", fontFamily: "var(--font-heading)" }}>15+</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--fg-muted)", fontWeight: 600, textTransform: "uppercase" }}>Tahun Pengalaman Konstruksi</div>
                </div>
              </div>
            </div>

            {/* Right side: Glassmorphic interactive portal block */}
            <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
              <div
                className="glass-card"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  padding: "36px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "8px", background: "rgba(15,122,63,0.1)", color: "var(--primary)" }}>
                    <BarChart3 size={20} />
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--fg-primary)" }}>Ekosistem Bisnis Digital</h3>
                </div>
                
                <p style={{ fontSize: "0.9rem", color: "var(--fg-secondary)", lineHeight: "1.5" }}>
                  Klik salah satu unit bisnis di bawah untuk langsung menuju landing page integrasi dan melihat portofolio operasional digital kami:
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <Link
                    href="/perumahan"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px",
                      borderRadius: "12px",
                      border: "1px solid var(--border)",
                      background: "rgba(255,255,255,0.02)",
                      transition: "all var(--transition-fast)"
                    }}
                    className="portal-link"
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <Home size={18} style={{ color: "var(--primary)" }} />
                      <span style={{ fontSize: "0.95rem", fontWeight: 600 }}>Developer Perumahan</span>
                    </div>
                    <ArrowUpRight size={18} style={{ opacity: 0.6 }} />
                  </Link>

                  <Link
                    href="/homestay"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px",
                      borderRadius: "12px",
                      border: "1px solid var(--border)",
                      background: "rgba(255,255,255,0.02)",
                      transition: "all var(--transition-fast)"
                    }}
                    className="portal-link"
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <Key size={18} style={{ color: "var(--primary)" }} />
                      <span style={{ fontSize: "0.95rem", fontWeight: 600 }}>Amanah Homestay</span>
                    </div>
                    <ArrowUpRight size={18} style={{ opacity: 0.6 }} />
                  </Link>

                  <Link
                    href="/kontraktor"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px",
                      borderRadius: "12px",
                      border: "1px solid var(--border)",
                      background: "rgba(255,255,255,0.02)",
                      transition: "all var(--transition-fast)"
                    }}
                    className="portal-link"
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <Hammer size={18} style={{ color: "var(--primary)" }} />
                      <span style={{ fontSize: "0.95rem", fontWeight: 600 }}>Jasa Kontraktor & Renovasi</span>
                    </div>
                    <ArrowUpRight size={18} style={{ opacity: 0.6 }} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Division Gallery */}
      <section id="bisnis" className="section-padding" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg-secondary)", transition: "background-color var(--transition-normal)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--primary)", display: "block", marginBottom: "8px" }}>
              Tiga Pilar Operasional
            </span>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--fg-primary)", fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}>
              Lini Bisnis PT Amanah Surya Sejahtera
            </h2>
            <p style={{ color: "var(--fg-secondary)", fontSize: "1rem", maxWidth: "600px", margin: "12px auto 0" }}>
              Setiap unit bisnis dirancang untuk melengkapi kebutuhan hunian Anda secara terintegrasi dan profesional.
            </p>
          </div>

          <div className="business-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "32px" }}>
            {/* Developer Card */}
            <div className="glass-card" style={{ overflow: "hidden", display: "flex", flexDirection: "column", minHeight: "500px" }}>
              <div style={{ position: "relative", width: "100%", height: "220px" }}>
                <Image
                  src="/housing_hero.png"
                  alt="Amanah Housing Complex"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div style={{ position: "absolute", bottom: "16px", left: "16px", background: "var(--primary)", color: "var(--bg-primary)", padding: "4px 12px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>
                  Developer
                </div>
              </div>
              <div style={{ padding: "32px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800 }}>Developer Perumahan</h3>
                  <p style={{ color: "var(--fg-secondary)", fontSize: "0.92rem", lineHeight: "1.5" }}>
                    Pengembangan kawasan hunian modern yang strategis dan ramah lingkungan. Kami memproduksi perumahan subsidi untuk program pemerintah dan perumahan komersial berkualitas premium.
                  </p>
                </div>
                <Link href="/perumahan" className="btn-primary" style={{ alignSelf: "flex-start", fontSize: "0.85rem", padding: "10px 20px" }}>
                  Lihat Perumahan
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Contractor Card */}
            <div className="glass-card" style={{ overflow: "hidden", display: "flex", flexDirection: "column", minHeight: "500px" }}>
              <div style={{ position: "relative", width: "100%", height: "220px" }}>
                <Image
                  src="/contractor_hero.png"
                  alt="Amanah Contractor Services"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div style={{ position: "absolute", bottom: "16px", left: "16px", background: "var(--primary)", color: "var(--bg-primary)", padding: "4px 12px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>
                  Kontraktor
                </div>
              </div>
              <div style={{ padding: "32px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800 }}>Jasa Kontraktor & Konstruksi</h3>
                  <p style={{ color: "var(--fg-secondary)", fontSize: "0.92rem", lineHeight: "1.5" }}>
                    Jasa konstruksi profesional berlisensi untuk pembangunan rumah baru, gedung komersial, ruko, serta proyek renovasi skala kecil hingga besar dengan transparansi material lengkap.
                  </p>
                </div>
                <Link href="/kontraktor" className="btn-primary" style={{ alignSelf: "flex-start", fontSize: "0.85rem", padding: "10px 20px" }}>
                  Konsultasi Konstruksi
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Homestay Card */}
            <div className="glass-card" style={{ overflow: "hidden", display: "flex", flexDirection: "column", minHeight: "500px" }}>
              <div style={{ position: "relative", width: "100%", height: "220px" }}>
                <Image
                  src="/homestay_hero.png"
                  alt="Amanah Homestay Cozy Room"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div style={{ position: "absolute", bottom: "16px", left: "16px", background: "var(--primary)", color: "var(--bg-primary)", padding: "4px 12px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>
                  Homestay
                </div>
              </div>
              <div style={{ padding: "32px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800 }}>Amanah Homestay</h3>
                  <p style={{ color: "var(--fg-secondary)", fontSize: "0.92rem", lineHeight: "1.5" }}>
                    Jaringan akomodasi harian, mingguan, dan bulanan yang nyaman. Dilengkapi dengan perangkat IoT pintar untuk penginapan modern bernilai tinggi bagi pebisnis maupun wisatawan.
                  </p>
                </div>
                <Link href="/homestay" className="btn-primary" style={{ alignSelf: "flex-start", fontSize: "0.85rem", padding: "10px 20px" }}>
                  Booking Homestay
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Lead Generation Form Section */}
      <section className="section-padding" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg-secondary)", transition: "background-color var(--transition-normal)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "60px", alignItems: "center" }} className="contact-grid">
            
            {/* Left side text info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--primary)" }}>
                Hubungi Direksi & Marketing
              </span>
              <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--fg-primary)", fontFamily: "var(--font-heading)" }}>
                Tertarik Bermitra atau Melakukan Pemesanan?
              </h2>
              <p style={{ color: "var(--fg-secondary)", fontSize: "1rem", lineHeight: "1.6" }}>
                Hubungi kami sekarang untuk konsultasi kemitraan B2B, info kavling subsidi, pemesanan homestay korporasi, atau penawaran jasa kontraktor renovasi secara personal.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "50%", background: "rgba(15,122,63,0.08)", color: "var(--primary)" }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--fg-muted)", fontWeight: 600 }}>EMAIL MARKETING</div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 600 }}>amanahsuryas@gmail.com</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "50%", background: "rgba(15,122,63,0.08)", color: "var(--primary)" }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--fg-muted)", fontWeight: 600 }}>WHATSAPP CENTER</div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 600 }}>+62 823-1185-5985</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "50%", background: "rgba(15,122,63,0.08)", color: "var(--primary)" }}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--fg-muted)", fontWeight: 600 }}>JAM OPERASIONAL</div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 600 }}>Senin - Sabtu | 08:00 - 17:00 WIB</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="glass-card" style={{ padding: "40px" }}>
              <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="form-row">
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--fg-secondary)" }}>Nama Lengkap</label>
                    <input
                      type="text"
                      placeholder="Masukkan nama Anda"
                      style={{ padding: "12px", borderRadius: "8px", border: "1px solid var(--border)", background: "rgba(18,18,18,0.01)" }}
                      className="input-field"
                      required
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--fg-secondary)" }}>Nomor WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="Contoh: 08123456..."
                      style={{ padding: "12px", borderRadius: "8px", border: "1px solid var(--border)", background: "rgba(18,18,18,0.01)" }}
                      className="input-field"
                      required
                    />
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--fg-secondary)" }}>Lini Bisnis yang Dituju</label>
                  <select
                    style={{ padding: "12px", borderRadius: "8px", border: "1px solid var(--border)", background: "rgba(18,18,18,0.01)", color: "var(--fg-secondary)" }}
                    className="input-field"
                    required
                  >
                    <option value="developer">Developer Perumahan (Kavling/Rumah)</option>
                    <option value="kontraktor">Jasa Kontraktor & Renovasi</option>
                    <option value="homestay">Amanah Homestay (Booking Penginapan)</option>
                    <option value="partnership">Kemitraan Strategis / B2B</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--fg-secondary)" }}>Pesan atau Kebutuhan</label>
                  <textarea
                    rows={4}
                    placeholder="Tuliskan detail kebutuhan properti atau pertanyaan Anda di sini..."
                    style={{ padding: "12px", borderRadius: "8px", border: "1px solid var(--border)", background: "rgba(18,18,18,0.01)", resize: "none" }}
                    className="input-field"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: "100%", padding: "14px", borderRadius: "8px", marginTop: "10px" }}
                >
                  Kirim Pesan Ke WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
