export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();
  const { variable, from, to } = req.query;
  try {
    const r = await fetch(
      `https://api.bcra.gob.ar/estadisticas/v2.0/datosvariable/${variable}/${from}/${to}`
    );
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: 'Fetch failed' });
  }
}
