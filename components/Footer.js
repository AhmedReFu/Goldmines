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
                        </div>
                        <div className="quicklink">
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/movies'>Movies</Link></li>
                            <li><Link href='/series'>Series</Link></li>
                            <li><Link href='/genre'>Genre</Link></li>
                            <li><Link href='/all'>All Movies</Link></li>
                            <li><Link href='/genre'>Category</Link></li>
                            <li><Link href='/contact'>Contact</Link></li>


                        </div>

                    </div>
                    <a href="https://www.dmca.com/Protection/Status.aspx?ID=6da34590-5510-4620-a257-c6a019d089bf&refurl=https://goldminespicture.xyz/" title="DMCA.com Protection Status" className="dmca-badge"> <img src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=6da34590-5510-4620-a257-c6a019d089bf" alt="DMCA.com Protection Status" /></a>
                    <div className="copyright">

                        <p className=''>Copyright © {year} - All right reserved by Goldmines Picture</p>
                    </div>
                    <div className="fperasec">
                        <p>Disclaimer:- We Dose not host any files on it's servers. All files or contents hosted on third party websites | we dose not accept responsibility for contents hosted on third party websites. We just index those links which are already available in internet. However, we always be careful not to share any virus files.</p>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer