import React, {useState} from 'react';
import './Contact.css';

const Contact = () => {
    const [yourLoc, setYourLoc] = useState('Ncai karachi')
const inputHandler = (e) => {
 setYourLoc( e.target.value)
}

    return (
        <section className="text-gray-300 body-font relative bg-[#02152f] pb-16">
        <div className="w-full xl:w-[90%] px-5 py-24 mx-auto flex sm:flex-nowrap justify-between flex-wrap relative md:top-20 lg:top-0">
          <div className="lg:w-2/3 h-[82vh] md:w-1/2 lg:mr-4 xl:mr-12  rounded-lg overflow-hidden flex items-end justify-start relative">
            <iframe width="100%" height="100%" className="absolute inset-0 top-5"  title="map" scrolling="no" src={`https://maps.google.com/maps?q=${yourLoc}&hl=en&z=6&output=embed`}></iframe>
            
          </div>
          <div className="lg:w-1/3 md:w-[45%]  flex flex-col lg:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-100 text-lg lg:text-2xl mb-1 font-medium title-font">Get in Touch</h2>
<p className="leading-relaxed mb-5">We value your feedback! Reach out to us and let us know how we can enhance our services.</p>


            <div className="relative mb-4">
              <label for="loc" className="leading-7 text-sm">Location</label>
              <input type="text" id="loc" name="loc" className="w-full  rounded border border-gray-300 bg-[#5c5c5c28] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={inputHandler}/>
            </div>
           <div className="relative flex lg:flex-col flex-wrap py-6 rounded shadow-md bg-[#07062e46]">
  <div className="w-1/2 lg:w-full px-6 mb-3 flex items-start">
    <i className="ri-map-pin-fill text-red-700 mr-3" style={{ fontSize: '24px' }}></i> {/* Address icon */}
    <div>
      <h2 className="title-font font-semibold text-gray-100 tracking-widest text-xs">ADDRESS</h2>
      <p className="mt-1 font-light">Floor HPCC Building, NED University Of Engineering & Technology, Karachi, Karachi City, Sindh</p>
    </div>
  </div>
  <div className="w-1/2 lg:w-full px-6 mt-4 lg:mt-0 flex items-start">
    <i className="ri-mail-fill text-green-700 mr-3" style={{ fontSize: '24px' }}></i> {/* Email icon */}
    <div>
      <h2 className="title-font font-semibold text-gray-100 tracking-widest text-xs">EMAIL</h2>
      <a className="text-amber-600 leading-relaxed font-light">ncaismartcitylab@gmail.com</a>
    </div>
  </div>
  <div className="w-1/2 lg:w-full px-6 mt-4 lg:mt-0 flex items-start">
    <i className="ri-phone-fill text-amber-600 mr-3" style={{ fontSize: '24px' }}></i> {/* Phone icon */}
    <div>
      <h2 className="title-font font-semibold text-gray-100 tracking-widest text-xs">PHONE</h2>
      <p className="leading-relaxed font-light">+92-2199261261 (Ext.2682)</p>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>
    );
};

export default Contact;
