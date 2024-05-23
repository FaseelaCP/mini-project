import logo from '../../assets/logo.PNG'
function AboutUs() {
  return ( <div className="container d-flex flex-column">
  <div className='mt-5 mb-5'>
    <img className='objectFit:cover' src={logo} style={{height:200, width:200}}/>
  </div>


    <div>
    <h1>About Us</h1>
  </div>
  <div>
    <h3>Welcome to Spinneys!</h3>
    <p>At Spinneys, we're passionate about bringing you the best products at the most competitive prices.
       With a commitment to quality, affordability, and customer satisfaction, we strive to make your shopping experience enjoyable and hassle-free.</p>
    <p>Our team scours the market to handpick a diverse selection of products that cater to your needs and preferences. 
      Whether you're looking for trendy fashion pieces, cutting-edge electronics, home essentials, or unique gifts, we've got you covered.</p>
    <p>Shopping with us is not just about finding great deals; it's about discovering new favorites and enjoying a seamless online shopping experience.
       Our user-friendly interface, secure payment options, and reliable customer support are designed to make your shopping journey effortless and enjoyable.</p>
    <p>Thank you for choosing Spinneys as your go-to destination for all your shopping needs.
       We look forward to serving you and exceeding your expectations with every purchase.</p>
    <p>Happy shopping!</p>
  </div>
  </div> );
}

export default AboutUs;