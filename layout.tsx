import { BluetoothProvider } from '@/contexts/BluetoothContext'
import { Layout } from '@/components/layout'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <BluetoothProvider>
          <Layout>
            {children}
          </Layout>
        </BluetoothProvider>
      </body>
    </html>
  )
}

