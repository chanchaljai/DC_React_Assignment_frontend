const logout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("token");
};

export default logout;