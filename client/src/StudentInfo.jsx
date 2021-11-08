import React, { useState } from 'react';
import styles from './studentinfo.module.css';

fetch("http://localhost:4000/hey")
.then(res => console.log(res.json()))

let student = {
    student_id: 'X00161363',
    fname: 'Andrew',
    lname: 'Skelly'
}

let course = {
    title: 'Computer Science',
    level: 'Honours Bachelor Degree',
}

let results = {
    Networking: 70,
    Maths: 58,
    DataAdmin: 82
}


function StudentInfo() {
    const [state, setstate] = useState(8)

    function add() {
        if (state >= 8) {
            console.log('Cannot Go over value of 8')
        } else {
            setstate(state + 1)
            nfq()
        }
    }

    function sub() {
        if (state <= 6) {
            console.log('Cannot Go under value of 6')
        } else {
            setstate(state - 1)
            nfq()
        }
    }

    function nfq() {
        if (state === 8) {
            course.level = 'Honours Bachelor Degree'
        } else if (state === 7) {
            course.level = 'Ordinary Bachelor Degree'
        } else if (state === 6) {
            course.level = 'Higher Certificate'
        } else {
            console.log('err')
        }
    }
    return (
        <div className={styles.StudentInfo}>
            <h3 className={styles.text}>Results Panel App</h3>
            <h4 className={styles.text}>Hello {student.fname}</h4>
            <h5 className={styles.text}>Details</h5>
            <ul className={styles.text}>
                <li>Student ID: {student.student_id}</li>
                <li>Fullname: {student.fname} {student.lname}</li>
                <li>Title: {course.title}</li>
                <li>NFQ: {state}</li>
                <button onClick={add}>+</button>
                <button onClick={sub}>-</button>
                <li>Title: {course.level}</li>
                <li>{Object.keys(results)[0]} {results.Networking}</li>
                <li>{Object.keys(results)[1]} {results.Maths}</li>
                <li>{Object.keys(results)[2]} {results.DataAdmin}</li>
                <li>Total: {results.DataAdmin + results.Maths + results.Networking}</li>
            </ul>
        </div>
    );
}

export default StudentInfo

