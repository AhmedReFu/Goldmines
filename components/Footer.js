import Link from "next/link"

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <>
            <footer className='footer'>
                <section className="m-auto footersec">
                    <div className="fcontent">
                        <div className="flogo">
                            <h1>
                                <Link href='/'>Goldmines Picture</Link>

                            </h1>
                            <h1 className=''>Copyright © {year} - All right reserved by <span> <Link href='/'>Goldmines Picture</Link></span></h1>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer