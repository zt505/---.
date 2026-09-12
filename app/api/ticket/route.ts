import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, issue, contact } = await req.json();

    const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
    const GUILD_ID = process.env.DISCORD_GUILD_ID;
    const CATEGORY_ID = process.env.DISCORD_CATEGORY_ID;

    if (!BOT_TOKEN || !GUILD_ID || !CATEGORY_ID) {
      return NextResponse.json(
        { success: false, error: 'تأكد من ضبط متغيرات البيئة في Vercel' },
        { status: 500 }
      );
    }

    // توليد رقم تذكرة عشوائي مثل ticket-0042
    const ticketNum = String(Math.floor(1000 + Math.random() * 9000));
    const channelName = `ticket-${ticketNum}`;

    // 1. إنشاء قناة نصية خاصة بالتذكرة في ديسكورد
    const channelResponse = await fetch(
      `https://discord.com/api/v10/guilds/${GUILD_ID}/channels`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bot ${BOT_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: channelName,
          type: 0, // Text Channel
          parent_id: CATEGORY_ID,
        }),
      }
    );

    const channelData = await channelResponse.json();

    if (!channelResponse.ok) {
      console.error('Discord API Error:', channelData);
      return NextResponse.json(
        { success: false, error: 'فشل إنشاء الروم في ديسكورد' },
        { status: 500 }
      );
    }

    // 2. إرسال بطاقة التفاصيل المنسقة داخل الروم الجديد
    await fetch(
      `https://discord.com/api/v10/channels/${channelData.id}/messages`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bot ${BOT_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          embeds: [
            {
              title: `🚨 طلب فتح تذكرة جديدة: [ TK-${ticketNum} ]`,
              description: `قام العميل **${name || 'مجهول'}** بتقديم طلب دعم، وتم إنشاء هذا الروم الخاص بالتذكرة تلقائياً.`,
              color: 3447003, // لون أزرق
              fields: [
                {
                  name: '👤 اسم العميل',
                  value: name || 'غير محدد',
                  inline: true,
                },
                {
                  name: '📞 طريقة التواصل',
                  value: contact || 'غير محدد',
                  inline: true,
                },
                {
                  name: '🆔 الرقم المرجعي',
                  value: `TK-${ticketNum}`,
                  inline: true,
                },
                {
                  name: '📝 تفاصيل المشكلة',
                  value: issue || 'لا يوجد تفاصيل',
                },
              ],
              footer: {
                text: 'بن مزهر للحلول التقنية • نظام إدارة الدعم الفني',
              },
              timestamp: new Date().toISOString(),
            },
          ],
        }),
      }
    );

    return NextResponse.json({
      success: true,
      ticketNumber: `TK-${ticketNum}`,
      channelName: channelData.name,
    });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { success: false, error: 'حدث خطأ في الخادم' },
      { status: 500 }
    );
  }
}
