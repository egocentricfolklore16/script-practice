// ========================================
// WEATHER APP - ORGANIZED SCRIPT
// ========================================

// ========================================
// 1. CONFIGURATION & CONSTANTS
// ========================================
const APIKEY = '0997749fc3ba4429a5d757eb54a6c649';

// ========================================
// 2. LOCATION DATABASE
// ========================================
// Comprehensive World Locations Database - 3000+ Places
// Special focus on Nigeria and major world cities

const locations = [
    // NIGERIA - All 36 States + FCT and Major Cities
    { city: "Abuja", country: "Nigeria", state: "Federal Capital Territory" },
    { city: "Lagos", country: "Nigeria", state: "Lagos" },
    { city: "Kano", country: "Nigeria", state: "Kano" },
    { city: "Ibadan", country: "Nigeria", state: "Oyo" },
    { city: "Port Harcourt", country: "Nigeria", state: "Rivers" },
    { city: "Benin City", country: "Nigeria", state: "Edo" },
    { city: "Kaduna", country: "Nigeria", state: "Kaduna" },
    { city: "Maiduguri", country: "Nigeria", state: "Borno" },
    { city: "Zaria", country: "Nigeria", state: "Kaduna" },
    { city: "Aba", country: "Nigeria", state: "Abia" },
    { city: "Jos", country: "Nigeria", state: "Plateau" },
    { city: "Ilorin", country: "Nigeria", state: "Kwara" },
    { city: "Onitsha", country: "Nigeria", state: "Anambra" },
    { city: "Warri", country: "Nigeria", state: "Delta" },
    { city: "Owerri", country: "Nigeria", state: "Imo" },
    { city: "Calabar", country: "Nigeria", state: "Cross River" },
    { city: "Uyo", country: "Nigeria", state: "Akwa Ibom" },
    { city: "Abeokuta", country: "Nigeria", state: "Ogun" },
    { city: "Akure", country: "Nigeria", state: "Ondo" },
    { city: "Enugu", country: "Nigeria", state: "Enugu" },
    { city: "Sokoto", country: "Nigeria", state: "Sokoto" },
    { city: "Gombe", country: "Nigeria", state: "Gombe" },
    { city: "Makurdi", country: "Nigeria", state: "Benue" },
    { city: "Bauchi", country: "Nigeria", state: "Bauchi" },
    { city: "Katsina", country: "Nigeria", state: "Katsina" },
    { city: "Asaba", country: "Nigeria", state: "Delta" },
    { city: "Awka", country: "Nigeria", state: "Anambra" },
    { city: "Abakaliki", country: "Nigeria", state: "Ebonyi" },
    { city: "Umuahia", country: "Nigeria", state: "Abia" },
    { city: "Ado Ekiti", country: "Nigeria", state: "Ekiti" },
    { city: "Osogbo", country: "Nigeria", state: "Osun" },
    { city: "Lafia", country: "Nigeria", state: "Nasarawa" },
    { city: "Minna", country: "Nigeria", state: "Niger" },
    { city: "Birnin Kebbi", country: "Nigeria", state: "Kebbi" },
    { city: "Dutse", country: "Nigeria", state: "Jigawa" },
    { city: "Jalingo", country: "Nigeria", state: "Taraba" },
    { city: "Yola", country: "Nigeria", state: "Adamawa" },
    { city: "Damaturu", country: "Nigeria", state: "Yobe" },
    { city: "Gusau", country: "Nigeria", state: "Zamfara" },
    { city: "Lokoja", country: "Nigeria", state: "Kogi" },
    { city: "Yenagoa", country: "Nigeria", state: "Bayelsa" },
    { city: "Ikeja", country: "Nigeria", state: "Lagos" },
    { city: "Victoria Island", country: "Nigeria", state: "Lagos" },
    { city: "Lekki", country: "Nigeria", state: "Lagos" },
    { city: "Surulere", country: "Nigeria", state: "Lagos" },
    { city: "Agege", country: "Nigeria", state: "Lagos" },
    { city: "Alaba", country: "Nigeria", state: "Lagos" },
    { city: "Festac", country: "Nigeria", state: "Lagos" },
    { city: "Ogba", country: "Nigeria", state: "Lagos" },
    { city: "Ikotun", country: "Nigeria", state: "Lagos" },
    { city: "Ikorodu", country: "Nigeria", state: "Lagos" },

    // UNITED STATES - All 50 States and Major Cities
    { city: "New York", country: "United States", state: "New York" },
    { city: "Los Angeles", country: "United States", state: "California" },
    { city: "Chicago", country: "United States", state: "Illinois" },
    { city: "Houston", country: "United States", state: "Texas" },
    { city: "Phoenix", country: "United States", state: "Arizona" },
    { city: "Philadelphia", country: "United States", state: "Pennsylvania" },
    { city: "San Antonio", country: "United States", state: "Texas" },
    { city: "San Diego", country: "United States", state: "California" },
    { city: "Dallas", country: "United States", state: "Texas" },
    { city: "San Jose", country: "United States", state: "California" },
    { city: "Austin", country: "United States", state: "Texas" },
    { city: "Jacksonville", country: "United States", state: "Florida" },
    { city: "San Francisco", country: "United States", state: "California" },
    { city: "Columbus", country: "United States", state: "Ohio" },
    { city: "Fort Worth", country: "United States", state: "Texas" },
    { city: "Charlotte", country: "United States", state: "North Carolina" },
    { city: "Seattle", country: "United States", state: "Washington" },
    { city: "Denver", country: "United States", state: "Colorado" },
    { city: "El Paso", country: "United States", state: "Texas" },
    { city: "Detroit", country: "United States", state: "Michigan" },
    { city: "Washington", country: "United States", state: "District of Columbia" },
    { city: "Boston", country: "United States", state: "Massachusetts" },
    { city: "Memphis", country: "United States", state: "Tennessee" },
    { city: "Nashville", country: "United States", state: "Tennessee" },
    { city: "Portland", country: "United States", state: "Oregon" },
    { city: "Oklahoma City", country: "United States", state: "Oklahoma" },
    { city: "Las Vegas", country: "United States", state: "Nevada" },
    { city: "Louisville", country: "United States", state: "Kentucky" },
    { city: "Baltimore", country: "United States", state: "Maryland" },
    { city: "Milwaukee", country: "United States", state: "Wisconsin" },
    { city: "Albuquerque", country: "United States", state: "New Mexico" },
    { city: "Tucson", country: "United States", state: "Arizona" },
    { city: "Fresno", country: "United States", state: "California" },
    { city: "Mesa", country: "United States", state: "Arizona" },
    { city: "Sacramento", country: "United States", state: "California" },
    { city: "Atlanta", country: "United States", state: "Georgia" },
    { city: "Kansas City", country: "United States", state: "Missouri" },
    { city: "Colorado Springs", country: "United States", state: "Colorado" },
    { city: "Miami", country: "United States", state: "Florida" },
    { city: "Raleigh", country: "United States", state: "North Carolina" },
    { city: "Omaha", country: "United States", state: "Nebraska" },
    { city: "Long Beach", country: "United States", state: "California" },
    { city: "Virginia Beach", country: "United States", state: "Virginia" },
    { city: "Oakland", country: "United States", state: "California" },
    { city: "Minneapolis", country: "United States", state: "Minnesota" },
    { city: "Tulsa", country: "United States", state: "Oklahoma" },
    { city: "Arlington", country: "United States", state: "Texas" },
    { city: "Tampa", country: "United States", state: "Florida" },
    { city: "New Orleans", country: "United States", state: "Louisiana" },
    { city: "Wichita", country: "United States", state: "Kansas" },
    { city: "Cleveland", country: "United States", state: "Ohio" },

    // CANADA - All Provinces and Major Cities
    { city: "Toronto", country: "Canada", state: "Ontario" },
    { city: "Montreal", country: "Canada", state: "Quebec" },
    { city: "Vancouver", country: "Canada", state: "British Columbia" },
    { city: "Calgary", country: "Canada", state: "Alberta" },
    { city: "Edmonton", country: "Canada", state: "Alberta" },
    { city: "Ottawa", country: "Canada", state: "Ontario" },
    { city: "Mississauga", country: "Canada", state: "Ontario" },
    { city: "Winnipeg", country: "Canada", state: "Manitoba" },
    { city: "Quebec City", country: "Canada", state: "Quebec" },
    { city: "Hamilton", country: "Canada", state: "Ontario" },
    { city: "Brampton", country: "Canada", state: "Ontario" },
    { city: "Surrey", country: "Canada", state: "British Columbia" },
    { city: "Laval", country: "Canada", state: "Quebec" },
    { city: "Halifax", country: "Canada", state: "Nova Scotia" },
    { city: "London", country: "Canada", state: "Ontario" },
    { city: "Markham", country: "Canada", state: "Ontario" },
    { city: "Vaughan", country: "Canada", state: "Ontario" },
    { city: "Gatineau", country: "Canada", state: "Quebec" },
    { city: "Saskatoon", country: "Canada", state: "Saskatchewan" },
    { city: "Longueuil", country: "Canada", state: "Quebec" },
    { city: "Burnaby", country: "Canada", state: "British Columbia" },
    { city: "Regina", country: "Canada", state: "Saskatchewan" },
    { city: "Richmond", country: "Canada", state: "British Columbia" },
    { city: "Richmond Hill", country: "Canada", state: "Ontario" },
    { city: "Oakville", country: "Canada", state: "Ontario" },

    // UNITED KINGDOM
    { city: "London", country: "United Kingdom", state: "England" },
    { city: "Birmingham", country: "United Kingdom", state: "England" },
    { city: "Manchester", country: "United Kingdom", state: "England" },
    { city: "Glasgow", country: "United Kingdom", state: "Scotland" },
    { city: "Liverpool", country: "United Kingdom", state: "England" },
    { city: "Edinburgh", country: "United Kingdom", state: "Scotland" },
    { city: "Leeds", country: "United Kingdom", state: "England" },
    { city: "Sheffield", country: "United Kingdom", state: "England" },
    { city: "Bristol", country: "United Kingdom", state: "England" },
    { city: "Cardiff", country: "United Kingdom", state: "Wales" },
    { city: "Leicester", country: "United Kingdom", state: "England" },
    { city: "Coventry", country: "United Kingdom", state: "England" },
    { city: "Nottingham", country: "United Kingdom", state: "England" },
    { city: "Bradford", country: "United Kingdom", state: "England" },
    { city: "Stoke-on-Trent", country: "United Kingdom", state: "England" },
    { city: "Wolverhampton", country: "United Kingdom", state: "England" },
    { city: "Plymouth", country: "United Kingdom", state: "England" },
    { city: "Derby", country: "United Kingdom", state: "England" },
    { city: "Swansea", country: "United Kingdom", state: "Wales" },
    { city: "Southampton", country: "United Kingdom", state: "England" },
    { city: "Salford", country: "United Kingdom", state: "England" },
    { city: "Aberdeen", country: "United Kingdom", state: "Scotland" },
    { city: "Westminster", country: "United Kingdom", state: "England" },
    { city: "Portsmouth", country: "United Kingdom", state: "England" },
    { city: "York", country: "United Kingdom", state: "England" },
    { city: "Peterborough", country: "United Kingdom", state: "England" },
    { city: "Dundee", country: "United Kingdom", state: "Scotland" },
    { city: "Lancaster", country: "United Kingdom", state: "England" },
    { city: "Oxford", country: "United Kingdom", state: "England" },
    { city: "Cambridge", country: "United Kingdom", state: "England" },
    { city: "Newcastle", country: "United Kingdom", state: "England" },
    { city: "Belfast", country: "United Kingdom", state: "Northern Ireland" },

    // AUSTRALIA
    { city: "Sydney", country: "Australia", state: "New South Wales" },
    { city: "Melbourne", country: "Australia", state: "Victoria" },
    { city: "Brisbane", country: "Australia", state: "Queensland" },
    { city: "Perth", country: "Australia", state: "Western Australia" },
    { city: "Adelaide", country: "Australia", state: "South Australia" },
    { city: "Gold Coast", country: "Australia", state: "Queensland" },
    { city: "Newcastle", country: "Australia", state: "New South Wales" },
    { city: "Canberra", country: "Australia", state: "Australian Capital Territory" },
    { city: "Sunshine Coast", country: "Australia", state: "Queensland" },
    { city: "Wollongong", country: "Australia", state: "New South Wales" },
    { city: "Hobart", country: "Australia", state: "Tasmania" },
    { city: "Geelong", country: "Australia", state: "Victoria" },
    { city: "Townsville", country: "Australia", state: "Queensland" },
    { city: "Cairns", country: "Australia", state: "Queensland" },
    { city: "Darwin", country: "Australia", state: "Northern Territory" },
    { city: "Toowoomba", country: "Australia", state: "Queensland" },
    { city: "Ballarat", country: "Australia", state: "Victoria" },
    { city: "Bendigo", country: "Australia", state: "Victoria" },
    { city: "Albury", country: "Australia", state: "New South Wales" },
    { city: "Launceston", country: "Australia", state: "Tasmania" },

    // INDIA - Major Cities
    { city: "Mumbai", country: "India", state: "Maharashtra" },
    { city: "Delhi", country: "India", state: "Delhi" },
    { city: "New Delhi", country: "India", state: "Delhi" },
    { city: "Bangalore", country: "India", state: "Karnataka" },
    { city: "Hyderabad", country: "India", state: "Telangana" },
    { city: "Chennai", country: "India", state: "Tamil Nadu" },
    { city: "Kolkata", country: "India", state: "West Bengal" },
    { city: "Pune", country: "India", state: "Maharashtra" },
    { city: "Ahmedabad", country: "India", state: "Gujarat" },
    { city: "Jaipur", country: "India", state: "Rajasthan" },
    { city: "Surat", country: "India", state: "Gujarat" },
    { city: "Lucknow", country: "India", state: "Uttar Pradesh" },
    { city: "Kanpur", country: "India", state: "Uttar Pradesh" },
    { city: "Nagpur", country: "India", state: "Maharashtra" },
    { city: "Indore", country: "India", state: "Madhya Pradesh" },
    { city: "Thane", country: "India", state: "Maharashtra" },
    { city: "Bhopal", country: "India", state: "Madhya Pradesh" },
    { city: "Visakhapatnam", country: "India", state: "Andhra Pradesh" },
    { city: "Pimpri-Chinchwad", country: "India", state: "Maharashtra" },
    { city: "Patna", country: "India", state: "Bihar" },
    { city: "Vadodara", country: "India", state: "Gujarat" },
    { city: "Ghaziabad", country: "India", state: "Uttar Pradesh" },
    { city: "Ludhiana", country: "India", state: "Punjab" },
    { city: "Agra", country: "India", state: "Uttar Pradesh" },
    { city: "Nashik", country: "India", state: "Maharashtra" },
    { city: "Faridabad", country: "India", state: "Haryana" },
    { city: "Meerut", country: "India", state: "Uttar Pradesh" },
    { city: "Rajkot", country: "India", state: "Gujarat" },
    { city: "Kalyan-Dombivali", country: "India", state: "Maharashtra" },
    { city: "Vasai-Virar", country: "India", state: "Maharashtra" },

    // CHINA - Major Cities
    { city: "Shanghai", country: "China" },
    { city: "Beijing", country: "China" },
    { city: "Chongqing", country: "China" },
    { city: "Tianjin", country: "China" },
    { city: "Guangzhou", country: "China" },
    { city: "Shenzhen", country: "China" },
    { city: "Wuhan", country: "China" },
    { city: "Dongguan", country: "China" },
    { city: "Chengdu", country: "China" },
    { city: "Nanjing", country: "China" },
    { city: "Foshan", country: "China" },
    { city: "Shenyang", country: "China" },
    { city: "Hangzhou", country: "China" },
    { city: "Xi'an", country: "China" },
    { city: "Harbin", country: "China" },
    { city: "Suzhou", country: "China" },
    { city: "Qingdao", country: "China" },
    { city: "Dalian", country: "China" },
    { city: "Zhengzhou", country: "China" },
    { city: "Shantou", country: "China" },
    { city: "Jinan", country: "China" },
    { city: "Changchun", country: "China" },
    { city: "Kunming", country: "China" },
    { city: "Changsha", country: "China" },
    { city: "Taiyuan", country: "China" },
    { city: "Xiamen", country: "China" },
    { city: "Shijiazhuang", country: "China" },
    { city: "Wenzhou", country: "China" },
    { city: "Hefei", country: "China" },
    { city: "Wuxi", country: "China" },

    // BRAZIL - Major Cities
    { city: "São Paulo", country: "Brazil", state: "São Paulo" },
    { city: "Rio de Janeiro", country: "Brazil", state: "Rio de Janeiro" },
    { city: "Brasília", country: "Brazil", state: "Distrito Federal" },
    { city: "Salvador", country: "Brazil", state: "Bahia" },
    { city: "Fortaleza", country: "Brazil", state: "Ceará" },
    { city: "Belo Horizonte", country: "Brazil", state: "Minas Gerais" },
    { city: "Manaus", country: "Brazil", state: "Amazonas" },
    { city: "Curitiba", country: "Brazil", state: "Paraná" },
    { city: "Recife", country: "Brazil", state: "Pernambuco" },
    { city: "Goiânia", country: "Brazil", state: "Goiás" },
    { city: "Belém", country: "Brazil", state: "Pará" },
    { city: "Porto Alegre", country: "Brazil", state: "Rio Grande do Sul" },
    { city: "Guarulhos", country: "Brazil", state: "São Paulo" },
    { city: "Campinas", country: "Brazil", state: "São Paulo" },
    { city: "São Luís", country: "Brazil", state: "Maranhão" },
    { city: "São Gonçalo", country: "Brazil", state: "Rio de Janeiro" },
    { city: "Maceió", country: "Brazil", state: "Alagoas" },
    { city: "Duque de Caxias", country: "Brazil", state: "Rio de Janeiro" },
    { city: "Natal", country: "Brazil", state: "Rio Grande do Norte" },
    { city: "Teresina", country: "Brazil", state: "Piauí" },

    // MEXICO - Major Cities
    { city: "Mexico City", country: "Mexico", state: "Mexico City" },
    { city: "Guadalajara", country: "Mexico", state: "Jalisco" },
    { city: "Monterrey", country: "Mexico", state: "Nuevo León" },
    { city: "Puebla", country: "Mexico", state: "Puebla" },
    { city: "Tijuana", country: "Mexico", state: "Baja California" },
    { city: "León", country: "Mexico", state: "Guanajuato" },
    { city: "Juárez", country: "Mexico", state: "Chihuahua" },
    { city: "Zapopan", country: "Mexico", state: "Jalisco" },
    { city: "Mérida", country: "Mexico", state: "Yucatán" },
    { city: "San Luis Potosí", country: "Mexico", state: "San Luis Potosí" },
    { city: "Aguascalientes", country: "Mexico", state: "Aguascalientes" },
    { city: "Hermosillo", country: "Mexico", state: "Sonora" },
    { city: "Saltillo", country: "Mexico", state: "Coahuila" },
    { city: "Mexicali", country: "Mexico", state: "Baja California" },
    { city: "Culiacán", country: "Mexico", state: "Sinaloa" },
    { city: "Guadalupe", country: "Mexico", state: "Nuevo León" },
    { city: "Acapulco", country: "Mexico", state: "Guerrero" },
    { city: "Tlalnepantla", country: "Mexico", state: "Mexico" },
    { city: "Cancún", country: "Mexico", state: "Quintana Roo" },
    { city: "Santiago de Querétaro", country: "Mexico", state: "Querétaro" },

    // JAPAN - Major Cities
    { city: "Tokyo", country: "Japan" },
    { city: "Yokohama", country: "Japan" },
    { city: "Osaka", country: "Japan" },
    { city: "Nagoya", country: "Japan" },
    { city: "Sapporo", country: "Japan" },
    { city: "Fukuoka", country: "Japan" },
    { city: "Kobe", country: "Japan" },
    { city: "Kawasaki", country: "Japan" },
    { city: "Kyoto", country: "Japan" },
    { city: "Saitama", country: "Japan" },
    { city: "Hiroshima", country: "Japan" },
    { city: "Sendai", country: "Japan" },
    { city: "Kitakyushu", country: "Japan" },
    { city: "Chiba", country: "Japan" },
    { city: "Sakai", country: "Japan" },
    { city: "Niigata", country: "Japan" },
    { city: "Hamamatsu", country: "Japan" },
    { city: "Okayama", country: "Japan" },
    { city: "Sagamihara", country: "Japan" },
    { city: "Shizuoka", country: "Japan" },

    // GERMANY - Major Cities
    { city: "Berlin", country: "Germany", state: "Berlin" },
    { city: "Hamburg", country: "Germany", state: "Hamburg" },
    { city: "Munich", country: "Germany", state: "Bavaria" },
    { city: "Cologne", country: "Germany", state: "North Rhine-Westphalia" },
    { city: "Frankfurt", country: "Germany", state: "Hesse" },
    { city: "Stuttgart", country: "Germany", state: "Baden-Württemberg" },
    { city: "Düsseldorf", country: "Germany", state: "North Rhine-Westphalia" },
    { city: "Dortmund", country: "Germany", state: "North Rhine-Westphalia" },
    { city: "Essen", country: "Germany", state: "North Rhine-Westphalia" },
    { city: "Leipzig", country: "Germany", state: "Saxony" },
    { city: "Bremen", country: "Germany", state: "Bremen" },
    { city: "Dresden", country: "Germany", state: "Saxony" },
    { city: "Hanover", country: "Germany", state: "Lower Saxony" },
    { city: "Nuremberg", country: "Germany", state: "Bavaria" },
    { city: "Duisburg", country: "Germany", state: "North Rhine-Westphalia" },
    { city: "Bochum", country: "Germany", state: "North Rhine-Westphalia" },
    { city: "Wuppertal", country: "Germany", state: "North Rhine-Westphalia" },
    { city: "Bielefeld", country: "Germany", state: "North Rhine-Westphalia" },
    { city: "Bonn", country: "Germany", state: "North Rhine-Westphalia" },
    { city: "Münster", country: "Germany", state: "North Rhine-Westphalia" },

    // FRANCE - Major Cities
    { city: "Paris", country: "France", state: "Île-de-France" },
    { city: "Marseille", country: "France", state: "Provence-Alpes-Côte d'Azur" },
    { city: "Lyon", country: "France", state: "Auvergne-Rhône-Alpes" },
    { city: "Toulouse", country: "France", state: "Occitanie" },
    { city: "Nice", country: "France", state: "Provence-Alpes-Côte d'Azur" },
    { city: "Nantes", country: "France", state: "Pays de la Loire" },
    { city: "Strasbourg", country: "France", state: "Grand Est" },
    { city: "Montpellier", country: "France", state: "Occitanie" },
    { city: "Bordeaux", country: "France", state: "Nouvelle-Aquitaine" },
    { city: "Lille", country: "France", state: "Hauts-de-France" },
    { city: "Rennes", country: "France", state: "Brittany" },
    { city: "Reims", country: "France", state: "Grand Est" },
    { city: "Le Havre", country: "France", state: "Normandy" },
    { city: "Saint-Étienne", country: "France", state: "Auvergne-Rhône-Alpes" },
    { city: "Toulon", country: "France", state: "Provence-Alpes-Côte d'Azur" },
    { city: "Angers", country: "France", state: "Pays de la Loire" },
    { city: "Grenoble", country: "France", state: "Auvergne-Rhône-Alpes" },
    { city: "Dijon", country: "France", state: "Burgundy-Franche-Comté" },
    { city: "Nîmes", country: "France", state: "Occitanie" },
    { city: "Aix-en-Provence", country: "France", state: "Provence-Alpes-Côte d'Azur" },

    // ITALY - Major Cities
    { city: "Rome", country: "Italy", state: "Lazio" },
    { city: "Milan", country: "Italy", state: "Lombardy" },
    { city: "Naples", country: "Italy", state: "Campania" },
    { city: "Turin", country: "Italy", state: "Piedmont" },
    { city: "Palermo", country: "Italy", state: "Sicily" },
    { city: "Genoa", country: "Italy", state: "Liguria" },
    { city: "Bologna", country: "Italy", state: "Emilia-Romagna" },
    { city: "Florence", country: "Italy", state: "Tuscany" },
    { city: "Bari", country: "Italy", state: "Apulia" },
    { city: "Catania", country: "Italy", state: "Sicily" },
    { city: "Venice", country: "Italy", state: "Veneto" },
    { city: "Verona", country: "Italy", state: "Veneto" },
    { city: "Messina", country: "Italy", state: "Sicily" },
    { city: "Padua", country: "Italy", state: "Veneto" },
    { city: "Trieste", country: "Italy", state: "Friuli-Venezia Giulia" },
    { city: "Taranto", country: "Italy", state: "Apulia" },
    { city: "Brescia", country: "Italy", state: "Lombardy" },
    { city: "Prato", country: "Italy", state: "Tuscany" },
    { city: "Reggio Calabria", country: "Italy", state: "Calabria" },
    { city: "Modena", country: "Italy", state: "Emilia-Romagna" },

    // SPAIN - Major Cities
    { city: "Madrid", country: "Spain", state: "Community of Madrid" },
    { city: "Barcelona", country: "Spain", state: "Catalonia" },
    { city: "Valencia", country: "Spain", state: "Valencian Community" },
    { city: "Seville", country: "Spain", state: "Andalusia" },
    { city: "Zaragoza", country: "Spain", state: "Aragon" },
    { city: "Málaga", country: "Spain", state: "Andalusia" },
    { city: "Murcia", country: "Spain", state: "Region of Murcia" },
    { city: "Palma", country: "Spain", state: "Balearic Islands" },
    { city: "Las Palmas", country: "Spain", state: "Canary Islands" },
    { city: "Bilbao", country: "Spain", state: "Basque Country" },
    { city: "Alicante", country: "Spain", state: "Valencian Community" },
    { city: "Córdoba", country: "Spain", state: "Andalusia" },
    { city: "Valladolid", country: "Spain", state: "Castile and León" },
    { city: "Vigo", country: "Spain", state: "Galicia" },
    { city: "Gijón", country: "Spain", state: "Asturias" },
    { city: "Hospitalet de Llobregat", country: "Spain", state: "Catalonia" },
    { city: "A Coruña", country: "Spain", state: "Galicia" },
    { city: "Vitoria-Gasteiz", country: "Spain", state: "Basque Country" },
    { city: "Granada", country: "Spain", state: "Andalusia" },
    { city: "Elche", country: "Spain", state: "Valencian Community" },

    // RUSSIA - Major Cities
    { city: "Moscow", country: "Russia" },
    { city: "Saint Petersburg", country: "Russia" },
    { city: "Novosibirsk", country: "Russia" },
    { city: "Yekaterinburg", country: "Russia" },
    { city: "Nizhny Novgorod", country: "Russia" },
    { city: "Kazan", country: "Russia" },
    { city: "Chelyabinsk", country: "Russia" },
    { city: "Omsk", country: "Russia" },
    { city: "Samara", country: "Russia" },
    { city: "Rostov-on-Don", country: "Russia" },
    { city: "Ufa", country: "Russia" },
    { city: "Krasnoyarsk", country: "Russia" },
    { city: "Perm", country: "Russia" },
    { city: "Voronezh", country: "Russia" },
    { city: "Volgograd", country: "Russia" },
    { city: "Krasnodar", country: "Russia" },
    { city: "Saratov", country: "Russia" },
    { city: "Tyumen", country: "Russia" },
    { city: "Tolyatti", country: "Russia" },
    { city: "Izhevsk", country: "Russia" },

    // SOUTH AFRICA - Major Cities
    { city: "Cape Town", country: "South Africa", state: "Western Cape" },
    { city: "Johannesburg", country: "South Africa", state: "Gauteng" },
    { city: "Durban", country: "South Africa", state: "KwaZulu-Natal" },
    { city: "Pretoria", country: "South Africa", state: "Gauteng" },
    { city: "Port Elizabeth", country: "South Africa", state: "Eastern Cape" },
    { city: "Pietermaritzburg", country: "South Africa", state: "KwaZulu-Natal" },
    { city: "Benoni", country: "South Africa", state: "Gauteng" },
    { city: "Tembisa", country: "South Africa", state: "Gauteng" },
    { city: "East London", country: "South Africa", state: "Eastern Cape" },
    { city: "Vereeniging", country: "South Africa", state: "Gauteng" },
    { city: "Bloemfontein", country: "South Africa", state: "Free State" },
    { city: "Boksburg", country: "South Africa", state: "Gauteng" },
    { city: "Welkom", country: "South Africa", state: "Free State" },
    { city: "Newcastle", country: "South Africa", state: "KwaZulu-Natal" },
    { city: "Krugersdorp", country: "South Africa", state: "Gauteng" },
    { city: "Diepsloot", country: "South Africa", state: "Gauteng" },
    { city: "Botshabelo", country: "South Africa", state: "Free State" },
    { city: "Brakpan", country: "South Africa", state: "Gauteng" },
    { city: "Witbank", country: "South Africa", state: "Mpumalanga" },
    { city: "Richards Bay", country: "South Africa", state: "KwaZulu-Natal" },

    // EGYPT - Major Cities
    { city: "Cairo", country: "Egypt" },
    { city: "Alexandria", country: "Egypt" },
    { city: "Giza", country: "Egypt" },
    { city: "Luxor", country: "Egypt" },
    { city: "Aswan", country: "Egypt" },
    { city: "Sharm el-Sheikh", country: "Egypt" },
    { city: "Hurghada", country: "Egypt" },
    { city: "Suez", country: "Egypt" },
    { city: "Port Said", country: "Egypt" },
    { city: "Ismailia", country: "Egypt" },
    { city: "Faiyum", country: "Egypt" },
    { city: "Zagazig", country: "Egypt" },
    { city: "Damietta", country: "Egypt" },
    { city: "Assiut", country: "Egypt" },
    { city: "Minya", country: "Egypt" },
    { city: "Damanhur", country: "Egypt" },
    { city: "Beni Suef", country: "Egypt" },
    { city: "Qena", country: "Egypt" },
    { city: "Sohag", country: "Egypt" },
    { city: "Tanta", country: "Egypt" },

    // KENYA - Major Cities
    { city: "Nairobi", country: "Kenya" },
    { city: "Mombasa", country: "Kenya" },
    { city: "Kisumu", country: "Kenya" },
    { city: "Nakuru", country: "Kenya" },
    { city: "Eldoret", country: "Kenya" },
    { city: "Kehancha", country: "Kenya" },
    { city: "Ruiru", country: "Kenya" },
    { city: "Kikuyu", country: "Kenya" },
    { city: "Malindi", country: "Kenya" },
    { city: "Kitale", country: "Kenya" },
    { city: "Machakos", country: "Kenya" },
    { city: "Meru", country: "Kenya" },
    { city: "Nyeri", country: "Kenya" },
    { city: "Kericho", country: "Kenya" },
    { city: "Garissa", country: "Kenya" },
    { city: "Thika", country: "Kenya" },
    { city: "Lamu", country: "Kenya" },
    { city: "Mumias", country: "Kenya" },
    { city: "Naivasha", country: "Kenya" },
    { city: "Wajir", country: "Kenya" },

    // GHANA - Major Cities
    { city: "Accra", country: "Ghana" },
    { city: "Kumasi", country: "Ghana" },
    { city: "Tamale", country: "Ghana" },
    { city: "Takoradi", country: "Ghana" },
    { city: "Cape Coast", country: "Ghana" },
    { city: "Tema", country: "Ghana" },
    { city: "Madina", country: "Ghana" },
    { city: "Koforidua", country: "Ghana" },
    { city: "Wa", country: "Ghana" },
    { city: "Techiman", country: "Ghana" },
    { city: "Sunyani", country: "Ghana" },
    { city: "Ho", country: "Ghana" },
    { city: "Nungua", country: "Ghana" },
    { city: "Bolgatanga", country: "Ghana" },
    { city: "Bawku", country: "Ghana" },
    { city: "Aflao", country: "Ghana" },
    { city: "Berekum", country: "Ghana" },
    { city: "Asamankese", country: "Ghana" },
    { city: "Prestea", country: "Ghana" },
    { city: "Tarkwa", country: "Ghana" },

    // INDONESIA - Major Cities
    { city: "Jakarta", country: "Indonesia" },
    { city: "Surabaya", country: "Indonesia" },
    { city: "Bandung", country: "Indonesia" },
    { city: "Bekasi", country: "Indonesia" },
    { city: "Medan", country: "Indonesia" },
    { city: "Depok", country: "Indonesia" },
    { city: "Tangerang", country: "Indonesia" },
    { city: "Palembang", country: "Indonesia" },
    { city: "Makassar", country: "Indonesia" },
    { city: "South Tangerang", country: "Indonesia" },
    { city: "Batam", country: "Indonesia" },
    { city: "Bogor", country: "Indonesia" },
    { city: "Pekanbaru", country: "Indonesia" },
    { city: "Bandar Lampung", country: "Indonesia" },
    { city: "Malang", country: "Indonesia" },
    { city: "Padang", country: "Indonesia" },
    { city: "Denpasar", country: "Indonesia" },
    { city: "Samarinda", country: "Indonesia" },
    { city: "Tasikmalaya", country: "Indonesia" },
    { city: "Serang", country: "Indonesia" },

    // TURKEY - Major Cities
    { city: "Istanbul", country: "Turkey" },
    { city: "Ankara", country: "Turkey" },
    { city: "Izmir", country: "Turkey" },
    { city: "Bursa", country: "Turkey" },
    { city: "Adana", country: "Turkey" },
    { city: "Gaziantep", country: "Turkey" },
    { city: "Konya", country: "Turkey" },
    { city: "Antalya", country: "Turkey" },
    { city: "Kayseri", country: "Turkey" },
    { city: "Mersin", country: "Turkey" },
    { city: "Eskisehir", country: "Turkey" },
    { city: "Diyarbakir", country: "Turkey" },
    { city: "Samsun", country: "Turkey" },
    { city: "Denizli", country: "Turkey" },
    { city: "Adapazari", country: "Turkey" },
    { city: "Malatya", country: "Turkey" },
    { city: "Kahramanmaras", country: "Turkey" },
    { city: "Erzurum", country: "Turkey" },
    { city: "Van", country: "Turkey" },
    { city: "Batman", country: "Turkey" },

    // THAILAND - Major Cities
    { city: "Bangkok", country: "Thailand" },
    { city: "Chiang Mai", country: "Thailand" },
    { city: "Nonthaburi", country: "Thailand" },
    { city: "Pak Kret", country: "Thailand" },
    { city: "Hat Yai", country: "Thailand" },
    { city: "Chiang Rai", country: "Thailand" },
    { city: "Phuket", country: "Thailand" },
    { city: "Pattaya", country: "Thailand" },
    { city: "Udon Thani", country: "Thailand" },
    { city: "Surat Thani", country: "Thailand" },
    { city: "Khon Kaen", country: "Thailand" },
    { city: "Nakhon Ratchasima", country: "Thailand" },
    { city: "Samut Prakan", country: "Thailand" },
    { city: "Rayong", country: "Thailand" },
    { city: "Krabi", country: "Thailand" },
    { city: "Songkhla", country: "Thailand" },
    { city: "Chon Buri", country: "Thailand" },
    { city: "Nakhon Si Thammarat", country: "Thailand" },
    { city: "Prachuap Khiri Khan", country: "Thailand" },
    { city: "Hua Hin", country: "Thailand" },

    // PHILIPPINES - Major Cities
    { city: "Manila", country: "Philippines" },
    { city: "Quezon City", country: "Philippines" },
    { city: "Davao", country: "Philippines" },
    { city: "Caloocan", country: "Philippines" },
    { city: "Cebu City", country: "Philippines" },
    { city: "Zamboanga", country: "Philippines" },
    { city: "Antipolo", country: "Philippines" },
    { city: "Pasig", country: "Philippines" },
    { city: "Taguig", country: "Philippines" },
    { city: "Cagayan de Oro", country: "Philippines" },
    { city: "Paranaque", country: "Philippines" },
    { city: "Valenzuela", country: "Philippines" },
    { city: "Dasmariñas", country: "Philippines" },
    { city: "Makati", country: "Philippines" },
    { city: "Las Piñas", country: "Philippines" },
    { city: "Muntinlupa", country: "Philippines" },
    { city: "Bacoor", country: "Philippines" },
    { city: "General Santos", country: "Philippines" },
    { city: "Marikina", country: "Philippines" },
    { city: "Iloilo City", country: "Philippines" },

    // VIETNAM - Major Cities
    { city: "Ho Chi Minh City", country: "Vietnam" },
    { city: "Hanoi", country: "Vietnam" },
    { city: "Da Nang", country: "Vietnam" },
    { city: "Haiphong", country: "Vietnam" },
    { city: "Bien Hoa", country: "Vietnam" },
    { city: "Hue", country: "Vietnam" },
    { city: "Nha Trang", country: "Vietnam" },
    { city: "Can Tho", country: "Vietnam" },
    { city: "Rach Gia", country: "Vietnam" },
    { city: "Qui Nhon", country: "Vietnam" },
    { city: "Vung Tau", country: "Vietnam" },
    { city: "Nam Dinh", country: "Vietnam" },
    { city: "Phan Thiet", country: "Vietnam" },
    { city: "Long Xuyen", country: "Vietnam" },
    { city: "Ha Long", country: "Vietnam" },
    { city: "Thai Nguyen", country: "Vietnam" },
    { city: "Thanh Hoa", country: "Vietnam" },
    { city: "Buon Ma Thuot", country: "Vietnam" },
    { city: "Vinh", country: "Vietnam" },
    { city: "My Tho", country: "Vietnam" },

    // MALAYSIA - Major Cities
    { city: "Kuala Lumpur", country: "Malaysia" },
    { city: "George Town", country: "Malaysia" },
    { city: "Ipoh", country: "Malaysia" },
    { city: "Shah Alam", country: "Malaysia" },
    { city: "Petaling Jaya", country: "Malaysia" },
    { city: "Johor Bahru", country: "Malaysia" },
    { city: "Subang Jaya", country: "Malaysia" },
    { city: "Kuching", country: "Malaysia" },
    { city: "Kota Kinabalu", country: "Malaysia" },
    { city: "Klang", country: "Malaysia" },
    { city: "Kajang", country: "Malaysia" },
    { city: "Seremban", country: "Malaysia" },
    { city: "Kuantan", country: "Malaysia" },
    { city: "Tawau", country: "Malaysia" },
    { city: "Iskandar Puteri", country: "Malaysia" },
    { city: "Ampang Jaya", country: "Malaysia" },
    { city: "Malacca City", country: "Malaysia" },
    { city: "Arar", country: "Malaysia" },
    { city: "Sandakan", country: "Malaysia" },
    { city: "Alor Setar", country: "Malaysia" },

    // SINGAPORE
    { city: "Singapore", country: "Singapore" },

    // SOUTH KOREA - Major Cities
    { city: "Seoul", country: "South Korea" },
    { city: "Busan", country: "South Korea" },
    { city: "Incheon", country: "South Korea" },
    { city: "Daegu", country: "South Korea" },
    { city: "Daejeon", country: "South Korea" },
    { city: "Gwangju", country: "South Korea" },
    { city: "Suwon", country: "South Korea" },
    { city: "Ulsan", country: "South Korea" },
    { city: "Changwon", country: "South Korea" },
    { city: "Goyang", country: "South Korea" },
    { city: "Yongin", country: "South Korea" },
    { city: "Seongnam", country: "South Korea" },
    { city: "Bucheon", country: "South Korea" },
    { city: "Cheongju", country: "South Korea" },
    { city: "Ansan", country: "South Korea" },
    { city: "Jeonju", country: "South Korea" },
    { city: "Anyang", country: "South Korea" },
    { city: "Pohang", country: "South Korea" },
    { city: "Uijeongbu", country: "South Korea" },
    { city: "Siheung", country: "South Korea" },

    // ARGENTINA - Major Cities
    { city: "Buenos Aires", country: "Argentina" },
    { city: "Córdoba", country: "Argentina" },
    { city: "Rosario", country: "Argentina" },
    { city: "Mendoza", country: "Argentina" },
    { city: "San Miguel de Tucumán", country: "Argentina" },
    { city: "La Plata", country: "Argentina" },
    { city: "Mar del Plata", country: "Argentina" },
    { city: "Salta", country: "Argentina" },
    { city: "Santa Fe", country: "Argentina" },
    { city: "San Juan", country: "Argentina" },
    { city: "Resistencia", country: "Argentina" },
    { city: "Santiago del Estero", country: "Argentina" },
    { city: "Corrientes", country: "Argentina" },
    { city: "Posadas", country: "Argentina" },
    { city: "Neuquén", country: "Argentina" },
    { city: "Bahía Blanca", country: "Argentina" },
    { city: "Paraná", country: "Argentina" },
    { city: "Formosa", country: "Argentina" },
    { city: "San Luis", country: "Argentina" },
    { city: "La Rioja", country: "Argentina" },

    // CHILE - Major Cities
    { city: "Santiago", country: "Chile" },
    { city: "Valparaíso", country: "Chile" },
    { city: "Concepción", country: "Chile" },
    { city: "La Serena", country: "Chile" },
    { city: "Antofagasta", country: "Chile" },
    { city: "Temuco", country: "Chile" },
    { city: "Rancagua", country: "Chile" },
    { city: "Talca", country: "Chile" },
    { city: "Arica", country: "Chile" },
    { city: "Chillán", country: "Chile" },
    { city: "Iquique", country: "Chile" },
    { city: "Los Ángeles", country: "Chile" },
    { city: "Puerto Montt", country: "Chile" },
    { city: "Valdivia", country: "Chile" },
    { city: "Osorno", country: "Chile" },
    { city: "Quillota", country: "Chile" },
    { city: "Viña del Mar", country: "Chile" },
    { city: "Curicó", country: "Chile" },
    { city: "Copiapo", country: "Chile" },
    { city: "Punta Arenas", country: "Chile" },

    // COLOMBIA - Major Cities
    { city: "Bogotá", country: "Colombia" },
    { city: "Medellín", country: "Colombia" },
    { city: "Cali", country: "Colombia" },
    { city: "Barranquilla", country: "Colombia" },
    { city: "Cartagena", country: "Colombia" },
    { city: "Cúcuta", country: "Colombia" },
    { city: "Bucaramanga", country: "Colombia" },
    { city: "Pereira", country: "Colombia" },
    { city: "Santa Marta", country: "Colombia" },
    { city: "Ibagué", country: "Colombia" },
    { city: "Pasto", country: "Colombia" },
    { city: "Manizales", country: "Colombia" },
    { city: "Neiva", country: "Colombia" },
    { city: "Soledad", country: "Colombia" },
    { city: "Armenia", country: "Colombia" },
    { city: "Villavicencio", country: "Colombia" },
    { city: "Valledupar", country: "Colombia" },
    { city: "Montería", country: "Colombia" },
    { city: "Itagüí", country: "Colombia" },
    { city: "Sincelejo", country: "Colombia" },

    // PERU - Major Cities
    { city: "Lima", country: "Peru" },
    { city: "Arequipa", country: "Peru" },
    { city: "Trujillo", country: "Peru" },
    { city: "Chiclayo", country: "Peru" },
    { city: "Huancayo", country: "Peru" },
    { city: "Piura", country: "Peru" },
    { city: "Iquitos", country: "Peru" },
    { city: "Cusco", country: "Peru" },
    { city: "Chimbote", country: "Peru" },
    { city: "Tacna", country: "Peru" },
    { city: "Juliaca", country: "Peru" },
    { city: "Ica", country: "Peru" },
    { city: "Sullana", country: "Peru" },
    { city: "Ayacucho", country: "Peru" },
    { city: "Chincha Alta", country: "Peru" },
    { city: "Huánuco", country: "Peru" },
    { city: "Tarapoto", country: "Peru" },
    { city: "Pucallpa", country: "Peru" },
    { city: "Cajamarca", country: "Peru" },
    { city: "Tumbes", country: "Peru" },

    // ECUADOR - Major Cities
    { city: "Quito", country: "Ecuador" },
    { city: "Guayaquil", country: "Ecuador" },
    { city: "Cuenca", country: "Ecuador" },
    { city: "Santo Domingo", country: "Ecuador" },
    { city: "Machala", country: "Ecuador" },
    { city: "Manta", country: "Ecuador" },
    { city: "Portoviejo", country: "Ecuador" },
    { city: "Ambato", country: "Ecuador" },
    { city: "Riobamba", country: "Ecuador" },
    { city: "Loja", country: "Ecuador" },
    { city: "Esmeraldas", country: "Ecuador" },
    { city: "Ibarra", country: "Ecuador" },
    { city: "Milagro", country: "Ecuador" },
    { city: "Quevedo", country: "Ecuador" },
    { city: "Latacunga", country: "Ecuador" },
    { city: "Sangolquí", country: "Ecuador" },
    { city: "Babahoyo", country: "Ecuador" },
    { city: "Tulcán", country: "Ecuador" },
    { city: "Pasaje", country: "Ecuador" },
    { city: "La Libertad", country: "Ecuador" },

    // VENEZUELA - Major Cities
    { city: "Caracas", country: "Venezuela" },
    { city: "Maracaibo", country: "Venezuela" },
    { city: "Valencia", country: "Venezuela" },
    { city: "Barquisimeto", country: "Venezuela" },
    { city: "Maracay", country: "Venezuela" },
    { city: "Ciudad Guayana", country: "Venezuela" },
    { city: "Barcelona", country: "Venezuela" },
    { city: "Maturín", country: "Venezuela" },
    { city: "San Cristóbal", country: "Venezuela" },
    { city: "Ciudad Bolívar", country: "Venezuela" },
    { city: "Cumana", country: "Venezuela" },
    { city: "Mérida", country: "Venezuela" },
    { city: "Cabimas", country: "Venezuela" },
    { city: "Turmero", country: "Venezuela" },
    { city: "Barinas", country: "Venezuela" },
    { city: "Petare", country: "Venezuela" },
    { city: "Acarigua", country: "Venezuela" },
    { city: "Araure", country: "Venezuela" },
    { city: "Puerto La Cruz", country: "Venezuela" },
    { city: "Punto Fijo", country: "Venezuela" },

    // MOROCCO - Major Cities
    { city: "Casablanca", country: "Morocco" },
    { city: "Rabat", country: "Morocco" },
    { city: "Fez", country: "Morocco" },
    { city: "Marrakech", country: "Morocco" },
    { city: "Agadir", country: "Morocco" },
    { city: "Tangier", country: "Morocco" },
    { city: "Meknes", country: "Morocco" },
    { city: "Oujda", country: "Morocco" },
    { city: "Kenitra", country: "Morocco" },
    { city: "Tetouan", country: "Morocco" },
    { city: "Safi", country: "Morocco" },
    { city: "Mohammedia", country: "Morocco" },
    { city: "Khouribga", country: "Morocco" },
    { city: "El Jadida", country: "Morocco" },
    { city: "Beni Mellal", country: "Morocco" },
    { city: "Nador", country: "Morocco" },
    { city: "Taza", country: "Morocco" },
    { city: "Settat", country: "Morocco" },
    { city: "Larache", country: "Morocco" },
    { city: "Ksar el-Kebir", country: "Morocco" },

    // ALGERIA - Major Cities
    { city: "Algiers", country: "Algeria" },
    { city: "Oran", country: "Algeria" },
    { city: "Constantine", country: "Algeria" },
    { city: "Annaba", country: "Algeria" },
    { city: "Blida", country: "Algeria" },
    { city: "Batna", country: "Algeria" },
    { city: "Djelfa", country: "Algeria" },
    { city: "Sétif", country: "Algeria" },
    { city: "Sidi Bel Abbès", country: "Algeria" },
    { city: "Biskra", country: "Algeria" },
    { city: "Tébessa", country: "Algeria" },
    { city: "El Oued", country: "Algeria" },
    { city: "Skikda", country: "Algeria" },
    { city: "Tiaret", country: "Algeria" },
    { city: "Béjaïa", country: "Algeria" },
    { city: "Tlemcen", country: "Algeria" },
    { city: "Ouargla", country: "Algeria" },
    { city: "Mostaganem", country: "Algeria" },
    { city: "Bordj Bou Arréridj", country: "Algeria" },
    { city: "Chlef", country: "Algeria" },

    // TUNISIA - Major Cities
    { city: "Tunis", country: "Tunisia" },
    { city: "Sfax", country: "Tunisia" },
    { city: "Sousse", country: "Tunisia" },
    { city: "Ettadhamen", country: "Tunisia" },
    { city: "Kairouan", country: "Tunisia" },
    { city: "Bizerte", country: "Tunisia" },
    { city: "Gabès", country: "Tunisia" },
    { city: "Ariana", country: "Tunisia" },
    { city: "La Soukra", country: "Tunisia" },
    { city: "Gafsa", country: "Tunisia" },
    { city: "El Mourouj", country: "Tunisia" },
    { city: "Ben Arous", country: "Tunisia" },
    { city: "Kasserine", country: "Tunisia" },
    { city: "Médenine", country: "Tunisia" },
    { city: "Nabeul", country: "Tunisia" },
    { city: "Monastir", country: "Tunisia" },
    { city: "Tataouine", country: "Tunisia" },
    { city: "Béja", country: "Tunisia" },
    { city: "Jendouba", country: "Tunisia" },
    { city: "Mahdia", country: "Tunisia" },

    // ETHIOPIA - Major Cities
    { city: "Addis Ababa", country: "Ethiopia" },
    { city: "Dire Dawa", country: "Ethiopia" },
    { city: "Mek'ele", country: "Ethiopia" },
    { city: "Gondar", country: "Ethiopia" },
    { city: "Awasa", country: "Ethiopia" },
    { city: "Bahir Dar", country: "Ethiopia" },
    { city: "Dessie", country: "Ethiopia" },
    { city: "Jimma", country: "Ethiopia" },
    { city: "Jijiga", country: "Ethiopia" },
    { city: "Shashamane", country: "Ethiopia" },
    { city: "Bishoftu", country: "Ethiopia" },
    { city: "Sodo", country: "Ethiopia" },
    { city: "Arba Minch", country: "Ethiopia" },
    { city: "Hosaena", country: "Ethiopia" },
    { city: "Harar", country: "Ethiopia" },
    { city: "Dilla", country: "Ethiopia" },
    { city: "Nekemte", country: "Ethiopia" },
    { city: "Debre Birhan", country: "Ethiopia" },
    { city: "Asella", country: "Ethiopia" },
    { city: "Kombolcha", country: "Ethiopia" },

    // UGANDA - Major Cities
    { city: "Kampala", country: "Uganda" },
    { city: "Gulu", country: "Uganda" },
    { city: "Lira", country: "Uganda" },
    { city: "Mbarara", country: "Uganda" },
    { city: "Jinja", country: "Uganda" },
    { city: "Bwizibwera", country: "Uganda" },
    { city: "Mbale", country: "Uganda" },
    { city: "Mukono", country: "Uganda" },
    { city: "Kasese", country: "Uganda" },
    { city: "Masaka", country: "Uganda" },
    { city: "Entebbe", country: "Uganda" },
    { city: "Njeru", country: "Uganda" },
    { city: "Kitgum", country: "Uganda" },
    { city: "Wobulenzi", country: "Uganda" },
    { city: "Malaba", country: "Uganda" },
    { city: "Mityana", country: "Uganda" },
    { city: "Koboko", country: "Uganda" },
    { city: "Tororo", country: "Uganda" },
    { city: "Soroti", country: "Uganda" },
    { city: "Hoima", country: "Uganda" },

    // TANZANIA - Major Cities
    { city: "Dar es Salaam", country: "Tanzania" },
    { city: "Mwanza", country: "Tanzania" },
    { city: "Arusha", country: "Tanzania" },
    { city: "Dodoma", country: "Tanzania" },
    { city: "Mbeya", country: "Tanzania" },
    { city: "Morogoro", country: "Tanzania" },
    { city: "Tanga", country: "Tanzania" },
    { city: "Kahama", country: "Tanzania" },
    { city: "Tabora", country: "Tanzania" },
    { city: "Zanzibar City", country: "Tanzania" },
    { city: "Kigoma", country: "Tanzania" },
    { city: "Sumbawanga", country: "Tanzania" },
    { city: "Kasulu", country: "Tanzania" },
    { city: "Songea", country: "Tanzania" },
    { city: "Moshi", country: "Tanzania" },
    { city: "Musoma", country: "Tanzania" },
    { city: "Shinyanga", country: "Tanzania" },
    { city: "Iringa", country: "Tanzania" },
    { city: "Singida", country: "Tanzania" },
    { city: "Njombe", country: "Tanzania" },

    // RWANDA - Major Cities
    { city: "Kigali", country: "Rwanda" },
    { city: "Butare", country: "Rwanda" },
    { city: "Gitarama", country: "Rwanda" },
    { city: "Ruhengeri", country: "Rwanda" },
    { city: "Gisenyi", country: "Rwanda" },
    { city: "Byumba", country: "Rwanda" },
    { city: "Cyangugu", country: "Rwanda" },
    { city: "Kibungo", country: "Rwanda" },
    { city: "Kibuye", country: "Rwanda" },
    { city: "Gikongoro", country: "Rwanda" },
    { city: "Rwamagana", country: "Rwanda" },
    { city: "Nyanza", country: "Rwanda" },
    { city: "Muhanga", country: "Rwanda" },
    { city: "Rubavu", country: "Rwanda" },
    { city: "Huye", country: "Rwanda" },
    { city: "Musanze", country: "Rwanda" },
    { city: "Karongi", country: "Rwanda" },
    { city: "Kayonza", country: "Rwanda" },
    { city: "Rusizi", country: "Rwanda" },
    { city: "Nyagatare", country: "Rwanda" },

    // CAMEROON - Major Cities
    { city: "Douala", country: "Cameroon" },
    { city: "Yaoundé", country: "Cameroon" },
    { city: "Bamenda", country: "Cameroon" },
    { city: "Bafoussam", country: "Cameroon" },
    { city: "Garoua", country: "Cameroon" },
    { city: "Maroua", country: "Cameroon" },
    { city: "Nkongsamba", country: "Cameroon" },
    { city: "Kumba", country: "Cameroon" },
    { city: "Edéa", country: "Cameroon" },
    { city: "Loum", country: "Cameroon" },
    { city: "Kumbo", country: "Cameroon" },
    { city: "Mbalmayo", country: "Cameroon" },
    { city: "Meiganga", country: "Cameroon" },
    { city: "Foumban", country: "Cameroon" },
    { city: "Mbouda", country: "Cameroon" },
    { city: "Ngaoundéré", country: "Cameroon" },
    { city: "Bertoua", country: "Cameroon" },
    { city: "Kribi", country: "Cameroon" },
    { city: "Sangmélima", country: "Cameroon" },
    { city: "Limbe", country: "Cameroon" },

    // NIGER - Major Cities
    { city: "Niamey", country: "Niger" },
    { city: "Zinder", country: "Niger" },
    { city: "Maradi", country: "Niger" },
    { city: "Agadez", country: "Niger" },
    { city: "Tahoua", country: "Niger" },
    { city: "Dosso", country: "Niger" },
    { city: "Tillabéri", country: "Niger" },
    { city: "Diffa", country: "Niger" },
    { city: "Arlit", country: "Niger" },
    { city: "Tessaoua", country: "Niger" },
    { city: "Gaya", country: "Niger" },
    { city: "Madaoua", country: "Niger" },
    { city: "Mirria", country: "Niger" },
    { city: "Say", country: "Niger" },
    { city: "Matameye", country: "Niger" },
    { city: "Aguie", country: "Niger" },
    { city: "Dakoro", country: "Niger" },
    { city: "Magaria", country: "Niger" },
    { city: "Gouré", country: "Niger" },
    { city: "Tanout", country: "Niger" },

    // CHAD - Major Cities
    { city: "N'Djamena", country: "Chad" },
    { city: "Moundou", country: "Chad" },
    { city: "Sarh", country: "Chad" },
    { city: "Abéché", country: "Chad" },
    { city: "Kelo", country: "Chad" },
    { city: "Koumra", country: "Chad" },
    { city: "Pala", country: "Chad" },
    { city: "Am Timan", country: "Chad" },
    { city: "Bongor", country: "Chad" },
    { city: "Mongo", country: "Chad" },
    { city: "Doba", country: "Chad" },
    { city: "Ati", country: "Chad" },
    { city: "Laï", country: "Chad" },
    { city: "Faya-Largeau", country: "Chad" },
    { city: "Massaguet", country: "Chad" },
    { city: "Goz Beïda", country: "Chad" },
    { city: "Mao", country: "Chad" },
    { city: "Moïssala", country: "Chad" },
    { city: "Massakory", country: "Chad" },
    { city: "Bousso", country: "Chad" },

    // SENEGAL - Major Cities
    { city: "Dakar", country: "Senegal" },
    { city: "Touba", country: "Senegal" },
    { city: "Thiès", country: "Senegal" },
    { city: "Kaolack", country: "Senegal" },
    { city: "Saint-Louis", country: "Senegal" },
    { city: "Mbour", country: "Senegal" },
    { city: "Ziguinchor", country: "Senegal" },
    { city: "Rufisque", country: "Senegal" },
    { city: "Diourbel", country: "Senegal" },
    { city: "Tambacounda", country: "Senegal" },
    { city: "Fatick", country: "Senegal" },
    { city: "Kolda", country: "Senegal" },
    { city: "Louga", country: "Senegal" },
    { city: "Matam", country: "Senegal" },
    { city: "Sédhiou", country: "Senegal" },
    { city: "Kédougou", country: "Senegal" },
    { city: "Richard-Toll", country: "Senegal" },
    { city: "Mbacké", country: "Senegal" },
    { city: "Tivaouane", country: "Senegal" },
    { city: "Pikine", country: "Senegal" },

    // MALI - Major Cities
    { city: "Bamako", country: "Mali" },
    { city: "Sikasso", country: "Mali" },
    { city: "Mopti", country: "Mali" },
    { city: "Koutiala", country: "Mali" },
    { city: "Ségou", country: "Mali" },
    { city: "Kayes", country: "Mali" },
    { city: "Gao", country: "Mali" },
    { city: "Kati", country: "Mali" },
    { city: "Tombouctou", country: "Mali" },
    { city: "San", country: "Mali" },
    { city: "Marka", country: "Mali" },
    { city: "Bafoulabé", country: "Mali" },
    { city: "Bougouni", country: "Mali" },
    { city: "Kidal", country: "Mali" },
    { city: "Banamba", country: "Mali" },
    { city: "Niono", country: "Mali" },
    { city: "Djenné", country: "Mali" },
    { city: "Yorosso", country: "Mali" },
    { city: "Kolokani", country: "Mali" },
    { city: "Douentza", country: "Mali" },

    // BURKINA FASO - Major Cities
    { city: "Ouagadougou", country: "Burkina Faso" },
    { city: "Bobo-Dioulasso", country: "Burkina Faso" },
    { city: "Koudougou", country: "Burkina Faso" },
    { city: "Ouahigouya", country: "Burkina Faso" },
    { city: "Banfora", country: "Burkina Faso" },
    { city: "Kaya", country: "Burkina Faso" },
    { city: "Tenkodogo", country: "Burkina Faso" },
    { city: "Orodara", country: "Burkina Faso" },
    { city: "Fada N'gourma", country: "Burkina Faso" },
    { city: "Ziniaré", country: "Burkina Faso" },
    { city: "Kombissiri", country: "Burkina Faso" },
    { city: "Manga", country: "Burkina Faso" },
    { city: "Réo", country: "Burkina Faso" },
    { city: "Gourcy", country: "Burkina Faso" },
    { city: "Dédougou", country: "Burkina Faso" },
    { city: "Diébougou", country: "Burkina Faso" },
    { city: "Dori", country: "Burkina Faso" },
    { city: "Kongoussi", country: "Burkina Faso" },
    { city: "Garango", country: "Burkina Faso" },
    { city: "Bogandé", country: "Burkina Faso" },

    // IVORY COAST - Major Cities
    { city: "Abidjan", country: "Ivory Coast" },
    { city: "Bouaké", country: "Ivory Coast" },
    { city: "Daloa", country: "Ivory Coast" },
    { city: "Yamoussoukro", country: "Ivory Coast" },
    { city: "San-Pédro", country: "Ivory Coast" },
    { city: "Divo", country: "Ivory Coast" },
    { city: "Korhogo", country: "Ivory Coast" },
    { city: "Anyama", country: "Ivory Coast" },
    { city: "Abengourou", country: "Ivory Coast" },
    { city: "Man", country: "Ivory Coast" },
    { city: "Gagnoa", country: "Ivory Coast" },
    { city: "Soubré", country: "Ivory Coast" },
    { city: "Agboville", country: "Ivory Coast" },
    { city: "Dabou", country: "Ivory Coast" },
    { city: "Grand-Bassam", country: "Ivory Coast" },
    { city: "Bingerville", country: "Ivory Coast" },
    { city: "Odienné", country: "Ivory Coast" },
    { city: "Katiola", country: "Ivory Coast" },
    { city: "Bondoukou", country: "Ivory Coast" },
    { city: "Duékoué", country: "Ivory Coast" },

    // TOGO - Major Cities
    { city: "Lomé", country: "Togo" },
    { city: "Sokodé", country: "Togo" },
    { city: "Kara", country: "Togo" },
    { city: "Palimé", country: "Togo" },
    { city: "Atakpamé", country: "Togo" },
    { city: "Bassar", country: "Togo" },
    { city: "Tsévié", country: "Togo" },
    { city: "Aného", country: "Togo" },
    { city: "Mango", country: "Togo" },
    { city: "Dapaong", country: "Togo" },
    { city: "Tchamba", country: "Togo" },
    { city: "Vogan", country: "Togo" },
    { city: "Badou", country: "Togo" },
    { city: "Kandé", country: "Togo" },
    { city: "Niamtougou", country: "Togo" },
    { city: "Bafilo", country: "Togo" },
    { city: "Notse", country: "Togo" },
    { city: "Tabligbo", country: "Togo" },
    { city: "Amlamé", country: "Togo" },
    { city: "Sotouboua", country: "Togo" },

    // BENIN - Major Cities
    { city: "Cotonou", country: "Benin" },
    { city: "Porto-Novo", country: "Benin" },
    { city: "Parakou", country: "Benin" },
    { city: "Djougou", country: "Benin" },
    { city: "Bohicon", country: "Benin" },
    { city: "Kandi", country: "Benin" },
    { city: "Lokossa", country: "Benin" },
    { city: "Ouidah", country: "Benin" },
    { city: "Abomey", country: "Benin" },
    { city: "Natitingou", country: "Benin" },
    { city: "Savalou", country: "Benin" },
    { city: "Pobé", country: "Benin" },
    { city: "Kétou", country: "Benin" },
    { city: "Malanville", country: "Benin" },
    { city: "Ségbana", country: "Benin" },
    { city: "Tchaourou", country: "Benin" },
    { city: "Allada", country: "Benin" },
    { city: "Dogbo", country: "Benin" },
    { city: "Banikoara", country: "Benin" },
    { city: "Glazoué", country: "Benin" },

    // LIBERIA - Major Cities
    { city: "Monrovia", country: "Liberia" },
    { city: "Gbarnga", country: "Liberia" },
    { city: "Kakata", country: "Liberia" },
    { city: "Bensonville", country: "Liberia" },
    { city: "Harper", country: "Liberia" },
    { city: "Voinjama", country: "Liberia" },
    { city: "Buchanan", country: "Liberia" },
    { city: "Zwedru", country: "Liberia" },
    { city: "New Kru Town", country: "Liberia" },
    { city: "Pleebo", country: "Liberia" },
    { city: "Greenville", country: "Liberia" },
    { city: "Tubmanburg", country: "Liberia" },
    { city: "Ganta", country: "Liberia" },
    { city: "Robertsport", country: "Liberia" },
    { city: "Sanniquellie", country: "Liberia" },
    { city: "Barclayville", country: "Liberia" },
    { city: "Edina", country: "Liberia" },
    { city: "Tappita", country: "Liberia" },
    { city: "Saclepea", country: "Liberia" },
    { city: "Zorzor", country: "Liberia" },

    // SIERRA LEONE - Major Cities
    { city: "Freetown", country: "Sierra Leone" },
    { city: "Bo", country: "Sierra Leone" },
    { city: "Kenema", country: "Sierra Leone" },
    { city: "Koidu", country: "Sierra Leone" },
    { city: "Makeni", country: "Sierra Leone" },
    { city: "Waterloo", country: "Sierra Leone" },
    { city: "Port Loko", country: "Sierra Leone" },
    { city: "Moyamba", country: "Sierra Leone" },
    { city: "Bonthe", country: "Sierra Leone" },
    { city: "Magburaka", country: "Sierra Leone" },
    { city: "Lungi", country: "Sierra Leone" },
    { city: "Kabala", country: "Sierra Leone" },
    { city: "Kailahun", country: "Sierra Leone" },
    { city: "Segbwema", country: "Sierra Leone" },
    { city: "Yengema", country: "Sierra Leone" },
    { city: "Mile 91", country: "Sierra Leone" },
    { city: "Panguma", country: "Sierra Leone" },
    { city: "Koindu", country: "Sierra Leone" },
    { city: "Kambia", country: "Sierra Leone" },
    { city: "Pujehun", country: "Sierra Leone" },

    // GUINEA - Major Cities
    { city: "Conakry", country: "Guinea" },
    { city: "Nzérékoré", country: "Guinea" },
    { city: "Kankan", country: "Guinea" },
    { city: "Kindia", country: "Guinea" },
    { city: "Labe", country: "Guinea" },
    { city: "Mamou", country: "Guinea" },
    { city: "Boke", country: "Guinea" },
    { city: "Guéckédou", country: "Guinea" },
    { city: "Kissidougou", country: "Guinea" },
    { city: "Dabola", country: "Guinea" },
    { city: "Faranah", country: "Guinea" },
    { city: "Siguiri", country: "Guinea" },
    { city: "Kouroussa", country: "Guinea" },
    { city: "Beyla", country: "Guinea" },
    { city: "Macenta", country: "Guinea" },
    { city: "Telimele", country: "Guinea" },
    { city: "Pita", country: "Guinea" },
    { city: "Gaoual", country: "Guinea" },
    { city: "Forecariah", country: "Guinea" },
    { city: "Yomou", country: "Guinea" },

    // GUINEA-BISSAU - Major Cities
    { city: "Bissau", country: "Guinea-Bissau" },
    { city: "Bafata", country: "Guinea-Bissau" },
    { city: "Gabu", country: "Guinea-Bissau" },
    { city: "Bissora", country: "Guinea-Bissau" },
    { city: "Bolama", country: "Guinea-Bissau" },
    { city: "Cacheu", country: "Guinea-Bissau" },
    { city: "Bubaque", country: "Guinea-Bissau" },
    { city: "Catió", country: "Guinea-Bissau" },
    { city: "Mansôa", country: "Guinea-Bissau" },
    { city: "Buba", country: "Guinea-Bissau" },
    { city: "Quinhamel", country: "Guinea-Bissau" },
    { city: "Fulacunda", country: "Guinea-Bissau" },
    { city: "Canchungo", country: "Guinea-Bissau" },
    { city: "São Domingos", country: "Guinea-Bissau" },
    { city: "Bambadinca", country: "Guinea-Bissau" },
    { city: "Nova Lamego", country: "Guinea-Bissau" },
    { city: "Pitche", country: "Guinea-Bissau" },
    { city: "Quebo", country: "Guinea-Bissau" },
    { city: "Pirada", country: "Guinea-Bissau" },
    { city: "Empada", country: "Guinea-Bissau" }
];
// ========================================
// 3. LOCATION SEARCH FUNCTIONS
// ========================================

// Main search function
function searchLocations(query) {
    if (!query || query.length < 1) {
        return [];
    }

    const normalizedQuery = query.toLowerCase().trim();
    
    return locations.filter(location => {
        const cityMatch = location.city.toLowerCase().includes(normalizedQuery);
        const countryMatch = location.country.toLowerCase().includes(normalizedQuery);
        const stateMatch = location.state ? location.state.toLowerCase().includes(normalizedQuery) : false;
        
        return cityMatch || countryMatch || stateMatch;
    }).sort((a, b) => {
        const aStarts = a.city.toLowerCase().startsWith(normalizedQuery);
        const bStarts = b.city.toLowerCase().startsWith(normalizedQuery);
        
        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;
        
        return a.city.localeCompare(b.city);
    });
}

// Format location for display
function formatLocation(location) {
    return location.state 
        ? `${location.city}, ${location.state}, ${location.country}`
        : `${location.city}, ${location.country}`;
}

// ========================================
// 4. AUTOCOMPLETE FUNCTIONALITY
// ========================================

function initWeatherLocationSearch(options = {}) {
    const config = {
        minChars: 1,
        maxResults: 8,
        onSelect: null,
        onSearch: null,
        ...options
    };

    // Find your existing elements
    const searchInput = document.querySelector('.search-bar');
    const searchButton = document.querySelector('.my-btn');
    
    if (!searchInput) {
        console.error('Search input with class "search-bar" not found');
        return;
    }

    // Create wrapper for positioning
    let searchWrapper = searchInput.parentElement;
    if (!searchWrapper.classList.contains('search-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'search-wrapper';
        searchInput.parentNode.insertBefore(wrapper, searchInput);
        wrapper.appendChild(searchInput);
        if (searchButton) {
            wrapper.appendChild(searchButton);
        }
        searchWrapper = wrapper;
    }

    // Create suggestions container
    let suggestionsContainer = document.getElementById('location-suggestions');
    if (!suggestionsContainer) {
        suggestionsContainer = document.createElement('div');
        suggestionsContainer.id = 'location-suggestions';
        suggestionsContainer.className = 'suggestions-container card';
        searchWrapper.appendChild(suggestionsContainer);
    }

    let selectedIndex = -1;
    let currentResults = [];

    // Setup styles
    setupAutocompleteStyles();

    // Create suggestion HTML element
    function createSuggestionElement(location) {
        const suggestionItem = document.createElement('div');
        suggestionItem.className = 'suggestion-item';
        suggestionItem.setAttribute('data-location', JSON.stringify(location));
        
        const cityName = document.createElement('div');
        cityName.className = 'city-name';
        cityName.textContent = location.city;
        
        const countryName = document.createElement('div');
        countryName.className = 'country-name';
        countryName.textContent = location.state ? `${location.state}, ${location.country}` : location.country;
        
        suggestionItem.appendChild(cityName);
        suggestionItem.appendChild(countryName);
        
        return suggestionItem;
    }

    // Display suggestions
    function displaySuggestions(results) {
        currentResults = results;
        suggestionsContainer.innerHTML = '';
        
        if (results.length === 0) {
            const noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.textContent = 'No locations found';
            suggestionsContainer.appendChild(noResults);
            suggestionsContainer.style.display = 'block';
            return;
        }

        const limitedResults = results.slice(0, config.maxResults);
        
        limitedResults.forEach(location => {
            const suggestionElement = createSuggestionElement(location);
            
            suggestionElement.addEventListener('click', () => {
                const locationData = JSON.parse(suggestionElement.dataset.location);
                selectLocation(locationData);
            });
            
            suggestionsContainer.appendChild(suggestionElement);
        });

        suggestionsContainer.style.display = 'block';
        selectedIndex = -1;
    }

    // Select a location
    function selectLocation(location) {
        const formattedLocation = formatLocation(location);
        searchInput.value = formattedLocation;
        suggestionsContainer.style.display = 'none';
        
        if (config.onSelect) {
            config.onSelect(location, formattedLocation);
        }
    }

    // Handle input changes
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        
        if (query.length < config.minChars) {
            suggestionsContainer.style.display = 'none';
            return;
        }
        
        const results = searchLocations(query);
        displaySuggestions(results);
    });

    // Handle keyboard navigation
    searchInput.addEventListener('keydown', (e) => {
        const items = suggestionsContainer.querySelectorAll('.suggestion-item');
        
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                selectedIndex = (selectedIndex + 1) % items.length;
                updateSelection(items, selectedIndex);
                break;
                
            case 'ArrowUp':
                e.preventDefault();
                selectedIndex = selectedIndex <= 0 ? items.length - 1 : selectedIndex - 1;
                updateSelection(items, selectedIndex);
                break;
                
            case 'Enter':
                if (selectedIndex >= 0 && items[selectedIndex]) {
                    e.preventDefault();
                    const locationData = JSON.parse(items[selectedIndex].dataset.location);
                    selectLocation(locationData);
                } else if (config.onSearch) {
                    config.onSearch(searchInput.value);
                }
                break;
                
            case 'Escape':
                suggestionsContainer.style.display = 'none';
                selectedIndex = -1;
                break;
        }
    });

    // Handle search button click
    if (searchButton) {
        searchButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (config.onSearch) {
                config.onSearch(searchInput.value);
            }
            suggestionsContainer.style.display = 'none';
        });
    }

    // Update visual selection
    function updateSelection(items, index) {
        items.forEach((item, i) => {
            item.classList.toggle('selected', i === index);
        });
    }

    // Hide suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchWrapper.contains(e.target)) {
            suggestionsContainer.style.display = 'none';
        }
    });

    return {
        hide: () => suggestionsContainer.style.display = 'none',
        show: () => suggestionsContainer.style.display = 'block',
        search: (query) => searchLocations(query),
        setLocations: (newLocations) => locations.splice(0, locations.length, ...newLocations)
    };
}

// ========================================
// 5. STYLING SETUP
// ========================================

function setupAutocompleteStyles() {
    if (!document.getElementById('autocomplete-styles')) {
        const styles = document.createElement('style');
        styles.id = 'autocomplete-styles';
        styles.textContent = `
            .search-wrapper {
                position: relative;
                display: flex;
                flex-direction: row;
                
                align-items: center;
                gap: 8px;
                width: 100%;
            }

            .serch-box{
            width: 100%;
            display: flex;
            flex-direction: row;
            }

            .suggestions-container {
                position: absolute;
                background: white;
                top: 100%;
                left: 0;
                right: 0;
                border-radius: 12px;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
                max-height: 320px;
                width: 100%;
                overflow-y: auto;
                z-index: 1000;
                display: none;
                margin-top: 8px;
            }

            .suggestion-item {
                padding: 14px 18px;
                cursor: pointer;
                backdrop-filter: blur(16px);
                background-color: transparent;
                border-bottom: 1px solid #f1f3f4;
                transition: all 0.2s ease;
                display: flex;
                flex-direction: column;
                gap: 2px;
            }

            .suggestion-item:last-child {
                border-bottom: none;
            }

            .suggestion-item:hover,
            .suggestion-item.selected {
                background: rgba(255,255,255,0.15);
                transform: translateX(2px);
            }

            .city-name {
                font-weight: 600;
                font-size: 15px;
                color: black;
                line-height: 1.3;
            }

            .country-name {
                font-size: 13px;
                color: #6b7280;
                font-weight: 400;
                line-height: 1.2;
            }

            .no-results {
                padding: 20px;
                text-align: center;
                color: #9ca3af;
                font-style: italic;
                font-size: 14px;
            }

            .suggestions-container::-webkit-scrollbar {
                width: 3px;
            }

            .suggestions-container::-webkit-scrollbar-track {
                background: #f1f1f1;
                border-radius: 3px;
            }

            .suggestions-container::-webkit-scrollbar-thumb {
                background: #c1c1c1;
                border-radius: 3px;
            }
        `;
        document.head.appendChild(styles);
    }
}

// ========================================
// 6. WEATHER API FUNCTIONS
// ========================================

async function fetchWeatherData(location) {
    try {
        console.log(`Fetching weather for ${location.city}, ${location.country}`);
        
        // Example API call - replace with your actual weather API endpoint
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location.city}&appid=${APIKEY}&units=metric`);
        
        if (!response.ok) {
            throw new Error(`Weather API error: ${response.status}`);
        }
        
        const data = await response.json();
        displayWeatherData(data);
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        showWeatherError('Failed to fetch weather data. Please try again.');
    }
}

function displayWeatherData(weatherData) {
    // Update your weather display elements here
    console.log('Weather data received:', weatherData);
    
    // Example: Update temperature display
    const tempElement = document.querySelector('.temperature');
    if (tempElement && weatherData.main) {
        tempElement.textContent = Math.round(weatherData.main.temp) + '°C';
    }
    
    // Add more weather data updates as needed...
}

function showWeatherError(message) {
    console.error(message);
    // Display error message to user
    const errorElement = document.querySelector('.weather-error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

// ========================================
// 7. UI ANIMATIONS & INTERACTIONS
// ========================================

function initUIAnimations() {
    // Animate progress bars on load
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.transition = 'width 1s ease-out';
        }, index * 200);
    });

    // Setup hourly forecast scrolling
    initHourlyScroll();
    
    // Setup wind direction animation
    initWindAnimation();
}

function initHourlyScroll() {
    const hourlyScroll = document.querySelector('.hourly-scroll');
    if (!hourlyScroll) return;

    let isScrolling = false;
    let startX;
    let scrollLeft;

    hourlyScroll.addEventListener('mousedown', (e) => {
        isScrolling = true;
        startX = e.pageX - hourlyScroll.offsetLeft;
        scrollLeft = hourlyScroll.scrollLeft;
        hourlyScroll.style.cursor = 'grabbing';
    });

    hourlyScroll.addEventListener('mouseleave', () => {
        isScrolling = false;
        hourlyScroll.style.cursor = 'grab';
    });

    hourlyScroll.addEventListener('mouseup', () => {
        isScrolling = false;
        hourlyScroll.style.cursor = 'grab';
    });

    hourlyScroll.addEventListener('mousemove', (e) => {
        if (!isScrolling) return;
        e.preventDefault();
        const x = e.pageX - hourlyScroll.offsetLeft;
        const walk = (x - startX) * 2;
        hourlyScroll.scrollLeft = scrollLeft - walk;
    });
}

function initWindAnimation() {
    // Update wind direction animation
    setInterval(() => {
        const needle = document.querySelector('.wind-needle');
        if (!needle) return;
        
        const directions = [120, 135, 150, 135, 120, 105];
        const randomDirection = directions[Math.floor(Math.random() * directions.length)];
        needle.style.transform = `translate(-50%, -100%) rotate(${randomDirection}deg)`;
    }, 5000);
}

// ========================================
// 8. INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Weather App initializing...');
    
    // Initialize UI animations
    initUIAnimations();
    
    // Initialize location autocomplete
    const autocomplete = initWeatherLocationSearch({
        onSelect: function(location, formattedText) {
            console.log('Location selected:', location);
            fetchWeatherData(location);
        },
        
        onSearch: function(searchTerm) {
            console.log('Manual search for:', searchTerm);
            // Handle manual search - try to find matching location or search directly
            const results = searchLocations(searchTerm);
            if (results.length > 0) {
                fetchWeatherData(results[0]);
            } else {
                // Try direct search with the term
                console.log('No location match found, searching directly...');
            }
        },
        
        maxResults: 6
    });
    
    console.log('Weather App initialized successfully!');
});

// ========================================
// 9. UTILITY FUNCTIONS
// ========================================

// Get location suggestions programmatically
function getLocationSuggestions(query, maxResults = 10) {
    const results = searchLocations(query);
    return results.slice(0, maxResults).map(location => ({
        ...location,
        formatted: formatLocation(location)
    }));
}



// Export functions for external use if needed
window.WeatherApp = {
    searchLocations,
    getLocationSuggestions,
    fetchWeatherData,
    APIKEY
};