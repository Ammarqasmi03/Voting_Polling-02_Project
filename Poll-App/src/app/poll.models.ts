export interface PollOption{
    optionText : String;
    votes : number;
}

export interface Poll {
    id : number;
    question : String ;
    options : PollOption[];
    
}
