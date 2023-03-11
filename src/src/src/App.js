import React, { useState, useEffect, useCallback } from "react";
import { homeimgs, sports, entertainment, influencers } from "./backgroundimgs";

function App() {
  return (
    <section className="pp">
      <div className="nav-up-down scroll-down">
        <div className="back-nav"></div>
        <a href="https://micdropagency.com" className="logo">
          <svg width="266" height="70" viewBox="0 0 266 69">
            <g fill="#FFF" fill-rule="nonzero">
              <path d="M63.84 5.38 34.61 34.61 20.89 20.89a12.23 12.23 0 0 0-8.65-3.59C5.48 17.3 0 22.78 0 29.54v31h17.3V43.26l17.31 17.3L77.87 17.3v43.26h17.3V18.35C95.164 8.218 86.952.006 76.82 0a18.32 18.32 0 0 0-12.98 5.38zM124.38 2.26l3.76 12.58a36.29 36.29 0 0 1 1.23 5.33h.54a36.67 36.67 0 0 1 1.22-5.33l3.76-12.58h10v25.5h-6.59V14.61c0-1.53.16-4.68.35-6.33l-.65-.11a46.6 46.6 0 0 1-1.11 4.83l-4.26 14.76h-6L122.43 13a33.92 33.92 0 0 1-1.11-4.83l-.69.11c.23 1.73.38 4.91.38 6.33v13.15h-6.6V2.26h9.97zM148.54 3.34a3.51 3.51 0 0 1 7 0 3.51 3.51 0 0 1-7 0zm6.83 5.25v19.17h-6.64V8.59h6.64zM167.41 28.22c-6 0-10.24-3.56-10.24-10.12 0-6.56 4.52-10 10.28-10 5.21 0 9.08 2.65 10 7.48h-6.75a3.12 3.12 0 0 0-3.07-2.8h-.15c-2.34 0-3.45 2-3.45 5.29s1.11 5.44 3.45 5.44h.15c2 0 3-1.87 3.22-3.52h6.79c-.76 5.2-4.9 8.23-10.23 8.23zM191.49 2.26c8 0 13.34 5 13.34 12.62 0 7.86-5.29 12.88-13.38 12.88h-11.08V2.26h11.12zm6.33 12.62c0-4.83-2.11-7.33-6.83-7.33h-3.83v14.92H191c4.55 0 6.82-2.72 6.82-7.59zM218.48 14.88c-2.49 0-4.06 1.11-4.06 4v8.86h-6.67V8.59h6.44v.61a8.24 8.24 0 0 1-.62 3.07l.69.15c1.08-3.29 2.92-4 6-4h1.19v6.78a17.33 17.33 0 0 0-2.97-.32zM242.45 18.1c0 6.56-4.6 10.12-10.36 10.12s-10.31-3.56-10.31-10.12c0-6.56 4.56-10 10.31-10 5.75 0 10.36 3.44 10.36 10zm-6.83 0c0-3-1-5.33-3.41-5.33H232c-2.42 0-3.42 2.38-3.42 5.33s1 5.4 3.42 5.4h.19c2.44.04 3.43-2.33 3.43-5.36v-.04zM265.61 18.1c0 5.71-3 10.12-7.94 10.12a6.07 6.07 0 0 1-5.83-3.45l-.65.19c.396.95.59 1.971.57 3v7.32h-6.67V8.59h6.67v.15a7.22 7.22 0 0 1-.53 2.65l.65.23a6.13 6.13 0 0 1 5.79-3.49c4.87 0 7.94 4.26 7.94 9.97zm-10.55-5.29c-2.49 0-3.53 2.26-3.53 5.33 0 3.07 1 5.4 3.53 5.4h.15c2.42 0 3.53-2.33 3.53-5.4 0-3.07-1.07-5.33-3.53-5.33h-.15zM130.56 55.64h-9.17l-1.76 5h-7.13l9.43-25.5h7.9l9.66 25.5h-7.17l-1.76-5zm-1.34-4.53-2.15-6.71a28.23 28.23 0 0 1-.84-3.68h-.7a28.23 28.23 0 0 1-.84 3.68l-1.92 6.71h6.45z"></path>
              <path d="M149 64h.12c2.1 0 3.68-.88 3.75-3.22a18.33 18.33 0 0 1 .58-4.18l-.69-.19a6.31 6.31 0 0 1-6 3.45c-4.37 0-7.67-3.45-7.67-9.32S142 41 146.78 41c3.26 0 5.21 1.76 5.9 3.61l.66-.2a6.31 6.31 0 0 1-.62-2.45v-.5h6.71V59.9c0 6.21-3.91 8.66-10.43 8.66-6.71 0-9.58-3.26-10.39-7.28h7.17A2.93 2.93 0 0 0 149 64zm.54-8.74c2.14 0 3.41-1.69 3.41-4.72s-1.19-4.75-3.37-4.75h-.2c-2.14 0-3.41 1.68-3.41 4.71 0 3.03 1.27 4.76 3.41 4.76h.16zM182 51.27v1h-13.65v.16a3.88 3.88 0 0 0 4 3.95 3.43 3.43 0 0 0 3.38-2.31h6.67c-.69 4.3-5.18 7-10.28 7-6.44 0-10.43-4.1-10.43-10 0-6.32 4.31-10.07 10.24-10.07 5.93 0 10.07 4 10.07 10.27zm-6.29-2.53c-.15-2-1.34-3.61-3.57-3.61h-.19a3.58 3.58 0 0 0-3.64 3.61h7.4zM191.18 41.45v.35a6.31 6.31 0 0 1-.65 2.64l.69.19c.92-2.11 3.3-3.64 6.56-3.64 3.56 0 6.17 2.11 6.17 6.6v13h-6.63V48.85a2.69 2.69 0 0 0-3-2.84h-.11a2.94 2.94 0 0 0-3.11 3v11.61h-6.67V41.45h6.75zM216.68 61.08c-6 0-10.24-3.56-10.24-10.12 0-6.56 4.56-9.96 10.28-9.96 5.21 0 9.09 2.65 10 7.48h-6.75a3.12 3.12 0 0 0-3.07-2.8h-.15c-2.34 0-3.45 2-3.45 5.29s1.11 5.45 3.45 5.45h.15c2 0 3-1.88 3.22-3.53h6.79c-.76 5.16-4.91 8.19-10.23 8.19zM247.82 41.45V59.9c0 6.21-3.92 8.66-10.43 8.66s-9.48-3.07-10.28-7.17h7.13a2.9 2.9 0 0 0 3.18 2.61h.12c3 0 3.72-1.42 3.72-4.45a7.44 7.44 0 0 1 .5-3.14l-.69-.23c-.92 2.14-3.15 3.68-6.41 3.68-3.52 0-6-2.19-6-6.64V41.45h6.64V52a2.56 2.56 0 0 0 2.76 2.84h.15a2.92 2.92 0 0 0 2.91-3V41.45h6.7z"></path>
            </g>
          </svg>
        </a>
        <a href="https://micdropagency.com/contact" className="btn">
          <div className="back"></div>
          <div className="btn-wrap">
            <div className="btn-text">Contact Us</div>
          </div>
        </a>
        <div class="nav-icon">
          <div class="hamburger-bar"></div>
        </div>
      </div>
      <nav className="nn">
        <div className="container">
          <div className="nav-content-wrap">
            <ul className="nav-content">
              <li className="active">
                <a
                  href="https://micdropagency.com"
                  className="nav-link tricks-link"
                >
                  <span className="tricks og">
                    <span className="tricksword">
                      <span className="letter">H</span>
                      <span className="letter">o</span>
                      <span className="letter">m</span>
                      <span className="letter">e</span>
                    </span>
                  </span>
                  <span className="tricks alt">
                    <span className="tricksword">
                      <span className="letter">H</span>
                      <span className="letter">o</span>
                      <span className="letter">m</span>
                      <span className="letter">e</span>
                    </span>
                  </span>
                </a>
              </li>
              <li className="">
                <a
                  href="https://micdropagency.com/sports"
                  className="nav-link tricks-link"
                >
                  <span className="tricks og">
                    <span className="tricksword">
                      <span className="letter">S</span>
                      <span className="letter">p</span>
                      <span className="letter">o</span>
                      <span className="letter">r</span>
                      <span className="letter">t</span>
                      <span className="letter">s</span>
                    </span>
                  </span>
                  <span className="tricks alt">
                    <span className="tricksword">
                      <span className="letter">S</span>
                      <span className="letter">p</span>
                      <span className="letter">o</span>
                      <span className="letter">r</span>
                      <span className="letter">t</span>
                      <span className="letter">s</span>
                    </span>
                  </span>
                </a>
              </li>
              <li className="">
                <a
                  href="https://micdropagency.com/entertainment"
                  className="nav-link tricks-link"
                >
                  <span className="tricks og">
                    <span className="tricksword">
                      <span className="letter">E</span>
                      <span className="letter">n</span>
                      <span className="letter">t</span>
                      <span className="letter">e</span>
                      <span className="letter">r</span>
                      <span className="letter">t</span>
                      <span className="letter">a</span>
                      <span className="letter">i</span>
                      <span className="letter">n</span>
                      <span className="letter">m</span>
                      <span className="letter">e</span>
                      <span className="letter">n</span>
                      <span className="letter">t</span>
                    </span>
                  </span>
                  <span className="tricks alt">
                    <span className="tricksword">
                      <span className="letter">E</span>
                      <span className="letter">n</span>
                      <span className="letter">t</span>
                      <span className="letter">e</span>
                      <span className="letter">r</span>
                      <span className="letter">t</span>
                      <span className="letter">a</span>
                      <span className="letter">i</span>
                      <span className="letter">n</span>
                      <span className="letter">m</span>
                      <span className="letter">e</span>
                      <span className="letter">n</span>
                      <span className="letter">t</span>
                    </span>
                  </span>
                </a>
              </li>
              <li className="">
                <a
                  href="https://micdropagency.com/influencers"
                  className="nav-link tricks-link"
                >
                  <span className="tricks og">
                    <span className="tricksword">
                      <span className="letter">I</span>
                      <span className="letter">n</span>
                      <span className="letter">f</span>
                      <span className="letter">l</span>
                      <span className="letter">u</span>
                      <span className="letter">e</span>
                      <span className="letter">n</span>
                      <span className="letter">c</span>
                      <span className="letter">e</span>
                      <span className="letter">r</span>
                      <span className="letter">s</span>
                    </span>
                  </span>
                  <span className="tricks alt">
                    <span className="tricksword">
                      <span className="letter">I</span>
                      <span className="letter">n</span>
                      <span className="letter">f</span>
                      <span className="letter">l</span>
                      <span className="letter">u</span>
                      <span className="letter">e</span>
                      <span className="letter">n</span>
                      <span className="letter">c</span>
                      <span className="letter">e</span>
                      <span className="letter">r</span>
                      <span className="letter">s</span>
                    </span>
                  </span>
                </a>
              </li>
              <li className="">
                <a
                  href="https://micdropagency.com/contact"
                  className="nav-link tricks-link"
                >
                  <span className="tricks og">
                    <span className="tricksword">
                      <span className="letter">C</span>
                      <span className="letter">o</span>
                      <span className="letter">n</span>
                      <span className="letter">t</span>
                      <span className="letter">a</span>
                      <span className="letter">c</span>
                      <span className="letter">t</span>
                    </span>
                  </span>
                  <span className="tricks alt">
                    <span className="tricksword">
                      <span className="letter">C</span>
                      <span className="letter">o</span>
                      <span className="letter">n</span>
                      <span className="letter">t</span>
                      <span className="letter">a</span>
                      <span className="letter">c</span>
                      <span className="letter">t</span>
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="nav-background"></div>
      <section className="section default-header full-height section-home-header">
        <div className="border-top"></div>
        <div className="s-icons">
          <a href="https://twitter.com" className="s-icon" target="_blank">
            <div className="s-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.459,5.5a8.763,8.763,0,0,1-2.471.678A4.337,4.337,0,0,0,21.88,3.794,8.907,8.907,0,0,1,19.144,4.83,4.3,4.3,0,0,0,11.7,7.768a4.446,4.446,0,0,0,.111.983A12.194,12.194,0,0,1,2.935,4.266a4.226,4.226,0,0,0-.582,2.166,4.307,4.307,0,0,0,1.914,3.584,4.292,4.292,0,0,1-1.949-.539V9.53A4.306,4.306,0,0,0,5.77,13.753a4.342,4.342,0,0,1-1.935.075,4.318,4.318,0,0,0,4.028,2.989,8.629,8.629,0,0,1-5.339,1.842A9.277,9.277,0,0,1,1.5,18.6a12.254,12.254,0,0,0,6.613,1.932A12.159,12.159,0,0,0,20.361,8.3c0-.183,0-.367-.013-.551A8.69,8.69,0,0,0,22.5,5.516Z"></path>
              </svg>
            </div>
          </a>
          <a
            href="https://www.instagram.com"
            className="s-icon"
            target="_blank"
          >
            <div className="s-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M21.94,7.88a7.59,7.59,0,0,0-.46-2.43,4.85,4.85,0,0,0-1.16-1.77,4.85,4.85,0,0,0-1.77-1.16,7.59,7.59,0,0,0-2.43-.46C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.59,7.59,0,0,0-2.43.46A4.85,4.85,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.85,4.85,0,0,0,1.77,1.16,7.59,7.59,0,0,0,2.43.46C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.59,7.59,0,0,0,2.43-.46,5.19,5.19,0,0,0,2.93-2.93,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.33,3.33,0,0,1-1.9,1.9,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.61,5.61,0,0,1,6.1,19.8a3.33,3.33,0,0,1-1.9-1.9A5.61,5.61,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.61,5.61,0,0,1,4.2,6.1,3.33,3.33,0,0,1,6.1,4.2,5.61,5.61,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34,3.33,3.33,0,0,1,1.9,1.9A5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16Z"></path>
                <path d="M12,6.86A5.14,5.14,0,1,0,17.14,12,5.14,5.14,0,0,0,12,6.86Zm0,8.47A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path>
                <path d="M17.34,5.46a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Z"></path>
              </svg>
            </div>
          </a>
          <a href="https://www.linkedin.com" className="s-icon" target="_blank">
            <div className="s-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20.9,20.9H17.166V15.053c0-1.394-.028-3.188-1.944-3.188-1.945,0-2.242,1.517-2.242,3.085V20.9H9.249V8.877h3.584v1.639h.048a3.932,3.932,0,0,1,3.538-1.942c3.78,0,4.479,2.488,4.479,5.726v6.6ZM5.036,7.232A2.167,2.167,0,1,1,7.2,5.064,2.165,2.165,0,0,1,5.036,7.232ZM6.906,20.9H3.165V8.877H6.906Z"></path>
              </svg>
            </div>
          </a>
          <a
            href="https://www.facebook.com/MicDropAgency"
            className="s-icon"
            target="_blank"
          >
            <div className="s-icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.06,11.987a10.061,10.061,0,1,0-11.633,9.939V14.9H7.872V11.987h2.555V9.771a3.551,3.551,0,0,1,3.8-3.915,15.427,15.427,0,0,1,2.252.2V8.529H15.211a1.454,1.454,0,0,0-1.64,1.571v1.887h2.791L15.915,14.9H13.571v7.03A10.064,10.064,0,0,0,22.06,11.987Z"></path>
              </svg>
            </div>
          </a>
        </div>
        <div className="scroll-down-text">Scroll down</div>
        <div className="scroll-indicator"></div>
        <div className="home-header-image-wrap">
          {homeimgs.map((homeimg) => {
            const { img } = homeimg;
            return (
              <div
                className="home-header-image"
                style={{ backgroundImage: `url(${img})` }}
                data-src={img}
                uk-img=""
              ></div>
            );
          })}
          <div className="overlay"></div>
        </div>
        <div className="header-stripe"></div>
        <div className="header-stripe second"></div>
        <div className="content-burst content-burst-sports">
          {sports.map((sportimg) => {
            const { img } = sportimg;
            return (
              <div
                className="slide"
                style={{ backgroundImage: `url(${img})` }}
                data-src={img}
                uk-img=""
              ></div>
            );
          })}
          <div className="overlay"></div>
        </div>
        <div className="content-burst content-burst-entertainment">
          {entertainment.map((entimg) => {
            const { img } = entimg;
            return (
              <div
                className="slide"
                style={{ backgroundImage: `url(${img})` }}
                data-src={img}
                uk-img=""
              ></div>
            );
          })}
          <div className="overlay"></div>
        </div>
        <div className="content-burst content-burst-influencers">
          {influencers.map((infimg) => {
            const { img } = infimg;
            return (
              <div
                className="slide"
                style={{ backgroundImage: `url(${img})` }}
                data-src={img}
                uk-img=""
              ></div>
            );
          })}
          <div className="overlay"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="flex-col">
              <a
                href="https://micdropagency.com/sports"
                className="home-header-link tricks-link burst-sports hover active"
              >
                <h2 className="tricks og">
                  <span className="tricksword">
                    <span className="letter tr">S</span>
                    <span className="letter tr">p</span>
                    <span className="letter tr">o</span>
                    <span className="letter tr">r</span>
                    <span className="letter tr">t</span>
                    <span className="letter tr">s</span>
                  </span>
                </h2>
                <h2 className="tricks alt">
                  <span className="tricksword">
                    <span className="letter">S</span>
                    <span className="letter">p</span>
                    <span className="letter">o</span>
                    <span className="letter">r</span>
                    <span className="letter">t</span>
                    <span className="letter">s</span>
                  </span>
                </h2>
                <div className="extra-info">
                  <p>Learn more about our Sports related use cases.</p>
                </div>
              </a>
              <a
                href="https://micdropagency.com/influencers"
                className="home-header-link tricks-link burst-influencers hover"
              >
                <h2 className="tricks og">
                  <span className="tricksword">
                    <span className="letter tr">I</span>
                    <span className="letter tr">n</span>
                    <span className="letter tr">f</span>
                    <span className="letter tr">l</span>
                    <span className="letter tr">u</span>
                    <span className="letter tr">e</span>
                    <span className="letter tr">n</span>
                    <span className="letter tr">c</span>
                    <span className="letter tr">e</span>
                    <span className="letter tr">r</span>
                    <span className="letter tr">s</span>
                  </span>
                </h2>
                <h2 className="tricks alt">
                  <span className="tricksword">
                    <span className="letter">I</span>
                    <span className="letter">n</span>
                    <span className="letter">f</span>
                    <span className="letter">l</span>
                    <span className="letter">u</span>
                    <span className="letter">e</span>
                    <span className="letter">n</span>
                    <span className="letter">c</span>
                    <span className="letter">e</span>
                    <span className="letter">r</span>
                    <span className="letter">s</span>
                  </span>
                </h2>
                <div className="extra-info">
                  <p>Learn more about our Influencers related use cases.</p>
                </div>
              </a>
              <a
                href="https://micdropagency.com/entertainment"
                className="home-header-link tricks-link burst-entertainment hover"
              >
                <h2 className="tricks og">
                  <span className="tricksword">
                    <span className="letter tr">E</span>
                    <span className="letter tr">n</span>
                    <span className="letter tr">t</span>
                    <span className="letter tr">e</span>
                    <span className="letter tr">r</span>
                    <span className="letter tr">t</span>
                    <span className="letter tr">a</span>
                    <span className="letter tr">i</span>
                    <span className="letter tr">n</span>
                    <span className="letter tr">m</span>
                    <span className="letter tr">e</span>
                    <span className="letter tr">n</span>
                    <span className="letter tr">t</span>
                  </span>
                </h2>
                <h2 className="tricks alt">
                  <span className="tricksword">
                    <span className="letter">E</span>
                    <span className="letter">n</span>
                    <span className="letter">t</span>
                    <span className="letter">e</span>
                    <span className="letter">r</span>
                    <span className="letter">t</span>
                    <span className="letter">a</span>
                    <span className="letter">i</span>
                    <span className="letter">n</span>
                    <span className="letter">m</span>
                    <span className="letter">e</span>
                    <span className="letter">n</span>
                    <span className="letter">t</span>
                  </span>
                </h2>
                <div className="extra-info">
                  <p>Learn more about our Entertainment related use cases.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
export default App;
