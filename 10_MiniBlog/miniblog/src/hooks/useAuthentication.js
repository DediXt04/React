import { db } from "../firebase/config"

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }

    const createUser = async (data) => {
        checkIfIsCancelled();

        setLoading(true);
        setError("");

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await updateProfile(user, {
                displayName: data.displayName
            })

            setLoading(false)
            return user

        } catch (error) {
            

            let systemErrorMessage

            if (error.code === "auth/user-not-found") {
                systemErrorMessage = "Usuário não encontrado."
              } else if (error.code === "auth/wrong-password") {
                systemErrorMessage = "Senha incorreta."
              } else if (error.code === "auth/invalid-email") {
                systemErrorMessage = "E-mail inválido."
              }
            setLoading(false)
            setError(systemErrorMessage)
        }
    }

    //logout
    const logout = () => {
        checkIfIsCancelled()

        signOut(auth)
    }

    //login
    const login = async (data) => {
        checkIfIsCancelled();

        setLoading(true)
        setError("")

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)
          } catch (error) {
            let systemErrorMessage;
          
            switch (error.code) {
                case "auth/invalid-credential": // senha ou e-mail errados
                  systemErrorMessage = "E-mail ou senha incorretos.";
                  break;
                case "auth/too-many-requests":
                  systemErrorMessage = "Muitas tentativas. Tente novamente mais tarde.";
                  break;
                case "auth/network-request-failed":
                  systemErrorMessage = "Erro de conexão. Verifique sua internet.";
                  break;
                default:
                  systemErrorMessage = `Erro inesperado: ${error.message || "Tente novamente."}`;
                  break;
              }
              
          
            setError(systemErrorMessage)
            setLoading(false)
          }
          
    }

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        auth,
        createUser,
        error,
        login,
        loading,
        logout,

    }
}