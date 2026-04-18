function generatePresetIds(presets, charId) {
    // adds preset Ids in place
    for (let category of Object.values(presets)) {
        for (let group of category) {
            for (let preset of group) {
                if (!preset.name || !charId) throw new Error("Cannot generate preset ids. Name and charId required")
                preset.presetId = `${charId}-${preset.name.replaceAll(" ", "-")}`
            }
        }
    }
}


module.exports = {generatePresetIds}