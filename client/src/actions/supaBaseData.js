import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rxvletamokhgpmjpdosu.supabase.co";
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const dataFromSupabase = async (
	dispatch,
	firstName,
	lastName,
	emailAddress,
	streetAddress,
	aptSuiteNumber,
	city,
	state,
	zipCode,
	parkingSpots
) => {
	const { data, error } = await supabase.from("Host").select();
	if (data){
		return data
	}
	else {
		return error
	}
};


