import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://xnjkdphewxfnfgfbylsm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhuamtkcGhld3hmbmZnZmJ5bHNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyMjYzNDUsImV4cCI6MjAwNjgwMjM0NX0.HomMfxNQFXV2ZKhmrGTTEOAMyhR-pMlMJiY_--PCXtk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
