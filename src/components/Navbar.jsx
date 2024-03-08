import React from 'react';
import {
    Link,
    useLocation,
} from "react-router-dom";

function Navbar(props) {
    const location = useLocation();
    return (
        <div style={{marginBottom: '5rem'}}>
            <nav className={'navbar navbar-expand-lg fixed-top nav-underline'}
                 style={{
                     background: props.mode === 'dark' ? 'linear-gradient(to right, #0f2027, #203a43, #2c5364)' : 'black',
                     boxShadow: '5px 5px 10px 5px black',
                 }}
                 data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className={'navbar-brand '.concat(location.pathname === '/' ? 'active' : '')} to="/"><i
                        className="fa-solid fa-c"> V - G e n - A p p</i></Link>
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
                        <form className="d-flex">
                            <div className={'btn m-auto'} onClick={props.toggleMode} >
                                <label className='form-check-label' htmlFor="flexSwitchCheckDefault" style={{cursor: 'pointer'}}>{props.mode === 'dark' ? 'Disable' : 'Enable'} Dark Mode</label>
                            </div>
                            <Link className="btn btn-outline-light m-auto" to={'/form'}>Generate CV</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
