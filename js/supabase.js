import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://dvnfvrqdcdyfvgylujpu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2bmZ2cnFkY2R5ZnZneWx1anB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA2MDM3OTIsImV4cCI6MjEwNjE3OTc5Mn0.6YwUvCjANuDd_stKo3uxHiFZuWtVYI1E20vxICa80Ic';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);