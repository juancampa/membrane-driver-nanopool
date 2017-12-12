const client = require('axios').create({
  baseURL: 'https://api.nanopool.org/v1/eth/',
  params: { },
});

export async function get(url, params) {
  const result = await client.get(url, { params });
  return result.data;
}

export async function post(url, body, params) {
  const result = await client.post(url, body, { params });
  return result;
}

export async function put(url, body, params) {
  const result = await client.put(url, body, { params });
  return result;
}

