import {FormContentInput} from "./FormContentInput";
import {KengenOption, KyotuJimubuOption, UserInputData} from "./ApiDto";
import {Recipe} from "../../lib/generated/client";

export class FormContent {
    editorKengen: string = "";
    editorKyotuJimubuID: number | null = null;

    isEdit: boolean = false;
    spsID: string = "";
    name: string = "";
    kengen: string = "";
    kyotuJimubuID: number | null = null;
    kengenOptions: KengenOption[] = [];
    kyotuJimubuOptions: KyotuJimubuOption[] = [];
    recipe: Recipe = {id: 1, title: "", imageUrl: ""};

    setInputApiData(input: UserInputData) {
        this.editorKengen = input.editor.editorsKengen;
        this.editorKyotuJimubuID = input.editor.belongingKyotuJimubuID;

        this.spsID = input.spsID;
        this.name = input.name;
        this.kengen = input.kengen;
        this.kyotuJimubuID = input.kyotuJimubuID;
        this.kengenOptions = input.kengenOptions;
        this.kyotuJimubuOptions = input.kyotuJimubuOptions;

        if (input.spsID != "") {
            this.isEdit = true;
        }
    }

    setFormContentInput(input: FormContentInput) {
        // this.spsID = input.spsID;
        // this.name = input.name;
        // this.kengen = input.kengen;
        // this.kyotuJimubuID = input.kyotuJimubuID;
    }

    setInputQueryData(recipe: Recipe) {
        this.recipe = recipe;
    }
}