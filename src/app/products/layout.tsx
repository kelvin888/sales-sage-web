import AdminLayout from '@/components/AdminLayout/AdminLayout'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AdminLayout>
            {children}
        </AdminLayout>
    )
}
