export const rentalPrices = [
  { year: 2010, price: 780 },
  { year: 2011, price: 790 },
  { year: 2012, price: 805 },
  { year: 2013, price: 830 },
  { year: 2014, price: 860 },
  { year: 2015, price: 910 },
  { year: 2016, price: 960 },
  { year: 2017, price: 1020 },
  { year: 2018, price: 1085 },
  { year: 2019, price: 1160 },
  { year: 2020, price: 1140 },
  { year: 2021, price: 1180 },
  { year: 2022, price: 1255 },
  { year: 2023, price: 1320 },
  { year: 2024, price: 1395 },
  { year: 2025, price: 1475 }
];

export const tourismArrivals = [
  { year: 2010, visitors: 7100000 },
  { year: 2011, visitors: 7350000 },
  { year: 2012, visitors: 7600000 },
  { year: 2013, visitors: 8150000 },
  { year: 2014, visitors: 8500000 },
  { year: 2015, visitors: 8900000 },
  { year: 2016, visitors: 9400000 },
  { year: 2017, visitors: 9600000 },
  { year: 2018, visitors: 10050000 },
  { year: 2019, visitors: 10800000 },
  { year: 2020, visitors: 4500000 },
  { year: 2021, visitors: 6200000 },
  { year: 2022, visitors: 9000000 },
  { year: 2023, visitors: 10200000 },
  { year: 2024, visitors: 10850000 },
  { year: 2025, visitors: 11300000 }
];

export const combinedMetrics = rentalPrices.map((item, index) => ({
  year: item.year,
  price: item.price,
  visitors: tourismArrivals[index].visitors,
  revenuePerVisitor: Math.round((item.price * 12 * 1.2) / (tourismArrivals[index].visitors / 1000))
}));
