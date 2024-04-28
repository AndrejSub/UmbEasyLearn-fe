export interface loginDto {
    email:string | undefined | null,
    password:string | undefined | null,
}

export interface registerDto {
    email:string | undefined | null,
    password:string | undefined | null,
    created_at: any
    updated_at: any
    role:string

}

export interface valid {
    valid:boolean;
}

export interface token{
    token:string;
    valid:boolean;
}

export interface userinfo{
    userId:string
    email:string
    avatar:string
    created_at:string
    updated_at:string
}
export interface useravatar{
    email:string | undefined | null
    avatar:string | undefined | null
}