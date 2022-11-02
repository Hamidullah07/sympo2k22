import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact_container'>
      <div className='staff_detail'>
          {/* <h1>Faculty Members</h1> */}
      </div>
      <div className='sec_detail'>
        <h1>Student Co-Ordinators</h1>
        <h2>Seceretary : Hari Prasath 7550201066</h2>
        <h2>Joint-Seceretary : Vijayalakshmi 9003165736</h2>
      </div>
      <div className='tech_details'>
        <h1>Technical Co-Ordinators</h1>
          <h2>Technical Event Head  </h2>
          <h2>Santhoshi 9384204728</h2>
          <div className='detail_one'>
            <h6>Crack The Code</h6>
            <p>Subburajan.P 8608000190</p>
            <p>Yuvashree.P 9176280306</p>
            <h6>Soliloquy</h6>
            <p>Ashish Commuri 8056203920</p>
            <p>Kirthiga.R 6379975217</p>
          </div>  
          <div className='detail_two'>
            <h6>Corporate Mind</h6>
            <p>Barath Kumar.S 7358014191</p>
            <p>Krishna.A 9715563166</p>
            <h6>Freezography</h6>
            <p>Barath.S 9698568737</p>
            <p>Manikandan.S 6379598593</p>
          </div> 
      </div>
      <div className='tech_details'>
        <h1>Non-Technical Co-Ordinators</h1>
          <h2>Non-Technical Event Head </h2>
            <h2> Vignesh.M 6383347368</h2>
          <div className='detail_three'>
            <h6>Remote Control </h6>
            <p>Syed Thaqi Ur-Rahman.S 8681949465</p>
            <p>Jayashree.V 6374236063</p>
            <h6>Memetic</h6>
            <p>Gopinathan.G 9710812905</p>
            <p>Imran Ahmed.M 8072946976</p>
          </div>  
          <div className='detail_four'>
            <h6>Adtronium (ADZAP)</h6>
            <p>Javith Abbas.S.B 7358584399</p>
            <p>Punniyam Monisha 9384000357 </p>
            <h6>Mimo (MIME)</h6>
            <p>Karthikeyan.K 7338780217</p>
            <p>Janani.A 7305804620</p>
          </div> 
          <div className='detail_five'>
            <h6>Danza</h6>
            <p>Subash.S 7871262294</p>
            <p>Nikitha.R 6385457660</p>
          </div>
      </div>
    </div>
  )
}

export default Contact