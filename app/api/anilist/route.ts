// app/api/anilist/route.js
export async function GET(req) {
    // Define the GraphQL query as a multi-line string
    const query = `
      query ($id: Int) {
        Media(id: $id, type: ANIME) {
          id
          title {
            romaji
            english
            native
          }
        }
      }
    `;
  
    // Define query variables
    const variables = { id: 15125 };
  
    // Define the fetch options for the AniList API
    const url = 'https://graphql.anilist.co';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: query,
        variables: variables
      }),
    };
  
    try {
      const response = await fetch(url, options);
      const json = await response.json();
  
      // Check if the response is successful
      if (!response.ok) throw new Error(json.errors?.[0]?.message || 'Failed to fetch data');
      
      // Return the data as JSON
      return new Response(JSON.stringify(json), {
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  