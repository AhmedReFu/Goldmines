import Loader from "@/components/Loader";
import WelcomeAnimation from "@/components/WelcomeAnimation";
import useFetchData from "@/hooks/useFetchData";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleDoubleUp, FaArrowRight, FaCheck, FaDownload, FaEye, FaFilm, FaHeart, FaPhotoVideo, FaPlus, FaStar } from "react-icons/fa";
import { FaClapperboard } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


export default function Home() {

  //fetch data with useHook
  const { allData, loading } = useFetchData("/api/getmovies");

  const [wLoading, setWLoading] = useState(true);

  //video animation function
  useEffect(() => {
    //check if user visited the home page before
    const visitedbefore = sessionStorage.getItem('visitedHome')
    if (visitedbefore) {
      //if visited
      setWLoading(false);
    } else {
      setTimeout(() => {
        setWLoading(false)
        //set flag to indicate that the user has visited the home page
        sessionStorage.setItem('visitedHome', 'false')
      }, 3000);
    }
  }, []);

  //filter for published movies required
  const publishedData = allData.filter((ab) => ab.status === "publish");

  const movies = publishedData.sort((a, b) => b.year - a.year)

  const tranding = allData.sort((a, b) => b.rating - a.rating)

  //this function for filter by genre
  const [selectedGenre, setSelectedGenre] = useState("All Movies");

  const genres = [
    'All Movies',
    "action",
    "adventure",
    "animation",
    "comedy",
    "drama",
    "crime",
    "fantasy",
    "horror",
    "romance",
    "thriller",
    "science_Fiction",
  ];

  const categories = [
    "hindi",
    "tamil",
    "telugu",
    "malayalam",
    "kannada",
    "english",
    "dual_audio",
    "hindi_dubbed",
  ];
  const handleGenreClick = (genre) => {

    if (selectedGenre === genre) {

      setSelectedGenre('All Movies')

    } else {
      setSelectedGenre(genre)
    }

  };


  const filteredData = publishedData.filter(movie => {
    if (selectedGenre === "All Movies") return true;
    if (categories.includes(selectedGenre)) {
      return movie.category === selectedGenre;
    } else {
      return movie.genre.includes(selectedGenre);
    }
  })

  return (
    <>
      <Head>
        <title>Goldmines Picture | Download Dual Audio Hindi Dubbed Movies</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>

      <div>
        {wLoading ? <WelcomeAnimation /> : <div>
          <div className="swiper_top_main ">
            {loading ? <div className="slideimagebx flex flex-center"><Loader /></div> :
              <>
                <Swiper
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  direction="horizontal"
                  loop={true}
                  speed={1200}
                  watchSlidesProgress={true}
                  parallax={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination, Navigation, Autoplay]}
                  scrollbar={{ draggable: true }}
                >

                  {movies.slice(0, 6).map((movie) => {
                    return <SwiperSlide key={movie._id}>
                      <div className="slideimagebx">
                        {/* Background Image */}
                        <img
                          src={movie.bgposter}
                          alt="movie"
                          loading="lazy"
                        />

                        {/* Content */}

                        <div className="content" key={movie._id}>
                          <div className="contentflex">
                            <div className="smalimg">
                              <img
                                src={movie.smposter}
                                alt="movie"
                                loading="lazy"
                              />
                            </div>
                            <div className="movieconte">
                              <h1 id="header_title">{movie.title}</h1>
                              <h6 id="header_dur">
                                Duration: <span>{movie.duration}</span>
                              </h6>
                              <h3 id="header_gen">
                                <span className="star">&#9733;</span>
                                {movie.rating}
                                <span>{movie.genre.join(", ").toUpperCase()}</span>
                              </h3>
                              <div className="btns">
                                <Link href={`/movies/${movie.slug}`}>
                                  <button className="btn_download">
                                    <FaDownload className="faDownload" /> DOWNlOAD{" "}
                                    <span>FREE</span>
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  })}

                  <div className="swiper-pagination"></div>
                  <div className="swiper-scrollbar"></div>
                </Swiper>
              </>}
          </div>
          <div className="tranding_bx ">
            <li><Link href="/all" className="active flex-center"><i><FaAngleDoubleUp className="fas" /></i> Latest</Link></li>
            <li><Link href="/movies" ><i><FaFilm className="fas" /></i> Movies</Link></li>
            <li><Link href="/series" ><i><FaStar className="fas" /></i> Series</Link></li>
            <li><Link href="/all" ><i><FaPlus className="fas" /></i> Recently Added</Link></li>
          </div>

          {loading ? (
            <div className="scrollcardssec flex items-center justify-center h-[15vh]">
              <Loader />
            </div>
          ) : (
              <div className="scrollcardssec">
                <Swiper

                  className="myswiper"
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                  }}
                  direction="horizontal"
                  loop={true}
                  speed={1200}
                  watchSlidesProgress={true}
                  parallax={true}
                  modules={[Pagination, Navigation, Autoplay]}
                  breakpoints={{
                    1587: { slidesPerView: 8, spaceBetween: 5 },
                    1536: { slidesPerView: 7, spaceBetween: 5 },
                    1280: { slidesPerView: 6, spaceBetween: 10 },
                    1024: { slidesPerView: 5, spaceBetween: 10 },
                    992: { slidesPerView: 4, spaceBetween: 10 },
                    768: { slidesPerView: 4, spaceBetween: 10 },
                    640: { slidesPerView: 3, spaceBetween: 10 },
                  400: { slidesPerView: 2, spaceBetween: 10 },
                  370: { slidesPerView: 2, spaceBetween: 10 },
                  300: { slidesPerView: 1, spaceBetween: 10 },
                }}
                >
                  {tranding.map((movie, index) => (
                    <SwiperSlide key={index}>
                      <div className="card">
                        <Link href={`/movies/${movie.slug}`}>
                          <div className="cardimg">
                            <img src={movie.smposter} alt="movie" loading="lazy" />
                          </div>
                          <div className="contents">
                            <h5>{movie.title}</h5>
                            <h6>
                              <span>{movie.year}</span>
                              <div className="rate">
                              <i className="cardfas"><FaHeart /></i>
                              <i className="cardfas"><FaEye /></i>
                              <i className="cardfas"><FaStar /></i>
                              <h6>{movie.rating}</h6>
                            </div>
                          </h6>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
                </Swiper>
              </div>
          )}

          <div className="tranding_bx " style={{ marginTop: '40px' }}>
            <li><Link href="/movies" ><i><FaPhotoVideo className="fas" /></i> Movies</Link></li>
            <li><Link href="/series" ><i><FaFilm className="fas" /></i> Series</Link></li>
            <li><Link href="/series" ><i><FaCheck className="fas" /></i> Original Series</Link></li>
            <li><Link href="/genre" ><i><FaClapperboard className="fas" /></i> Genre</Link></li>
          </div>
          <div className="moviestegs">
            {/* mapping over the genres array to generate button */}
            {genres.slice(0, 16).map(genre => (
              <button key={genre} className={selectedGenre === genre ? 'active' : ''} onClick={() => handleGenreClick(genre)}>{genre}</button>
            ))}

            {categories.map(category => (
              <button key={category} className={selectedGenre === category ? 'active' : ''} onClick={() => handleGenreClick(category)}>{category}</button>
            ))}
          </div>
          <div className="moviescontainer">
            {loading ? <div className="scrollcardssec flex flex-center h-15vh"><Loader /></div> : <>
              {filteredData.length === 0 ? <p className="nodatafound">No Movie Found</p> : <>
                {filteredData.map((movie) => (
                  <div className="card" key={movie._id}>
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
              </>}
            </>}
          </div>
          <div className="nextpagelink">
            <Link href='/all'><button className="cssbuttons_io_button">Next Page <div className="icon"><FaArrowRight /></div></button></Link>
          </div>
        </div>}
      </div>

    </>
  );
}
