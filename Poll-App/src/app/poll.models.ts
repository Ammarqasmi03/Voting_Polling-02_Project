export interface PollOption{
    optionText : string;
    voteCount : number;
}

export interface Poll {
    id ?: number;
    questions : string ;
    options : PollOption[];
    
}
