import { useEffect, useState } from 'react';

import { supabase } from '../lib/supabaseClient.js';
import AuthContext from './AuthContext.js';

function AuthProvider({ children }) {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        async function loadSession() {
            const { data, error } = await supabase.auth.getSession();

            if (!isMounted) return;

            if (error) {
                console.error(
                    'Error al recuperar la sesión:',
                    error.message,
                );
            }

            setSession(data?.session ?? null);
            setLoading(false);
        }

        loadSession();

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange(
            (_event, currentSession) => {
                if (!isMounted) return;

                setSession(currentSession);
                setLoading(false);
            },
        );

        return () => {
            isMounted = false;
            subscription.unsubscribe();
        };
    }, []);

    async function signOut() {
        const { error } = await supabase.auth.signOut();

        if (error) throw error;
    }

    const value = {
        session,
        user: session?.user ?? null,
        loading,
        signOut,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;