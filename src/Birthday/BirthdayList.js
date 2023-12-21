import React, { Fragment, useEffect, useState } from 'react';
import data from './data';


const BirthdayList = () => {

    // Sum Two arr and sorting less tahn to greater than 

    const compareNumbers= (a, b) => { 
        return b - a;
      }
    
    const arrNumber = [1,70,50,40,2,3,4,12,30,100]
    const arrNumber1= [5,80,60,0,6,13,14,10,20,110]
    const sumArr = arrNumber.concat(arrNumber1)
  
     console.log(sumArr)
        console.log("Sum Two arr and sorting less tahn to greater than ",sumArr.sort(compareNumbers))

        // 0000000000000000000000000000000000000000000000000000000000

    const [people, setPeople] = useState(data)


        let objectDate = new Date();
        let day = objectDate.getDate();
        let month = objectDate.getMonth();
        let monthbirth = month + 1


 const birthDay = people.filter((person)=>person.mounth === monthbirth && person.day === day) 

 const onDelete = (id) => {
    const newlist = birthDay.filter((person) => person.id !== id)
   setPeople(newlist)

   if(newlist.length === 0){
    console.log("empty",newlist)
   }else{
    console.log(newlist)
   }
   
   
}
console.log(people)
    
   const Age = birthDay.map((age)=>{
    return(
        (age.dob)
    );
   })



const calculateAge = (birthdate) => {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear(); 
    console.log("00",birthDate)
    return age;
  }

  const birthdate = Age; 
  const age = calculateAge(birthdate);
  console.log(birthDay)
  console.log(age)

  const sendMassege = (id) =>{

    const massege = birthDay.filter((person) => person.id === id)
    const name = massege[0]?.name 
    console.log(`Happy Birthday to : ${name} 🎉`) 
  }


   return(
        <Fragment> 
        
                 {birthDay.map((person) => {
                        
                        return (
                            <>
                            <article key={person.id} className="person">
                              <img src={person.image} alt={person.name} className='imagePerson' />
                                <div className='w-50'>
                                    <h4> {person.name}</h4>
                                    <h5> title : {person.title}</h5>
                                    <p>{age} years</p>
                                  

                                </div>
                                <div className='d-flex Icons'>
                                
    
                                       <button className='btn btn' name={person.id} onClick={() => onDelete(person.id)}>
                                           <i className="fa-solid fa-trash trash"></i>
                                        </button>
                                       <button className='btn btn' name={person.id} onClick={()=> sendMassege(person.id)}><i className="fa-solid fa-message mes"></i>
                                          </button>
                                    
                                
                                  
                                 </div>
                                
                            </article>
                            </>
                        )
                    })}

        </Fragment>
    );

};

export default BirthdayList;