import React, { useState } from "react";
import AppStatus from "./components/AppStatus";
import Table from "./components/Table";
import { AppContext } from "./context/AppContext";
import { ThemeProvider } from "styled-components";
import theme from "./configs/theme";

const App: React.FC = () => {
    const [ loading, setLoading ] = useState(true);
    const [ errorMessage, setErrorMessage ] = useState("");

    return (
      <ThemeProvider theme={theme}>

        <AppContext.Provider value={{
            errorMessage, setErrorMessage, loading, setLoading
        }}
        >
            <AppStatus />
            <Table />
        </AppContext.Provider>
        </ThemeProvider>
    );
};

export default App;
