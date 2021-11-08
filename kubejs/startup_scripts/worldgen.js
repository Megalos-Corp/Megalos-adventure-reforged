onEvent('worldgen.remove', event => {
  event.removeOres(ores => {
    ores.blocks = [ 'tconstruct:copper_ore'] // Removes tconstruct copper ore in world gen
  })
})