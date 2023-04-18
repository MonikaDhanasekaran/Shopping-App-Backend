const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const dotenv = require("dotenv");
dotenv.config();
const db = require("./db/connect");
db();

// import auth routes

const authModel = require("./models/authModel");
const registerRoutes = require("./routes/registerRoutes");
const recentSale = require("./routes/recentSaleRoutes");
const popularItem = require("./routes/popularItemRoutes");
const newArrival = require("./routes/newArrivalRoutes");

// import mobile routes

const realmeMobile = require("./routes/MobileRoutes/realmeMobileRoutes");
const pocoMobile = require("./routes/MobileRoutes/pocoMobileRoutes");
const samsungMobile = require("./routes/MobileRoutes/samsungMobileRoutes");
const vivoMobile = require("./routes/MobileRoutes/vivoMobileRoutes");
const appleMobile = require("./routes/MobileRoutes/appleMobileRoutes");
const motorolaMobile = require("./routes/MobileRoutes/motorolaMobileRoutes");
const xiaomiMobile = require("./routes/MobileRoutes/xiaomiMobileRoutes");
const oppoMobile = require("./routes/MobileRoutes/oppoMobileRoutes");
const googlePixelMobile = require("./routes/MobileRoutes/googlePixelMobileRoutes");

// import electronics routes

const laptop = require("./routes/ElectronicsRoutes/laptopsRoutes");
const desktop = require("./routes/ElectronicsRoutes/desktopsRoutes");
const headphones = require("./routes/ElectronicsRoutes/headphonesRoutes");
const smartWearable = require("./routes/ElectronicsRoutes/smartWearableRoutes");
const stylingDevices = require("./routes/ElectronicsRoutes/stylingDevicesRoutes");
const cameras = require("./routes/ElectronicsRoutes/camerasRoutes");
const tablets = require("./routes/ElectronicsRoutes/tabletsRoutes");
const computer = require("./routes/ElectronicsRoutes/computerAccessoriesRoutes");
const mobile = require("./routes/ElectronicsRoutes/mobileProtectionRoutes");
const powerbank = require("./routes/ElectronicsRoutes/powerbankRoutes");
const speaker = require("./routes/ElectronicsRoutes/speakersRoutes");
const mobileAccessory = require("./routes/ElectronicsRoutes/mobileAccessoriesRoutes");

// import appliances routes

const smartTv = require("./routes/AppliancesRoutes/smartTvRoutes");
const washingMachine = require("./routes/AppliancesRoutes/washingMachineRoutes");
const refrigerator = require("./routes/AppliancesRoutes/refrigeratorRoutes");
const fansAndAirCoolers = require("./routes/AppliancesRoutes/fansAndAirCoolersRoutes");
const kitchenAppliances = require("./routes/AppliancesRoutes/kitchenAppliancesRoutes");
const ac = require("./routes/AppliancesRoutes/airConditionersRoutes");
const home = require("./routes/AppliancesRoutes/homeAppliancesRoutes");
const oven = require("./routes/AppliancesRoutes/microwaveOvenRoutes");

// import fashion routes

const tshirt = require("./routes/FashionRoutes/tShirtRoutes");
const jean = require("./routes/FashionRoutes/jeanRoutes");
const trackPant = require("./routes/FashionRoutes/trackPantRoutes");
const shoe = require("./routes/FashionRoutes/sportShoesRoutes");
const sareesAndKurtas = require("./routes/FashionRoutes/sareesAndKurtasRoutes");
const footwear = require("./routes/FashionRoutes/women'sFootwearRoutes");
const luggageAndBags = require("./routes/FashionRoutes/luggagesAndBagsRoutes");
const kidsFashion = require("./routes/FashionRoutes/kidsFashionRoutes");

// import home routes

const kitchenAndCookware = require("./routes/HomeRoutes/kitchenAndCookwareRoutes");
const homeFurnishing = require("./routes/HomeRoutes/homeFurnishingRoutes");
const homeDecor = require("./routes/HomeRoutes/homeDecorRoutes");
const diningAndServeware = require("./routes/HomeRoutes/diningAndServewareRoutes");
const gardeningEssentials = require("./routes/HomeRoutes/gardeningEssentialsRoutes");
const lightning = require("./routes/HomeRoutes/lightningRoutes");
const bedsheets = require("./routes/HomeRoutes/bedsheetsRoutes");
const cleaningEssentials = require("./routes/HomeRoutes/cleaningEssentialsRoutes");

// import personal care routes

const skinCare = require("./routes/PersonalCareRoutes/skinCareRoutes");
const hairCare = require("./routes/PersonalCareRoutes/hairCareRoutes");
const makeup = require("./routes/PersonalCareRoutes/makeupRoutes");
const fragrance = require("./routes/PersonalCareRoutes/fragranceRoutes");
const dailyEssential = require("./routes/PersonalCareRoutes/dailyEssentialRoutes");
const menGrooming = require("./routes/PersonalCareRoutes/menGroomingRoutes");
const oralCare = require("./routes/PersonalCareRoutes/oralCareRoutes");

// import toys and baby care routes

const babyCareEssentials = require("./routes/ToysAndBabyCareRoutes/babyCareEssentialsRoutes");
const toysAndGames = require("./routes/ToysAndBabyCareRoutes/toysAndGamesRoutes");
const guidanceForParents = require("./routes/ToysAndBabyCareRoutes/guidanceForParentsRoutes");
const stationeryAndSchoolSupplies = require("./routes/ToysAndBabyCareRoutes/stationeryAndSchoolSuppliesRoutes");

// import furniture routes

const sofas = require("./routes/FurnitureRoutes/sofasRoutes");
const beds = require("./routes/FurnitureRoutes/bedsRoutes");
const wardRobes = require("./routes/FurnitureRoutes/wardRobeRoutes");
const diningTables = require("./routes/FurnitureRoutes/diningTablesRoutes");
const officeChairs = require("./routes/FurnitureRoutes/officeChairsRoutes");
const recliners = require("./routes/FurnitureRoutes/reclinersRoutes");
const tvUnits = require("./routes/FurnitureRoutes/tvUnitsRoutes");
const portableLaptopTables = require("./routes/FurnitureRoutes/portableLaptopTablesRoutes");
const swings = require("./routes/FurnitureRoutes/swingsRoutes");

// import sports routes

const sportShoe = require("./routes/SportsRoutes/sportShoeRoutes");
const sportsWear = require("./routes/SportsRoutes/sportsWearRoutes");
const sportsGear = require("./routes/SportsRoutes/sportsGearRoutes");
const fitnessEquipments = require("./routes/SportsRoutes/fitnessEquipmentsRoutes");

// import nutrition and more routes

const foodAndBeverages = require("./routes/NutritionAndMore/foodAndBeveragesRoutes");
const nutritionAndHealthCare = require("./routes/NutritionAndMore/nutritionAndHealthCareRoutes");
const sportsAndFitness = require("./routes/NutritionAndMore/sportsAndFitnessRoutes");
const autoAccessories = require("./routes/NutritionAndMore/autoAccessoriesRoutes");
const petSupplies = require("./routes/NutritionAndMore/petSuppliesRoutes");

app.get("/", (req,res) => {
    res.send("Welcome to My App!!!");
});

app.use("/shop",registerRoutes);
app.use("/", authModel.authenticateUser);
app.use("/shop/recentSale", recentSale);
app.use("/shop/popularItem", popularItem);
app.use("/shop/newArrival", newArrival);

app.use("/shop/mobile/realme", realmeMobile);
app.use("/shop/mobile/poco", pocoMobile);
app.use("/shop/mobile/samsung", samsungMobile);
app.use("/shop/mobile/vivo", vivoMobile);
app.use("/shop/mobile/apple", appleMobile);
app.use("/shop/mobile/motorola", motorolaMobile);
app.use("/shop/mobile/xiaomi", xiaomiMobile);
app.use("/shop/mobile/oppo", oppoMobile);
app.use("/shop/mobile/googlePixel", googlePixelMobile);

app.use("/shop/electronics/laptops", laptop);
app.use("/shop/electronics/desktops", desktop);
app.use("/shop/electronics/headphones", headphones);
app.use("/shop/electronics/smartWearable", smartWearable);
app.use("/shop/electronics/stylingDevices", stylingDevices);
app.use("/shop/electronics/camera", cameras);
app.use("/shop/electronics/tablet", tablets);
app.use("/shop/electronics/computerAccessories", computer);
app.use("/shop/electronics/mobileProtection", mobile);
app.use("/shop/electronics/powerbank", powerbank);
app.use("/shop/electronics/speakers", speaker);
app.use("/shop/electronics/mobileAccessories", mobileAccessory);

app.use("/shop/appliances/smartTv", smartTv);
app.use("/shop/appliances/washingMachine", washingMachine);
app.use("/shop/appliances/refrigerator", refrigerator);
app.use("/shop/appliances/fansAndAirCoolers", fansAndAirCoolers);
app.use("/shop/appliances/kitchenAppliances", kitchenAppliances);
app.use("/shop/appliances/airConditioners", ac);
app.use("/shop/appliances/homeAppliances", home);
app.use("/shop/appliances/microwaveOven", oven);

app.use("/shop/fashion/tshirts", tshirt);
app.use("/shop/fashion/jeans", jean);
app.use("/shop/fashion/trackPants", trackPant);
app.use("/shop/fashion/sportsShoes", shoe);
app.use("/shop/fashion/sareesAndKurtas", sareesAndKurtas);
app.use("/shop/fashion/womenFootwear", footwear);
app.use("/shop/fashion/luggageAndBags", luggageAndBags);
app.use("/shop/fashion/kidsFashion", kidsFashion);

app.use("/shop/home/kitchenAndCookware", kitchenAndCookware);
app.use("/shop/home/homeFurnishing", homeFurnishing);
app.use("/shop/home/homeDecor", homeDecor);
app.use("/shop/home/diningAndServeware", diningAndServeware);
app.use("/shop/home/gardeningEssentials", gardeningEssentials);
app.use("/shop/home/lightning", lightning);
app.use("/shop/home/bedsheets", bedsheets);
app.use("/shop/home/cleaningEssentials", cleaningEssentials);

app.use("/shop/personalCare/skinCare", skinCare);
app.use("/shop/personalCare/hairCare", hairCare);
app.use("/shop/personalCare/makeup", makeup);
app.use("/shop/personalCare/fragrances", fragrance);
app.use("/shop/personalCare/dailyEssentials", dailyEssential);
app.use("/shop/personalCare/menGrooming", menGrooming);
app.use("/shop/personalCare/oralCare", oralCare);

app.use("/shop/toysAndBabyCare/babyCare", babyCareEssentials);
app.use("/shop/toysAndBabyCare/toysAndGames", toysAndGames);
app.use("/shop/toysAndBabyCare/guidanceForParents", guidanceForParents);
app.use("/shop/toysAndBabyCare/stationeryAndSchoolSupplies", stationeryAndSchoolSupplies);

app.use("/shop/furniture/sofas", sofas);
app.use("/shop/furniture/beds", beds);
app.use("/shop/furniture/wardRobes", wardRobes);
app.use("/shop/furniture/diningTables", diningTables);
app.use("/shop/furniture/officeChairs", officeChairs);
app.use("/shop/furniture/recliners", recliners);
app.use("/shop/furniture/tvUnits", tvUnits);
app.use("/shop/furniture/portableLaptopTables", portableLaptopTables);
app.use("/shop/furniture/swings", swings);

app.use("/shop/sports/sportShoes", sportShoe);
app.use("/shop/sports/sportsWear", sportsWear);
app.use("/shop/sports/sportsGear", sportsGear);
app.use("/shop/sports/fitnessEquipments", fitnessEquipments);

app.use("/shop/nutritionAndMore/foodAndBeverages", foodAndBeverages);
app.use("/shop/nutritionAndMore/nutritionAndHealthCare", nutritionAndHealthCare);
app.use("/shop/nutritionAndMore/sportsAndFitness", sportsAndFitness);
app.use("/shop/nutritionAndMore/autoAccessories", autoAccessories);
app.use("/shop/nutritionAndMore/petSupplies", petSupplies);

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`App is running on the PORT ${process.env.PORT}`);
});