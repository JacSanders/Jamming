import './styles/Account.css';

const Account = ({currentUser}) => {

    const toggleLogout = () => {
        const logoutBox = document.getElementById('log-out');
        let display = logoutBox.style.display;
        display === 'none' ? display = 'block' : display = 'none';
    }

    const logout = () => {
        window.location.href = 'http://localhost:3000';
    }
    if (currentUser) {
        return (
            <div className="user-options" onClick={toggleLogout}>
                {/* <img src={currentUser.images.url} alt="profile pic" /> */}
                <p>{currentUser.display_name}</p>
                <div className="logout" id="log-out">
                    <button type="button" onClick={logout}>Logout</button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="noUser">no user found</div>
        )
    }
}
 
export default Account;