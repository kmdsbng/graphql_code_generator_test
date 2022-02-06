import React from 'react';

import './App.css';
import {useSnapshot} from "valtio";
import {appState} from "../store/store";
import {StoredValueConfirmComponent} from "./StoredValueConfirmComponent";
import {FormComponent} from "./FormComponent";

function App() {
    const appStateSnapshot = useSnapshot(appState);

    return (
        <>
            {
                !appStateSnapshot.isDisplayForm &&
                <span>Loading data...</span>
            }
            {
                appStateSnapshot.isDisplayForm &&
                <FormComponent />
            }

            {/*
                <StoredValueConfirmComponent />
            */}
        </>
    );
}

export default App;



