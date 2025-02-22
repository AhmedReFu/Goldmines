import Head from "next/head";
import Link from "next/link";
import { AiFillSetting } from "react-icons/ai";
import { FaArrowDown } from "react-icons/fa";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { SiGithub, SiLinkedin } from "react-icons/si";



export default function contact() {

    return <>
        <Head>
            <title>Contact | Goldmines Picture</title>
            <script type='text/javascript' src='//pl17402522.effectiveratecpm.com/d9/16/02/d9160275c67db3687e67e1710f806ea8.js'></script>
        </Head>
        <div className="contactpage">
            <div className="contactcard">
                <div className="contactdesign">
                    <div className="topccard">
                        <div className="tcardsvg">
                            <HiMiniBars3BottomLeft />
                            <AiFillSetting />
                        </div>
                        <div className="usercoderimg">
                            <img src="/img/coder.png" alt="" />
                        </div>
                        <div className="usercoderinfo">
                            <h1>Ahmed ReFat</h1>
                            <h3>Web Developer At ReFat IT</h3>
                            <div className="usercodersvg">
                                <Link href='/' ><SiGithub /></Link>
                                <Link href='/' ><SiLinkedin /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="bottomcard">
                        <Link href='/' className="followbtn">Follow</Link>
                        <div className="bcardtext">
                            <p>Learn More About my Profile</p>
                            <FaArrowDown />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}