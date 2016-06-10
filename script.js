/**
 * bugnplay-explorer
 * (c) 2016 Clark Winkelmann
 * @license MIT
 */

/* global React */

// TODO: add the rest of technologies supporty by bugnplay-parser
var technologies = [{
	category: 'Graphics',
	items: [{
		slug: 'photoshop',
		title: 'Adobe Photoshop',
		description: 'Adobe Photoshop is a raster graphics editor developed and published by Adobe Systems for Windows and OS X.',
		wiki: 'https://en.wikipedia.org/wiki/Adobe_Photoshop'
	},{
		slug: 'gimp',
		title: 'GIMP',
		description: 'GIMP is a free and open-source raster graphics editor used for image retouching and editing, free-form drawing, resizing, cropping, photo-montages, converting between different image formats, and more specialized tasks.',
		wiki: 'https://en.wikipedia.org/wiki/GIMP'
	},{
		slug: 'photostage',
		title: 'PhotoStage',
		description: '--------------',
		wiki: null
	},{
		slug: 'iphoto',
		title: 'iPhoto',
		description: 'iPhoto is a digital photograph manipulation software application developed by Apple Inc.',
		wiki: 'https://en.wikipedia.org/wiki/IPhoto'
	},{
		slug: 'inkscape',
		title: 'Inkscape',
		description: 'Inkscape is a free and open-source vector graphics editor; it can be used to create or edit vector graphics such as illustrations, diagrams, line arts, charts, logos and complex paintings.',
		wiki: 'https://en.wikipedia.org/wiki/Inkscape'
	},{
		slug: 'adobe-flash',
		title: 'Adobe Flash Professional',
		description: 'Adobe Animate (formerly Adobe Flash Professional) is a multimedia authoring and computer animation program developed by Adobe Systems.',
		wiki: 'https://en.wikipedia.org/wiki/Adobe_Animate'
	},{
		slug: 'adobe-illustrator',
		title: 'Adobe Illustrator',
		description: 'Adobe Illustrator is a vector graphics editor developed and marketed by Adobe Systems.',
		wiki: 'https://en.wikipedia.org/wiki/Adobe_Illustrator'
	},{
		slug: 'graphicsgale',
		title: 'GraphicsGale',
		description: '--------------',
		wiki: null
	},{
		slug: 'paintshop-pro',
		title: 'PaintShop Pro',
		description: 'PaintShop Pro (PSP) is a raster and vector graphics editor for Microsoft Windows.',
		wiki: 'https://en.wikipedia.org/wiki/PaintShop_Pro'
	}]
},{
	category: '3D/Game',
	items: [{
		slug: 'blender',
		title: 'Blender',
		description: 'Blender is a professional free and open-source 3D computer graphics software product used for creating animated films, visual effects, art, 3D printed models, interactive 3D applications and video games.',
		wiki: 'https://en.wikipedia.org/wiki/Blender_%28software%29'
	},{
		slug: 'maya',
		title: 'Autodesk Maya',
		description: 'Autodesk Maya, commonly shortened to Maya, is a 3D computer graphics software that runs on Windows, OS X and Linux.',
		wiki: 'https://en.wikipedia.org/wiki/Autodesk_Maya'
	},{
		slug: 'sketchup',
		title: 'SketchUp',
		description: 'SketchUp (formerly Google Sketchup) is a 3D modeling computer program for a wide range of drawing applications such as architectural, interior design, civil and mechanical engineering, film, and video game design.',
		wiki: 'https://en.wikipedia.org/wiki/SketchUp'
	},{
		slug: 'cinema4d',
		title: 'Cinema 4D',
		description: 'CINEMA 4D is a 3D modeling, animation and rendering application developed by MAXON Computer GmbH in Germany.',
		wiki: 'https://en.wikipedia.org/wiki/Cinema_4D'
	},{
		slug: 'ldraw',
		title: 'LDraw',
		description: 'LDraw is a system of free software tools for modeling Lego creations in 3D on a computer.',
		wiki: 'https://en.wikipedia.org/wiki/LDraw'
	},{
		slug: 'unity',
		title: 'Unity',
		description: 'Unity is a cross-platform game engine developed by Unity Technologies and used to develop video games for PC, consoles, mobile devices and websites.',
		wiki: 'https://en.wikipedia.org/wiki/Unity_%28game_engine%29'
	},{
		slug: 'unreal-engine',
		title: 'Unreal Engine',
		description: 'The Unreal Engine is a game engine developed by Epic Games. Although primarily developed for first-person shooters, it has been successfully used in a variety of other genres, including stealth, MMORPGs, and other RPGs.',
		wiki: 'https://en.wikipedia.org/wiki/Unreal_Engine'
	},{
		slug: 'gdevelop',
		title: 'GDevelop',
		description: 'GDevelop is an cross-platform open source event-driven game creator, able to compile games to Windows, Linux and HTML5',
		wiki: 'https://en.wikipedia.org/wiki/Visual_programming_language' // TODO: the description comes from this page, but it's not really specific
	},{
		slug: 'game-maker',
		title: 'GameMaker',
		description: 'From YoYo Games',
		wiki: null
	},{
		slug: '3ds-max',
		title: 'Autodesk 3ds Max',
		description: 'Autodesk 3ds Max, formerly 3D Studio, then 3D Studio Max is a professional 3D computer graphics program for making 3D animations, models, games and images.',
		wiki: 'https://en.wikipedia.org/wiki/Autodesk_3ds_Max'
	},{
		slug: 'rpg-maker',
		title: 'RPG Maker',
		description: 'RPG Maker is the name of a series of programs for the development of role-playing games (RPGs).',
		wiki: 'https://en.wikipedia.org/wiki/RPG_Maker'
	},{
		slug: 'muvizu',
		title: 'Muvizu',
		description: 'MuvizuPlay is an animation software package based on the Unreal Engine 3.',
		wiki: 'https://en.wikipedia.org/wiki/Muvizu'
	},{
		slug: 'iclone',
		title: 'iClone',
		description: 'iClone is a real-time 3D animation and rendering software program that enables users to make 3D animated films.',
		wiki: 'https://en.wikipedia.org/wiki/IClone'
	}]
},{
	category: 'Video editor',
	items: [{
		slug: 'imovie',
		title: 'iMovie',
		description: 'iMovie is a video editing software application sold by Apple Inc. for the Mac and iOS.',
		wiki: 'https://en.wikipedia.org/wiki/IMovie'
	},{
		slug: 'windows-movie-maker',
		title: 'Windows Movie Maker',
		description: 'Windows Movie Maker is a video editing software by Microsoft. It is a part of Windows Essentials software suite.',
		wiki: 'https://en.wikipedia.org/wiki/Windows_Movie_Maker'
	},{
		slug: 'adobe-premiere',
		title: 'Adobe Premiere Pro',
		description: 'Adobe Premiere Pro is a timeline-based video editing software application. It is part of the Adobe Creative Cloud, which includes video editing, graphic design, and web development programs.',
		wiki: 'https://en.wikipedia.org/wiki/Adobe_Premiere_Pro'
	},{
		slug: 'after-effects',
		title: 'Adobe After Effects',
		description: 'Adobe After Effects is a digital visual effects, motion graphics, and compositing application developed by Adobe Systems and used in the post-production process of filmmaking and television production.',
		wiki: 'https://en.wikipedia.org/wiki/Adobe_After_Effects'
	},{
		slug: 'istopmotion',
		title: 'iStopMotion',
		description: '-------------------------',
		wiki: null
	},{
		slug: 'sony-vegas',
		title: 'Sony Vegas Pro',
		description: 'Sony Vegas Pro is a video editing software package for non-linear editing (NLE) originally published by Sonic Foundry, now owned and run by Sony Creative Software.',
		wiki: 'https://en.wikipedia.org/wiki/Sony_Vegas_Pro'
	},{
		slug: 'finalcut',
		title: 'Final Cut Pro',
		description: 'Final Cut Pro is the name given to a series of non-linear video editing software programs - first developed by Macromedia Inc. and later Apple Inc.',
		wiki: 'https://en.wikipedia.org/wiki/Final_Cut_Pro'
	},{
		slug: 'pinnacle-studio',
		title: 'Pinnacle Studio',
		description: 'Pinnacle Studio is a video editing program originally developed by Pinnacle Systems as the consumer-level counterpart to Pinnacle\'s former professional-level software, Liquid Edition.',
		wiki: 'https://en.wikipedia.org/wiki/Pinnacle_Studio'
	},{
		slug: 'camtasia',
		title: 'Camtasia Studio',
		description: 'Camtasia Studio and Camtasia for Mac are software suites, created and published by TechSmith, for creating video tutorials and presentations directly via screencast, or via a direct recording plug-in to Microsoft PowerPoint.',
		wiki: 'https://en.wikipedia.org/wiki/Camtasia_Studio'
	},{
		slug: 'animatordv',
		title: 'AnimatorDV',
		// Source: description meta of http://www.animatordv.com/
		description: 'AnimatorDV is a Windows based software, frame grabber, for creating stop motion and time lapse animation.',
		wiki: null
	},{
		slug: 'magix-video-deluxe',
		title: 'Magix Video Deluxe',
		description: 'aaaaaaa',
		wiki: null
	},{
		slug: 'fraps',
		title: 'Fraps',
		description: 'Fraps (derived from frames per second) is a benchmarking, screen capture and screen recording utility for Windows.',
		wiki: 'https://en.wikipedia.org/wiki/Fraps'
	},{
		slug: 'quicktime',
		title: 'QuickTime',
		description: 'QuickTime is an extensible multimedia framework developed by Apple Inc., capable of handling various formats of digital video, picture, sound, panoramic images, and interactivity.',
		wiki: 'https://en.wikipedia.org/wiki/QuickTime'
	},{
		slug: 'zu3d',
		title: 'Zu3D',
		// Source: description meta of http://zu3d.com/
		description: 'Zu3D is easy to use stop-motion animation software, designed with and for children.',
		wiki: null
	},{
		slug: 'ulead-videostudio',
		title: 'Ulead VideoStudio',
		description: 'Corel VideoStudio (formerly Ulead VideoStudio) is a video editing software package for Microsoft Windows distributed by Ulead Systems (a division of Corel).',
		wiki: 'https://en.wikipedia.org/wiki/Corel_VideoStudio'
	}]
},{
	category: 'Audio editor',
	items: [{
		slug: 'audacity',
		title: 'Audacity',
		description: 'Audacity is a free open source digital audio editor and recording computer software application, available for Windows, OS X, Linux and other operating systems.',
		wiki: 'https://en.wikipedia.org/wiki/Audacity_%28audio_editor%29'
	},{
		slug: 'garageband',
		title: 'GarageBand',
		description: 'GarageBand is a software application for OS X and iOS that allows users to create music or podcasts. GarageBand is developed and sold by Apple Inc. for OS X.',
		wiki: 'https://en.wikipedia.org/wiki/GarageBand'
	},{
		slug: 'adobe-audition',
		title: 'Adobe Audition',
		description: 'Adobe Audition (formerly Cool Edit Pro) is a digital audio workstation from Adobe Systems featuring both a multitrack, non-destructive mix/edit environment and a destructive-approach waveform editing view.',
		wiki: 'https://en.wikipedia.org/wiki/Adobe_Audition'
	},{
		slug: 'magix-music-maker',
		title: 'Magix Music Maker',
		description: 'Magix Music Maker is a commercial digital music editor, which was designed by the company Magix for the consumer sector.',
		wiki: 'https://en.wikipedia.org/wiki/Magix_Music_Maker'
	},{
		slug: 'tuxguitar',
		title: 'TuxGuitar',
		description: 'TuxGuitar is a free, open source tablature editor, which includes features such as tablature editing, score editing, and import and export of Guitar Pro gp3, gp4, and gp5 files.',
		wiki: 'https://en.wikipedia.org/wiki/TuxGuitar'
	},{
		slug: 'ableton-live',
		title: 'Ableton Live',
		description: 'Ableton Live is a software music sequencer and digital audio workstation for OS X and Windows.',
		wiki: 'https://en.wikipedia.org/wiki/Ableton_Live'
	},{
		slug: 'fl-studio',
		title: 'FL Studio',
		description: 'FL Studio (formerly known as FruityLoops) is a digital audio workstation developed by the Belgian company Image-Line.',
		wiki: 'https://en.wikipedia.org/wiki/FL_Studio'
	},{
		slug: 'sibelius',
		title: 'Sibelius',
		description: 'Sibelius is a scorewriter program, created by Sibelius Software (now part of Avid Technology) for Microsoft Windows, OS X, and historically RISC OS. It is used by composers, arrangers, performers, music publishers, teachers and students, particularly for writing classical, jazz, band, vocal, film and television music.',
		wiki: 'https://en.wikipedia.org/wiki/Sibelius_%28software%29'
	},{
		slug: 'logic-pro',
		title: 'Logic Pro',
		description: 'Logic Pro is a digital audio workstation and Musical Instrument Digital Interface MIDI sequencer software application for the Mac OS X platform.',
		wiki: 'https://en.wikipedia.org/wiki/Logic_Pro'
	}]
},{
	category: 'Programming environments',
	items: [{
		slug: 'scratch',
		title: 'Scratch',
		description: 'Scratch is a free visual programming language.[1] Scratch is used by students, scholars, teachers, and parents to easily create animations, games, etc. and provide a stepping stone to the more advanced world of computer programming.',
		wiki: 'https://en.wikipedia.org/wiki/Scratch_%28programming_language%29'
	},{
		slug: 'xcode',
		title: 'Xcode',
		description: 'Xcode is an integrated development environment (IDE) containing a suite of software development tools developed by Apple for developing software for OS X, iOS, WatchOS and tvOS.',
		wiki: 'https://en.wikipedia.org/wiki/Xcode'
	},{
		slug: 'visual-studio',
		title: 'Microsoft Visual Studio',
		description: 'Microsoft Visual Studio is an integrated development environment (IDE) from Microsoft. It is used to develop computer programs for Microsoft Windows, as well as web sites, web applications and web services.',
		wiki: 'https://en.wikipedia.org/wiki/Microsoft_Visual_Studio'
	},{
		slug: 'mit-app-inventor',
		title: 'App Inventor for Android',
		description: 'App Inventor for Android is an open-source web application originally provided by Google, and now maintained by the Massachusetts Institute of Technology (MIT).',
		wiki: 'https://en.wikipedia.org/wiki/App_Inventor_for_Android'
	},{
		slug: 'labview',
		title: 'LabVIEW',
		description: 'LabVIEW is a system-design platform and development environment for a visual programming language from National Instruments.',
		wiki: 'https://en.wikipedia.org/wiki/LabVIEW'
	},{
		slug: 'greenfoot',
		title: 'Greenfoot',
		description: 'Greenfoot is an interactive Java development environment designed primarily for educational purposes at the high school and undergraduate level. It allows easy development of two-dimensional graphical applications, such as simulations and interactive games.',
		wiki: 'https://en.wikipedia.org/wiki/Greenfoot'
	},{
		slug: 'robolab',
		title: 'Robolab',
		description: 'The Lego Mindstorms series of kits contain software and hardware to create customizable, programmable robots. They include an intelligent brick computer that controls the system, a set of modular sensors and motors, and Lego parts from the Technic line to create the mechanical systems. The educational version of the products is called Lego Mindstorms for Schools, and comes with the ROBOLAB GUI-based programming software.',
		wiki: 'https://en.wikipedia.org/wiki/Lego_Mindstorms'
	}]
},{
	category: 'Programming languages',
	items: [{
		slug: 'python',
		title: 'Python',
		description: 'Python is a widely used high-level, general-purpose, interpreted, dynamic programming language.',
		wiki: 'https://en.wikipedia.org/wiki/Python_%28programming_language%29'
	},{
		slug: 'nxt-g',
		title: 'NXT-G',
		description: 'NXT-G v2.0 is a graphical programming environment that comes bundled with the NXT. With careful construction of blocks and wires to encapsulate complexity, NXT-G can be used for real-world programming.',
		wiki: 'https://en.wikipedia.org/wiki/Lego_Mindstorms_NXT#NXT-G'
	},{
		slug: 'nxc',
		title: 'NXC',
		description: 'Not eXactly C, or NXC, is a high-level programming language for the Lego Mindstorms NXT. NXC, which is short for Not eXactly C, is based on Next Byte Codes, an assembly language. NXC has a syntax like C. The IDE for NXC is the Bricx Command Center.',
		wiki: 'https://en.wikipedia.org/wiki/Not_eXactly_C'
	},{
		slug: 'swift',
		title: 'Swift',
		description: 'Swift is a general-purpose, multi-paradigm, compiled programming language created for iOS, OS X, watchOS, tvOS and Linux developed by Apple Inc.',
		wiki: 'https://en.wikipedia.org/wiki/Swift_%28programming_language%29'
	},{
		slug: 'cpp',
		title: 'C++',
		description: 'C++ is a general-purpose programming language. It has imperative, object-oriented and generic programming features, while also providing facilities for low-level memory manipulation.',
		wiki: 'https://en.wikipedia.org/wiki/C%2B%2B'
	},{
		slug: 'qt',
		title: 'Qt',
		description: 'Qt is a cross-platform application framework that is widely used for developing application software that can be run on various software and hardware platforms with little or no change in the underlying codebase, while still being a native application with the capabilities and speed thereof.',
		wiki: 'https://en.wikipedia.org/wiki/Qt_%28software%29'
	},{
		slug: 'csharp',
		title: 'C Sharp',
		description: 'C# is a multi-paradigm programming language encompassing strong typing, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.',
		wiki: 'https://en.wikipedia.org/wiki/C_Sharp_%28programming_language%29'
	},{
		slug: 'objective-c',
		title: 'Objective-C',
		description: 'Objective-C is a general-purpose, object-oriented programming language that adds Smalltalk-style messaging to the C programming language. It was the main programming language used by Apple for the OS X and iOS operating systems, and their respective application programming interfaces (APIs): Cocoa and Cocoa Touch prior to the introduction of Swift.',
		wiki: 'https://en.wikipedia.org/wiki/Objective-C'
	},{
		slug: 'xlogo',
		title: 'XLogo',
		// Does not have an english wiki page
		description: 'XLogo est un interpréteur Logo écrit en Java. C\'est un logiciel libre distribué selon les termes de la licence GNU GPL.',
		wiki: 'https://fr.wikipedia.org/wiki/Xlogo'
	},{
		slug: 'android',
		title: 'Android',
		description: 'Android is a mobile operating system (OS) currently developed by Google, based on the Linux kernel and designed primarily for touchscreen mobile devices such as smartphones and tablets.',
		wiki: 'https://en.wikipedia.org/wiki/Android_%28operating_system%29'
	},{
		slug: 'java',
		title: 'Java',
		description: 'Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented,[14] and specifically designed to have as few implementation dependencies as possible.',
		wiki: 'https://en.wikipedia.org/wiki/Java_%28programming_language%29'
	}]
},{
	category: 'Web',
	items: [{
		slug: 'php',
		title: 'PHP',
		description: 'PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language.',
		wiki: 'https://en.wikipedia.org/wiki/PHP'
	},{
		slug: 'mysql',
		title: 'MySQL',
		description: 'MySQL is an open-source relational database management system (RDBMS).',
		wiki: 'https://en.wikipedia.org/wiki/MySQL'
	},{
		slug: 'javascript',
		title: 'JavaScript',
		description: 'JavaScript is a high-level, dynamic, untyped, and interpreted programming language.',
		wiki: 'https://en.wikipedia.org/wiki/JavaScript'
	},{
		slug: 'xampp',
		title: 'XAMPP',
		description: 'XAMPP is a free and open source cross-platform web server solution stack package developed by Apache Friends,[1] consisting mainly of the Apache HTTP Server, MariaDB database, and interpreters for scripts written in the PHP and Perl programming languages.',
		wiki: 'https://en.wikipedia.org/wiki/XAMPP'
	},{
		slug: 'wordpress',
		title: 'WordPress',
		description: 'WordPress is a free and open-source content management system (CMS) based on PHP and MySQL.',
		wiki: 'https://en.wikipedia.org/wiki/WordPress'
	}]
},{
	category: 'Hardware',
	items: [{
		slug: 'mindstorms',
		title: 'Lego Mindstorms',
		description: 'The Lego Mindstorms series of kits contain software and hardware to create customizable, programmable robots.',
		wiki: 'https://en.wikipedia.org/wiki/Lego_Mindstorms'
	},{
		slug: 'arduino',
		title: 'Arduino',
		description: 'Arduino is a software company, project, and user community that designs and manufactures computer open-source hardware, open-source software, and microcontroller-based kits for building digital devices and interactive objects that can sense and control physical devices.',
		wiki: 'https://en.wikipedia.org/wiki/Arduino'
	},{
		slug: 'raspberry-pi',
		title: 'Raspberry Pi',
		description: 'The Raspberry Pi is a series of credit card-sized single-board computers developed in the United Kingdom by the Raspberry Pi Foundation with the intent to promote the teaching of basic computer science in schools and developing countries.',
		wiki: 'https://en.wikipedia.org/wiki/Raspberry_Pi'
	},{
		slug: 'lego',
		title: 'LEGO',
		description: 'LEGO is a line of plastic construction toys that are manufactured by The Lego Group, a privately held company based in Billund, Denmark.',
		wiki: 'https://en.wikipedia.org/wiki/Lego'
	},{
		slug: 'playmobil',
		title: 'Playmobil',
		description: 'Playmobil is a line of toys produced by the Brandstätter Group (Geobra Brandstätter GmbH & Co KG), headquartered in Zirndorf, Germany.',
		wiki: 'https://en.wikipedia.org/wiki/Playmobil'
	}]
},{
	category: 'Other',
	items: [{
		slug: 'stop-motion',
		title: 'Stop motion',
		description: 'Stop motion is an animation technique that physically manipulates an object so that it appears to move on its own. The object is moved in small increments between individually photographed frames, creating the illusion of movement when the series of frames is played as a continuous sequence.',
		wiki: 'https://en.wikipedia.org/wiki/Stop_motion'
	},{
		slug: 'inno-setup',
		title: 'Inno Setup',
		description: 'Inno Setup is a free software[1] script-driven installation system created in Delphi by Jordan Russell.',
		wiki: 'https://en.wikipedia.org/wiki/Inno_Setup'
	},{
		slug: 'geogebra',
		title: 'GeoGebra',
		description: 'GeoGebra is an interactive geometry, algebra, statistics and calculus application, intended for learning and teaching mathematics and science from primary school to university level.',
		wiki: 'https://en.wikipedia.org/wiki/GeoGebra'
	},{
		slug: 'mspowerpoint',
		title: 'Microsoft PowerPoint',
		description: 'Microsoft PowerPoint is a slide show presentation program currently developed by Microsoft.',
		wiki: 'https://en.wikipedia.org/wiki/Microsoft_PowerPoint'
	},{
		slug: 'msword',
		title: 'Microsoft Word',
		description: 'Microsoft Word is a word processor developed by Microsoft.',
		wiki: 'https://en.wikipedia.org/wiki/Microsoft_Word'
	},{
		slug: 'fritzing',
		title: 'Fritzing',
		description: 'Fritzing is an open source initiative to develop amateur or hobby CAD software for the design of electronics hardware, to support designers and artists ready to move from experimenting with a prototype to building a more permanent circuit. It was developed at the University of Applied Sciences of Potsdam.',
		wiki: 'https://en.wikipedia.org/wiki/Fritzing'
	},{
		slug: 'crazy-talk-animator',
		title: 'CrazyTalk',
		description: 'CrazyTalk is Reallusion\'s brand name for its 2D animation software. The product series includes CrazyTalk, a 2D facial animation software tool, and CrazyTalk Animator, a face and body 2D animation suite.',
		wiki: 'https://en.wikipedia.org/wiki/CrazyTalk'
	}]
}];

var years = [
	2007,
	2008,
	2009,
	2010,
	2011,
	2012,
	2013,
	2014,
	2015
];

var BugnplayExplorer = React.createClass({
	mixins: [React.addons.LinkedStateMixin],
	getInitialState: function() {
		return {
			loading: true,
			projects: [],
			graph: 'map',
			highlight: 'category', // use null for none
			show_years_sidebyside: false,
			filter_years: [2014, 2015],
			filter_age_kids:    true,
			filter_age_juniors: true,
			filter_age_seniors: true,
			filter_category_audio_video:          true,
			filter_category_web_words_games:      true,
			filter_category_installation_robotic: true,
			filter_type_independent: true,
			filter_type_classroom:   true,
			filter_type_matu:        true,
			filter_technologies_all: true,
			filter_technologies: ['photoshop']
		};
	},
	componentDidMount: function() {
		$.ajax('/projects.json', {
			dataType: 'json',
			success: function(projects) {
				this.setState({
					loading: false,
					projects: projects
				});
			}.bind(this),
			error: function() {
				alert('Error getting data');
			}
		});
	},
	render: function() {
		var unused_posx = 0;
		var total_used = 0;

		var stacked_used = {};

		// Prepare the counters for the stack graph
		if(this.state.graph == 'stack') {
			this.state.filter_years.forEach(function(year) {
				stacked_used[year] = [];

				// Initialise indexes with zeros, there is a max of 3 columns at the moment
				for(var i=0;i<3;i++) {
					stacked_used[year].push(0);
				}
			});
		}

		var ch_boundaries = {
			top:    47.828,
			bottom: 45.836,
			left:   5.905,
			right:  10.552
		};

		// TODO: apply the correct ratio according to reality
		var map_width = 100; // %
		var map_height = 90; // %

		var boundaries_factor = {
			x: map_width / (ch_boundaries.right - ch_boundaries.left),
			y: map_height / (ch_boundaries.top - ch_boundaries.bottom)
		};

		var react_projects_nodes = this.state.projects.map(function(project) {
			/**
			 * Choose an icon to use for the project
			 */
			var icon = (function() {
				if(this.state.highlight == 'category') {
					switch(project.category) {
						case 'audio-video':          return 'film';
						case 'web-words-games':      return 'gamepad';
						case 'installation-robotic': return 'rocket';
					}
				}

				if(this.state.highlight == 'type') {
					switch(project.type) {
						case 'independent': return 'hourglass-end';
						case 'classroom':   return 'university';
						case 'matu':        return 'graduation-cap';
					}
				}

				return 'user';
			}.bind(this))();

			/**
			 * Apply all filters in an AND fashion and return as soon as it is false
			 */
			var used = (function() {
				/**
				 * Filter by year
				 */
				if(this.state.filter_years.indexOf(project.year) === -1) {
					return false;
				}

				/**
				 * Filter by age
				 */
				if(	project.age_category == 'kids'    && !this.state.filter_age_kids    ||
					project.age_category == 'juniors' && !this.state.filter_age_juniors ||
					project.age_category == 'seniors' && !this.state.filter_age_seniors
					) {
					return false;
				}

				/**
				 * Filter by category
				 */
				if(	project.category == 'audio-video'          && !this.state.filter_category_audio_video          ||
					project.category == 'web-words-games'      && !this.state.filter_category_web_words_games      ||
					project.category == 'installation-robotic' && !this.state.filter_category_installation_robotic
					) {
					return false;
				}

				/**
				 * Filter by type
				 * We display projects having a type of `null` only when the three checkboxes are checked
				 */
				if(	project.type == null && !(this.state.filter_type_independent && this.state.filter_type_classroom && this.state.filter_type_matu) ||
					project.type == 'independent' && !this.state.filter_type_independent ||
					project.type == 'classroom'   && !this.state.filter_type_classroom   ||
					project.type == 'matu'        && !this.state.filter_type_matu
					) {
					return false;
				}

				/**
				 * Filter by technology
				 */
				if(!this.state.filter_technologies_all &&
						// Check if at least one of the selected technologies is present for this project
						!this.state.filter_technologies.some(function(technology) {
							return project.technologies.indexOf(technology) !== -1;
						})
					) {
					return false;
				}

				/**
				 * In the cas of the `map` graph we have to remove projects with no residence coordinates (pre-2014 projects)
				 */
				if(this.state.graph == 'map' && project.members[0].residence == null) {
					return false;
				}

				return true;
			}.bind(this))();

			var left_pos = 0;
			var top_pos = 0;

			if(used) {
				switch(this.state.graph) {
					case 'map':
						top_pos  = (ch_boundaries.top - project.members[0].residence.lat)  * boundaries_factor.y;
						left_pos = (project.members[0].residence.lng - ch_boundaries.left) * boundaries_factor.x;
						break;
					case 'stack':
						// Each year has a certain number of columns, depending on the highlight choice
						// Here we try to find which of these columns is used
						var column_in_graph = (function() {
							switch(this.state.highlight) {
								case null:       return 1; // Use the middle column
								case 'age':      return ['kids', 'juniors', 'seniors'].indexOf(project.age_category);
								case 'category': return ['audio-video', 'web-words-games', 'installation-robotic'].indexOf(project.category);
								case 'type':     return ['independent', 'classroom', 'matu'].indexOf(project.type);
								default: console.error('No corresponding column found for ' + this.state.highlight);
							}
						}.bind(this))();

						var total_years = this.state.filter_years.length;
						var total_columns = 3; // Only case other than 3 is one, but as we indicate the 2nd column for it, it ends in the middle after all
						var current_block = this.state.filter_years.indexOf(project.year);
						var projects_per_column = this.state.highlight == null ? 2 : 1;
						var columns_spacing_in_percent = 1.6;

						left_pos = 100/total_years * current_block + 50/total_years;
						left_pos += (column_in_graph+2-total_columns) * columns_spacing_in_percent * projects_per_column; // Slide to the middle of corresponding column
						left_pos += ((stacked_used[project.year][column_in_graph] % projects_per_column) - (projects_per_column-1)/2) * columns_spacing_in_percent; // Slide to the correct project column inside the hightlight column

						top_pos = 90 - columns_spacing_in_percent * (Math.floor(stacked_used[project.year][column_in_graph] / projects_per_column) + 1);

						stacked_used[project.year][column_in_graph]++;
						break;
				}

				total_used++;
			} else {
				var unused_spacing = 1;
				var unused_by_line = 100/unused_spacing -1;
				top_pos = 100 - unused_spacing - unused_spacing * Math.floor(unused_posx / unused_by_line);
				left_pos = unused_spacing + unused_spacing * (unused_posx++ % unused_by_line);
			}

			var display_category = (function() {
				switch(project.category) {
					case 'audio-video':          return 'Audio/Video';
					case 'web-words-games':      return 'Web/Words/Games';
					case 'installation-robotic': return 'Installation/Robotic';
				}
			})();

			var display_type = (function() {
				switch(project.type) {
					case 'independent': return 'Independent Project';
					case 'classroom':   return 'Classroom Project';
					case 'matu':        return 'Matu Project';
				}
			})();

			var display_age = (function() {
				switch(project.age_category) {
					case 'kids':    return 'Kids (8-11)';
					case 'juniors': return 'Juniors (12-16)';
					case 'seniors': return 'Seniors (17-20)';
				}
			})();

			return React.createElement('span', {
				key: project.uid,
				className: 'project' +
						' age-' + project.age_category +
						' category-' + project.category +
						' type-' + project.type +
						' canton-' + (project.members[0].residence == null ? 'unknown' : project.members[0].residence.canton) +
						(used ? '' : ' unused') +
						(top_pos < 40 ? ' in-top-area' : ''), // used by the tooltip
				style: {
					top: top_pos + '%',
					left: left_pos + '%'
				}
			}, [
				React.createElement('i', {className: 'icon fa fa-' + icon}),
				React.createElement('div', {className: 'tooltip'}, [
					React.createElement('div', {
						className: 'image',
						style: {backgroundImage: 'url(' + project.cover_image + ')'}
					}),
					React.createElement('div', {className: 'details'}, [
						React.createElement('h3', {}, project.title),
						React.createElement('ul', {className: 'categories'}, [
							React.createElement('li', {}, display_category),
							React.createElement('li', {}, display_type),
							React.createElement('li', {}, display_age)
						]),
						React.createElement('div', {className: 'description'}, project.description),
						React.createElement('ul', {className: 'members'}, project.members.map(function(member) {
							return React.createElement('li', {},
								member.name +
								(member.role == null ? '' : (' (' + member.role + ')')) +
								(member.residence == null ? '' : (', ' + member.residence.town + ' (' + member.residence.canton + ')'))
							);
						})),
						React.createElement('ul', {className: 'technologies'}, project.technologies.map(function(technology) {
							return React.createElement('li', {}, technology);
						})),
						React.createElement('ul', {className: 'links'}, [
							React.createElement('li', {}, React.createElement('a', {href: project.url, target: '_blank'}, [
								React.createElement('i', {className: 'fa fa-bookmark'}),
								' Project on bugnplay.ch'
							])),
							project.links.map(function(link) {
								var title = (function() {
									switch(link.type) {
										case 'website': return 'Visit website';
										case 'video':   return 'View video';
										case 'audio':   return 'Listen audio';
										default: // includes case 'file':
											if(link.title != null) {
												return 'Document (' + link.title + ')';
											}
											return 'Additional document';
									}
								})();

								var icon = (function() {
									switch(link.type) {
										case 'website': return 'link';
										case 'video':   return 'film';
										case 'audio':   return 'music';
										default:        return 'file';
									}
								})();

								return React.createElement('li', {}, React.createElement('a', {href: link.url, target: '_blank'}, [
									React.createElement('i', {className: 'fa fa-' + icon}),
									' ' + title
								]));
							})
						])
					])
				])
			]);
		}.bind(this));

		var react_technologies_nodes = technologies.map(function(category) {
			return React.createElement('div', {className: 'filters-group'}, [
				React.createElement('h3', {}, category.category),
				React.createElement('ul', {}, category.items.map(function(technology) {
					return React.createElement('li', {}, React.createElement('label', {}, [
						React.createElement('input', {
							type: 'checkbox',
							checked: this.state.filter_technologies.indexOf(technology.slug) !== -1,
							onChange: function() {
								var item_index = this.state.filter_technologies.indexOf(technology.slug);
								var new_array = this.state.filter_technologies.slice();
								if(item_index === -1) {
									// If not in the list of selected technologies, push
									new_array.push(technology.slug);
								} else {
									// Otherwise, remove it
									new_array.splice(item_index, 1);
								}
								this.setState({filter_technologies: new_array});
							}.bind(this),
							disabled: this.state.filter_technologies_all}),
						' ' + technology.title,
						React.createElement('div', {className: 'tooltip'}, [
							React.createElement('p', {}, technology.description),
							technology.wiki == null ? '' : React.createElement('a', {href: technology.wiki, target: '_blank'}, [
								React.createElement('i', {className: 'fa fa-wikipedia-w'}),
								' Wiki'
							])
						])
					]));
				}.bind(this)))
			]);
		}.bind(this));

		return React.createElement('div', {className: 'explorer'}, [
			React.createElement('header', {}, [
				React.createElement('div', {className: 'brand'}, [
					React.createElement('h1', {}, [
						React.createElement('span', {className: 'bugnplay'}, 'bugnplay'),
						React.createElement('span', {className: 'appname'},  'explorer')
					]),
					React.createElement('p', {className: 'createdby'}, [
						'A project by ',
						React.createElement('a', {href: 'https://clarkwinkelmann.com/', target: '_blank'}, 'Clark Winkelmann')
					])
				]),
				React.createElement('nav', {className: 'tabs'}, [
					React.createElement('ul', {}, (
						[{
							slug: 'map',
							title: 'Map',
							icon: 'globe'
						}, {
							slug: 'stack',
							title: 'Stacked',
							icon: 'bar-chart'
						}].map(function(tab) {
							return React.createElement('li', {}, React.createElement('a', {
								className: this.state.graph == tab.slug ? 'active' : '',
								href: 'javascript:;',
								onClick: function() {
									this.setState({graph: tab.slug});
								}.bind(this)
							}, [
								React.createElement('i', {className: 'fa fa-' + tab.icon}),
								' ' + tab.title
							]));
						}.bind(this))
					))
				])
			]),
			React.createElement('div', {className: 'content'}, [
				React.createElement('div', {className: 'highlight-panel'}, [
					React.createElement('h2', {}, [
						React.createElement('i', {className: 'fa fa-binoculars'}),
						' Highlight'
					]),
					React.createElement('ul', {}, (
						[{
							slug: null,
							title: 'Just points'
						},{
							slug: 'age',
							title: 'Group by age'
						},{
							slug: 'category',
							title: 'Group by category'
						},{
							slug: 'type',
							title: 'Group by type'
						}].map(function(highlight) {
							return React.createElement('li', {}, React.createElement('label', {}, [
								React.createElement('input', {
									type: 'checkbox',
									checked: this.state.highlight == highlight.slug,
									onChange: function() {
										this.setState({highlight: highlight.slug});
									}.bind(this)
								}),
								' ' + highlight.title
							]));
						}.bind(this))
					))
				]),
				React.createElement('div', {className: 'main-panel'}, [
					( // Display a message if the map is used with incompatible years
						this.state.graph == 'map' && this.state.filter_years.some(function(year) { return year < 2014; }) ?
						React.createElement('div', {className: 'notice-panel'}, 'Only projects from 2014 onwards can be displayed on the map !') : ''
					),
					React.createElement('div', {
						className: 'graph-panel' +
								' graph-' + this.state.graph +
								(this.state.highlight == null ? '' : ' highlight-' + this.state.highlight)
					}, [
						react_projects_nodes,
						React.createElement('div', {}, total_used + '/' + this.state.projects.length + ' displayed'),
						React.createElement('ul', {className: 'legends age'}, [
							React.createElement('li', {}, [ React.createElement('i', {className: 'fa fa-user age-kids'}),    ' Kids']),
							React.createElement('li', {}, [ React.createElement('i', {className: 'fa fa-user age-juniors'}), ' Juniors']),
							React.createElement('li', {}, [ React.createElement('i', {className: 'fa fa-user age-seniors'}), ' Seniors'])
						]),
						React.createElement('ul', {className: 'legends category'}, [
							React.createElement('li', {}, [ React.createElement('i', {className: 'fa fa-film    category-audio-video'}),          ' Audio/Video']),
							React.createElement('li', {}, [ React.createElement('i', {className: 'fa fa-gamepad category-web-words-games'}),      ' Web/Words/Games']),
							React.createElement('li', {}, [ React.createElement('i', {className: 'fa fa-rocket  category-installation-robotic'}), ' Installation/Robotic'])
						]),
						React.createElement('ul', {className: 'legends type'}, [
							React.createElement('li', {}, [ React.createElement('i', {className: 'fa fa-hourglass-end type-independent'}), ' Independent']),
							React.createElement('li', {}, [ React.createElement('i', {className: 'fa fa-university type-classroom'}),      ' Classroom']),
							React.createElement('li', {}, [ React.createElement('i', {className: 'fa fa-graduation-cap type-matu'}),       ' Matu'])
						]),
						React.createElement('ul', {className: 'stacked-legends'}, this.state.filter_years.map(function(year) {
							return React.createElement('li', {}, year);
						})),
						React.createElement('div', {className: 'loading', style: {display: this.state.loading ? 'block' : 'none'}}, 'loading data...')
					]),
					React.createElement('div', {className: 'years-panel'},
						React.createElement('ul', {className: 'years-selector'}, years.map(function(year) {
							return React.createElement('li', {}, React.createElement('label', {}, [
								React.createElement('span', {}, year),
								React.createElement('input', {
									type: 'checkbox',
									checked: (this.state.filter_years.indexOf(year) !== -1),
									onChange: function() {
										var index = this.state.filter_years.indexOf(year);
										var new_array = this.state.filter_years.slice();
										if(index === -1) {
											// If not in the list of selected years, push it
											new_array.push(year);
											// Sort the new array so we can work on it without worrying about ordering the years
											new_array.sort();
										} else {
											// Otherwise, remove it
											new_array.splice(index, 1);
										}
										this.setState({filter_years: new_array});
									}.bind(this)
								})
							]));
						}.bind(this)))
					)
				]),
				React.createElement('div', {className: 'filter-panel'}, [
					React.createElement('h2', {}, [
						React.createElement('i', {className: 'fa fa-filter'}),
						' Filter'
					]),
					React.createElement('div', {className: 'filters-block'}, [
						React.createElement('div', {className: 'filters-group'}, [
							React.createElement('h3', {}, 'Age'),
							React.createElement('ul', {}, [
								React.createElement('li', {}, [
									React.createElement('label', {}, [
										React.createElement('input', {type: 'checkbox', checkedLink: this.linkState('filter_age_kids')}),
										' Kids'
									]),
									React.createElement('div', {className: 'tooltip'}, React.createElement('p', {}, '8-11 years old'))
								]),
								React.createElement('li', {}, [
									React.createElement('label', {}, [
										React.createElement('input', {type: 'checkbox', checkedLink: this.linkState('filter_age_juniors')}),
										' Juniors'
									]),
									React.createElement('div', {className: 'tooltip'}, React.createElement('p', {}, '12-16 years old'))
								]),
								React.createElement('li', {}, [
									React.createElement('label', {}, [
										React.createElement('input', {type: 'checkbox', checkedLink: this.linkState('filter_age_seniors')}),
										' Seniors'
									]),
									React.createElement('div', {className: 'tooltip'}, React.createElement('p', {}, '17-20 years old'))
								])
							])
						]),
						React.createElement('div', {className: 'filters-group'}, [
							React.createElement('h3', {}, 'Category'),
							React.createElement('ul', {}, [
								React.createElement('li', {}, React.createElement('label', {}, [
									React.createElement('input', {type: 'checkbox', checkedLink: this.linkState('filter_category_audio_video')}),
									' Audio/Video'
								])),
								React.createElement('li', {}, React.createElement('label', {}, [
									React.createElement('input', {type: 'checkbox', checkedLink: this.linkState('filter_category_web_words_games')}),
									' Web/Words/Games'
								])),
								React.createElement('li', {}, React.createElement('label', {}, [
									React.createElement('input', {type: 'checkbox', checkedLink: this.linkState('filter_category_installation_robotic')}),
									' Installation/Robotic'
								]))
							])
						]),
						React.createElement('div', {className: 'filters-group'}, [
							React.createElement('h3', {}, 'Type'),
							React.createElement('ul', {}, [
								React.createElement('li', {}, React.createElement('label', {}, [
									React.createElement('input', {type: 'checkbox', checkedLink: this.linkState('filter_type_independent')}),
									' Independent'
								])),
								React.createElement('li', {}, React.createElement('label', {}, [
									React.createElement('input', {type: 'checkbox', checkedLink: this.linkState('filter_type_classroom')}),
									' Classroom'
								])),
								React.createElement('li', {}, React.createElement('label', {}, [
									React.createElement('input', {type: 'checkbox', checkedLink: this.linkState('filter_type_matu')}),
									' Matu'
								]))
							])
						]),
						React.createElement('div', {className: 'filters-group'}, [
							React.createElement('h3', {}, 'Technologies'),
							React.createElement('ul', {}, [
								React.createElement('li', {}, [
									React.createElement('label', {}, [
										React.createElement('input', {type: 'checkbox', checkedLink: this.linkState('filter_technologies_all')}),
										' Any'
									]),
									React.createElement('div', {className: 'tooltip'}, React.createElement('p', {}, 'Click to pick which technologies to display'))
								])
							])
						])
					])
				]),
				React.createElement('div', {className: 'technologies-panel' + (this.state.filter_technologies_all ? ' hidden' : '')}, [
					React.createElement('h2', {}, [
						React.createElement('i', {className: 'fa fa-cogs'}),
						' Technologies'
					]),
					React.createElement('button', {
						onClick: function(){this.setState({filter_technologies_all: true});}.bind(this)
					}, [
						React.createElement('i', {className: 'fa fa-undo'}),
						' Back to any technology'
					]),
					React.createElement('button', {
						onClick: function(){this.setState({filter_technologies: []});}.bind(this)
					}, [
						React.createElement('i', {className: 'fa fa-eraser'}),
						' Untick everything'
					]),
					React.createElement('div', {className: 'filters-block'}, [
						react_technologies_nodes
					]),
					React.createElement('p', {}, 'Description of each technology comes from the linked Wikipedia article')
				])
			]),
			React.createElement('footer', {}, [
				React.createElement('div', {className: 'credit'}, [
					'This is an ',
					React.createElement('a', {href: 'https://github.com/clarkwinkelmann/bugnplay-explorer'}, 'open source'),
					' application created by ',
					React.createElement('a', {href: 'https://clarkwinkelmann.com/'}, 'Clark Winkelmann'),
					' for ',
					React.createElement('a', {href: 'http://www.bugnplay.ch/'}, 'bugnplay.ch 2016')
				]),
				React.createElement('div', {className: 'credit'}, [
					'The data has been crawled from ',
					React.createElement('a', {href: 'http://www.bugnplay.ch/'}, 'bugnplay.ch'),
					' with my ',
					React.createElement('a', {href: 'https://github.com/clarkwinkelmann/bugnplay-parser'}, 'bugnplay-parser')
				]),
				React.createElement('div', {className: 'credit'}, [
					'Postal geodata comes from ',
					React.createElement('a', {href: 'http://www.geonames.org/'}, 'GeoNames')
				]),
				React.createElement('div', {className: 'credit'}, [
					'Map is based on data from ',
					React.createElement('a', {href: 'http://www.openstreetmap.org/'}, 'OpenStreetMap')
				])
			])
		]);
	}
});
