'use client'
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/config';

export default function LogInOut() {

    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const auth = getAuth(app);
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            };
        });

        return () => unsubscribe();
    
    }, []);

    const signInWithGoogle = async () => {
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        try {
            let theUser = await signInWithPopup(auth, provider);
            console.log(theUser);
        } catch(e) {
            console.error('Error Signing in with Google',e);
        };
    };

    const logOut = async () => {
        return "blah"
    }

    return (
        <div className="flex flex-col items-center justify-around space-y-4">
            {user ? (
                <button className="bg-blue-300 p-2" onClick={logOut}>Log Out</button>       
                ) : (
                <button className="bg-blue-300 p-2" onClick={signInWithGoogle}>Log In</button>
            )}
        </div>
    );
};

/*
I used a variety of tutorials
to understand integrating 
NextJS + Firebase
CREDITS:
https://www.youtube.com/watch?v=S_sV6bYWKXQ&t=624s
https://www.youtube.com/watch?v=lQftwBTCejE&t=1659s
Most replicated: https://www.youtube.com/watch?v=n7Em_HH0jWI
*/