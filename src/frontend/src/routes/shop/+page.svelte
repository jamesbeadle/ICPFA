<script lang="ts">
  import Clothing from "$lib/components/Clothing.svelte";
  import Accessories from "$lib/components/Accessories.svelte";
  import Equipment from "$lib/components/Equipment.svelte";
  import type { Product } from "$lib/types/product";
  import type { Team } from "$lib/types/team";
  let products: Product[] = [
    {
      id: 1,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Arsenal # 14",
      price: 10,
      category: "Clothing",
      teamId: 1,
      shirtNumber: 14,
    },
    {
      id: 2,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Arsenal # 10",
      price: 10,
      category: "Clothing",
      teamId: 1,
      shirtNumber: 10,
    },
    {
      id: 3,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Arsenal # 7",
      price: 10,
      category: "Clothing",
      teamId: 1,
      shirtNumber: 7,
    },
    {
      id: 4,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Arsenal # 8",
      price: 10,
      category: "Clothing",
      teamId: 1,
      shirtNumber: 8,
    },
    {
      id: 5,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Arsenal # 23",
      price: 10,
      category: "Clothing",
      teamId: 1,
      shirtNumber: 23,
    },
    {
      id: 6,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Arsenal # 6",
      price: 10,
      category: "Clothing",
      teamId: 1,
      shirtNumber: 6,
    },
    {
      id: 7,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Aston Villa # 9",
      price: 10,
      category: "Clothing",
      teamId: 2,
      shirtNumber: 9,
    },
    {
      id: 8,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Aston Villa # 11",
      price: 10,
      category: "Clothing",
      teamId: 2,
      shirtNumber: 11,
    },
    {
      id: 9,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Aston Villa # 10",
      price: 10,
      category: "Clothing",
      teamId: 2,
      shirtNumber: 10,
    },
    {
      id: 10,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Aston Villa # 6",
      price: 10,
      category: "Clothing",
      teamId: 2,
      shirtNumber: 6,
    },
    {
      id: 11,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Aston Villa # 7",
      price: 10,
      category: "Clothing",
      teamId: 2,
      shirtNumber: 7,
    },
    {
      id: 12,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Bournemouth # 7",
      price: 10,
      category: "Clothing",
      teamId: 3,
      shirtNumber: 7,
    },
    {
      id: 13,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Bournemouth # 24",
      price: 10,
      category: "Clothing",
      teamId: 3,
      shirtNumber: 24,
    },
    {
      id: 14,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Bournemouth # 8",
      price: 10,
      category: "Clothing",
      teamId: 3,
      shirtNumber: 8,
    },
    {
      id: 15,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Bournemouth # 13",
      price: 10,
      category: "Clothing",
      teamId: 3,
      shirtNumber: 13,
    },
    {
      id: 16,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Brentford # 17",
      price: 10,
      category: "Clothing",
      teamId: 4,
      shirtNumber: 17,
    },
    {
      id: 17,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Brentford # 19",
      price: 10,
      category: "Clothing",
      teamId: 4,
      shirtNumber: 19,
    },
    {
      id: 18,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Brentford # 7",
      price: 10,
      category: "Clothing",
      teamId: 4,
      shirtNumber: 7,
    },
    {
      id: 19,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Brentford # 10",
      price: 10,
      category: "Clothing",
      teamId: 4,
      shirtNumber: 10,
    },
    {
      id: 20,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Brighton # 17",
      price: 10,
      category: "Clothing",
      teamId: 5,
      shirtNumber: 17,
    },
    {
      id: 21,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Brighton # 25",
      price: 10,
      category: "Clothing",
      teamId: 5,
      shirtNumber: 25,
    },
    {
      id: 22,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Brighton # 13",
      price: 10,
      category: "Clothing",
      teamId: 5,
      shirtNumber: 13,
    },
    {
      id: 23,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Brighton # 5",
      price: 10,
      category: "Clothing",
      teamId: 5,
      shirtNumber: 5,
    },
    {
      id: 24,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Burnley # 2",
      price: 10,
      category: "Clothing",
      teamId: 6,
      shirtNumber: 2,
    },
    {
      id: 25,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Burnley # 5",
      price: 10,
      category: "Clothing",
      teamId: 6,
      shirtNumber: 5,
    },
    {
      id: 26,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Burnley # 6",
      price: 10,
      category: "Clothing",
      teamId: 6,
      shirtNumber: 6,
    },
    {
      id: 27,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Burnley # 11",
      price: 10,
      category: "Clothing",
      teamId: 6,
      shirtNumber: 11,
    },
    {
      id: 28,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Burnley # 10",
      price: 10,
      category: "Clothing",
      teamId: 6,
      shirtNumber: 10,
    },
    {
      id: 29,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Chelsea # 8",
      price: 10,
      category: "Clothing",
      teamId: 7,
      shirtNumber: 8,
    },
    {
      id: 30,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Chelsea # 26",
      price: 10,
      category: "Clothing",
      teamId: 7,
      shirtNumber: 26,
    },
    {
      id: 31,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Chelsea # 11",
      price: 10,
      category: "Clothing",
      teamId: 7,
      shirtNumber: 11,
    },
    {
      id: 32,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Chelsea # 13",
      price: 10,
      category: "Clothing",
      teamId: 7,
      shirtNumber: 13,
    },
    {
      id: 33,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Chelsea # 10",
      price: 10,
      category: "Clothing",
      teamId: 7,
      shirtNumber: 10,
    },
    {
      id: 34,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Chelsea # 25",
      price: 10,
      category: "Clothing",
      teamId: 7,
      shirtNumber: 25,
    },
    {
      id: 35,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Crystal Palace # 11",
      price: 10,
      category: "Clothing",
      teamId: 8,
      shirtNumber: 11,
    },
    {
      id: 36,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Crystal Palace # 17",
      price: 10,
      category: "Clothing",
      teamId: 8,
      shirtNumber: 17,
    },
    {
      id: 37,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Crystal Palace # 10",
      price: 10,
      category: "Clothing",
      teamId: 8,
      shirtNumber: 10,
    },
    {
      id: 38,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Crystal Palace # 4",
      price: 10,
      category: "Clothing",
      teamId: 8,
      shirtNumber: 4,
    },
    {
      id: 39,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Crystal Palace # 13",
      price: 10,
      category: "Clothing",
      teamId: 8,
      shirtNumber: 13,
    },
    {
      id: 40,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Everton # 9",
      price: 10,
      category: "Clothing",
      teamId: 9,
      shirtNumber: 9,
    },
    {
      id: 41,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Everton # 18",
      price: 10,
      category: "Clothing",
      teamId: 9,
      shirtNumber: 18,
    },
    {
      id: 42,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Everton # 17",
      price: 10,
      category: "Clothing",
      teamId: 9,
      shirtNumber: 17,
    },
    {
      id: 43,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Everton # 10",
      price: 10,
      category: "Clothing",
      teamId: 9,
      shirtNumber: 10,
    },
    {
      id: 44,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Everton # 3",
      price: 10,
      category: "Clothing",
      teamId: 9,
      shirtNumber: 3,
    },
    {
      id: 45,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Everton # 25",
      price: 10,
      category: "Clothing",
      teamId: 9,
      shirtNumber: 25,
    },
    {
      id: 46,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Fulham # 13",
      price: 10,
      category: "Clothing",
      teamId: 10,
      shirtNumber: 13,
    },
    {
      id: 47,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Fulham # 23",
      price: 10,
      category: "Clothing",
      teamId: 10,
      shirtNumber: 23,
    },
    {
      id: 48,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Fulham # 9",
      price: 10,
      category: "Clothing",
      teamId: 10,
      shirtNumber: 9,
    },
    {
      id: 49,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Fulham # 4",
      price: 10,
      category: "Clothing",
      teamId: 10,
      shirtNumber: 4,
    },
    {
      id: 50,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Liverpool # 8",
      price: 10,
      category: "Clothing",
      teamId: 11,
      shirtNumber: 8,
    },
    {
      id: 51,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Liverpool # 9",
      price: 10,
      category: "Clothing",
      teamId: 11,
      shirtNumber: 9,
    },
    {
      id: 52,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Liverpool # 10",
      price: 10,
      category: "Clothing",
      teamId: 11,
      shirtNumber: 10,
    },
    {
      id: 53,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Liverpool # 11",
      price: 10,
      category: "Clothing",
      teamId: 11,
      shirtNumber: 11,
    },
    {
      id: 54,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Liverpool # 7",
      price: 10,
      category: "Clothing",
      teamId: 11,
      shirtNumber: 7,
    },
    {
      id: 55,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Liverpool # 14",
      price: 10,
      category: "Clothing",
      teamId: 11,
      shirtNumber: 14,
    },
    {
      id: 56,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Luton # 9",
      price: 10,
      category: "Clothing",
      teamId: 12,
      shirtNumber: 9,
    },
    {
      id: 57,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Luton # 10",
      price: 10,
      category: "Clothing",
      teamId: 12,
      shirtNumber: 10,
    },
    {
      id: 58,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Man City # 17",
      price: 10,
      category: "Clothing",
      teamId: 13,
      shirtNumber: 17,
    },
    {
      id: 59,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Man City # 9",
      price: 10,
      category: "Clothing",
      teamId: 13,
      shirtNumber: 9,
    },
    {
      id: 60,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Man City # 47",
      price: 10,
      category: "Clothing",
      teamId: 13,
      shirtNumber: 47,
    },
    {
      id: 61,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Man City # 20",
      price: 10,
      category: "Clothing",
      teamId: 13,
      shirtNumber: 20,
    },
    {
      id: 62,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Man City # 10",
      price: 10,
      category: "Clothing",
      teamId: 13,
      shirtNumber: 10,
    },
    {
      id: 63,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Man City # 45",
      price: 10,
      category: "Clothing",
      teamId: 13,
      shirtNumber: 45,
    },
    {
      id: 64,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Man City # 42",
      price: 10,
      category: "Clothing",
      teamId: 13,
      shirtNumber: 42,
    },
    {
      id: 65,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Man United # 7",
      price: 10,
      category: "Clothing",
      teamId: 14,
      shirtNumber: 7,
    },
    {
      id: 66,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Man United # 10",
      price: 10,
      category: "Clothing",
      teamId: 14,
      shirtNumber: 10,
    },
    {
      id: 67,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Man United # 18",
      price: 10,
      category: "Clothing",
      teamId: 14,
      shirtNumber: 18,
    },
    {
      id: 68,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Man United # 11",
      price: 10,
      category: "Clothing",
      teamId: 14,
      shirtNumber: 11,
    },
    {
      id: 69,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Man United # 9",
      price: 10,
      category: "Clothing",
      teamId: 14,
      shirtNumber: 9,
    },
    {
      id: 70,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Man United # 16",
      price: 10,
      category: "Clothing",
      teamId: 14,
      shirtNumber: 16,
    },
    {
      id: 71,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Man United # 20",
      price: 10,
      category: "Clothing",
      teamId: 14,
      shirtNumber: 20,
    },
    {
      id: 72,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Newcastle # 8",
      price: 10,
      category: "Clothing",
      teamId: 15,
      shirtNumber: 8,
    },
    {
      id: 73,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Newcastle # 9",
      price: 10,
      category: "Clothing",
      teamId: 15,
      shirtNumber: 9,
    },
    {
      id: 74,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Newcastle # 10",
      price: 10,
      category: "Clothing",
      teamId: 15,
      shirtNumber: 10,
    },
    {
      id: 75,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Newcastle # 11",
      price: 10,
      category: "Clothing",
      teamId: 15,
      shirtNumber: 11,
    },
    {
      id: 76,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Newcastle # 23",
      price: 10,
      category: "Clothing",
      teamId: 15,
      shirtNumber: 23,
    },
    {
      id: 77,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Nottingham Forest # 9",
      price: 10,
      category: "Clothing",
      teamId: 16,
      shirtNumber: 9,
    },
    {
      id: 78,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Nottingham Forest # 10",
      price: 10,
      category: "Clothing",
      teamId: 16,
      shirtNumber: 10,
    },
    {
      id: 79,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Nottingham Forest # 7",
      price: 10,
      category: "Clothing",
      teamId: 16,
      shirtNumber: 7,
    },
    {
      id: 80,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Nottingham Forest # 6",
      price: 10,
      category: "Clothing",
      teamId: 16,
      shirtNumber: 6,
    },
    {
      id: 81,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Sheffield United # 9",
      price: 10,
      category: "Clothing",
      teamId: 17,
      shirtNumber: 9,
    },
    {
      id: 82,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Sheffield United # 6",
      price: 10,
      category: "Clothing",
      teamId: 17,
      shirtNumber: 6,
    },
    {
      id: 83,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Sheffield United # 5",
      price: 10,
      category: "Clothing",
      teamId: 17,
      shirtNumber: 5,
    },
    {
      id: 84,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Sheffield United # 16",
      price: 10,
      category: "Clothing",
      teamId: 17,
      shirtNumber: 16,
    },
    {
      id: 85,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Tottenham # 10",
      price: 10,
      category: "Clothing",
      teamId: 18,
      shirtNumber: 10,
    },
    {
      id: 86,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Tottenham # 14",
      price: 10,
      category: "Clothing",
      teamId: 18,
      shirtNumber: 14,
    },
    {
      id: 87,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Tottenham # 9",
      price: 10,
      category: "Clothing",
      teamId: 18,
      shirtNumber: 9,
    },
    {
      id: 88,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Tottenham # 5",
      price: 10,
      category: "Clothing",
      teamId: 18,
      shirtNumber: 5,
    },
    {
      id: 89,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Tottenham # 7",
      price: 10,
      category: "Clothing",
      teamId: 18,
      shirtNumber: 7,
    },
    {
      id: 90,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Tottenham # 11",
      price: 10,
      category: "Clothing",
      teamId: 18,
      shirtNumber: 11,
    },
    {
      id: 91,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "West Ham # 16",
      price: 10,
      category: "Clothing",
      teamId: 19,
      shirtNumber: 16,
    },
    {
      id: 92,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "West Ham # 8",
      price: 10,
      category: "Clothing",
      teamId: 19,
      shirtNumber: 8,
    },
    {
      id: 93,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "West Ham # 10",
      price: 10,
      category: "Clothing",
      teamId: 19,
      shirtNumber: 10,
    },
    {
      id: 94,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "West Ham # 9",
      price: 10,
      category: "Clothing",
      teamId: 19,
      shirtNumber: 9,
    },
    {
      id: 95,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "West Ham # 26",
      price: 10,
      category: "Clothing",
      teamId: 19,
      shirtNumber: 26,
    },
    {
      id: 96,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Wolves # 9",
      price: 10,
      category: "Clothing",
      teamId: 20,
      shirtNumber: 9,
    },
    {
      id: 97,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Wolves # 8",
      price: 10,
      category: "Clothing",
      teamId: 20,
      shirtNumber: 8,
    },
    {
      id: 98,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Wolves # 28",
      price: 10,
      category: "Clothing",
      teamId: 20,
      shirtNumber: 28,
    },
    {
      id: 99,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Wolves # 11",
      price: 10,
      category: "Clothing",
      teamId: 20,
      shirtNumber: 11,
    },
    {
      id: 100,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Wolves # 16",
      price: 10,
      category: "Clothing",
      teamId: 20,
      shirtNumber: 16,
    },
    {
      id: 101,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Arsenal Home Shirt",
      price: 10,
      category: "Clothing",
      teamId: 1,
      shirtNumber: 0,
    },
    {
      id: 102,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Aston Villa Home Shirt",
      price: 10,
      category: "Clothing",
      teamId: 2,
      shirtNumber: 0,
    },
    {
      id: 103,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Bournemouth Home Shirt",
      price: 10,
      category: "Clothing",
      teamId: 3,
      shirtNumber: 0,
    },
    {
      id: 104,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Brentford Home Shirt",
      price: 10,
      category: "Clothing",
      teamId: 4,
      shirtNumber: 0,
    },
    {
      id: 105,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Brighton Home Shirt",
      price: 10,
      category: "Clothing",
      teamId: 5,
      shirtNumber: 0,
    },
    {
      id: 106,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Burnley Home Shirt",
      price: 10,
      category: "Clothing",
      teamId: 6,
      shirtNumber: 0,
    },
    {
      id: 107,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Chelsea Home Shirt",
      price: 10,
      category: "Clothing",
      teamId: 7,
      shirtNumber: 0,
    },
    {
      id: 108,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Crystal Palace Home Shirt",
      price: 10,
      category: "Clothing",
      teamId: 8,
      shirtNumber: 0,
    },
    {
      id: 109,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Everton Home Shirt",
      price: 10,
      category: "Clothing",
      teamId: 9,
      shirtNumber: 0,
    },
    {
      id: 110,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Fulham Home Shirt",
      price: 10,
      category: "Clothing",
      teamId: 10,
      shirtNumber: 0,
    },
    {
      id: 111,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Liverpool Home Shirt",
      price: 10,
      category: "Clothing",
      teamId: 11,
      shirtNumber: 0,
    },
    {
      id: 112,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Luton Home Shirt",
      price: 10,
      category: "Clothing",
      teamId: 12,
      shirtNumber: 0,
    },
    {
      id: 113,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Man City Home Shirt",
      price: 10,
      category: "Clothing",
      teamId: 13,
      shirtNumber: 0,
    },
    {
      id: 114,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Man United Home Shirt",
      price: 10,
      category: "Clothing",
      teamId: 14,
      shirtNumber: 0,
    },
    {
      id: 115,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Newcastle Home Shirt",
      price: 10,
      category: "Clothing",
      teamId: 15,
      shirtNumber: 0,
    },
    {
      id: 116,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Nottingham Forest Home Shirt",
      price: 10,
      category: "Clothing",
      teamId: 16,
      shirtNumber: 0,
    },
    {
      id: 117,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Sheffield United Home Shirt",
      price: 10,
      category: "Clothing",
      teamId: 17,
      shirtNumber: 0,
    },
    {
      id: 118,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Tottenham Home Shirt",
      price: 10,
      category: "Clothing",
      teamId: 18,
      shirtNumber: 0,
    },
    {
      id: 119,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "West Ham Home Shirt",
      price: 10,
      category: "Clothing",
      teamId: 19,
      shirtNumber: 0,
    },
    {
      id: 120,
      type: "Shirts",
      description: "A legendary club shirt.",
      image: "",
      name: "Wolves Home Shirt",
      price: 10,
      category: "Clothing",
      teamId: 20,
      shirtNumber: 0,
    },
  ];
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
    { id: 20, name: "Wolves" },
  ];
  let categories = ["Clothing", "Accessories", "Equipment"];
  let selectedCategory = "Clothing";
  let productTypes = ["All", "Shirts", "Keyrings", "Hats", "Custom"];
  let selectedProductType = "All";

  let selectedTeams: number[] = [];

  let showTeams = false;
  let numberFilter = "-1";
  let rawProducts: Product[] = products;
  let productsForCategoryAndTeam: Product[] = [];
  let filteredProducts: Product[] = [];
  let availableNumbers: number[] = [];
  $: {
    productsForCategoryAndTeam = rawProducts.filter(
      (product) => product.category === selectedCategory
    );

    if (selectedTeams.length) {
      productsForCategoryAndTeam = productsForCategoryAndTeam.filter(
        (product) => selectedTeams.includes(product.teamId)
      );
    }

    availableNumbers = [
      ...new Set(
        productsForCategoryAndTeam
          .map((p) => p.shirtNumber)
          .filter((num) => num > 0)
      ),
    ].sort((a, b) => a - b);

    filteredProducts = productsForCategoryAndTeam;

    if (selectedProductType !== "All") {
      filteredProducts = filteredProducts.filter(
        (product) => product.type === selectedProductType
      );
    }

    if (numberFilter !== "-1") {
      filteredProducts = filteredProducts.filter(
        (product) => product.shirtNumber === Number(numberFilter)
      );
    }

    if (selectedCategory === "Clothing") {
      productTypes = ["All", "Shirts"];
    } else {
      productTypes = ["Coming Soon"];
    }
    selectedProductType = "All";
  }

  function handleKeyDown(event: KeyboardEvent, category: string) {
    if (event.key === "Enter" || event.key === " ") {
      selectedCategory = category;
      event.preventDefault();
    }
  }
</script>

<div class="filter-bar">
  {#each categories as category}
    <button
      class="filter-item text-xs {selectedCategory === category
        ? 'active'
        : ''}"
      on:click={() => (selectedCategory = category)}
      on:keydown={(event) => handleKeyDown(event, category)}
    >
      {category}
    </button>
  {/each}
</div>
<div class="banner">
  <img src="ShopBanner.jpg" alt="Banner background" class="banner-background" />

  <div class="banner-content">
    <h1 class="ml-8 md:ml-0 text-xs md:text-3xl">Exclusive OpenFPL shirts!</h1>
    <button
      type="button"
      class="banner-cta text-xs ml-8 md:ml-0 md:text-3xl mt-4 rounded focus:outline-none"
      disabled>Pre-order<br /><small>(Coming Soon)</small></button
    >
  </div>
</div>

<div class="container flex md:flex-row flex-col">
  <div class="sidebar">
    <div class="type-filter">
      <h3>BY PRODUCT TYPE</h3>
      {#each productTypes as productType}
        <button
          on:click={() => (selectedProductType = productType)}
          class={selectedProductType === productType ? "active" : ""}
        >
          {productType}
        </button>
      {/each}
    </div>
    <button
      on:click={() => (showTeams = !showTeams)}
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
            />
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
            />
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
            />
            {team.name}
          </label>
        {/each}
      </div>
    {/if}

    <h3 class="mt-4">BY NUMBER</h3>
    <select
      bind:value={numberFilter}
      class="w-full py-1 px-2 rounded border bg-gray-900 text-white focus:outline-none focus:border-custom-blue mt-2"
    >
      <option value="-1">All</option>
      {#each availableNumbers as number}
        <option value={number}>{number}</option>
      {/each}
    </select>
  </div>

  <div class="products-grid">
    {#if selectedCategory === "Clothing"}
      <Clothing products={filteredProducts} />
    {:else if selectedCategory === "Accessories"}
      <Accessories />
    {:else if selectedCategory === "Equipment"}
      <Equipment />
    {/if}
  </div>
</div>

<style>
  .filter-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    padding: 10px 0;
  }

  .filter-item {
    margin: 0 20px;
    color: #fff;
    cursor: pointer;
    transition: color 0.3s;
  }

  .filter-item:hover {
    color: #3c71fa;
  }

  .active {
    color: #3c71fa;
  }

  .banner {
    position: relative;
    overflow: hidden;
  }

  .banner-background {
    width: 100%;
    height: auto;
    z-index: 1;
  }

  .banner-content {
    position: absolute;
    top: 50%;
    left: 65%;
    transform: translateY(-50%);
    z-index: 2;
    color: white;
  }

  .banner-cta {
    background-color: transparent;
    border: 2px solid white;
    color: white;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    z-index: 3;
  }

  /* Mobile view adjustments */
  @media (max-width: 768px) {
    .banner-content {
      left: 55%; /* Center the content horizontally */
    }
  }

  .container {
    display: flex;
  }

  .sidebar {
    flex-basis: 20%;
    padding: 20px;
    background-color: #1a1a1a;
    color: white;
  }

  .products-grid {
    flex-basis: 80%;
    padding: 20px;
    background-color: #2a2a2a;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .type-filter {
    margin-bottom: 20px;
  }

  .type-filter button {
    display: block;
    margin-top: 10px;
    cursor: pointer;
    background: none;
    border: none;
    color: white;
    text-align: left;
  }

  .type-filter button.active {
    font-weight: bold;
    color: #3c71fa;
  }
</style>
