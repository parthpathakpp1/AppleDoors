import { Link } from 'react-router-dom'
import './ExtraContent.css'
const ExtraContent = () => {
  return (
    <>
<section className='section-space'>
    <div className='custom-container'>
    <div className='heading'>
     <h2 className='heading__title'>
          Customize
        <span className='s1'> doors</span>
        <br className='b1' />
        <span className='s1'>your way</span>
     </h2>
     <p className='para1'>Express your personal style with customised designs for your home. Be it a living room, dining or bedroom, give your home everything it needs to be its best</p>
    </div>

    </div>
      <div className='custom-container'>
      <div className='row'>
      <div className='col'>
      <div>
        <img src='https://ik.imagekit.io/durian1985/durian/durian_in/defaultskins/boost79/images/doors/Moodboard_opt2.jpg' alt='image' />
      </div>
      </div>
      <div className='col2'>
         <div>
            <div className='heading-in heading-in--with-subtitle'>
                <h2 className='heading-in__title'>
                  Wide ranges of materials 
                  <br />
                  and treatment
                </h2>
                <p className='heading-in__subtitle'>Decide the style, mood and colours that would work together and help you create a place that evokes your style & personality</p>
                <div className='button-wrap'>
                <Link to={'/customization'}><button className='btn'>Customize</button></Link>  
                </div>
            </div>
         </div>
      </div>

      </div>

      </div>
    </section>
    </>
    

    
  )
}

export default ExtraContent