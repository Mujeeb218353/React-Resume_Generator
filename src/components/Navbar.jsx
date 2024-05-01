import '../styles/Navbar.css';
import {
    Link,
    useLocation,
} from "react-router-dom";

function Navbar(props) {
    const location = useLocation();
    return (
        <div className={'mb-5'}>
            <nav className={`navbar navbar-expand-lg fixed-top nav-underline shadow-lg ${props.mode === 'dark' ? '' : 'Navbar'}`}
                 style={{
                     background: props.mode === 'dark' ? 'linear-gradient(to right, #0f2027, #203a43, #2c5364)' : '',
                 }}
                 data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className={'navbar-brand Navbar-Head '.concat(location.pathname === '/' ? 'active' : '')} to="/">
                            <h2><span>Get Resume</span></h2>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={'nav-link '.concat(location.pathname === '/' ? 'active' : '')}
                                      aria-current="page" to="/">Home</Link>
                            </li>
                        </ul>
                        <div className="d-flex justify-content-center">
                            <label
                                className="swap swap-rotate me-3"
                                htmlFor="switch"
                                onClick={props.toggleMode}
                            >
                                {
                                    props.mode === 'light' ? (
                                        <div className="icon icon--moon swap-on">
                                            <svg height="20" width="20"
                                                 fill="white"
                                                 viewBox="0 0 24 24"
                                                 xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"></path>
                                            </svg>
                                        </div>
                                    )
                                    :
                                    (
                                        <div className="icon icon--sun swap-off">
                                            <svg height="20" width="20" fill="yellow" viewBox="0 0 24 24"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                                            </svg>
                                        </div>
                                    )
                                }
                            </label>
                            {/*<button className='btn btn-outline-light me-1' style={{cursor: 'pointer'}} onClick={props.toggleMode}>{props.mode === 'dark' ? 'Disable' : 'Enable'} Dark Mode</button>*/}
                            <Link className="btn btn-outline-light" to='/form'>Generate CV</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
