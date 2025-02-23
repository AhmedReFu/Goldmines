import Spinner from '@/components/Spinner';
import useFetchData from '@/hooks/useFetchData';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { FaBookmark, FaCheck, FaFacebookSquare, FaImdb, FaThumbsDown, FaThumbsUp, FaWhatsappSquare } from 'react-icons/fa';
import { FaEye, FaHeart, FaShareFromSquare, FaStar } from 'react-icons/fa6';

export default function moviesPost() {

    const router = useRouter()

    const { slug } = router.query;

    //use hooks
    const { allData, loading } = useFetchData(`/api/getmovies?slug=${slug}`)
    const { allMovie } = useFetchData('/api/getmovies')

    //filter  publish movies
    const publishedData = allData.filter(ab => ab.status === "publish") 


    //scroll left right data
    const [scrollPosition, setScrollPosition] = useState(0)

    const scrollLeft = () => {
        const scrollContainer = document.querySelector(".scrollcards");
        scrollContainer.scrollLeft -= 300;
    }

    const scrollRight = () => {
        const scrollContainer = document.querySelector(".scrollcards")
        scrollContainer.scrollLeft += 500;
    }

    //share in whatsapp app
    const [showShareLinks, setShowShareLinks] = useState(false);
    const sharelinkref = useRef(null)
    const handleButtonClick = () => {
        setShowShareLinks(!showShareLinks)
    }
    const handlePageClick = (event) => {
        if (sharelinkref.current && !sharelinkref.current.contains(event.target)) {
            setShowShareLinks(false);
        }
    }
    useEffect(() => {
        //attach the click event listener to the document
        document.addEventListener("click", handlePageClick);
        return () => {
            //cleanup the event listener
            document.removeEventListener("click", handlePageClick)
        }
    }, []);


    return <>
        <>
            {loading ? <Spinner /> : <>
                <Head>
                    <title>{allData && allData[0]?.title}</title>
                    <meta property="og:image" content={allData[0]?.bgposter} />
                    <meta name="og:description" content={allData[0]?.description} />
                    <meta property="og:title" content={allData && allData[0]?.title} />

                    <meta property="og:type" content="video.movie" />
                    <meta property="og:site_name" content="Goldmines Picture" />
                    <script type='text/javascript' src='//pl17402522.effectiveratecpm.com/d9/16/02/d9160275c67db3687e67e1710f806ea8.js'></script>
                </Head>
                <div>

                    <div className="slideimagebx">
                        <img src={allData && allData[0]?.bgposter} alt="no image" loading='lazy' />
                    </div>
                    <div className="mainmoviebx" ref={sharelinkref}>
                        <div className="leftdata">
                            <div className='leftimgbx'>
                                <img src={allData && allData[0]?.smposter} alt="no image" loading='lazy' />
                                <div className="seenonly">
                                    <div className="seenwatch">
                                        <button><FaBookmark className='sebtn' /> Watchlist</button>
                                        <button><FaCheck className='sebtn' /> Seen</button>
                                        <button><FaThumbsUp className='sebtn' /> Like</button>
                                        <button><FaThumbsDown className='sebtn' /> Dislike</button>
                                    </div>
                                    <a target="_blank" href={`${allData && allData[0]?.watchonline}`}><button className='watchmoviebtn'>Click to watch online</button></a>
                                </div>
                            </div>
                            <div className="rating">
                                <h3>RATING</h3>
                                <div className='rate'>
                                    <FaImdb className='faImdb' />
                                    <h4>{allData && allData[0]?.rating} <span>IMDB</span></h4>
                                </div>
                            </div>
                            <div className="rating">
                                <h3>Genre</h3>
                                <h4 className='uppercase'>{allData && allData[0]?.genre.join(', ')}</h4>
                            </div>
                            <div className="rating">
                                <h3>DURATION</h3>
                                <h4 className='uppercase'>{allData && allData[0]?.duration}</h4>
                            </div>
                            <div className="rating">
                                <h3>YEAR</h3>
                                <h4 className='uppercase'>{allData && allData[0]?.year}</h4>
                            </div>
                            <div className="rating">
                                <h3>QUALITY</h3>
                                <h4 className='uppercase'>{allData && allData[0]?.quality}</h4>
                            </div>
                        </div>
                        <div className="rightdata">
                            <div className="movietitle">
                                <h1>{allData && allData[0]?.slug.replaceAll('-', ' ')}</h1>
                                <button onClick={handleButtonClick} className='faShareFromSquare'><FaShareFromSquare /></button>
                            </div>
                            <p className='dpera'>DOWNLOAD FREE NOW</p>
                            <div className='moviedescription'>
                                <article className='movieinfo'>
                                    <h3 className='uppercase'>{allData && allData[0]?.titlecategory} info :</h3>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className='uppercase'>&#9624; {allData && allData[0]?.titlecategory} Name: </td>
                                                <td>{allData && allData[0]?.title}</td>
                                            </tr>
                                            <tr>
                                                <td className='uppercase'>&#9624; {allData && allData[0]?.titlecategory} Release Year: </td>
                                                <td>{allData && allData[0]?.year}</td>
                                            </tr>
                                            <tr className='uppercase'>
                                                <td className='uppercase'>&#9624; {allData && allData[0]?.titlecategory} Genre: </td>
                                                <td>{allData && allData[0]?.genre.join(', ')}</td>
                                            </tr>
                                            <tr>
                                                <td className='uppercase'>&#9624; {allData && allData[0]?.titlecategory} Language: </td>
                                                <td>{allData && allData[0]?.language}</td>
                                            </tr>
                                            <tr>
                                                <td className='uppercase'>&#9624; {allData && allData[0]?.titlecategory} Subtitle: </td>
                                                <td>{allData && allData[0]?.subtitle}</td>
                                            </tr>
                                            <tr>
                                                <td className='uppercase'>&#9624; {allData && allData[0]?.titlecategory} Size: </td>
                                                <td>{allData && allData[0]?.size}</td>
                                            </tr>
                                            <tr>
                                                <td className='uppercase'>&#9624; {allData && allData[0]?.titlecategory} Quality: </td>
                                                <td>{allData && allData[0]?.quality}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </article>
                                <article>
                                    <div className="storyline">
                                        <h3>Sunopsis / Story Line :</h3>
                                        <p className='uppercase'>{allData && allData[0]?.description}</p>
                                    </div>
                                </article>
                                <section className='downloadsec'>
                                    <h2>G-Drive [GDToT] Download Links</h2>
                                    <div className="downloadlinks">
                                        <a target='_blank' href={allData && allData[0]?.downloadlink['480p']}>Download 720p</a>
                                        <a target='_blank' href={allData && allData[0]?.downloadlink['720p']}>Download 480p</a>
                                        <a target='_blank' href={allData && allData[0]?.downloadlink['1080p']}>Download 1080p</a>
                                    </div>
                                </section>
                            </div>
                            <div className='youtubeiframe'>
                                <h3 id='movietrailer' className='uppercase'>{allData && allData[0]?.titlecategory} Trailer: </h3>
                                <iframe width='100%' height='370' src={allData && allData[0]?.youtubelink
                                } frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                            </div>
                        </div>

                    </div>
                    <div className="raletedmovies">
                        <h3>LATEST MOVIES :</h3>
                        <div className="scrollcards">
                            {publishedData.map((movie) => (
                                <div className="card" key={movie.slug}>
                                    <Link href={`/movies/${movie.slug}`}>
                                        <div className="cardimg">
                                            <img src={movie.smposter} alt="movie" loading="lazy" />
                                        </div>
                                        <div className="contents">
                                            <h5>{movie.title}</h5>
                                            <h6>
                                                <span>{movie.year}</span>
                                                <div className="rate">
                                                    <i className="cardfas">
                                                        <FaHeart />
                                                    </i>
                                                    <i className="cardfas">
                                                        <FaEye />
                                                    </i>
                                                    <i className="cardfas">
                                                        <FaStar />
                                                    </i>
                                                    <h6>{movie.rating}</h6>
                                                </div>
                                            </h6>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <div className="cardbuttons">
                            <button onClick={scrollLeft} className="cardleft">&#8592;</button>
                            <button onClick={scrollRight} className="cardRight">&#8594;</button>
                        </div>
                    </div>
                    <div className="sharelinks" style={{ display: showShareLinks ? 'flex' : 'none' }}>
                        {/* <div className="svg">
                        <Link href={`https://www.instagram.com/sharer.php?u=${encodeURIComponent(`https://goldminespicture.xyz/movies/${router.query.slug}`)}`} target='_blank'>
                            <FaInstagram />
                        </Link>

                    </div> */}
                        <div className="svg">
                            <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://goldminespicture.xyz/movies/${router.query.slug}`)}`} target='_blank'>
                                <FaFacebookSquare />
                            </Link>

                        </div>
                        <div className="svg">
                            <Link href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`https://goldminespicture.xyz/movies/${router.query.slug}`)}`} target='_blank'>
                                <FaWhatsappSquare />
                            </Link>

                        </div>
                    </div>
                </div>
            </>}
        </>
    </>
}