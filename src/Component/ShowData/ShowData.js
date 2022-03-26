import React from 'react';
import './ShowData.css'
const ShowData = (props) => {
    // const { image, name, price } = props.selectOne
    // console.log(props)
    const { selectOne } = props;
    // console.log(selectOne);
    const { image, name, price } = selectOne;

    return (
        <div className='show-data'>
            <img src={image} alt=''></img>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    );
};

export default ShowData;