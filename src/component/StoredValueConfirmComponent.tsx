import {useSnapshot} from "valtio";
import {appState, formContent} from "../store/store";
import React from "react";


export const StoredValueConfirmComponent = () => {
    const snapshot  = useSnapshot(formContent);
    const appStateSnapshot  = useSnapshot(appState);

    return (
        <>
            {/*
                {snapshot.spsID}
                <br />
                {snapshot.name}
                <br />
                {snapshot.kengen}
                <br />
                {snapshot.kyotuJimubuID}
                <br />
                {appStateSnapshot.prevPageUrl}
                <br />
                {appStateSnapshot.submitUrl}
            */}
        </>
    );
};


