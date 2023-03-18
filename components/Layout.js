import Head from "next/head"
import Link from "next/link"

function Layout({title,children}){
    return (
        <>
            <Head>
                <title>{`${title}`}</title>
            </Head>
            <div className='flex min-h-screen flex-col justify-between'>
                <header>

                </header>
                <main className='container m-auto mt-4 px-4'>{children}</main>
                <footer className='flex justify-center items-center h-10'>

                </footer>
            </div>
        </>
    )
}

export default Layout