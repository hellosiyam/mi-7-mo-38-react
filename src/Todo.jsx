// export default function Todo({task, isTrue}) {
//     return <h2>The Work is {task}</h2>
// }

// Conditional Rendering : 1
// export default function Todo({task, isTrue}) {
//     if (isTrue === true) {
//         return <h2>He {task} the Work</h2>
//     }
//     else{
//         return <h2>He {task} the Work </h2>
//     }
// }

// Conditional Rendering : 2
// export default function Todo({task, isTrue}) {
//     if (isTrue) {
//         return <h2>He {task} the Work</h2>
//     }
//     return <h2>He {task} the Work </h2>
// }

// Conditional Rendering : 3
// export default function Todo({task, isTrue}) {
//     return (
//         <h2>{isTrue? 'Finish' : 'Work'} : {task}</h2>
//     )
// }

// Conditional Rendering : 4
// export default function Todo({task, isTrue}) {
//     return (
//     <h2>{task} {isTrue && ': Done'}</h2>
// )
// }

// Conditional Rendering : 5
export default function Todo({task, isTrue}) {
    return <h2>{task} {isTrue || " : Working"}</h2>
}