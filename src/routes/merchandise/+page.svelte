
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
</style>

<section class="mission-section">
    <div class="image-container">
        <img src="community-fund.jpg" alt="Community Fund" />

        <div class="content">
            <h1 class="text-4xl font-bold my-8 mb-8">OpenFPL Merchandising NFTs</h1>
            <p class="mb-4 text-lg">
                The purpose of the OpenFPL Merchandising NFTs is to reward the holder of the NFT when an OpenFPL merchandising purchase is made.
            </p>
        
            <p class="mb-4 text-lg">
                Each NFT relates to a Premier League football club and a specific squad number for that club. When a sale is made through the ICPFA website shop, 10% of the sale price 
                is immediately sent to the NFT holder's wallet.
            </p>
        
            <p class="mb-4 text-lg">
                The ICPFA will also sell items that are specific to a club only. 10% of these sales are shared equally amoungst the number of club merchandising NFTs that exist.
            </p>
        
            <p>We are currently working with suppliers to create the perfect initial OpenFPL football shirts, with the first batch being sent to the ICPFA team for quality assessment in early November 2023.
                When we are happy with the quality, an initial order will be placed for 3,000 shirts. Preorder functionality will be added to the site to enable us to stock the ICPFA shop efficiently.
            </p>
            
            <p class="mb-4 text-lg">We are looking to price our shirts at half the cost of a traditional football shirt, around 10 ICP (Oct 2023)</p>
            
            <p class="mb-4 text-lg">The ICPFA shop will sell a wide range of merchandising items for each club. We plan to provide fans with clothing, equipment and any other 
                merchandising items that our community of users would like to see available.</p>
        
            <p class="mb-4 text-lg">
                A launchpad will begin on Toniq.io in November 2023.
            </p>
        </div>
    </div>
</section>
