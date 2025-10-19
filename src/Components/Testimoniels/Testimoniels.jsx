import React, { useRef } from 'react'
import './Testimoniels.css'
import next_icon from '../../Assets/next-icon.png'
import back_icon from '../../Assets/back-icon.png'
import abhi from '../../Assets/abhi.png'

const Testimoniels = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = () => {
   if(tx > -50){
    tx -= 23;
   }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = () => {
   if(tx < 0){
    tx += 23;
   }
    slider.current.style.transform = `translateX(${tx}%)`;

}


  return (
    <div className='testimoniels'>
      <img src={next_icon} alt='' className='next-btn' onClick={slideForward}></img>
      <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}></img>
       <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className='slid'>
                    <div className='user-info'>
                       <img src={abhi} alt=''/>
                       <div>
                        <h3>Abhishek Kaldate</h3>
                        <span>A.Shirpura,India</span>
                       </div>
                    </div>
                    <p>This Shrikhand and yogurt has a satisfyingly thick and creamy texture. 
                    It is delicious on its own, with fruit, or as a base for dressings and dips.
                     Its high protein content also makes it a filling and nutritious snack
                     </p>
                </div>               
            </li>

            <li>
                <div className='slid'>
                    <div className='user-info'>
                       <img src={abhi} alt=''/>
                       <div>
                        <h3>Abhishek Kaldate</h3>
                        <span>A.Shirpura,India</span>
                       </div>
                    </div>
                    <p>This Shrikhand and yogurt has a satisfyingly thick and creamy texture. 
                    It is delicious on its own, with fruit, or as a base for dressings and dips.
                     Its high protein content also makes it a filling and nutritious snack
                     </p>
                </div>               
            </li>

            <li>
                <div className='slid'>
                    <div className='user-info'>
                       <img src={abhi} alt=''/>
                       <div>
                        <h3>Abhishek Kaldate</h3>
                        <span>A.Shirpura,India</span>
                       </div>
                    </div>
                    <p>This Shrikhand and yogurt has a satisfyingly thick and creamy texture. 
                    It is delicious on its own, with fruit, or as a base for dressings and dips.
                     Its high protein content also makes it a filling and nutritious snack
                     </p>
                </div>               
            </li>

            <li>
                <div className='slid'>
                    <div className='user-info'>
                       <img src={abhi} alt=''/>
                       <div>
                        <h3>Abhishek Kaldate</h3>
                        <span>A.Shirpura,India</span>
                       </div>
                    </div>
                    <p>This Shrikhand and yogurt has a satisfyingly thick and creamy texture. 
                    It is delicious on its own, with fruit, or as a base for dressings and dips.
                     Its high protein content also makes it a filling and nutritious snack
                     </p>
                </div>               
            </li>

            <li>
                <div className='slid'>
                    <div className='user-info'>
                       <img src={abhi} alt=''/>
                       <div>
                        <h3>Abhishek Kaldate</h3>
                        <span>A.Shirpura,India</span>
                       </div>
                    </div>
                    <p>This Shrikhand and yogurt has a satisfyingly thick and creamy texture. 
                    It is delicious on its own, with fruit, or as a base for dressings and dips.
                     Its high protein content also makes it a filling and nutritious snack
                     </p>
                </div>               
            </li>
        </ul>
       </div>
    </div>
  )
}

export default Testimoniels
