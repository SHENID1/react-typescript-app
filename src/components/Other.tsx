import React from 'react';
import Card, {CardVariant} from "./card";
import EventsExample from "./EventsExample";

const Other = () => {
    return (
        <div>
            <Card width={"300px"} height={"300px"} variant={CardVariant.primary}>
                <button>л=
                    Кнопка
                </button>
                <div></div>
            </Card>
            <EventsExample/>
        </div>
    );
};

export default Other;