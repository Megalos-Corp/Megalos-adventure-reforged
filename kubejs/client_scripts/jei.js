// Cacher des items dans JEI
onEvent('jei.hide.items', event => {
    // Remove Kubejs item
    event.hide([
        'kubejs:dummy_fluid_item'
        ])
    // Remove duplicated rope
    event.hide([
        'supplementaries:rope',
        'quark:rope',
        'druidcraft:rope'
    ])
    // Remove crate in furnish mod
    event.hide([
        'furnish:oak_crate',
        'furnish:birch_crate',
        'furnish:acacia_crate',
        'furnish:jungle_crate',
        'furnish:dark_oak_crate',
        'furnish:spruce_crate'
    ])
    // Remove create dough
    event.hide([
        'create:dough'
    ])
    // Remove supplementaries firefly jar for dupli
    event.hide([
        'supplementaries:firefly_jar'
    ])
    //Remove stuffs/weapons too high level
    event.hide([
        'create_stuff_additions:rose_quartz_sword',
        'create_stuff_additions:rose_quartz_pickaxe',
        'create_stuff_additions:rose_quartz_axe',
        'create_stuff_additions:rose_quartz_shovel',
        'create_stuff_additions:blazing_cleaver',
        'create_stuff_additions:blazing_pickaxe',
        'create_stuff_additions:blazing_axe',
        'create_stuff_additions:blazing_shovel'
    ]) 
    // Remove neptunium stuffs recipe
    event.hide([
        'aquaculture:neptunium_nugget',
        'aquaculture:neptunium_ingot',
        'aquaculture:neptunium_block',
        'aquaculture:neptunium_helmet',
        'aquaculture:neptunium_chestplate',
        'aquaculture:neptunium_leggings',
        'aquaculture:neptunium_boots',
        'aquaculture:neptunium_bow',
        'aquaculture:neptunium_sword',
        'aquaculture:neptunium_hoe',
        'aquaculture:neptunium_axe',
        'aquaculture:neptunium_shovel',
        'aquaculture:neptunium_pickaxe',
        'aquaculture:neptunium_fishing_rod',
        'aquaculture:neptunium_fillet_knife',
        'aquaculture:neptunes_bounty',
        ])
    // Suppression des bedrolls de druidcraft et du traveler Backpack
    event.hide([
        'druidcraft:white_bedroll',
        'druidcraft:orange_bedroll',
        'druidcraft:magenta_bedroll',
        'druidcraft:light_blue_bedroll',
        'druidcraft:yellow_bedroll',
        'druidcraft:lime_bedroll',
        'druidcraft:pink_bedroll',
        'druidcraft:gray_bedroll',
        'druidcraft:light_gray_bedroll',
        'druidcraft:cyan_bedroll',
        'druidcraft:purple_bedroll',
        'druidcraft:blue_bedroll',
        'druidcraft:brown_bedroll',
        'druidcraft:green_bedroll',
        'druidcraft:red_bedroll',
        'druidcraft:black_bedroll',
        'druidcraft:travel_pack'
    ]) 
    // Suppression des objets désactivés de Quark
    event.hide([
        'quark:flamerang',
        'quark:pickarang',
        'quark:dragon_scale',
        'quark:chute',
        'quark:pipe',
        'quark:diamond_heart',
        'quark:white_candle',
        'quark:orange_candle',
        'quark:magenta_candle',
        'quark:light_blue_candle',
        'quark:yellow_candle',
        'quark:lime_candle',
        'quark:pink_candle',
        'quark:gray_candle',
        'quark:light_gray_candle',
        'quark:cyan_candle',
        'quark:purple_candle',
        'quark:blue_candle',
        'quark:brown_candle',
        'quark:green_candle',
        'quark:red_candle',
        'quark:black_candle'
    ]) 
    //Remove supplementaries in JEI
    event.hide([
        'supplementaries:pancake'
    ])
    //Remove vehicles of create stuff additions in JEI
    event.hide([
        'create_stuff_additions:brass_moped_item',
        'create_stuff_additions:tuned_brass_moped_item',
        'create_stuff_additions:brass_portable_drill',
        'create_stuff_additions:blaze_flame_thrower'
    ])
    //Remove duplicate Quark crates.
    event.hide([
        'quark:beetroot_crate',
        'quark:potato_crate',
        'quark:carrot_crate'
    ])
    //Hide zinc sheet of Create deco
    event.hide([
        'createdeco:zinc_sheet'
    ])
    //Hide usefulslime:slippery_slime_block
    event.hide([
        'usefulslime:slippery_slime_block'
    ])
    //Hide Mowzies Mobs Thatch
    event.hide([
        'mowziesmobs:thatch_block'
    ])
    //Hide Mud of Druidcraft
    event.hide([
        'druidcraft:wet_mud_bricks',
        'druidcraft:dry_mud_bricks',
        'druidcraft:dry_mud_brick_stairs',
        'druidcraft:dry_mud_brick_slab',
        'druidcraft:dry_mud_brick_wall'
    ])
    // Hide duplicate honey apple
    event.hide([
        'buzzier_bees:honey_apple'
    ])
    //Hide Environmental Apple pie
    event.hide([
        'environmental:apple_pie'
    ])
})