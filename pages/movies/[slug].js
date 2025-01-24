import useFetchData from '@/hooks/useFetchData';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FaBookmark, FaCheck, FaImdb, FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import { FaShareFromSquare } from 'react-icons/fa6';

export default function moviesPost() {

    const router = useRouter()

    const { slug } = router.query;

    //use hooks
    const { allData, loading } = useFetchData(`/api/getmovies?slug=${slug}`)
    const { allmovie } = useFetchData('/api/getmovies')

    //filter  publish movies
    const publishedData = allData.filter(ab => ab.status === "publish")



    return <>
        <>
            <Head>
                <title>{slug}</title>
            </Head>
            <div>
                <div className="slideimagebx">
                    <img src={allData && allData[0]?.bgposter} alt="no image" loading='lazy' />
                </div>
                <div className="mainmoviebx">
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
                            <button className='faShareFromSquare'><FaShareFromSquare /></button>
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
                    </div>
                </div>
            </div>
        </>
    </>
}