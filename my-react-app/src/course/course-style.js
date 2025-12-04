import styled from "styled-components";

export const CourseStyle = styled.div`

/* ========== MAIN CONTAINER ========== */
.courses-container {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  gap: 3rem;
  padding-top: 3rem;
  flex-direction: column;
}

/* ========== HEADER SECTION ========== */
.courses-header {
  display: flex;
  text-align: center;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
}

.courses-header .title {
  font-weight: 600;
  font-size: 48px;
  text-align: center;
  font-family: "Work Sans", sans-serif;
}

.courses-header .sub-title {
  font-size: 18px;
  text-align: center;
  margin-block: 8px;
  font-family: "Work Sans", sans-serif;
  font-weight: 500;
  color: rgb(86, 102, 131);
  max-width: 700px;
}

/* ========== COURSES LIST ========== */
.courses-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 360px));
  place-items: center;
  gap: 1rem;
  justify-content: center;
}

/* ========== COURSE CARD ========== */
.course-card {
  border: 1px solid rgb(221, 221, 221);
  padding: 0.5rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.8rem;
}

.course-image {
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  aspect-ratio: 3 / 2;
  width: 100%;
  object-fit: cover;
}

/* ========== RATING SECTION ========== */
.course-rating-wrapper {
  display: inline-block;
  touch-action: none;
}

.course-rating {
  display: inline-block;
  overflow: hidden;
  position: relative;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}

.rating-empty-icons {
  display: inline-block;
}

.rating-filled-icons {
  display: inline-block;
  overflow: hidden;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.rating-tooltip {
  background-color: #333;
  border-radius: 5px;
  color: #fff;
  display: inline-block;
  padding: 5px 15px;
  vertical-align: middle;
}

/* ========== COURSE TEXT ========== */
.course-title {
  font-family: "Work Sans", sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  display: inline-block;
  width: 100%;
}

.course-meta {
  font-family: Poppins, sans-serif;
}

.course-price {
  font-size: 1.75rem;
  color: rgb(52, 52, 52);
  display: inline-flex;
  align-items: center;
}

.course-tax {
  font-size: 1.25rem;
  color: rgb(252, 41, 71);
}

.course-old-price {
  font-size: 1.5rem;
  text-decoration: line-through;
  color: rgb(173, 172, 172);
  display: inline-flex;
  align-items: center;
}

/* ========== BUTTONS ========== */
.course-actions {
  display: flex;
  gap: 1rem;
}

.btn-primary {
  padding: 12px 16px;
  width: 100%;
  font-size: 18px;
  border-radius: 6px;
  transition: 0.3s;
  cursor: pointer;
  color: #fff;
  background: rgb(252, 41, 71);
  border: 1px solid rgb(252, 41, 71);
}

.btn-secondary {
  padding: 12px 16px;
  width: 100%;
  font-size: 18px;
  border-radius: 6px;
  background: rgb(232, 232, 232);
  border: 1px solid rgb(232, 232, 232);
  cursor: pointer;
  font-family: "Work Sans", sans-serif;
  font-weight: 500;
}

/* VIEW MORE LINK */
.view-more-link {
  display: none;
}

`;