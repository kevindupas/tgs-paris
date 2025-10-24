import React from "react";
import styled from "styled-components";

const Card = ({ key, title, slug, content, featured_image, instagram, tiktok, twitch, twitter, youtube, website, facebook, photographer, photographer_link}) => {


  return (
    <div className="flex" key={key}>
      <StyledWrapper className="flex items-center justify-center p-4 bg-[#e7e2d8] gap-2">
        <div className="card-container">
          <div
            className="comic-card"
            role="article"
            aria-labelledby="card-username"
          >
            <div className="card-header">
              <div />
              <div className="card-user-info">
                <p className="card-username" id="card-username">
                  {title}
                </p>
                <p className="card-handle">{slug}</p>
              </div>
            </div>
            <div className="card-content">
              <div className="card-image-container">
                <img src={featured_image} className="h-48 w-full z-50 object-cover" />
              </div>
              <div className="flex flex-row-reverse items-end gap-1 justify-end m-1 p-1">
                <p>{photographer}</p>
                <a href={photographer_link}>
                  <img 
                    src="../dist/icons/instagram.svg"
                    className="w-[25px] bg-[#2C509E] hover:bg-[#860000]" 
                  />
                </a>

              </div>
              <p className="card-caption">
                <div
                  dangerouslySetInnerHTML={{
                     __html: content,
                  }}
                />
              </p>
            </div>
            <div className="card-actions">

              {instagram && (
                <a 
                  href={instagram}
                  className="action-button like-button"
                  aria-label="Instagram"
                  target="_blank"
                >
                  <img src="../dist/icons/instagram.svg" alt="" className="w-[25px]" />
                </a> 
              )}
              
              {tiktok && (
                <a
                href={tiktok}
                className="action-button like-button"
                aria-label="tiktok"
                target="_blank"
              >
                <img src="../dist/icons/tiktok.svg" alt="" className="w-[25px]" />
              </a>
              )}
              
              {twitch && (
                <a
                href={twitch}
                className="action-button like-button"
                aria-label="twitch"
                target="_blank"
              >
                <img src="../dist/icons/twitch.svg" alt="" className="w-[25px]" />
              </a>
              )}
              
              {twitter && (
                <a
                href={twitter}
                className="action-button like-button"
                aria-label="twitter"
                target="_blank"
              >
                <img src="../dist/icons/twitter.svg" alt="" className="w-[25px]" />
              </a>
              )}

              {youtube && (
                <a
                href={youtube}
                className="action-button like-button"
                aria-label="youtube"
                target="_blank"
              >
                <img src="../dist/icons/youtube.svg" alt="" className="w-[25px]" />
              </a>
              )}
              
              {website && (
                <a
                href={website}
                className="action-button like-button"
                aria-label="website"
                target="_blank"
              >
                <img src="../dist/icons/web.svg" alt="" className="w-[25px]" />
              </a>
              )}
              
              {facebook && (
                <a
                href={facebook}
                className="action-button like-button"
                aria-label="facebook"
                target="_blank"
              >
                <img src="../dist/icons/facebook.svg" alt="" className="w-[25px]" />
              </a>
              )}
            </div>
          </div>
        </div>
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  .card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #e7e2d8;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  }

  .comic-card {
    --paper-white: #fefae8;
    --primary-yellow: #ffd900;
    --accent-red: #d92b2b;
    --accent-blue: #2c509e;
    --ink-black: #212121;
    --border-stroke: 0.15em;
    --dot-color: rgba(0, 0, 0, 0.2);

    position: relative;
    display: flex;
    flex-direction: column;
    width: 18em;
    max-width: 333px;
    max-height: 444px;
    background-color: var(--paper-white);
    border: var(--border-stroke) solid var(--ink-black);
    border-radius: 0.5em;
    padding: 1em;
    box-shadow: 0.5em 0.5em 0 var(--ink-black);
    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
      box-shadow 0.2s ease;
    transform-origin: bottom left;
  }

  .comic-card:hover {
    transform: translateY(-0.6em);
    box-shadow: 0.8em 0.8em 0 0.1em var(--accent-blue);
  }

  .card-header {
    display: flex;
    align-items: center;
    margin-bottom: 0.8em;
  }

  .comic-card:hover .card-avatar {
    transform: scale(1.1);
  }

  .card-user-info {
    margin-left: 0.8em;
    text-transform: uppercase;
  }

  .card-username {
    margin: 0;
    font-size: 1.2em;
    font-weight: 300;
    color: white;
    background-color: #860000;
    padding: 0.1em 0.5em;
    clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
    letter-spacing: 1px;
  }

  .card-handle {
    margin: 0.2em 0 0 0;
    font-size: 0.8em;
    color: var(--ink-black);
    font-weight: 100;
    letter-spacing: 2px;
  }

  .card-content {
    flex-grow: 1;
  }

  .card-image-container {
    width: 100%;
    height: 11em;
    border-radius: 0.2em;
    border: var(--border-stroke) solid var(--ink-black);
    overflow: hidden;
    
    
    background-size: 0.5em 0.5em;
    background-position: 0 0, 0.25em 0.25em;
    transition: transform 0.3s ease;
  }

  .comic-card:hover .card-image-container {
    transform: scale(1.02);
  }

  .card-caption {
    position: relative;
    margin: 0.8em 0;
    padding: 0.6em 0.8em;
    background-color: var(--paper-white);
    border: var(--border-stroke) solid var(--ink-black);
    border-radius: 0.5em;
    font-size: 0.9em;
    line-height: 1.3;
    color: var(--ink-black);
  }

  .card-caption::after {
    content: "";
    position: absolute;
    bottom: -0.6em;
    left: 1.5em;
    width: 0;
    height: 0;
    border: 0.5em solid var(--ink-black);
    border-color: var(--ink-black) transparent transparent transparent;
  }

  .card-caption::before {
    content: "";
    position: absolute;
    bottom: -0.4em;
    left: 1.6em;
    width: 0;
    height: 0;
    border: 0.4em solid var(--paper-white);
    border-color: var(--paper-white) transparent transparent transparent;
  }

  .card-actions {
    display: flex;
    justify-content: space-around;
    margin-top: auto;
    padding-top: 0.5em;
  }

  .action-button {
    background-color: #2C509E;
    border: var(--border-stroke) solid #860000;
    padding: 0.5em;
    cursor: pointer;
    border-radius: 0.5em;
    box-shadow: 0.2em 0.2em 0 var(--ink-black);
    transition: transform 0.1s ease, box-shadow 0.1s ease,
      background-color 0.2s ease;
  }

  .action-button:hover {
    background-color: #860000;
  }

  .action-button:active {
    transform: translate(0.2em, 0.2em);
    box-shadow: none;
  }

  .action-button-icon {
    width: 1.3em;
    height: 1.3em;
    stroke-width: 3;
    stroke: var(--ink-black);
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    display: block;
  }

  .action-button:hover .action-button-icon {
    stroke: var(--paper-white);
  }

  .like-button:hover .action-button-icon {
    fill: var(--paper-white);
  }
`;

export default Card;
