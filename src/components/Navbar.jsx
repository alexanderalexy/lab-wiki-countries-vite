function Navbar() {
<>
<nav> 
    <ul style={{ listStyle: 'none' }}>
          <li>
            {/* <a href='/'>Home</a> */}
            {/* <Link to='/'>Home</Link> */}
            <NavLink to='/' className={({ isActive }) => (isActive ? 'selected' : '')}>
              Home
            </NavLink>
          </li>
    </ul>
</nav>   
</>
}

export default Navbar;
