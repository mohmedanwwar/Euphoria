import React, { Fragment, useEffect, useState } from 'react';
import data from './data';


const BirthdayList = () => {

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
    
   const Age = birthDay.map((age)=>{
    return(
        (age.dob)
    );
   })


const calculateAge = (birthdate) => {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear(); 
    return age;
  }
  

  const birthdate = Age; 
  const age = calculateAge(birthdate);

  const sendMassege = (id) =>{

    const massege = birthDay.filter((person) => person.id === id)
    console.log(massege)
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