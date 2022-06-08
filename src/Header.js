function Header(){
    return(
        <div className='header'>
            <div className="header-options">
                <div className="logo_mindthegraph"></div>
                <div className="buttons-container">
                    <a href="https://mindthegraph.com/app/infographic-templates" className="header-links">Templates</a>
                    <a href="https://mindthegraph.com/app/pricing" className="header-links">Pricing</a>
                    <a href="https://mindthegraph.com/blog" className="header-links">Blog</a>
                    <a href="https://mindthegraph.com/app/custom-services" className="header-links">Jobs</a>
                    <a href="https://mindthegraph.com/app/auth/login?from_url=/" className="header-login">
                        <span>Login</span>
                        </a>
                    <a href="https://mindthegraph.com/app/auth/register?from_url=/app/custom-services" className="header-signup">
                        <span>Sign up free</span>
                    </a>
                </div>
            </div>

            <div className="header-container">
                <h1 className="h1">
                Discover all possibilities of using this powerfull tool and create science 
                figures, posters and infographics.
                </h1>
            </div>
        </div>
    )
}

export default Header;