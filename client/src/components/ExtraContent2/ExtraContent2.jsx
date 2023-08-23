import { Link } from 'react-router-dom'
import './ExtraContent2.css'
const ExtraContent2 = () => {
  return (
    <section className='section-space1 pattern__white'>
     <div className='custom-container1'>
     <div className='row1'>
     <div className='col1'>
       <div>
        <div className='heading-in1 '>
         <h2 className='heading-in__title1'>
                 Something for every style 
         </h2>
         <p className='heading-in__subtitle1'>Create a door that is truly yours. Choose between a wide range of Veneers.</p>
         </div>
       </div>
       <div className='theme-box theme-box--doors'>
       <ul className='theme-box__ul'>
        
        <li className='theme-box__li'>
        <a className='theme-box__link'>
         <img src='https://ik.imagekit.io/durian1985/durian/durian_in/defaultskins/boost79/images/doors/Swatch/00_American-Walnut.jpg' />
        </a>
        </li>
        
        <li className='theme-box__li'>
        <a className='theme-box__link'>
         <img src='https://ik.imagekit.io/durian1985/durian/durian_in/defaultskins/boost79/images/doors/Swatch/00_European-Beach.jpg' />
        </a>
        </li>
        
        <li className='theme-box__li'>
        <a className='theme-box__link'>
         <img src='https://ik.imagekit.io/durian1985/durian/durian_in/defaultskins/boost79/images/doors/Swatch/00_Gollden-Teak.jpg' />
        </a>
        </li>

        <li className='theme-box__li'>
        <a className='theme-box__link'>
         <img src='https://ik.imagekit.io/durian1985/durian/durian_in/defaultskins/boost79/images/doors/Swatch/00_MACASSAR-EBONY.jpg' />
        </a>
        </li>

        <li className='theme-box__li'>
        <a className='theme-box__link'>
         <img src='https://ik.imagekit.io/durian1985/durian/durian_in/defaultskins/boost79/images/doors/Swatch/00_PALI-SANTOS.jpg' />
        </a>
        </li>

        <li className='theme-box__li'>
        <a className='theme-box__link'>
         <img src='https://ik.imagekit.io/durian1985/durian/durian_in/defaultskins/boost79/images/doors/Swatch/00_SIBERIAN-LARCH.jpg' />
        </a>
        </li>
        </ul>
        </div>
        <div className='button-wrap1'>
               <Link to={'/customization'}><button className='btn1'>Customize</button></Link> 
        </div>
     </div>

     </div>

     </div>
    </section>
  )
}

export default ExtraContent2