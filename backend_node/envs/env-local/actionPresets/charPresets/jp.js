const common = require("../../local-commonButtonVariants")


const { generatePresetIds } = require("../../../../utils/presetIdsUtil")

const preset = {
  "Command Normals": [
    [
      {
        name: "grom strelka",
        input: [[
          {
            buttons: [["B"]],
            command: ["4"],
          },
        ]],
      },
      {
        name: "guillotinna",
        input: [[
          {
            buttons: [["C"]],
            command: ["6"],
          },
        ]],
      },
      {
        name: "malice",
        input: [[
          {
            buttons: [["RB"]],
            command: ["3"],
          },
        ]],
      },
      {
        name: "bylina",
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
    ]
  ],
  "Target Combos": [
    [
      {
        name: "2 hit grom strelka",
        input: [[
          {
            buttons: [["B"]],
            command: ["4"],
          },
        ], [
          {
            buttons: [["B"]],
            command: [""],
          },
        ]],
      },
      {
        name: "zilant high",
        input: [[
          {
            buttons: [["RT"]],
            command: [""],
          },
        ], [
          {
            buttons: [["RB"]],
            command: [""],
          },
        ],
        [
          {
            buttons: [["RB"]],
            command: [""],
          },
        ],
        ],
      },
      {
        name: "zilant low",
        input: [[
          {
            buttons: [["RT"]],
            command: [""],
          },
        ], [
          {
            buttons: [["RB"]],
            command: [""],
          },
        ],
        [
          {
            buttons: [["RT"]],
            command: [""],
          },
        ],
        ],
      },
      {
        name: "2 hit zilant",
        input: [[
          {
            buttons: [["RT"]],
            command: [""],
          },
        ], [
          {
            buttons: [["RB"]],
            command: [""],
          },
        ]
        ],
      },

    ],
  ],
  Specials: [
    [
      {
        name: "light triglav",
        input: [[
          {
            buttons: [["A"]],
            command: ["22"],
          },
        ]],
      },
      {
        name: "medium triglav",
        input: [[
          {
            buttons: [["B"]],
            command: ["22"],
          },
        ]],
      },
      {
        name: "heavy triglav",
        input: [[
          {
            buttons: [["RB"]],
            command: ["22"],
          },
        ]],
      },
      {
        name: "light overdrive triglav",
        input: [[
          {
            buttons: [["A", "B"]],
            command: ["22"],
          },
        ]],
      },
      {
        name: "medium overdrive triglav",
        input: [[
          {
            buttons: [["A", "RB"]],
            command: ["22"],
          },
        ]],
      },
      {
        name: "heavy overdrive triglav",
        input: [[
          {
            buttons: [["B", "RB"]],
            command: ["22"],
          },
        ]],
      },
    ],
    [
      {
        name: "light departure",
        input: [[
          {
            buttons: [["A"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "medium departure",
        input: [[
          {
            buttons: [["B"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "heavy departure",
        input: [[
          {
            buttons: [["RB"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "light overdrive departure",
        input: [[
          {
            buttons: [["A", "B"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "medium overdrive departure",
        input: [[
          {
            buttons: [["A", "RB"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "heavy overdrive departure",
        input: [[
          {
            buttons: [["B", "RB"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "light departure: window",
        input: [[
          {
            buttons: [["A"]],
            command: ["214"],
          },
        ]],
        dependencies: ["jp-light-departure|jp-medium-departure|jp-heavy-departure|jp-light-overdrive-departure|jp-medium-overdrive-departure|jp-heavy-overdrive-departure"]
      },
      {
        name: "medium departure: window",
        input: [[
          {
            buttons: [["B"]],
            command: ["214"],
          },
        ]],
        dependencies: ["jp-light-departure|jp-medium-departure|jp-heavy-departure|jp-light-overdrive-departure|jp-medium-overdrive-departure|jp-heavy-overdrive-departure"]
      },
      {
        name: "departure: shadow",
        input: [[
          {
            buttons: [["B"]],
            command: ["214"],
          },
        ]],
        dependencies: ["jp-light-departure|jp-medium-departure|jp-heavy-departure|jp-light-overdrive-departure|jp-medium-overdrive-departure|jp-heavy-overdrive-departure"]
      }
    ],
    [
      {
        name: "light stribog",
        input: [[
          {
            buttons: [["A"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "medium stribog",
        input: [[
          {
            buttons: [["B"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "heavy stribog",
        input: [[
          {
            buttons: [["RB"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive stribog",
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
        name: "light torbalan",
        input: [[
          {
            buttons: [["D"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "medium torbalan",
        input: [[
          {
            buttons: [["C"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "heavy torbalan",
        input: [[
          {
            buttons: [["RT"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive torbalan",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["236"],
          },
        ]],
      },
      {
        name: "torbalan feint",
        input: [[
          {
            buttons: [["D:(hold)"], ["C:(hold)"], ["RT:(hold)"]],
            command: ["236"],
          },
        ]],
      },
    ],
    [
      {
        name: "embrace",
        input: [[
          {
            buttons: common.anyKick,
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive embrace",
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
        name: "amnesia",
        input: [[
          {
            buttons: common.anyKick,
            command: ["22"],
          },
        ]],
      },
      {
        name: "overdrive amnesia",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["22"],
          },
        ]],
      },
    ]
  ],
  "Super Arts": [
    [
      {
        name: "chornobog",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["236236"],
          },
        ]],
      },
      {
        name: "lovushka",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["214214"],
          },
        ]],
      },
      {
        name: "interdiction",
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
generatePresetIds(preset, "jp")

module.exports = { preset };
