<script lang="ts">
    let currentMemberIndex = 0;
    const teamMembers = [
        {
            name: "James Beadle",
            role: "Founder",
            image: "james.png",
            bio: "James spent his early career building financial solutions in the energy sector and then moved into building interactive experiences for Arcstream AV up until the end of 2022. Working alongside large brands such as Ford, Coca-Cola, McKinsey, GSK and more has equipped him with the skills to ensure products are beautifully designed and intrinsically easy to use. James discovered the Internet Computer blockchain in early 2023, with the principles of the IC resonating strongly with his personal beliefs. He feels extremely lucky to be able to contribute to our decentralised future."
        },
        {
            name: "X: @daydrinkr",
            role: "Community Manager",
            image: "daydrinkr.jpg",
            bio: "George has been in Crypto since 2020 and a part of the ICP community since 2021. A lifelong fan of all things football, he’s actively involved in the fantasy game, watching live football as well as playing for a local club! A computer science graduate, George combines his passion for technology with his enthusiasm for the game. " 
        },
        {
            name: "X: @DfinityDesigner",
            role: "Designer",
            image: "dfd.jpg",
            bio: "The DfinityDesigner is dedicated to transforming the Internet Computer through a user-centered, minimalist design approach. Crafting innovative online products, redefining user experiences, and creating unique brands for the ICP community are his expertise. Projects like OpenFPL and the ICPFA site exemplify his ability to ensure consistent brand identities and unique UI designs. Partnering with him guarantees a cohesive brand identity across our portfolio."
        },
        {
            name: "X: @ICP_Insider",
            role: "Community Ambassador",
            image: "icpinsider.jpg",
            bio: "ICP_Insider has been part of the ICP community since genesis, forming strong connections within all areas of the ICP ecosystem. Time and again he has provided valuable community connections along with playing an important role in the promotion of ICPFA services."
        },
        {
            name: "X: @madmaxic",
            role: "Gameplay Designer",
            image: "max.jpg",
            bio: "MadMax is a former avid player of Football Manager who now makes key contributions to OpenFPL gameplay rules. He entered the crypto space with Ethereum in 2015 and deepened his involvement in 2019 with the Internet Computer Protocol. Committed to creating a middleman-free, autonomous world, he prioritizes technology and science over money."
        }
    ];
  
    function goPrevious() {
      currentMemberIndex = (currentMemberIndex - 1 + teamMembers.length) % teamMembers.length;
    }
  
    function goNext() {
      currentMemberIndex = (currentMemberIndex + 1) % teamMembers.length;
    }

    function changeMember(index: number) {
        currentMemberIndex = index;
    }
  </script>
  
  <style>
    .team-section {
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
    }

    h1, p {
        padding: 10px;
        border-radius: 5px;
    }

    .text-center {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

        
    .profile-text{
        font-size: 0.8rem !important;
    }

    .text-center {
        display: flex;
        flex-direction: column;
        align-items: center; /* Horizontal centering */
        justify-content: flex-start; /* Top align */
        gap: 10px; /* Gap between child elements */
    }
    .profile-text {
        font-size: 0.8rem;
    }

    .title-text{
        padding: 0px !important;
    }
    .caret {
      display: inline-block;
      width: 12px;
      height: 12px;
      background: grey;
      margin: 0 5px;
      border-radius: 50%;
    }
    .caret.active {
      background: white;
    }/* Add this new CSS class */
    .caret-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 20px; /* Optional: Add some top margin for spacing */
    }
    .image-container img {
        width: 100%;
        max-width: 400px;  /* or whatever maximum width you prefer */
        margin: 0 auto;  /* centers the image if it's less than 100% width */
        z-index: 0;
        display: block;  /* helps with the centering */
    }

    @media (max-width: 767px) {
        .image-container img {
        width: 100%;
        max-width: 100px;  /* or whatever maximum width you prefer */
        margin: 0 auto;  /* centers the image if it's less than 100% width */
        z-index: 0;
        display: block;  /* helps with the centering */
        }
    }

    @media (min-width: 768px) {
        .image-container img {
        width: 100%;
        max-width: 200px;  /* or whatever maximum width you prefer */
        margin: 0 auto;  /* centers the image if it's less than 100% width */
        z-index: 0;
        display: block;  /* helps with the centering */
    }
    }

  </style>
<section>
    <div class="team-section">
        <div class="image-container">
        <img src="mission.jpg" alt="Football Morning" />
        <div class="content">
            <h1 class="text-4xl font-bold mb-1">Our Team</h1>
            <div class="text-center">
                <img src="{teamMembers[currentMemberIndex].image}" alt="{teamMembers[currentMemberIndex].name}" class="rounded-full profile-image">
                <h3 class="text-2xl font-bold title-text">{teamMembers[currentMemberIndex].name}</h3>
                <p class="text-xl title-text">{teamMembers[currentMemberIndex].role}</p>
                <p class="profile-text">{teamMembers[currentMemberIndex].bio}</p>
                </div>
                <!-- Wrap the caret-container with another div -->
            <div class="caret-wrapper">
                <div class="caret-container">
                <button on:click={goPrevious}>&lt;</button> 
                {#each teamMembers as member, index}
                    <span class="caret {currentMemberIndex === index ? 'active' : ''}" 
                    on:click={() => changeMember(index)} 
                    on:keydown={(event) => event.key === 'Enter' && changeMember(index)}
                    tabindex="0" 
                    role="button" 
                    aria-label="Change to member {member.name}"></span>
                {/each} 
                <button on:click={goNext}>&gt;</button>
                </div>
            </div>
    
            
        </div>
        </div>
    </div>
</section>
  