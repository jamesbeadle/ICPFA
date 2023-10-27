<style>
    .mission-section {
        position: relative;
        color: #ffffff;
    }

    .image-container {
        width: 100%;
        position: relative;
        overflow: hidden;
    }

    .image-container::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 1;
    }

.image-container img {
  width: 100%;
  z-index: 0;
}

.content {
  position: absolute;
  top: 2%;
  z-index: 2;
  padding-left: 32px;
  padding-right: 32px;
}
  
    h1, h2, p {
      padding: 10px;
      border-radius: 5px;
    }

    .team-section{
        padding-left: 32px;
        padding-right: 32px;
    }
    
    /* rest of your styles remain unchanged */
  </style>
  
  <section class="mission-section">
    <div class="image-container">
      <img src="mission.jpg" alt="Football Morning" />
      
      <div class="content">
        <h1 class="text-4xl font-bold mb-4">The Mission</h1>
        <p class="mb-4 text-xl">
        Football is the world's most-watched sport, attracting an estimated 4 billion fans. Beyond the pitch, football acts as a powerful catalyst for social improvement, community development, and providing promising young talent with avenues to success.
    </p>
   
    
    <p class="mb-4 text-xl">
        We have created the ICPFA to provide this huge fanbase a range of high quality apps, decentralised internet services and investment opportunities. 
        We feel doing this will attract a large number of new users to the ICP ecosystem. Our first DAO, OpenFPL, is improving on an existing Web2 service with 10m users.
    </p>

    <h2 class="text-3xl font-bold mt-6 mb-4">ICPFA Community Fund</h2>

    <p class="mb-4 text-xl">
        The ICPFA Community Fund has been created for football related charitable projects around the world. 
        This fund will be used to make a positive impact to people's lives using football. 
    </p>
  
    <p class="mb-4 text-xl">
        The ICPFA Community Fund will be funded by the ICPFA founder, James Beadle. 
        For each ICPFA project that generates maturity interest or revenue, James will deposit 25% of his share into the ICPFA community fund.
    </p>
  
    <p class="mb-4 text-xl">
        100% of the revenue from the FootballGod platform will also be added to the ICPFA community fund.
    </p>

  </section>
  <section class="team-section">
    
  
    <h2 class="text-3xl font-bold mt-6 mb-4">Our Team</h2>
    <br />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div class="text-center">
          <img src="james.png" alt="James Beadle" class="w-24 h-24 rounded-full mx-auto mb-4">
          <h3 class="text-2xl font-bold mb-2">James Beadle</h3>
          <p class="text-xl mb-2">Founder</p>
          <p class="text-base">James spent his early career building financial solutions in the energy sector and then moved into building interactive experiences for Arcstream AV 
            up until the end of 2022. Working alongside large brands such as Ford, Coca-Cola, McKinsey, GSK 
            and more has equipped him with the skills to ensure products are beautifully designed and intrinsically easy to use. 
            James discovered the Internet Computer blockchain in early 2023, with the principles of the IC resonating strongly with his personal beliefs. 
            He feels extremely lucky to be able to contribute to our decentralised future.</p>
        </div>
        
        <div class="text-center">
            <img src="daydrinkr.jpg" alt="James Beadle" class="w-24 h-24 rounded-full mx-auto mb-4">
            <h3 class="text-2xl font-bold mb-2">X: @daydrinkr</h3>
            <p class="text-xl mb-2">Community Manager</p>
            <p class="text-base">George has been in Crypto since 2020 and a part of the ICP community since 2021. A lifelong fan of all things football, 
                he’s actively involved in the fantasy game, watching live football as well as playing for a local club! 
                A computer science graduate, George combines his passion for technology with his enthusiasm for the game. 
            </p>
          </div>

          <div class="text-center">
            <img src="dfd.jpg" alt="James Beadle" class="w-24 h-24 rounded-full mx-auto mb-4">
            <h3 class="text-2xl font-bold mb-2">X: @dfinitydesigner</h3>
            <p class="text-xl mb-2">Designer</p>
            <p class="text-base">The DfinityDesigner is dedicated to transforming the Internet Computer through a user-centered, minimalist design approach. Crafting innovative online products, redefining user experiences, and creating unique brands for the ICP community are his expertise. Projects like OpenFPL and the ICPFA site exemplify his ability to ensure consistent brand identities and unique UI designs. Partnering with him guarantees a cohesive brand identity across our portfolio.
            </p>
          </div>

          <div class="text-center">
            <img src="icpinsider.jpg" alt="James Beadle" class="w-24 h-24 rounded-full mx-auto mb-4">
            <h3 class="text-2xl font-bold mb-2">X: @ICP_Insider</h3>
            <p class="text-xl mb-2">Community Ambassador</p>
            <p class="text-base">ICP_Insider has been part of the ICP community since genesis, forming strong connections within all areas of the ICP ecosystem.
                Time and again he has provided valuable community connections along with playing an important role in the promotion of ICPFA services.</p>
          </div>

          <div class="text-center">
            <img src="max.jpg" alt="James Beadle" class="w-24 h-24 rounded-full mx-auto mb-4">
            <h3 class="text-2xl font-bold mb-2">X: @madmaxic</h3>
            <p class="text-xl mb-2">Gameplay Designer</p>
            <p class="text-base">MadMax is a former avid player of Football Manager who now makes key contributions to OpenFPL gameplay rules. 
                He entered the crypto space with Ethereum in 2015 and deepened his involvement in 2019 with the Internet Computer Protocol. 
                Committed to creating a middleman-free, autonomous world, he prioritizes technology and science over money.
            </p>
          </div>
    
    
      </div>
  </section>
  