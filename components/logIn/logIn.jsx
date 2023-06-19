"use client"
import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "@/firebase/firebase";


export default function logIn( {user, setUser} ) {

    // const [user, setUser] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogIn = async (e) => {
        e.preventDefault()
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    const handleLogOut = (e) => {
        e.preventDefault()
        signOut(auth).then(() => {
            console.log(auth.currentUser);
            setUser(null)
        }).catch((error) => {
            console.log("something wrong");
        })
        console.log(auth.currentUser);
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user !== null) {
                console.log('utilisateur connecté');
                console.log(user);
                setUser(user)
            } else {
                console.log('not connect');
            }
        })
    }, [handleLogIn])

    return (
        <>
            {auth.currentUser ?
                <button className='btn btn-primary' onClick={handleLogOut} >LogOut</button>
                :
                <div className="flex ml-24">
                    <details>
                        <summary className="list-none cursor-pointer btn">
                            +
                        </summary>
                        <form onSubmit={handleLogIn} className="p-2 bg-base-100">
                            <input onChange={(e) => setEmail(e.target.value)} name="email" id="email" type="email" placeholder="email" className="input input-ghost w-full max-w-xs" />
                            <input onChange={(e) => setPassword(e.target.value)} name="password" id="password" type="password" placeholder="password" className="input input-ghost w-full max-w-xs" />
                            <button type="submit" className="btn btn-ghost">Connect</button>
                        </form>
                    </details>
                </div>
                }
        </>
    )
}
