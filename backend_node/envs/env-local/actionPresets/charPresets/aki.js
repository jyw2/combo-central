const common = require("../../local-commonButtonVariants")
const { generatePresetIds } = require("../../../../utils/presetIdsUtil")

const preset = {
  "Command Normals": [
    [
      {
        name: "pu lao",
        input: [[
          {
            buttons: [["B"]],
            command: ["3"],
          },
        ]],
      },
      {
        name: "chi wen",
        input: [[
          {
            buttons: [["RB"]],
            command: ["6"],
          },
        ]],
      },
      {
        name: "qiu nio",
        input: [[
          {
            buttons: [["RT"]],
            command: ["6"],
          },
        ]],
      },
      {
        name: "gong fu",
        input: [[
          {
            buttons: [["RB"]],
            command: ["2"],
          }
        ]],
        playerState: ["jumping"],
      },
    ],
  ],
  "Target Combos": [
    [
      {
        name: "hun dun",
        input: [[
          {
            buttons: [["A"]],
            command: [""],
          },
        ], [
          {
            buttons: [["A"]],
            command: [""],
          },
        ],
        ],
      },
    ],
    [{
      name: "qiong  qi",
      input: [[
        {
          buttons: [["RB"]],
          command: [""],
        },
      ], [
        {
          buttons: [["RB"]],
          command: [""],
        },
      ],
      ],
    },]
  ],
  Specials: [
    [
      {
        name: "nightshade pulse",
        input: [[
          {
            buttons: [["A"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive nightshade pulse",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["214"],
          },
        ]],
      },
      {
        name: "nightshade chaser",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["6"],
          },
        ]],
        dependencies: ["aki-light-nightshade-pulse|aki-overdrive-nightshade-pulse"],
      },
    ],
    [
      {
        name: "orchid spring",
        input: [[
          {
            buttons: [["B"]],
            command: ["214"],
          },
        ]],
      },
    ],
    [
      {
        name: "toxic wreath",
        input: [[
          {
            buttons: [["RB"]],
            command: ["214"],
          },
        ]],
      },
    ],
    [
      {
        name: "light serpent lash",
        input: [[
          {
            buttons: [["A"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "medium serpent lash",
        input: [[
          {
            buttons: [["B"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "heavy serpent lash",
        input: [[
          {
            buttons: [["RB"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive serpent lash",
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
        name: "light cruel fate",
        input: [[
          {
            buttons: [["D"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "medium cruel fate",
        input: [[
          {
            buttons: [["C"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "heavy cruel fate",
        input: [[
          {
            buttons: [["RT"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive cruel fate",
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
        name: "light snake step",
        input: [[
          {
            buttons: [["D"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "medium snake step",
        input: [[
          {
            buttons: [["C"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "heavy snake step",
        input: [[
          {
            buttons: [["RT"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive snake step",
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
        name: "sinister slide",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["2"],
          },
        ]],
      },
      {
        name: "sinister slide exit",
        input: [[
          {
            buttons: [[]],
            command: ["8"],
          },
        ]],
        dependencies: ["aki-sinister-slide"],
      },
      {
        name: "venomous fang",
        input: [[
          {
            buttons: common.anyPunch,
            command: [""],
          },
        ]],
        dependencies: ["aki-sinister-slide"],
      },
      {
        name: "heel strike",
        input: [[
          {
            buttons: common.anyKick,
            command: [""],
          },
        ]],
        dependencies: ["aki-sinister-slide"],
      },
      {
        name: "entrapment",
        input: [[
          {
            buttons: [["A", "D"]],
            command: [""],
          },
        ]],
        dependencies: ["aki-sinister-slide"],
      },
    ],
  ],
  "Super Arts": [
    [
      {
        name: "deadly implication",
        input: [[
          {
            buttons: common.anyKick,
            command: ["236236"],
          },
        ]],
      },
      {
        name: "light tainted talons",
        input: [[
          {
            buttons: [["A"]],
            command: ["214214"],
          },
        ]],
      },
      {
        name: "medium tainted talons",
        input: [[
          {
            buttons: [["B"]],
            command: ["214214"],
          },
        ]],
      },
      {
        name: "heavy tainted talons",
        input: [[
          {
            buttons: [["RB"]],
            command: ["214214"],
          },
        ]],
      },
      {
        name: "claws of ya zi",
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

generatePresetIds(preset, "aki")
module.exports = { preset };