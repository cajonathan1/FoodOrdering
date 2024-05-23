import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import { PropsWithChildren, createContext, useEffect, useState } from "react";

type AuthData = {};

const AuthContext = createContext<AuthData>({});

export default function AuthProvider({children}: PropsWithChildren) {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        const fetchSession = async() => {
            const { data, error } = await supabase.auth.getSession();
            setSession(data.session);
        };

        fetchSession();
    }, []);

    return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}