const common = require("../../local-commonButtonVariants")


const { generatePresetIds } = require("../../../../utils/presetIdsUtil")

const preset = {
  "Command Normals": [
    [
      {
        name: "tensei kick",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["2"],
          },
        ]],
      },
    ],
    [
      {
        name: "falling star kick",
        input: [[
          {
            buttons: [["C"]],
            command: ["6"],
          },
        ]],
      },
      {
        name: "drink level 2 falling star kick",
        input: [[
          {
            buttons: [["C"]],
            command: ["6"],
          },
        ]],
        playerState: ["drink level 2+"]
      },
    ],
    [
      {
        name: "hermit's elbow",
        input: [[
          {
            buttons: [["RB"]],
            command: ["4"],
          },
        ]],
      },
      {
        name: "drink level 3 hermit's elbow",
        input: [[
          {
            buttons: [["RB"]],
            command: ["4"],
          },
        ]],
        playerState: ["drink level 3+"]
      },
    ], [
      {
        name: "senei kick",
        input: [[
          {
            buttons: [["RT"]],
            command: ["6"],
          },
        ]],
      },
      {
        name: "drink level 4 senei kick",
        input: [[
          {
            buttons: [["RT"]],
            command: ["6"],
          },
        ]],
        playerState: ["drink level 4"]
      },
    ]
  ],
  "Target Combos": [
    [
      {
        name: "phantom sway",
        input: [[
          {
            buttons: [["RT"]],
            command: ["2"],
          },
        ], [
          {
            buttons: [["RT"]],
            command: [""],
          },
        ]],
      },
      {
        name: "phantom sway drink",
        input: [[
          {
            buttons: [["RT"]],
            command: ["2"],
          },
        ], [
          {
            buttons: [["RT"]],
            command: [""],
          },
        ], [
          {
            buttons: common.anyPunch,
            command: [""],
          },
        ]],
      },
    ],
    [
      {
        name: "bitter strikes",
        input: [[
          {
            buttons: [["A"]],
            command: [""],
          },
        ], [
          {
            buttons: [["D"]],
            command: [""],
          },
        ],
        [
          {
            buttons: [["B"]],
            command: [""],
          },
        ],
        ],
        playerState: ["drink level 1+"]
      },
      {
        name: "2 hit bitter strikes",
        input: [[
          {
            buttons: [["A"]],
            command: [""],
          },
        ], [
          {
            buttons: [["D"]],
            command: [""],
          },
        ],],
        playerState: ["drink level 1+"]
      },
    ],
    [
      {
        name: "full moon kick",
        input: [
          [
            {
              buttons: [["C"]],
              command: ["6"],
            },
          ], [
            {
              buttons: [["C"]],
              command: [""],
            },
          ]
        ],
        playerState: ["drink level 2+"]
      },
      {
        name: "full moon kick drink",
        input: [
          [
            {
              buttons: [["C"]],
              command: ["6"],
            },
          ], [
            {
              buttons: [["C"]],
              command: [""],
            },
          ], [
            {
              buttons: common.anyPunch,
              command: [""],
            },
          ],
        ],
        playerState: ["drink level 2+"]
      },
    ],
    [
      {
        name: "intoxicated assault",
        input: [
          [
            {
              buttons: [["RB"]],
              command: ["4"],
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
        playerState: ["drink level 3+"]
      },
      {
        name: "drink level 2 intoxicated assault",
        input: [
          [
            {
              buttons: [["RB"]],
              command: ["4"],
            },
          ], [
            {
              buttons: [["RB"]],
              command: [""],
            },
          ],
        ],
        playerState: ["drink level 3+"]
      },
    ],
    [
      {
        name: "2 hit ransui haze",
        input: [
          [
            {
              buttons: [["RT"]],
              command: ["6"],
            },
          ], [
            {
              buttons: [["RT"]],
              command: ["4"],
            },
          ],
        ],
        playerState: ["drink level 4"]
      },
      {
        name: "ransui haze headbutt",
        input: [
          [
            {
              buttons: [["RT"]],
              command: ["6"],
            },
          ], [
            {
              buttons: [["RT"]],
              command: ["4"],
            },
          ],
          [
            {
              buttons: common.anyPunch,
              command: [""],
            },
          ],
        ],
        playerState: ["drink level 4"]
      },
      {
        name: "ransui haze triple fist",
        input: [
          [
            {
              buttons: [["RT"]],
              command: ["6"],
            },
          ], [
            {
              buttons: [["RT"]],
              command: ["4"],
            },
          ],
          [
            {
              buttons: [["A:(delay)"], ["B:(delay)"], ["C:(delay)"]],
              command: [""],
            },
          ],
        ],
        playerState: ["drink level 4"]
      },
      {
        name: "ransui haze drnk",
        input: [
          [
            {
              buttons: [["RT"]],
              command: ["6"],
            },
          ], [
            {
              buttons: [["RT"]],
              command: ["4"],
            },
          ],
          [
            {
              buttons: [["A:(long delay)"], ["B:(long delay)"], ["C:(long delay)"]],
              command: [""],
            },
          ],
        ],
        playerState: ["drink level 4"]
      },
    ]
  ],
  Specials: [
    [
      {
        name: "the devil inside",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["22"],
          },
        ]],
      },
      {
        name: "the devil inside hold",
        input: [[
          {
            buttons: [["A:(hold)"], ["B:(hold)"], ["C:(hold)"]],
            command: ["22"],
          },
        ]],
      },
    ],
    [
      {
        name: "light freeflow strikes",
        input: [[
          {
            buttons: [["A"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "medium freeflow strikes",
        input: [[
          {
            buttons: [["B"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "heavy freeflow strikes",
        input: [[
          {
            buttons: [["RB"]],
            command: ["236"],
          },
        ]],
      },
      {
        name: "overdrive freeflow strikes",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["236"],
          },
        ]],
      },
      {
        name: "drink level 4 light freeflow strikes",
        input: [[
          {
            buttons: [["A"]],
            command: ["236"],
          },
        ]],
        playerState: ["drink level 4"]
      },
      {
        name: "drink level 4 medium freeflow strikes",
        input: [[
          {
            buttons: [["B"]],
            command: ["236"],
          },
        ]],
        playerState: ["drink level 4"]

      },
      {
        name: "drink level 4 heavy freeflow strikes",
        input: [[
          {
            buttons: [["RB"]],
            command: ["236"],
          },
        ]],
        playerState: ["drink level 4"]

      },
      {
        name: "drink level 4 overdrive freeflow strikes",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["236"],
          },
        ]],
        playerState: ["drink level 4"]
      },
    ],
    [
      {
        name: "freeflow strikes punch followup",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["6"],
          },
        ]],
        dependencies: ["jamie-light-freeflow-strikes|jamie-medium-freeflow-strikes|jamie-heavy-freeflow-strikes|jamie-overdrive-freeflow-strikes"]
      },
      {
        name: "drink level 4 freeflow strikes punch followup",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["6"],
          },
        ]],
        playerState: ["drink level 4"],
        dependencies: ["jamie-drink-level-4-light-freeflow-strikes|jamie-drink-level-4-medium-freeflow-strikes|jamie-drink-level-4-heavy-freeflow-strikes|jamie-drink-level-4-overdrive-freeflow-strikes"]
      },
    ],
    [
      {
        name: "freeflow strikes punch followup 2",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["6"],
          },
        ]],
        dependencies: ["jamie-freeflow-strikes-punch-followup"]
      },
      {
        name: "drink level 4 freeflow strikes punch followup 2",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["6"],
          },
        ]],
        dependencies: ["jamie-drink-level-4-freeflow-strikes-punch-followup"]
      },
    ],
    [
      {
        name: "freeflow strikes kick followup",
        input: [[
          {
            buttons: common.anyKick,
            command: ["6"],
          },
        ]],
        dependencies: ["jamie-light-freeflow-strikes|jamie-medium-freeflow-strikes|jamie-heavy-freeflow-strikes|jamie-overdrive-freeflow-strikes|jamie-drink-level-4-light-freeflow-strikes|jamie-drink-level-4-medium-freeflow-strikes|jamie-drink-level-4-heavy-freeflow-strikes|jamie-drink-level-4-overdrive-freeflow-strikes"]
      },
      {
        name: "freeflow strikes kick followup 2",
        input: [[
          {
            buttons: common.anyKick,
            command: ["6"],
          },
        ]],
        dependencies: ["jamie-freeflow-strikes-kick-followup"]
      },
    ],
    [
      {
        name: "light swagger step",
        input: [[
          {
            buttons: [["A"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "medium swagger step",
        input: [[
          {
            buttons: [["B"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "heavy swagger step",
        input: [[
          {
            buttons: [["RB"]],
            command: ["214"],
          },
        ]],
      },
      {
        name: "overdrive swagger step",
        input: [[
          {
            buttons: common.any2Punches,
            command: ["214"],
          },
        ]],
      },
      {
        name: "swagger hermit punch",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["6"],
          },
        ]],
        dependencies: ["jamie-light-swagger-step|jamie-medium-swagger-step|jamie-heavy-swagger-step|jamie-overdrive-swagger-step|"],
        playerState: ["drink level 4"]
      },
    ],
    [
      {
        name: "light arrow kick",
        input: [[
          {
            buttons: [["D"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "medium arrow kick",
        input: [[
          {
            buttons: [["C"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "heavy arrow kick",
        input: [[
          {
            buttons: [["RT"]],
            command: ["623"],
          },
        ]],
      },
      {
        name: "overdrive arrow kick",
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
        name: "luminous dive kick",
        input: [[
          {
            buttons: common.anyKick,
            command: ["214"],
          },
        ]],
        playerState: ["jumping", "drink level 1+"]
      },
      {
        name: "overdrive luminous dive kick",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["214"],
          },
        ]],
        playerState: ["jumping", "drink level 1+"]
      },
    ],
    [
      {
        name: "light bakkai",
        input: [[
          {
            buttons: [["D"]],
            command: ["236"],
          },
        ]],
        playerState: ["drink level 2+"]

      },
      {
        name: "medium bakkai",
        input: [[
          {
            buttons: [["C"]],
            command: ["236"],
          },
        ]],
        playerState: ["drink level 2+"]
      },
      {
        name: "heavy bakkai",
        input: [[
          {
            buttons: [["RT"]],
            command: ["236"],
          },
        ]],
        playerState: ["drink level 2+"]
      },
      {
        name: "overdrive bakkai",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["236"],
          },
        ]],
        playerState: ["drink level 2+"]
      },
    ],
    [
      {
        name: "tenshin",
        input: [[
          {
            buttons: common.anyKick,
            command: ["63214"],
          },
        ]],
        playerState: ["drink level 3+"]
      },
      {
        name: "overdrive tenshin",
        input: [[
          {
            buttons: common.any2Kicks,
            command: ["63214"],
          },
        ]],
        playerState: ["drink level 3+"]
      },
    ]
  ],
  "Super Arts": [
    [
      {
        name: "breakin'",
        input: [[
          {
            buttons: common.anyKick,
            command: ["236236"],
          },
        ]],
      },
      {
        name: "breakin' drink",
        input: [[
          {
            buttons: [[]],
            command: ["2"],
          },
        ]],
        dependencies:["jamie-breakin'"]
      },
    ], [
      {
        name: "the devil's song",
        input: [[
          {
            buttons: common.anyPunch,
            command: ["214214"],
          },
        ]],
      },],
    [
      {
        name: "getsuga saiho",
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
generatePresetIds(preset, "jamie")

module.exports = { preset };
