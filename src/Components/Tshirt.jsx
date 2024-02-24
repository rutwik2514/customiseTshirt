import React from 'react'
import Draggable from 'react-draggable';
import "./Tshirt.css"

function Tshirt() {
  const [imgUrl, setImgUrl] = React.useState('black');
  const [design, setDesign] = React.useState();

  function handleChange(e) {
    console.log(e.target.value)
    setImgUrl(e.target.value);
    // console.log()
  }

  function handleClick(event) {
    setDesign(event.target.files[0]);
    console.log(event.target.files[0]);
  }
  React.useEffect(() => {
    console.log("design is", design);
  }, [design])

  return (
    <section className='row justify-content-center' style={{ minHeight: '100vh', width: '100vw' }}>
      <div className='col-md-6 col-12 left-div 'style={{paddingRight:'0'}} >
        <div style={{ marginTop: '30px', marginLeft: '10px' }}>
          <h3 className='display-3'>Welcome,</h3>
          <h3 className='display-3'>You can customise your T-shirts now</h3>
        </div>
        <div style={{ flexDirection: 'column' }} className=' upload-design-div p-3'>
          <div >
            <h6>1. Please select colour of t-shirt</h6>
            <select className='form-select form-select-sm' onChange={handleChange} >
              <option value="black">Black</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="orange">Orange</option>
              <option value="pink">Pink</option>
              <option value="red">Red</option>
              {/* <option value="white">White</option> */}
            </select>
          </div>
          <div style={{ height: '5vh' }}>

          </div>
          <h6 className=''>2. Upload your design</h6>
          <div className='input-group mb-3'>
            <input className='form-control' type="file" onChange={handleClick} />
          </div>

        </div>
        
      </div>

      <div className='col-md-6 tshirt-img-div' style={{ height: '90vh', marginTop:'5px', boxShadow: '1px 10px 30px  #888888' }}>
        <div className='tshirt-img-div' style={{ display: 'flex',alignItems:'center', justifyContent: 'center', minHeight: '100vh', padding: '0', width: '100%' }} >
          <img className='tshirt-img' src={require(`../Assets/tshirt_${imgUrl}.png`)} alt="tshirt" style={{ height: "80vh", width: '100%' }} />
          <div className='drawing-div'>
            {design &&
              <Draggable bounds='parent'>
                <img className='tshirt-design' src={URL.createObjectURL(design)} alt="tshirt" style={{ width: '60%' }} />
              </Draggable>
            }
          </div>
          <div class="footer-copyright2">
          <div class="footer-copyright-wrapper">
            <p class="footer-copyright-text">
              <a class="footer-copyright-link" href="#" target="_self"> ©2024. | Designed By: Rutwik Dhale </a>
            </p>
          </div>
        </div>
        </div>
      </div>
      <div class="footer-copyright">
          <div class="footer-copyright-wrapper">
            <p class="footer-copyright-text">
              <a class="footer-copyright-link" href="#" target="_self"> ©2024. | Designed By: Rutwik Dhale </a>
            </p>
          </div>
        </div>
    </section>
  )
}

export default Tshirt