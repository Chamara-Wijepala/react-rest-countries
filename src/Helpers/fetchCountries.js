const fetchCountries = async () => {
  // An array of fields to filter out returned JSON data, more fields can be
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
  const filter = fieldsArray.join(',');

  const request = await fetch(`https://restcountries.com/v3.1/all?fields=${filter}`);
  const response = await request.json();

  return response;
};

export default fetchCountries;
