import React, { useState, useEffect, useCallback } from "react";
import { homeimgs, sports, entertainment, influencers } from "./backgroundimgs";
function App() {
  return (
    <section className="pp">
      <div className="nav-up-down scroll-down">
        <div className="back-nav"></div>
        <a href="https://micdropagency.com" className="logo">
          <img src="Logo.png" alt="not ofo" className="logo_img"></img>
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
