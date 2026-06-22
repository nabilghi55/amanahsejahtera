"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Bed, Calendar, Wifi, Tv, Compass, Shield, Tag, ChevronRight, Check, Key, Smartphone, Coffee, Clock } from "lucide-react";

interface Room {
  id: string;
  name: string;
  image: string;
  dailyRate: number;
  weeklyRate: number;
  monthlyRate: number;
  size: number; // m2
  capacity: number; // orang
  beds: string;
  description: string;
  amenities: string[];
}

export default function HomestayPage() {
  const [selectedRoomId, setSelectedRoomId] = useState("1");
  const [stayDuration, setStayDuration] = useState(1);
  const [stayType, setStayType] = useState<"Harian" | "Mingguan" | "Bulanan">("Harian");
  const [checkInDate, setCheckInDate] = useState("");

  const rooms: Room[] = [
    {
      id: "1",
      name: "Amanah Smart Cozy Room",
      image: "/homestay_hero.png",
      dailyRate: 350000,
      weeklyRate: 2100000, // 300k/day
      monthlyRate: 7000000, // 233k/day
      size: 24,
      capacity: 2,
      beds: "1 Queen Bed",
      description: "Kamar modern minimalis yang cocok untuk solo traveler atau pasangan. Dilengkapi fasilitas smart home dan akses keyless.",
      amenities: ["Smart Lock (Keyless)", "High-Speed WiFi", "Smart TV 43\"", "AC & Hot Water", "Mini Fridge"]
    },
    {
      id: "2",
      name: "Amanah Deluxe Suite",
      image: "/homestay_hero.png",
      dailyRate: 550000,
      weeklyRate: 3300000, // 471k/day
      monthlyRate: 10000000, // 333k/day
      size: 38,
      capacity: 3,
      beds: "1 King Bed + 1 Single Bed",
      description: "Suite luas berpemandangan taman dengan ruang tamu mini terpisah. Sangat nyaman untuk perjalanan bisnis atau liburan kecil.",
      amenities: ["Smart Lock (Keyless)", "Dedicated Workspace", "Smart TV 50\" + Netflix", "AC, Kitchenette, Dispenser", "Water Heater & Hairdryer"]
    },
    {
      id: "3",
      name: "Amanah Executive Garden Villa",
      image: "/homestay_hero.png",
      dailyRate: 1200000,
      weeklyRate: 7200000, // 1.02m/day
      monthlyRate: 22000000, // 733k/day
      size: 90,
      capacity: 6,
      beds: "3 Bedrooms (King, Queen, Twins)",
      description: "Villa keluarga eksklusif dengan kolam plunge pool mini pribadi dan paviliun taman terbuka. Menjamin privasi total.",
      amenities: ["Smart Lock (Keyless)", "Private Plunge Pool", "Full Kitchen & Barbecue Set", "Living Room & Smart TV 55\"", "AC in all rooms & 3 Bathrooms"]
    }
  ];

  const selectedRoom = rooms.find((r) => r.id === selectedRoomId) || rooms[0];

  // Calculations
  const getRatePerPeriod = () => {
    switch (stayType) {
      case "Harian": return selectedRoom.dailyRate;
      case "Mingguan": return selectedRoom.weeklyRate;
      case "Bulanan": return selectedRoom.monthlyRate;
      default: return selectedRoom.dailyRate;
    }
  };

  const ratePerPeriod = getRatePerPeriod();
  const totalPriceRaw = ratePerPeriod * stayDuration;

  // Smart discount calculation for visualization
  const getDiscountPercent = () => {
    switch (stayType) {
      case "Harian": return 0;
      case "Mingguan": return 14; // ~14% savings compared to paying daily rate
      case "Bulanan": return 33; // ~33% savings compared to paying daily rate
      default: return 0;
    }
  };

  const discountPercent = getDiscountPercent();
  const discountAmount = (totalPriceRaw * discountPercent) / 100;
  const finalPrice = totalPriceRaw; // The weekly/monthly rates already have the discount built-in!

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(num);
  };

  const handleStayTypeChange = (type: "Harian" | "Mingguan" | "Bulanan") => {
    setStayType(type);
    setStayDuration(1); // Reset duration
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Background ambient glow */}
      <div className="ambient-glow" style={{ top: "10%", left: "-10%", background: "radial-gradient(circle, rgba(15,122,63,0.06) 0%, rgba(15,122,63,0) 70%)" }} />

      {/* Hero Header */}
      <section style={{ paddingTop: "80px", paddingBottom: "60px", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "800px" }}>
            <span style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--primary)" }}>
              Akomodasi Modern & Smart Homestay
            </span>
            <h1 style={{ fontSize: "3rem", fontWeight: 800, color: "var(--fg-primary)", fontFamily: "var(--font-heading)", letterSpacing: "-0.03em" }}>
              Penginapan Fleksibel dengan Sentuhan Teknologi Cerdas
            </h1>
            <p style={{ color: "var(--fg-secondary)", fontSize: "1.1rem", lineHeight: "1.6" }}>
              Nikmati penginapan harian, mingguan, atau bulanan yang aman dan nyaman. Setiap unit homestay dilengkapi dengan sistem IoT (Smart Lock & Devices), pembersihan berkala, serta konektivitas internet berkecepatan tinggi.
            </p>
          </div>
        </div>
      </section>

      {/* Room Showcase & Calculator Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "48px", alignItems: "flex-start" }} className="homestay-grid">
            
            {/* Left Column: Room Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, fontFamily: "var(--font-heading)", color: "var(--fg-primary)" }}>
                Pilihan Kamar & Villa Terbaik
              </h2>

              {rooms.map((room) => (
                <div
                  key={room.id}
                  className="glass-card room-row-card"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    overflow: "hidden",
                    border: selectedRoomId === room.id ? "2px solid var(--primary)" : "1px solid var(--border)",
                    boxShadow: selectedRoomId === room.id ? "var(--shadow-lg)" : "var(--shadow-glass)"
                  }}
                >

                  {/* Room Image */}
                  <div className="room-img-container" style={{ position: "relative", width: "40%", minHeight: "260px", flexShrink: 0 }}>
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  {/* Room Info */}
                  <div style={{ padding: "28px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "16px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", flexWrap: "wrap" }}>
                        <h3 style={{ fontSize: "1.3rem", fontWeight: 800 }}>{room.name}</h3>
                        <span style={{ fontSize: "0.85rem", color: "var(--primary)", fontWeight: 700 }}>
                          {formatRupiah(room.dailyRate)} / Hari
                        </span>
                      </div>
                      
                      <p style={{ color: "var(--fg-secondary)", fontSize: "0.88rem", lineHeight: "1.5" }}>
                        {room.description}
                      </p>

                      {/* Details row */}
                      <div style={{ display: "flex", gap: "16px", fontSize: "0.8rem", color: "var(--fg-muted)", margin: "4px 0", fontWeight: 500 }}>
                        <span>LB: {room.size}㎡</span>
                        <span>•</span>
                        <span>Kapasitas: {room.capacity} Tamu</span>
                        <span>•</span>
                        <span>{room.beds}</span>
                      </div>

                      {/* Amenities Icons */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
                        {room.amenities.slice(0, 3).map((amen, idx) => (
                          <span
                            key={idx}
                            style={{
                              fontSize: "0.75rem",
                              background: "var(--border)",
                              padding: "4px 10px",
                              borderRadius: "6px",
                              color: "var(--fg-secondary)",
                              fontWeight: 500
                            }}
                          >
                            {amen}
                          </span>
                        ))}
                        {room.amenities.length > 3 && (
                          <span style={{ fontSize: "0.75rem", padding: "4px", color: "var(--primary)", fontWeight: 600 }}>
                            +{room.amenities.length - 3} Lainnya
                          </span>
                        )}
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: "12px", borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
                      <button
                        onClick={() => setSelectedRoomId(room.id)}
                        className="btn-secondary"
                        style={{ flex: 1, padding: "8px", fontSize: "0.8rem", borderRadius: "6px", border: selectedRoomId === room.id ? "1px solid var(--primary)" : "1px solid var(--border)" }}
                      >
                        {selectedRoomId === room.id ? "Pilihan Anda" : "Pilih Kamar"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Pricing Calculator */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", position: "sticky", top: "100px" }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 800, fontFamily: "var(--font-heading)", color: "var(--fg-primary)" }}>
                Simulasi Booking
              </h2>

              <div className="glass-card" style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "24px" }}>
                {/* Stay Type Tabs */}
                <div style={{ display: "flex", gap: "4px", background: "var(--border)", padding: "4px", borderRadius: "10px" }}>
                  {(["Harian", "Mingguan", "Bulanan"] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => handleStayTypeChange(type)}
                      style={{
                        flex: 1,
                        padding: "8px 0",
                        borderRadius: "8px",
                        fontWeight: 600,
                        fontSize: "0.8rem",
                        cursor: "pointer",
                        background: stayType === type ? "var(--bg-primary)" : "transparent",
                        color: stayType === type ? "var(--primary)" : "var(--fg-secondary)",
                        boxShadow: stayType === type ? "var(--shadow-sm)" : "none",
                        transition: "all var(--transition-fast)"
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                {/* Selected Room Status */}
                <div style={{ padding: "16px", borderRadius: "8px", border: "1px solid var(--border)", background: "rgba(18,18,18,0.01)" }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--fg-muted)", fontWeight: 600 }}>KAMAR TERPILIH</div>
                  <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--fg-primary)", marginTop: "2px" }}>{selectedRoom.name}</div>
                  <div style={{ fontSize: "0.85rem", color: "var(--primary)", fontWeight: 600, marginTop: "4px" }}>
                    Tarif {stayType}: {formatRupiah(ratePerPeriod)}
                  </div>
                </div>

                {/* Duration Input */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ fontSize: "0.85rem", fontWeight: 700 }}>
                    Durasi Menginap ({stayType === "Harian" ? "Hari" : stayType === "Mingguan" ? "Minggu" : "Bulan"})
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={stayDuration}
                    onChange={(e) => setStayDuration(Math.max(1, Number(e.target.value)))}
                    style={{
                      padding: "12px",
                      borderRadius: "8px",
                      border: "1px solid var(--border)",
                      background: "rgba(18,18,18,0.01)",
                      width: "100%",
                      fontWeight: 600
                    }}
                  />
                </div>

                {/* Check In Date */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ fontSize: "0.85rem", fontWeight: 700 }}>Tanggal Check-In</label>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    style={{
                      padding: "12px",
                      borderRadius: "8px",
                      border: "1px solid var(--border)",
                      background: "rgba(18,18,18,0.01)",
                      width: "100%",
                      color: "var(--fg-primary)",
                      fontWeight: 600
                    }}
                    required
                  />
                </div>

                {/* Price Summary Panel */}
                <div
                  style={{
                    borderTop: "1px solid var(--border)",
                    paddingTop: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem" }}>
                    <span style={{ color: "var(--fg-secondary)" }}>
                      Subtotal ({stayDuration} {stayType === "Harian" ? "Hari" : stayType === "Mingguan" ? "Minggu" : "Bulan"})
                    </span>
                    <span style={{ fontWeight: 600 }}>{formatRupiah(totalPriceRaw)}</span>
                  </div>

                  {discountPercent > 0 && (
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", color: "#10b981" }}>
                      <span>Hemat Paket {stayType} ({discountPercent}%)</span>
                      <span>Sudah Termasuk</span>
                    </div>
                  )}

                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.2rem", fontWeight: 800, borderTop: "1px solid var(--border)", paddingTop: "12px", marginTop: "4px" }}>
                    <span>Total Tagihan</span>
                    <span style={{ color: "var(--primary)" }}>{formatRupiah(finalPrice)}</span>
                  </div>
                </div>

                {/* Submit Booking */}
                <a
                  href={`https://wa.me/6282311855985?text=Halo%20Amanah%20Homestay,%20saya%20ingin%20memesan%20kamar%20${encodeURIComponent(selectedRoom.name)}%20tipe%20${stayType}%20selama%20${stayDuration}%20${stayType === "Harian" ? "Hari" : stayType === "Mingguan" ? "Minggu" : "Bulan"}%20mulai%20tanggal%20${checkInDate || "-"}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: "14px", borderRadius: "8px", textAlign: "center" }}
                >
                  Booking Sekarang via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Homestay Technology Section */}
      <section className="section-padding" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", backgroundColor: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--primary)", display: "block", marginBottom: "8px" }}>
              IoT & Security System
            </span>
            <h2 style={{ fontSize: "2.3rem", fontWeight: 800, fontFamily: "var(--font-heading)" }}>
              Fasilitas Smart Homestay Terkini
            </h2>
            <p style={{ color: "var(--fg-secondary)", maxWidth: "600px", margin: "10px auto 0" }}>
              Kami membekali semua homestay dengan inovasi digital untuk menjamin kepraktisan, keamanan, dan fleksibilitas check-in 24 jam.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {/* Tech 1 */}
            <div className="glass-card" style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "10px", background: "rgba(15,122,63,0.08)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Key size={22} />
              </div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Check-In Mandiri (Keyless)</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--fg-secondary)", lineHeight: "1.5" }}>
                Gunakan PIN personal unik yang dikirimkan secara otomatis ke WhatsApp Anda untuk membuka pintu masuk homestay kapan saja.
              </p>
            </div>

            {/* Tech 2 */}
            <div className="glass-card" style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "10px", background: "rgba(15,122,63,0.08)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Wifi size={22} />
              </div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>WiFi Korporat Unlimited</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--fg-secondary)", lineHeight: "1.5" }}>
                Konektivitas serat optik super cepat yang stabil hingga 100 Mbps di seluruh sudut ruangan, mendukung produktivitas Work from Anywhere.
              </p>
            </div>

            {/* Tech 3 */}
            <div className="glass-card" style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "10px", background: "rgba(15,122,63,0.08)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Smartphone size={22} />
              </div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Aplikasi Kontrol Suhu & Cahaya</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--fg-secondary)", lineHeight: "1.5" }}>
                Kendali AC dan pencahayaan kamar berada dalam genggaman handphone Anda untuk menciptakan suasana yang sesuai selera secara mudah.
              </p>
            </div>

            {/* Tech 4 */}
            <div className="glass-card" style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "10px", background: "rgba(15,122,63,0.08)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Shield size={22} />
              </div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Sistem Keamanan 24 Jam</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--fg-secondary)", lineHeight: "1.5" }}>
                Kamera pengawas CCTV di area parkir/luar homestay yang terintegrasi langsung ke command center keamanan pusat PT Amanah Surya Sejahtera.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Profile Promo */}
      <section style={{ paddingTop: "60px", paddingBottom: "60px" }}>
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
              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--fg-primary)", fontFamily: "var(--font-heading)" }}>Intip Kenyamanan Kamar Kami</h3>
              <p style={{ color: "var(--fg-secondary)", fontSize: "0.95rem", marginTop: "4px" }}>
                Lihat review kamar, testimoni tamu, video tour homestay, dan info promo akhir pekan menarik di Instagram resmi kami.
              </p>
              <span style={{ display: "inline-block", marginTop: "8px", fontWeight: 700, color: "#e1306c", fontSize: "1.05rem" }}>
                @amanahhome_stay
              </span>
            </div>
            <a
              href="https://www.instagram.com/amanahhome_stay/"
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
    </div>
  );
}
