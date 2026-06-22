"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Hammer, Calculator, FileText, CheckCircle, Shield, Wrench, ChevronRight, Clipboard, HelpCircle, HardHat, ShieldAlert, Award } from "lucide-react";

interface ServiceType {
  id: string;
  name: string;
  basePricePerM2: {
    Standar: number;
    Menengah: number;
    Premium: number;
  };
  durationPerM2: number; // hari per m2 (scaling factor)
  description: string;
}

export default function ContractorPage() {
  const [serviceType, setServiceType] = useState("baru");
  const [materialQuality, setMaterialQuality] = useState<"Standar" | "Menengah" | "Premium">("Menengah");
  const [areaM2, setAreaM2] = useState<number>(50);

  const services: ServiceType[] = [
    {
      id: "baru",
      name: "Pembangunan Rumah Baru",
      basePricePerM2: {
        Standar: 3600000,
        Menengah: 4800000,
        Premium: 6500000
      },
      durationPerM2: 1.5,
      description: "Membangun rumah tinggal, ruko, atau kantor dari nol. Sudah termasuk pondasi, struktur beton bertulang, atap, finishing, dan instalasi ME."
    },
    {
      id: "renovasi",
      name: "Renovasi Total / Parsial",
      basePricePerM2: {
        Standar: 2200000,
        Menengah: 3200000,
        Premium: 4500000
      },
      durationPerM2: 1.0,
      description: "Pekerjaan renovasi atap, penambahan lantai (dak), pembenahan tata ruang, pengecatan ulang, serta penggantian lantai/sanitair."
    }
  ];

  const selectedService = services.find((s) => s.id === serviceType) || services[0];
  const pricePerM2 = selectedService.basePricePerM2[materialQuality];
  const estimatedCost = pricePerM2 * areaM2;

  // Duration calculation (base duration + scaling factor with floor area)
  const estimatedDays = Math.ceil(45 + areaM2 * selectedService.durationPerM2);

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(num);
  };

  const getQualitySpecs = (quality: string) => {
    switch (quality) {
      case "Standar":
        return ["Keramik lantai 40x40", "Cat dinding standar eksterior/interior", "Kusen kayu/aluminium standar", "Sanitair merk lokal standar"];
      case "Menengah":
        return ["Granit tile lantai 60x60", "Cat Jotun / Dulux interior/eksterior", "Kusen aluminium alexindo", "Sanitair merk TOTO / setara"];
      case "Premium":
        return ["Lantai marmer / granit impor", "Cat Jotun Weather Shield / Jotaplast", "Kusen UPVC premium kedap suara", "Sanitair merk TOTO Premium / Grohe"];
      default:
        return [];
    }
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Background ambient glow */}
      <div className="ambient-glow" style={{ top: "15%", right: "-10%", background: "radial-gradient(circle, rgba(15,122,63,0.06) 0%, rgba(15,122,63,0) 70%)" }} />

      {/* Hero Header */}
      <section style={{ paddingTop: "80px", paddingBottom: "60px", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "800px" }}>
            <span style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--primary)" }}>
              Jasa Kontraktor & Renovasi Berlisensi
            </span>
            <h1 style={{ fontSize: "3rem", fontWeight: 800, color: "var(--fg-primary)", fontFamily: "var(--font-heading)", letterSpacing: "-0.03em" }}>
              Bangun & Renovasi Properti Tanpa Rasa Khawatir
            </h1>
            <p style={{ color: "var(--fg-secondary)", fontSize: "1.1rem", lineHeight: "1.6" }}>
              Kami mewujudkan hunian impian Anda dengan rancangan arsitektur modern, manajemen proyek transparan (RAB detail), tukang berpengalaman, serta jaminan garansi pemeliharaan tertulis selama 3 bulan.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow Process */}
      <section className="section-padding" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--primary)", display: "block", marginBottom: "8px" }}>
              Cara Kerja Kami
            </span>
            <h2 style={{ fontSize: "2.3rem", fontWeight: 800, fontFamily: "var(--font-heading)" }}>
              5 Langkah Mudah Menuju Rumah Impian
            </h2>
            <p style={{ color: "var(--fg-secondary)", maxWidth: "600px", margin: "10px auto 0" }}>
              Proses pengerjaan yang terstruktur rapi untuk menjaga kualitas bangunan dan ketepatan waktu.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }} className="workflow-grid">
            
            {/* Step 1 */}
            <div className="glass-card" style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "12px", position: "relative" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "rgba(15,122,63,0.15)", fontFamily: "var(--font-heading)", position: "absolute", top: "10px", right: "20px" }}>01</div>
              <Clipboard size={24} style={{ color: "var(--primary)" }} />
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginTop: "12px" }}>Survey & Konsultasi</h3>
              <p style={{ fontSize: "0.82rem", color: "var(--fg-secondary)", lineHeight: "1.4" }}>
                Pengukuran lokasi lahan secara presisi, diskusi konsep denah awal, dan konsultasi keinginan desain arsitek gratis.
              </p>
            </div>

            {/* Step 2 */}
            <div className="glass-card" style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "12px", position: "relative" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "rgba(15,122,63,0.15)", fontFamily: "var(--font-heading)", position: "absolute", top: "10px", right: "20px" }}>02</div>
              <FileText size={24} style={{ color: "var(--primary)" }} />
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginTop: "12px" }}>Desain 3D & RAB</h3>
              <p style={{ fontSize: "0.82rem", color: "var(--fg-secondary)", lineHeight: "1.4" }}>
                Pembuatan visualisasi 3D fasad rumah beserta Rencana Anggaran Biaya (RAB) terperinci per item pekerjaan.
              </p>
            </div>

            {/* Step 3 */}
            <div className="glass-card" style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "12px", position: "relative" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "rgba(15,122,63,0.15)", fontFamily: "var(--font-heading)", position: "absolute", top: "10px", right: "20px" }}>03</div>
              <HardHat size={24} style={{ color: "var(--primary)" }} />
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginTop: "12px" }}>Kontrak SPK</h3>
              <p style={{ fontSize: "0.82rem", color: "var(--fg-secondary)", lineHeight: "1.4" }}>
                Penandatanganan Surat Perjanjian Kerja (SPK) legal dengan kesepakatan spesifikasi material dan jadwal pembayaran bertahap (termin).
              </p>
            </div>

            {/* Step 4 */}
            <div className="glass-card" style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "12px", position: "relative" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "rgba(15,122,63,0.15)", fontFamily: "var(--font-heading)", position: "absolute", top: "10px", right: "20px" }}>04</div>
              <Wrench size={24} style={{ color: "var(--primary)" }} />
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginTop: "12px" }}>Masa Konstruksi</h3>
              <p style={{ fontSize: "0.82rem", color: "var(--fg-secondary)", lineHeight: "1.4" }}>
                Pelaksanaan konstruksi di lapangan oleh tim tukang profesional dengan update progress laporan periodik ke aplikasi/WhatsApp klien.
              </p>
            </div>

            {/* Step 5 */}
            <div className="glass-card" style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "12px", position: "relative" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "rgba(15,122,63,0.15)", fontFamily: "var(--font-heading)", position: "absolute", top: "10px", right: "20px" }}>05</div>
              <CheckCircle size={24} style={{ color: "var(--primary)" }} />
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginTop: "12px" }}>Handover & Garansi</h3>
              <p style={{ fontSize: "0.82rem", color: "var(--fg-secondary)", lineHeight: "1.4" }}>
                Serah terima kunci setelah pengecekan kualitas bersama klien (checklist kelayakan), dilanjutkan masa garansi pemeliharaan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Estimator & Calculator Section */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-secondary)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "60px", alignItems: "flex-start" }} className="estimator-grid">
            
            {/* Left Box: Parameters */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--primary)" }}>
                  Budget Planner
                </span>
                <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--fg-primary)", fontFamily: "var(--font-heading)", marginTop: "4px" }}>
                  Estimator Biaya Pembangunan
                </h2>
                <p style={{ color: "var(--fg-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                  Hitung perkiraan kasar rencana anggaran pembangunan atau renovasi rumah Anda berdasarkan luas bangunan dan kualitas material yang Anda inginkan.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "24px" }}>
                {/* Service Type Selection */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ fontSize: "0.85rem", fontWeight: 700 }}>Tipe Jasa Kontraktor</label>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <button
                      onClick={() => setServiceType("baru")}
                      style={{
                        flex: 1,
                        padding: "12px",
                        borderRadius: "8px",
                        border: serviceType === "baru" ? "2px solid var(--primary)" : "1px solid var(--border)",
                        background: serviceType === "baru" ? "rgba(15,122,63,0.06)" : "transparent",
                        fontWeight: 600,
                        cursor: "pointer"
                      }}
                    >
                      Pembangunan Baru
                    </button>
                    <button
                      onClick={() => setServiceType("renovasi")}
                      style={{
                        flex: 1,
                        padding: "12px",
                        borderRadius: "8px",
                        border: serviceType === "renovasi" ? "2px solid var(--primary)" : "1px solid var(--border)",
                        background: serviceType === "renovasi" ? "rgba(15,122,63,0.06)" : "transparent",
                        fontWeight: 600,
                        cursor: "pointer"
                      }}
                    >
                      Renovasi Rumah
                    </button>
                  </div>
                </div>

                {/* Material Quality Selection */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ fontSize: "0.85rem", fontWeight: 700 }}>Tipe Kualitas Material (Spesifikasi)</label>
                  <div style={{ display: "flex", gap: "10px", background: "var(--border)", padding: "4px", borderRadius: "8px" }}>
                    {(["Standar", "Menengah", "Premium"] as const).map((q) => (
                      <button
                        key={q}
                        onClick={() => setMaterialQuality(q)}
                        style={{
                          flex: 1,
                          padding: "8px 0",
                          borderRadius: "6px",
                          fontWeight: 600,
                          fontSize: "0.8rem",
                          cursor: "pointer",
                          background: materialQuality === q ? "var(--bg-primary)" : "transparent",
                          color: materialQuality === q ? "var(--primary)" : "var(--fg-secondary)",
                          transition: "all var(--transition-fast)"
                        }}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Building Floor Area (Luas Bangunan m2) */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ fontSize: "0.85rem", fontWeight: 700 }}>Estimasi Luas Bangunan (LT / LB)</label>
                    <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--primary)" }}>{areaM2} ㎡</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="300"
                    step="5"
                    value={areaM2}
                    onChange={(e) => setAreaM2(Number(e.target.value))}
                    style={{ width: "100%", accentColor: "var(--primary)", cursor: "pointer" }}
                  />
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--fg-muted)", fontWeight: 600 }}>
                    <span>15 ㎡ (Kecil)</span>
                    <span>150 ㎡ (Sedang)</span>
                    <span>300 ㎡ (Besar)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box: Output Visual Card */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", position: "sticky", top: "100px" }}>
              <div
                className="glass-card"
                style={{
                  padding: "40px",
                  background: "var(--fg-primary)",
                  color: "var(--bg-primary)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px"
                }}
              >
                <div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.8, color: "var(--primary)" }}>
                    PERKIRAAN ANGGARAN TOTAL
                  </span>
                  <h3
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: 800,
                      fontFamily: "var(--font-heading)",
                      marginTop: "6px",
                      lineHeight: "1.1",
                      color: "var(--bg-primary)"
                    }}
                  >
                    {formatRupiah(estimatedCost)}
                  </h3>
                  <div style={{ display: "flex", gap: "10px", marginTop: "8px", fontSize: "0.8rem", opacity: 0.8 }}>
                    <span>Estimasi Durasi: <strong>~{estimatedDays} Hari</strong></span>
                    <span>•</span>
                    <span>Tarif per ㎡: <strong>{formatRupiah(pricePerM2)}</strong></span>
                  </div>
                </div>

                {/* Quality Specifications checklist */}
                <div style={{ borderTop: "1px solid rgba(255, 252, 246, 0.2)", paddingTop: "20px" }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", opacity: 0.8, marginBottom: "12px", color: "var(--primary)" }}>
                    Spesifikasi Material Utama ({materialQuality}):
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {getQualitySpecs(materialQuality).map((spec, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.82rem" }}>
                        <CheckCircle size={14} style={{ color: "var(--primary)", marginTop: "2px", flexShrink: 0 }} />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/6282311855985?text=Halo%20Kontraktor%20Amanah%20Surya%20Sejahtera,%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(selectedService.name)}%20spesifikasi%20${materialQuality}%20dengan%20luas%20${areaM2}%20m2.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    backgroundColor: "var(--primary)",
                    color: "var(--bg-primary)",
                    padding: "16px",
                    fontWeight: 700,
                    borderRadius: "10px",
                    textAlign: "center"
                  }}
                >
                  Dapatkan RAB Detail Gratis
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Trust Pillars */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--primary)", display: "block", marginBottom: "8px" }}>
              Mengapa Memilih Kami?
            </span>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, fontFamily: "var(--font-heading)" }}>
              Komitmen Kualitas & Profesionalisme
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "32px" }} className="pillars-grid">
            
            {/* Pillar 1 */}
            <div className="glass-card" style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <Shield size={24} style={{ color: "var(--primary)" }} />
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Garansi Pemeliharaan</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--fg-secondary)", lineHeight: "1.5" }}>
                Masa retensi jaminan pemeliharaan selama 90 hari setelah serah terima untuk perbaikan kebocoran atap, retak dinding halus, atau saluran mampet.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="glass-card" style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <Award size={24} style={{ color: "var(--primary)" }} />
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Tukang Ahli Berpengalaman</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--fg-secondary)", lineHeight: "1.5" }}>
                Seluruh tim mandor dan tukang bangunan kami telah melewati sertifikasi konstruksi sipil dan memiliki rekam jejak puluhan tahun membangun hunian.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="glass-card" style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <ShieldAlert size={24} style={{ color: "var(--primary)" }} />
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Anti Pembengkakan Biaya</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--fg-secondary)", lineHeight: "1.5" }}>
                Harga pembangunan yang disepakati di SPK mengikat. Kami menjamin tidak ada pembengkakan biaya tambahan di luar perubahan spesifikasi resmi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
