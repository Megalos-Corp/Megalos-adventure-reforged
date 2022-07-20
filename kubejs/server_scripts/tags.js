//ITEM TAGS
onEvent('item.tags', event => {

    //Create Tag for rope ingredient
    event.add('mgls:rope', ['farmersdelight:straw', 'supplementaries:flax', 'environmental:yak_hair', 'druidcraft:hemp'])
    // Remove hidden rope for supplementaries tag
    event.remove('supplementaries:ropes', ['druidcraft:rope', 'supplementaries:rope', 'quark:rope'])
    // Add Music Disc of Megalos ressource to minecraft:music_discs tag
    event.remove('minecraft:music_discs', ['megalos_adventure:diggy_hole_disc', 'megalos_adventure:thune_disc', 'megalos_adventure:halloween_disc', 'megalos_adventure:escape_disc', 'megalos_adventure:ffvi_race_theme_disc', 'megalos_adventure:ffvi_electric_chocobo_disc'])
    event.remove('minecraft:creeper_drop_music_discs', ['megalos_adventure:diggy_hole_disc', 'megalos_adventure:thune_disc', 'megalos_adventure:halloween_disc', 'megalos_adventure:escape_disc', 'megalos_adventure:ffvi_race_theme_disc', 'megalos_adventure:ffvi_electric_chocobo_disc'])
    //Add Milk bottle of Neapolitan to forge:milk/milk_bottle tag
    event.add('forge:milk/milk_bottle', 'neapolitan:milk_bottle')
    event.add('forge:rollmatout/bottle_foods', 'neapolitan:milk_bottle')
    // Add new Knife for farmer's delight
    event.add('farmersdelight:tools/knives', ['megalos_adventure:copper_knife', 'megalos_adventure:zinc_knife', 'megalos_adventure:brass_knife', 'megalos_adventure:lead_knife'])
    event.add('forge:tools/knives', ['megalos_adventure:copper_knife', 'megalos_adventure:zinc_knife', 'megalos_adventure:brass_knife', 'megalos_adventure:lead_knife'])
    // Season tags for seeds
    event.add('sereneseasons:spring_crops', ['neapolitan:strawberry_pips', 'culturaldelights:eggplant_seeds', 'farmersrespite:tea_seeds', 'culturaldelights:corn_kernels', 'druidcraft:blueberries', 'chococraft:gysahl_green_seeds'])
    event.add( 'sereneseasons:autumn_crops', ['culturaldelights:cucumber_seeds', 'culturaldelights:white_eggplant_seeds','culturaldelights:eggplant_seeds', 'autumnity:foul_berries', 'chococraft:gysahl_green_seeds'])
    event.add('sereneseasons:summer_crops', ['neapolitan:strawberry_pips', 'farmersrespite:tea_seeds', 'culturaldelights:corn_kernels', 'druidcraft:hemp_seeds', 'chococraft:gysahl_green_seeds'])
    event.add('sereneseasons:winter_crops', ['culturaldelights:cucumber_seeds', 'culturaldelights:white_eggplant_seeds', 'druidcraft:blueberries'])
    // Tag for Immovable blocks
    event.add('forge:immovable', 'minecraft:spawner')
    // Add zinc sheet in forge plate tag
    event.add('forge:plates/zinc', 'createdeco:zinc_sheet')
    //Add leather chocobo in forge leather tag
    event.add('forge:feathers', 'chococraft:chocobo_feather')
    //Create woodland fruits tag
    event.add('mgls:woodland_fruits', ['neapolitan:strawberries', 'minecraft:sweet_berries', 'autumnity:foul_berries', 'druidcraft:blueberries'])
    // Add chest to quark:revertable_chest
    event.add('quark:revertable_chest', ['bamboo_blocks:bamboo_chest', 'upgrade_aquatic:driftwood_chest', 'upgrade_aquatic:river_chest', 'bayou_blues:cypress_chest', 'endergetic:poise_chest', 'prehistoricfauna:metasequoia_chest', 'prehistoricfauna:araucaria_chest', 'prehistoricfauna:liriodendrites_chest', 'prehistoricfauna:zamites_chest', 'prehistoricfauna:protopiceoxylon_chest', 'prehistoricfauna:protojuniperoxylon_chest', 'prehistoricfauna:heidiphyllum_chest'])
    // unificate apple
    event.add('mgls:apple_fruits', ['minecraft:apple', 'byg:green_apple'])
  })