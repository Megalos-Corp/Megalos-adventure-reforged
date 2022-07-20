console.info('Hello, World! (You will see this line every time server resources reload)')
onEvent('player.chat', (event) => {
	if (event.message.trim().equalsIgnoreCase('!version')) {
	  event.server.scheduleInTicks(1, event.server, (callback) => {
		callback.data.tell(Text.green('version Beta Pre Release 2'))
	  })
	}
  })
  onEvent('player.chat', (event) => {
	if (event.message.trim().equalsIgnoreCase('!report')) {
	  event.server.scheduleInTicks(1, event.server, (callback) => {
		callback.data.tell(Text.gold('-> Report Bug <-').click('https://forms.office.com/r/aUMeCBvTCM')) 
	  })
	}
  })
onEvent('recipes', event => {
	// Change recipes here
	//suppression des recettes de la corde pour unifier les items. 
	event.remove({id: 'supplementaries:rope'})
	event.remove({id: 'environmental:misc/yak/rope'})
	event.remove({id: 'farmersdelight:rope'})
	event.remove({id: 'quark:building/crafting/rope'})
	event.remove({id: 'druidcraft:rope'})
	event.remove({id: 'druidcraft:lead'})
	// Unification du craft des cordes
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
	event.remove({id: 'create:smelting/bread'})
	event.remove({id: 'create:smoking/bread'})

	//Unification de la pates à pain
	event.remove({id: 'farmersdelight:wheat_dough'})
	event.remove({id: 'create:crafting/appliances/dough'})
	event.remove({id: 'quark:tweaks/crafting/utility/bent/bread'})

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
	//Remove supplementaries pancake
	event.remove({id: 'supplementaries:pancake'})
	// Remove Traveler Backpack
	event.remove({id: 'druidcraft:travel_pack'})
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
	event.remove({id: 'druidcraft:cyan_bedroll'})
	event.remove({id: 'druidcraft:green_bedroll'})
	event.remove({id: 'druidcraft:red_bedroll'})
	event.remove({id: 'druidcraft:black_bedroll'})
	//Remove buddycards card recipe with neptunium nuggets
	event.remove({id: 'buddycards:aquaculture/aquaculture_pack'})
	//Remove basic recipes for farmers delight juices
	event.remove({id: 'farmersdelight:melon_juice'})
	event.remove({id: 'farmersdelight:apple_cider'})
	//Remove recipe vehicles of create stuff additions
	event.remove({id: 'create_stuff_additions:brass_moped_recipe'})
	event.remove({id: 'create_stuff_additions:tuned_brass_moped_recipe'})
	event.remove({id: 'create_stuff_additions:bras_portable_drill'})
	event.remove({id: 'create_stuff_additions:blaze_flame_thrower_recipe'})
	//Remove duplicate Quark crates.
	event.remove({id: 'quark:building/crafting/compressed/beetroot_crate'})
	event.remove({id: 'quark:building/crafting/compressed/potato_crate'})
	event.remove({id: 'quark:building/crafting/compressed/carrot_crate'})
	event.remove({id: 'minecraft:pressing/zinc_sheet'})
	//Remove usefulslime:slippery_slime_block
	event.remove({id: 'usefulslime:slippery_slime_block'})
	//Remove Thatch from Mowzies Mobs
	event.remove({id: 'mowziesmobs:thatch_block'})
	//Remove mud of druidcraft
	event.remove({id: 'druidcraft:wet_mud_bricks'})
	event.remove({id: 'druidcraft:dry_mud_bricks'})
	event.remove({id: 'druidcraft:dry_mud_brick_stairs'})
	event.remove({id: 'druidcraft:dry_mud_brick_stairs_from_dry_mud_bricks_stonecutting'})
	event.remove({id: 'druidcraft:dry_mud_brick_slab'})
	event.remove({id: 'druidcraft:dry_mud_brick_slab_from_dry_mud_bricks_stonecutting'})
	event.remove({id: 'druidcraft:dry_mud_brick_wall'})
	event.remove({id: 'druidcraft:dry_mud_brick_wall_from_dry_mud_bricks_stonecutting'})
	//Remove juice recipe crafting with kettle
	event.remove({id: 'farmersrespite:brewing/melon_juice'})
	//Remove basic craft for gooseberries and gooseberries jam 
	event.remove({id: 'bayou_blues:crafting/gooseberry_jam_from_juice'})
	event.remove({id: 'bayou_blues:crafting/gooseberry_jam'})
	event.remove({id: 'bayou_blues:crafting/gooseberry_juice'})
	// Remove duplicate honey apple
	event.remove({id: 'buzzier_bees:honey/honey_apple'})

})