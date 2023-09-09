const Navbar = (props) => {
    return ( 
        <div className="navbar">
            <div className="profile-pic"></div>
            <h2>{props.name}'s Portfolio</h2>
        </div>
     );
}
 
export default Navbar;
