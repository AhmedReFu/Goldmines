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
                            <a href="https://www.dmca.com/Protection/Status.aspx?ID=6da34590-5510-4620-a257-c6a019d089bf&refurl=https://goldminespicture.xyz/" title="DMCA.com Protection Status" class="dmca-badge"> <img src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=6da34590-5510-4620-a257-c6a019d089bf" alt="DMCA.com Protection Status" /></a>  <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
                            <p className=''>Copyright © {year} - All right reserved by Goldmines Picture</p>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer