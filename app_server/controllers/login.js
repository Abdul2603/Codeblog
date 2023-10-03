const login = (req, res) => {
    // Sample data for demonstration purposes
    const loginInfo = {
        title: 'Login',
        usernamePlaceholder: 'Enter your username',
        passwordPlaceholder: 'Enter your password',
        loginButtonText: 'Login',
        forgotPasswordLink: '/forgot-password',
    };

    res.render('login', loginInfo);
};

module.exports = {
    login
};
