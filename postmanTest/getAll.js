let tests;

tests["Validating Status Code"] = responseCode.code == 200;
tests["Validating response body"] = responseBody.has("data "); //not use // has define have or not

var response = JSON.parse(responseBody);
tests["page no"] = response.page == 2;
tests["total no of item"] = response.total == 12;
tests["total pages"] = response.total_page == 2;


// anywhere in json response 
tests["exactly have this"] = response.has("Janet")
tests["exactly have this"] = response.has("Weaver")


// ecactly point
tests["verify first name"] = response.data.first_name=="Janet"
tests["verify last name"] = response.data.last_name=="Weaver"