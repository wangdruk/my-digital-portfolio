Geolocation from 'arcjet-geolocation';

const arcjet = new Geolocation(process.env.ARCJET_KEY!);

export async function getGeolocation(ip: string) {
  try {
    const geoData = await arcjet.lookup(ip);
    return geoData;
  } catch (error) {
    console.error('Error fetching geolocation data:', error);
    return null;
  }                     
}       
