import React from 'react';
import './styles/Destinations.css';
import { topDestinations, internationalStays } from '../data/data'; // Adjust the path as necessary
import Marquee from 'react-fast-marquee';
const Destinations = () => {
  return (
    <>
      <div className="dest_d_container">
        <h1 className='dest_d_title'>𝚃𝚘𝚙 𝙳𝚎𝚜𝚝𝚒𝚗𝚊𝚝𝚒𝚘𝚗𝚜</h1>
        <div className="dest_upper_cont">
          <Marquee gradient={false} speed={40} pauseOnClick pauseOnHover loop={0}>
          {topDestinations.map(destination => (
            <div className="dest_box" key={destination.id}>
              <img src={destination.image} alt={`Destination ${destination.name}`} />
              <h1>{destination.name}</h1>
            </div>
          ))}
          </Marquee>
        </div>
        <div className="dest_low_cont">
          <div className="dest_texts">
            <h2 className='dest_left'>𝕰᥊⍴ᥣ᥆rᥱ ᑲᥱs𝗍 sᥱᥣᥣіᥒg ⍴ᥲᥴkᥲgᥱs 𝖿᥆r</h2>
            <h3 className='dest_right'>𝐈𝐧𝐭𝐞𝐫𝐧𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐒𝐭𝐚𝐲𝐬</h3>
          </div>
          <div className="dest_items">
          <Marquee gradient={false} speed={40} pauseOnClick pauseOnHover loop={0}>
            {internationalStays.map(stay => (
              <div className="dest_item" key={stay.id}>
                <img src={stay.image} alt={`Destination ${stay.name}`} />
                <h3>{stay.name}</h3>
              </div>
            ))}
          </Marquee>
          </div>
        </div>
      </div>
    </>
  );
}

export default Destinations;
