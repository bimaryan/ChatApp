import React from 'react'
import firebase from 'firebase'
import { auth } from '../firebase.js'

function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div>
            <div className='container'>
                <h1 className='text-center'>ChatApp</h1>
                <center>
                    <div className='card mt-3'>
                        <div className='card-body'>
                            <h3>L O G I N</h3>
                            <a className='btn btn-info btn-sm mt-3' onClick={signInWithGoogle}>Sign In With Google</a>
                        </div>
                    </div>
                </center>
            </div>
        </div>
    )
}

export default SignIn

