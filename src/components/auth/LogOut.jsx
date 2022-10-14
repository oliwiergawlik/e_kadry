import useLogout from "../../hooks/useLogout";

function LogOut() {
    const logout = useLogout();

    return (
        <button onClick={logout} className="navigation__item navigation__item--btn">
            Logout
        </button>
    );
}

export default LogOut;
