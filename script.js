
function linkToQueen() {
    window.location.href = "artist.html";
}
let toQueenArtist = document.getElementById("queen");
toQueenArtist.addEventListener("click", linkToQueen);

function linkToQueenAlbum() {
    window.location.href = "album.html";
}
let toQueenAlbum = document.getElementById("queen-album");
toQueenAlbum.addEventListener("click", linkToQueenAlbum);


function getSongE() {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
        method: "GET",
        headers: {
            "x-rapidapi-key":
                "f4bc1099cdmsh9979023f208b93bp1e96a0jsn6d32212a8ee2",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
    })
        .then((response) => response.json())
        .then((result) => {
            displaySong(result.data);
        })
        .catch((err) => {
            console.error(err);
        });
}

function getSongM() {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", {
        method: "GET",
        headers: {
            "x-rapidapi-key":
                "f4bc1099cdmsh9979023f208b93bp1e96a0jsn6d32212a8ee2",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
    })
        .then((response) => response.json())
        .then((result) => {
            displaySong(result.data);
        })
        .catch((err) => {
            console.error(err);
        });
}

function getSongB() {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=behemoth", {
        method: "GET",
        headers: {
            "x-rapidapi-key":
                "f4bc1099cdmsh9979023f208b93bp1e96a0jsn6d32212a8ee2",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
    })
        .then((response) => response.json())
        .then((result) => {
            displaySong(result.data);
        })
        .catch((err) => {
            console.error(err);
        });
}

const displaySong = function (songs) {
    const infoRight = document.querySelector(".info-right");

    let newSmallCon = document.createElement("div");
    newSmallCon.setAttribute("class", "small-container");
    let headingSeeAll = document.createElement("div");
    headingSeeAll.setAttribute("class", "heading-see-all");
    let playlistTitle = document.createElement("h4");
    playlistTitle.setAttribute("class", "playlist-area-title");
    playlistTitle.innerHTML = `${songs[0].artist.name}`;
    let seeAll = document.createElement("span");
    seeAll.setAttribute("class", "see-all")
    seeAll.innerHTML = "SEE ALL";

    let row = document.createElement("div");
    row.setAttribute("class", "row mt-2 big-playlist-row");

    headingSeeAll.appendChild(playlistTitle);
    headingSeeAll.appendChild(seeAll);
    newSmallCon.appendChild(headingSeeAll);
    newSmallCon.appendChild(row);

    infoRight.appendChild(newSmallCon);

    for (let song of songs) {
        row.innerHTML += `
        <div
                class="
                  col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2
                  big-play-list-col
                "
              >
                <div class="card big-playlist-no-border-radius">
                  <div class="big-playlist-with-btn-play">
                    <img
                      src="${song.album.cover_xl}"
                      class="card-img-top big-playlist-img-no-radius"
                      alt="..."
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="bi bi-play-circle-fill play-with-animation"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"
                      />
                    </svg>
                  </div>
                  <div class="card-body big-card-body">
                    <h5 class="big-playlist-title">${song.title}</h5>
                    <span class="big-playlist-name">${song.artist.name}</span>
                  </div>
                </div>
              </div>
                `;
    }

}