import React, { Fragment, useEffect, useState } from 'react';
import Birthday from './Birthday';
import data from './data';

const BirthdayList = () => {

    const [people, setPeople] = useState(data)


    function clearAllRecords() {
		setPeople([])
	}

    const dobs =  people.map((person)=>{
             return (
                     (person.dob)
                  );
           })



         let objectDate = new Date();
        let day = objectDate.getDate();
        let month = objectDate.getMonth();
        let monthbirth = month + 1
        let year = objectDate.getFullYear();
  


 const birthDay = people.filter((person)=>person.mounth === monthbirth && person.day === day  ) 

    // const brithDays = people.filter((pers)=> pers.day === day)
    // console.log("Happy Birthday to 🎉",brithDays )



    // const compareBirthdays = (birthdays) => {

    //     const today = new Date();
    //     const currentMonth = today.getMonth() + 1; 
    //     const currentDate = today.getDate();

    //     for (const birthday of birthdays) {
    //       const parts = birthday.split('-');
    //       const birthMonth = parseInt(parts[1], 10);
    //       const birthDate = parseInt(parts[2], 10);
            
    //       console.log("parts",parts)
    //       console.log(birthMonth)
    //       console.log(birthDate)
          
    //       if (birthMonth === currentMonth && birthDate === currentDate) {
    //         console.log(`Happy Birthday to ${birthday}! 🎉`);
   
    //       }
    //     }
    //     console.log(birthdays)

    //   }
   
    //  compareBirthdays(dobs)


    return(
        <Fragment>
                 {birthDay.map((person) => {
                        
                        return (
                            <>
                            <article key={person.id} className="person">
                                <img src={person.image} alt={person.name} className='imagePerson' />
                                <div>
                                    <h4> Name : {person.name}</h4>
                                    <h5> title : {person.title}</h5>
                                    <p>{person.age} years</p>
                                  

                                </div>
                                <div className='d-flex Icons'>
                                  <button className='btn btn'> <i className="fa-solid fa-trash trash"></i> </button>  
                                    <button className='btn btn '> <i className="fa-solid fa-message mes"></i></button>

                                 </div>
                            </article>
                            </>
                        )
                    })}

        </Fragment>
    );

};

export default BirthdayList;