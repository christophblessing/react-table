import React from "react";

type AppContextType = {
    errorMessage?: string;
    setErrorMessage?: (error: string) => void;
    loading?: boolean;
    setLoading?: (loading: boolean) => void;
}

export const AppContext = React.createContext<AppContextType>({});
