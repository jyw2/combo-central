const common = require("../../sf6-commonButtonVariants")


const { generatePresetIds } = require("../../../../utils/presetIdsUtil")

const preset = {
  "Command Normals": [
    [
      {
        name: "yoga uppercut",
        input: [[
          {
            buttons: [["B"]],
            command: ["4"],
          },
        ]],
      },
      {
        name: "yoga lance",
        input: [[
          {
            buttons: [["RB"]],
            command: ["4"],
          },
        ]],
      },
      {
        name: "divine kick",
        input: [[
          {
            buttons: [["C"]],
            command: ["4"],
          },
        ]],
      },
      {
        name: "yoga mountain",
        input: [[
          {
            buttons: [["RT"]],
            command: ["4"],
          },
        ]],
      },
      {
        name: "nirvana punch",
        input: [[
          {
            buttons: [["RB"]],
            command: ["1"],
          },
        ]],
      },
      {
        name: "agile kick",
        input: [[
          {
            buttons: [["D"]],
            command: ["1"],
          },
        ]],
      },
      {
        name: "thrust kick",
        input: [[
          {
            buttons: [["C"]],
            command: ["1"],
          },
        ]],
      },
      {
        name: "karma kick",
        input: [[
          {
            buttons: [["RT"]],
            command: ["1"],
          },
        ]],
      },
    ], [
      {
        name: "yoga mummy",
        input: [[
          {
            buttons: [["A"]],
            command: ["2"],
          },
        ]],
        playerState: ["jumping"]
      },
      {
        name: "light drill kick",
        input: [[
          {
            buttons: [["D"]],
            command: ["2"],
          },
        ]],
        playerState: ["jumping"]
      },
      {
        name: "medium drill kick",
        input: [[
          {
            buttons: [["C"]],
            command: ["2"],
          },
        ]],
        playerState: ["jumping"]
      },
      {
        name: "heavy drill kick",
        input: [[
          {
            buttons: [["RT"]],
            command: ["2"],
          },
        ]],
        playerState: ["jumping"]
      },
    ]
  ],
  Specials: [
    [
      {
        name: "light yoga fire",
        input: [[
          {
            buttons: [["A"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "medium yoga fire",
        input: [[
          {
            buttons: [["B"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "heavy yoga fire",
        input: [[
          {
            buttons: [["RB"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive yoga fire",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["236"],
          },
        ]],
      },
    ],
    [
      {
        name: "light yoga arch",
        input: [[
          {
            buttons: [["D"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "medium yoga arch",
        input: [[
          {
            buttons: [["C"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "heavy yoga arch",
        input: [[
          {
            buttons: [["RT"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive yoga arch",
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
        name: "light yoga flame",
        input: [[
          {
            buttons: [["A"]],
            command: ["63214"],
          },
        ]],
      },
      {
        name: "medium yoga flame",
        input: [[
          {
            buttons: [["B"]],
            command: ["63214"],
          },
        ]],
      },
      {
        name: "heavy yoga flame",
        input: [[
          {
            buttons: [["RB"]],
            command: ["63214"],
          },
        ]],
      },
      {
        name: "overdrive yoga flame",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["63214"],
          },
        ]],
      },
    ],
    [
      {
        name: "light yoga comet",
        input: [[
          {
            buttons: [["A"]],
            command: ["62314"],
          },
        ]],
        playerState: ["jumping"]
      },
      {
        name: "medium yoga comet",
        input: [[
          {
            buttons: [["B"]],
            command: ["62314"],
          },
        ]],
        playerState: ["jumping"]
      },
      {
        name: "heavy yoga comet",
        input: [[
          {
            buttons: [["RB"]],
            command: ["62314"],
          },
        ]],
        playerState: ["jumping"]
      },
      {
        name: "overdrive yoga comet",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["62314"],
          },
        ]],
        playerState: ["jumping"]
      },
    ],
    [
      {
        name: "light yoga blast",
        input: [[
          {
            buttons: [["D"]],
            command: ["63214"],
          },
        ]],
      },
      {
        name: "medium yoga blast",
        input: [[
          {
            buttons: [["C"]],
            command: ["63214"],
          },
        ]],
      },
      {
        name: "heavy yoga blast",
        input: [[
          {
            buttons: [["RT"]],
            command: ["63214"],
          },
        ]],
      },
      {
        name: "overdrive yoga blast",
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
        name: "yoga float up",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["2", "1"],
          },
        ]],
      },
      {
        name: "yoga float up forward",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["3"],
          },
        ]],
      },
      {
        name: "jumping yoga float",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["3", "2"],
          },
        ]],
        playerState: ["jumping"]
      },
    ],
    [
      {
        name: "forward yoga teleport",
        input: [[
          {
            buttons: [["A", "B", "RB"], ["D", "C", "RT"]],
            command: ["6"],
          },
        ]],
      },
      {
        name: "backwards yoga teleport",
        input: [[
          {
            buttons: [["A", "B", "RB"], ["D", "C", "RT"]],
            command: ["4"],
          },
        ]],
      },
      {
        name: "jumping forward yoga teleport",
        input: [[
          {
            buttons: [["A", "B", "RB"], ["D", "C", "RT"]],
            command: ["6"],
          },
        ]],
        playerState: ["jumping"]
      },
      {
        name: "jumping backwards yoga teleport",
        input: [[
          {
            buttons: [["A", "B", "RB"], ["D", "C", "RT"]],
            command: ["4"],
          },
        ]],
        playerState: ["jumping"]
      },
    ],
  ],
  "Super Arts": [
    [
      {
        name: "light yoga inferno",
        input: [[
          {
            buttons: [["A"]],
            command: ["236236"],
          },
        ]],
      },
      {
        name: "medium yoga inferno",
        input: [[
          {
            buttons: [["B"]],
            command: ["236236"],
          },
        ]],
      },
      {
        name: "heavy yoga inferno",
        input: [[
          {
            buttons: [["RB"]],
            command: ["236236"],
          },
        ]],
      },
    ], [
      {
        name: "yoga sunburst",
        input: [[
          {
            buttons: common.anyKick,
            command: ["214214"],
          },
        ]],
      },
      {
        name: "short charged yoga sunburst",
        input: [[
          {
            buttons: [["D:(short hold)"],["C:(short hold)"],["RT:(short hold)"]],
            command: ["214214"],
          },
        ]],
      },
      {
        name: "charged yoga sunburst",
        input: [[
          {
            buttons: [["D:(hold)"],["C:(hold)"],["RT:(hold)"]],
            command: ["214214"],
          },
        ]],
      },
    ],
    [
      {
        name: "merciless yoga",
        input: [[
          {
            buttons: common.anyKick,
            command: ["236236"],
          },
        ]],
      },
    ],
  ],
};
generatePresetIds(preset, "dhalsim")
module.exports = { preset };
