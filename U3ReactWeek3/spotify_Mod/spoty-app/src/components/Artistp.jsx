import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";


const Artistp = () =>{
    const urlid = useParams();
    console.log(urlid)
    const [albums, setalbums] = useState({data:[]});

   const loadata = async () => {
        

        let headers = new Headers({
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key":
            "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
        });

        try {
          let response = await fetch(
            "https://striveschool-api.herokuapp.com/api/deezer/artist/" +
              urlid.id,
            {
              method: "GET",
              headers,
            }
          );

          if (response.ok) {
            let artist = await response.json();

            // displaying the playButton
            let playButton = document.querySelector("#playButton");
            playButton.classList.remove("d-none");
            playButton.classList.add("d-inline");

            // displaying the followButton
            let followButton = document.querySelector("#followButton");
            followButton.classList.remove("d-none");
            followButton.classList.add("d-inline");

            // setting the artist name
            let titleMain = document.querySelector(".titleMain");
            titleMain.innerHTML = artist.name;

            // setting the followers section
            let followers = document.querySelector("#followers");
            followers.innerText = artist.nb_fan + " followers";

            let tracksResponse = await fetch(
              // await the fetch of the artist songs
              "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
                artist.name,
              {
                method: "GET",
                headers,
              }
            );
            let responsere = await tracksResponse.json()
                setalbums(responsere)
        }} catch (exception) {
          // ex.: Url is not correct, Internal Server Error
          document.querySelector("#apiLoaded").innerHTML = exception;
        }
      };

      
      useEffect(()=>{
        loadata()
      },[])
    return(<>
        <div className="container-fluid">
          <div className="row">
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
                <div className="col-12 col-md-10 col-lg-10 mt-5">
                  <h2 className="titleMain"> </h2> 
                  <div id="followers" />
                  <div
                    className="d-flex justify-content-center"
                    id="button-container"
                  >
                    <button
                      className="btn btn-success mr-2 mainButton d-none"
                      id="playButton"
                    >
                      PLAY
                    </button>
                    <button
                      className="btn btn-outline-light mainButton d-none"
                      id="followButton"
                    >
                      FOLLOW
                    </button>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
                  <div className="mt-4 d-flex justify-content-start">
                    <h2 className="text-white font-weight-bold">Tracks</h2>
                  </div>
                  <div className="pt-5 mb-5">
                    {console.log(albums)}
                    <div className="row" id="apiLoaded"> <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                      id="rockSection">{  albums.data.map((e)=>(
                            <div classN="col text-center" key={e.id}>
                            <Link to={"/album/"+ e.album.id}>
                              <img classN="img-fluid" src={
                               e.album.cover_medium
                              } alt="1" />
                            </Link>
                            <p>
                              <Link to={"/album/"+ e.album.id}>
                                Album: {
                                  e.album.title.length < 16
                                    ? `${e.album.title}`
                                    : `${e.album.title.substring(0, 16)}...`
                                }
                              </Link>
                              <Link to="/">
                                Artist: {e.artist.name}
                              </Link>
                            </p>
                          </div>
                          ))}</div> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      )
}


export default Artistp;