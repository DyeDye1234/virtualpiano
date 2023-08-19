import React, { useState, useRef, useEffect } from "react";
import "./Sheet.css";
import image from "./assets/Amazing_grace.jpg";
import image1 from "./assets/Happy_birthday.jpg";
import image2 from "./assets/Angels.jpg";
import image3 from "./assets/Anvil.jpg";
import image4 from "./assets/Auld.jpg";
import image5 from "./assets/Away.jpg";
import image6 from "./assets/Barcarolle.jpg";
import image7 from "./assets/Battle.jpg";
import image8 from "./assets/Blue.jpg";
import image9 from "./assets/Bridal.jpg";
import image10 from "./assets/When.jpg";
import image11 from "./assets/We.jpg";

const songs = [
  {
    id: 1,
    title: "Amazing Grace",
    sheet: image,
  },
  {
    id: 2,
    title: "Happy Birthday to You",
    sheet: image1,
  },
  {
    id: 3,
    title: "Angels We Have Heard On High",
    sheet: image2,
  },
  {
    id: 4,
    title: "Anvil Chorus",
    sheet: image3,
  },
  {
    id: 5,
    title: "Auld Lang Syne",
    sheet: image4,
  },
  {
    id: 6,
    title: "Away in A Manger",
    sheet: image5,
  },
  {
    id: 7,
    title: "Barcarolle",
    sheet: image6,
  },
  {
    id: 8,
    title: "Battle Hymm of the Republic",
    sheet: image7,
  },
  {
    id: 9,
    title: "Blue Bells of Scotland",
    sheet: image8,
  },
  {
    id: 10,
    title: "Bridal Chorus",
    sheet: image9,
  },
  {
    id: 11,
    title: "When the Saints Go Marching In",
    sheet: image10,
  },
  {
    id: 12,
    title: "We Wish You a Merry Chirstmas",
    sheet: image11,
  },
];

function SheetMusic() {
  const containerElement = useRef(null);
  const [count, setCount] = useState(10);
  const [duration, setDuration] = useState(500);
  const [selectedSong, setSelectedSong] = useState(songs[0]);
  const [scrollIntervalId, setScrollIntervalId] = useState(null);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  const startScrolling = (newDirection) => {
    stopScrolling();
    const scrollInterval = setInterval(() => {
      if (containerElement.current) {
        containerElement.current.scrollTop += newDirection * count;
      }
    }, duration);
    setScrollIntervalId(scrollInterval);

    // Update the scrolling direction state
    if (newDirection === 1) {
      setIsScrollingUp(true);
    } else if (newDirection === -1) {
      setIsScrollingDown(true);
    }
  };

  const stopScrolling = () => {
    clearInterval(scrollIntervalId);
    setScrollIntervalId(null);

    // Reset the scrolling direction state
    setIsScrollingUp(false);
    setIsScrollingDown(false);
  };

  const handleScrollUp = () => {
    if (isScrollingUp) {
      stopScrolling();
    } else {
      startScrolling(1);
    }
  };

  const handleScrollDown = () => {
    if (isScrollingDown) {
      stopScrolling();
    } else {
      startScrolling(-1);
    }
  };

  const handleSongClick = (song) => {
    stopScrolling();
    setSelectedSong(song);
    containerElement.current.scrollTop = 0;
  };

  // Restart the scrolling interval when duration changes
  useEffect(() => {
    if (scrollIntervalId) {
      stopScrolling();
      const direction = isScrollingUp ? 1 : isScrollingDown ? -1 : 0;
      if (direction !== 0) {
        startScrolling(direction);
      }
    }
  }, [duration]);

  return (
    <div className='container'>
      <div className='columns'>
        {/* Left Column */}
        <div className='left-column'>
          {/* Upper Row */}
          <h2>Available Songs</h2>
          <div className='upper-row'>
            <div className='song-list'>
              <ul>
                {songs.map((song) => (
                  <li
                    key={song.id}
                    className={song.id === selectedSong.id ? "active" : ""}
                    onClick={() => handleSongClick(song)}
                  >
                    {song.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Lower Row */}
          <div className='lower-row'>
            <div className='speed-control'>
              <label>
                Speed: <span>{duration / 1000} s</span>
              </label>
              <input
                type='range'
                min='100'
                max='10000'
                step='100'
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
              />
            </div>

            <div className='control-buttons'>
              <button
                onClick={handleScrollUp}
                className={isScrollingUp ? "stop-button" : "scroll-button"}
              >
                {isScrollingUp ? "Stop" : "Scroll Down"}
              </button>
              <button
                onClick={handleScrollDown}
                className={isScrollingDown ? "stop-button" : "scroll-button"}
              >
                {isScrollingDown ? "Stop" : "Scroll Up"}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className='right-column'>
          <div className='sheet-container' ref={containerElement}>
            <img src={selectedSong.sheet} alt='sheet music' />
          </div>
          <div class='keyboard'> KEYBOARD
          </div>
        </div>
      </div>
    </div>
  );
}

export default SheetMusic;



