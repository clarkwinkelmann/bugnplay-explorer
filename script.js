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
	}/*,{
		slug: 'aaaaaaa',
		title: 'aaaaaaaa',
		description: 'aaaaaaa',
		wiki: 'aaaaaaa'
	}*/]
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
				this.setState({projects: projects});
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
		var map_height = 80; // %

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
						var columns_spacing_in_percent = 2;

						left_pos = 100/total_years * current_block + 50/total_years;
						left_pos += (column_in_graph+2-total_columns) * columns_spacing_in_percent * projects_per_column; // Slide to the middle of corresponding column
						left_pos += ((stacked_used[project.year][column_in_graph] % projects_per_column) - (projects_per_column-1)/2) * columns_spacing_in_percent; // Slide to the correct project column inside the hightlight column

						top_pos = 80 - 2 * Math.floor(stacked_used[project.year][column_in_graph] / (projects_per_column + 1));

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
								React.createElement('i', {className: 'icon fa fa-bookmark'}),
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
									React.createElement('i', {className: 'icon fa fa-' + icon}),
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
							technology.wiki == null ? '' : React.createElement('a', {href: technology.wiki, target: '_blank'}, 'Wiki')
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
						}))
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
								React.createElement('li', {}, React.createElement('label', {}, [
									React.createElement('input', {type: 'checkbox', checkedLink: this.linkState('filter_technologies_all')}),
									' Any'
								]))
							])
						])
					])
				]),
				React.createElement('div', {className: 'technologies-panel' + (this.state.filter_technologies_all ? ' hidden' : '')}, [
					React.createElement('h2', {}, [
						React.createElement('i', {className: 'fa fa-cogs'}),
						' Technologies'
					]),
					React.createElement('div', {className: 'filters-block'}, [
						react_technologies_nodes
					])
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
