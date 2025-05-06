import useFetchData from "@/hooks/useFetchData";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaBars, FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function Header() {
  //navbar
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("nav");
      header.classList.toggle("sticky", window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [searchbar, setSearchbar] = useState(false);

  const [activeLink, setActiveLink] = useState("/");

  //search function by title
  const [movieShortname, setMovieShortname] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);
  //fetch data form api
  const { allData, loading } = useFetchData("/api/getmovies");

  //filter for published movies required
  const publishedData = allData.filter(ab => ab.status === 'publish')

  //function to handle search 
  useEffect(() => {
    if (!movieShortname.trim()) {
      setSearchResult([])
      return
    }
    const filteredMovies = publishedData.filter(movie => {
      return (
        movie.title.toLowerCase().includes(movieShortname.toLowerCase()) ||
        movie.year.toLowerCase().includes(movieShortname.toLowerCase())
      )
    });
    setSearchResult(filteredMovies);
  }, [movieShortname])

  const handleMovieClick = () => {
    setMovieShortname('');
    setSearchbar(false);
  }

  const searchRef = useRef(null)

  //function outside click search bar close
  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setMovieShortname('')
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setClicked(false);
  };

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);
  //navbar
  const handleNavbarOpen = () => {
    setNavbar(!navbar);
  };

  const handleNavbarClose = () => {
    setNavbar(false);
  };

  //searchbar
  const handleSearchbarOpen = () => {
    setSearchbar(!searchbar);
  };

  const handleSearchbarClose = () => {
    setSearchbar(false);
  };

  return (
    <>
      <nav className="header flex-bw">
        <h1 className="logo" >
          <a href="/" style={{ "color": "white" }}>Goldmines Picture</a>
        </h1>
        <form className={searchbar ? "search_bar active" : "search_bar"}>
          <input type="text" placeholder="Search Movies..." value={movieShortname} onChange={(e) => setMovieShortname(e.target.value)} />
          <div className="searchclose" onClick={handleSearchbarClose}><IoClose /></div>
          {movieShortname && (
            <div className="search_results">
              <h2>---:Search Result:</h2>
              <ul>
                {searchResult.length > 0 ? (
                  searchResult.slice(0, 20).map((movie) => (
                    <Link onClick={handleMovieClick} key={movie._id} href={`/movies/${movie.slug}`}>
                      <div className="moviesearchlist">
                        <div>
                          <img src={movie.smposter} width={80} height={110} alt="image" />
                        </div>
                        <div className="searchbarinfo">
                          <h5>{movie.title}</h5>
                          <h4>Rating: <FaStar /><span>{movie.rating}</span></h4>
                          <h4>Release Year: {movie.year}</h4>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p>No Movie Found</p>
                )}
              </ul>
            </div>
          )}
        </form>

        <div id={navbar ? "navbaractive" : "navbar"}>
          <div className="navlogomovie">
            <h1 className="logo" data-text="&nbsp;Goldmines Picture&nbsp;">
              <a href="/">&nbsp;Goldmines Picture&nbsp;</a>
            </h1>
            <div className="navclosesvg" onClick={handleNavbarClose}>
              <IoClose />
            </div>
          </div>
          <ul
            className={clicked ? "navbar active" : "navbar"}
            onClick={handleNavbarClose}
          >
            <li>
              <Link
                href="/"
                className={activeLink === "/" ? "active" : ""}
                onClick={() => handleLinkClick("/")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/movies"
                className={activeLink === "/movies" ? "active" : ""}
                onClick={() => handleLinkClick("/movies")}
              >
                Movies
              </Link>
            </li>
            <li>
              <Link
                href="/series"
                className={activeLink === "/series" ? "active" : ""}
                onClick={() => handleLinkClick("/series")}
              >
                Series
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={activeLink === "/contact" ? "active" : ""}
                onClick={() => handleLinkClick("/contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="mobile">
          <BiSearch className="opensearchsvg" onClick={handleSearchbarOpen} />
          <FaBars onClick={handleNavbarOpen} />
        </div>
      </nav>
    </>
  );
}
