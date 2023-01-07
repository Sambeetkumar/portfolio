import colorSharp from "../assets/img/color-sharp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { Waypoint } from "react-waypoint";
import $ from "jquery";
import { ImHtmlFive, ImCss3, ImWordpress } from "react-icons/im";
import { IoLogoAngular } from "react-icons/io";
import { SiJavascript, SiReact } from "react-icons/si";

export const Skills = () => {
  const handleEnter = () => {
    $(".progress .progress-bar").each(function () {
      $(this).css("width", $(this).attr("aria-valuenow") + "%");
    });
  };
  const handleExit = () => {
    $(".progress .progress-bar").each(function () {
      $(this).css("width",5 + "%");
    });
  };
  const style = {
    background: "linear-gradient(89.8deg, #C34381 11%, #5A2BBA 83.4%)",
    width:"5%"
  }

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I can be as involved in your project as you need me to be; from
                the seed of the idea, to sketches, creative direction, design,
                copywriting, system design, and even the front-end and WordPress
                build.
              </p>
              <Waypoint
                onEnter={handleEnter}
                onLeave={handleExit}
                topOffset="10%"
                bottomOffset="27%"
              >
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="skill mb-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="font-weight-bold">
                          HTML <ImHtmlFive />
                        </h6>
                        <h6 className="font-weight-bold">95%</h6>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          id="progress-bar1"
                          role="progressbar"
                          style={style}
                          aria-valuenow={95}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="skill mb-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="font-weight-bold">
                          CSS <ImCss3 />
                        </h6>
                        <h6 className="font-weight-bold">85%</h6>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={style}
                          aria-valuenow={85}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="skill mb-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="font-weight-bold">
                          Javascript <SiJavascript />
                        </h6>
                        <h6 className="font-weight-bold">90%</h6>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={style}
                          aria-valuenow={90}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="skill mb-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="font-weight-bold">
                          React JS <SiReact />
                        </h6>
                        <h6 className="font-weight-bold">95%</h6>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={style}
                          aria-valuenow={95}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="skill mb-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="font-weight-bold">
                          Angular JS <IoLogoAngular />
                        </h6>
                        <h6 className="font-weight-bold">90%</h6>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={style}
                          aria-valuenow={90}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="skill mb-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="font-weight-bold">
                          Wordpress <ImWordpress />
                        </h6>
                        <h6 className="font-weight-bold">85%</h6>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={style}
                          aria-valuenow={85}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Waypoint>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image5" />
      <img className="background-image-right" src={colorSharp2} alt="Image6" />
    </section>
  )
}
