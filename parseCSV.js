export default function parseCSV(data) {
    const rows = data.split('\n').slice(1);
    return rows.map(row => {
      const [year, month, day, adults, children, babies, country] = row.split(',');
      return {
        arrival_date_year: year,
        arrival_date_month: month,
        arrival_date_day_of_month: day,
        adults: Number(adults),
        children: Number(children),
        babies: Number(babies),
        country: country.trim(),
      };
    });
  }
  