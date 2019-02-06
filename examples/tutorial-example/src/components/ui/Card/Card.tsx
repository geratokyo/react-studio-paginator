import * as React from 'react'; 


export interface CardProps{
    className?:string;
    title:string; 
    image:string;
}


export const Card: React.SFC<CardProps> = (props)=>{

    let cls = props.className || "";
    return (
        <div className={"card " + cls}>
            <div
                style={{backgroundImage:`url(${props.image})`}} 
                className="card__image">
            </div>
            <div className="card__title">
                <h5>{props.title}</h5>
            </div>
        </div>
    )
}