
import React from "react"
import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import Spotlogo from "../assets/Spotify_Logo.png"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


 const Home = () => {
    const [Songsearch, setSongsearch] = useState([])
    const [newrockArtists, setrockArtists] = useState([])
    const [newpopArtists, setpopArtists] = useState([])
    const [newhipHopArtists, sethipHopArtists] = useState([])



    let rockArtists = [
        'queen',
        'u2',
        'thepolice',
        'eagles',
        'thedoors',
        'oasis',
        'thewho',
        'bonjovi',
      ]

      let popArtists = [
        'maroon5',
        'coldplay',
        'onerepublic',
        'jamesblunt',
        'katyperry',
        'arianagrande',
      ]

      let hipHopArtists = [
        'eminem',
        'snoopdogg',
        'lilwayne',
        'drake',
        'kanyewest',
      ]

      let headers = new Headers({
        // sets the headers
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
      })

      const search = async (e) => {
        //let div = document.querySelector('#searchResults .row')
        //div.innerHTML = ''
        let searchQuery = e.target.value // gets the value from the search box
        console.log(searchQuery)
        if (searchQuery.length > 2) {
          //if there's a value in the search box => fetch the information from rapidapi & display the result
          document.querySelector('#searchResults').style.display = 'block'

          try {
            let response = await fetch(
              'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
                searchQuery,
              {
                method: 'GET',
                headers,
              }
            ) // gets the information

            if (response.ok) {
              let result = await response.json() // transforms the response to json
              let songs = result.data // gets the songs info
                setSongsearch(songs)
                    console.log(songs)
             
            } else {
              console.log('error')
            }
          } catch (err) {
            console.log(err)
          }
        } else {
          //else just hide the section!
          document.querySelector('#searchResults').style.display = 'none'
        }
      }

     const  handleArtist = async (artistName, sezione) => {
        // artistName = "eminem", "metallica", etc...
        // domQuerySelector = "#rockSection" etc...
        try {
          let response = await fetch(
            'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
              artistName,
            {
              method: 'GET',
              headers,
            }
          ) // gets the information
          if (response.ok) {
            let result = await response.json() // transforms the response to json
            let songInfo = result.data
            switch (sezione) {
                case 'rockSection':
                    setrockArtists(songInfo)
                    console.log("ROCK",songInfo)
                    break;
                case "popSection":
                    setpopArtists(songInfo)
                    console.log("POP",songInfo)
                    break;
                case 'hipHopSection':
                    sethipHopArtists(songInfo)
                    console.log("HIPHOP",songInfo)
                    break;
            
                default:
                    break;
            }
            
          } else {
            console.log('error')
          }
        } catch (err) {
          console.log(err)
        }
      }

     const lesgo = async () => {
        let rockRandomArtists = []
        let popRandomArtists = []
        let hipHopRandomArtists = []

        document.querySelector('#searchField').value = '' // empties search field on page load



        while (rockRandomArtists.length < 1) {
          // pushes elements inside the array until it has 4 strings
          let artist =
            rockArtists[Math.floor(Math.random() * rockArtists.length)] // select an element from the array with an index between 0 and 7
          if (!rockRandomArtists.includes(artist)) {
            // checks if the artist is not already present in the array
            rockRandomArtists.push(artist) // pushes the artist in the array
          }
        }

        while (popRandomArtists.length < 1) {
          let artist = popArtists[Math.floor(Math.random() * popArtists.length)]
          if (!popRandomArtists.includes(artist)) {
            popRandomArtists.push(artist)
          }
        }

        while (hipHopRandomArtists.length < 1) {
          let artist =
            hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)]
          if (!hipHopRandomArtists.includes(artist)) {
            hipHopRandomArtists.push(artist)
          }
        }

        for (let j = 0; j < rockRandomArtists.length; j++)
          await handleArtist(rockRandomArtists[j], 'rockSection')

        for (let k = 0; k < popRandomArtists.length; k++)
          await handleArtist(popRandomArtists[k], 'popSection')

        for (let l = 0; l < hipHopRandomArtists.length; l++)
          await handleArtist(hipHopRandomArtists[l], 'hipHopSection')
      }

      useEffect(()=>{
        lesgo();

      },[])


    return (
    
        <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <nav
                className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
                id="sidebar"
              >
                <div className="nav-container">
                  <Link className="navbar-brand" href="index.html">
                    <img
                      src={Spotlogo}
                      alt="Spotify_Logo"
                      width={131}
                      height={40}
                    />
                  </Link>
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
                          <Link className="nav-item nav-link" to="/">
                            <i className="fas fa-home fa-lg" />
                            &nbsp; Home
                          </Link>
                        </li>
                        <li>
                          <Link className="nav-item nav-link" to="/">
                            <i className="fas fa-book-open fa-lg" />
                            &nbsp; Your Library
                          </Link>
                        </li>
                        <li>
                          <div className="input-group mt-3">
                            <input
                              type="text"
                              className="form-control mb-2"
                              id="searchField"
                              placeholder="Search"
                              aria-label="Search"
                              aria-describedby="basic-addon2"
                              onChange={search}
                            />
                            <div
                              className="input-group-append"
                              style={{ marginBottom: "4%" }}
                            >
                              <button
                                className="btn btn-outline-secondary btn-sm"
                                type="button"
                                id="button-addon1"
                                onclick="search()"
                              >
                                GO
                              </button>
                            </div>
                          </div>
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
            <div className="col-12 col-md-9 offset-md-3 mainPage">
              <div className="row">
                <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                  <a href="/">TRENDING</a>
                  <a href="/">PODCAST</a>
                  <a href="/">MOODS AND GENRES</a>
                  <a href="/">NEW RELEASES</a>
                  <a href="/">DISCOVER</a>
                </div>
              </div>
              <div className="row">
                <div className="col-10">
                  <div id="searchResults" style={{ display: "none" }}>
                    <h2>Search Results </h2>
                    {console.log("sono songsearch",Songsearch)}

                    {Songsearch ? <Row>
                      {Songsearch.map((e)=>(
                            <Col classN="col text-center" id={e.id} key={e.id}>
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
                              <Link to={"/artist/" + e.artist.id}>
                                Artist: {e.artist.name}
                              </Link>
                            </p>
                          </Col>
                              ))}</Row> : <div>""""""""</div>
                   }

                   {/* {Songsearch ? <div>
                      {Songsearch.map((e)=>(
                            <div classN="col text-center" id={e.id}>
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
                              ))}</div> : ''}*/}
                         
               </div>
                </div>
              </div>
              <div className="row">
                <div className="col-10">
                  <div id="rock">
                    <h2>Rock Classics</h2>

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                      id="rockSection">{  newrockArtists.slice(7,11).map((e)=>(
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
                              <Link to={"/artist/" + e.artist.id}>
                                Artist: {e.artist.name}
                              </Link>
                            </p>
                          </div>
                          ))}</div>
                    
                    <div
                      
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-10">

                  <div id="pop">

                    <h2>Pop Culture</h2>

                    <div
                      className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                      id="popSection"
                    >{  newpopArtists.slice(7,11).map((e)=>(
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
                          <Link to={"/artist/" + e.artist.id}>
                            Artist: {e.artist.name}
                          </Link>
                        </p>
                      </div>
                      ))}</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-10">
                  <div id="hiphop">
                    <h2>#HipHop</h2>
                     <div
                      className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                      id="popSection"
                    >{  newhipHopArtists.slice(7,11).map((e)=>(
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
                          <Link to={"/artist/" + e.artist.id}>
                            Artist: {e.artist.name}
                          </Link>
                        </p>
                      </div>
                      ))}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </>
      
    )
}



export default Home;