<script>
    let balance = "0";
    let projectCount = "0";
    let amountSpent = "0";
</script>

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
        text-align: center;
        width: 100%;
    }

    .stats {
        display: flex;
        justify-content: space-around;
        margin-bottom: 20px;
    }

    .stat {
        flex: 1;
        text-align: center;
        padding: 20px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.1);
    }

    h1, h2, p {
        padding: 10px;
        border-radius: 5px;
    }

    section.text-white {
        max-width: 800px;
        margin: 0 auto;
    }
</style>

<section class="mission-section">
    <div class="image-container">
        <img src="community-fund.jpg" alt="Community Fund" />

        <div class="content">
            <h1 class="text-4xl font-bold my-8 mb-8">The ICPFA Community Fund</h1>
            <div class="stats">
                <div class="stat">
                    <p class="text-sm">Balance</p>
                    <p class="text-lg">{balance} ICP</p>
                </div>
                <div class="stat">
                    <p class="text-sm">Projects Supported</p>
                    <p class="text-lg">{projectCount}</p>
                </div>
                <div class="stat">
                    <p class="text-sm">Amount Spent</p>
                    <p class="text-lg">{amountSpent} ICP</p>
                </div>
            </div>
            <section class="text-white p-8 rounded-lg">
                <h2 class="text-2xl font-semibold mb-2">How Good Causes Are Chosen</h2>
                <p class="mb-4 text-lg">
                    The ICPFA will issue NFTs through a process to be confirmed in 2024. These NFTs will be used to raise proposals for grassroots football causes that require funding.
                </p>
            </section>
        </div>
    </div>
</section>
