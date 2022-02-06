import {useSnapshot} from "valtio";
import {formContent} from "../store/store";
import {FormContentInput} from "../domain/FormContentInput";
import {SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import React from "react";
import {saveFormContentUseCase} from "../usecase/saveFormContent";
import {KOKUSAI_KORYU_KENGEN} from "../domain/Const";
import {isKokusaiKoryuKengen} from "../domain/Util";

const saveForm = (data: FormContentInput) => {
    saveFormContentUseCase(data);
};

window.onbeforeunload = function() {
    return confirm("変更内容が失われます。このままページを離れてよろしいですか？");
}

function getDefaultKengen(kengen: string, editorKengen: string): string {
    if (kengen != "") {
        return kengen;
    }

    if (isKokusaiKoryuKengen(editorKengen)) {
        return "";
    }

    return editorKengen;

}

export const FormComponent = () => {
    const snapshot = useSnapshot(formContent);
    const defaultKengen = getDefaultKengen(snapshot.kengen, snapshot.editorKengen);
    const defaultKyotuJimubuID = (snapshot.kyotuJimubuID != null) ? snapshot.kyotuJimubuID : snapshot.editorKyotuJimubuID;
    const defaultValues: FormContentInput = {
        id: snapshot.recipe.id,
        title: snapshot.recipe.title,
        imageUrl: snapshot.recipe.imageUrl || "",
        submited: false
    };
    const {register, setValue, getValues, watch, handleSubmit, formState: {errors}} = useForm<FormContentInput>({
        mode: "onBlur",
        defaultValues: defaultValues
    });
    const onSubmit: SubmitHandler<FormContentInput> = data => {
        setValue("submited", true);
        window.onbeforeunload = null;
        saveForm(data);
    };
    const onError: SubmitErrorHandler<FormContentInput> = errors => {
        console.log('error:', errors);
    };

    const kengenOptions = (isKokusaiKoryuKengen(snapshot.editorKengen)) ?
        snapshot.kengenOptions :
        snapshot.kengenOptions.filter(opt => opt.value == snapshot.editorKengen);

    const kengenOptionElements = kengenOptions.map((item) => {
        return <option value={item.value} key={item.value}>{item.name}</option>
    });

    const kyotuJimubuOptions = (isKokusaiKoryuKengen(snapshot.editorKengen)) ?
        snapshot.kyotuJimubuOptions :
        snapshot.kyotuJimubuOptions.filter(opt => opt.value == snapshot.editorKyotuJimubuID)

    const kyotuJimubuOptionElements = kyotuJimubuOptions.map((item) => {
        return <option value={item.value} key={item.value}>{item.name}</option>
    });

    const submited: boolean = watch("submited");

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit, onError)}>

                <div className="columns">
                    <div className="column is-2">
                        SPS-ID
                    </div>
                    <div className="column is-4">
                        <input className="input" type="text" defaultValue="" {...register("id", {required: true, maxLength: 255})} />
                        {errors.id && <p className="help is-danger">入力してください</p>}
                    </div>
                </div>

                <div className="columns">
                    <div className="column is-2">
                        title
                    </div>
                    <div className="column is-4">
                        <input className="input" type="text" {...register("title", {required: true, maxLength: 255})} />
                        {errors.title && <p className="help is-danger">入力してください</p>}
                    </div>
                </div>

                <div className="columns">
                    <div className="column is-2">
                        imageUrl
                    </div>
                    <div className="column is-4">
                        <input className="input" type="text" {...register("imageUrl", {required: true, maxLength: 255})} />
                        {errors.imageUrl && <p className="help is-danger">入力してください</p>}
                    </div>
                </div>


                <div className="columns">
                    <div className="column is-5 has-text-centered">
                        {submited ?
                            <button type="button" className="button" disabled >保存</button> :
                            <input type="submit" className="button is-primary" value="保存"></input>
                        }
                    </div>
                </div>


            </form>

            <form id="submit_form" method="POST">
                <input type="hidden" id="data_input" name="data" />
            </form>
        </>

    );
};
