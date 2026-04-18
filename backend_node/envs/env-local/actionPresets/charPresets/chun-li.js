const common = require("../../local-commonButtonVariants")


const { generatePresetIds } = require("../../../../utils/presetIdsUtil")
const preset = {
  "Command Normals": [
    [
      {
        name: "swift thrust",
        input: [[
          {
            buttons: [["B"]],
            command: ["4", "6"],
          },
        ]],
      },
      {
        name: "hakkei",
        input: [[
          {
            buttons: [["RB"]],
            command: ["4"],
          },
        ]],
      },
      {
        name: "water lotus fist",
        input: [[
          {
            buttons: [["RB"]],
            command: ["3"],
          },
        ]],
      },
      {
        name: "yokusen kick",
        input: [[
          {
            buttons: [["RT"]],
            command: ["6"],
          },
        ]],
      },
      {
        name: "falling crane",
        input: [[
          {
            buttons: [["RT"]],
            command: ["3"],
          },
        ]],
      },
      {
        name: "yoso kick",
        input: [[
          {
            buttons: [["C"]],
            command: ["2"],
          },
        ]],
        playerState: ["jumping"]
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
        name: "soaring eagle punches",
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
        playerState: ["jumping"]
      },
    ],
    [{
      name: "yoso kick chain",
      playerState: ["jumping"],
      input: [[
        {
          buttons: [["C"]],
          command: ["2"],
        },
      ], [
        {
          buttons: [["C"]],
          command: ["2"],
        },
      ], [
        {
          buttons: [["C"]],
          command: ["2"],
        },
      ],
      ],
    }, {
      name: "2 hit yoso kick chain",
      playerState: ["jumping"],
      input: [[
        {
          buttons: [["C"]],
          command: ["2"],
        },
      ], [
        {
          buttons: [["C"]],
          command: ["2"],
        },
      ],
      ],
    },]
  ],
  Specials: [
    [
      {
        name: "serenity stream",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["214"],
          },
        ]],
      },
      {
        name: "serenity stream exit",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["214"],
          },
        ]],
        dependencies: ["chun-li-serenity-stream"]
      },
      {
        name: "orchid palm",
        input: [[
          {
            buttons: [["A"]],
            command: [""],
          },
        ]],
        dependencies: ["chun-li-serenity-stream"]
      },
      {
        name: "snake strike",
        input: [[
          {
            buttons: [["B"]],
            command: [""],
          },
        ]],
        dependencies: ["chun-li-serenity-stream"]
      },
      {
        name: "lotus fist",
        input: [[
          {
            buttons: [["RB"]],
            command: [""],
          },
        ]],
        dependencies: ["chun-li-serenity-stream"]
      },
      {
        name: "forward strike",
        input: [[
          {
            buttons: [["D"]],
            command: [""],
          },
        ]],
        dependencies: ["chun-li-serenity-stream"]
      },
      {
        name: "senpu kick",
        input: [[
          {
            buttons: [["C"]],
            command: [""],
          },
        ]],
        dependencies: ["chun-li-serenity-stream"]
      },
      {
        name: "tenku kick",
        input: [[
          {
            buttons: [["RT"]],
            command: [""],
          },
        ]],
        dependencies: ["chun-li-serenity-stream"]
      },
    ],
    [
      {
        name: "light kikoken",
        input: [[
          {
            buttons: [["A"]],
            command: ["[4]6"],
          },
        ]],
      },
      {
        name: "medium kikoken",
        input: [[
          {
            buttons: [["B"]],
            command: ["[4]6"],
          },
        ]],
      },
      {
        name: "heavy kikoken",
        input: [[
          {
            buttons: [["RB"]],
            command: ["[4]6"],
          },
        ]],
      },
      {
        name: "overdrive kikoken",
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
        name: "light spinning bird kick",
        input: [[
          {
            buttons: [["D"]],
            command: ["[2]8"],
          },
        ]],
      },
      {
        name: "medium spinning bird kick",
        input: [[
          {
            buttons: [["C"]],
            command: ["[2]8"],
          },
        ]],
      },
      {
        name: "heavy spinning bird kick",
        input: [[
          {
            buttons: [["RT"]],
            command: ["[2]8"],
          },
        ]],
      },
      {
        name: "overdrive spinning bird kick",
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
        name: "light hazanshu",
        input: [[
          {
            buttons: [["D"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "medium hazanshu",
        input: [[
          {
            buttons: [["C"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "heavy hazanshu",
        input: [[
          {
            buttons: [["RT"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive hazanshu",
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
        name: "light tensho kicks",
        input: [[
          {
            buttons: [["D"]],
            command: ["22"],
          },
        ]],
      },
      {
        name: "medium tensho kicks",
        input: [[
          {
            buttons: [["C"]],
            command: ["22"],
          },
        ]],
      },
      {
        name: "heavy tensho kicks",
        input: [[
          {
            buttons: [["RT"]],
            command: ["22"],
          },
        ]],
      },
      {
        name: "overdrive tensho kicks",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["22"],
          },
        ]],
      },
    ],
    [
      {
        name: "light hundred lightning kicks",
        input: [[
          {
            buttons: [["D"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "medium hundred lightning kicks",
        input: [[
          {
            buttons: [["C"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "heavy hundred lightning kicks",
        input: [[
          {
            buttons: [["RT"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive hundred lightning kicks",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["236"],
          },
        ]],
      },
      {
        name: "hundred lightning kicks followup",
        input: [[
          {
            buttons: common.any2Kicks,
            command: [""],
          },
        ]],
        dependencies: ["chun-li-overdrive-hundred-lightning-kicks"]
      },
    ],
    [
      {
        name: "jumping light hundred lightning kicks",
        input: [[
          {
            buttons: [["D"]],
            command: ["236"],
          },
        ]],
        playerState: ["jumping"]
      },
      {
        name: "jumping medium hundred lightning kicks",
        input: [[
          {
            buttons: [["C"]],
            command: ["236"],
          },
        ]],
        playerState: ["jumping"]
      },
      {
        name: "jumping heavy hundred lightning kicks",
        input: [[
          {
            buttons: [["RT"]],
            command: ["236"],
          },
        ]],
        playerState: ["jumping"]
      },
      {
        name: "jumping overdrive hundred lightning kicks",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["236"],
          },
        ]],
        playerState: ["jumping"]
      },
    ],
  ],
  "Super Arts": [
    [
      {
        name: "kikosho",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["236236"],
          },
        ]],
      },
      {
        name: "jumping kikosho",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["236236"],
          },
        ]],
        playerState: ["jumping"]
      },
    ], [
      {
        name: "hoyoku-sen",
        input: [[
          {
            buttons: common.anyKick,
            command: ["236236"],
          },
        ]],
      },
    ],
    [
      {
        name: "soten ranka",
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

generatePresetIds(preset, "chun-li")
module.exports = { preset };
