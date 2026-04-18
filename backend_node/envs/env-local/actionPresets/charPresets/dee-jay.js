const common = require("../../local-commonButtonVariants")


const { generatePresetIds } = require("../../../../utils/presetIdsUtil")

const preset = {
  "Command Normals": [
    [
      {
        name: "sunrise heel",
        input: [[
          {
            buttons: [["C"]],
            command: ["6"],
          },
        ]],
      },
      {
        name: "face breaker",
        input: [[
          {
            buttons: [["RT"]],
            command: ["4"],
          },
        ]],
      },
      {
        name: "knee shot",
        input: [[
          {
            buttons: [["D"]],
            command: ["2"],
          },
        ]],
        playerState: ["jumping"]
      },
    ],
  ],
  "Target Combos": [
    [
      {
        name: "threebeat combo",
        input: [[
          {
            buttons: [["A"]],
            command: [""],
          },
        ], [
          {
            buttons: [["C"]],
            command: [""],
          },
        ],
        [
          {
            buttons: [["C"]],
            command: [""],
          },
        ],
        ],
      },
    ],
    [{
      name: "dee jay special",
      input: [[
        {
          buttons: [["B"]],
          command: [""],
        },
      ], [
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
    },],
    [{
      name: "party in the air",
      input: [[
        {
          buttons: [["B"]],
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
      name: "funky dance",
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
      ], [
        {
          buttons: [["RB"]],
          command: [""],
        },
      ],
      ],
    },
    {
      name: "funky dance feint",
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
      ], [
        {
          buttons: [["RB"]],
          command: ["4"],
        },
      ],
      ],
    },
    {
      name: "2 hit funky dance",
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
    },
    ]
  ],
  Specials: [
    [
      {
        name: "light air slasher",
        input: [[
          {
            buttons: [["A"]],
            command: ["[4]6"],
          },
        ]],
      },
      {
        name: "medium air slasher",
        input: [[
          {
            buttons: [["B"]],
            command: ["[4]6"],
          },
        ]],
      },
      {
        name: "heavy air slasher",
        input: [[
          {
            buttons: [["RB"]],
            command: ["[4]6"],
          },
        ]],
      },
      {
        name: "overdrive air slasher",
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
        name: "light jackknife maximum",
        input: [[
          {
            buttons: [["D"]],
            command: ["[2]8"],
          },
        ]],
      },
      {
        name: "medium jackknife maximum",
        input: [[
          {
            buttons: [["C"]],
            command: ["[2]8"],
          },
        ]],
      },
      {
        name: "heavy jackknife maximum",
        input: [[
          {
            buttons: [["RT"]],
            command: ["[2]8"],
          },
        ]],
      },
      {
        name: "overdrive jackknife maximum",
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
        name: "light rolling sobat",
        input: [[
          {
            buttons: [["D"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "medium rolling sobat",
        input: [[
          {
            buttons: [["C"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "heavy rolling sobat",
        input: [[
          {
            buttons: [["RT"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive rolling sobat",
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
        name: "light machine gun uppercut",
        input: [[
          {
            buttons: [["A"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "medium machine gun uppercut",
        input: [[
          {
            buttons: [["B"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "heavy machine gun uppercut",
        input: [[
          {
            buttons: [["RB"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive machine gun uppercut",
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
        name: "jus cool",
        input: [[
          {
            buttons: common.anyKick,
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive jus cool",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["214"],
          },
        ]],
      },
      {
        name: "funky slicer",
        input: [[
          {
            buttons: [["D"]],
            command: [""],
          },
        ]],
        dependencies: ["dee-jay-jus-cool|dee-jay-overdrive-jus-cool"]
      },
      {
        name: "waning moon",
        input: [[
          {
            buttons: [["C"]],
            command: [""],
          },
        ]],
        dependencies: ["dee-jay-jus-cool|dee-jay-overdrive-jus-cool"]
      },
      {
        name: "maximum strike",
        input: [[
          {
            buttons: [["RT"]],
            command: [""],
          },
        ]],
        dependencies: ["dee-jay-jus-cool|dee-jay-overdrive-jus-cool"]
      },
      {
        name: "juggling dash",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["6"],
          },
        ]],
        dependencies: ["dee-jay-jus-cool|dee-jay-overdrive-jus-cool"]
      },
      {
        name: "sway",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["4"],
          },
        ]],
        dependencies: ["dee-jay-jus-cool|dee-jay-overdrive-jus-cool"]
      },
    ],
    [
      {
        name: "speedy maracas",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["22"],
          },
        ]],
      },
      {
        name: "2+ bar meter speedy maracas",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["22"],
          },
        ]],
        playerState: ["2+ bars of meter"]
      },
    ],
  ],
  "Super Arts": [
    [
      {
        name: "the greatest sobat",
        input: [[
          {
            buttons: common.anyKick,
            command: ["236236"],
          },
        ]],
      },
    ], [
      {
        name: "light (lowkey) sunrise festival",
        input: [[
          {
            buttons: [["A"]],
            command: ["236236"],
          },
        ]],
      },
      {
        name: "medium (marvelous) sunrise festival",
        input: [[
          {
            buttons: [["B"]],
            command: ["236236"],
          },
        ]],
      },
      {
        name: "heavy (headliner) sunrise festival",
        input: [[
          {
            buttons: [["RB"]],
            command: ["236236"],
          },
        ]],
      },
    ],
    [
      {
        name: "weekend pleasure",
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
generatePresetIds(preset, "dee-jay")
module.exports = { preset };
