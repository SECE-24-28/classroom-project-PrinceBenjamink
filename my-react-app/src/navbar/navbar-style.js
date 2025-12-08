import styled from "styled-components";
export const NavbarStyle = styled.div`

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 40px;
  background-color: #020000ff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  border-radius: 10px;
  position: sticky;
  top: 0;
}

.logo {
  font-size: 22px;
  font-weight: bold;
  color:gold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 30px;
}

.nav-links li a {
  text-decoration: none;
  font-size: 18px;
  color:gold;
  transition: 0.2s;
  text-transform: uppercase;
  font-family:'monospace', sans-serif;
}

.nav-links li a:hover {
  color: #0099ff;
}
`;