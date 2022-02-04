import react from 'react';

const One = () => {
    return <div>
        <p> This is Component One from (moreComponents.js) </p>
        <hr />
    </div>
}

const Two = () => {
    return <div>
        <p> This is Component Two (moreComponents.js) </p>
        <hr />
    </div>
}

const Three = () => {
    return <div>
        <p> I am a child of Component Three <Two /> </p>
        <p> This is Component Three (moreComponents.js) </p>
        <hr />
    </div>
}

export {One, Three};