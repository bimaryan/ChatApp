import React from 'react'
import { auth } from '../firebase.js'

function SignOut() {
    return (
        <div>
            <div className='navbar navbar-expand-lg bg-success navbar-dark fixed-top'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='/'>ChatApp</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <button className='btn btn-danger btn-sm' onClick={() => auth.signOut()}>Sign Out</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignOut
