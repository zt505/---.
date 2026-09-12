"use client";
import { useEffect } from "react";

export default function Home() {
  // رابط الدعوة الخاص بسيرفرك في الديسكورد
  const DISCORD_SERVER_INVITE = "https://discord.gg/AxRFyRZM9";

  useEffect(() => {
    // تحويل الزائر تلقائياً عند فتح الموقع
    window.location.href = DISCORD_SERVER_INVITE;
  }, []);

  return (
    <div
      dir="rtl"
      style={{
        fontFamily: "system-ui, sans-serif",
        backgroundColor: "#0f172a",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#1e293b",
          padding: "30px",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "480px",
          textAlign: "center",
          boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
        }}
      >
        <h1 style={{ color: "#38bdf8", marginBottom: "12px", fontSize: "24px" }}>
          💻 بن مزهر للحلول التقنية
        </h1>
        
        <p style={{ color: "#94a3b8", fontSize: "15px", marginBottom: "20px", lineHeight: "1.6" }}>
          جاري تحويلك الآن إلى سيرفر الديسكورد لفتح تذكرة دعم فني والتواصل معنا مباشرة...
        </p>

        <a
          href={DISCORD_SERVER_INVITE}
          style={{
            display: "inline-block",
            backgroundColor: "#5865F2",
            color: "#fff",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px",
            boxShadow: "0 4px 12px rgba(88, 101, 242, 0.4)",
          }}
        >
          اضغط هنا إذا لم يتم تحويلك تلقائياً 🚀
        </a>
      </div>
    </div>
  );
}
