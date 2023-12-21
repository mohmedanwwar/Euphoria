import React, { useState } from 'react';


const ChangeColor = () => {
    const [backgroundColor, setBackgroundColor] = useState('#ffffff'); 

  const handleColorChange = (e) => {
    const selectedColor = e.target.value;
    setBackgroundColor(selectedColor);
    console.log(selectedColor)
    document.body.style.backgroundColor = selectedColor;

    const icon =  document.getElementById("person")
    console.log(icon)
    icon.style.color = selectedColor;

  };

    return (
        <div  className="chngecolor">
             
            <div className='colorpicker'>
         
                    
                 <input
                                type="color"
                                id="colorPicker"
                                value={backgroundColor}
                                onChange={handleColorChange}
                                className="colors"

                  
                            />
                            <i class="fa-solid fa-paint-roller person"  id='person'></i>   
                        
            </div>
                   
            </div>
      );
}
 
export default ChangeColor;