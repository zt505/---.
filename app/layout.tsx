export const metadata = {
  title: 'بن مزهر للحلول التقنية',
  description: 'موقع Next.js',
  verification: {
    google: '3wCfu4oI0xpeOPtU9FPVhsW0Q_tMy0Mpa6W5Hbkronc',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
