let sportOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

// let's use simplied for loop

for (let tempSport of sportOne){
    if(tempSport == "Cricket")
    {
        console.log(tempSport + " << My Favorite!");
    }
    else{
        console.log(tempSport);
    }
}