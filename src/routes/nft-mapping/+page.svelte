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
        <img src="merchandising.jpg" alt="Community Fund" />

        <div class="content">
            <h1 class="text-3xl font-bold my-8 mb-8">NFT Mapping</h1>
            
    <p class="mb-4 text-lg">
        You will be able to map your OpenFPL funded.app NFT to your NNS Principal ID here just before the decentralisation sale to receive your $FPL neurons.
    </p>
    
    <p class="mb-4 text-lg">
        An announcement will be made as we approach the sale.
    </p>
        </div>
    </div>
</section>
