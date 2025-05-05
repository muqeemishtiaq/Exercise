export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': import.meta.env.VITE_APP_API_KEY,
  },
};

export const fetchData = async (url, options) => {
  // Commented out for safety while switching API key
  try {
    const res = await fetch(url, options);
    const data = await res.json();

    if (!res.ok) {
      console.error('API Error:', data);
      return [];
    }

    return data;
  } catch (error) {
    console.error('Network Error:', error);
    return [];
  }

  // Placeholder return while API is commented
  console.warn('API call is currently disabled.');
  return [];
};
