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