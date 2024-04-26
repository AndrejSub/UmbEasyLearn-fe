export interface loginDto {
    email:string | undefined | null,
    password:string | undefined | null,
}

export interface registerDto {
    email:string | undefined | null,
    password:string | undefined | null,
    date_created: Date
    date_updated: Date
    role:string

}

export interface valid {
    valid:boolean;
}