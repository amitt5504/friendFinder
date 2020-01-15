// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
		name: 'Captain America',
		image: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/d/d7/CapAmerica-EndgameProfile.jpg/revision/latest/top-crop/width/360/height/360?cb=20190423175339',
		scores: [
			'1',
			'5',
			'5',
			'1',
			'5',
			'5',
			'1',
			'1',
			'1',
			'5'
		]
  },
  {
		name: 'Iron Man',
		image: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/3/35/IronMan-EndgameProfile.jpg/revision/latest/top-crop/width/360/height/360?cb=20190423175213',
		scores: [
			'5',
			'4',
			'1',
			'2',
			'4',
			'4',
			'1',
			'2',
			'4',
			'4'
		]
  },
  {
		name: 'Black Widow',
		image: 'https://vignette.wikia.nocookie.net/mcu5817/images/7/78/Black_Widow-0.PNG/revision/latest/top-crop/width/360/height/450?cb=20190429151734&path-prefix=de',
		scores: [
			'2',
			'5',
			'5',
			'2',
			'3',
			'5',
			'1',
			'1',
			'4',
			'5'
		]
  },
  {
		name: 'Hawkeye',
		image: 'https://vignette.wikia.nocookie.net/vsbattles/images/8/8d/Hawkeye_Poster.jpg/revision/latest/scale-to-width-down/307?cb=20190428200700',
		scores: [
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1',
			'1'
		]
  },
  {
		name: 'Thor',
		image: 'https://static.tvtropes.org/pmwiki/pub/images/thorendgame.png',
		scores: [
			'5',
			'2',
			'3',
			'1',
			'5',
			'1',
			'3',
			'1',
			'1',
			'5'
		]
  },
  {
		name: 'Winter Soldier',
		image: 'https://static.tvtropes.org/pmwiki/pub/images/buckybarnesinfinitywar.png',
		scores: [
			'5',
			'4',
			'4',
			'2',
			'4',
			'4',
			'3',
			'2',
			'3',
			'3'
		]
  },
  {
		name: 'Okoye',
		image: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/5/56/Okoye-EndgameProfile.jpeg/revision/latest/top-crop/width/360/height/360?cb=20190423175120',
		scores: [
			'1',
			'3',
			'2',
			'1',
			'5',
			'5',
			'1',
			'1',
			'1',
			'2'
		]
  },
  {
		name: 'Gamora',
		image: 'https://static.tvtropes.org/pmwiki/pub/images/gamorainfinitywar_8.png',
		scores: [
      '1',
			'1',
			'5',
			'2',
			'5',
			'3',
			'5',
			'5',
			'5',
			'4'
		]
  },
  {
		name: 'Hulk',
		image: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/a/a4/ProfHulkAvengersEndgamelicensingart001.jpg/revision/latest/top-crop/width/360/height/360?cb=20190506122658',
		scores: [
			'5',
			'1',
			'2',
			'1',
			'3',
			'4',
			'1',
			'3',
			'3',
			'4'
		]
  },
  {
		name: 'Black Panther',
		image: 'https://static.tvtropes.org/pmwiki/pub/images/blackpantherinfinitywar.png',
		scores: [
			'1',
			'5',
			'5',
			'1',
			'5',
			'5',
			'1',
			'1',
			'1',
			'5'
		]
  },
  {
		name: 'Dr. Strange',
		image: 'https://static.tvtropes.org/pmwiki/pub/images/doctorstrangeinfinitywar.png',
		scores: [
			'4',
			'3',
			'5',
			'1',
			'1',
			'5',
			'5',
			'1',
			'1',
			'1'
		]
  },
  {
		name: 'Captain Marvel',
		image: 'https://www.thewrap.com/wp-content/uploads/2019/04/Captain-Marvel-Endgame.png',
		scores: [
			'2',
			'4',
			'1',
			'1',
			'1',
			'1',
			'1',
			'2',
			'1',
			'5'
		]
	},
];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
