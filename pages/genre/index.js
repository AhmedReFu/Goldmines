import Genrecard from '@/components/Genrecard'
import Head from 'next/head'



const category = (props) => {
    return (
        <>
        <Head>
                <title>Genre - Category | Goldmines Picture</title>
                <script type='text/javascript' src='//pl17402522.effectiveratecpm.com/d9/16/02/d9160275c67db3687e67e1710f806ea8.js'></script>
        </Head>
           
            <section className="genrenamesec">
                <div className="genrename">
                    <h1>Explore by Genre</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid soluta et laudantium quaerat? Recusandae maxime nemo fuga corrupti sed reprehenderit reiciendis quo et voluptates similique!
                    </p>
                </div>
            </section>
            <section className="genremoviesec genremovie">
                <Genrecard link={'/genre/action'} img={'/img/action.jpg'} title={"Action Movies"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid soluta et laudantium quaerat"} />
                <Genrecard link={'/genre/adventure'} img={'/img/adventure.jpg'} title={"Adventure Movies"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid soluta et laudantium quaerat"} />
                <Genrecard link={'/genre/animation'} img={'/img/animation.jpg'} title={"Animation Movies"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid soluta et laudantium quaerat"} />
                <Genrecard link={'/genre/comedy'} img={'/img/comedy.jpg'} title={"Comedy Movies"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid soluta et laudantium quaerat"} />
                <Genrecard link={'/genre/crime'} img={'/img/crime.jpg'} title={"Crime Movies"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid soluta et laudantium quaerat"} />
                <Genrecard link={'/genre/drama'} img={'/img/drama.jpg'} title={"Drama Movies"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid soluta et laudantium quaerat"} />
                <Genrecard link={'/genre/fantasy'} img={'/img/fantasy.jpg'} title={"Fantasy Movies"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid soluta et laudantium quaerat"} />
                <Genrecard link={'/genre/horror'} img={'/img/horror.jpg'} title={"Horror Movies"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid soluta et laudantium quaerat"} />
                <Genrecard link={'/genre/mystery'} img={'/img/mystery.jpg'} title={"Mystery Movies"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid soluta et laudantium quaerat"} />
                <Genrecard link={'/genre/romance'} img={'/img/romantic.jpg'} title={"Romance Movies"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid soluta et laudantium quaerat"} />
                <Genrecard link={'/genre/science_fiction'} img={'/img/scifi.jpg'} title={"Sci-Fi Movies"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid soluta et laudantium quaerat"} />
                <Genrecard link={'/genre/thriller'} img={'/img/thriller.jpg'} title={"Thriller Movies"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid soluta et laudantium quaerat"} />
            </section>
        </>
    )
}

export default category