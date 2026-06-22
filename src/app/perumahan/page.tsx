"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Home, MapPin, BedDouble, Bath, Square, Percent, Check, HelpCircle, ArrowRight, ShieldCheck } from "lucide-react";

interface Property {
  id: string;
  name: string;
  type: "Subsidi" | "Komersial";
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  landArea: number; // m2
  buildingArea: number; // m2
  image: string;
  tagline: string;
  highlights: string[];
  downPaymentMin: number; // %
}

export default function HousingPage() {
  const [activeFilter, setActiveFilter] = useState<"Semua" | "Subsidi" | "Komersial">("Semua");
  const [selectedPropertyId, setSelectedPropertyId] = useState("1");
  const [tenureYears, setTenureYears] = useState(15);
  const [customDP, setCustomDP] = useState<number | "">("");
  const [interestRate, setInterestRate] = useState(5.0); // KPR Subsidi is ~5%, Komersial is ~8-9%

  const properties: Property[] = [
    {
      id: "1",
      name: "Griya Amanah Type 36",
      type: "Subsidi",
      price: 185000000,
      location: "Jl. Akses Bandara Internasional Minangkabau, Padang Pariaman",
      bedrooms: 2,
      bathrooms: 1,
      landArea: 60,
      buildingArea: 36,
      image: "/housing_hero.png",
      tagline: "Hunian subsidi pemerintah berkualitas tinggi dengan akses terdekat ke Bandara Internasional Minangkabau.",
      highlights: ["Hanya 5 menit ke BIM", "Dinding bata merah / plester aci", "Rangka atap baja ringan", "Kawasan bebas banjir"],
      downPaymentMin: 1
    },
    {
      id: "2",
      name: "Griya Amanah Type 36+",
      type: "Komersial",
      price: 240000000,
      location: "Jl. Akses Bandara Internasional Minangkabau, Padang Pariaman",
      bedrooms: 2,
      bathrooms: 1,
      landArea: 72,
      buildingArea: 36,
      image: "/housing_hero.png",
      tagline: "Rumah komersial minimalis dengan luas tanah ekstra dan lokasi strategis.",
      highlights: ["Sisa tanah belakang luas", "Desain modern minimalis", "Dekat dengan fasilitas umum", "Sumber air bersih melimpah"],
      downPaymentMin: 10
    },
    {
      id: "3",
      name: "Griya Amanah Type 45",
      type: "Komersial",
      price: 350000000,
      location: "Jl. Akses Bandara Internasional Minangkabau, Padang Pariaman",
      bedrooms: 2,
      bathrooms: 1,
      landArea: 84,
      buildingArea: 45,
      image: "/housing_hero.png",
      tagline: "Hunian keluarga menengah yang ideal dengan kualitas bangunan kokoh.",
      highlights: ["Desain ruang keluarga lapang", "Carport beton rabat", "Listrik 1300 Watt", "One gate system keamanan 24 jam"],
      downPaymentMin: 10
    },
    {
      id: "4",
      name: "Griya Amanah Type 70",
      type: "Komersial",
      price: 550000000,
      location: "Jl. Akses Bandara Internasional Minangkabau, Padang Pariaman",
      bedrooms: 3,
      bathrooms: 2,
      landArea: 112,
      buildingArea: 70,
      image: "/housing_hero.png",
      tagline: "Tipe rumah mewah premium terluas untuk kenyamanan hidup maksimal keluarga Anda.",
      highlights: ["3 Kamar Tidur luas & 2 Kamar Mandi", "Tinggi langit-langit ceiling 4m", "Finishing cat premium & granit tile 60x60", "Garasi muat 2 mobil"],
      downPaymentMin: 10
    }
  ];

  const filteredProperties = properties.filter(
    (prop) => activeFilter === "Semua" || prop.type === activeFilter
  );

  // Installment Simulation Calculation
  const selectedProperty = properties.find((p) => p.id === selectedPropertyId) || properties[0];
  const autoRate = selectedProperty.type === "Subsidi" ? 5.0 : 8.5; // Update rate based on property type
  const actualRate = interestRate !== autoRate ? interestRate : autoRate;

  // Calculations
  const calculatedDP = customDP !== "" ? Number(customDP) : (selectedProperty.price * selectedProperty.downPaymentMin) / 100;
  const loanAmount = selectedProperty.price - calculatedDP;
  const monthlyRate = actualRate / 100 / 12;
  const totalMonths = tenureYears * 12;

  // PMT formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
  const monthlyInstallment =
    loanAmount > 0
      ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
      : 0;

  const handlePropertySelect = (id: string) => {
    setSelectedPropertyId(id);
    const prop = properties.find((p) => p.id === id);
    if (prop) {
      // Reset rate based on selected type
      setInterestRate(prop.type === "Subsidi" ? 5.0 : 8.5);
      setCustomDP(""); // Reset custom DP to min default
    }
  };

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(num);
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Background ambient glow */}
      <div className="ambient-glow" style={{ top: "5%", right: "-10%", background: "radial-gradient(circle, rgba(15,122,63,0.05) 0%, rgba(15,122,63,0) 70%)" }} />

      {/* Hero Header */}
      <section style={{ paddingTop: "80px", paddingBottom: "60px", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "800px" }}>
            <span style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--primary)" }}>
              Developer Perumahan Mandiri
            </span>
            <h1 style={{ fontSize: "3rem", fontWeight: 800, color: "var(--fg-primary)", fontFamily: "var(--font-heading)", letterSpacing: "-0.03em" }}>
              Hunian Ideal & Investasi Masa Depan Anda
            </h1>
            <p style={{ color: "var(--fg-secondary)", fontSize: "1.1rem", lineHeight: "1.6" }}>
              Kami menyediakan perumahan subsidi berkualitas unggul bagi keluarga pemula, serta hunian komersial premium yang modern, nyaman, dan berlokasi strategis di pusat pertumbuhan kota.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Listing Section */}
      <section className="section-padding">
        <div className="container">
          {/* Controls Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "40px",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {/* Filter Tabs */}
            <div style={{ display: "flex", gap: "8px", background: "var(--border)", padding: "4px", borderRadius: "10px" }}>
              {(["Semua", "Subsidi", "Komersial"] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  style={{
                    padding: "8px 24px",
                    borderRadius: "8px",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    background: activeFilter === filter ? "var(--bg-primary)" : "transparent",
                    color: activeFilter === filter ? "var(--primary)" : "var(--fg-secondary)",
                    boxShadow: activeFilter === filter ? "var(--shadow-sm)" : "none",
                    transition: "all var(--transition-fast)"
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div style={{ fontSize: "0.9rem", color: "var(--fg-secondary)", fontWeight: 500 }}>
              Menampilkan {filteredProperties.length} unit perumahan pilihan
            </div>
          </div>

          {/* Properties Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "32px" }} className="prop-grid">
            
            {filteredProperties.map((prop) => (
              <div
                key={prop.id}
                className="glass-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  overflow: "hidden",
                  border: selectedPropertyId === prop.id ? "2px solid var(--primary)" : "1px solid var(--border)",
                  transform: selectedPropertyId === prop.id ? "scale(1.01)" : "none",
                  boxShadow: selectedPropertyId === prop.id ? "var(--shadow-lg)" : "var(--shadow-glass)"
                }}
              >
                {/* Image Showcase */}
                <div style={{ position: "relative", width: "100%", height: "240px" }}>
                  <Image
                    src={prop.image}
                    alt={prop.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div style={{ position: "absolute", top: "16px", left: "16px", display: "flex", gap: "8px" }}>
                    <span
                      style={{
                        padding: "4px 12px",
                        borderRadius: "20px",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        backgroundColor: prop.type === "Subsidi" ? "rgba(136, 92, 0, 0.9)" : "rgba(18, 18, 18, 0.9)",
                        color: "#fffcf6",
                        border: "1px solid rgba(255,255,255,0.2)"
                      }}
                    >
                      {prop.type}
                    </span>
                  </div>
                  <div style={{ position: "absolute", bottom: "16px", right: "16px", background: "var(--glass-bg)", backdropFilter: "blur(8px)", padding: "6px 14px", borderRadius: "8px", fontWeight: 800, fontSize: "1.1rem", color: "var(--primary)", border: "1px solid var(--border)" }}>
                    {formatRupiah(prop.price)}
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: "32px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "24px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--fg-muted)", fontSize: "0.85rem" }}>
                      <MapPin size={14} />
                      <span>{prop.location}</span>
                    </div>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: 800, fontFamily: "var(--font-heading)" }}>{prop.name}</h3>
                    <p style={{ color: "var(--fg-secondary)", fontSize: "0.9rem", lineHeight: "1.5" }}>
                      {prop.tagline}
                    </p>

                    {/* Specs Row */}
                    <div style={{ display: "flex", gap: "20px", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", paddingTop: "14px", paddingBottom: "14px", marginTop: "8px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "var(--fg-secondary)", fontWeight: 500 }}>
                        <BedDouble size={14} style={{ color: "var(--primary)" }} />
                        <span>{prop.bedrooms} KT</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "var(--fg-secondary)", fontWeight: 500 }}>
                        <Bath size={14} style={{ color: "var(--primary)" }} />
                        <span>{prop.bathrooms} KM</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "var(--fg-secondary)", fontWeight: 500 }}>
                        <Square size={14} style={{ color: "var(--primary)" }} />
                        <span>LB {prop.buildingArea}㎡ / LT {prop.landArea}㎡</span>
                      </div>
                    </div>

                    {/* Bullet Highlights */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
                      {prop.highlights.map((hl, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "var(--fg-primary)" }}>
                          <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "rgba(15,122,63,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)" }}>
                            <Check size={10} />
                          </div>
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "12px", width: "100%" }}>
                    <button
                      onClick={() => handlePropertySelect(prop.id)}
                      className="btn-secondary"
                      style={{ flex: 1, padding: "10px", fontSize: "0.85rem", borderRadius: "8px", border: selectedPropertyId === prop.id ? "1px solid var(--primary)" : "1px solid var(--border)" }}
                    >
                      {selectedPropertyId === prop.id ? "Terpilih Simulasikan" : "Simulasikan KPR"}
                    </button>
                    <a
                      href={`https://wa.me/6282311855985?text=Halo%20Amanah%20Surya%20Sejahtera,%20saya%20tertarik%20dengan%20properti%20${encodeURIComponent(prop.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ flex: 1, padding: "10px", fontSize: "0.85rem", borderRadius: "8px" }}
                    >
                      Hubungi Sales
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive KPR Calculator */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "flex-start" }} className="calc-grid">
            
            {/* Calculator Left: Parameters */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--primary)" }}>
                  Financing Tools
                </span>
                <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--fg-primary)", fontFamily: "var(--font-heading)", marginTop: "4px" }}>
                  Simulasi Cicilan KPR
                </h2>
                <p style={{ color: "var(--fg-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                  Hitung dan simulasikan rencana cicilan rumah bulanan Anda secara langsung. KPR program subsidi memiliki suku bunga tetap (flat) 5% sedangkan KPR komersial menggunakan kisaran suku bunga bank terbaru.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "20px" }}>
                {/* Select Property */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ fontSize: "0.85rem", fontWeight: 700 }}>Properti Pilihan</label>
                  <select
                    value={selectedPropertyId}
                    onChange={(e) => handlePropertySelect(e.target.value)}
                    style={{ padding: "12px", borderRadius: "8px", border: "1px solid var(--border)", background: "rgba(18,18,18,0.01)", color: "var(--fg-primary)", width: "100%", fontWeight: 600 }}
                  >
                    {properties.map((p) => (
                      <option key={p.id} value={p.id}>{p.name} ({p.type} - {formatRupiah(p.price)})</option>
                    ))}
                  </select>
                </div>

                {/* Down Payment (DP) Input */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <label style={{ fontSize: "0.85rem", fontWeight: 700 }}>Uang Muka (DP) - Min {selectedProperty.downPaymentMin}%</label>
                    <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--primary)" }}>
                      Min: {formatRupiah((selectedProperty.price * selectedProperty.downPaymentMin) / 100)}
                    </span>
                  </div>
                  <div style={{ position: "relative" }}>
                    <input
                      type="number"
                      value={customDP}
                      onChange={(e) => setCustomDP(e.target.value !== "" ? Number(e.target.value) : "")}
                      placeholder={`Nominal Rupiah (Minimal DP)`}
                      style={{ padding: "12px 12px 12px 40px", borderRadius: "8px", border: "1px solid var(--border)", background: "rgba(18,18,18,0.01)", width: "100%" }}
                    />
                    <span style={{ position: "absolute", left: "12px", top: "12px", fontSize: "0.9rem", color: "var(--fg-muted)", fontWeight: 600 }}>Rp</span>
                  </div>
                </div>

                {/* Tenure Selection */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ fontSize: "0.85rem", fontWeight: 700 }}>Jangka Waktu KPR (Tenor)</label>
                    <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--primary)" }}>{tenureYears} Tahun</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="25"
                    step="5"
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    style={{ width: "100%", accentColor: "var(--primary)", cursor: "pointer" }}
                  />
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--fg-muted)", fontWeight: 600 }}>
                    <span>5 Tahun</span>
                    <span>15 Tahun</span>
                    <span>25 Tahun</span>
                  </div>
                </div>

                {/* Suku Bunga Custom */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ fontSize: "0.85rem", fontWeight: 700 }}>Suku Bunga KPR Efektif</label>
                    <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--primary)" }}>{actualRate}% p.a.</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    step="0.5"
                    value={actualRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    style={{ width: "100%", accentColor: "var(--primary)", cursor: "pointer" }}
                  />
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--fg-muted)", fontWeight: 600 }}>
                    <span>1% Flat</span>
                    <span>Auto ({selectedProperty.type === "Subsidi" ? "5.0%" : "8.5%"})</span>
                    <span>15% Floating</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculator Right: Output Visual Card */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", position: "sticky", top: "100px" }}>
              <div
                className="glass-card"
                style={{
                  padding: "40px",
                  background: "var(--primary)",
                  color: "var(--bg-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "28px",
                  border: "none"
                }}
              >
                <div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.8 }}>
                    ESTIMASI CICILAN PER BULAN
                  </span>
                  <h3
                    style={{
                      fontSize: "2.8rem",
                      fontWeight: 800,
                      fontFamily: "var(--font-heading)",
                      marginTop: "6px",
                      lineHeight: "1",
                      color: "var(--bg-primary)"
                    }}
                  >
                    {formatRupiah(monthlyInstallment)}
                  </h3>
                  <span style={{ fontSize: "0.8rem", opacity: 0.8 }}>*Cicilan flat tetap (KPR subsidi) atau anuitas bank (Komersial)</span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px", borderTop: "1px solid rgba(255, 252, 246, 0.2)", paddingTop: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem" }}>
                    <span style={{ opacity: 0.8 }}>Harga Unit Properti</span>
                    <span style={{ fontWeight: 700 }}>{formatRupiah(selectedProperty.price)}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem" }}>
                    <span style={{ opacity: 0.8 }}>Uang Muka Terbayar</span>
                    <span style={{ fontWeight: 700 }}>{formatRupiah(calculatedDP)}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem" }}>
                    <span style={{ opacity: 0.8 }}>Jumlah Pokok Pinjaman</span>
                    <span style={{ fontWeight: 700 }}>{formatRupiah(loanAmount)}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem" }}>
                    <span style={{ opacity: 0.8 }}>Tenor Cicilan</span>
                    <span style={{ fontWeight: 700 }}>{tenureYears} Tahun ({totalMonths} Bulan)</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/6282311855985?text=Halo%20Sales%20Amanah%20Surya%20Sejahtera,%20saya%20sudah%20melakukan%20simulasi%20KPR%20untuk%20unit%20${encodeURIComponent(selectedProperty.name)}%20dengan%20DP%20${encodeURIComponent(formatRupiah(calculatedDP))}%20dan%20tenor%20${tenureYears}%20tahun.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    color: "var(--primary)",
                    border: "none",
                    padding: "16px",
                    fontWeight: 700,
                    borderRadius: "10px",
                    textAlign: "center"
                  }}
                >
                  Ajukan KPR via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Profile Promo */}
      <section style={{ paddingBottom: "40px", paddingTop: "20px" }}>
        <div className="container">
          <div
            className="glass-card"
            style={{
              padding: "40px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              background: "linear-gradient(135deg, var(--glass-bg) 0%, rgba(225, 48, 108, 0.03) 100%)",
              border: "1px solid rgba(225, 48, 108, 0.15)"
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #e1306c 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff"
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            <div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--fg-primary)", fontFamily: "var(--font-heading)" }}>Ikuti Galeri & Update Kavling Kami</h3>
              <p style={{ color: "var(--fg-secondary)", fontSize: "0.95rem", marginTop: "4px" }}>
                Dapatkan info ketersediaan unit terbaru, dokumentasi proses pembangunan, dan serah terima kunci di Instagram resmi kami.
              </p>
              <span style={{ display: "inline-block", marginTop: "8px", fontWeight: 700, color: "#e1306c", fontSize: "1.05rem" }}>
                @perumahangriyaamanah
              </span>
            </div>
            <a
              href="https://www.instagram.com/perumahangriyaamanah/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #e1306c 100%)",
                color: "#fff",
                border: "none",
                borderRadius: "30px",
                padding: "12px 36px",
                fontSize: "0.9rem",
                boxShadow: "0 4px 20px rgba(225, 48, 108, 0.2)"
              }}
            >
              Kunjungi Profil Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Lead Generation & FAQ */}
      <section className="section-padding">
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", gap: "24px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, fontFamily: "var(--font-heading)" }}>Siap Memiliki Rumah Impian Anda?</h2>
            <p style={{ color: "var(--fg-secondary)" }}>
              Konsultasikan kelayakan berkas KPR Anda secara gratis bersama tim sales representatif PT Amanah Surya Sejahtera. Kami bantu proses administrasi berkas Subsidi maupun Komersial hingga proses akad.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "8px" }}>
              <a href="https://wa.me/6282311855985" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "14px 36px" }}>
                Hubungi WhatsApp Kami
              </a>
              <a href="#kpr-sim" onClick={(e) => { e.preventDefault(); document.getElementById("kpr-sim")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-secondary" style={{ padding: "14px 36px" }}>
                Hitung Ulang Simulasi
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
