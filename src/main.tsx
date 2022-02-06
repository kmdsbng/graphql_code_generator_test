import React from 'react';
import ReactDOM from 'react-dom';
import {appState, formContent} from "./store/store";
import App from "./component/App";
import {UserInputData} from "./domain/ApiDto";
import {getRecipe} from "../lib/getRecipe";
import {Recipe} from "../lib/generated/client";

const loadFormData = async () => {
    const e: HTMLInputElement | null = document.getElementById('formData') as HTMLInputElement;
    if (e != null) {
        const value = e.value;
        console.log(value);
        const parsed = JSON.parse(value) as UserInputData;

        console.log(parsed);

        const recipe: Recipe = await getRecipe(1);
        formContent.setInputQueryData(recipe);


        // formContent.setInputApiData(parsed);

        console.log(parsed);
        console.log(formContent);
    }

};

const loadPrevPageUrl = () => {
    const e: HTMLInputElement | null = document.getElementById('prevPageUrl') as HTMLInputElement;
    if (e != null) {
        const value = e.value;
        appState.setPrevPageUrl(value);
    }
};

const loadSubmitUrl = () => {
    const e: HTMLInputElement | null = document.getElementById('submitUrl') as HTMLInputElement;
    if (e != null) {
        const value = e.value;
        appState.setSubmitUrl(value);
    }
};

const main = async () => {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );

    loadPrevPageUrl();
    loadSubmitUrl();
    await loadFormData();
    appState.startDisplayForm();
};

main();
