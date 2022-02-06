import {appState, formContent} from "../store/store";
import {FormContentInput} from "../domain/FormContentInput";

export function saveFormContentUseCase(formContentInput: FormContentInput) {
    formContent.setFormContentInput(formContentInput);
    // api.postFormContent(formContent.getApiData());
    // appState.moveToNextPage();
    appState.submitForm(formContent);
}