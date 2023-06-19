"use client"
import LogIn from '../../components/logIn/logIn'
import PostNews from '../../components/postNews/postNews'

import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "@/firebase/firebase";
import { useEffect, useState } from 'react';

export default function layout({children}) {

  const [ user, setUser ] = useState(null)

  const handleVerif = () => {
    console.log(user);
  }

  return (
    <div>
        <LogIn user={user} setUser={setUser} />
        <button className='btn' onClick={handleVerif}>verif</button>
        {user && <PostNews />}
      {children}
    </div>
  )
}
