import React, { Fragment, useEffect, useState } from 'react';
import data from './data';


const BirthdayList = (props) => {

    // Sum Two array and sorting less tahn to greater than 

    const compareNumbers= (a, b) => { 
        return a - b;
      }
    
    const arrNumber = [1,70,50,40,2,3,4,12,30,100]
    const arrNumber1= [5,80,65,0,6,13,14,10,20,110]
    const sumArr = arrNumber.concat(arrNumber1)
  
     console.log(sumArr)
        console.log("Sum Two array and sorting less tahn to greater than ",sumArr.sort(compareNumbers))

        // 0000000000000000000000000000000000000000000000000000000000

    const [people, setPeople] = useState(data)

 
    const calculateAge = (birthdate) => {
        const birthDate = new Date(birthdate);
        const currentDate = new Date();
        let age = currentDate.getFullYear() - birthDate.getFullYear(); 
        return age
      }

      const peopleWithAge = people.map(person => {
        const age = calculateAge(person.dob);
        return { ...person, age };
      });
      
      console.log('People with age:', peopleWithAge);
      
        let objectDate = new Date();
        let day = objectDate.getDate();
        let month = objectDate.getMonth();
        let monthbirth = month + 1


            const birthDay = peopleWithAge.filter((person)=>person.mounth === monthbirth && person.day === day) 

          const clear = document.querySelector("#clear")
      const  Delete = (e,id) =>{
        const index =   e.target.closest(".person")
        console.log(index)
            const dataId = parseInt(index.getAttribute("data-id"))
            console.log(typeof(dataId))

          
            // onDelete(data)

            const newlist = birthDay.filter((person) => person.id !== dataId)
            setPeople(newlist)


           props.func(newlist)




        if(newlist.length === 0){
        console.log("empty",newlist)
        clear.click();

        }else{
        console.log(newlist)
        }
         const deleteName = document.querySelectorAll(".name")
         deleteName.forEach((name)=>{
                const nameAttribute = parseInt(name.getAttribute("data-id"))
                if(nameAttribute === dataId){
                    name.querySelector('strong').remove();
                    
                }
         })
   
           }
    
   const Age = birthDay.map((age)=>{
    return(
        (age.dob)
    );
   })

  const sendMassege = (id) =>{

    const massege = birthDay.filter((person) => person.id === id)
    const name = massege[0]?.name 
    console.log(`Happy Birthday to : ${name} 🎉`) 
  }
//   console.log(e.target.closest(".person").getAttribute("data-id"))
// onDelete(person.id)}



console.log(props)


   return(
        <Fragment> 
        
                 {birthDay.map((person) => {
                        
                        return (
                            <>
                            <article key={person.id} className="person" data-id={person.id}>
                              <img src={person.image} alt={person.name} className='imagePerson' />
                                <div className='w-50'>
                                    <h4 > {person.name}</h4>
                                    <h5> title : {person.title}</h5>
                                    <p>{person.age} years</p>
                                  

                                </div>
                                <div className='d-flex Icons'>
                                
    
                                       <button className='btn btn' name={person.id} onClick={Delete}>
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