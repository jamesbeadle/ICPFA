
  <script lang="ts">
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import { AccountIdentifier, LedgerCanister } from "@dfinity/ledger-icp";
    import { Principal } from "@dfinity/principal";
  
    let copied = false;
    let walletBalance = writable('0');
    let loading = writable(true);
    let projectCount = "0";
    let amountSpent = "0";
  
    const MY_LEDGER_CANISTER_ID = "ryjl3-tyaaa-aaaaa-aaaba-cai";
    const WALLET_ACCOUNT_ID = "66d542934fd0be74eaef2f5542b14832799be9f85d256555927a9760dcf2ac96";
  
    async function fetchWalletBalance() {
      loading.set(true);
      const ledger = LedgerCanister.create({ canisterId: Principal.fromText(MY_LEDGER_CANISTER_ID) });
      let account: AccountIdentifier = AccountIdentifier.fromHex(WALLET_ACCOUNT_ID);
      const balance = await ledger.accountBalance({ accountIdentifier: account });
      const balanceNumber = Number(balance);
      const formattedBalance = (balanceNumber / 1e8).toFixed(2);
      walletBalance.set(formattedBalance);
      loading.set(false);
  }
  
  
    onMount(() => {
      fetchWalletBalance();
    });
  
    function copyToClipboard() {
      navigator.clipboard.writeText('66d542934fd0be74eaef2f5542b14832799be9f85d256555927a9760dcf2ac96');
      copied = true;
      setTimeout(() => {
        copied = false;
      }, 2000);
    }
    
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Enter') {
        copyToClipboard();
      }
    }
  </script>
  
  <section class="text-white bg-gray-800 body-font">
      <div class="container mx-auto flex pt-4 items-center justify-center flex-col">
          <div class="text-center w-full">
              <h1 class="title-font sm:text-4xl text-2xl mb-4 mt-4 font-medium text-white">The ICPFA Community Fund</h1>
              <div class="flex justify-center">
                    <div class="flex border-2 rounded-lg border-gray-800 p-8 mt-4 md:p-0 md:pb-8 sm:flex-row flex-col lg:w-2/3">
                        <div class="md:text-left text-center md:flex-1 md:basis-3/5 mb-4">
                            <p class="text-xs text-gray-400">Balance</p>
                            {#if $loading}
                                <p class="text-lg font-bold text-white">Loading...</p>
                            {:else}
                                <p class="text-lg font-bold text-white">{walletBalance} ICP</p>
                            {/if}
                            <small class="wallet-address break-all">66d542934fd0be74eaef2f5542b14832799be9f85d256555927a9760dcf2ac96</small>
                            <button on:click={copyToClipboard} on:keydown={handleKeyDown}>
                            <svg fill="#000000" height="12px" width="12px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
                                <g id="Text-files">
                                <path fill="#ffffff" d="M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228
                                    C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999
                                    c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64
                                    h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002
                                    C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228
                                    c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999
                                    c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z
                                    M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699
                                    c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946
                                    c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999
                                    h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z"/>
                                <path fill="#ffffff" d="M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005
                                    c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997
                                    C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z"/>
                                <path fill="#ffffff" d="M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986
                                    c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016
                                    C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z"/>
                                <path fill="#ffffff" d="M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                    s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997
                                    S39.16465,29.4603004,38.6031494,29.4603004z"/>
                                <path fill="#ffffff" d="M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                                    s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997
                                    S29.0059509,37.5872993,28.4444485,37.5872993z"/>
                                </g>
                            </svg>
                            </button>
                            {#if copied}
                            <p class="copied-text">Copied!</p>
                            {/if}
                            <p class="text-xs text-gray-400 mt-4">Projects Supported</p>
                            <p class="text-lg font-bold text-white">{projectCount}</p>
                            <p class="text-xs text-gray-400 mt-4">Amount Spent</p>
                            <p class="text-lg font-bold text-white">{amountSpent} ICP</p>
                        </div>
                        <div class="md:flex-1 md:basis-2/5">
                            <img class="w-100 object-cover object-center rounded-lg" alt="Community Fund" src="merchandising.jpg" />
                        </div>
                    </div>
              </div>
          </div>
      </div>
  </section>
  
  <!-- Text Section -->
  <section class="text-white bg-gray-900">
      <div class="container py-10 mx-auto px-8 md:px-4">
          <div class="flex flex-wrap w-full mb-4">
              <div class="lg:w-2/3 mx-auto">
                    <h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Good Causes</h2>
                    <p class="leading-relaxed text-base mt-4">
                        The ICPFA Community Fund was created to support grassroots footballing causes, starting with providing new kits to over 200 junior football clubs. 
                    </p>
                    <p class="leading-relaxed text-base mt-4">
                        After this the fund will benefit from the proceeds of the OpenFPL fantasy football game after its decentralisation sale, 
                        with the OpenFPL founder committing 25% of his maturity interest to support ICPFA charitable causes worldwide.
                    </p>
                    <p class="leading-relaxed text-base mt-4">
                        We are also preparing for the launch of an updated FootballGod platform in 2024. 
                        The original platform will evolve from a sweepstake prediction game into a multi-game platform, 
                        introducing a variety of new game types, including 'last man standing' contests. 
                        All revenue generated from the FootballGod platform will be directed into the ICPFA Community Fund.
                    </p>
              </div>
          </div>
      </div>
  </section>
  