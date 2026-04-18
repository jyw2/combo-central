const { generatePresetIds } = require("../../../utils/presetIdsUtil")

const preset = {
  "Universal Normals": [
    [
      {
        name: "light punch",
        input: [[
          {
            buttons: [["A"]],
            command: [""],
          },
        ]],
        presetId: "lp"
      },
      {
        name: "medium punch",
        input: [[
          {
            buttons: [["B"]],
            command: [""],
          },
        ]],
        presetId: "mp"
      },

      {
        name: "heavy punch",
        input: [[
          {
            buttons: [["RB"]],
            command: [""],
          },
        ]],
        presetId: "hp"
      },
    ],
    [
      {
        name: "light kick",
        input: [[
          {
            buttons: [["D"]],
            command: [""],
          },
        ]],
        presetId: "lk"
      },

      {
        name: "medium kick",
        input: [[
          {
            buttons: [["C"]],
            command: [""],
          },
        ]],
        presetId: "mk"
      },

      {
        name: "heavy kick",
        input: [[
          {
            buttons: [["RT"]],
            command: [""],
          },
        ]],
        presetId: "hk"
      },
    ],
    [
      {
        name: "crouching light punch",
        input: [[
          {
            buttons: [["A"]],
            command: ["2"],
          },
        ]],
        presetId: "clp"
      },

      {
        name: "crouching medium punch",
        input: [[
          {
            buttons: [["B"]],
            command: ["2"],
          },
        ]],
        presetId: "cmp"
      },

      {
        name: "crouching heavy punch",
        input: [[
          {
            buttons: [["RB"]],
            command: ["2"],
          },
        ]],
        presetId: "chp"
      },
    ],
    [
      {
        name: "crouching light kick",
        input: [[
          {
            buttons: [["D"]],
            command: ["2"],
          },
        ]],
        presetId: "clk"
      },

      {
        name: "crouching medium kick",
        input: [[
          {
            buttons: [["C"]],
            command: ["2"],
          },
        ]],
        presetId: "cmk"
      },

      {
        name: "crouching heavy kick",
        input: [[
          {
            buttons: [["RT"]],
            command: ["2"],
          },
        ]],
        presetId: "chk"
      },
    ],
    [
      {
        name: "jumping light kick",
        input: [[
          {
            buttons: [["D"]],
            command: [""],
          },
        ]],
        playerState: ["jumping"],
        presetId: "jlk"
      },

      {
        name: "jumping medium kick",
        input: [[
          {
            buttons: [["C"]],
            command: [""],
          },
        ]],
        playerState: ["jumping"],
        presetId: "jmk"
      },

      {
        name: "jumping heavy kick",
        input: [[
          {
            buttons: [["RT"]],
            command: [""],
          },
        ]],
        playerState: ["jumping"],
        presetId: "jmk"
      },
    ],
    [
      {
        name: "jumping light punch",
        input: [[
          {
            buttons: [["A"]],
            command: [""],
          },
        ]],
        playerState: ["jumping"],
        presetId: "jlp"
      },

      {
        name: "jumping medium punch",
        input: [[
          {
            buttons: [["B"]],
            command: [""],
          },
        ]],
        playerState: ["jumping"],
        presetId: "jmp"
      },

      {
        name: "jumping heavy punch",
        input: [[
          {
            buttons: [["RB"]],
            command: [""],
          },
        ]],
        playerState: ["jumping"],
        presetId: "jhp"
      },
    ],
  ],
  "Universal Actions": [
    [
      {
        name: "drive impact",
        input: [[
          {
            buttons: [["RB", "RT"]],
            command: [""],
          },
        ]],
        presetId: "DI"
      },
      {
        name: "cancel drive rush",
        input: [[
          {
            buttons: [["B", "C"]],
            command: [""],
          }, {
            buttons: [[]],
            command: ["66"],
          },
        ]],
        presetId: "DRC"

      },
      {
        name: "parry drive rush",
        input: [[
          {
            buttons: [["B", "C"]],
            command: [""],
          },
        ], [
          {
            buttons: [[]],
            command: ["66"],
          },
        ]],
        presetId: "DRP"
      },
      {
        name: "parry",
        input: [[
          {
            buttons: [["B", "C"]],
            command: [""],
          },
        ],],
        presetId: "parry"
      },
      {
        name: "perfect parry",
        input: [[
          {
            buttons: [["B", "C"]],
            command: [""],
          },
        ],],
        presetId: "perfect-parry"
      },
      {
        name: "drive reversal",
        input: [[
          {
            buttons: [["RB", "RT"]],
            command: ["6"],
          },
        ]],
        presetId: "DREVERSAL"
      },
    ],
    [
      {
        name: "forward jump",
        input: [[
          {
            buttons: [[]],
            command: ["9"],
          },
        ]],
        presetId: "f-jump"
      },
      {
        name: "back jump",
        input: [[
          {
            buttons: [[]],
            command: ["7"],
          },
        ]],
        presetId: "b-jump"
      },
      {
        name: "neutral jump",
        input: [[
          {
            buttons: [[]],
            command: ["8"],
          },
        ]],
        presetId: "n-jump"
      },
    ],
    [
      {
        name: "dash",
        input: [[
          {
            buttons: [[]],
            command: ["66"],
          },
        ]],
        presetId: "dash"
      },
      {
        name: "back dash",
        input: [[
          {
            buttons: [[]],
            command: ["44"],
          },
        ]],
        presetId: "back-dash"
      },
      {
        name: "walk forward",
        input: [[
          {
            buttons: [[]],
            command: ["6"],
          },
        ]],
        presetId: "walk-f"
      },
      {
        name: "walk back",
        input: [[
          {
            buttons: [[]],
            command: ["4"],
          },
        ]],
        presetId: "walk-b"
      },
    ],
    [
      {
        name: "forward throw",
        input: [[
          {
            buttons: [["A", "D"]],
            command: ["6","5"],
          },
        ]],
        presetId: "f-throw"
      },
      {
        name: "back throw",
        input: [[
          {
            buttons: [["A", "D"]],
            command: ["4"],
          },
        ]],
        presetId: "b-throw"
      }

    ]
  ],
};
generatePresetIds(preset,"universal")

module.exports = { preset };
