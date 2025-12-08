import styled from "styled-components";

export const SignupStyle = styled.div`
  font-family: "Work Sans", sans-serif;
  width: 100%;
  display: flex;
  justify-content: center;

  .signup-wrapper {
    width: 100%;
    max-width: 900px;
    padding: 20px;
  }

  .signup-container {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 1.25rem;
    border: 1px solid rgb(213, 213, 213);
    border-radius: 5px;
    width: inherit;
    background-color: rgb(245, 245, 245);
  }

  .signup-title {
    text-align: center;
    margin-bottom: 30px;

    .blue {
      color: #0b5fff;
    }

    .red {
      color: #fc2947;
    }
  }

  .form-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .two-column {
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    .input-box {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  }

  .education-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem; /* space between rows */

    .row {
      display: flex;
      gap: 1rem; /* space between columns */
      flex-wrap: wrap; /* prevents overlap on small screens */
    }

    .input-box {
      display: flex;
      flex-direction: column;
    }

    .two-five-fourth {
      flex: 2.5;
    }

    .one-five-fourth {
      flex: 1.5;
    }

    @media (max-width: 768px) {
      .two-five-fourth,
      .one-five-fourth {
        flex: 1 1 100%;
      }
    }
  }

  .input-box label {
    margin-bottom: 5px;
    font-weight: 500;
  }

  /* All inputs and selects styled the same */
  .input-box input,
  .input-box select {
    padding: 8px 12px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
    box-sizing: border-box;
    font-size: 1rem;
    outline: none;
  }

  .input-box input:focus,
  .input-box select:focus {
    border-color: #007bff;
  }

  .phone-input {
    display: flex;
    gap: 10px;

    select {
      padding: 8px;
      border-radius: 5px;
      border: 1px solid #ccc;
      font-size: 1rem;
      flex: 0 0 80px; /* fixed width for country code */
    }

    input {
      flex: 1;
    }
  }

  /* Password label + toggle on same line */
  .label-with-toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.3rem;

    label {
      font-weight: 500;
    }

    .toggle-show {
      cursor: pointer;
      white-space: nowrap;
      font-size: 0.9rem;
      // color: #007bff;
      // font-weight: 500;
    }
  }

  .password-field {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .password-field input {
    flex: 1;
    padding: 0.5rem;
    font-size: 1rem;
    box-sizing: border-box;
  }

  .password-rules {
    margin-top: 0.5rem;
    list-style: none;
    padding-left: 0;
    font-size: 0.85rem;
    color: #555;
  }

  /* Submit button outside grid */
  .form-actions-outside {
    display: flex;
    justify-content: flex-start;
    margin-top: 1.5rem;
  }

  .submit-btn {
    background-color: #007bff;
    color: white;
    padding: 0.7rem 1.5rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }

  .submit-btn:hover {
    background-color: #0056b3;
  }
`;
