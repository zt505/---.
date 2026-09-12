"use client";

export default function Home() {
  const DISCORD_SERVER_INVITE = "https://discord.gg/AxRFyRZM9";

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
          padding: "40px 30px",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "480px",
          textAlign: "center",
          boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
          border: "1px solid #334155",
        }}
      >
        {/* مكان اللوقو أو الأيقونة */}
        <div
          style={{
            width: "80px",
            height: "80px",
            backgroundColor: "#0ea5e9",
            borderRadius: "50%",
            margin: "0 auto 20px auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "36px",
            boxShadow: "0 4px 14px rgba(14, 165, 233, 0.4)",
          }}
        >
          💻
        </div>

        <h1 style={{ color: "#ffffff", marginBottom: "12px", fontSize: "24px", fontWeight: "bold" }}>
          بن مزهر للحلول التقنية
        </h1>
        
        <p style={{ color: "#94a3b8", fontSize: "15px", marginBottom: "30px", lineHeight: "1.6" }}>
          مرحباً بك! انضم إلى سيرفر الديسكورد الخاص بنا لفتح تذكرة دعم فني والتواصل معنا مباشرة.
        </p>

        <a
          href={DISCORD_SERVER_INVITE}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#5865F2",
            color: "#fff",
            padding: "14px 28px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px",
            boxShadow: "0 4px 14px rgba(88, 101, 242, 0.4)",
            transition: "background-color 0.2s",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          الانتقال إلى سيرفر الديسكورد 🚀
        </a>
      </div>
    </div>
  );
}
