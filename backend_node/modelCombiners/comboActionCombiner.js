const fs = require("fs");
const { envId: env } = require("../../frontend/src/env");

class ComboActionCombiner {
  constructor() {
    this.presets = {};
    fs.readdirSync(`./envs/env-${env}/actionPresets/charPresets`).forEach((file) => {
      const { preset } = require(`../envs/env-${env}/actionPresets/charPresets/${file}`);
      this.presets[file.replace(".js", "")] = preset;
      if (!preset) console.log(file, preset)
    });

    const { preset } = require(`../envs/env-${env}/actionPresets/${env}-universal.js`);
    this.universalPresets = preset;
    this.validatePresetIds()
  }

  validatePresetIds() {
    const history = new Set()
    for (let presetSet of Object.values(this.presets)) {
      for (let category of Object.values(presetSet)) {
        for (let group of category) {
          for (let preset of group) {
            if (history.has(preset.presetId)) throw new Error(`Presets have a duplicate id: ${preset.presetId}`)

            history.add(preset.presetId)
          }
        }
      }
    }
  }

  getValidCharIds() {
    return Object.keys(this.presets)
  }

  getCombinedPresetsForChar(charId) {
    return { ...this.presets[charId], ...this.universalPresets };
  }

  getFlatPresetIdsSetForChar(charId) {
    const ids = new Set()
    const actions = Object.values({
      ...this.presets[charId],
      ...this.universalPresets,
    })
      .flat()
      .flat().forEach((p) => ids.add(p.presetId));

    return ids;
  }

  getNamesAndIdsForChar(charId) {
    const actions = Object.values({
      ...this.presets[charId],
      ...this.universalPresets,
    })
      .flat()
      .flat()
      .map((a) => { return { name: a.name, id: a.presetId } });

    return actions;
  }
}

module.exports = { ComboActionCombiner };
