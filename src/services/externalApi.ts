import axios, { AxiosResponse } from 'axios';

export async function post(url: string, body: any, headers: any): Promise<AxiosResponse> {
  try {
    const response = await axios.post(url, body, {
      headers: headers
    });

    return response.data;
  } catch (error: any) {
    throw new Error(`Error: ${error.message}`);
  }
}