const common = require("../../sf6-commonButtonVariants")


const { generatePresetIds } = require("../../../../utils/presetIdsUtil")

const preset = {
  "Command Normals": [
    [
      {
        name: "harai kick",
        input: [[
          {
            buttons: [["RT"]],
            command: ["6"],
          },
        ]],
      },
      {
        name: "power stomp",
        input: [[
          {
            buttons: [["RT"]],
            command: ["3"],
          },
        ]],
      },
      {
        name: "flying sumo press",
        input: [[
          {
            buttons: [["C"]],
            command: ["2"],
          },
        ]],
      },
    ]
  ],
  "Target Combos": [
    [
      {
        name: "double slaps",
        input: [[
          {
            buttons: [["A"]],
            command: [""],
          },
        ], [
          {
            buttons: [["B"]],
            command: [""],
          },
        ]],
      },
      {
        name: "toko shizume",
        input: [[
          {
            buttons: [["B"]],
            command: [""],
          },
        ], [
          {
            buttons: [["RT"]],
            command: ["3"],
          },
        ],],
      },
    ],
  ],
  Specials: [
    [
      {
        name: "sumo spirit",
        input: [[
          {
            buttons: common.anyKick,
            command: ["22"],
          },
        ]],
      },
      {
        name: "sumo spirit light hundred hand slap",
        input: [[
          {
            buttons: [["A"]],
            command: ["214"],
          },
        ]],
        playerState: ["sumo spirit"]
      },
      {
        name: "sumo spirit medium hundred hand slap",
        input: [[
          {
            buttons: [["B"]],
            command: ["214"],
          },
        ]],
        playerState: ["sumo spirit"]
      },
      {
        name: "sumo spirit heavy hundred hand slap",
        input: [[
          {
            buttons: [["RB"]],
            command: ["214"],
          },
        ]],
        playerState: ["sumo spirit"]
      },
      {
        name: "sumo spirit overdrive hundred hand slap",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["214"],
          },
        ]],
        playerState: ["sumo spirit"]
      },
    ],
    [
      {
        name: "light hundred hand slap",
        input: [[
          {
            buttons: [["A"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "medium hundred hand slap",
        input: [[
          {
            buttons: [["B"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "heavy hundred hand slap",
        input: [[
          {
            buttons: [["RB"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive hundred hand slap",
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
        name: "light sumo headbutt",
        input: [[
          {
            buttons: [["A"]],
            command: ["[4]6"],
          },
        ]],
      },
      {
        name: "medium sumo headbutt",
        input: [[
          {
            buttons: [["B"]],
            command: ["[4]6"],
          },
        ]],
      },
      {
        name: "heavy sumo headbutt",
        input: [[
          {
            buttons: [["RB"]],
            command: ["[4]6"],
          },
        ]],
      },
      {
        name: "overdrive sumo headbutt",
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
        name: "light sumo smash",
        input: [[
          {
            buttons: [["D"]],
            command: ["[2]8"],
          },
        ]],
      },
      {
        name: "medium sumo smash",
        input: [[
          {
            buttons: [["C"]],
            command: ["[2]8"],
          },
        ]],
      },
      {
        name: "heavy sumo smash",
        input: [[
          {
            buttons: [["RT"]],
            command: ["[2]8"],
          },
        ]],
      },
      {
        name: "overdrive sumo smash",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["[2]8"],
          },
        ]],
      },
    ],
    [
      {
        name: "light oicho throw",
        input: [[
          {
            buttons: [["D"]],
            command: ["63214"],
          },
        ]],
      },
      {
        name: "medium oicho throw",
        input: [[
          {
            buttons: [["C"]],
            command: ["63214"],
          },
        ]],
      },
      {
        name: "heavy oicho throw",
        input: [[
          {
            buttons: [["RT"]],
            command: ["63214"],
          },
        ]],
      },
      {
        name: "overdrive oicho throw",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["63214"],
          },
        ]],
      },
    ],
    [
      {
        name: "sumo dash",
        input: [[
          {
            buttons: common.anyKick,
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive sumo dash",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["236"],
          },
        ]],
      },
      {
        name: "teppo triple slap 1",
        input: [[
          {
            buttons: common.anyPunch,
            command: [""],
          },
        ]],
        dependencies: ["ehonda-overdrive-sumo-dash|ehonda-sumo-dash"]
      },
      {
        name: "teppo triple slap 2",
        input: [[
          {
            buttons: common.anyPunch,
            command: [""],
          },
        ]],
        dependencies: ["ehonda-teppo-triple-slap-1"]
      },
      {
        name: "taiho cannon lift",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["2"],
          },
        ]],
        dependencies: ["ehonda-overdrive-sumo-dash|ehonda-sumo-dash"]
      },
    ],
    [{
      name: "neko damashi",
      input: [[
        {
          buttons: common.anyPunch,
          command: ["22"],
        },
      ]],
    },]
  ],
  "Super Arts": [
    [
      {
        name: "show of force",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["236236"],
          },
        ]],
      },
      {
        name: "ultimate killer head ram",
        input: [[
          {
            buttons: common.anyKick,
            command: ["[4]646"],
          },
        ]],
      },
      {
        name: "the final bout",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["214214"],
          },
        ]],
      },
    ],
  ],
};
generatePresetIds(preset, "ehonda")

module.exports = { preset };
