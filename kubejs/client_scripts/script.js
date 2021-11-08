// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	event.hide('create:handheld_worldshaper')
	event.hide('create:creative_fluid_tank')
	event.hide('create:creative_crate')
	event.hide('create:creative_motor')
	event.hide('botania:lens_storm')//no hide in JEI
	event.hide('botania:mana_tablet')//no hide in JEI
	event.hide('botania:creative_pool')//no hide in JEI
	event.hide('botania:infrangible_platform')//no hide in JEI
	event.hide('mysticalagriculture:creative_soulium_dagger')
	event.hide('tconstruct:creative_slot')//no hide in JEI
	event.hide('tconstruct:copper_ore')
})