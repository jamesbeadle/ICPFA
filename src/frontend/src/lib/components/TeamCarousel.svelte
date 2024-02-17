<script lang="ts">
  let currentMemberIndex = 0;
  const teamMembers = [
    {
      name: "James Beadle",
      role: "Founder",
      image: "james.png",
      bio: "James spent his early career building financial solutions in the energy sector and then moved into building interactive experiences for Arcstream AV up until the end of 2022. Working alongside large brands such as Ford, Coca-Cola, McKinsey, GSK and more has equipped him with the skills to ensure products are beautifully designed and intrinsically easy to use. James discovered the Internet Computer blockchain in early 2023, with the principles of the IC resonating strongly with his personal beliefs. He feels extremely lucky to be able to contribute to our decentralised future.",
    },
    {
      name: "George Robinson",
      role: "Community Manager",
      image: "daydrinkr.jpg",
      bio: "George has been in Crypto since 2020 and a part of the ICP community since 2021. A lifelong fan of all things football, he’s actively involved in the fantasy game, watching live football as well as playing for a local club! A computer science graduate, George combines his passion for technology with his enthusiasm for the game. ",
    },
  ];

  function goPrevious() {
    currentMemberIndex =
      (currentMemberIndex - 1 + teamMembers.length) % teamMembers.length;
  }

  function goNext() {
    currentMemberIndex = (currentMemberIndex + 1) % teamMembers.length;
  }

  function changeMember(index: number) {
    currentMemberIndex = index;
  }
</script>

<section class="text-white bg-gray-800 body-font">
  <div class="mx-auto md:mx-16 flex pt-4 items-center justify-center flex-col">
    <div class="text-center w-full">
      <h1
        class="title-font sm:text-4xl text-2xl md:mb-4 mt-4 font-medium text-white"
      >
        Our Team
      </h1>
      <div class="flex justify-center">
        <div
          class="flex rounded-lg border-gray-800 pl-8 pr-8 md:mt-4 md:p-0 md:pb-8 sm:flex-row flex-col"
        >
          <div class="profile-image-container md:flex-1 md:basis-1/2 mb-4 p-8">
            <img
              src={teamMembers[currentMemberIndex].image}
              alt={teamMembers[currentMemberIndex].name}
              class="rounded-full profile-image w-64 h-64 object-cover"
            />
          </div>

          <div
            class="flex flex-col md:flex-1 md:basis-1/2 justify-center items-center"
          >
            <div class="text-center mb-4">
              <h3 class="text-2xl font-bold title-text mb-2">
                {teamMembers[currentMemberIndex].name}
              </h3>
              <p class="text-xl title-text mb-2">
                {teamMembers[currentMemberIndex].role}
              </p>
              <p class="profile-text">{teamMembers[currentMemberIndex].bio}</p>
            </div>
            <div class="caret-container flex justify-center mb-4">
              <button class="caret-button mr-3" on:click={goPrevious}
                >&lt;</button
              >
              {#each teamMembers as member, index}
                <span
                  class="caret {currentMemberIndex === index ? 'active' : ''}"
                  on:click={() => changeMember(index)}
                  on:keydown={(event) =>
                    event.key === "Enter" && changeMember(index)}
                  tabindex="0"
                  role="button"
                  aria-label="Change to member {member.name}"
                />
              {/each}
              <button class="caret-button ml-3" on:click={goNext}>&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
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
  }

  .caret-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .profile-image-container {
    display: flex; /* This defines a flex container */
    justify-content: center; /* This centers the children on the main axis */
    align-items: center; /* This centers the children on the cross axis */
    min-height: 300px; /* Minimum height for the container */
    flex-basis: 50%; /* Takes up half the width of the parent */
  }

  .profile-text {
    min-height: 150px; /* Ensure the text section doesn't collapse */
  }
</style>
