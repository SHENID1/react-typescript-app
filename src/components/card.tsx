import React, {FC, ReactNode} from 'react';


export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary',
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    children?: ReactNode;
}

const Card: FC<CardProps> = ({
                                 width,
                                 height,
                                 children,
                                 variant,
                             }) => {
    // const [state, setState] = React.useState(2);

    return (
        <div style={{width, height, border: variant === CardVariant.primary ? "1px solid black" : "none"}}>
            {children}
        </div>
    );
};

export default Card;