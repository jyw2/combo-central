const common = require("../../local-commonButtonVariants")
const { generatePresetIds } = require("../../../../utils/presetIdsUtil")

const preset = {
  "Command Normals": [
    [
      {
        name: "rock crusher",
        input: [[
          {
            buttons: [["B"]],
            command: ["6"],
          },
        ]],
      },
      {
        name: "double knee bombs",
        input: [[
          {
            buttons: [["C"]],
            command: ["6"],
          },
        ]],
      },
      {
        name: "wild edge",
        input: [[
          {
            buttons: [["C"]],
            command: ["4"],
          },
        ]],
      }, {
        name: "wild nail",
        input: [[
          {
            buttons: [["RB"]],
            command: ["6"],
          },
        ]],
      },
      {
        name: "amazon river run",
        input: [[
          {
            buttons: [["RB"]],
            command: ["3"],
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
    ]
  ],
  Specials: [
    [
      {
        name: "coward crouch",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["2"],
          },
        ]],
      },
      {
        name: "wild lift",
        input: [[
          {
            buttons: common.anyPunch,
            command: [""],
          },
        ]],
        dependencies: ["blanka-coward-crouch"]
      },
      {
        name: "raid jump",
        input: [[
          {
            buttons: common.anyKick,
            command: [""],
          },
        ]],
        dependencies: ["blanka-coward-crouch"]
      },
    ],
    [
      {
        name: "forward suprise hop",
        input: [[
          {
            buttons: [["D", "C", "RT"]],
            command: ["6"],
          },
        ]],
      },
      {
        name: "backwards suprise hop",
        input: [[
          {
            buttons: [["D", "C", "RT"]],
            command: ["6"],
          },
        ]],
      },
    ],
    [
      {
        name: "electric thunder",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive electric thunder",
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
        name: "light rolling attack",
        input: [[
          {
            buttons: [["A"]],
            command: ["[4]6"],
          },
        ]],
      },
      {
        name: "medium rolling attack",
        input: [[
          {
            buttons: [["B"]],
            command: ["[4]6"],
          },
        ]],
      },
      {
        name: "heavy rolling attack",
        input: [[
          {
            buttons: [["RB"]],
            command: ["[4]6"],
          },
        ]],
      },
      {
        name: "overdrive rolling attack",
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
        name: "jumping rolling attack",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["[4]6"],
          },
        ]],
        playerState: ["jumping"]
      },
      {
        name: "jumping overdrive rolling attack",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["[4]6"],
          },
        ]],
        playerState: ["jumping"]
      },
    ],
    [
      {
        name: "light vertical rolling attack",
        input: [[
          {
            buttons: [["D"]],
            command: ["[2]8"],
          },
        ]],
      },
      {
        name: "medium vertical rolling attack",
        input: [[
          {
            buttons: [["C"]],
            command: ["[2]8"],
          },
        ]],
      },
      {
        name: "heavy vertical rolling attack",
        input: [[
          {
            buttons: [["RT"]],
            command: ["[2]8"],
          },
        ]],
      },
      {
        name: "overdrive vertical rolling attack",
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
        name: "light wild hunt",
        input: [[
          {
            buttons: [["D"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "medium wild hunt",
        input: [[
          {
            buttons: [["C"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "heavy wild hunt",
        input: [[
          {
            buttons: [["RT"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive wild hunt",
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
        name: "light blanka-chan bomb",
        input: [[
          {
            buttons: [["A"]],
            command: ["22"],
          },
        ]],
      },
      {
        name: "medium blanka-chan bomb",
        input: [[
          {
            buttons: [["B"]],
            command: ["22"],
          },
        ]],
      },
      {
        name: "heavy blanka-chan bomb",
        input: [[
          {
            buttons: [["RB"]],
            command: ["22"],
          },
        ]],
      }
    ],
  ],
  "Super Arts": [
    [
      {
        name: "shout of earth",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["236236"],
          },
        ]],
      },

    ],
    [
      {
        name: "lightning beast",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["214214"],
          },
        ]],
      },
      {
        name: "down back rolling cannon",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["1"],
          },
        ]],
      },
      {
        name: "down rolling cannon",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["2"],
          },
        ]],
      },
      {
        name: "down forward rolling cannon",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["3"],
          },
        ]],
      },
      {
        name: "back rolling cannon",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["4"],
          },
        ]],
      },
      {
        name: "forward back rolling cannon",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["6"],
          },
        ]],
      },
      {
        name: "back up rolling cannon",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["7"],
          },
        ]],
      },
      {
        name: "up rolling cannon",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["8"],
          },
        ]],
      },
      {
        name: "up forward rolling cannon",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["9"],
          },
        ]],
      },
    ],
    [
      {
        name: "ground shave cannonball",
        input: [[
          {
            buttons: common.anyKick,
            command: ["236236"],
          },
        ]],
      },
    ]
  ],
};
generatePresetIds(preset, "blanka")

module.exports = { preset };
