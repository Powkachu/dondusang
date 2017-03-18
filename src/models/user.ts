export class User
{
    username : string;
    id       : number;
    rhesus   : string;

    constructor(username: string, id: number, rhesus: string)
    {
        this.username = username;
        this.id       = id;
        this.rhesus   = rhesus;
    }
}