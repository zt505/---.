"use client";
import { useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [clientName, setClientName] = useState("");
  const [ticketId, setTicketId] = useState("");

  const DISCORD_SERVER_INVITE = "https://discord.gg/AxRFyRZM9";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const contact = formData.get("contact") as string;
    const category = formData.get("category") as string;
    const details = formData.get("details") as string;

    const generatedTicketId = `TK-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketId(generatedTicketId);
    setClientName(name);

    const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1548062874340032544/la5y_QYaI5LA5_-HT5ca-jec4Yp9kMSCHwuT5j1TUG_Zs71lji99YIuQSQqsfZ6DNSsQ";

    try {
      const res = await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "نظام التذاكر | بن مزهر",
          avatar_url: "https://i.imgur.com/4M34hi2.png",
          embeds: [
            {
              title: `🚨 طلب فتح تذكرة خاصة جديدة: [ ${generatedTicketId} ]`,
              description: `قام **${name}** بتقديم طلب دعم، وهو بانتظار فتح روم خاص معه في الديسكورد.`,
              color: 38143,
              fields: [
                { name: "🆔 الرقم المرجعي", value: `\`${generatedTicketId}\``, inline: true },
                { name: "👤 اسم العميل", value: name || "غير محدد", inline: true },
                { name: "📞 طريقة التواصل", value: contact || "غير محدد", inline: true },
                { name: "⚙️ نوع المشكلة", value: category || "غير محدد" },
                { name: "📝 تفاصيل المشكلة", value: details || "لا يوجد تفاصيل" },
              ],
              footer: {
                text: "بن مزهر للحلول التقنية • نظام إدارة الدعم الفني",
              },
              timestamp: new Date().toISOString(),
            },
          ],
        }),
      });

      if (!res.ok) {
        throw new Error("فشل الإرسال إلى الديسكورد");
      }

      setSubmitted(true);
    } catch (error) {
      alert("حدث خطأ أثناء إرسال التذكرة، حاول مرة أخرى.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div dir="rtl" style={{ fontFamily: 'system-ui, sans-serif', backgroundColor: '#0f172a', color: '#fff', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <div style={{ backgroundColor: '#1e293b', padding: '30px', borderRadius: '12px', width: '100%', maxWidth: '550px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
        
        <h1 style={{ textAlign: 'center', color: '#38bdf8', marginBottom: '8px', fontSize: '26px' }}>💻 بن مزهر للحلول التقنية</h1>
        <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '14px', marginBottom: '25px' }}>مرحباً بك! اشرح مشكلتك وسيتم فتح روم خاص بك في الديسكورد لحلها مباشرة.</p>

        {submitted ? (
          <div style={{ backgroundColor: '#0f2942', border: '1px solid #38bdf8', padding: '25px', borderRadius: '10px', textAlign: 'center', lineHeight: '1.8' }}>
            <h2 style={{ color: '#38bdf8', marginTop: 0 }}>👋 أهلاً بك يا {clientName}!</h2>
            <p style={{ color: '#e2e8f0', fontSize: '15px' }}>
              تم تسجيل تفاصيل تذكرتك برقم مرجعي: <strong style={{ color: '#38bdf8' }}>{ticketId}</strong>
            </p>
            <p style={{ color: '#94a3b8', fontSize: '14px' }}>
              لتواصل أسرع ولفتح **روم خاص بك مستقل وشفاف** معنا، ادخل سيرفر الديسكورد الآن واضغط على زر إنشاء تذكرة:
            </p>
            
            <a 
              href={DISCORD_SERVER_INVITE} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'inline-block', backgroundColor: '#5865F2', color: '#fff', padding: '12px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px', marginTop: '10px', marginBottom: '15px' }}
            >
              🎧 دخول سيرفر الديسكورد واستلام رومك الخاص
            </a>

            <div style={{ marginTop: '15px' }}>
              <button onClick={() => setSubmitted(false)} style={{ backgroundColor: '#334155', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' }}>
                إرسال طلب آخر
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>اسمك الكريم:</label>
              <input name="name" type="text" required placeholder="اكتب اسمك هنا" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#0f172a', color: '#fff', boxSizing: 'border-box' }} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>رقم التواصل (واتساب / يوزر الديسكورد):</label>
              <input name="contact" type="text" required placeholder="مثال: 0500000000 أو Username" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#0f172a', color: '#fff', boxSizing: 'border-box' }} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 'bold', color: '#38bdf8' }}>نوع المشكلة:</label>
              <select name="category" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#0f172a', color: '#fff', boxSizing: 'border-box' }}>
                <optgroup label="🎮 مشاكل الألعاب والقيمنق">
                  <option>هبوط الفريمات والتقطيع (FPS Drops / Stuttering)</option>
                  <option>خروج اللعبة فجأة (Game Crash / Back to Desktop)</option>
                  <option>ارتفاع البنغ واللاغ (High Ping / Packet Loss)</option>
                  <option>مشكلة في برامج حماية الألعاب (Anti-Cheat Errors)</option>
                  <option>تشويه في الجرافيكس أو الألوان داخل اللعبة (Artifacts)</option>
                  <option>تأخير الاستجابة في الماوس أو الكيبورد (Input Lag)</option>
                </optgroup>
                <optgroup label="⚙️ المشاكل العامة للنظام والبي سي">
                  <option>الشاشة الزرقاء / إعادة تشغيل تلقائية (BSOD)</option>
                  <option>الكمبيوتر ما يشتغل أو يعطي شاشة سوداء</option>
                  <option>بطء عام في التشغيل وتصفح الويندوز</option>
                  <option>ارتفاع حرارة المعالج أو كرت الشاشة (Overheating)</option>
                  <option>أصوات عالية أو غريبة من المراوح / الباور</option>
                  <option>مشكلة في التعاريف (Drivers Update / Conflict)</option>
                  <option>مشكلة في الاتصال بالإنترنت أو Wi-Fi</option>
                  <option>انقطاع الصوت أو المايك لا يعمل</option>
                  <option>الفيروسات والبرمجيات الخبيثة (Malware)</option>
                  <option>مشكلة أخرى / استشارة وتجميع جهاز</option>
                </optgroup>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 'bold' }}>اكتب مشكلتك بالتفصيل:</label>
              <textarea name="details" rows={5} required placeholder="اشرح المشكلة، ومتى تظهر لك، ومواصفات جهازك إذا أمكن..." style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#0f172a', color: '#fff', boxSizing: 'border-box', resize: 'vertical' }}></textarea>
            </div>

            <button type="submit" disabled={loading} style={{ backgroundColor: '#0284c7', color: '#fff', border: 'none', padding: '12px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', marginTop: '10px' }}>
              {loading ? "جاري الإرسال..." : "طلب فتح تذكرة خاصة 🚀"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}