export const rentalPrices = [
  { year: 2014, price: 860 },
  { year: 2015, price: 910 },
  { year: 2016, price: 980 },
  { year: 2017, price: 1055 },
  { year: 2018, price: 1130 },
  { year: 2019, price: 1195 },
  { year: 2020, price: 1150 },
  { year: 2021, price: 1210 },
  { year: 2022, price: 1295 },
  { year: 2023, price: 1365 },
  { year: 2024, price: 1435 },
  { year: 2025, price: 1498 }
];

export const tourismCommerce = [
  { year: 2014, visitors: 8500000, commerceIndex: 100, cardSpending: 2900 },
  { year: 2015, visitors: 8900000, commerceIndex: 104, cardSpending: 3120 },
  { year: 2016, visitors: 9450000, commerceIndex: 109, cardSpending: 3325 },
  { year: 2017, visitors: 9700000, commerceIndex: 114, cardSpending: 3460 },
  { year: 2018, visitors: 10080000, commerceIndex: 119, cardSpending: 3655 },
  { year: 2019, visitors: 10820000, commerceIndex: 125, cardSpending: 3875 },
  { year: 2020, visitors: 4600000, commerceIndex: 91, cardSpending: 1980 },
  { year: 2021, visitors: 6400000, commerceIndex: 97, cardSpending: 2360 },
  { year: 2022, visitors: 9050000, commerceIndex: 121, cardSpending: 3560 },
  { year: 2023, visitors: 10350000, commerceIndex: 129, cardSpending: 3840 },
  { year: 2024, visitors: 10920000, commerceIndex: 134, cardSpending: 4015 },
  { year: 2025, visitors: 11380000, commerceIndex: 139, cardSpending: 4190 }
];

export const correlationMetrics = rentalPrices.map((item, index) => {
  const tourism = tourismCommerce[index];
  return {
    year: item.year,
    price: item.price,
    visitors: tourism.visitors,
    commerceIndex: tourism.commerceIndex,
    revenuePerHousing: Math.round((tourism.cardSpending * 1.8) / 1.15)
  };
});
