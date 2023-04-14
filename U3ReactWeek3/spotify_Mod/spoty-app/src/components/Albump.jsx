import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";




const Albump = () => {
    const urlid = useParams()
    const [album, setalbum] = useState({tracks:{
        data : []
    }})

    /*function song(track) {
        return `
            <div class="py-3 trackHover">
                <a href="#" class="card-title trackHover px-3" style="color:white" >${track.title
            }</a>
                <small class="duration" style="color:white">${Math.floor(
                parseInt(track.duration) / 60 // setting the duration minutes
            )}:${parseInt(track.duration) % 60 < 10
                ? "0" + (parseInt(track.duration) % 60) // checking che duration seconds, if they are less than 10 a 0 is prefixed
                : parseInt(track.duration) % 60
            }</small>
            </div>`;
    }

    function albumArt(album) {
        return `
            <img src="${album.cover}" class="card-img img-fluid" alt="Album" />
            <div class="mt-4 text-center">
                <p class="album-title">${album.title}</p>
            </div>
            <div class="text-center">
                <p class="artist-name">${album.artist.name}</p>
            </div>
            <div class="mt-4 text-center">
                <button id="btnPlay" class="btn btn-success" type="button">Play</button>
            </div>`;
    }*/

    const fetchata23 = async () => {
        
        let headers = new Headers({
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key":
                "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
        });

        try {
            let response = await fetch(
                "https://striveschool-api.herokuapp.com/api/deezer/album/" + urlid.id ,
                {
                    method: "GET",
                    headers,
                }
            );

            if (response.ok) {
                let album = await response.json(); // transforms the response into a JSON
                        setalbum(album) // creates the albumArt for the img-container
              
            } else {
                // something went wrong with the request --> i.e. headers missing, wrong HTTP Method
                document.querySelector("#img-container").innerHTML =
                    "NOT OK" + (await response.text());
            }
        } catch (exception) {
            // ex.: Url is not correct, Internal Server Error
            document.querySelector("#img-container").innerHTML = exception;
        }
    };


    useEffect(() => {
        fetchata23();
    }, [])




    return (

        <>
            <div className="container-fluid">
                <div className="row">
                    {/*SIDEBAR VERTICAL*/}
                    <div className="col-2">
                        <nav
                            className="navbar navbar-expand-lg navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
                            id="sidebar"
                        >
                            <div className="nav-container">
                                <a className="navbar-brand" href="index.html">
                                    <img
                                        src="logo/Spotify_Logo.png"
                                        alt="Spotify_Logo"
                                        width={131}
                                        height={40}
                                    />
                                </a>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarNavAltMarkup"
                                    aria-controls="navbarNavAltMarkup"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav">
                                        <ul>
                                            <li>
                                                <a className="nav-item nav-link" href="index.html">
                                                    <i className="fas fa-home fa-lg" />
                                                    &nbsp; Home
                                                </a>
                                            </li>
                                            <li>
                                                <a className="nav-item nav-link" href="/">
                                                    <i className="fas fa-book-open fa-lg" />
                                                    &nbsp; Your Library
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="nav-btn">
                                <button className="btn signup-btn" type="button">
                                    Sign Up
                                </button>
                                <button className="btn login-btn" type="button">
                                    Login
                                </button>
                                <a href="/">Cookie Policy</a> |<a href="/"> Privacy</a>
                            </div>
                        </nav>
                    </div>
                    {/*END SIDEBAR VERTICAL*/}
                    {/*MAIN*/}
                    <div className="col-12 col-md-9 offset-md-3 mainPage">
                        <div className="row mb-3">
                            <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                                <a href="/">TRENDING</a>
                                <a href="/">PODCAST</a>
                                <a href="/">MOODS AND GENRES</a>
                                <a href="/">NEW RELEASES</a>
                                <a href="/">DISCOVER</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 pt-5 text-center" id="img-container"> <img src={album.cover} alt="" /> </div>
                            <div className="col-md-8 p-5">
                                <div className="row">
                                    <div className="col-md-10 mb-5" id="trackList">

                                        {console.log(album)}
                                        {album.tracks.data ? <div>{ (album.tracks.data).map((e)=>{
                                            return (<div><div class="mt-4 text-center">
                                                <p class="album-title">{e.title}</p>
                                            </div>
                                            <div class="text-center">
                                                <Link to={"/artist/"+ album.artist.id} class="artist-name">{e.artist.name}</Link>
                                            </div>
                                            <div class="mt-4 text-center">
                                                <button id="btnPlay" class="btn btn-success" type="button">Play</button>
                                            </div></div>)})  }</div> : ''}

                                        </div> 
                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*END MAIN*/}
            {/*NAVBAR FLEX-BOTTOM*/}
            <div className="container-fluid fixed-bottom bg-container pt-1">
                <div className="row">
                    <div className="col-lg-10 offset-lg-2">
                        <div className="row">
                            <div className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
                                <div className="row">
                                    <a href="/">
                                        <img src="playerbuttons/Shuffle.png" alt="shuffle" />
                                    </a>
                                    <a href="/">
                                        <img src="playerbuttons/Previous.png" alt="shuffle" />
                                    </a>
                                    <a href="/">
                                        <img src="playerbuttons/Play.png" alt="shuffle" />
                                    </a>
                                    <a href="/">
                                        <img src="playerbuttons/Next.png" alt="shuffle" />
                                    </a>
                                    <a href="/">
                                        <img src="playerbuttons/Repeat.png" alt="shuffle" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center playBar py-3">
                            <div className="col-8 col-md-6">
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-valuenow={0}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*END NAVBAR BOTTOM*/}
        </>)
}


export default Albump;