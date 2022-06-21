const fetchCountries = async (region) => {
  // An array of fields to filter out returned JSON data. More fields can be
  // added as needed
  const fieldsArray = [
    'name',
    'tld',
    'cca3',
    'currencies',
    'capital',
    'region',
    'subregion',
    'languages',
    'borders',
    'population',
    'flags',
    'coatOfArms',
  ];
  const fieldsFilter = fieldsArray.join(',');

  // Filters returned JSON depending on region
  let regionFilter = '';
  region === 'all'
    ? regionFilter = region
    : regionFilter = `region/${region}`;

  const request = await fetch(`https://restcountries.com/v3.1/${regionFilter}?fields=${fieldsFilter}`);
  const response = await request.json();

  return response;
};

export default fetchCountries;
