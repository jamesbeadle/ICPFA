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

    .oc-icon{
        vertical-align: middle;
        width: 2rem;
        height: auto;
        margin-left: 0.5rem;
    }
</style>

<section class="mission-section">
    <div class="image-container">
        <img src="merchandising.jpg" alt="Community Fund" />

        <div class="content">
            <h1 class="text-3xl font-bold my-8 mb-8">OpenFPL Merchandising NFTs</h1>
            <p class="mb-4 text-lg">
                OpenFPL is proud to introduce its unique Merchandising NFTs designed to financially reward NFT holders through merchandising sales on the ICPFA website.
            </p>
        
            <p class="mb-4 text-lg">
                Our NFT offering consists of 100 unique NFTS, distributed across the 20 Premier League football teams. Each team is represented by specific shirt numbers; for example, Manchester United includes numbers 7,9,10,18,11,16 & 20 - popular legendary numbers.
            </p>
        
            <p class="mb-4 text-lg">
                Specific Club & Number Ownership: When a merchandising item associated with a specific shirt number and club is sold, 10% of the sale price is immediately transferred to the NFT holder of that combination.
            </p>
        
            <p>Home Original Collection: We also offer items that don't carry specific shirt numbers. For sales of these unnumbered items from our "Home Original" collection, the 10% revenue share is evenly split among the NFT holders of all the numbers for the corresponding team.
            </p>
            
            <p class="mb-4 text-lg">We are in the process of having our shirts manufactured, striving for a high quality well fitting training top. Following successful evaluations, an initial batch of 3,000 shirts will be ordered. A pre-order function will be introduced on the ICPFA website for efficient stock management in the coming months.</p>
            
            <p class="mb-4 text-lg">Our shirts will be priced at approximately 10 ICP (as of October 2023), making them around half as expensive as traditional football shirts.</p>
        
            <p class="mb-4 text-lg">
                As part of our commitment to social responsibility, each NFT will also fund the kitting out of a Sunday League football team here in the UK. 
                This initiative aims to provide support to teams in need while also promoting the OpenFPL brand.
            </p>

            <p class="mb-4 text-lg">
                While our initial focus is on football shirts, our ambition doesn't stop there. We aim to gradually expand our catalog to include a range of additional items, from casual wear like shorts to everyday accessories and memorabilia such as keyrings and water bottles. We're open to community input to ensure we meet the diverse needs and wants of our audience.
            </p>

            <p class="mb-4 text-lg">
                Mark your calendars for our launchpad event on Toniq.io in November 2023.
            </p>
            
            <p class="mb-4 text-lg inline-block align-middle">
                Please join our OpenChat to stay up to date with any developments
                <a target="_blank" class="oc-icon inline-block align-middle" href="https://oc.app/community/jpibo-3yaaa-aaaar-au7hq-cai/channel/182526718610465230108426284010821007369/?ref=zv6hh-xaaaa-aaaar-ac35q-cai">
                    <img src="openchat.png" alt="OpenChat">
                </a>      
            </p>
            
        </div>
    </div>
</section>
