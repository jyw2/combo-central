const common = require("../../sf6-commonButtonVariants")
const { generatePresetIds } = require("../../../../utils/presetIdsUtil")

const preset = {
  "Command Normals": [
    [
      {
        name: "psycho hammer",
        input: [[
          {
            buttons: [["RB"]],
            command: ["6"],
          },
        ]],
      },
      {
        name: "evil knee",
        input: [[
          {
            buttons: [["RT"]],
            command: ["4"],
          },
        ]],
      },
      {
        name: "hover kick",
        input: [[
          {
            buttons: [["RT"]],
            command: ["3"],
          },
        ]],
      },
    ],
  ],
  "Target Combos": [
    [
      {
        name: "shadow hammer",
        input: [[
          {
            buttons: [["B"]],
            command: [""],
          },
        ], [
          {
            buttons: [["RB"]],
            command: ["6"],
          },
        ],
        ],
      },
      {
        name: "shadow spear",
        input: [[
          {
            buttons: [["B"]],
            command: [""],
          },
        ], [
          {
            buttons: [["RT"]],
            command: ["2"],
          },
        ],
        ],
      },
      {
        name: "hell attack",
        input: [[
          {
            buttons: [["B"]],
            command: [""],
          },
        ], [
          {
            buttons: [["B"]],
            command: [""],
          },
        ],
        ],
        playerState: ["jumping"]
      },
    ],
  ],
  Specials: [
    [
      {
        name: "light psycho crusher attack",
        input: [[
          {
            buttons: [["A"]],
            command: ["[4]6"],
          },
        ]],
      },
      {
        name: "medium psycho crusher attack",
        input: [[
          {
            buttons: [["B"]],
            command: ["[4]6"],
          },
        ]],
      },
      {
        name: "heavy psycho crusher attack",
        input: [[
          {
            buttons: [["RB"]],
            command: ["[4]6"],
          },
        ]],
      },
      {
        name: "overdrive psycho crusher attack",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["[4]6"],
          },
        ]],
      },

    ],
    [
      {
        name: "psycho mine light psycho crusher attack",
        input: [[
          {
            buttons: [["A"]],
            command: ["[4]6"],
          },
        ]],
        playerState: ["psycho mine"]
      },
      {
        name: "psycho mine medium psycho crusher attack",
        input: [[
          {
            buttons: [["B"]],
            command: ["[4]6"],
          },
        ]],
        playerState: ["psycho mine"]
      },
      {
        name: "psycho mine heavy psycho crusher attack",
        input: [[
          {
            buttons: [["RB"]],
            command: ["[4]6"],
          },
        ]],
        playerState: ["psycho mine"]
      },
      {
        name: "psycho mine overdrive psycho crusher attack",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["[4]6"],
          },
        ]],
        playerState: ["psycho mine"]
      },
    ],
    [
      {
        name: "light double knee press",
        input: [[
          {
            buttons: [["D"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "medium double knee press",
        input: [[
          {
            buttons: [["C"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "heavy double knee press",
        input: [[
          {
            buttons: [["RT"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive double knee press",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["236"],
          },
        ]],
      },
    ],
    [
      {
        name: "light psycho back fist combo",
        input: [[
          {
            buttons: [["A"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "medium psycho back fist combo",
        input: [[
          {
            buttons: [["B"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "heavy psycho back fist combo",
        input: [[
          {
            buttons: [["RB"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive psycho back fist combo",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["214"],
          },
        ]],
      },
    ],
    [
      {
        name: "psycho mine light back fist combo",
        input: [[
          {
            buttons: [["A"]],
            command: ["214"],
          },
        ]],
        playerState: ["psycho mine"]
      },
      {
        name: "psycho mine medium back fist combo",
        input: [[
          {
            buttons: [["B"]],
            command: ["214"],
          },
        ]],
        playerState: ["psycho mine"]
      },
      {
        name: "psycho mine heavy back fist combo",
        input: [[
          {
            buttons: [["RB"]],
            command: ["214"],
          },
        ]],
        playerState: ["psycho mine"]
      },
      {
        name: "psycho mine overdrive back fist combo",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["214"],
          },
        ]],
        playerState: ["psycho mine"]
      },
      {
        name: "psycho mine explosion",
        input: [[
          {
            buttons: [[]],
            command: [""],
          },
        ]],
        playerState: ["psycho mine"]
      },
    ],
    [
      {
        name: "light shadow rise",
        input: [[
          {
            buttons: [["D"]],
            command: ["[2]8"],
          },
        ]],
      },
      {
        name: "medium shadow rise",
        input: [[
          {
            buttons: [["C"]],
            command: ["[2]8"],
          },
        ]],
      },
      {
        name: "heavy shadow rise",
        input: [[
          {
            buttons: [["RT"]],
            command: ["[2]8"],
          },
        ]],
      },
      {
        name: "overdrive shadow rise",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["[2]8"],
          },
        ]],
      },
      {
        name: "head press",
        input: [[
          {
            buttons: common.anyKick,
            command: [""],
          },
        ]],
        dependencies: ["mbison-light-shadow-rise|mbison-medium-shadow-rise|mbison-heavy-shadow-rise|mbison-overdrive-shadow-rise"]
      },
      {
        name: "somersault skull diver",
        input: [[
          {
            buttons: common.anyPunch,
            command: [""],
          },
        ]],
        dependencies: ["mbison-head-press"]
      },
      {
        name: "air fall forward",
        input: [[
          {
            buttons: [[]],
            command: ["6"],
          },
        ]],
        dependencies: ["mbison-head-press|mbison-devil-reverse|mbison-overdrive-head-press|mbison-overdrive-devil-reverse"]
      },
      {
        name: "air fall backwards",
        input: [[
          {
            buttons: [[]],
            command: ["4"],
          },
        ]],
        dependencies: ["mbison-head-press|mbison-devil-reverse|mbison-overdrive-head-press|mbison-overdrive-devil-reverse"]
      },
      {
        name: "devil reverse",
        input: [[
          {
            buttons: common.anyPunch,
            command: [""],
          },
        ]],
        dependencies: ["mbison-light-shadow-rise|mbison-medium-shadow-rise|mbison-heavy-shadow-rise|mbison-overdrive-shadow-rise"]
      },
      {
        name: "overdrive head press",
        input: [[
          {
            buttons: common.any2Kicks,
            command: [""],
          },
        ]],
        dependencies: ["mbison-light-shadow-rise|mbison-medium-shadow-rise|mbison-heavy-shadow-rise"]
      },
      {
        name: "overdrive devil reverse",
        input: [[
          {
            buttons: common.any2Punches,
            command: [""],
          },
        ]],
        dependencies: ["mbison-light-shadow-rise|mbison-medium-shadow-rise|mbison-heavy-shadow-rise"]
      },
    ],
  ],
  "Super Arts": [
    [
      {
        name: "knee press nightmare",
        input: [[
          {
            buttons: common.anyKick,
            command: ["236236"],
          },
        ]],
      },
      {
        name: "psycho punisher",
        input: [[
          {
            buttons: common.anyKick,
            command: ["214214"],
          },
        ]],
      },
      {
        name: "unlimited psycho crusher",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["236236"],
          },
        ]],
      },
    ],
  ],
};

generatePresetIds(preset, "mbison")
module.exports = { preset };