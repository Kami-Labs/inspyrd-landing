import "./App.scss";
import "./animate.css";
import ScrollAnimation from "react-animate-on-scroll";

function App() {
  return (
    <div className="App">
      <div className="triangle-1">
        <div className="topbar">
          <img src="/images/inspyrd.png" className="logo" />
          <div className="links">
            <a href="https://blog.inspyrd.io">Blog</a>
            <a href="https://twitter.com/inspyrdnft" target="_blank">
              <img src="/images/twitter.svg" className="twitter" />
            </a>
          </div>
        </div>
        <img src="/images/triangle1.png" alt="" className="triangle1" />
      </div>

      <div className="hero">
        <div className="discover">
          <ScrollAnimation animateIn="fadeInUp">
            <div className="heading">
              Discover <span className="highlight">Artists, Masterpieces</span>{" "}
              & <span className="highlight">Community</span>.
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp">
            <p className="tagline">The Multi-Chain NFT Marketplace</p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp">
            <div className="coming-soon">Coming Soon</div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation offset={0} animateIn="fadeInRight">
          <img src="/images/ispyrd-mac.png" />
        </ScrollAnimation>
      </div>

      <div className="bridges">
        <ScrollAnimation duration={2} animateIn="fadeIn">
          <img src="/images/networks.png" className="networks" />
        </ScrollAnimation>
        <div className="bridges-info">
          <ScrollAnimation animateIn="fadeInRight">
            <div className="heading">It's time to build bridges.</div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInRight">
            <p>
              NFT marketplaces are seperated by their protocol infrastructure.{" "}
              <br />
              <span className="highlight">At least they were.</span>
            </p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInRight">
            <p>
              Inspyrd is finally about to close that gap, bringing art from
              different networks on to one single platform.
            </p>
          </ScrollAnimation>
        </div>
      </div>

      <ScrollAnimation duration={4} animateIn="fadeIn">
        <div className="tags">
          Art - 3d Assets - Games - Videos - Music - Charity NFTs
        </div>
      </ScrollAnimation>

      <div className="pointers">
        <ScrollAnimation animateIn="fadeInRight">
          <div className="point">
            <img src="/images/circle.png" className="circle" />
            <div className="point-text">
              Decentralized Smart Contract Systems
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInRight">
          <div className="point">
            <img src="/images/circle.png" className="circle" />
            <div className="point-text">DAO Governance System</div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInRight">
          <div className="point">
            <img src="/images/circle.png" className="circle" />
            <div className="point-text">Integrated Creator Commission</div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInRight">
          <div className="point">
            <img src="/images/circle.png" className="circle" />
            <div className="point-text">Multi-Chain NFT Marketplace</div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInRight">
          <div className="point">
            <img src="/images/circle.png" className="circle" />
            <div className="point-text">Open-Source Community NFT Tools</div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInRight">
          <div className="point">
            <img src="/images/circle.png" className="circle" />
            <div className="point-text">Charitable Donation Integrations</div>
          </div>
        </ScrollAnimation>
      </div>

      <div className="triangle-2">
        <div className="looking-for">
          <ScrollAnimation offset={0} duration={2} animateIn="fadeIn">
            <div className="looking-text">
              Looking for a platform to release art?
            </div>
          </ScrollAnimation>

          <ScrollAnimation offset={0} duration={2} animateIn="fadeIn">
            <a href="mailto:we.are@kamilabs.io">
              <div className="get-in-touch">Get in touch</div>
            </a>
          </ScrollAnimation>
        </div>
        <div className="footer">
          <ScrollAnimation duration={2} animateIn="fadeIn">
            <a target="_blank" href="https://kamilabs.io">
              <img src="/images/kami-logo.png" alt="" className="kami-logo" />
            </a>
            <div className="links-footer">
              <a target="_blank" href="https://twitter.com/inspyrdnft">
                <img src="/images/twitter.svg" alt="" />
              </a>

              <a target="_blank" href="https://discord.gg/QHnRXnYaTb">
                <img src="/images/discord.svg" alt="" />
              </a>
            </div>
          </ScrollAnimation>

          <div className="copy">&copy; Kami Labs. All rights reserved.</div>
        </div>
        <img src="/images/triangle2.png" className="triangle2" />
      </div>
    </div>
  );
}

export default App;
