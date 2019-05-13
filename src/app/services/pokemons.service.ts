import { Injectable } from '@angular/core';

export interface PokeRules {
  image: string;
  id: number;
  name: string;
  types: any[];
  height: number;
  weight: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor() {}
  pokemons: PokeRules[] = [
// tslint:disable: max-line-length
    {image: '001.png', id: 1, name: 'bulbasaur', types: ['grass', 'poison'], height: 7, weight: 69, description: 'For some time after its birth, it grows by gaining nourishment from the seed on its back.' },
    {image: '002.png', id: 2, name: 'ivysaur', types: ['grass', 'poison'], height: 10, weight: 130, description: 'When the bud on its back starts swelling, a sweet aroma wafts to indicate the flowers coming bloom.' },
    {image: '003.png', id: 3, name: 'venusaur', types: ['grass', 'poison'], height: 20, weight: 1000, description: 'After a rainy day, the flower on its back smells stronger. The scent attracts other Pokémon.' },
    {image: '004.png', id: 4, name: 'charmander', types: ['fire'], height: 6, weight: 85, description: 'The fire on the tip of its tail is a measure of its life. If healthy, its tail burns intensely.' },
    {image: '005.png', id: 5, name: 'charmeleon', types: ['fire'], height: 11, weight: 190, description: 'In the rocky mountains where Charmeleon live, their fiery tails shine at night like stars.' },
    {image: '006.png', id: 6, name: 'charizard', types: ['fire', 'flying'], height: 16, weight: 905, description: 'It is said that Charizards fire burns hotter if it has experienced harsh battles.' },
    {image: '007.png', id: 7, name: 'squirtle', types: ['water'], height: 5, weight: 90, description: 'It shelters itself in its shell then strikes back with spouts of water at every opportunity.' },
    {image: '008.png', id: 8, name: 'wartortle', types: ['water'], height: 10, weight: 225, description: 'It is said to live 10,000 years. Its furry tail is popular as a symbol of longevity.' },
    {image: '009.png', id: 9, name: 'blastoise', types: ['water'], height: 16, weight: 855, description: 'The jets of water it spouts from the rocket cannons on its shell can punch through thick steel.' },
    {image: '010.png', id: 10, name: 'caterpie', types: ['bug'], height: 3, weight: 29, description: 'It releases a stench from its red antenna to repel enemies. It grows by molting repeatedly.' },
    {image: '011.png', id: 11, name: 'metapod', types: ['bug'], height: 7, weight: 99, description: 'A steel-hard shell protects its tender body. It quietly endures hardships while awaiting evolution.' },
    {image: '012.png', id: 12, name: 'butterfree', types: ['bug', 'flying'], height: 11, weight: 320, description: 'It loves the honey of flowers and can locate flower patches that have even tiny amounts of pollen.' },
    {image: '013.png', id: 13, name: 'weedle', types: ['poison', 'bug'], height: 3, weight: 32, description: 'It eats its weight in leaves every day. It fends off attackers with the needle on its head.' },
    {image: '014.png', id: 14, name: 'kakuna', types: ['poison', 'bug'], height: 6, weight: 100, description: 'While awaiting evolution, it hides from predators under leaves and in nooks of branches.' },
    {image: '015.png', id: 15, name: 'beedrill', types: ['poison', 'bug'], height: 10, weight: 295, description: 'Its best attack involves flying around at high speed, striking with poison needles, then flying off.' },
    {image: '016.png', id: 16, name: 'pidgey', types: ['flying', 'normal'], height: 3, weight: 18, description: 'It is docile and prefers to avoid conflict. If disturbed, however, it can ferociously strike back.' },
    {image: '017.png', id: 17, name: 'pidgeotto', types: ['flying', 'normal'], height: 11, weight: 300, description: 'It flies over its wide territory in search of prey, downing it with its highly developed claws.' },
    {image: '018.png', id: 18, name: 'pidgeot', types: ['flying', 'normal'], height: 15, weight: 395, description: 'It flies over its wide territory in search of prey, downing it with its highly developed claws.' },
    {image: '019.png', id: 19, name: 'rattata', types: ['normal'], height: 3, weight: 35, description: 'It searches for food all day. It gnaws on hard objects to wear down its fangs, which grow constantly during its lifetime.' },
    {image: '020.png', id: 20, name: 'raticate', types: ['normal'], height: 7, weight: 185, description: 'With its long fangs, this surprisingly violent Pokémon can gnaw away even thick concrete with ease.' },
    {image: '021.png', id: 21, name: 'spearow', types: ['flying', 'normal'], height: 3, weight: 20, description: 'It flaps its small wings busily to fly. Using its beak, it searches in grass for prey.' },
    {image: '022.png', id: 22, name: 'fearow', types: ['flying', 'normal'], height: 12, weight: 380, description: 'It has the stamina to fly all day on its broad wings. It fights by using its sharp beak.' },
    {image: '023.png', id: 23, name: 'ekans', types: ['poison'], height: 20, weight: 69, description: 'It sneaks through grass without making a sound and strikes unsuspecting prey from behind.' },
    {image: '024.png', id: 24, name: 'arbok', types: ['poison'], height: 35, weight: 650, description: 'The pattern on its belly is for intimidation. It constricts foes while they are frozen in fear.' },
    {image: '025.png', id: 25, name: 'pikachu', types: ['electric'], height: 4, weight: 60, description: 'It occasionally uses an electric shock to recharge a fellow Pikachu that is in a weakened state.' },
    {image: '026.png', id: 26, name: 'raichu', types: ['electric'], height: 8, weight: 300, description: 'Its tail discharges electricity into the ground, protecting it from getting shocked.' },
    {image: '027.png', id: 27, name: 'sandshrew', types: ['ground'], height: 6, weight: 120, description: 'It digs deep burrows to live in. When in danger, it rolls up its body to withstand attacks.' },
    {image: '028.png', id: 28, name: 'sandslash', types: ['ground'], height: 10, weight: 295, description: 'The spikes on its body are made up of its hardened hide. It rolls up and attacks foes with its spikes.' },
    {image: '029.png', id: 29, name: 'nidoran', types: ['poison'], height: 4, weight: 70, description: 'While it does not prefer to fight, even one drop of the poison it secretes from barbs can be fatal.' },
    {image: '030.png', id: 30, name: 'nidorina', types: ['poison'], height: 8, weight: 200, description: 'When it senses danger, it raises all the barbs on its body. These barbs grow slower than Nidorinos.' },
    {image: '031.png', id: 31, name: 'nidoqueen', types: ['poison', 'ground'], height: 13, weight: 600, description: 'Its entire body is armored with hard scales. It will protect the young in its burrow with its life.' },
    {image: '032.png', id: 32, name: 'nidoran', types: ['poison'], height: 5, weight: 90, description: 'It scans its surroundings by raising its ears out of the grass. Its toxic horn is for protection.' },
    {image: '033.png', id: 33, name: 'nidorino', types: ['poison'], height: 9, weight: 195, description: 'It has a violent disposition and stabs foes with its horn, which oozes poison upon impact.' },
    {image: '034.png', id: 34, name: 'nidoking', types: ['poison', 'ground'], height: 14, weight: 620, description: 'One swing of its mighty tail can snap a telephone pole as if it were a matchstick.' },
    {image: '035.png', id: 35, name: 'clefairy', types: ['fairy'], height: 6, weight: 75, description: 'On nights with a full moon, Clefairy gather from all over and dance. Bathing in moonlight makes them float.' },
    {image: '036.png', id: 36, name: 'clefable', types: ['fairy'], height: 13, weight: 400, description: 'Their ears are sensitive enough to hear a pin drop from over a mile away, so theyre usually found in quiet places.' },
    {image: '037.png', id: 37, name: 'vulpix', types: ['fire'], height: 6, weight: 99, description: 'As each tail grows, its fur becomes more lustrous. When held, it feels slightly warm.' },
    {image: '038.png', id: 38, name: 'ninetales', types: ['fire'], height: 11, weight: 199, description: 'Each of its nine tails is imbued with supernatural power, and it can live for a thousand years.' },
    {image: '039.png', id: 39, name: 'jigglypuff', types: ['fairy', 'normal'], height: 5, weight: 55, description: 'Looking into its cute, round eyes makes it start singing a song so pleasant listeners cant help but fall asleep.' },
    {image: '040.png', id: 40, name: 'wigglytuff', types: ['fairy', 'normal'], height: 10, weight: 120, description: 'Its fine fur feels so pleasant, those who accidentally touch it cannot take their hands away.' },
    {image: '041.png', id: 41, name: 'zubat', types: ['flying', 'poison'], height: 8, weight: 75, description: 'It does not need eyes, because it emits ultrasonic waves to check its surroundings while it flies.' },
    {image: '042.png', id: 42, name: 'golbat', types: ['flying', 'poison'], height: 16, weight: 550, description: 'Flitting around in the dead of night, it sinks its fangs into its prey and drains a nearly fatal amount of blood.' },
    {image: '043.png', id: 43, name: 'oddish', types: ['poison', 'grass'], height: 5, weight: 54, description: 'It often plants its root feet in the ground during the day and sows seeds as it walks about at night.' },
    {image: '044.png', id: 44, name: 'gloom', types: ['poison', 'grass'], height: 8, weight: 86, description: 'The honey it drools from its mouth smells so atrocious, it can curl noses more than a mile away.' },
    {image: '045.png', id: 45, name: 'vileplume', types: ['poison', 'grass'], height: 12, weight: 186, description: 'Its petals are the largest in the world. As it walks, it scatters extremely allergenic pollen.' },
    {image: '046.png', id: 46, name: 'paras', types: ['grass', 'bug'], height: 3, weight: 54, description: 'Mushrooms named tochukaso grow on its back. They grow along with the host Paras.' },
    {image: '047.png', id: 47, name: 'parasect', types: ['grass', 'bug'], height: 10, weight: 295, description: 'A mushroom grown larger than the hosts body controls Parasect. It scatters poisonous spores.' },
    {image: '048.png', id: 48, name: 'venonat', types: ['poison', 'bug'], height: 10, weight: 300, description: 'Its big eyes are actually clusters of tiny eyes. At night, its kind is drawn by light.' },
    {image: '049.png', id: 49, name: 'venomoth', types: ['poison', 'bug'], height: 15, weight: 125, description: 'It flutters its wings to scatter dustlike scales. The scales leach toxins if they contact skin.' },
    {image: '050.png', id: 50, name: 'diglett', types: ['ground'], height: 2, weight: 8, description: 'A Pokémon that lives underground. Because of its dark habitat, it is repelled by bright sunlight.' },
    {image: '051.png', id: 51, name: 'dugtrio', types: ['ground'], height: 7, weight: 333, description: 'Its three heads move alternately, driving it through tough soil to depths of over 60 miles.' },
    {image: '052.png', id: 52, name: 'meowth', types: ['normal'], height: 4, weight: 42, description: 'It is nocturnal in nature. If it spots something shiny, its eyes glitter brightly.' },
    {image: '053.png', id: 53, name: 'persian', types: ['normal'], height: 10, weight: 320, description: 'A very haughty Pokémon. Among fans, the size of the jewel in its forehead is a topic of much talk.' },
    {image: '054.png', id: 54, name: 'psyduck', types: ['water'], height: 8, weight: 196, description: 'When headaches stimulate its brain cells, which are usually inactive, it can use a mysterious power.' },
    {image: '055.png', id: 55, name: 'golduck', types: ['water'], height: 17, weight: 766, description: 'When its forehead shines mysteriously, Golduck can use the full extent of its power.' },
    {image: '056.png', id: 56, name: 'mankey', types: ['fighting'], height: 5, weight: 280, description: 'It lives in treetop colonies. If one becomes enraged, the whole colony rampages for no reason.' },
    {image: '057.png', id: 57, name: 'primeape', types: ['fighting'], height: 10, weight: 320, description: 'It grows angry if you see its eyes and gets angrier if you run. If you beat it, it gets even madder.' },
    {image: '058.png', id: 58, name: 'growlithe', types: ['fire'], height: 7, weight: 190, description: 'Extremely loyal to its Trainer, it will bark at those who approach the Trainer unexpectedly and run them out of town.' },
    {image: '059.png', id: 59, name: 'arcanine', types: ['fire'], height: 19, weight: 1550, description: 'The sight of it running over 6,200 miles in a single day and night has captivated many people.' },
    {image: '060.png', id: 60, name: 'poliwag', types: ['water'], height: 6, weight: 124, description: 'Its skin is so thin, its internal organs are visible. It has trouble walking on its newly grown feet.' },
    {image: '061.png', id: 61, name: 'poliwhirl', types: ['water'], height: 10, weight: 200, description: 'The spiral pattern on its belly subtly undulates. Staring at it gradually causes drowsiness.' },
    {image: '062.png', id: 62, name: 'poliwrath', types: ['fighting', 'water'], height: 13, weight: 540, description: 'With its extremely tough muscles, it can keep swimming in the Pacific Ocean without resting.' },
    {image: '063.png', id: 63, name: 'abra', types: ['psychic'], height: 9, weight: 195, description: 'Using its psychic power is such a strain on its brain that it needs to sleep for 18 hours a day.' },
    {image: '064.png', id: 64, name: 'kadabra', types: ['psychic'], height: 13, weight: 565, description: 'It stares at its silver spoon to focus its mind. It emits more alpha waves while doing so.' },
    {image: '065.png', id: 65, name: 'alakazam', types: ['psychic'], height: 15, weight: 480, description: 'The spoons clutched in its hands are said to have been created by its psychic powers.' },
    {image: '066.png', id: 66, name: 'machop', types: ['fighting'], height: 8, weight: 195, description: 'Though small in stature, it is powerful enough to easily heft and throw a number of Geodude at once.' },
    {image: '067.png', id: 67, name: 'machoke', types: ['fighting'], height: 15, weight: 705, description: 'It happily carries heavy cargo to toughen up. It willingly does hard work for people.' },
    {image: '068.png', id: 68, name: 'machamp', types: ['fighting'], height: 16, weight: 1300, description: 'Its four muscled arms slam foes with powerful punches and chops at blinding speed.' },
    {image: '069.png', id: 69, name: 'bellsprout', types: ['poison', 'grass'], height: 7, weight: 40, description: 'It prefers hot and humid environments. It is quick at capturing prey with its vines.' },
    {image: '070.png', id: 70, name: 'weepinbell', types: ['poison', 'grass'], height: 10, weight: 64, description: 'A Pokémon that appears to be a plant. It captures unwary prey by dousing them with a toxic powder.' },
    {image: '071.png', id: 71, name: 'victreebel', types: ['poison', 'grass'], height: 17, weight: 155, description: 'It pools in its mouth a fluid with a honey-like scent, which is really an acid that dissolves anything.' },
    {image: '072.png', id: 72, name: 'tentacool', types: ['poison', 'water'], height: 9, weight: 455, description: 'Because its body is almost entirely composed of water, it shrivels up if it is washed ashore.' },
    {image: '073.png', id: 73, name: 'tentacruel', types: ['poison', 'water'], height: 16, weight: 550, description: 'It extends its 80 tentacles to form an encircling poisonous net that is difficult to escape.' },
    {image: '074.png', id: 74, name: 'geodude', types: ['ground', 'rock'], height: 4, weight: 200, description: 'At rest, it looks just like a rock. Carelessly stepping on it will make it swing its fists angrily.' },
    {image: '075.png', id: 75, name: 'graveler', types: ['ground', 'rock'], height: 10, weight: 1050, description: 'It rolls on mountain paths to move. Once it builds momentum, no Pokémon can stop it without difficulty.' },
    {image: '076.png', id: 76, name: 'golem', types: ['ground', 'rock'], height: 14, weight: 3000, description: 'Even dynamite cant harm its hard, boulder-like body. It sheds its hide just once a year.' },
    {image: '077.png', id: 77, name: 'ponyta', types: ['fire'], height: 10, weight: 300, description: 'As a newborn, it can barely stand. However, through galloping, its legs are made tougher and faster.' },
    {image: '078.png', id: 78, name: 'rapidash', types: ['fire'], height: 17, weight: 950, description: 'When at an all-out gallop, its blazing mane sparkles, enhancing its beautiful appearance.' },
    {image: '079.png', id: 79, name: 'slowpoke', types: ['psychic', 'water'], height: 12, weight: 360, description: 'Although slow, it is skilled at fishing with its tail. It does not feel pain if its tail is bitten.' },
    {image: '080.png', id: 80, name: 'slowbro', types: ['psychic', 'water'], height: 16, weight: 785, description: 'Though usually dim witted, it seems to become inspired if the Shellder on its tail bites down.' },
    {image: '081.png', id: 81, name: 'magnemite', types: ['steel', 'electric'], height: 3, weight: 60, description: 'The electromagnetic waves emitted by the units at the sides of its head expel antigravity, which allows it to float.' },
    {image: '082.png', id: 82, name: 'magneton', types: ['steel', 'electric'], height: 10, weight: 600, description: 'The stronger electromagnetic waves from the three linked Magnemite are enough to dry out surrounding moisture.' },
    {image: '083.png', id: 83, name: 'farfetchd', types: ['flying', 'normal'], height: 8, weight: 150, description: 'It cant live without the stalk it holds. Thats why it defends the stalk from attackers with its life.' },
    {image: '084.png', id: 84, name: 'doduo', types: ['flying', 'normal'], height: 14, weight: 392, description: 'The brains in its two heads appear to communicate emotions to each other with a telepathic power.' },
    {image: '085.png', id: 85, name: 'dodrio', types: ['flying', 'normal'], height: 18, weight: 852, description: 'When Doduo evolves into this odd breed, one of its heads splits into two. It runs at nearly 40 mph.' },
    {image: '086.png', id: 86, name: 'seel', types: ['water'], height: 11, weight: 900, description: 'The colder it gets, the better it feels. It joyfully swims around oceans so cold that they are filled with floating ice.' },
    {image: '087.png', id: 87, name: 'dewgong', types: ['ice', 'water'], height: 17, weight: 1200, description: 'Its streamlined body has low resistance, and it swims around cold oceans at a speed of eight knots.' },
    {image: '088.png', id: 88, name: 'grimer', types: ['poison'], height: 9, weight: 300, description: 'Born from sludge, these Pokémon now gather in polluted places and increase the bacteria in their bodies.' },
    {image: '089.png', id: 89, name: 'muk', types: ['poison'], height: 12, weight: 300, description: 'Its so stinky! Muks body contains toxic elements, and any plant will wilt when it passes by.' },
    {image: '090.png', id: 90, name: 'shellder', types: ['water'], height: 3, weight: 40, description: 'It swims backward by opening and closing its two shells. Its large tongue is always kept hanging out.' },
    {image: '091.png', id: 91, name: 'cloyster', types: ['ice', 'water'], height: 15, weight: 1325, description: 'It fights by keeping its shell tightly shut for protection and by shooting spikes to repel foes.' },
    {image: '092.png', id: 92, name: 'gastly', types: ['poison', 'ghost'], height: 13, weight: 1, description: 'Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.' },
    {image: '093.png', id: 93, name: 'haunter', types: ['poison', 'ghost'], height: 16, weight: 1, description: 'It likes to lurk in the dark and tap shoulders with a gaseous hand. Its touch causes endless shuddering.' },
    {image: '094.png', id: 94, name: 'gengar', types: ['poison', 'ghost'], height: 15, weight: 405, description: 'The leer that floats in darkness belongs to a Gengar delighting in casting curses on people.' },
    {image: '095.png', id: 95, name: 'onix', types: ['ground', 'rock'], height: 88, weight: 2100, description: 'Opening its large mouth, it ingests massive amounts of soil and creates long tunnels.' },
    {image: '096.png', id: 96, name: 'drowzee', types: ['psychic'], height: 10, weight: 324, description: 'It can tell what people are dreaming by sniffing with its big nose. It loves fun dreams.' },
    {image: '097.png', id: 97, name: 'hypno', types: ['psychic'], height: 16, weight: 756, description: 'Seeing its swinging pendulum can induce sleep in three seconds, even in someone who just woke up.' },
    {image: '098.png', id: 98, name: 'krabby', types: ['water'], height: 4, weight: 65, description: 'It lives in burrows dug on sandy beaches. Its pincers fully grow back if they are broken in battle.' },
    {image: '099.png', id: 99, name: 'kingler', types: ['water'], height: 13, weight: 600, description: 'The larger pincer has 10,000- horsepower strength. However, it is so heavy, it is difficult to aim.' },
    {image: '100.png', id: 100, name: 'voltorb', types: ['electric'], height: 5, weight: 104, description: 'It looks just like a Pok Ball. It is dangerous because it may electrocute or explode on contact.' },
    {image: '101.png', id: 101, name: 'electrode', types: ['electric'], height: 12, weight: 666, description: 'It is known to drift on winds if it is bloated to bursting with stored electricity.' },
    {image: '102.png', id: 102, name: 'exeggcute', types: ['psychic', 'grass'], height: 4, weight: 25, description: 'Its six eggs converse using telepathy. They can quickly gather if they become separated.' },
    {image: '103.png', id: 103, name: 'exeggutor', types: ['psychic', 'grass'], height: 20, weight: 1200, description: 'It is called The Walking Jungle. If a head grows too big, it falls off and becomes an Exeggcute.' },
    {image: '104.png', id: 104, name: 'cubone', types: ['ground'], height: 4, weight: 65, description: 'When it thinks of its dead mother, it cries. Its crying makes the skull it wears rattle hollowly.' },
    {image: '105.png', id: 105, name: 'marowak', types: ['ground'], height: 10, weight: 450, description: 'From its birth, this savage Pokémon constantly holds bones. It is skilled in using them as weapons.' },
    {image: '106.png', id: 106, name: 'hitmonlee', types: ['fighting'], height: 15, weight: 498, description: 'Its legs can stretch double. First-time foes are startled by its extensible reach.' },
    {image: '107.png', id: 107, name: 'hitmonchan', types: ['fighting'], height: 14, weight: 502, description: 'The arm-twisting punches it throws pulverize even concrete. It rests after three minutes of fighting.' },
    {image: '108.png', id: 108, name: 'lickitung', types: ['normal'], height: 12, weight: 655, description: 'Being licked by its long, saliva-covered tongue leaves a tingling sensation. Extending its tongue retracts its tail.' },
    {image: '109.png', id: 109, name: 'koffing', types: ['poison'], height: 6, weight: 10, description: 'Toxic gas is held within its thin, balloon-shaped body, so it can cause massive explosions.' },
    {image: '110.png', id: 110, name: 'weezing', types: ['poison'], height: 12, weight: 95, description: 'Inhaling toxic fumes from trash and mixing them inside its body lets it spread an even fouler stench.' },
    {image: '111.png', id: 111, name: 'rhyhorn', types: ['rock', 'ground'], height: 10, weight: 1150, description: 'Its powerful tackles can destroy anything. However, it is too slow witted to help people work.' },
    {image: '112.png', id: 112, name: 'rhydon', types: ['rock', 'ground'], height: 19, weight: 1200, description: 'Standing on its hind legs freed its forelegs and made it smarter. It is very forgetful, however.' },
    {image: '113.png', id: 113, name: 'chansey', types: ['normal'], height: 11, weight: 346, description: 'A kindly Pokémon that lays highly nutritious eggs and shares them with injured Pokmon or people.' },
    {image: '114.png', id: 114, name: 'tangela', types: ['grass'], height: 10, weight: 350, description: 'Many writhing vines cover it, so its true identity remains unknown. The blue vines grow its whole life long.' },
    {image: '115.png', id: 115, name: 'kangaskhan', types: ['normal'], height: 22, weight: 800, description: 'It raises its offspring in its belly pouch. It lets the baby out to play only when it feels safe.' },
    {image: '116.png', id: 116, name: 'horsea', types: ['water'], height: 4, weight: 80, description: 'It makes its nest in the shade of corals. If it senses danger, it spits murky ink and flees.' },
    {image: '117.png', id: 117, name: 'seadra', types: ['water'], height: 12, weight: 250, description: 'Its spines provide protection. Its fins and bones are prized as traditional-medicine ingredients.' },
    {image: '118.png', id: 118, name: 'goldeen', types: ['water'], height: 6, weight: 150, description: 'Though it appears very elegant when swimming with fins unfurled, it can jab powerfully with its horn.' },
    {image: '119.png', id: 119, name: 'seaking', types: ['water'], height: 13, weight: 390, description: 'In autumn, its body becomes more fatty in preparing to propose to a mate. It takes on beautiful colors.' },
    {image: '120.png', id: 120, name: 'staryu', types: ['water'], height: 8, weight: 345, description: 'As long as its red core remains, it can regenerate its body instantly, even if its torn apart.' },
    {image: '121.png', id: 121, name: 'starmie', types: ['psychic', 'water'], height: 11, weight: 800, description: 'Its core shines in many colors and sends radio signals into space to communicate with something.' },
    {image: '122.png', id: 122, name: 'mr-mime', types: ['fairy', 'psychic'], height: 13, weight: 545, description: 'It shapes an invisible wall in midair by minutely vibrating its fingertips to stop molecules in the air.' },
    {image: '123.png', id: 123, name: 'scyther', types: ['flying', 'bug'], height: 15, weight: 560, description: 'The sharp scythes on its forearms become increasingly sharp by cutting through hard objects.' },
    {image: '124.png', id: 124, name: 'jynx', types: ['psychic', 'ice'], height: 14, weight: 406, description: 'Its cries sound like human speech. However, it is impossible to tell what it is trying to say.' },
    {image: '125.png', id: 125, name: 'electabuzz', types: ['electric'], height: 11, weight: 300, description: 'Research is progressing on storing lightning in Electabuzz so this energy can be used at any time.' },
    {image: '126.png', id: 126, name: 'magmar', types: ['fire'], height: 13, weight: 445, description: 'The scorching fire exhaled by Magmar forms heat waves around its body, making it hard to see the Pokémon clearly.' },
    {image: '127.png', id: 127, name: 'pinsir', types: ['bug'], height: 15, weight: 550, description: 'It grips prey with its powerful pincers and will not let go until the prey is torn in half.' },
    {image: '128.png', id: 128, name: 'tauros', types: ['normal'], height: 14, weight: 884, description: 'Once it takes aim at its foe, it makes a headlong charge. It is famous for its violent nature.' },
    {image: '129.png', id: 129, name: 'magikarp', types: ['water'], height: 9, weight: 100, description: 'A Magikarp living for many years can leap a mountain using Splash. The move remains useless, though.' },
    {image: '130.png', id: 130, name: 'gyarados', types: ['flying', 'water'], height: 65, weight: 2350, description: 'Once it begins to rampage, a Gyarados will burn everything down, even in a harsh storm.' },
    {image: '131.png', id: 131, name: 'lapras', types: ['ice', 'water'], height: 25, weight: 2200, description: 'Able to understand human speech and very intelligent, it loves to swim in the sea with people on its back.' },
    {image: '132.png', id: 132, name: 'ditto', types: ['normal'], height: 3, weight: 40, description: 'It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.' },
    {image: '133.png', id: 133, name: 'eevee', types: ['normal'], height: 3, weight: 65, description: 'Thanks to its unstable genetic makeup, this special Pokémon conceals many different possible evolutions.' },
    {image: '134.png', id: 134, name: 'vaporeon', types: ['water'], height: 10, weight: 290, description: 'Its cell composition is similar to water molecules. As a result, it cant be seen when it melts away into water.' },
    {image: '135.png', id: 135, name: 'jolteon', types: ['electric'], height: 8, weight: 245, description: 'By storing electricity in its body, it can shoot its bristlelike fur like a barrage of missiles.' },
    {image: '136.png', id: 136, name: 'flareon', types: ['fire'], height: 9, weight: 250, description: 'Inhaled air is carried to its flame sac, heated, and exhaled as fire that reaches over 3,000 degrees F.' },
    {image: '137.png', id: 137, name: 'porygon', types: ['normal'], height: 8, weight: 365, description: 'A man-made Pokémon created using advanced scientific means. It can move freely in cyberspace.' },
    {image: '138.png', id: 138, name: 'omanyte', types: ['water', 'rock'], height: 4, weight: 75, description: 'A Pokémon that was resurrected from a fossil using modern science. It swam in ancient seas.' },
    {image: '139.png', id: 139, name: 'omastar', types: ['water', 'rock'], height: 10, weight: 350, description: 'It is thought that this Pokémon became extinct because its spiral shell grew too large.' },
    {image: '140.png', id: 140, name: 'kabuto', types: ['water', 'rock'], height: 5, weight: 115, description: 'It is thought to have inhabited beaches 300 million years ago. It is protected by a stiff shell.' },
    {image: '141.png', id: 141, name: 'kabutops', types: ['water', 'rock'], height: 13, weight: 405, description: 'It is thought that this Pokémon came onto land because its prey adapted to life on land.' },
    {image: '142.png', id: 142, name: 'aerodactyl', types: ['flying', 'rock'], height: 18, weight: 590, description: 'A Pokémon that roamed the skies in the dinosaur era. Its teeth are like saw blades.' },
    {image: '143.png', id: 143, name: 'snorlax', types: ['normal'], height: 21, weight: 4600, description: 'When its belly is full, it becomes too lethargic to even lift a finger, so it is safe to bounce on its belly.' },
    {image: '144.png', id: 144, name: 'articuno', types: ['flying', 'ice'], height: 16, weight: 554, description: 'A legendary bird Pokémon. It can create blizzards by freezing moisture in the air.' },
    {image: '145.png', id: 145, name: 'zapdos', types: ['flying', 'electric'], height: 0, weight: 0, description: 'A legendary Pokémon that is said to live in thunderclouds. It freely controls lightning bolts.' },
    {image: '146.png', id: 146, name: 'moltres', types: ['flying', 'fire'], height: 20, weight: 600, description: 'One of the legendary bird Pokémon. It is said that its appearance indicates the coming of spring.' },
    {image: '147.png', id: 147, name: 'dratini', types: ['dragon'], height: 18, weight: 33, description: 'It is called the Mirage Pokémon because so few have seen it. Its shed skin has been found.' },
    {image: '148.png', id: 148, name: 'dragonair', types: ['dragon'], height: 40, weight: 165, description: 'If its body takes on an aura, the weather changes instantly. It is said to live in seas and lakes.' },
    {image: '149.png', id: 149, name: 'dragonite', types: ['flying', 'dragon'], height: 22, weight: 2100, description: 'It is said to make its home somewhere in the sea. It guides crews of shipwrecks to shore.' },
    {image: '150.png', id: 150, name: 'mewtwo', types: ['psychic'], height: 20, weight: 1220, description: 'A Pokémon created by recombining Mews genes. Its said to have the most savage heart among Pokmon.' },
    {image: '151.png', id: 151, name: 'mew', types: ['psychic'], height: 4, weight: 40, description: 'Mew is said to possess the genetic composition of all Pokémon. It is capable of making itself invisible at will, so it entirely avoids notice even if it approaches people.' }
  ];

  getPokemon() {
    return this.pokemons;
  }


  getPoke(id: number) {
    const pokemonArr = [];
    for (const pokemon of this.pokemons) {
// tslint:disable-next-line: triple-equals
      if (pokemon.id == id) {
        pokemonArr.push(pokemon);
      }
    }

    return pokemonArr;
  }

  getPkmn(choosePokemon: string) {
    const pokemonArr = [];
    choosePokemon = choosePokemon.toLowerCase();
    for (const pokemon of this.pokemons) {
      const name = pokemon.name.toLowerCase();
      if (name.indexOf(choosePokemon) >= 0) {
        pokemonArr.push(pokemon);
      }
    }

    return pokemonArr;
  }
}
