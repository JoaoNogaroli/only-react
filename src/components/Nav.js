import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {

    return  (
        <div>
            <nav className="navbar navbar-light navbar-expand-md navigation-clean">
                <div className="container"><a className="navbar-brand" href="https://roadroutine.wordpress.com/">João Nogaroli</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse"
                    id="navcol-1">
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item" role="presentation"><Link className="nav-link active" to="/">Meu Extrato</Link></li>

                        <li className="nav-item" role="presentation"><Link className="nav-link" to="/sobre">Como foi Feito?</Link></li>
                        
                    </ul>
                </div>
                </div>
            </nav>

        </div>
        
    )
    
}

export default Nav;