
import Spinner from "@/components/Spinner";
import useFetchData from "@/hooks/useFetchData";
import Head from "next/head";
import Link from "next/link";
import { FaEye, FaHeart, FaStar } from "react-icons/fa6";

export default function movies() {

    //fetch data with useHook
    const { allData, loading } = useFetchData("/api/getmovies");

    //filter data
    const publishedData = allData.filter((ab) => ab.status === "publish");

    //now filter data by movies
    const moviesData = publishedData.filter(ab => ab.titlecategory === 'movies')


    return <>
        <Head>
            <title>Movies | Goldmines Picture</title>
            <meta name="description" content="All the movies" />
        </Head>
        <section className="genrenamesec">
            <div className="genrename">
                <h1>Movies</h1>
                <p>Explosive stunts, heart-stopping battles, and electrifying thrills. Heroes charge fearlessly into danger, unleashing their skills in jaw-dropping action sequences that keep audiences glued to the edge of their seats.</p>
            </div>
        </section>
        <section className="genremoviesec">
            <div className="genremovie">
                {loading ? <Spinner /> : <>
                    {moviesData.map((movie) => {
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
            </div>
        </section>
    </>
}