// Cacher des items dans JEI
onEvent('jei.hide.items', event => {

    // Suppression des corde non utile
    event.hide([
        'supplementaries:rope',
        'quark:rope',
        'druidcraft:rope'
    ])
    // Suppression des crate furnish mod
    event.hide([
        'furnish:oak_crate',
        'furnish:birch_crate',
        'furnish:acacia_crate',
        'furnish:jungle_crate',
        'furnish:dark_oak_crate',
        'furnish:spruce_crate'
    ])
    // Suppression de la pâte a pain de create
    event.hide([
        'create:dough'
    ])
    // Suppression du firefly jar de supplementaries
    event.hide([
        'supplementaries:firefly_jar'
    ])
    //Suppression des stuff non rp de jei create stuff addition
    event.hide([
        'create_stuff_additions:rose_quartz_sword'
    ]) 
    event.hide([
        'create_stuff_additions:rose_quartz_pickaxe'
    ]) 
    event.hide([
        'create_stuff_additions:rose_quartz_axe'
    ]) 
    event.hide([
        'create_stuff_additions:rose_quartz_shovel'
    ]) 
    event.hide([
        'create_stuff_additions:blazing_cleaver'
    ]) 
    event.hide([
        'create_stuff_additions:blazing_pickaxe'
    ]) 
    event.hide([
        'create_stuff_additions:blazing_axe'
    ]) 
    event.hide([
        'create_stuff_additions:blazing_shovel'
    ]) 
    //Unification des bedroll / Suppression des bedrolls de druidcraft
    event.hide([
        'druidcraft:white_bedroll'
    ]) 
    event.hide([
        'druidcraft:orange_bedroll'
    ]) 
    event.hide([
        'druidcraft:magenta_bedroll'
    ]) 
    event.hide([
        'druidcraft:light_blue_bedroll'
    ]) 
    event.hide([
        'druidcraft:yellow_bedroll'
    ]) 
    event.hide([
        'druidcraft:lime_bedroll'
    ]) 
    event.hide([
        'druidcraft:pink_bedroll'
    ]) 
    event.hide([
        'druidcraft:gray_bedroll'
    ]) 
    event.hide([
        'druidcraft:light_gray_bedroll'
    ]) 
    event.hide([
        'druidcraft:cyan_bedroll'
    ]) 
    event.hide([
        'druidcraft:purple_bedroll'
    ]) 
    event.hide([
        'druidcraft:blue_bedroll'
    ]) 
    event.hide([
        'druidcraft:brown_bedroll'
    ]) 
    event.hide([
        'druidcraft:green_bedroll'
    ]) 
    event.hide([
        'druidcraft:red_bedroll'
    ]) 
    event.hide([
        'druidcraft:black_bedroll'
    ]) 
  
})