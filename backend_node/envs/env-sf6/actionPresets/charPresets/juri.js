const common = require("../../sf6-commonButtonVariants")


const { generatePresetIds } = require("../../../../utils/presetIdsUtil")

const preset = {
  "Command Normals": [
    [
      {
        name: "kyosesho",
        input: [[
          {
            buttons: [["B"]],
            command: ["6"],
          },
        ]],
      },
      {
        name: "senkai kick",
        input: [[
          {
            buttons: [["C"]],
            command: ["6"],
          },
        ]],
      },
      {
        name: "renko kicks",
        input: [[
          {
            buttons: [["RB"]],
            command: ["6"],
          },
        ]],
      },
      {
        name: "korenzan",
        input: [[
          {
            buttons: [["RT"]],
            command: ["4"],
          },
        ]],
      },
      {
        name: "air throw",
        input: [
          [
            {
              buttons: [["A","D"]],
              command: [""],
            },
          ],
        ],
        playerState: ["jumping"]
      },
    ],
  ],
  "Target Combos": [
    [
      {
        name: "death crest",
        input: [[
          {
            buttons: [["B"]],
            command: [""],
          },
        ], [
          {
            buttons: [["RB"]],
            command: ["4"],
          },
        ],
        [
          {
            buttons: [["RB"]],
            command: [""],
          },
        ]],
      },
      {
        name: "2 hit death crest",
        input: [[
          {
            buttons: [["B"]],
            command: [""],
          },
        ], [
          {
            buttons: [["RB"]],
            command: ["4"],
          },
        ]],
      },
    ],
  ],
  Specials: [
    [
      {
        name: "light fuhajin",
        input: [[
          {
            buttons: [["D"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "medium fuhajin",
        input: [[
          {
            buttons: [["C"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "heavy fuhajin",
        input: [[
          {
            buttons: [["RT"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive fuhajin",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["214"],
          },
        ]],
      },
    ],
    [
      {
        name: "saihasho",
        input: [[
          {
            buttons: [["D"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "stocked saihasho",
        input: [[
          {
            buttons: [["D"]],
            command: ["236"],
          },
        ]],
        playerState: ["fuhajin stocked"]
      },
      {
        name: "overdrive saihasho",
        input: [[
          {
            buttons: [["D", "C"]],
            command: ["236"],
          },
        ]],
      },
    ],
    [
      {
        name: "ankensatsu",
        input: [[
          {
            buttons: [["C"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "stocked ankensatsu",
        input: [[
          {
            buttons: [["C"]],
            command: ["236"],
          },
        ]],
        playerState: ["fuhajin stocked"]
      },
      {
        name: "overdrive ankensatsu",
        input: [[
          {
            buttons: [["D", "RT"]],
            command: ["236"],
          },
        ]],
      },
    ],
    [
      {
        name: "go ohsatsu",
        input: [[
          {
            buttons: [["RT"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "stocked go ohsatsu",
        input: [[
          {
            buttons: [["RT"]],
            command: ["236"],
          },
        ]],
        playerState: ["fuhajin stocked"]
      },
      {
        name: "overdrive go ohsatsu",
        input: [[
          {
            buttons: [["C", "RT"]],
            command: ["236"],
          },
        ]],
      },
    ],
    [
      {
        name: "light tensenrin",
        input: [[
          {
            buttons: [["A"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "medium tensenrin",
        input: [[
          {
            buttons: [["B"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "heavy tensenrin",
        input: [[
          {
            buttons: [["RB"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "overdrive tensenrin",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["623"],
          },
        ]],
      },
    ],
    [
      {
        name: "shiku-sen",
        input: [[
          {
            buttons: common.anyKick,
            command: ["214"],
          },
        ]],
        playerState: ["jumping"]
      },
      {
        name: "overdrive shiku-sen",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["214"],
          },
        ]],
        playerState: ["jumping"]
      },
      {
        name: "shiren-sen",
        input: [[
          {
            buttons: common.anyKick,
            command: [""],
          },
        ]],
        dependencies: ["juri-shiku-sen|juri-overdrive-shiku-sen"]
      },
    ],
  ],
  "Super Arts": [
    [
      {
        name: "sakkai fuzujan",
        input: [[
          {
            buttons: common.anyKick,
            command: ["236236"],
          },
        ]],
      },
      {
        name: "charged sakkai fuzujan",
        input: [[
          {
            buttons: [["D:(hold)"], ["C:(hold)"],["RB:(hold)"]],
            command: ["236236"],
          },
        ]],
        playerState:["fuhajin stocked"]
      },
    ], [
      {
        name: "feng shui engine",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["214214"],
          },
        ]],
      },
      {
        name: "dash feng shui engine",
        input: [[
          {
            buttons: [["A:(hold)"], ["B:(hold)"], ["RB:(hold)"]],
            command: ["214214"],
          },
        ]],
      },],
    [
      {
        name: "kaisen dankai raku",
        input: [[
          {
            buttons: common.anyKick,
            command: ["214214"],
          },
        ]],
      },
    ],
  ],
};
generatePresetIds(preset, "juri")

module.exports = { preset };
