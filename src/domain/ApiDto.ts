export interface EditorDto {
    belongingKyotuJimubuID: number | null;
    editorsKengen: string;
}

export interface KengenOption {
    name: string;
    value: string;
}

export interface KyotuJimubuOption {
    name: string;
    value: number;
}

export interface UserInputData {
    editor: EditorDto;
    kengen: string;
    kengenOptions: KengenOption[];
    kyotuJimubuID: number | null;
    kyotuJimubuOptions: KyotuJimubuOption[];
    name: string;
    spsID: string;
}

export interface UserPostData {
    kengen: string;
    kyotuJimubuID: number | null;
    name: string;
    spsID: string;
}
