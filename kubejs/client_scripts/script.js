// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	event.hide('mcwfences:oak_wired_fence')
	event.hide('mcwfences:spruce_wired_fence')
	event.hide('mcwfences:birch_wired_fence')
	event.hide('mcwfences:jungle_wired_fence')
	event.hide('mcwfences:acacia_wired_fence')
	event.hide('mcwfences:dark_oak_wired_fence')
	event.hide('mcwfences:crimson_wired_fence')
	event.hide('mcwfences:warped_wired_fence')
	event.hide('create:handheld_worldshaper')
	event.hide('create:creative_fluid_tank')
	event.hide('create:creative_crate')
	event.hide('create:creative_motor')
	event.hide('botania:lens_storm')//no hide
	event.hide('botania:mana_tablet')//no hide
	event.hide('botania:creative_pool')//no hide
	event.hide('botania:infrangible_platform')//no hide
	event.hide('mysticalagriculture:creative_soulium_dagger')
	event.hide('tconstruct:creative_slot')//no hide
})