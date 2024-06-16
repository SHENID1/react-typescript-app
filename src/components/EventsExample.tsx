import React, {useState} from 'react';

const EventsExample = () => {
    const [value, setValue] = useState<string>('');
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
        function clickHandler() {
            console.log(value);
        }
    return (
        <div>
            <input value={value} onChange={changeHandler} />
            <button onClick={clickHandler}>НАЖМИ НА МЕНЯ</button>
        </div>
    );
};

export default EventsExample;