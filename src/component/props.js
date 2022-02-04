import react from 'react';

const Pass1 = (props) => {
    return <div>
        <h2> This is Props </h2>
        <p> {props.fname} </p>
        <p> {props.lname} </p>
        <p> {props.fatname} </p>
    </div>
}

const Pass2 = () => {
    return <div>
        <h2> Props Receiver </h2>
        <Pass1 fname='Ahmed' lname='Raza' fatname='Abdul Razzaq' />
    </div>
}

export default Pass2