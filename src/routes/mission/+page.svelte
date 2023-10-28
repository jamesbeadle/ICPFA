<style>
   .mission-section {
        position: relative;
        color: #ffffff;
    }

    .image-container {
        width: 100%;
        position: relative;
    }

    .image-container::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.8);
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
        width: 100%;
    }

    h1, p {
        padding: 10px;
        border-radius: 5px;
    }

    /* Mobile optimization */
    @media (max-width: 768px) {
        .content {
            position: relative;
            padding-top: 20px;
            top: unset;
        }

        .image-container::before {
            background-color: rgba(0, 0, 0, 0.6);
        }
    }
    
  </style>
  
  <section class="mission-section">
    <div class="image-container">
      <img src="mission.jpg" alt="Football Morning" />
      
      <div class="content">
        <h1 class="text-4xl font-bold mb-4">The Mission</h1>
        <p class="mb-4 text-lg">
        Football is the world's most-watched sport, attracting an estimated 4 billion fans. Beyond the pitch, football acts as a powerful catalyst for social improvement, community development, and providing promising young talent with avenues to success.
    </p>
   
    
    <p class="mb-4 text-lg">
        We have created the ICPFA to provide this huge fanbase a range of high quality apps, decentralised internet services and investment opportunities. 
        We feel doing this will attract a large number of new users to the ICP ecosystem. Our first DAO, OpenFPL, is improving on an existing Web2 service with 10m users.
    </p>

    <h2 class="text-3xl font-bold mt-6 mb-4">ICPFA Community Fund</h2>

    <p class="mb-4 text-lg">
        The ICPFA Community Fund has been created for football related charitable projects around the world. 
        This fund will be used to make a positive impact to people's lives using football. 
    </p>
  
    <p class="mb-4 text-lg">
        The ICPFA Community Fund will be funded by the ICPFA founder, James Beadle. 
        For each ICPFA project that generates maturity interest or revenue, James will deposit 25% of his share into the ICPFA community fund.
    </p>
  
    <p class="mb-4 text-lg">
        100% of the revenue from the FootballGod platform will also be added to the ICPFA community fund.
    </p>

  </section>
  