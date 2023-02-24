import React, { useState } from 'react'
import { db, auth } from '../firebase'
import firebase from 'firebase'

function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <div className='dropdown'>
                        <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-link-45deg"></i>
                        </button>
                        <ul className='dropdown-menu'>
                            <li>
                                <input className='dropdown-item form-control form-control-sm' type='file' name='File' onChange={e =>setMsg(e.target.value)}/>
                            </li>
                        </ul>
                    </div>
                    <input className='form-control' placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)}/>
                    <button className='btn btn-outline-success' type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage
