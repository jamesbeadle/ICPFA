<script>
    // Your Svelte script here, e.g., import statements or component logic
    let balance = "0";
    let projectCount = "0";
    let amountSpent = "0";
</script>

<section class="bg-gray-900 text-white p-8 rounded-lg">
    <div class="flex justify-between items-center">
        <h1 class="text-4xl font-bold">Community Fund</h1>
        <div class="flex space-x-4">
            <div>
                <p class="text-sm">Balance</p>
                <p>{balance} ICP</p>
            </div>
            <div>
                <p class="text-sm">Projects Supported</p>
                <p>{projectCount}</p>
            </div>
            <div>
                <p class="text-sm">Amount Spent</p>
                <p>{amountSpent} ICP</p>
            </div>
        </div>
    </div>
</section>

<section class="text-white p-8 rounded-lg">
    <h2 class="text-2xl font-semibold mb-2">How Good Causes Are Chosen</h2>
    <p class="mb-4 text-lg">
        The ICPFA will issue NFTs through a process to be confirmed in early 2024. These NFTs will be used to raise proposals for good causes that require funding.
    </p>
    
    <!-- Additional content here -->
</section>
