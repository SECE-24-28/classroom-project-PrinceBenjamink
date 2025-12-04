import React from "react";
import { CourseStyle } from "./course-style.js";

const CourseComponent = () => {
  return (
    <CourseStyle>
       <div className="courses-container">

      {/* HEADER */}
      <div className="courses-header">
        <h2 className="title">Our Courses</h2>
        <p className="sub-title">
          Explore a wide range of curated courses for every learner. Structured to enhance
          knowledge, skills, and career growth.
        </p>
      </div>

      <div className="courses-list">

        {/* ---------------------------- COURSE 1 ---------------------------- */}
        <div className="course-card">
          <img
            src="https://res.cloudinary.com/dotsjvnys/image/upload/v1715770719/AGH-Nov/HeroSection/aptitude_ch2mz0.jpg"
            width="300"
            className="course-image"
            alt="Aptitude Course"
          />

          <span className="course-rating-wrapper" style={{ direction: "ltr" }}>
            <span className="course-rating" aria-hidden="true">
              <span className="rating-empty-icons" style={{ color: "#ccc" }}></span>
              <span
                className="rating-filled-icons"
                title="5 out of 5"
                style={{ color: "#FFBC0B", width: "100%" }}
              ></span>
            </span>

            <span
              className="rating-tooltip"
              style={{
                marginLeft: "20px",
                backgroundColor: "transparent",
                color: "#000",
                padding: "5px 0",
                fontWeight: "700",
              }}
            >
            </span>
          </span>

          <h2 className="course-title">Aptitude Complete Preparation</h2>

          <span className="course-meta">
            <div>Recommended: Final year students</div>
            <div>Duration: 1 Year</div>
          </span>

          <div>
            <div className="course-price">₹ 12,000</div>
            <span className="course-tax">+ GST</span>
            <div className="course-old-price">₹ 24,999</div>
          </div>

          <div className="course-actions">
            <button className="btn-primary">Buy Now</button>
            <a href="/course/aptitude-course-page" style={{ width: "100%" }}>
              <button className="btn-secondary">Know More</button>
            </a>
          </div>
        </div>

        {/* ---------------------------- COURSE 2 ---------------------------- */}
        <div className="course-card">
          <img
            src="https://res.cloudinary.com/dotsjvnys/image/upload/v1715770721/AGH-Nov/HeroSection/programming_e05rx7.png"
            width="300"
            className="course-image"
            alt="Technical Course"
          />

          <span className="course-rating-wrapper" style={{ direction: "ltr" }}>
            <span className="course-rating" aria-hidden="true">
              <span className="rating-empty-icons" style={{ color: "#ccc" }}></span>
              <span
                className="rating-filled-icons"
                title="4.9 out of 5"
                style={{ color: "#FFBC0B", width: "98%" }}
              ></span>
            </span>

            <span
              className="rating-tooltip"
              style={{
                marginLeft: "20px",
                backgroundColor: "transparent",
                color: "#000",
                padding: "5px 0",
                fontWeight: "700",
              }}
            >
              4.9
            </span>
          </span>

          <h2 className="course-title">Technical Complete Preparation</h2>

          <span className="course-meta">
            <div>Recommended: Final year students</div>
            <div>Duration: 1 year</div>
          </span>

          <div>
            <div className="course-price">₹ 12,000</div>
            <span className="course-tax">+ GST</span>
            <div className="course-old-price">₹ 24,999</div>
          </div>

          <div className="course-actions">
            <button className="btn-primary">Buy Now</button>
            <a href="/course/technical-courses-page" style={{ width: "100%" }}>
              <button className="btn-secondary">Know More</button>
            </a>
          </div>
        </div>

        {/* ---------------------------- COURSE 3 ---------------------------- */}
        <div className="course-card">
          <img
            src="https://res.cloudinary.com/dotsjvnys/image/upload/v1715770718/AGH-Nov/HeroSection/web-development_bfpidr.png"
            width="300"
            className="course-image"
            alt="MERN Fullstack"
          />

          <span className="course-rating-wrapper" style={{ direction: "ltr" }}>
            <span className="course-rating" aria-hidden="true">
              <span className="rating-empty-icons" style={{ color: "#ccc" }}></span>
              <span
                className="rating-filled-icons"
                title="4.4 out of 5"
                style={{ color: "#FFBC0B", width: "88%" }}
              ></span>
            </span>

            <span
              className="rating-tooltip"
              style={{
                marginLeft: "20px",
                backgroundColor: "transparent",
                color: "#000",
                padding: "5px 0",
                fontWeight: "700",
              }}
            >
              4.4
            </span>
          </span>

          <h2 className="course-title">MERN Fullstack</h2>

          <span className="course-meta">
            <div>Recommended: Final year students</div>
            <div>Duration: 1 year</div>
          </span>

          <div>
            <div className="course-price">₹ 29,999</div>
            <span className="course-tax">+ GST</span>
            <div className="course-old-price">₹ 39,999</div>
          </div>

          <div className="course-actions">
            <button className="btn-primary">Buy Now</button>
            <a href="/course/fullstack-course-page" style={{ width: "100%" }}>
              <button className="btn-secondary">Know More</button>
            </a>
          </div>
        </div>
      </div>

      {/* VIEW MORE */}
      <a className="view-more-link" href="/courses">
        View More{" "}
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="chevron-right"
          className="icon-chevron"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256
            73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
          />
        </svg>
      </a>
    </div>
    </CourseStyle>
  );
};

export default CourseComponent;
