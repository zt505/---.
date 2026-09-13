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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* حاوية اللوقو الكاملة */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
        {/* اللوقو (أيقونة كبيرة أو تستبدلها بـ <img src="..." /> لو عندك صورة شعار) */}
        <div
          style={{
            width: "140px",
            height: "140px",
            backgroundColor: "#0ea5e9",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "64px",
            boxShadow: "0 10px 30px rgba(14, 165, 233, 0.4)",
            marginBottom: "24px",
            border: "4px solid #1e293b",
          }}
        >
          💻
        </div>

        {/* اسم المنشأة */}
        <h1 style={{ color: "#ffffff", marginBottom: "12px", fontSize: "32px", fontWeight: "bold" }}>
          بن مزهر للحلول التقنية
        </h1>

        {/* وصف بسيط */}
        <p style={{ color: "#94a3b8", fontSize: "16px", marginBottom: "35px", lineHeight: "1.6" }}>
          اضغط الزر بالأسفل للانتقال إلى سيرفر الديسكورد وتواصل معنا مباشرة.
        </p>

        {/* زر الانتقال للديسكورد */}
        <a
          href={DISCORD_SERVER_INVITE}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#5865F2",
            color: "#fff",
            padding: "16px 36px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "18px",
            boxShadow: "0 6px 20px rgba(88, 101, 242, 0.5)",
            transition: "transform 0.2s ease",
          }}
        >
          الانتقال إلى سيرفر الديسكورد 🚀
        </a>
      </div>
    </div>
  );
}
