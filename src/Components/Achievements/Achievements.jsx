
import React from 'react';
import './Achievements.css';


const Achievement = () => {
  return (
    <>
    <div className='h-32 md:h-[30vh] lg:h-24 w-full absolute -z-10 bg-blue-900 top-0'></div>

    <div className="achievements-section  relative  top-36 md:top-56 lg:top-28 pb-48 ">
      <h1 className="achievements-heading">SUCCESS STORIES</h1>

      <div className="achievement">
        <h2>ARMEZ</h2>
        <p>
          ARMEZ was born out of the scenario that nowadays, our young generation spends most of its time in indoor games and activities. This daily routine inevitably leads to underdeveloped muscles, a lack of communication skills, and an inability to handle real-time decisions or situations. Our PI, Dr. Khurram, had noticed this prevailing behavior in our youth and wanted to change the narrative. He and his team developed “ARMEZ”, an indigenous real-life combat shooting game. The game was developed for recreational purposes as well as self-defense training of civilians or trainee soldiers. ARMEZ quickly received immense recognition and support from both the public and private sectors. Since its launch in 2017, ARMEZ has featured in many satellite TV programs; it was also successfully installed in Arena, Karachi, and Adventure Park, Jhelum.
        </p>
        <p>We believe that with ARMEZ, we can keep our next generation tech-savvy and physically diligent.</p>
      </div>

      <div className="achievement">
        <h2>AQUA AGRO</h2>
        <p>
          Journey of Aqua Agro is very inspiring and thought-provoking as well. Pakistan is an agricultural country generating 26% of its GDP from agriculture. Pakistan also has the 5th largest population in the world. These two facts were always in the mind of Dr. Khurram; he wanted to contribute to the economic growth and preservation of natural resources in Pakistan. He and the team started working day and night on the idea of “smart agriculture'' and slowly, prototype after prototype, developed the indigenous device able to predict when and how much water a crop requires.
        </p>
        <p>
          Aqua Agro started its journey deployed in small gardens and progressed onto farms and orchards. The final Aqua Agro device was deployed on a Lemon Orchard in Mirpurkhas, and the harvest proved astounding results. The Lemon yield was 30% more than the usual yield while using 50% of regular irrigation water. These results became the foundation for more devices to be developed in many farms in Sindh and Balochistan; they also resulted in farmer training and workshops.
        </p>
        <p>We believe that with Aqua Agro, Pakistan can become the top exporter of many agricultural goods while preserving its natural resources.</p>
      </div>

      <div className="achievement">
        <h2>WEED BOT</h2>
        <p>
          The story of our contributions towards agriculture does not stop at Aqua Agro; we have more to share! While searching for more problems and solutions in the agriculture sector, Dr. Khurram noticed the atrocious human labor involved in taking out weeds sprouting in fields that absorb water and other nutrients farmers provide for the crops. The team then started research work on a robot that could efficiently identify different weeds and remove them in time before they begin to damage the crops.
        </p>
        <p>
          Since the project required funding, the team searched for grants and partnerships. Finally, the team won substantial sponsorship and collaboration with the German Research Center of Artificial Intelligence. The weed bot is under development and expected to launch at the closing of 2022.
        </p>
      </div>

      <div className="achievement">
        <h2>K-ELECTRIC COLLABORATION</h2>
        <p>
          In our pursuit of economic excellence and solutions for societal benefit, time and time again, we worked on providing services and developing projects for various companies. One of our collaborations was with K-electric in which our team worked with K-electric engineers to replace the old control systems present with new and enhanced plug and play control systems.
        </p>
      </div>

      <div className="achievement">
        <h2>SUPARCO COLLABORATION</h2>
        <p>
          Our success stories are many, but in this featured collection, this is the last tale for your motivation. In 2016, SUPARCO initiated a project titled Pakistan National Student Satellite (PNSS), which aimed to launch a Pakistani Satellite into space developed by students from different universities. Many reputable engineering universities UET, NUST, etc., competed for the opportunity to contribute to the satellite program.However, successfully secured five of the projects under this program in different areas:
        </p>
        <ul>
          <li>Payload processing</li>
          <li>Ground station antenna unit</li>
          <li>Battery unit</li>
          <li>Data handling unit</li>
          <li>Payload transmission unit</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Achievement;
