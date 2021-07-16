import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

    const[index,setIndex] = useState(2);
    const {name,job,image,text} = people[index]
    // console.log(people);

// deals with the error if the data exceed the id more or less than the in the db
    const checkNumber = (number) =>{

        if (number > people.length -1){
            return 0
        }

        if(number < 0){
            return people.length -1
        }

        return number
    }

    // logic for button next and prev

    const nextPerson = () =>{
        setIndex((index)=>{
            let newIndex = index + 1
            return checkNumber(newIndex)
        })
    }

    const prevPerson = () =>{
        setIndex((index)=>{
            let newIndex = index - 1
            return checkNumber(newIndex)
        })
    }

    // here comes the random button logic

    const randomPerson =()=>{
       let randomNumber= Math.floor(Math.random() *people.length)
       if(randomNumber === index){
        randomNumber= index+1
     }
     //checking if the number exceeds the data in the database
        setIndex(checkNumber(randomNumber))
    }
    
    return <article className="review">
        <div className="img-container">
            <img src={image} alt={name} className='person-img'/>
            <span className="quote-icon">
                <FaQuoteRight />
            </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft/>
                </button>
                <button className="next-btn" onClick={nextPerson}>
                    <FaChevronRight/>
                </button>
                </div>
                <button className="random-btn" onClick={randomPerson}>Suprise me</button>
           
        
    </article>;
};

export default Review;