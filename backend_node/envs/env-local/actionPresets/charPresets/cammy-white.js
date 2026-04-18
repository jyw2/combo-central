const common = require("../../local-commonButtonVariants")


const { generatePresetIds } = require("../../../../utils/presetIdsUtil")

const preset = {
  "Command Normals": [
    [
      {
        name: "lift uppercut",
        input: [[
          {
            buttons: [["B"]],
            command: ["4"],
          },
        ]],
      },
      {
        name: "assault blade",
        input: [[
          {
            buttons: [["RT"]],
            command: ["4"],
          },
        ]],
      },
      {
        name: "delayed ripper",
        input: [[
          {
            buttons: [["RT"]],
            command: ["6"],
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
        name: "lift combination",
        input: [[
          {
            buttons: [["B"]],
            command: ["4"],
          },
        ], [
          {
            buttons: [["RT"]],
            command: [""],
          },
        ],
        ],
      },
    ],
    [{
      name: "swing combination",
      input: [[
        {
          buttons: [["RB"]],
          command: [""],
        },
      ], [
        {
          buttons: [["RT"]],
          command: [""],
        },
      ],
      ],
    },]
  ],
  Specials: [
    [
      {
        name: "light spiral arrow",
        input: [[
          {
            buttons: [["D"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "medium spiral arrow",
        input: [[
          {
            buttons: [["C"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "heavy spiral arrow",
        input: [[
          {
            buttons: [["RT"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "charged heavy spiral arrow",
        input: [[
          {
            buttons: [["RT:(hold)"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive spiral arrow",
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
        name: "light cannon spike",
        input: [[
          {
            buttons: [["D"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "medium cannon spike",
        input: [[
          {
            buttons: [["C"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "heavy cannon spike",
        input: [[
          {
            buttons: [["RT"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "overdrive cannon spike",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["623"],
          },
        ]],
      },
    ],
    [
      {
        name: "light quick spin knuckle",
        input: [[
          {
            buttons: [["A"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "medium quick spin knuckle",
        input: [[
          {
            buttons: [["B"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "heavy quick spin knuckle",
        input: [[
          {
            buttons: [["RB"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive quick spin knuckle",
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
        name: "light cannon strike",
        input: [[
          {
            buttons: [["D"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "medium cannon strike",
        input: [[
          {
            buttons: [["C"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "heavy cannon strike",
        input: [[
          {
            buttons: [["RT"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive cannon strike",
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
        name: "light hooligan combination",
        input: [[
          {
            buttons: [["A"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "medium hooligan combination",
        input: [[
          {
            buttons: [["B"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "heavy hooligan combination",
        input: [[
          {
            buttons: [["RB"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "charged heavy hooligan combination",
        input: [[
          {
            buttons: [["RB:(hold)"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive hooligan combination",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["236"],
          },
        ]],
      },
      {
        name: "razors edge slicer",
        input: [[
          {
            buttons: [[]],
            command: ["5"],
          },
        ]],
        dependencies: ["cammy-white-light-hooligan-combination|cammy-white-medium-hooligan-combination|cammy-white-heavy-hooligan-combination|cammy-white-charged-heavy-hooligan-combination|cammy-white-overdrive-hooligan-combination"],
      },
      {
        name: "hooligan cannon strike",
        input: [[
          {
            buttons: common.anyKick,
            command: [""],
          },
        ]],
        dependencies: ["cammy-white-light-hooligan-combination|cammy-white-medium-hooligan-combination|cammy-white-heavy-hooligan-combination|cammy-white-charged-heavy-hooligan-combination|cammy-white-overdrive-hooligan-combination"],
      },
      {
        name: "reverse edge",
        input: [[
          {
            buttons: common.anyKick,
            command: ["2"],
          },
        ]],
        dependencies: ["cammy-white-light-hooligan-combination|cammy-white-medium-hooligan-combination|cammy-white-heavy-hooligan-combination|cammy-white-charged-heavy-hooligan-combination|cammy-white-overdrive-hooligan-combination"],
      },
      {
        name: "fatal leg twister",
        input: [[
          {
            buttons: [["A", "D"]],
            command: [""],
          },
        ]],
        dependencies: ["cammy-white-light-hooligan-combination|cammy-white-medium-hooligan-combination|cammy-white-heavy-hooligan-combination|cammy-white-charged-heavy-hooligan-combination|cammy-white-overdrive-hooligan-combination"],
      },
      {
        name: "silent step",
        input: [[
          {
            buttons: common.anyPunch,
            command: [""],
          },
        ]],
        dependencies: ["cammy-white-light-hooligan-combination|cammy-white-medium-hooligan-combination|cammy-white-heavy-hooligan-combination|cammy-white-charged-heavy-hooligan-combination|cammy-white-overdrive-hooligan-combination"],
      },
    ],
  ],
  "Super Arts": [
    [
      {
        name: "spin drive smasher",
        input: [[
          {
            buttons: common.anyKick,
            command: ["236236"],
          },
        ]],
      },
    ], [
      {
        name: "killer bee spin",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["214214"],
          },
        ]],
      },
      {
        name: "jumping killer bee spin",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["214214"],
          },
        ]],
        playerState: ["jumping"]
      },
    ],
    [
      {
        name: "delta red assault",
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

generatePresetIds(preset, "cammy-white")
module.exports = { preset };