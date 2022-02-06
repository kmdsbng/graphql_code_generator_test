import {FormContent} from "./FormContent";
import {UserPostData} from "./ApiDto";

export class AppState {
    isDisplayForm: boolean = false;
    submitUrl: string = "";
    prevPageUrl: string = "";

    startDisplayForm() {
        this.isDisplayForm = true;
    }

    setPrevPageUrl(value: string) {
        this.prevPageUrl = value;
    }

    moveToPrevPage() {
        location.href = this.prevPageUrl;
    }

    setSubmitUrl(value: string) {
        this.submitUrl = value;
    }

    submitForm(formContent: FormContent) {
        const data: UserPostData = {
            spsID: formContent.spsID,
            name: formContent.name,
            kengen: formContent.kengen,
            kyotuJimubuID: formContent.kyotuJimubuID
        };

        const form: HTMLFormElement = document.getElementById("submit_form") as HTMLFormElement;
        form.action = this.submitUrl;
        const inputData: HTMLInputElement = document.getElementById("data_input") as HTMLInputElement;
        inputData.value = JSON.stringify(data);

        if (this.submitUrl == "") {
            alert("submitUrlが指定されていません");
            return;
        }

        form.submit();

        // return fetch(this.submitUrl, {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }).then(response => {
        //     if (response.status >= 200 && response.status < 300) {
        //         return response;
        //         console.log(response);
        //         window.location.reload();
        //     } else {
        //         console.log('Somthing happened wrong');
        //     }
        // }).catch(err => err);
    }
}