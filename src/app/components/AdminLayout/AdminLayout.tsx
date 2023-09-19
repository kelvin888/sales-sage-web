import Link from 'next/link'
import React from 'react'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='flex w-full h-full'>
            <section className='h-full w-[228px] max-w-[228px] border-r-[1px solid rgb(230, 230, 230)] fixed text-white bg-black'>
                <section className='py-0 px-[15px]'>
                    <section className='py-[40px] flex justify-center'>
                        logo
                    </section>
                    <nav className='mt-[50px]'>
                        <ul>
                            <li className='py-[10px] px-[14px]'><Link href="/products">Products</Link></li>
                            <li className='py-[10px] px-[14px]'><Link href="/sales">Sales</Link></li>
                        </ul>
                    </nav>

                </section>


            </section>
            <section className='flex-1 pl-[278px] h-full p-r-[50px] bg-[#f7f7f7] max-w-[3200px]'>
                <main>
                    <section className='sticky top-0 z-[999] pt-[50px] pb-[20px] bg-[#f7f7f7]'>header</section>
                    <div>
                        {children}
                    </div>
                </main>
            </section>
        </main>
    )
}

export default AdminLayout