console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
	//suppression des recettes de la corde pour unifier les items. 
	event.remove({id: 'supplementaries:rope'})
	event.remove({id: 'environmental:misc/yak/rope'})
	event.remove({id: 'farmersdelight:rope'})
	event.remove({id: 'quark:building/crafting/rope'})
	// Unification du craft des cordes
	//event.remove({id: 'farmersdelight:rope'})
	event.shaped('3x farmersdelight:rope', [
		' S ',
		' S ',
		' S '
	  ], {
		S: '#mgls:rope'
	  })
	// Suppression des craft de base du pain vanilla
	event.remove({id: 'quark:tweaks/crafting/utility/bent/bread'})
	event.remove({id: 'minecraft:bread'})
	//Unification de la pates à pain
	event.remove({id: 'farmersdelight:wheat_dough'})
	event.remove({id: 'create:crafting/appliances/dough'})
	// Suppression du craft de base du riz
	event.remove({id: 'farmersdelight:rice'})
	// Suppression des craft de "Crate" furnish mod
	event.remove({id: 'furnish:furniture_making/oak_crate'})
	event.remove({id: 'furnish:furniture_making/birch_crate'})
	event.remove({id: 'furnish:furniture_making/spruce_crate'})
	event.remove({id: 'furnish:furniture_making/acacia_crate'})
	event.remove({id: 'furnish:furniture_making/jungle_crate'})
	event.remove({id: 'furnish:furniture_making/dark_oak_crate'})

	// Suppression du firefly jar de supplementaries
	event.remove({id: 'supplementaries:firefly_jar_tf'})
	event.remove({id: 'supplementaries:firefly_jar'})
	//Supression du stuff non rp create stuf and addition
	event.remove({id: 'create_stuff_additions:blazing_sword_recipe'})
	event.remove({id: 'create_stuff_additions:blazing_axe_recipe'})
	event.remove({id: 'create_stuff_additions:blazing_pickaxe_recipe'})
	event.remove({id: 'create_stuff_additions:blazing_shovel_recipe'})
	event.remove({id: 'create_stuff_additions:rose_quartz_sword_recipe'})
	event.remove({id: 'create_stuff_additions:rose_quartz_axe_recipe'})
	event.remove({id: 'create_stuff_additions:rose_quartz_pickaxe_recipe'})
	event.remove({id: 'create_stuff_additions:rose_quartz_shovel_recipe'})
	//Unification des bedroll / Suppression des bedrolls de druidcraft
	event.remove({id: 'druidcraft:white_bedroll'})
	event.remove({id: 'druidcraft:orange_bedroll'})
	event.remove({id: 'druidcraft:magenta_bedroll'})
	event.remove({id: 'druidcraft:light_blue_bedroll'})
	event.remove({id: 'druidcraft:yellow_bedroll'})
	event.remove({id: 'druidcraft:lime_bedroll'})
	event.remove({id: 'druidcraft:pink_bedroll'})
	event.remove({id: 'druidcraft:gray_bedroll'})
	event.remove({id: 'druidcraft:light_gray_bedroll'})
	event.remove({id: 'druidcraft:cyan_bedroll'})
	event.remove({id: 'druidcraft:purple_bedroll'})
	event.remove({id: 'druidcraft:blue_bedroll'})
	event.remove({id: 'druidcraft:brown_bedroll'})
	event.remove({id: 'druidcraft:green_bedroll'})
	event.remove({id: 'druidcraft:red_bedroll'})
	event.remove({id: 'druidcraft:black_bedroll'})

})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})