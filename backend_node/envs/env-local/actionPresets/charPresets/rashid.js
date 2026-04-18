const common = require("../../local-commonButtonVariants")


const { generatePresetIds } = require("../../../../utils/presetIdsUtil")

const preset = {
  "Command Normals": [
    [
      {
        name: "flapping spin",
        input: [
          [
            {
              buttons: [["B"]],
              command: ["6"],
            },
          ],
        ],
      },
      {
        name: "beak assault",
        input: [
          [
            {
              buttons: [["RB"]],
              command: ["6"],
            },
          ],
        ],
      },
      {
        name: "crescent kick",
        input: [
          [
            {
              buttons: [["RT"]],
              command: ["6"],
            },
          ],
        ],
      },
      {
        name: "blitz strike",
        input: [
          [
            {
              buttons: [["RB"]],
              command: ["2"],
            },
          ],
        ],
      },
      {
        name: "aerial shot",
        input: [
          [
            {
              buttons: [["RT"]],
              command: ["8"],
            },
          ],
        ],
        playerState: ["jumping"]
      },
    ],
    [
      {
        name: "run",
        input: [
          [
            {
              buttons: [[]],
              command: ["6[6]"],
            },
          ],
        ],
      },
      {
        name: "backup",
        input: [
          [
            {
              buttons: common.anyPunch,
              command: ["6"],
            },
          ],
        ],
        dependencies: ["rashid-run"]
      },
      {
        name: "tempest moon",
        input: [
          [
            {
              buttons: common.anyKick,
              command: ["6"],
            },
          ],
        ],
        dependencies: ["rashid-run"]
      },
      {
        name: "air current tempest moon",
        input: [
          [
            {
              buttons: common.anyKick,
              command: ["6"],
            },
          ],
        ],
        playerState: ["air current"],
        dependencies: ["rashid-run"]
      },
    ],
    [
      {
        name: "side flip",
        input: [
          [
            {
              buttons: common.any2Kicks,
              command: ["6"],
            },
          ],
        ],
      },
      {
        name: "side flip followup",
        input: [
          [
            {
              buttons: common.any2Kicks,
              command: [""],
            },
          ],
        ],
        dependencies: ["rashid-side-flip"]
      },
    ],
    [
      {
        name: "wall jump",
        input: [
          [
            {
              buttons: [[]],
              command: ["9"],
            },
          ],
        ],
        playerState: ["near wall"]
      },
      {
        name: "air throw",
        input: [
          [
            {
              buttons: [["A", "D"]],
              command: [""],
            },
          ],
        ],
        playerState: ["jumping"]
      },
    ]
  ],
  "Target Combos": [
    [
      {
        name: "rising kick",
        input: [
          [
            {
              buttons: [["C"]],
              command: [""],
            },
          ], [
            {
              buttons: [["RT"]],
              command: [""],
            },
          ],
        ],
      }
    ],
  ],
  Specials: [
    [
      {
        name: "light spinning mixer",
        input: [[
          {
            buttons: [["A"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "medium spinning mixer",
        input: [[
          {
            buttons: [["B"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "heavy spinning mixer",
        input: [[
          {
            buttons: [["RB"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive spinning mixer",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["236"],
          },
        ]],
      },
      {
        name: "air current light spinning mixer",
        input: [[
          {
            buttons: [["A"]],
            command: ["236"],
          },
        ]],
        playerState: ["air current"]
      },
      {
        name: "air current medium spinning mixer",
        input: [[
          {
            buttons: [["B"]],
            command: ["236"],
          },
        ]],
        playerState: ["air current"]
      },
      {
        name: "air current heavy spinning mixer",
        input: [[
          {
            buttons: [["RB"]],
            command: ["236"],
          },
        ]],
        playerState: ["air current"]
      },
      {
        name: "air current overdrive spinning mixer",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["236"],
          },
        ]],
        playerState: ["air current"]
      },
    ],
    [
      {
        name: "light eagle spike",
        input: [[
          {
            buttons: [["D"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "medium eagle spike",
        input: [[
          {
            buttons: [["C"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "heavy eagle spike",
        input: [[
          {
            buttons: [["RT"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive eagle spike",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["214"],
          },
        ]],
      },
      {
        name: "air current light eagle spike",
        input: [[
          {
            buttons: [["D"]],
            command: ["214"],
          },
        ]],
        playerState: ["air current"]
      },
      {
        name: "air current medium eagle spike",
        input: [[
          {
            buttons: [["C"]],
            command: ["214"],
          },
        ]],
        playerState: ["air current"]
      },
      {
        name: "air current heavy eagle spike",
        input: [[
          {
            buttons: [["RT"]],
            command: ["214"],
          },
        ]],
        playerState: ["air current"]
      },
      {
        name: "air current overdrive eagle spike",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["214"],
          },
        ]],
        playerState: ["air current"]
      },
    ],
    [
      {
        name: "light whirlwind shot",
        input: [[
          {
            buttons: [["D"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "medium whirlwind shot",
        input: [[
          {
            buttons: [["C"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "heavy whirlwind shot",
        input: [[
          {
            buttons: [["RT"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive whirlwind shot",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["214"],
          },
        ]],
      },
      {
        name: "short charged light whirlwind shot",
        input: [[
          {
            buttons: [["D:(short hold)"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "short charged medium whirlwind shot",
        input: [[
          {
            buttons: [["C:(short hold)"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "short charged heavy whirlwind shot",
        input: [[
          {
            buttons: [["RT:(short hold)"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "short charged overdrive whirlwind shot",
        input: [[
          {
            buttons: [["D:(short hold)"], ["C:(short hold)"], ["RT:(short hold)"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "charged light whirlwind shot",
        input: [[
          {
            buttons: [["D:(hold)"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "charged medium whirlwind shot",
        input: [[
          {
            buttons: [["C:(hold)"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "charged heavy whirlwind shot",
        input: [[
          {
            buttons: [["RT:(hold)"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "charged overdrive whirlwind shot",
        input: [[
          {
            buttons: [["D:(hold)"], ["C:(hold)"], ["RT:(hold)"]],
            command: ["214"],
          },
        ]],
      },
    ],
    [
      {
        name: "light arabian cyclone",
        input: [[
          {
            buttons: [["A"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "medium arabian cyclone",
        input: [[
          {
            buttons: [["B"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "heavy arabian cyclone",
        input: [[
          {
            buttons: [["RB"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive arabian cyclone",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["214"],
          },
        ]],
      },
      {
        name: "wing stroke",
        input: [[
          {
            buttons: common.anyKick,
            command: ["4"],
          },
        ]],
        dependencies: ["rashid-light-arabian-cyclone|rashid-medium-arabian-cyclone|rashid-heavy-arabian-cyclone|rashid-overdrive-arabian-cyclone"]
      },
      {
        name: "rolling assault",
        input: [[
          {
            buttons: common.anyKick,
            command: ["6"],
          },
        ]],
        dependencies: ["rashid-light-arabian-cyclone|rashid-medium-arabian-cyclone|rashid-heavy-arabian-cyclone|rashid-overdrive-arabian-cyclone"]
      },
      {
        name: "nail assault",
        input: [[
          {
            buttons: common.anyKick,
            command: [""],
          },
        ]],
        dependencies: ["rashid-rolling-assault"]
      },
    ],
    [
      {
        name: "light arabian skyhigh",
        input: [[
          {
            buttons: [["D"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "medium arabian skyhigh",
        input: [[
          {
            buttons: [["C"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "heavy arabian skyhigh",
        input: [[
          {
            buttons: [["RT"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive arabian skyhigh",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["214"],
          },
        ]],
      },
    ]
  ],
  "Super Arts": [
    [
      {
        name: "super rashid kick",
        input: [[
          {
            buttons: common.anyKick,
            command: ["236236"],
          },
        ]],
      },
    ], [
      {
        name: "ysaar",
        input: [[
          {
            buttons: common.anyKick,
            command: ["214214"],
          },
        ]],
      },
    ],
    [
      {
        name: "altair",
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

generatePresetIds(preset, "rashid")
module.exports = { preset };
