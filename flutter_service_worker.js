'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c8f979d408e51acd1ee06f6af9b9722c",
"favicon.ico": "d470cf126b4578737956a0537d597a97",
"index.html": "78f6618e0ab1cd1dc079a787e383f6a3",
"/": "78f6618e0ab1cd1dc079a787e383f6a3",
"main.dart.js": "2eca9233c337ade2a1b358b632d414a1",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"README.md": "5adf87777c778629741635c82172bfb8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e6dae6deab0b8c5468f30ab49052e22d",
".git/config": "ec43e70a1274cee53a0e771e0665603e",
".git/objects/61/5dc955900256034a0309d9293d71aadb59cb90": "2aea2eccb10512077bf7c92b002a9fbd",
".git/objects/0d/d7af407c986b3a9779330eb69c88567b85457c": "460fb82a8a6d6248b28f09c8e820e5fd",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/59/6cfad76f3492748f205447d99289d2c6f15b38": "9b5a5c8b735714fa17c53e5e15bdc262",
".git/objects/92/b4bf4689e04b4aa4d499987a412219fe2a5eab": "f55b654521fbdb41bcfccd174cd35a32",
".git/objects/0c/a965e03b040cc74c0df299f052519fd6d9ca6f": "ba38b04960b62bcf61beea20ff90f2f9",
".git/objects/66/3584c80afa83ea88319f4d1ac17cb53bb0bee6": "14e0f711ee6381df53b275b3d3dc22e4",
".git/objects/3e/4b72253379f25a58121dfaf052a7fdb5c42d16": "d10e8ed7ec1e0ee41672e34b8992c727",
".git/objects/68/50408daac68fd1f3b5db4008a37b74b195b735": "464070d0a6340491f6f7aeae46f27050",
".git/objects/3b/922ff15b0b8362333543ebd078515ac2e8cfaa": "03905e032c98b963df142e21e4709bdc",
".git/objects/6f/49137538cdfab9c7bbf0fda00a300fddc4204c": "42e427ff2fdbadc501768324a3283f41",
".git/objects/03/7241fe3df39ebb078aef48a0b2255028e5b053": "49d8adc02f14823ae6ab2e76fe058c22",
".git/objects/04/46075c7ef88830ffb5040c1a0eeecdf9ae3dd7": "3b5003df4b5270733ea84ca5daadbfc8",
".git/objects/32/e46762a63ff9d64887b8348c62b4dc4fd184f8": "a02487c547960cdd0008d52198c8ca70",
".git/objects/35/1d9aa44b359eef136e59c26a8072c54edf2861": "cdf705a9d4fe1b4335861667f6982e60",
".git/objects/0b/0f64e2dc586e556491cb1d797ffa3455d82915": "a74d6da76309963bfd3ff6bc52fa423f",
".git/objects/0b/6fbb4fd4d1d9f70885008eb9c0c3455388bb86": "5b8a66b046f2aea64346b20b97d26c4b",
".git/objects/93/3d2f1b517f7ef9991a8513425baa9e820c05ba": "8a6e6d9d0862fb152f12bc047743cef8",
".git/objects/0e/2c830231a875320a1624292e32e72c34c6ee3b": "cf048fb8e6e0c5cbea84a1d12114d088",
".git/objects/34/d5e2f3e11e0f9ffce55968207d3001a7f78dd6": "0675d717ad1a96c905bcd4fe78274e34",
".git/objects/5a/6a756fc8fa0cf0c34c0a1c24347f98293a3ab4": "6fa448bede6c9c9f33d7d6b506e05d64",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/a4/cbb2f3063499d908b95830ea49e34e376659bc": "0d50b269f9260620b1e8529a47effda7",
".git/objects/bb/64801f53141c2c96f68c18dba90208ae7e6c84": "25c0515d6f507e1fcaf7aab607cb9d48",
".git/objects/d7/a6bcc34dd40262d511401c48fa6e35d4d6decb": "ce7eb8c0f125ab60b10f03df25090863",
".git/objects/d7/c619ba34ecaae6a41c0e0443355ca7c28ccbd0": "7db7bb59786276be962516b4503bb28a",
".git/objects/d0/32083976e5fe1ff2104e52d150e256b2ed7f90": "b1953b8c23e65231194ed4d26bfbf4a6",
".git/objects/d0/06b5673b14d950e4e34a8402328a8dd6ed35ee": "360d67f616c3ada20bb94fd1ab3a1b93",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/a5/7d1e294d720a14cf711ea3fa248dc1ab04272a": "bb86c618b04ad14def2e580bb6cde187",
".git/objects/bd/e93ff874aa5cdaf139dbbf5de2040469e7467a": "ae88acfa7c1bd971a2bade335bcd7c1c",
".git/objects/d1/1c15cf7842f5d45b3380b041a6f0a4ad419982": "3754e278d68fe101e57a50ab5f9adf07",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/3e2df6f93f22f4c14497d8e63cdb6e9d6b3590": "f583793e7c13dae20878320e057e8c51",
".git/objects/ae/a62e44a1ff7cac66e10c58b93b09e3a9ecbb76": "799d3f251ee754f84f1a5aec340720e4",
".git/objects/d8/5b547a39d278a82726a07e95f4376b635d38be": "9b88125b33f3a4178ad12219aadf4901",
".git/objects/ab/192fa59c523798f39fbecffe972d667d60b209": "ff4ce52926d94289295f227512618d28",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/bb5cab4763f0216e7d801de024240a296bc73e": "5f882626b965584499603f7ea5abffdc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/08fd89d037072ee56f835a87cd51b57ec60c08": "a77aecab8376dfbfbb1cd38196046d5d",
".git/objects/ee/2e3ea148c57217a3242e7916d844afe66ee802": "755e68253c0aef38ed04d39efcfa9e47",
".git/objects/fc/d4e76ff93d910adf77abf911e54ed73264b3d5": "28be5e145b9b18c1bfe1bc279d5b925f",
".git/objects/fd/645d31fd2f7b17f358d17d329bcb74950a6d3e": "01b372598c0f8df458bf7ae18e22ed25",
".git/objects/fd/baf5b2f94c2392e54daaa23bee4d1505c1a932": "c99895a7df225ef6d00ceaafa6097feb",
".git/objects/f5/4e2e5db5cf94fdffaa5e9b78d7f5d8fb174c14": "07dd0ff46ebb7eda2bdc11bc61073533",
".git/objects/e3/a612142481e58b16166819ad514a450d136450": "1b411bc52fe40514e832259f97beef74",
".git/objects/cf/5b849f8398dfa9aa1f7ad7f66de3f60b2616c2": "afa26a528fa5501e1bf029eefdcea584",
".git/objects/ca/038756523a232007394d6b108a0284dc87f5c0": "96fe17f15f08e05001caa169aaa104e2",
".git/objects/ca/a2c534186f87a478d27244daa97a711f3dd927": "58a9b13ede0a44f77b30ae241bfe54f4",
".git/objects/c8/1e42da00ae85ba89c7c6401c6ebf5140f28dd6": "ff3581128bb6d51e3e34b4bc3a0efeb7",
".git/objects/c8/be692066e411f30c35a30debf928bdef076cb7": "fa4985f75fdda0205c3dfd029cd957b1",
".git/objects/fb/1dbd9e42501053e4d08c267448024ee04ef442": "77b0095c4617fd71aa6cd0998e7db506",
".git/objects/fb/f2a4e4d4ef5de4e21b45805039a005b3cae17d": "1d98cfa978f1fbe3f132f9c9f477be4d",
".git/objects/ec/016467d80a523297679fdfbd2f1e968fe65607": "1d8f5ad118cedf3ecd46fb70d0d00918",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/18/8a2d2498702d74a88b83c62407e9fccfd5d1d9": "e825f530cb9f72630523bb50abd77970",
".git/objects/27/9952f75c66f23559a9e31761fd70d6c639be29": "1435e013301a367d98bc29de23474953",
".git/objects/27/70116fff25db9d733a97b0abcced8ac60cbb3a": "563e9cf597570066da953aa77b4f062a",
".git/objects/27/c264302fbfbca26672539e96c7720a59c0bc55": "3e7a06b737911afa00d5c47d16a3872a",
".git/objects/27/a45735eaa5d0fe856255dc11a748ad04c55b4c": "cc72b32740bb6de5d879252ce7df4de6",
".git/objects/27/e541ff798b177422af95a99b6cccbfcb23dd9e": "0040cce59cd6f910fb651cd55d6ab279",
".git/objects/11/0fb10305c4a40876dad7f5efca9fb1a5d18051": "0632a5041e42f110fd43860ae3339be8",
".git/objects/7d/02470d461f88680c26ec3a2705c92e78db1fdd": "996b3f3491014d30a7952c73d5be5179",
".git/objects/7d/b5d4649ddb94e22d2864d243f3f77a5672ecc5": "077fc76ffcb8fda0f9bef1a733809840",
".git/objects/29/fa4512f21b61564761df5585a11be1cc985476": "decc5e942c917e8ed7ad81ac82d3f283",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/f36106d8e355faa2ded9e43f266af4fdf07e85": "f08890d391cfbe0edf8aa5fcf8bd8155",
".git/objects/7c/a8eefa7b2c7088949ede39cd13d81f131dbc24": "64425420da2aedfeff9a5346f382e3bf",
".git/objects/7c/a944ca242f9313891ecc04594fd9c8d99c29e4": "7e7051b6bddcf71a784ee04bab865f02",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/42/bb39f1edbbcb1ac376bea0bee92b4aeb2a36c2": "f7c6e2e30d6fe2811f0063c701a69839",
".git/objects/89/88f8753f06270613386210aab33ddc6e3074ec": "6acd33d284f07a3b3a4cabdac9bebeb9",
".git/objects/1f/8f7eb658ad3653009610141ba4615ea984f07a": "82ee15c139405090b78c5a37021d7e1c",
".git/objects/1f/14e40a9aaedbed8173dcc38e765bdbcf28ea2e": "096edca5e9dcfca6b90512db58a87807",
".git/objects/1f/16e553d525ef99b22860e245cb22677f401179": "637e7e2bc9b2da90c6deebb2574b92c5",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/87/5d6e8872f0acfa93f0c3428320e1909515d7aa": "15b8e04afb7836d94e9dc5ff935dd808",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8f/4bf9732b7fd82964f8198bf4d30408ffd84131": "018ee6126eab0558ed69824833b10716",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8a/48f6e32e817ffc71827cddbb9f927c206a092f": "3519f8a68ba8140b1f4b8d87aa176495",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/8af157ced259d7961468bc214ed8982c8ae444": "49bc42bb3a4c8bbb21ac35b07e7913c5",
".git/objects/19/e9e97251e6ea7dba21dfa9719a24853829bb53": "36506b27b5a3bb0f9a5f157458873132",
".git/objects/4c/c88de8fdaca43f89e948f85e91d3c352c6a782": "f6bd2a16cde2d2f18118ec45c46e7007",
".git/objects/21/4a40ceb88ee53f3877ffa7cb38c585042f7bbd": "ea6cf5bd24595d385335362a64325350",
".git/objects/4d/1fe796b060d7941ff466cd9ddba32f186f957c": "e7c0be73e273b1f83f632d2a3e8f78d8",
".git/objects/2f/09fd0a66f3eea290a75396e60c31233e28c586": "3940d44fa519b1526755fcabfd834fc7",
".git/objects/43/a63ed2306d732702e2e7b72c38e28d344283cc": "8ff060047b280848561ed9a13e7c6321",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/a44daddd5839ee6896b7d9ea117900f23aea52": "b45153bc5a3097ad722acb430651d303",
".git/objects/6b/e251c0712ab5e0c50615792dab6b1fb1d6b776": "7e4c8bf5062788022cc6cae8b42dab15",
".git/objects/38/07c4b861fa3290bb885ed1573d2b4518c60f2d": "6ca58d04bd93661698646865d723edcf",
".git/objects/6e/a8bbbdaa710a470edaa837c4393dfa323991db": "4d62e6f0fdb7b5b7afd6e739bfa0326c",
".git/objects/9a/4ab86efd6cbc94d370ac67bb464895a3159436": "a7de190c50bc7eb7c842022b3d16517f",
".git/objects/36/2c18c1714058562088f71585a583d3128314cf": "cf86be15e35eeadddef86438dc2fb022",
".git/objects/09/e86160ff6be131d77e264571c7afc04471c42c": "b7fa836d5fe34c3f5b856c119ee056af",
".git/objects/31/eae32e77f66cae4b6d1579ff8e02d4830d05b7": "6939325ec98eef014047647e65535794",
".git/objects/91/7e8cd80d36d11ba88b8df9b77390372612a6bc": "d2247c4bb14bb85408d6f69eebe10aa6",
".git/objects/65/1b983fcf129a57505f30cdf002a3f75c820d99": "7cb19670a206cf8afa16875cd7af8805",
".git/objects/3a/43a76f66f8d8032fba2794db6004c39140f456": "b8c953596457d6c8a1fbf375df944c92",
".git/objects/53/1ae37fd8c46db59505a5a7a1ba441cf324b0d8": "85e673b9f41e4eb0a7d872dcdbd12d9b",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/37/caed7e9c834e38ad1792aa9894ae2b60a7991e": "551d66972b3fce8a022191a89076f81f",
".git/objects/08/27f3472434ef2dbab13400473068c3e5c5ef28": "12c45e71234c34bc65dfd2a3f8b952f8",
".git/objects/01/197bc39f679e141fe8dcb57cfa5863f0d9ce86": "7d89e1eac41a38b46aab7d48e2cfcdad",
".git/objects/06/57e81a9e9d6af019f08a2bf5957abdc27df3eb": "d230349defd5f0a982c7964764f24bff",
".git/objects/6c/1787bf1faa0acba0da4d975eaf371cfe3cc0d9": "8ff89426e9f0bdee0754d8994b2b365f",
".git/objects/6c/ba740cabbe8ab3f7c492f4baf8608689c23ba7": "acf7d63658886e33631292f1c9d5fac9",
".git/objects/52/7ea6389b9c1854e2e9564e71c5ce64dc6e43b7": "5e2c0fa7735a7943b66bfd9e2abff757",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/0f/5a61174bd2890beb7b8a26d77e70d4f8fe0898": "ebd486bb4b8eeb77c8667bd5606c54f5",
".git/objects/64/f218e72a5e8cec2ed7f56003db7877b98de42d": "31485712d3ff92994b4cdd9d85980e50",
".git/objects/64/451233ee2b5a1dfe5727194ab2517059d51f3e": "2c7cfbeba8dec8044348870475b33880",
".git/objects/90/a422fe6ea6c4d04c0eccaec5fd16d21c021723": "3071faacdfba075e8b63c15df5fbc750",
".git/objects/90/b9e8268bf576205c17a596597a6ce2fbe19d9e": "206dc440cb7d6c3ebe3fed5ec9e79387",
".git/objects/bf/e9e8141454b1fd6eeefa01f63cd40878507455": "c9711c612a00001cb50419acfa908f57",
".git/objects/d3/53f7433e827f98380d0b0cb7cec1c369a6f78f": "ec20fd5e360cb763a8882106cca6a084",
".git/objects/ba/d814f7563f12cb32f0dc848be9e0efad5108e0": "5f69731c97a166dbb50445702f69041e",
".git/objects/ba/a2752ff36814a1daf1033a51008bd90974585a": "98d69ad48f5fe588c671c436468d4a90",
".git/objects/a0/c4e4156ceded6038ee9381c83ae58d489edc1a": "392370e89ede83a21ad0a4db08f86ab0",
".git/objects/a0/5c9c5639e836c6c8668401feb0963651eb6e60": "f26831114cd13d6b164dbc331a20e77d",
".git/objects/dd/c196c28f137b5129442a6b6c8964b7fdfc58ab": "732f9610ee030516570d6f78ac75542c",
".git/objects/a9/02ee7196007793b32b16a4f390af1d5eed6068": "b872132a3b0098513b02cab944e51395",
".git/objects/d5/5adf40c44227a92378aaa5a91391c52a4d6dc2": "9ccf69424a1d7471f0331a254e3b0fea",
".git/objects/af/7c6eba4a0d506f6bc88aa0c400f44cfc7f991c": "25ead886881434792a50fc18db249237",
".git/objects/af/a1bbd6d82964dde2546a3d1b1b32d360882f75": "ecc586153aad678c56d045c5d13bd36c",
".git/objects/af/a767f8db406757f7e0cfc905934a62eb3b6873": "46e23835266943a249aca02f6116110f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/cb0e4be78493b48bfef480379d9c5371fe8f0e": "977906aa5826e25438ba9b7ee7484f0b",
".git/objects/a8/a4ab0c471eb833e9b1e085cfd377d2de7e3831": "893209d4740e02a35524fdfd8d895478",
".git/objects/a8/3c35a3d719ab7ea6a58fd0f8c7f8e2e05f2dc3": "68bbe251936182ff84abcf330f309ecd",
".git/objects/a8/f913dbe0a4de98425c51dbfc1a4295fadbb51d": "d04937aa033f750f26d7954260694ca3",
".git/objects/de/a8db38ed86b915d161cb8295405f875dbb9fe1": "c88a1f8d02bcf1d63e8ea15bf99b4142",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b0/2c69e65c03d62ffd74d5aea5ce2bb4b2562ee5": "390fe911c377f16288996e089cd6064a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/b14f7a0ffb735175f5bb2341b3457d8c88253f": "46dd05c032443cc89743a3ab53a22565",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/1669056a919453d9d08b2d931cad2276931934": "089a649eb1e6bc99002af9bc791d711d",
".git/objects/ea/2666556613b90f28ffc3e1194e8f6e9561c449": "977262fa184055da613b57e120a2ff67",
".git/objects/e1/00161d1782fc3cbf8ce32b571bf69e7dd3557d": "f7c00161f22bbdcae433aa99b631da14",
".git/objects/cd/7287110e3109533912ab1ba0c69471208b8bb9": "81e971939e931e1054704c931f635138",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/39eac2471f77a2741a0579e51d8a0d0b562257": "744465df7c383696c69f1a3e2db24396",
".git/objects/cd/9002875e4cf65b42073bee998bbd05878efb9d": "6ee6798ac11ac2f51ec156d43ee0ac56",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/fa/09380e6b19b0abe286f9d79e682a09d4183fa3": "2c7d4b4d6ced704e430b5cd6af5abaa2",
".git/objects/ff/381b85d346f7dd705cc15ff2032016aca01e12": "afac2478fb3375078da905f148580a08",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e7/bf62885c93a12380f66406b077b679114bb4cb": "d30b9e6651a57427170ef6e01999ec41",
".git/objects/cb/5d2b771a025e9a540d20c9fca695bee4c5d763": "351b3372baf9c037bfec5f2e9ed3de9a",
".git/objects/ce/8d7ee6890733ecf3af76c06a480c64927da1a9": "d65e34ca86fa651c61e26ff27dc48e95",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/b1b66b241210e3e1d4d572c4ad8bd5b1f9d5df": "b09789a2f22163091decf2bdd39e051e",
".git/objects/2c/70f817f3bb8a621924a30a36f6fa68f616fa5e": "49b02ddded02f12a328d3686268b07f3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/4f97a856ebd5f609d9c3674ed91e34a523f35b": "0293c1f40c699024647068c6f84ed33d",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/82c9f989750209ab2a0978c69a7d4e4bc66fd5": "590b1ca03dd2281643d0ad1e31684cc9",
".git/objects/41/ac29622dde4555d5eb9c77f98e5766424f4c3d": "dc6505fd55012d12b4c14cbb14ec55bd",
".git/objects/41/97b0ce88d8f3801aea94ae8f6526c18299229d": "3b4ce6a367f4af08edf23c2c72cbcbdc",
".git/objects/83/32415b8dea3100f11193f7b37a497ab5864704": "81d59d6cd655ef328aeb427a245554ea",
".git/objects/84/b82038500bbc13470c702ba1faa9ef22cb353f": "91692b81377056ab7df1e52729a929d3",
".git/objects/4a/23e7938f392121c0cb344c4962ce99e6f98851": "3c20aa1ea2e0fa7d42eefad1cdf1e11c",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/8d/e39166386b08bc8438632dd5a58e918946b76e": "15681f6cae2546ab01342a03a4c7b893",
".git/objects/8c/bb08b5d40e2ffbd7962a0f2792d9b957dde414": "de72d886de96d227fac5be88a067b22f",
".git/objects/1d/4ea30cdd346a644b9dffaf1815ee7f1415e902": "917bcb59242ba395b1f62003191f8941",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/1c/11108535d60bddac5e8de17faa185ba48882bd": "a235f8be9ddfcdfc06a8d0de5bdb8451",
".git/objects/1c/4036f316b8b7b8f4fc966e32d3b15a6cf73961": "3c75dbaabfaf28293e4ea06eb876a336",
".git/objects/1c/63ba38d4de91b17601ca1c22673b87651fdca4": "52c0b26a321b4acd2b30a8b333830e24",
".git/objects/82/4e3d56af99395dbba954bc8662e063f8a8b1b6": "17eb53c48ff291064ddb4ebcf655e059",
".git/objects/40/21b0cda3056b86adc636f516120672849baa31": "3512535378948f40e4bcfa02ce1bdf14",
".git/objects/2e/b922dd6257315cb93dc5596d227394ccdf8d06": "59eed643cb21bb863379d7219a115718",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/7f/6b6e09f4a25c3abdb8bdca1e8ee0f89b375a70": "b3a9ede35398583fac3aa64b07e62d15",
".git/objects/7f/3cf1cf83caf3bc68fe75e6979fc22a0a996c90": "2e6e1531181bd96fc7f1f60c19a0a2b3",
".git/objects/7f/f444d9162409c5ab2b51347e9364a6c0552b4d": "7d71b57240dcd54a0bf49f972d5667cf",
".git/objects/7a/13a382d05109c463329345e23903025c92f397": "7e7ccb8e45cc181b5d5940758d074ba6",
".git/objects/8e/a5bc33f6bd1008562f0f8b6247772a60dceb68": "de11f51b97bfe2caeea10308d4fc10a3",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f600ee806809e13caef0527bf1515420",
".git/logs/refs/heads/master": "f600ee806809e13caef0527bf1515420",
".git/logs/refs/remotes/origin/master": "aebeadc418ba1a550b36d41d5d543354",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "86a6b3598199fb835e0839beac61b2f7",
".git/refs/remotes/origin/master": "86a6b3598199fb835e0839beac61b2f7",
".git/index": "bbdc599dd22bb64934179993330b18a1",
".git/COMMIT_EDITMSG": "5ade3264fdf4a9dbccf28709ed81a491",
"assets/AssetManifest.json": "61a01e9d4fe0a19ca945e35f9827c21b",
"assets/NOTICES": "ad746d16e1a0e0c88f759451f3cd09c3",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/shaders/ink_sparkle.frag": "d5494ff20601899fac3158d1e5257c3b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/Currency_Exchange_Proj_0.jpeg": "84c620f168ec387775a0aff4ecca753c",
"assets/assets/Formal_Nirupam.jpg": "8e73c370febdede96859b1c6521591a3",
"assets/assets/ADC2022_1_Certificate.jpg": "ebe18a4c9a339cf09cba861c806f7f02",
"assets/assets/SRAM_4.jpeg": "b66fcef36f8b5bb376d5b853f7519dd7",
"assets/assets/ML_icon.jpg": "308bcd20239867bcc335511d92d505c4",
"assets/assets/about_2.gif": "97b52219da79ce6bf303cc93c9b352e4",
"assets/assets/hello_lettered.gif": "88864f6a205917faa38d96052997ef19",
"assets/assets/website_github.png": "a777970946a462abdc286a28aa747227",
"assets/assets/ADC2022_4.jpeg": "f13acebf58d6f560db8872562403ba3f",
"assets/assets/python_icon.jpg": "2d0941f5d1b23c0d0c31c77eaf3b7d9b",
"assets/assets/C_icon.jpg": "11084d4793f86cfdb1bee67bcb162d41",
"assets/assets/SRAM_3.jpeg": "40e676101f8876423772dcf83f106ce9",
"assets/assets/digital-marketing_icon.png": "ac61f3dae72b8b47beabfcf641af20ae",
"assets/assets/ADC2022_3.jpeg": "21ed78646ba8844e7e1e182071165716",
"assets/assets/ADC2022_2.jpeg": "dcf46e6588caf1659fb5233119b0244c",
"assets/assets/git_and_github_icon.jpg": "5e5d762129c6d097b4b1021337a9659d",
"assets/assets/test_4.webp": "cee5ce32bd489402aee463463362d357",
"assets/assets/SRAM_2.jpeg": "bc41921ccbea720efdf66c593e75eb02",
"assets/assets/html_css_logo.jpg": "bb8f4835a2af3edb21b57a898d2a973f",
"assets/assets/Flutter_Icon.jpg": "25796628f195b0cbb8181ccecceb920f",
"assets/assets/SRAM_1.jpeg": "dd287e1f0591377ce88d159044f16717",
"assets/assets/SRAM_0.jpeg": "7329bf080c5c4a529fc50e44df32c933",
"assets/assets/about_1.webp": "4a97eba2f7a4fd94fa46121bbdd467fc",
"assets/assets/C++_icon.jpg": "20c5f7f28bb005ff512fc77eb9619e4e",
"assets/assets/smile_about_blackBg.gif": "65a9a07d404bb55299c8cc36e293b52a",
"assets/assets/Formal_Nirupam_final.jpg": "39ddec4c485948c16a9b2d4982751be0",
"assets/assets/set_header_pic.png": "560118033673cd57e30d1750e6fa0adc",
"assets/assets/Aero-club_Website.png": "07be3de06c4feb06bf4c427313867286",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
