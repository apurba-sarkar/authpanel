import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tnipuemkpacezqxateqv.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRuaXB1ZW1rcGFjZXpxeGF0ZXF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE5OTcyODksImV4cCI6MjAyNzU3MzI4OX0.lU_kTvrGtNLYHjWZ5l3s-IERFbJm-zJCpizV8Mi8Ve8";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;