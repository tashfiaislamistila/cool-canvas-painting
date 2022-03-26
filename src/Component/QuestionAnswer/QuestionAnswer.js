import React from 'react';
import './QuestionAnswer.css'
const QuestionAnswer = () => {
    return (
        <div className='qus-ans'>
            <h1>Question Answer</h1>
            <h2> Props Vs State?</h2>
            <p>Answer: Props is like argument to a function.When you create a component inside of react and you are going to pass it the props that you want to give to it.State is handle in the component and you can update it inside the component.While props are handle outside the component and must be update outside of the component.When you change the sate inside of your application it is going to re-render that section of your application. But props you can not actually change them you need to change them outside the component.In props you can pass into a component.In other hand state state is handled inside of that component. </p>
            <h2>How react works?</h2>
            <p>Answer: React is a javascript library.For any other kind of library you can use
                it, import it and also use its method.React has virtual dom and it is manipulated the browser dom.React simply compare the virtual dom to real
                dom.React is able to decide very firstly where it is changed in our markup.After that it is render the result very firstly in our screen.
            </p>
        </div>
    );
};

export default QuestionAnswer;