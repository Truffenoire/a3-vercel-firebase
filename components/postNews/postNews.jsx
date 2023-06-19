'use client'
import { useState, useEffect } from "react";
import { storage } from '../../firebase/firebase'
import { ref, uploadBytes, listAll } from 'firebase/storage'

export default function postNews() {

  const imageListRef = ref(storage, "images/")
  const [ imageUpload, setImageUpload ] = useState(null)
  const [ title, setTitle ] = useState('')
  const [ article, setArticle ] = useState('')


  const handleUpload = (e) => {
    if(imageUpload == null) return;
    console.log(imageUpload);
    const imageRef = ref(storage, `images/${imageUpload.name + imageUpload.size}`)
    uploadBytes(imageRef, imageUpload).then(() => {
      alert('image chargé')
    })
  }

  useEffect(() => {
    listAll(imageListRef).then((res) => {
      console.log(res.items.length);
    })
  },[])

  return (
    <div>
      <form>
        <input type="file" onChange={(e) => setImageUpload(e.target.files[0])} />
        <input className="input input-ghost w-full max-w-xs" type="text" placeholder="titre" onChange={(e) => setTitle(e.target.value)}/>
        <textarea className="input input-ghost w-full max-w-xs" type="text" placeholder="article" onChange={(e) => setArticle(e.target.value)}/>
        <button onClick={handleUpload} type="submit" className="btn">Upload</button>
      </form>
    </div>
  )
}
