import { supabase } from '../../lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();
 const { insuranceId } = req.query;
  
  let query = supabase
    .from('reviews')
    .select('id, content, user_name, product_id, created_at')
    .order('created_at', { ascending: false });

    // insuranceId が指定されていたら絞り込み
  if (insuranceId) {
    query = query.eq('product_id', insuranceId);
  }

  const { data, error } = await query;
  
  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json(data);
}
