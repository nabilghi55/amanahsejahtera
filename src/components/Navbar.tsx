"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Holding Portal", path: "/" },
    { name: "Developer Perumahan", path: "/perumahan" },
    { name: "Amanah Homestay", path: "/homestay" },
    { name: "Jasa Kontraktor", path: "/kontraktor" },
  ];

  return (
    <nav
      className={`glass-navbar ${
        isScrolled ? "scrolled-shadow" : ""
      }`}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        borderBottom: isScrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all var(--transition-normal)",
        background: isScrolled ? "var(--glass-bg)" : "transparent",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "80px" }}>
        {/* Brand Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: 800, fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: "var(--fg-primary)" }}>
          <Image
            src="/logo_ass.jpeg"
            alt="Logo PT Amanah Surya Sejahtera"
            width={44}
            height={44}
            style={{ borderRadius: "8px", objectFit: "cover" }}
          />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.1" }}>
            <span style={{ fontSize: "1.1rem", fontWeight: 800, letterSpacing: "-0.02em" }}>AMANAH SURYA</span>
            <span style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.15em", color: "var(--primary)" }}>SEJAHTERA</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div style={{ display: "none", alignItems: "center", gap: "32px" }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                style={{
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  color: isActive ? "var(--primary)" : "var(--fg-secondary)",
                  position: "relative",
                  padding: "6px 0",
                }}
                className="nav-link"
              >
                {link.name}
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "2px",
                      backgroundColor: "var(--primary)",
                      borderRadius: "2px",
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              border: "1px solid var(--border)",
              color: "var(--fg-primary)",
              transition: "all var(--transition-fast)",
            }}
            aria-label="Toggle Theme"
            className="theme-btn"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Contact Button */}
          <a
            href="https://wa.me/6282311855985"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-primary-nav"
            style={{
              display: "none",
              padding: "10px 20px",
              fontSize: "0.85rem",
              borderRadius: "8px",
            }}
          >
            Hubungi Kami
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: "flex",
              width: "40px",
              height: "40px",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              color: "var(--fg-primary)",
            }}
            className="mobile-toggle"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Glassmorphic) */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: 0,
            width: "100%",
            background: "var(--glass-bg)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border)",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            zIndex: 99,
          }}
          className="animate-fade-in"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              style={{
                fontWeight: 600,
                fontSize: "1.1rem",
                color: pathname === link.path ? "var(--primary)" : "var(--fg-primary)",
                padding: "8px 0",
                borderBottom: "1px solid rgba(18,18,18,0.04)",
              }}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/6282311855985"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "8px",
              marginTop: "10px",
            }}
          >
            Hubungi Kami
            <ArrowUpRight size={18} />
          </a>
        </div>
      )}
    </nav>
  );
}
