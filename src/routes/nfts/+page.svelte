<script lang="ts">
    import type { Team } from '../../types/team';
    type NFT = {
        name: string;
        club: string;
        shirtNumber: number;
        imageUrl: string;
        earned: number;
        roi: number;
        itemsSold: number;
        teamId: number;
    };

    type Collection = {
        name: string;
        bio: string;
        termsAndConditions: string;
        launchpadPrice: number;
        stoicLink: string;
        nfts: NFT[];
        artistName: string;
        artistBio: string;
        artistPicture: string;
    };

    let teams: Team[] = [
        { id: 1, name: "Arsenal" },
        { id: 2, name: "Aston Villa" },
        { id: 3, name: "Bournemouth" },
        { id: 4, name: "Brentford" },
        { id: 5, name: "Brighton" },
        { id: 6, name: "Burnley" },
        { id: 7, name: "Chelsea" },
        { id: 8, name: "Crystal Palace" },
        { id: 9, name: "Everton" },
        { id: 10, name: "Fulham" },
        { id: 11, name: "Liverpool" },
        { id: 12, name: "Luton" },
        { id: 13, name: "Man City" },
        { id: 14, name: "Man United" },
        { id: 15, name: "Newcastle" },
        { id: 16, name: "Nottingham Forest" },
        { id: 17, name: "Sheffield United" },
        { id: 18, name: "Tottenham" },
        { id: 19, name: "West Ham" },
        { id: 20, name: "Wolves" }
    ];

    const collections: Collection[] = [
        {
            name: 'Open FPL Merchandising Rights NFT',
            bio: 'The wallet holding an OpenFPL Merchandising Rights NFT will be sent 10% of relevant sales revenue immediately when a purchase is made through the ICPFA shop.',
            termsAndConditions: `Each NFT is associated with a specific club and shirt number combination. Relevant sales include any items sold on the ICPFA site pertaining to this combination. If an item is sold that is related to the club of your Merchandising NFT, but not linked to any of the original special shirt numbers, then the revenue will be divided. Every NFT holder for that particular club will receive an equal share of this collective club merchandising revenue.
            The ICPFA plans to expand its range of fantasy games into all leagues of football, this means that NFTs for relegated teams will still generate revenue while a team is absent from the OpenFPL game.
            `,
            launchpadPrice: 250.00,
            stoicLink: 'https://stoic.ic0.app/',
            nfts: [
                {
                    name: 'Arsenal Home 14',
                    club: 'Arsenal',
                    shirtNumber: 14,
                    imageUrl: 'thumbs/shirts/1_ARS_14.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Arsenal Home 10',
                    club: 'Arsenal',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/1_ARS_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Arsenal Home 7',
                    club: 'Arsenal',
                    shirtNumber: 7,
                    imageUrl: 'thumbs/shirts/1_ARS_7.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Arsenal Home 8',
                    club: 'Arsenal',
                    shirtNumber: 8,
                    imageUrl: 'thumbs/shirts/1_ARS_8.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Arsenal Home 23',
                    club: 'Arsenal',
                    shirtNumber: 23,
                    imageUrl: 'thumbs/shirts/1_ARS_23.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Arsenal Home 6',
                    club: 'Arsenal',
                    shirtNumber: 6,
                    imageUrl: 'thumbs/shirts/1_ARS_6.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Aston Villa Home 9',
                    club: 'Aston Villa',
                    shirtNumber: 9,
                    imageUrl: 'thumbs/shirts/2_AVL_9.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 2
                },
                {
                    name: 'Aston Villa Home 11',
                    club: 'Aston Villa',
                    shirtNumber: 11,
                    imageUrl: 'thumbs/shirts/2_AVL_11.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 2
                },
                {
                    name: 'Aston Villa Home 10',
                    club: 'Aston Villa',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/2_AVL_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 2
                },
                {
                    name: 'Aston Villa Home 6',
                    club: 'Aston Villa',
                    shirtNumber: 6,
                    imageUrl: 'thumbs/shirts/2_AVL_6.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 2
                },
                {
                    name: 'Aston Villa Home 7',
                    club: 'Aston Villa',
                    shirtNumber: 7,
                    imageUrl: 'thumbs/shirts/2_AVL_7.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 2
                },
                {
                    name: 'Bournemouth Home 7',
                    club: 'Bournemouth',
                    shirtNumber: 7,
                    imageUrl: 'thumbs/shirts/3_BOU_7.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 3
                },
                {
                    name: 'Bournemouth Home 24',
                    club: 'Bournemouth',
                    shirtNumber: 24,
                    imageUrl: 'thumbs/shirts/3_BOU_24.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 3
                },
                {
                    name: 'Bournemouth Home 8',
                    club: 'Bournemouth',
                    shirtNumber: 8,
                    imageUrl: 'thumbs/shirts/3_BOU_8.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 3
                },
                {
                    name: 'Bournemouth Home 13',
                    club: 'Bournemouth',
                    shirtNumber: 13,
                    imageUrl: 'thumbs/shirts/3_BOU_13.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 3
                },
                {
                    name: 'Brentford Home 17',
                    club: 'Brentford',
                    shirtNumber: 17,
                    imageUrl: 'thumbs/shirts/4_BRE_17.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 4
                },
                {
                    name: 'Brentford Home 19',
                    club: 'Brentford',
                    shirtNumber: 19,
                    imageUrl: 'thumbs/shirts/4_BRE_19.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 4
                },
                {
                    name: 'Brentford Home 7',
                    club: 'Brentford',
                    shirtNumber: 7,
                    imageUrl: 'thumbs/shirts/4_BRE_7.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 4
                },
                {
                    name: 'Brentford Home 10',
                    club: 'Brentford',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/4_BRE_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 4
                },
                {
                    name: 'Brighton Home 17',
                    club: 'Brighton',
                    shirtNumber: 17,
                    imageUrl: 'thumbs/shirts/5_BRI_17.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 5
                },
                {
                    name: 'Brighton Home 25',
                    club: 'Brighton',
                    shirtNumber: 25,
                    imageUrl: 'thumbs/shirts/5_BRI_25.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 5
                },
                {
                    name: 'Brighton Home 13',
                    club: 'Brighton',
                    shirtNumber: 13,
                    imageUrl: 'thumbs/shirts/5_BRI_13.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 5
                },
                {
                    name: 'Brighton Home 5',
                    club: 'Brighton',
                    shirtNumber: 5,
                    imageUrl: 'thumbs/shirts/5_BRI_5.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 5
                },
                {
                    name: 'Burnley Home 2',
                    club: 'Burnley',
                    shirtNumber: 2,
                    imageUrl: 'thumbs/shirts/6_BUR_2.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 6
                },
                {
                    name: 'Burnley Home 5',
                    club: 'Burnley',
                    shirtNumber: 5,
                    imageUrl: 'thumbs/shirts/6_BUR_5.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 6
                },
                {
                    name: 'Burnley Home 6',
                    club: 'Burnley',
                    shirtNumber: 6,
                    imageUrl: 'thumbs/shirts/6_BUR_6.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 6
                },
                {
                    name: 'Burnley Home 11',
                    club: 'Burnley',
                    shirtNumber: 11,
                    imageUrl: 'thumbs/shirts/6_BUR_11.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 6
                },
                {
                    name: 'Burnley Home 10',
                    club: 'Burnley',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/6_BUR_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 6
                },
                {
                    name: 'Chelsea Home 8',
                    club: 'Chelsea',
                    shirtNumber: 8,
                    imageUrl: 'thumbs/shirts/7_CHE_8.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 7
                },
                {
                    name: 'Chelsea Home 26',
                    club: 'Chelsea',
                    shirtNumber: 26,
                    imageUrl: 'thumbs/shirts/7_CHE_26.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 7
                },
                {
                    name: 'Chelsea Home 11',
                    club: 'Chelsea',
                    shirtNumber: 11,
                    imageUrl: 'thumbs/shirts/7_CHE_11.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 7
                },
                {
                    name: 'Chelsea Home 13',
                    club: 'Chelsea',
                    shirtNumber: 13,
                    imageUrl: 'thumbs/shirts/7_CHE_13.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 7
                },
                {
                    name: 'Chelsea Home 10',
                    club: 'Chelsea',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/7_CHE_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 7
                },
                {
                    name: 'Chelsea Home 25',
                    club: 'Chelsea',
                    shirtNumber: 25,
                    imageUrl: 'thumbs/shirts/7_CHE_25.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 7
                },
                {
                    name: 'Crystal Palace Home 11',
                    club: 'Crystal Palace',
                    shirtNumber: 11,
                    imageUrl: 'thumbs/shirts/8_CRY_11.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 8
                },
                {
                    name: 'Crystal Palace Home 17',
                    club: 'Crystal Palace',
                    shirtNumber: 17,
                    imageUrl: 'thumbs/shirts/8_CRY_17.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 8
                },
                {
                    name: 'Crystal Palace Home 10',
                    club: 'Crystal Palace',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/8_CRY_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 8
                },
                {
                    name: 'Crystal Palace Home 4',
                    club: 'Crystal Palace',
                    shirtNumber: 4,
                    imageUrl: 'thumbs/shirts/8_CRY_4.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 8
                },
                {
                    name: 'Crystal Palace Home 13',
                    club: 'Crystal Palace',
                    shirtNumber: 13,
                    imageUrl: 'thumbs/shirts/8_CRY_13.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 8
                },
                {
                    name: 'Everton Home 9',
                    club: 'Everton',
                    shirtNumber: 9,
                    imageUrl: 'thumbs/shirts/9_EVE_9.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 9
                },
                {
                    name: 'Everton Home 18',
                    club: 'Everton',
                    shirtNumber: 18,
                    imageUrl: 'thumbs/shirts/9_EVE_18.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 9
                },
                {
                    name: 'Everton Home 17',
                    club: 'Everton',
                    shirtNumber: 17,
                    imageUrl: 'thumbs/shirts/9_EVE_17.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 9
                },
                {
                    name: 'Everton Home 10',
                    club: 'Everton',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/9_EVE_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 9
                },
                {
                    name: 'Everton Home 3',
                    club: 'Everton',
                    shirtNumber: 3,
                    imageUrl: 'thumbs/shirts/9_EVE_3.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 9
                },
                {
                    name: 'Everton Home 25',
                    club: 'Everton',
                    shirtNumber: 25,
                    imageUrl: 'thumbs/shirts/9_EVE_25.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 9
                },
                {
                    name: 'Fulham Home 13',
                    club: 'Fulham',
                    shirtNumber: 13,
                    imageUrl: 'thumbs/shirts/10_FUL_13.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 10
                },
                {
                    name: 'Fulham Home 23',
                    club: 'Fulham',
                    shirtNumber: 23,
                    imageUrl: 'thumbs/shirts/10_FUL_23.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 10
                },
                {
                    name: 'Fulham Home 9',
                    club: 'Fulham',
                    shirtNumber: 9,
                    imageUrl: 'thumbs/shirts/10_FUL_9.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 10
                },
                {
                    name: 'Fulham Home 4',
                    club: 'Fulham',
                    shirtNumber: 4,
                    imageUrl: 'thumbs/shirts/10_FUL_4.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 10
                },
                {
                    name: 'Liverpool Home 8',
                    club: 'Liverpool',
                    shirtNumber: 8,
                    imageUrl: 'thumbs/shirts/11_LIV_8.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 11
                },
                {
                    name: 'Liverpool Home 9',
                    club: 'Liverpool',
                    shirtNumber: 9,
                    imageUrl: 'thumbs/shirts/11_LIV_9.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 11
                },
                {
                    name: 'Liverpool Home 10',
                    club: 'Liverpool',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/11_LIV_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 11
                },
                {
                    name: 'Liverpool Home 11',
                    club: 'Liverpool',
                    shirtNumber: 11,
                    imageUrl: 'thumbs/shirts/11_LIV_11.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 11
                },
                {
                    name: 'Liverpool Home 7',
                    club: 'Liverpool',
                    shirtNumber: 7,
                    imageUrl: 'thumbs/shirts/11_LIV_7.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 11
                },
                {
                    name: 'Liverpool Home 14',
                    club: 'Liverpool',
                    shirtNumber: 14,
                    imageUrl: 'thumbs/shirts/11_LIV_14.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 11
                },
                {
                    name: 'Luton Home 9',
                    club: 'Luton',
                    shirtNumber: 9,
                    imageUrl: 'thumbs/shirts/12_LUT_9.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 12
                },
                {
                    name: 'Luton Home 10',
                    club: 'Luton',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/12_LUT_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 12
                },
                {
                    name: 'Man City Home 17',
                    club: 'Man City',
                    shirtNumber: 17,
                    imageUrl: 'thumbs/shirts/13_MCI_17.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 13
                },
                {
                    name: 'Man City Home 9',
                    club: 'Man City',
                    shirtNumber: 9,
                    imageUrl: 'thumbs/shirts/13_MCI_9.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 13
                },
                {
                    name: 'Man City Home 47',
                    club: 'Man City',
                    shirtNumber: 47,
                    imageUrl: 'thumbs/shirts/13_MCI_47.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 13
                },
                {
                    name: 'Man City Home 20',
                    club: 'Man City',
                    shirtNumber: 20,
                    imageUrl: 'thumbs/shirts/13_MCI_20.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 13
                },
                {
                    name: 'Man City Home 10',
                    club: 'Man City',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/13_MCI_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 13
                },
                {
                    name: 'Man City Home 45',
                    club: 'Man City',
                    shirtNumber: 45,
                    imageUrl: 'thumbs/shirts/13_MCI_45.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 13
                },
                {
                    name: 'Man City Home 42',
                    club: 'Man City',
                    shirtNumber: 42,
                    imageUrl: 'thumbs/shirts/13_MCI_42.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 13
                },
                {
                    name: 'Man United Home 7',
                    club: 'Man United',
                    shirtNumber: 7,
                    imageUrl: 'thumbs/shirts/14_MUN_7.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 14
                },
                {
                    name: 'Man United Home 10',
                    club: 'Man United',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/14_MUN_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 14
                },
                {
                    name: 'Man United Home 18',
                    club: 'Man United',
                    shirtNumber: 18,
                    imageUrl: 'thumbs/shirts/14_MUN_18.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 14
                },
                {
                    name: 'Man United Home 11',
                    club: 'Man United',
                    shirtNumber: 11,
                    imageUrl: 'thumbs/shirts/14_MUN_11.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 14
                },
                {
                    name: 'Man United Home 9',
                    club: 'Man United',
                    shirtNumber: 9,
                    imageUrl: 'thumbs/shirts/14_MUN_9.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 14
                },
                {
                    name: 'Man United Home 16',
                    club: 'Man United',
                    shirtNumber: 16,
                    imageUrl: 'thumbs/shirts/14_MUN_16.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 14
                },
                {
                    name: 'Man United Home 20',
                    club: 'Man United',
                    shirtNumber: 20,
                    imageUrl: 'thumbs/shirts/14_MUN_20.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 14
                },
                {
                    name: 'Newcastle Home 8',
                    club: 'Newcastle',
                    shirtNumber: 8,
                    imageUrl: 'thumbs/shirts/15_NEW_8.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 15
                },
                {
                    name: 'Newcastle Home 9',
                    club: 'Newcastle',
                    shirtNumber: 9,
                    imageUrl: 'thumbs/shirts/15_NEW_9.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 15
                },
                {
                    name: 'Newcastle Home 10',
                    club: 'Newcastle',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/15_NEW_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 15
                },
                {
                    name: 'Newcastle Home 11',
                    club: 'Newcastle',
                    shirtNumber: 11,
                    imageUrl: 'thumbs/shirts/15_NEW_11.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 15
                },
                {
                    name: 'Newcastle Home 23',
                    club: 'Newcastle',
                    shirtNumber: 23,
                    imageUrl: 'thumbs/shirts/15_NEW_23.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 15
                },
                {
                    name: 'Nottingham Forest Home 9',
                    club: 'Nottingham Forest',
                    shirtNumber: 9,
                    imageUrl: 'thumbs/shirts/16_NOT_9.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 16
                },
                {
                    name: 'Nottingham Forest Home 10',
                    club: 'Nottingham Forest',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/16_NOT_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 16
                },
                {
                    name: 'Nottingham Forest Home 7',
                    club: 'Nottingham Forest',
                    shirtNumber: 7,
                    imageUrl: 'thumbs/shirts/15_NOT_7.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 16
                },
                {
                    name: 'Nottingham Forest Home 6',
                    club: 'Nottingham Forest',
                    shirtNumber: 6,
                    imageUrl: 'thumbs/shirts/16_NOT_6.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 16
                },
                {
                    name: 'Sheffield United Home 9',
                    club: 'Sheffield United',
                    shirtNumber: 9,
                    imageUrl: 'thumbs/shirts/17_SHU_9.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 17
                },
                {
                    name: 'Sheffield United Home 10',
                    club: 'Sheffield United',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/17_SHU_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 17
                },
                {
                    name: 'Sheffield United Home 7',
                    club: 'Sheffield United',
                    shirtNumber: 7,
                    imageUrl: 'thumbs/shirts/17_SHU_7.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 17
                },
                {
                    name: 'Sheffield United Home 6',
                    club: 'Sheffield United',
                    shirtNumber: 6,
                    imageUrl: 'thumbs/shirts/17_SHU_6.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 17
                },
                {
                    name: 'Tottenham Home 10',
                    club: 'Tottenham',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/18_TOT_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 18
                },
                {
                    name: 'Tottenham Home 14',
                    club: 'Tottenham',
                    shirtNumber: 14,
                    imageUrl: 'thumbs/shirts/18_TOT_14.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 18
                },
                {
                    name: 'Tottenham Home 9',
                    club: 'Tottenham',
                    shirtNumber: 9,
                    imageUrl: 'thumbs/shirts/18_TOT_9.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 18
                },
                {
                    name: 'Tottenham Home 5',
                    club: 'Tottenham',
                    shirtNumber: 5,
                    imageUrl: 'thumbs/shirts/18_TOT_5.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 18
                },
                {
                    name: 'Tottenham Home 7',
                    club: 'Tottenham',
                    shirtNumber: 7,
                    imageUrl: 'thumbs/shirts/18_TOT_7.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 18
                },
                {
                    name: 'Tottenham Home 11',
                    club: 'Tottenham',
                    shirtNumber: 11,
                    imageUrl: 'thumbs/shirts/18_TOT_11.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 18
                },
                {
                    name: 'West Ham Home 16',
                    club: 'West Ham',
                    shirtNumber: 16,
                    imageUrl: 'thumbs/shirts/19_WHU_16.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 19
                },
                {
                    name: 'West Ham Home 8',
                    club: 'West Ham',
                    shirtNumber: 8,
                    imageUrl: 'thumbs/shirts/19_WHU_8.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 19
                },
                {
                    name: 'West Ham Home 10',
                    club: 'West Ham',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/19_WHU_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 19
                },
                {
                    name: 'West Ham Home 9',
                    club: 'West Ham',
                    shirtNumber: 9,
                    imageUrl: 'thumbs/shirts/19_WHU_9.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 19
                },
                {
                    name: 'West Ham Home 26',
                    club: 'West Ham',
                    shirtNumber: 26,
                    imageUrl: 'thumbs/shirts/19_WHU_26.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 19
                },
                {
                    name: 'Wolves Home 9',
                    club: 'Wolves',
                    shirtNumber: 9,
                    imageUrl: 'thumbs/shirts/20_WOL_9.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 20
                },
                {
                    name: 'Wolves Home 8',
                    club: 'Wolves',
                    shirtNumber: 8,
                    imageUrl: 'thumbs/shirts/20_WOL_8.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 20
                },
                {
                    name: 'Wolves Home 28',
                    club: 'Wolves',
                    shirtNumber: 28,
                    imageUrl: 'thumbs/shirts/20_WOL_28.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 20
                },
                {
                    name: 'Wolves Home 11',
                    club: 'Wolves',
                    shirtNumber: 11,
                    imageUrl: 'thumbs/shirts/20_WOL_11.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 20
                },
                {
                    name: 'Wolves Home 16',
                    club: 'Wolves',
                    shirtNumber: 16,
                    imageUrl: 'thumbs/shirts/20_WOL_16.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 20
                }
            ],
            artistName: 'Ashutosh Yadav',
            artistBio:`Ashutosh Yadav, based in India, is an exceptionally talented 3D artist currently advancing towards 
            his bachelor's degree with a deep focus on 3D artwork. 
            His dedication to mastering his craft is evident as he spends a substantial 
            amount of time perfecting his artistic skills. 
            With over a year and a half of experience, Ashutosh has not only made a name for 
            himself as a freelance artist 
            but has also ventured into the realm of social media marketing. 
            His artistry is marked by a unique blend of creativity, hard work, 
            and strategic thinking, consistently delivering work that surpasses expectations. 
            His enthusiasm for Dfinity and its ecosystem underscores his forward-thinking approach, 
            particularly shining through in his remarkable contributions to the NFT art space.`,
            artistPicture: 'ashutosh.jpg'
        },
        {
            name: 'Podcast Revenue Share NFT',
            bio: 'The wallet holding a Podcast Revenue Share NFT will receive a monthly payment related to the podcast revenue generated from OpenFPL podcasts.',
            termsAndConditions: `The OpenFPL Podcast is poised to launch initially as an audio podcast, with aspirations to venture into video content as our organisation scales. Our main podcast is designed to offer a vibrant and engaging experience, drawing inspiration from successful formats like Soccer AM. In addition, we have future plans to develop a series of fan-specific podcasts.

Our ambition is to cultivate these fan-centric podcasts to achieve recognition on par with established platforms such as Arsenal Fan TV. We are dedicated to maintaining transparency with our audience. To this end, we will publish revenue figures monthly and ensure timely payments to NFT holders.

As we look to the future, we are excited about the prospect of fully integrating an on-chain podcast infrastructure once it becomes accessible on the Internet Computer (IC) blockchain.`,
            launchpadPrice: 100.00,
            stoicLink: 'https://stoic.ic0.app/',
            nfts: [
                {
                    name: 'Arsenal Podcast Punk',
                    club: 'Arsenal',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/ars.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Aston Villa Podcast Punk',
                    club: 'Aston Villa',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/avl.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Bournemouth Podcast Punk',
                    club: 'Bournemouth',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/bou.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Brentford Podcast Punk',
                    club: 'Brentford',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/bre.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Chelsea Podcast Punk',
                    club: 'Chelsea',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/che.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Crystal Palace Podcast Punk',
                    club: 'Crystal Palace',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/cry.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Chelsea Podcast Punk',
                    club: 'Chelsea',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/che.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Crystal Palace Podcast Punk',
                    club: 'Crystal Palace',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/cry.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Everton Podcast Punk',
                    club: 'Everton',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/eve.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Fulham Podcast Punk',
                    club: 'Fulham',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/ful.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Liverpool Podcast Punk',
                    club: 'Liverpool',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/liv.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Luton Podcast Punk',
                    club: 'Luton',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/lut.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Man City Podcast Punk',
                    club: 'Man City',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/mci.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Man United Podcast Punk',
                    club: 'Man United',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/mun.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Newcastle Podcast Punk',
                    club: 'Newcastle',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/new.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Nottingham Forest Podcast Punk',
                    club: 'Nottingham Forest',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/nfo.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Sheffield United Podcast Punk',
                    club: 'Sheffield United',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/shu.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Tottenham Podcast Punk',
                    club: 'Tottenham',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/tot.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'West Ham Podcast Punk',
                    club: 'West Ham',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/whu.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Wolves Podcast Punk',
                    club: 'Wolves',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/wol.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                }
            ],
            artistName: 'Nina',
            artistBio:
                `Nina, a pioneering digital artist, started her journey in the world of NFTs in 2019, with a distinct focus on pixel art. She has successfully created three captivating collections:
                    Football Pixel Stars, featured on OpenSea: http://opensea.io/collection/footballpixelstars
                    NBA Pixel Stars, also displayed on OpenSea: http://opensea.io/collection/nbapixelstars
                    A unique collection on OBJKT: http://objkt.com/collection/KT1KUBZVL1NDUoN3nP2hKD8FsM32Jz5apTmB
                    Nina’s dedication to her art is evident through her innovative designs and meticulous attention to detail. Her ability to blend artistic flair with pixel precision has earned her recognition in the NFT community. She invites enthusiasts to explore her work, and is available for orders and inquiries via Twitter.`,
                    artistPicture: 'nina.jpg'
        }
    ];

    let selectedCollection = collections[0];
    let currentPage = 1;
    const itemsPerPage = 10; 
    
    let showTeams = false;
    let numberFilter = "-1";
    let availableNumbers: number[] = [];
    let selectedTeams: number[] = [];
    let nftsForTeam: NFT[] = [];
    let filteredNFTs: NFT[] = [];

    $: {
        nftsForTeam = selectedCollection.nfts;

        if (selectedTeams.length) {
            nftsForTeam = nftsForTeam.filter(nft => selectedTeams.includes(nft.teamId));
        }

        availableNumbers = [...new Set(nftsForTeam.map(p => p.shirtNumber).filter(num => num > 0))].sort((a, b) => a - b);

        filteredNFTs = nftsForTeam;

        if (numberFilter !== "-1") {
            filteredNFTs = filteredNFTs.filter(nft => nft.shirtNumber === Number(numberFilter));
        }
    }

    // Reactive statement for pagination, which only works on filtered results
    $: paginatedNFTs = filteredNFTs.sort((a, b) => {
        if (b.earned !== a.earned) {
            return b.earned - a.earned;
        }
        
        if (a.club !== b.club) {
            return a.club.localeCompare(b.club);
        }

        return a.shirtNumber - b.shirtNumber;
    }).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    
    function goToPage(page: number) {
        currentPage = page;
    }

    function getPosition(index: number): number {
        return (currentPage - 1) * itemsPerPage + index + 1;
    }

    </script>


<style>
        .nft-section {
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

    .table-col-1{
        flex-basis: 10%;
    }

    .table-col-2{
        flex-basis: 10%;
    }

    .table-col-3{
        flex-basis: 30%;
    }

    .table-col-4{
        flex-basis: 30%;
    }

    .table-col-5{
        flex-basis: 10%;
    }

    .table-col-6{
        flex-basis: 10%;
    }
 
</style>
 
<section class="nft-section relative text-white">
    <div class="image-container relative">
        <img src="boardroom.jpg" alt="Community Fund" class="w-full">
        
        <div class="content absolute inset-y-2 w-full px-8 z-10">
            <div class="container-fluid flex md:flex-row flex-col">
                <div class="sidebar">
                    <button 
                        on:click="{() => showTeams = !showTeams}" 
                        class="w-full text-left focus:outline-none"
                    >
                        <h3 class="flex justify-between items-center">
                            BY TEAM
                            {#if showTeams}
                                <svg class="w-4 h-4" viewBox="0 0 24 24">
                                <path 
                                    fill="none" 
                                    stroke="currentColor" 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    stroke-width="2" 
                                    d="M19 13l-7-7-7 7"
                                ></path>
                                </svg>
                            {:else}
                                <svg class="w-4 h-4" viewBox="0 0 24 24">
                                    <path 
                                    fill="none" 
                                    stroke="currentColor" 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    stroke-width="2" 
                                    d="M7 13l7 7 7-7"
                                ></path>
                                </svg>
                            {/if}
                        </h3>
                    </button>
            
                    {#if showTeams}
                        <div class="mt-2">
                            {#each teams as team}
                                <label class="block mb-2">
                                    <input 
                                        type="checkbox" 
                                        class="mr-2" 
                                        bind:group={selectedTeams} 
                                        value={team.id}
                                    >
                                    {team.name}
                                </label>
                            {/each}
                        </div>
                    {/if}
                    
                    <h3 class="mt-4">BY NUMBER</h3>
                    <select bind:value={numberFilter} 
                            class="w-full py-1 px-2 rounded border bg-gray-900 text-white focus:outline-none focus:border-custom-blue mt-2">
                        <option value="-1">All</option>
                        {#each availableNumbers as number}
                            <option value={number}>{number}</option>
                        {/each}
                    </select>
                </div>
                <div class="p-8 text-left">
                   
                    <div class="flex space-x-4 mb-6">
                        {#each collections as collection, index}
                            <button 
                                class="px-4 py-2 rounded shadow focus:outline-none {selectedCollection === collection ? 'bg-indigo-600' : 'bg-white border border-gray-300 text-gray-700'}"
                                on:click={() => { 
                                    selectedCollection = collection; 
                                    currentPage = 1; 
                                }}                            
                            >
                                {collection.name}
                            </button>
                        {/each}
                    </div>

                    <div class="p-6 rounded shadow">
                        <h2 class="text-2xl font-bold">{selectedCollection.name}</h2>
                        <h5 class="text-md font-bold mt-2 mb-4">{selectedCollection.nfts.length} NFTs</h5>
                        <p class="mb-2">{selectedCollection.bio}</p>
                        <p class="text-sm mb-4">{selectedCollection.termsAndConditions}</p>
                        <p class="mb-4 font-medium">Launchpad Price: {selectedCollection.launchpadPrice} ICP</p>
                      
                        <div class="artist-bio bg-gray-800 p-6 rounded shadow mb-6">
                            <div class="flex items-center px-8">
                                <img src="{selectedCollection.artistPicture}" alt="Nina" class="rounded-full mr-4">
                                <div>
                                    <h2 class="text-xl font-bold">{selectedCollection.artistName}</h2>
                                    <p class="text-sm">{selectedCollection.artistBio}</p>
                                </div>
                            </div>
                        </div>

                        <a href="{selectedCollection.stoicLink}" target="_blank" class="text-indigo-600 underline">View Collection on Stoic</a>
                        
                        <div class="mt-2">
                            <br>
                            <h3 class="text-xl font-semibold mb-4">NFTs by ROI</h3>
                            {#each paginatedNFTs as nft, index}
                                <div class="flex items-center mb-4 border-b pb-2">
                                    <div class="table-col-1">
                                        <span>{getPosition(index)}</span>
                                    </div>
                                    <div class="table-col-2">
                                        <img src="{nft.imageUrl}" alt="{nft.name}" class="w-16 h-16 rounded shadow mr-4">
                                    </div>
                                    <div class="table-col-3">
                                        <div class="flex-1">
                                            <p class="font-medium">{nft.name}</p>
                                        </div>
                                    </div>
                                    <div class="table-col-4">
                                        <p class="text-sm">Club: {nft.club} | Shirt Number: {nft.shirtNumber} | Items Sold: {nft.itemsSold}</p>
                                    </div>
                                    <div class="table-col-5">
                                        <p class="font-medium ml-4">{nft.earned} ICP Earned</p>
                                    </div>
                                    <div class="table-col-6">
                                        <p class="text-indigo-600 ml-4">{nft.roi}% ROI</p>
                                    </div>
                                    
                                </div>
                            {/each}
                        </div>
                    </div>

                    <div class="flex justify-center mt-4 items-center">
                        <button class="bg-custom-blue hover:bg-custom-blue text-white font-bold m-2 py-2 px-2 rounded w-24 text-xs" on:click={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
                            Previous
                        </button>
                        <div class="mx-1 p-0 text-xs flex items-center">
                            Page {currentPage}
                        </div>
                        <button class="bg-custom-blue hover:bg-custom-blue text-white font-bold m-2 py-2 px-2 rounded w-24 text-xs" on:click={() => goToPage(currentPage + 1)} disabled={currentPage * itemsPerPage >= paginatedNFTs.length}>
                            Next
                        </button>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</section>
