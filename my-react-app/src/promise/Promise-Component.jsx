import React from "react";
import { PromiseStyle } from "./promise-style.js";

const PromiseComponent = () => {
  return (
    <PromiseStyle>
      <div className="wrapper">
        <div className="promise-container">
          <div>
            <h2 className="title">Our Promise</h2>
            <p className="sub-title">
              As part of our high quality service, we'd like to offer something
              extra too.
            </p>
          </div>

          <div className="element">
            {/* 1 */}
            <div
              className="element__item"
              style={{ borderColor: "rgb(68,178,179)" }}
            >
              <div className="item">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="laptop-code"
                  class="svg-inline--fa fa-laptop-code fa-2xl "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  color="#44b2b3"
                >
                  <path
                    fill="currentColor"
                    d="M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L128 96l0 256-64 0L64 96zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"
                  ></path>
                </svg>
                <div className="item__title">Top Code Quality</div>
              </div>
              <div class="element__content">
                Our commitment goes beyond mere code - it encompasses providing
                solutions. You receive W3C fully compliant markup, without any
                compromise on quality.
              </div>
            </div>

            {/* 2 */}
            <div
              className="element__item"
              style={{ borderColor: "rgb(239,175,75)" }}
            >
              <div className="item">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="tablet-screen-button"
                  class="svg-inline--fa fa-tablet-screen-button fa-2xl "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  color="#efaf4b"
                >
                  <path
                    fill="currentColor"
                    d="M0 64C0 28.7 28.7 0 64 0L384 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM256 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM384 64L64 64l0 320 320 0 0-320z"
                  ></path>
                </svg>{" "}
                <div className="item__title">Responsive</div>
              </div>
              <div className="element__content">
                We understand the value of a positive attitude, timely
                responsiveness, and adaptability. We're dedicated to attentively
                listening and leveraging our utmost capabilities to serve you.
              </div>
            </div>

            {/* 3 */}
            <div
              className="element__item"
              style={{ borderColor: "rgb(0,189,235)" }}
            >
              <div className="item">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="people-group"
                  class="svg-inline--fa fa-people-group fa-2xl "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  color="#00bdeb"
                >
                  <path
                    fill="currentColor"
                    d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3l0-84.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5l0 21.5c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112l32 0c24 0 46.2 7.5 64.4 20.3zM448 416l0-21.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176l32 0c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2l0 26.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3l0-84.7c-10 11.3-16 26.1-16 42.3zm144-42.3l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2l0 42.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-42.8c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112l32 0c61.9 0 112 50.1 112 112z"
                  ></path>
                </svg>
                <div className="item__title">Rockstar Team</div>
              </div>
              <div class="element__content">
                Our expertise is our unique selling proposition. You'll have
                access to an all-star team of experienced professionals fully
                dedicated to serving you, armed with coding skills that are
                truly exceptional.
              </div>
            </div>

            {/* 4 */}
            <div
              className="element__item"
              style={{ borderColor: "rgb(134,74,249)" }}
            >
              <div className="item">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="diamond-turn-right"
                  class="svg-inline--fa fa-diamond-turn-right fa-2xl "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  color="#864AF9"
                >
                  <path
                    fill="currentColor"
                    d="M227.7 11.7c15.6-15.6 40.9-15.6 56.6 0l216 216c15.6 15.6 15.6 40.9 0 56.6l-216 216c-15.6 15.6-40.9 15.6-56.6 0l-216-216c-15.6-15.6-15.6-40.9 0-56.6l216-216zm87.6 137c-4.6-4.6-11.5-5.9-17.4-3.5s-9.9 8.3-9.9 14.8l0 56-64 0c-35.3 0-64 28.7-64 64l0 48c0 13.3 10.7 24 24 24s24-10.7 24-24l0-48c0-8.8 7.2-16 16-16l64 0 0 56c0 6.5 3.9 12.3 9.9 14.8s12.9 1.1 17.4-3.5l80-80c6.2-6.2 6.2-16.4 0-22.6l-80-80z"
                  ></path>
                </svg>
                <div className="item__title">Fast Turn-arounds</div>
              </div>
              <div className="element__content">
                The importance of speed is on par with quality for us. We are
                swift, nimble, and capable of providing high-quality code within
                a timeframe that suits your preferences.
              </div>
            </div>

            {/* 5 */}
            <div
              className="element__item"
              style={{ borderColor: "rgb(252,41,71)" }}
            >
              <div className="item">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="life-ring"
                  class="svg-inline--fa fa-life-ring fa-2xl "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  color="#fc2947"
                >
                  <path
                    fill="currentColor"
                    d="M385.1 419.1C349.7 447.2 304.8 464 256 464s-93.7-16.8-129.1-44.9l80.4-80.4c14.3 8.4 31 13.3 48.8 13.3s34.5-4.8 48.8-13.3l80.4 80.4zm68.1 .2C489.9 374.9 512 318.1 512 256s-22.1-118.9-58.8-163.3L465 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L419.3 58.8C374.9 22.1 318.1 0 256 0S137.1 22.1 92.7 58.8L81 47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L58.8 92.7C22.1 137.1 0 193.9 0 256s22.1 118.9 58.8 163.3L47 431c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l11.8-11.8C137.1 489.9 193.9 512 256 512s118.9-22.1 163.3-58.8L431 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-11.8-11.8zm-34.1-34.1l-80.4-80.4c8.4-14.3 13.3-31 13.3-48.8s-4.8-34.5-13.3-48.8l80.4-80.4C447.2 162.3 464 207.2 464 256s-16.8 93.7-44.9 129.1zM385.1 92.9l-80.4 80.4c-14.3-8.4-31-13.3-48.8-13.3s-34.5 4.8-48.8 13.3L126.9 92.9C162.3 64.8 207.2 48 256 48s93.7 16.8 129.1 44.9zM173.3 304.8L92.9 385.1C64.8 349.7 48 304.8 48 256s16.8-93.7 44.9-129.1l80.4 80.4c-8.4 14.3-13.3 31-13.3 48.8s4.8 34.5 13.3 48.8zM208 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"
                  ></path>
                </svg>
                <div className="item__title">Life-time Support</div>
              </div>
              <div className="element__content">
                Our commitment to code quality is exemplified by our enduring
                support. If any bugs happen to emerge in the future, feel free
                to reach out to us for assistance.
              </div>
            </div>

            {/* 6 */}
            <div
              className="element__item"
              style={{ borderColor: "rgb(50,199,102)" }}
            >
              <div className="item">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="shield-halved"
                  class="svg-inline--fa fa-shield-halved fa-2xl "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  color="#32c766"
                >
                  <path
                    fill="currentColor"
                    d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z"
                  ></path>
                </svg>
                <div className="item__title">Secured Agreement</div>
              </div>
              <div className="element__content">
                The creative work you receive is entirely your own, and we unequivocally respect that. We assure you of our commitment and readiness to formalize this with a Non-Disclosure Agreement (NDA).
              </div>
            </div>
          </div>
        </div>
      </div>
    </PromiseStyle>
  );
};

export default PromiseComponent;
