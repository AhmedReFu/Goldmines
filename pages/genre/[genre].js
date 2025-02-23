import Spinner from '@/components/Spinner';
import useFetchData from '@/hooks/useFetchData';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaEye, FaHeart, FaStar } from 'react-icons/fa6';



export default function genres() {

    const router = useRouter()

    const { genre } = router.query;

    //use hooks
    const { allData, loading } = useFetchData(`/api/getmovies?genre=${genre}`)


    //filter for published movies required
    const filteredMovies = allData.filter(ab => ab.genre === ab.genre).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 20)

    const genremovies = [...filteredMovies].reverse();

    //function for capitalize title
    const capitalizeTitle = (str) => {
        return str.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }

    //for head title
    const pagetitle = `${router.query.genre} - Genre | Goldmines Picture`;

    const capitalizedTitle = capitalizeTitle(pagetitle)


    return (

        <>
            <Head>
                <title>{capitalizedTitle}</title>
                <script type='text/javascript' src='//pl17402522.effectiveratecpm.com/d9/16/02/d9160275c67db3687e67e1710f806ea8.js'></script>
            </Head>

            <section className="genrenamesec">
                <div className="genrename">
                    <h1>Genre : {router.query.genre}</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, quisquam fugit? Quasi, unde incidunt fuga ab quae sunt, ratione mollitia provident nihil cupiditate, hic sapiente?</p>
                </div>
            </section>
            <section className="genremoviesec">
                <div className="genremovie">
                    {loading ? <Spinner /> : <>
                        {genremovies.length === 0 ? <p className='nodatafound'>No Movie Found {genremovies.length}</p> : <>
                            {genremovies.map((movie) => {
                                return <div className="mcard">
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
                            })}
                        </>}
                    </>}
                </div>
            </section>
        </>
    )
}


