<script lang="ts">
    import type { Team } from '../../types/team';
    import icpIcon from '../icons';
    
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
            name: 'OPENFPL MERCHANDISING RIGHTS NFT',
            bio: 'The wallet holding an OpenFPL Merchandising Rights NFT will be sent 10% of relevant sales revenue immediately when a purchase is made through the ICPFA shop.',
            termsAndConditions: `Each NFT is associated with a specific club and shirt number combination. Relevant sales include any items sold on the ICPFA site pertaining to this combination. 
                If an item is sold that is related to the club of your Merchandising NFT, but not linked to any of the original special shirt numbers, then the revenue will be divided amoung the special club NFT holders. 
                These additional items include shirts with no numbers and shirts for other numbers unrelated to your clubs special NFTs. No new NFTs will be minted for your club, ensuring your share is never watered down. 
                Every NFT holder for that particular club will receive an equal share of this collective club merchandising revenue.
                The ICPFA plans to expand its range of fantasy games into all leagues of football, this means that NFTs for relegated teams will still generate revenue while a team is absent from the OpenFPL game.
            `,
            launchpadPrice: 0.00,
            stoicLink: 'https://toniq.io/',
            nfts: [
                {
                    name: 'Arsenal # 14',
                    club: 'Arsenal',
                    shirtNumber: 14,
                    imageUrl: 'thumbs/shirts/1_14.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Arsenal # 10',
                    club: 'Arsenal',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/1_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Arsenal # 7',
                    club: 'Arsenal',
                    shirtNumber: 7,
                    imageUrl: 'thumbs/shirts/1_7.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Arsenal # 8',
                    club: 'Arsenal',
                    shirtNumber: 8,
                    imageUrl: 'thumbs/shirts/1_8.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Arsenal # 23',
                    club: 'Arsenal',
                    shirtNumber: 23,
                    imageUrl: 'thumbs/shirts/1_23.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Arsenal # 6',
                    club: 'Arsenal',
                    shirtNumber: 6,
                    imageUrl: 'thumbs/shirts/1_6.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 1
                },
                {
                    name: 'Aston Villa # 9',
                    club: 'Aston Villa',
                    shirtNumber: 9,
                    imageUrl: 'thumbs/shirts/2_9.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 2
                },
                {
                    name: 'Aston Villa # 11',
                    club: 'Aston Villa',
                    shirtNumber: 11,
                    imageUrl: 'thumbs/shirts/2_11.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 2
                },
                {
                    name: 'Aston Villa # 10',
                    club: 'Aston Villa',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/2_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 2
                },
                {
                    name: 'Aston Villa # 6',
                    club: 'Aston Villa',
                    shirtNumber: 6,
                    imageUrl: 'thumbs/shirts/2_6.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 2
                },
                {
                    name: 'Aston Villa # 7',
                    club: 'Aston Villa',
                    shirtNumber: 7,
                    imageUrl: 'thumbs/shirts/2_7.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 2
                },
                {
                    name: 'Bournemouth # 7',
                    club: 'Bournemouth',
                    shirtNumber: 7,
                    imageUrl: 'thumbs/shirts/3_7.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 3
                },
                {
                    name: 'Bournemouth # 24',
                    club: 'Bournemouth',
                    shirtNumber: 24,
                    imageUrl: 'thumbs/shirts/3_24.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 3
                },
                {
                    name: 'Bournemouth # 8',
                    club: 'Bournemouth',
                    shirtNumber: 8,
                    imageUrl: 'thumbs/shirts/3_8.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 3
                },
                {
                    name: 'Bournemouth # 13',
                    club: 'Bournemouth',
                    shirtNumber: 13,
                    imageUrl: 'thumbs/shirts/3_13.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 3
                },
                {
                    name: 'Brentford # 17',
                    club: 'Brentford',
                    shirtNumber: 17,
                    imageUrl: 'thumbs/shirts/4_17.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 4
                },
                {
                    name: 'Brentford # 19',
                    club: 'Brentford',
                    shirtNumber: 19,
                    imageUrl: 'thumbs/shirts/4_19.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 4
                },
                {
                    name: 'Brentford # 7',
                    club: 'Brentford',
                    shirtNumber: 7,
                    imageUrl: 'thumbs/shirts/4_7.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 4
                },
                {
                    name: 'Brentford # 10',
                    club: 'Brentford',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/4_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 4
                },
                {
                    name: 'Brighton # 17',
                    club: 'Brighton',
                    shirtNumber: 17,
                    imageUrl: 'thumbs/shirts/5_17.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 5
                },
                {
                    name: 'Brighton # 25',
                    club: 'Brighton',
                    shirtNumber: 25,
                    imageUrl: 'thumbs/shirts/5_25.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 5
                },
                {
                    name: 'Brighton # 13',
                    club: 'Brighton',
                    shirtNumber: 13,
                    imageUrl: 'thumbs/shirts/5_13.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 5
                },
                {
                    name: 'Brighton # 5',
                    club: 'Brighton',
                    shirtNumber: 5,
                    imageUrl: 'thumbs/shirts/5_5.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 5
                },
                {
                    name: 'Burnley # 2',
                    club: 'Burnley',
                    shirtNumber: 2,
                    imageUrl: 'thumbs/shirts/6_2.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 6
                },
                {
                    name: 'Burnley # 5',
                    club: 'Burnley',
                    shirtNumber: 5,
                    imageUrl: 'thumbs/shirts/6_5.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 6
                },
                {
                    name: 'Burnley # 6',
                    club: 'Burnley',
                    shirtNumber: 6,
                    imageUrl: 'thumbs/shirts/6_6.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 6
                },
                {
                    name: 'Burnley # 11',
                    club: 'Burnley',
                    shirtNumber: 11,
                    imageUrl: 'thumbs/shirts/6_11.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 6
                },
                {
                    name: 'Burnley # 10',
                    club: 'Burnley',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/6_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 6
                },
                {
                    name: 'Chelsea # 8',
                    club: 'Chelsea',
                    shirtNumber: 8,
                    imageUrl: 'thumbs/shirts/7_8.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 7
                },
                {
                    name: 'Chelsea # 26',
                    club: 'Chelsea',
                    shirtNumber: 26,
                    imageUrl: 'thumbs/shirts/7_26.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 7
                },
                {
                    name: 'Chelsea # 11',
                    club: 'Chelsea',
                    shirtNumber: 11,
                    imageUrl: 'thumbs/shirts/7_11.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 7
                },
                {
                    name: 'Chelsea # 13',
                    club: 'Chelsea',
                    shirtNumber: 13,
                    imageUrl: 'thumbs/shirts/7_13.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 7
                },
                {
                    name: 'Chelsea # 10',
                    club: 'Chelsea',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/7_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 7
                },
                {
                    name: 'Chelsea # 25',
                    club: 'Chelsea',
                    shirtNumber: 25,
                    imageUrl: 'thumbs/shirts/7_25.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 7
                },
                {
                    name: 'Crystal Palace # 11',
                    club: 'Crystal Palace',
                    shirtNumber: 11,
                    imageUrl: 'thumbs/shirts/8_11.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 8
                },
                {
                    name: 'Crystal Palace # 17',
                    club: 'Crystal Palace',
                    shirtNumber: 17,
                    imageUrl: 'thumbs/shirts/8_17.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 8
                },
                {
                    name: 'Crystal Palace # 10',
                    club: 'Crystal Palace',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/8_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 8
                },
                {
                    name: 'Crystal Palace # 4',
                    club: 'Crystal Palace',
                    shirtNumber: 4,
                    imageUrl: 'thumbs/shirts/8_4.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 8
                },
                {
                    name: 'Crystal Palace # 13',
                    club: 'Crystal Palace',
                    shirtNumber: 13,
                    imageUrl: 'thumbs/shirts/8_13.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 8
                },
                {
                    name: 'Everton # 9',
                    club: 'Everton',
                    shirtNumber: 9,
                    imageUrl: 'thumbs/shirts/9_9.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 9
                },
                {
                    name: 'Everton # 18',
                    club: 'Everton',
                    shirtNumber: 18,
                    imageUrl: 'thumbs/shirts/9_18.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 9
                },
                {
                    name: 'Everton # 17',
                    club: 'Everton',
                    shirtNumber: 17,
                    imageUrl: 'thumbs/shirts/9_17.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 9
                },
                {
                    name: 'Everton # 10',
                    club: 'Everton',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/9_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 9
                },
                {
                    name: 'Everton # 3',
                    club: 'Everton',
                    shirtNumber: 3,
                    imageUrl: 'thumbs/shirts/9_3.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 9
                },
                {
                    name: 'Everton # 25',
                    club: 'Everton',
                    shirtNumber: 25,
                    imageUrl: 'thumbs/shirts/9_25.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 9
                },
                {
                    name: 'Fulham # 13',
                    club: 'Fulham',
                    shirtNumber: 13,
                    imageUrl: 'thumbs/shirts/10_13.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 10
                },
                {
                    name: 'Fulham # 23',
                    club: 'Fulham',
                    shirtNumber: 23,
                    imageUrl: 'thumbs/shirts/10_23.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 10
                },
                {
                    name: 'Fulham # 9',
                    club: 'Fulham',
                    shirtNumber: 9,
                    imageUrl: 'thumbs/shirts/10_9.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 10
                },
                {
                    name: 'Fulham # 4',
                    club: 'Fulham',
                    shirtNumber: 4,
                    imageUrl: 'thumbs/shirts/10_4.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 10
                },
                {
                    name: 'Liverpool # 8',
                    club: 'Liverpool',
                    shirtNumber: 8,
                    imageUrl: 'thumbs/shirts/11_8.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 11
                },
                {
                    name: 'Liverpool # 9',
                    club: 'Liverpool',
                    shirtNumber: 9,
                    imageUrl: 'thumbs/shirts/11_9.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 11
                },
                {
                    name: 'Liverpool # 10',
                    club: 'Liverpool',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/11_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 11
                },
                {
                    name: 'Liverpool # 11',
                    club: 'Liverpool',
                    shirtNumber: 11,
                    imageUrl: 'thumbs/shirts/11_11.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 11
                },
                {
                    name: 'Liverpool # 7',
                    club: 'Liverpool',
                    shirtNumber: 7,
                    imageUrl: 'thumbs/shirts/11_7.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 11
                },
                {
                    name: 'Liverpool # 14',
                    club: 'Liverpool',
                    shirtNumber: 14,
                    imageUrl: 'thumbs/shirts/11_14.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 11
                },
                {
                    name: 'Luton # 9',
                    club: 'Luton',
                    shirtNumber: 9,
                    imageUrl: 'thumbs/shirts/12_9.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 12
                },
                {
                    name: 'Luton # 10',
                    club: 'Luton',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/12_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 12
                },
                {
                    name: 'Man City # 17',
                    club: 'Man City',
                    shirtNumber: 17,
                    imageUrl: 'thumbs/shirts/13_17.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 13
                },
                {
                    name: 'Man City # 9',
                    club: 'Man City',
                    shirtNumber: 9,
                    imageUrl: 'thumbs/shirts/13_9.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 13
                },
                {
                    name: 'Man City # 47',
                    club: 'Man City',
                    shirtNumber: 47,
                    imageUrl: 'thumbs/shirts/13_47.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 13
                },
                {
                    name: 'Man City # 20',
                    club: 'Man City',
                    shirtNumber: 20,
                    imageUrl: 'thumbs/shirts/13_20.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 13
                },
                {
                    name: 'Man City # 10',
                    club: 'Man City',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/13_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 13
                },
                {
                    name: 'Man City # 45',
                    club: 'Man City',
                    shirtNumber: 45,
                    imageUrl: 'thumbs/shirts/13_45.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 13
                },
                {
                    name: 'Man City # 42',
                    club: 'Man City',
                    shirtNumber: 42,
                    imageUrl: 'thumbs/shirts/13_42.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 13
                },
                {
                    name: 'Man United # 7',
                    club: 'Man United',
                    shirtNumber: 7,
                    imageUrl: 'thumbs/shirts/14_7.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 14
                },
                {
                    name: 'Man United # 10',
                    club: 'Man United',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/14_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 14
                },
                {
                    name: 'Man United # 18',
                    club: 'Man United',
                    shirtNumber: 18,
                    imageUrl: 'thumbs/shirts/14_18.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 14
                },
                {
                    name: 'Man United # 11',
                    club: 'Man United',
                    shirtNumber: 11,
                    imageUrl: 'thumbs/shirts/14_11.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 14
                },
                {
                    name: 'Man United # 9',
                    club: 'Man United',
                    shirtNumber: 9,
                    imageUrl: 'thumbs/shirts/14_9.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 14
                },
                {
                    name: 'Man United # 16',
                    club: 'Man United',
                    shirtNumber: 16,
                    imageUrl: 'thumbs/shirts/14_16.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 14
                },
                {
                    name: 'Man United # 20',
                    club: 'Man United',
                    shirtNumber: 20,
                    imageUrl: 'thumbs/shirts/14_20.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 14
                },
                {
                    name: 'Newcastle # 8',
                    club: 'Newcastle',
                    shirtNumber: 8,
                    imageUrl: 'thumbs/shirts/15_8.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 15
                },
                {
                    name: 'Newcastle # 9',
                    club: 'Newcastle',
                    shirtNumber: 9,
                    imageUrl: 'thumbs/shirts/15_9.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 15
                },
                {
                    name: 'Newcastle # 10',
                    club: 'Newcastle',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/15_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 15
                },
                {
                    name: 'Newcastle # 11',
                    club: 'Newcastle',
                    shirtNumber: 11,
                    imageUrl: 'thumbs/shirts/15_11.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 15
                },
                {
                    name: 'Newcastle # 23',
                    club: 'Newcastle',
                    shirtNumber: 23,
                    imageUrl: 'thumbs/shirts/15_23.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 15
                },
                {
                    name: 'Nottingham Forest # 9',
                    club: 'Nottingham Forest',
                    shirtNumber: 9,
                    imageUrl: 'thumbs/shirts/16_9.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 16
                },
                {
                    name: 'Nottingham Forest # 10',
                    club: 'Nottingham Forest',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/16_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 16
                },
                {
                    name: 'Nottingham Forest # 7',
                    club: 'Nottingham Forest',
                    shirtNumber: 7,
                    imageUrl: 'thumbs/shirts/16_7.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 16
                },
                {
                    name: 'Nottingham Forest # 6',
                    club: 'Nottingham Forest',
                    shirtNumber: 6,
                    imageUrl: 'thumbs/shirts/16_6.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 16
                },
                {
                    name: 'Sheffield United # 9',
                    club: 'Sheffield United',
                    shirtNumber: 9,
                    imageUrl: 'thumbs/shirts/17_9.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 17
                },
                {
                    name: 'Sheffield United # 5',
                    club: 'Sheffield United',
                    shirtNumber: 5,
                    imageUrl: 'thumbs/shirts/17_5.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 17
                },
                {
                    name: 'Sheffield United # 6',
                    club: 'Sheffield United',
                    shirtNumber: 6,
                    imageUrl: 'thumbs/shirts/17_6.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 17
                },
                {
                    name: 'Sheffield United # 16',
                    club: 'Sheffield United',
                    shirtNumber: 16,
                    imageUrl: 'thumbs/shirts/17_16.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 17
                },
                {
                    name: 'Tottenham # 10',
                    club: 'Tottenham',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/18_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 18
                },
                {
                    name: 'Tottenham # 14',
                    club: 'Tottenham',
                    shirtNumber: 14,
                    imageUrl: 'thumbs/shirts/18_14.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 18
                },
                {
                    name: 'Tottenham # 9',
                    club: 'Tottenham',
                    shirtNumber: 9,
                    imageUrl: 'thumbs/shirts/18_9.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 18
                },
                {
                    name: 'Tottenham # 5',
                    club: 'Tottenham',
                    shirtNumber: 5,
                    imageUrl: 'thumbs/shirts/18_5.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 18
                },
                {
                    name: 'Tottenham # 7',
                    club: 'Tottenham',
                    shirtNumber: 7,
                    imageUrl: 'thumbs/shirts/18_7.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 18
                },
                {
                    name: 'Tottenham # 11',
                    club: 'Tottenham',
                    shirtNumber: 11,
                    imageUrl: 'thumbs/shirts/18_11.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 18
                },
                {
                    name: 'West Ham # 16',
                    club: 'West Ham',
                    shirtNumber: 16,
                    imageUrl: 'thumbs/shirts/19_16.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 19
                },
                {
                    name: 'West Ham # 8',
                    club: 'West Ham',
                    shirtNumber: 8,
                    imageUrl: 'thumbs/shirts/19_8.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 19
                },
                {
                    name: 'West Ham # 10',
                    club: 'West Ham',
                    shirtNumber: 10,
                    imageUrl: 'thumbs/shirts/19_10.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 19
                },
                {
                    name: 'West Ham # 9',
                    club: 'West Ham',
                    shirtNumber: 9,
                    imageUrl: 'thumbs/shirts/19_9.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 19
                },
                {
                    name: 'West Ham # 26',
                    club: 'West Ham',
                    shirtNumber: 26,
                    imageUrl: 'thumbs/shirts/19_26.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 19
                },
                {
                    name: 'Wolves # 9',
                    club: 'Wolves',
                    shirtNumber: 9,
                    imageUrl: 'thumbs/shirts/20_9.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 20
                },
                {
                    name: 'Wolves # 8',
                    club: 'Wolves',
                    shirtNumber: 8,
                    imageUrl: 'thumbs/shirts/20_8.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 20
                },
                {
                    name: 'Wolves # 28',
                    club: 'Wolves',
                    shirtNumber: 28,
                    imageUrl: 'thumbs/shirts/20_28.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 20
                },
                {
                    name: 'Wolves # 11',
                    club: 'Wolves',
                    shirtNumber: 11,
                    imageUrl: 'thumbs/shirts/20_11.jpg',
                    earned: 0.00,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 20
                },
                {
                    name: 'Wolves # 16',
                    club: 'Wolves',
                    shirtNumber: 16,
                    imageUrl: 'thumbs/shirts/20_16.jpg',
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
            name: 'PODCAST REVENUE SHARE NFT',
            bio: 'The wallet holding a Podcast Revenue Share NFT will receive a monthly payment related to the podcast revenue generated from OpenFPL podcasts.',
            termsAndConditions: `The OpenFPL Podcast is poised to launch initially as an audio podcast, with aspirations to venture into video content as our organisation scales. Our main podcast is designed to offer a vibrant and engaging experience, drawing inspiration from successful formats like Soccer AM. In addition, we have future plans to develop a series of fan-specific podcasts.

Our ambition is to cultivate these fan-centric podcasts to achieve recognition on par with established platforms such as Arsenal Fan TV. We are dedicated to maintaining transparency with our audience. To this end, we will publish revenue figures monthly and ensure timely payments to NFT holders.

As we look to the future, we are excited about the prospect of fully integrating an on-chain podcast infrastructure once it becomes accessible on the Internet Computer (IC) blockchain.`,
            launchpadPrice: 0.00,
            stoicLink: 'https://toniq.io/',
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
                    teamId: 2
                },
                {
                    name: 'Bournemouth Podcast Punk',
                    club: 'Bournemouth',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/bou.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 3
                },
                {
                    name: 'Brentford Podcast Punk',
                    club: 'Brentford',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/bre.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 4
                },
                {
                    name: 'Brighton Podcast Punk',
                    club: 'Brighton',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/bri.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 5
                },
                {
                    name: 'Burnley Podcast Punk',
                    club: 'Burnley',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/bur.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 6
                },
                {
                    name: 'Chelsea Podcast Punk',
                    club: 'Chelsea',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/che.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 7
                },
                {
                    name: 'Crystal Palace Podcast Punk',
                    club: 'Crystal Palace',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/cry.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 8
                },
                {
                    name: 'Everton Podcast Punk',
                    club: 'Everton',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/eve.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 9
                },
                {
                    name: 'Fulham Podcast Punk',
                    club: 'Fulham',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/ful.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 10
                },
                {
                    name: 'Liverpool Podcast Punk',
                    club: 'Liverpool',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/liv.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 11
                },
                {
                    name: 'Luton Podcast Punk',
                    club: 'Luton',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/lut.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 12
                },
                {
                    name: 'Man City Podcast Punk',
                    club: 'Man City',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/mci.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 13
                },
                {
                    name: 'Man United Podcast Punk',
                    club: 'Man United',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/mun.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 14
                },
                {
                    name: 'Newcastle Podcast Punk',
                    club: 'Newcastle',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/new.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 15
                },
                {
                    name: 'Nottingham Forest Podcast Punk',
                    club: 'Nottingham Forest',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/nfo.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 16
                },
                {
                    name: 'Sheffield United Podcast Punk',
                    club: 'Sheffield United',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/shu.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 17
                },
                {
                    name: 'Tottenham Podcast Punk',
                    club: 'Tottenham',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/tot.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 18
                },
                {
                    name: 'West Ham Podcast Punk',
                    club: 'West Ham',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/whu.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 19
                },
                {
                    name: 'Wolves Podcast Punk',
                    club: 'Wolves',
                    shirtNumber: 0,
                    imageUrl: 'thumbs/punks/wol.jpg',
                    earned: 0,
                    roi: 0,
                    itemsSold: 0,
                    teamId: 20
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
    let showNumberFilter = false;
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

        showNumberFilter = filteredNFTs.filter(nft => nft.shirtNumber > 0).length > 0;
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

    .table-col-1{
        flex-basis: 5%;
    }

    .table-col-2{
        flex-basis: 10%;
    }

    .table-col-3{
        flex-basis: 25%;
    }

    .table-col-4{
        flex-basis: 30%;
    }

    .table-col-5{
        flex-basis: 15%;
    }

    .table-col-6{
        flex-basis: 10%;
    }

    .collection-container{
        flex-basis: 80%;
    }

    .sidebar {
        flex-basis: 20%; 
        background-color: #1a1a1a; 
        color: white;
        margin: 20px;     
        border-radius: 4px;
        border: 1px solid #2E323A !important;
    }

    .artist-panel{
        border: 1px solid #2E323A !important;
        border-radius: 4px;
        margin: 20px; 
    }

    .nft-table-panel{
        background-color: #1a1a1a; 
        border: 1px solid #2E323A !important;
        border-radius: 4px;
        margin: 20px; 
    }

    .artist-about-col{
        flex-basis: 30%;
    }

    .artist-detail-col{
        flex-basis: 70%;
        display: flex;
    }

    .artist-picture-col{
        flex-basis: 20%;
    }

    .artist-content-col{
        flex-basis: 80%;
        padding-left: 24px;
        padding-right: 24px;
    }

    .artist-image{
        border-radius: 8px !important;
    }

    .panel-row{
        background-color: #161819;
        padding: 20px;
    }

    .tab-header{
        background-color: transparent !important;
        color: white !important;
    }

    .active-tab{
        color: #3C71FA !important;
    }
    
    p.mb-4.font-medium {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .artist-bio {
        display: flex;
        flex-direction: column; 
    }

    .artist-about-col {
        flex: 1;
        position: relative;  
    }

    .action-button {
        background-color: #3C71FA !important;
        padding: 16px;
        padding-left: 24px;
        padding-right: 24px;
        position: absolute;
        bottom: 0;
        border-radius: 4px;
    }

    .faint{
        border-color: rgba(69, 75, 86, 0.80);
    }

    .top-panel{
        background-color: rgba(26, 26, 29, 0.90);
        padding: 20px;
    }

    .panel-content{
        padding-left: 24px;
        padding-right: 24px;
    }

    .side-panel-content{
        padding: 24px;
    }
    
 
</style>
<div class="container-fluid flex md:flex-row flex-col">
    <div class="sidebar">
        <div class="panel-row">
            <h2 class="text-left">FILTERS</h2>
        </div>
        <div class="side-panel-content">
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
                <div class="mt-2 text-left">
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
            
            {#if showNumberFilter}
            <h3 class="mt-4 text-left">BY NUMBER</h3>
            <select bind:value={numberFilter} 
                    class="w-full py-1 px-2 rounded border bg-gray-900 text-white focus:outline-none focus:border-custom-blue mt-2">
                <option value="-1">All</option>
                {#each availableNumbers as number}
                    <option value={number}>{number}</option>
                {/each}
            </select>
            {/if}
            
        </div>
        
    </div>
    <div class="collection-container">
        <div class="text-left">
           <div class="artist-panel">

                <div class="flex space-x-4 panel-row">
                    {#each collections as collection, index}
                        <button 
                            class="px-4 py-2 rounded shadow tab-header {selectedCollection === collection ? 'active-tab' : ''}"
                            on:click={() => { 
                                selectedCollection = collection; 
                                currentPage = 1; 
                            }}                            
                        >
                            {collection.name}
                        </button>
                    {/each}
                </div>

                <div>
                    <div class="top-panel">
                        <div class="flex justify-between items-center">
                            <h2 class="text-2xl font-bold">{selectedCollection.name}</h2>
                            <h5 class="text-md mt-2 mb-4">{selectedCollection.nfts.length} Total</h5>
                        </div>
                        <p class="mt-4 mb-4 mr-8">{selectedCollection.bio}</p>
                        <p class="text-xs mb-4 mr-8">{selectedCollection.termsAndConditions}</p>
                                                
                                                
                        <p class="mb-4 font-medium">
                            Launchpad Price:<span class="ml-2 mr-2">{@html icpIcon(20,20)}</span> TBC
                        </p>
                                        
                        <hr class="border-t my-8 faint">
                    
                        <div class="artist-bio">
                            <div class="flex">
                                <div class="artist-about-col">
                                    <h2 class="text-2xl font-bold">About the Artist</h2>
                                    <button class="action-button text-md">View Collection On Toniq</button>
                                </div>
                                <div class="artist-detail-col">
                                    <div class="artist-picture-col">
                                        <img class="artist-image" src="{selectedCollection.artistPicture}" alt="Ashutosh">
                                    </div>
                                    <div class="artist-content-col">
                                        <h2 class="text-xl font-bold">{selectedCollection.artistName}</h2>
                                        <p class="text-sm">{selectedCollection.artistBio}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
           <div class="nft-table-panel">
                <div class="panel-row mb-4">
                    <h2 class="text-left">NFTs by ROI</h2>
                </div>
                <div class="panel-content">
                    {#each paginatedNFTs as nft, index}
                        <div class="flex items-center mb-4 border-b pb-2">
                            <div class="table-col-1">
                                <span><p class="text-xs">{getPosition(index)}</p></span>
                            </div>
                            <div class="table-col-2">
                                <img src="{nft.imageUrl}" alt="{nft.name}" class="rounded shadow mr-4 px-8">
                            </div>
                            <div class="table-col-3">
                                <div class="flex-1">
                                    <p class="text-xs">{nft.name}</p>
                                </div>
                            </div>
                            <div class="table-col-4">
                                <p class="text-xs">Club: <b>{nft.club}</b> | Shirt Number: <b>{nft.shirtNumber}</b> | Items Sold: <b>{nft.itemsSold}</b></p>
                            </div>
                            <div class="table-col-5">
                                <p class="text-xs ml-4">Earned - {nft.earned} ICP</p>
                            </div>
                            <div class="table-col-6">
                                <p class="text-xs text-indigo-600 ml-4">{nft.roi}% ROI</p>
                            </div>
                            
                        </div>
                    {/each}

                </div>
                <div class="flex justify-center items-center mb-4">
                    <button
                      class="bg-custom-blue hover:bg-custom-blue text-white font-bold m-2 py-2 px-2 rounded w-24 text-xs disabled:bg-gray-400 disabled:text-gray-200"
                      on:click={() => goToPage(currentPage - 1)}
                      disabled={currentPage === 1}>
                        Previous
                    </button>
                    <div class="mx-1 p-0 text-xs flex items-center">
                      Page {currentPage}
                    </div>
                    <button
                      class="bg-custom-blue hover:bg-custom-blue text-white font-bold m-2 py-2 px-2 rounded w-24 text-xs disabled:bg-gray-400 disabled:text-gray-200"
                      on:click={() => goToPage(currentPage + 1)}
                      disabled={currentPage * itemsPerPage >= filteredNFTs.length}>
                        Next
                    </button>
                  </div>
                  
           </div>



            
        </div>
    </div>
</div>
