"use client"
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { collection, getDocs, getDoc } from 'firebase/firestore'
import { db } from "@/firebase/firebase"
import { auth } from "@/firebase/firebase";
import { useState, useEffect } from "react";


export default function page() {

    const [data, setData] = useState([]);

    // useEffect(() => {
    //     onAuthStateChanged(auth, user => {
    //         if(user !== null) {
    //             console.log('utilisateur connecté');
    //         } else {
    //             console.log('not connect');
    //         }
    //     })
    // }, [])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const userCol = collection(db, 'news')
    //             const snapshot = await getDocs(userCol).then((snapshot) => {
    //                 let userList = []
    //                 snapshot.docs.map((doc) => {
    //                     userList.push({...doc.data(), id: doc.id})
    //                 })
    //                 console.log(userList);
    //                 setData(userList)
    //             })
    //         } catch (error) {
    //             console.error('Erreur lors de la récupération des données Firestore:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);
    const dataTest = [
        {
            id: 1,
            title: 'Faite attestion a vos économies',
            text: "Dans un contexte économique incertain, il est crucial de faire preuve de prudence et de prendre soin de vos économies. Une gestion financière responsable vous permet de préserver votre sécurité financière. Établissez un budget, épargnez régulièrement, réduisez les dépenses inutiles et prévoyez un fonds d'urgence. Faites des choix éclairés et investissez judicieusement. Prenez le contrôle de vos finances et sécurisez votre avenir.",
            imageUrl: 'https://exemple.com/image1.jpg',
        },
        {
            id: 2,
            title: 'Titre 2',
            text: 'Texte 2',
            imageUrl: 'https://exemple.com/image2.jpg',
        },
        // Ajoutez d'autres éléments de données ici
    ];
    const handleData = () => {
        console.log('update');
        console.log(data);
        setData(dataTest)
    }

    return (
        <div>
            <button className="bg-red-300" onClick={handleData}>Clic to update</button>
            {data.map((item) => {
                return <div key={item.id} className="m-12 card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="../ballonElephan.jpeg" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <p>{item.text}</p>
                    </div>
                </div>
            })}
        </div>
    )
}
