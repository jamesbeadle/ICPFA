<script>
    let balance = "0";
    let projectCount = "0";
    let amountSpent = "0";
</script>

<style>
   .community-section {
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
    text-align: center;
    width: 100%;
}

.stats {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 110px;
    margin-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 5px;
}

.stat {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
}

h1, h2, p {
    margin: 0; /* Remove margin */
    padding: 10px;
    border-radius: 5px;
}

section.text-white {
    max-width: 800px;
    margin: 0 auto;
}

.text-row-item {
    margin: 0 !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    text-align: center !important;
    height: 60px !important;
}




</style>

<section class="community-section">
    <div class="image-container">
        <img src="merchandising.jpg" alt="Community Fund" />

        <div class="content">
            <h1 class="text-2xl font-bold">The ICPFA Community Fund</h1>
            <div class="stats">
                <div class="stat">
                    <p class="text-xs text-row-item">Balance</p>
                    <p class="text-lg text-row-item">{balance} ICP</p>
                </div>
                <div class="stat">
                    <p class="text-xs text-row-item">Projects Supported</p>
                    <p class="text-lg text-row-item">{projectCount}</p>
                </div>
                <div class="stat">
                    <p class="text-xs text-row-item">Amount Spent</p>
                    <p class="text-lg text-row-item">{amountSpent} ICP</p>
                </div>
            </div>
            <section class="text-white rounded-lg">
                <h2 class="text-xl font-semibold mb-2">How Good Causes Are Chosen</h2>
                <p class="mb-4 text-md">
                    The ICPFA will issue NFTs through a process to be confirmed in 2024. These NFTs will be used to raise proposals for grassroots football causes that require funding.
                </p>
            </section>
        </div>
    </div>
</section>
